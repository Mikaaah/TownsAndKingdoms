/* Open the right chapter when search or a dependency points at a quest row. */
(() => {
  const reveal = () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target || !target.id.startsWith('quest-')) return;
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === 'DETAILS') parent.open = true;
    }
    target.scrollIntoView({block: 'start'});
  };
  window.addEventListener('hashchange', reveal);
  reveal();
})();
