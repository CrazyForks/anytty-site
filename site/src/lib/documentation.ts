import catalog from './doc-catalog.json';
export interface DocNode { en: string; zh: string; path?: string; aliases?: string[]; children?: DocNode[] }
export const docTree: DocNode[] = catalog;
export function docContains(node: DocNode, path: string): boolean {
  return node.path === path || (node.children?.some(child => docContains(child, path)) ?? false);
}
export function docTrail(path: string, nodes = docTree): DocNode[] {
  for (const node of nodes) {
    if (node.path === path) return [node];
    if (node.children) { const trail = docTrail(path, node.children); if (trail.length) return [node, ...trail]; }
  }
  return [];
}
function flatten(nodes: DocNode[]): DocNode[] {
  return nodes.flatMap(node => node.path ? [node, ...flatten(node.children ?? [])] : flatten(node.children ?? []));
}
export const docPages = flatten(docTree);
export const docs = docPages.map(node => [node.path!, node.en, node.zh] as const);
