import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { markdownToHtml } from 'satteri';

const archive = 'archive/2026-10-02/';
export const tk2Pages = [
  {slug:'features', title:'Features', source:'Features.md', intro:'Explore the world, building mods, combat and automation of Towns & Kingdoms 2.', leadHeading:true, icon:'map'},
  {slug:'progression', title:'Progression', source:'Progression.md', intro:'Follow the quest book through eleven tiers of Create-centered automation.', icon:'scroll'},
  {slug:'modlist', title:'Mod list', source:'Modslist.md', intro:'Find the mods listed in the original Forge 1.20.1 handbook.', leadHeading:true, icon:'journal'},
  {slug:'changelog', title:'Changelog', source:'Changelogs.md', intro:'Read the archived release notes for A New World and its hotfixes through 3.05.', leadHeading:true, icon:'hourglass'},
  {slug:'a-new-world', title:'A New World', source:'A-New-World-|-The-1.20.1-Update.md', intro:'Read the original announcement for the move from Minecraft 1.18.2 to 1.20.1.', leadHeading:true, icon:'lantern'},
  {slug:'server-installation', title:'Server installation', source:'Server-Installation.md', intro:'Find the archived instructions for running a TK2 dedicated server.', icon:'key'},
  {slug:'screenshots', title:'Screenshots', source:'Screenshots.md', intro:'Share your Towns & Kingdoms 2 builds and adventures with the community.', icon:'mirror'},
  {slug:'original-home', title:'Original wiki cover', source:'Home.md', intro:'The cover of the original Towns & Kingdoms 2 GitHub wiki.', icon:'bookopen'},
];

const wikiLinks = new Map([
  ['Mods-list', 'modlist'],
  ...tk2Pages.map(page => [page.source.slice(0, -3), page.slug]),
]);
const coverAlt = {
  XDnJCmA: 'Open the TK2 mod list',
  XO140ox: 'Towns &amp; Kingdoms 2',
  B8bEXiz: 'Join the Towns &amp; Kingdoms Discord',
  gHfCIXi: 'Visit the BisectHosting partner page',
};
export const tk2ArchivePath = source => archive + encodeURIComponent(source);

export const tk2Nav = [
  {title:'Towns & Kingdoms 2', links:[['Overview', 'tk2/', 'bookred'], ...tk2Pages.slice(0, 5).map(({title, slug, icon}) => [title, `tk2/${slug}/`, icon])]},
  {title:'Server & archive', links:tk2Pages.slice(5).map(({title, slug, icon}) => [title, `tk2/${slug}/`, icon])},
];

export async function renderTk2Document(page, projectBase) {
  const source = readFileSync(resolve(process.cwd(), 'public', archive, page.source), 'utf8');
  const { html: markup } = await markdownToHtml(source, { features: { gfm: true } });
  const links = markup.replace(/href="https:\/\/github\.com\/Mikaaah\/TownsAndKingdoms\/wiki\/([^#"]+)(#[^"]*)?"/g, (original, path, hash = '') => {
    const slug = wikiLinks.get(decodeURIComponent(path));
    return slug ? `href="${projectBase}tk2/${slug}/${hash}"` : original;
  }).replace('href="bisecthosting.com/Mika"', 'href="https://www.bisecthosting.com/mika"')
    .replace(/src="https:\/\/i\.imgur\.com\/(\w+)\.png" alt=""/g, (image, id) =>
      coverAlt[id] ? image.replace('alt=""', `alt="${coverAlt[id]}"`) : image
    );
  const headings = [];
  const usedIds = new Set();
  let firstHeading = true;
  const html = links.replace(/<h([1-6])>(.*?)<\/h\1>/g, (_, level, label) => {
    // Match the first archive's anchors, including repeated release headings.
    const text = label.replace(/<[^>]*>/g, '');
    const stem = text.replaceAll('"', '&quot;').toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/\s+/g, '-');
    let id = stem;
    for (let suffix = 1; usedIds.has(id); suffix++) id = `${stem}-${suffix}`;
    usedIds.add(id);
    const replaceTitle = firstHeading && page.leadHeading;
    firstHeading = false;
    if (replaceTitle) return `<span id="${id}"></span>`;

    const depth = page.slug === 'a-new-world' ? Math.max(2, Number(level) - 1)
      : page.slug === 'changelog' || page.slug === 'server-installation' ? Math.min(6, Number(level) + 1)
      : Math.max(2, Number(level));
    if (depth === 2) headings.push({id, text:text.replaceAll('&amp;', '&').replace(/^►\s*|^-\s+/g, '')});
    return `<h${depth} id="${id}">${label}</h${depth}>`;
  });

  return { html, headings };
}
