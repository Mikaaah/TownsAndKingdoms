(() => {
  const config = document.documentElement.dataset;
  if (!config.destination) return;
  const target = new URL(config.destination, location.origin);
  for (const [key, value] of new URLSearchParams(location.search)) target.searchParams.set(key, value);
  const oldHash = location.hash.slice(1);
  if (config.hashMode === 'node' && oldHash) {
    if (oldHash.startsWith('node-')) target.hash = new URLSearchParams({ node: decodeURIComponent(oldHash.slice(5)) }).toString();
    else if (oldHash.includes('node=') || oldHash.includes('build=')) target.hash = oldHash;
  } else if (config.hashMode === 'origin' && oldHash.startsWith('origin-')) target.hash = oldHash;
  else if (config.hashMode === 'preserve' && oldHash) target.hash = oldHash;
  location.replace(target.pathname + target.search + target.hash);
})();
