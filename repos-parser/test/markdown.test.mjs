import assert from 'node:assert/strict';
import { test } from 'node:test';
import { guessTagsFromReadme } from '../src/lib/markdown.js';

test('guessTagsFromReadme 只按完整单词匹配关键词', () => {
  assert.deepEqual(guessTagsFromReadme('Built with JavaScript, see google docs'), ['javascript']);
  assert.deepEqual(guessTagsFromReadme('A Java service; also uses Node.js'), ['node.js', 'java']);
});

test('guessTagsFromReadme 带上主语言，golang 归一为 go', () => {
  assert.deepEqual(guessTagsFromReadme('written in golang', { language: 'Go' }), ['go']);
  assert.deepEqual(guessTagsFromReadme('nothing relevant', { language: 'Rust' }), ['rust']);
});
