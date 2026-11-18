import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export function data(name: string, fallback: any = []): any {
  const file = join(process.cwd(), 'src/data', name + '.json');
  return existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : fallback;
}
export const base = '/TownsAndKingdoms';
export function href(path = '') { return base + '/' + path.replace(/^\/+/, ''); }
export function pretty(value: any): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  return value.name || value.title || value.label || value.id || '';
}
export function words(id: string): string {
  return String(id || '').split(':').pop()!.replace(/[/_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}
export function fmt(n: number): string { return Number(n || 0).toLocaleString('en-US'); }
