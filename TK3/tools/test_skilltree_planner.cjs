const assert = require('node:assert/strict');
const core = require('../handbook-source/skilltree-planner/planner-core.js');

const nodes = [
  {id:'tk3_origin', title:'Origin', group:'shared', isStartingPoint:true, requirements:[]},
  {id:'tk3_shared_path', title:'Shared Path', group:'shared', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_origin'}]},
  {id:'tk3_warrior_root', title:'Warrior Root', group:'class', branchClass:'warrior', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_shared_path'}]},
  {id:'tk3_warrior_gate', title:'Warrior Gate', group:'class', branchClass:'warrior', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_warrior_root'}]},
  {id:'tk3_berserker_skill', title:'Berserker Skill', group:'subclass', branchClass:'warrior', branchSubclass:'berserker', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_warrior_gate'}]},
  {id:'tk3_ranger_root', title:'Ranger Root', group:'class', branchClass:'ranger', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_shared_path'}]},
  {id:'tk3_prof_mining', title:'Mining', group:'profession', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_origin'}]},
  {id:'tk3_prof_alchemy', title:'Alchemy', group:'profession', requirements:[{type:'skilltree:learned_skill',skill_id:'skilltree:tk3_origin'}]}
];

let plan = core.planBuild({nodes, targets:['tk3_berserker_skill'], classId:'warrior', subclassId:'berserker', budget:4});
assert.equal(plan.valid, true);
assert.equal(plan.points, 4);
assert.equal(plan.order[0], 'tk3_origin');
assert.equal(plan.order.at(-1), 'tk3_berserker_skill');
assert.equal(plan.remaining, 0);

plan = core.planBuild({nodes, targets:['tk3_berserker_skill'], classId:'ranger', subclassId:'berserker'});
assert.equal(plan.valid, false);
assert.match(plan.invalid[0].message, /Warrior/);

plan = core.planBuild({nodes, targets:['tk3_berserker_skill'], classId:'warrior'});
assert.equal(plan.valid, false);
assert.match(plan.invalid[0].message, /Choose one subclass/);

plan = core.planBuild({nodes, targets:['tk3_prof_mining','tk3_prof_alchemy'], budget:1});
assert.equal(plan.valid, true);
assert.equal(plan.points, 2);
assert.equal(plan.remaining, -1);

plan = core.planBuild({nodes, targets:['tk3_warrior_gate','tk3_warrior_root'], classId:'warrior'});
assert.equal(plan.valid, true);
assert.equal(plan.points, 3);
assert.equal(plan.order.filter(id => id === 'tk3_warrior_root').length, 1);

plan = core.planBuild({nodes, targets:['missing_node']});
assert.equal(plan.valid, false);
assert.match(plan.invalid[0].message, /missing/);

console.log('Skilltree planner core passed: prerequisite closure, free origin, class/subclass access, duplicate goals, unlimited professions, and budget overflow.');
