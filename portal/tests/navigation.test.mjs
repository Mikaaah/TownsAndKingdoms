import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { JSDOM } from 'jsdom';

const root=resolve(import.meta.dirname,'..');
const route=name=>readFileSync(resolve(root,'dist',name?name+'/index.html':'index.html'),'utf8');
test('navigation exposes the feature, custom-mod and community routes',()=>{
 const dom=new JSDOM(route(''));
 const links=new Set(Array.from(dom.window.document.querySelectorAll('#site-sidebar a')).map(a=>a.getAttribute('href')));
 for(const page of ['features/','custom-mods/','servers/','guides/server-setup/','discord/','support/','faq/'])assert(links.has('/TownsAndKingdoms/'+page),page);
 dom.window.close();
});
test('mobile navigation opens, closes on Escape and closes after selecting a link',()=>{
 const dom=new JSDOM(route(''),{url:'https://mikaaah.github.io/TownsAndKingdoms/',runScripts:'outside-only'});
 const {window}=dom;
 Object.defineProperty(window,'innerWidth',{value:375,writable:true});
 const source=readFileSync(resolve(root,'src/scripts/global.ts'),'utf8').replaceAll('import.meta.env.BASE_URL',JSON.stringify('/TownsAndKingdoms/')).replaceAll('import.meta.url',JSON.stringify('https://mikaaah.github.io/TownsAndKingdoms/global.js'));
 window.eval(stripTypeScriptTypes(source,{mode:'strip'}).replace(/export\s*\{\s*\};?/g,''));
 const button=window.document.querySelector('#menu-toggle'),sidebar=window.document.querySelector('#site-sidebar');
 const backdrop=window.document.querySelector('#nav-backdrop');
 assert.equal(sidebar.inert,true);assert.equal(backdrop.hidden,true);
 button.click();assert.equal(button.getAttribute('aria-expanded'),'true');assert.equal(button.getAttribute('aria-label'),'Close navigation');assert(sidebar.classList.contains('is-open'));
 assert.equal(sidebar.inert,false);assert.equal(backdrop.hidden,false);
 assert.equal(window.document.activeElement,sidebar.querySelector('a'));
 window.document.dispatchEvent(new window.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
 assert.equal(button.getAttribute('aria-expanded'),'false');assert(!sidebar.classList.contains('is-open'));
 assert.equal(sidebar.inert,true);assert.equal(backdrop.hidden,true);assert.equal(window.document.activeElement,button);
 button.click();
 const event=new window.MouseEvent('click',{bubbles:true,cancelable:true});sidebar.querySelector('a').addEventListener('click',e=>e.preventDefault(),{once:true});sidebar.querySelector('a').dispatchEvent(event);
 assert(!sidebar.classList.contains('is-open'));assert.equal(button.getAttribute('aria-label'),'Open navigation');
 const css=readFileSync(resolve(root,'src/styles/global.css'),'utf8');
 assert.match(css,/\.sidebar\.is-open\{[^}]*transform:translateX\(0\)/);
 assert(!css.includes('.sidebar.open{'));
 button.click();assert(sidebar.classList.contains('is-open'));window.innerWidth=1200;window.dispatchEvent(new window.Event('resize'));assert.equal(button.getAttribute('aria-expanded'),'false');assert(!sidebar.classList.contains('is-open'));
 assert.equal(sidebar.inert,false);assert.equal(backdrop.hidden,true);
 window.innerWidth=375;window.dispatchEvent(new window.Event('resize'));button.click();backdrop.click();
 assert.equal(sidebar.inert,true);assert.equal(button.getAttribute('aria-expanded'),'false');assert.equal(window.document.activeElement,button);
 button.click();button.focus();button.click();
 assert.equal(button.getAttribute('aria-expanded'),'false');
 button.click();
 const themeToggle=window.document.querySelector('#theme-toggle');themeToggle.focus();
 assert.equal(button.getAttribute('aria-expanded'),'false');assert.equal(window.document.activeElement,themeToggle);
 dom.window.close();
});
test('features use actual weapon and profession artwork, and custom mods match the installed manifest',()=>{
 const features=new JSDOM(route('features')),custom=new JSDOM(route('custom-mods'));
 const art=features.window.document.querySelectorAll('.feature-weapon-art img,.feature-professions img');
 assert(art.length>=12);
 for(const image of art){const path=image.getAttribute('src').replace('/TownsAndKingdoms/','');assert(existsSync(resolve(root,'public',path)),path);}
 const entries=custom.window.document.querySelectorAll('.custom-mod');assert.equal(entries.length,9);
 const installed=JSON.parse(readFileSync(resolve(root,'src/data/mods.json'),'utf8'));
 const official=new Set(installed.map(mod=>mod.url));
 for(const entry of entries){const link=Array.from(entry.querySelectorAll('a')).find(a=>a.href.includes('curseforge.com'));assert(link);assert(official.has(link.href));}
 features.window.close();custom.window.close();
});
