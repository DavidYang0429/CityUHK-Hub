import { parseRepoUrl } from './github.js';
import { slugify } from './slug.js';

/** 仓库地址的规范化形式，用于查重（忽略大小写、末尾斜杠与 .git） */
export function canonicalRepoUrl(url) {
  return String(url).toLowerCase().replace(/\/+$/, '').replace(/\.git$/, '');
}

/**
 * 项目 id：front matter 显式填写的 id 优先，否则由仓库 owner 与 repo 生成。
 * 校验与构建必须使用同一个函数，否则两边查重的 id 会对不上。
 */
export function deriveProjectId(meta) {
  if (meta.id) return meta.id;
  const ref = parseRepoUrl(meta.repoUrl);
  return ref ? slugify(`${ref.owner}-${ref.repo}`) : null;
}
