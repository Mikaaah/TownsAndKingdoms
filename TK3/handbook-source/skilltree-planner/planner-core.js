(function(root, factory) {
  var api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.TK3PlannerCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function() {
  "use strict";
  function human(id) {
    return String(id || "").replace(/^tk3_/, "").replace(/_/g, " ")
      .replace(/\b[a-z]/g, function(ch) { return ch.toUpperCase(); });
  }
  function eligibilityMessage(node, selection) {
    if (!node || node.isStartingPoint) return "";
    selection = selection || {};
    if (node.group === "class") {
      if (!selection.classId) return "Choose a class before planning class skills.";
      if (node.branchClass !== selection.classId) return "This skill belongs to " + human(node.branchClass) + ". Select that class first.";
    }
    if (node.group === "subclass") {
      if (!selection.classId) return "Choose a class before planning subclass skills.";
      if (node.branchClass !== selection.classId) return "This skill belongs to " + human(node.branchClass) + ". Select that class first.";
      if (!selection.subclassId) return "Choose one subclass before planning its skills.";
      if (node.branchSubclass !== selection.subclassId) return "This skill belongs to " + human(node.branchSubclass) + ". Select that subclass first.";
    }
    return "";
  }
  function planBuild(options) {
    options = options || {};
    var nodes = options.nodes || [];
    var byId = new Map(nodes.map(function(node) { return [node.id, node]; }));
    var targets = Array.from(new Set(options.targets || []));
    var selection = { classId: options.classId || "", subclassId: options.subclassId || "" };
    var order = [], planned = new Set(), invalid = [];
    targets.forEach(function(targetId) {
      var localOrder = [], localSet = new Set(), visiting = new Set(), failure = "";
      function visit(id) {
        if (failure || localSet.has(id)) return;
        if (visiting.has(id)) { failure = "A prerequisite cycle reaches " + id + "."; return; }
        var node = byId.get(id);
        if (!node) { failure = "The node " + id + " is missing from this tree version."; return; }
        var access = eligibilityMessage(node, selection);
        if (access) { failure = node.title + ": " + access; return; }
        visiting.add(id);
        var requirements = node.requirements || [];
        for (var i = 0; i < requirements.length; i++) {
          var requirement = requirements[i];
          if (requirement.type !== "skilltree:learned_skill") { failure = "The requirement on " + node.title + " is not supported by this planner."; break; }
          var requiredId = String(requirement.skill_id || "").replace(/^skilltree:/, "");
          if (!requiredId) { failure = "A prerequisite ID is missing for " + node.title + "."; break; }
          visit(requiredId);
          if (failure) break;
        }
        visiting.delete(id);
        if (!failure && !localSet.has(id)) { localSet.add(id); localOrder.push(id); }
      }
      visit(targetId);
      if (failure) invalid.push({ target: targetId, message: failure });
      else localOrder.forEach(function(id) {
        if (!planned.has(id)) { planned.add(id); order.push(id); }
      });
    });
    var points = order.reduce(function(total, id) {
      var node = byId.get(id);
      return total + (node && node.isStartingPoint ? 0 : 1);
    }, 0);
    var budget = Number.isFinite(Number(options.budget)) ? Math.max(0, Number(options.budget)) : 150;
    return { targets: targets, order: order, planned: planned, invalid: invalid, points: points, budget: budget, remaining: budget - points, valid: invalid.length === 0 };
  }
  return { eligibilityMessage: eligibilityMessage, planBuild: planBuild };
});
