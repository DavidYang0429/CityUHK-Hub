import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createGithubClient } from '../src/lib/github.js';

const config = { userAgent: 'test', githubToken: '', githubTimeoutMs: 1000 };
const ref = { owner: 'o', repo: 'r' };

function clientFor(status, headers = {}) {
  const fetchImpl = async () => new Response('{}', { status, headers });
  return createGithubClient(config, { fetchImpl });
}

test('429 与配额耗尽的 403 报限流', async () => {
  await assert.rejects(clientFor(429).fetchRepoMeta(ref), /调用次数已达上限/);
  await assert.rejects(
    clientFor(403, { 'x-ratelimit-remaining': '0' }).fetchRepoMeta(ref),
    /调用次数已达上限/,
  );
  await assert.rejects(clientFor(403, { 'retry-after': '60' }).fetchRepoMeta(ref), /调用次数已达上限/);
});

test('普通 403 不再被误报为限流', async () => {
  await assert.rejects(
    clientFor(403, { 'x-ratelimit-remaining': '42' }).fetchRepoMeta(ref),
    /GitHub 拒绝访问仓库 o\/r/,
  );
});
