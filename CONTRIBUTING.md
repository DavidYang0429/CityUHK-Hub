<div align="center">

# 提交項目 · Contributing

**[粵語（繁體中文）](#粵語繁體中文) · [简体中文](#简体中文) · [English](#english)**

</div>

---

## 粵語（繁體中文）

項目作者透過 Pull Request 新增或修改 `repos/*.md`，請勿直接編輯解析產物 `web/public/data/`。

### 一鍵入口

- 提交項目：[新建 `repos/我的項目.md`](https://github.com/Warpshlczy/CityUHK-Hub/new/feature?filename=repos/my-project.md)（檔案建在 `feature` 分支上，提交即開 PR）
- 回報 Bug：[開 Bug Issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=bug&title=%5BBug%5D%20)（預填 `[Bug]` 標題與 `bug` 標籤）
- 功能建議 / 提問：[開建議 Issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=enhancement&title=%5BFeature%5D%20)（預填 `[Feature]` 標題與 `enhancement` 標籤）

### 分支模型

儲存庫只有三條長期分支，預設分支是 `main`；舊分支 `master` 已刪除，請統一使用 `main`：

| 分支 | 用途 | 收哪類 PR |
| --- | --- | --- |
| `main` | 穩定發布分支，線上的正式版本以它為準 | 只接受 `feature` / `dev` 的合併，不直接往上提交 |
| `feature` | 只丟 Markdown 檔案：`repos/*.md` | 提交項目的 PR，全部提到這裡 |
| `dev` | 網站改動與新功能：`web/`、`repos-parser/`、`scripts/`、工作流、文件 | 前端 / 解析器 / 文件類 PR |

**本文只講怎麼往 `feature` 提交項目**；改站點程式碼請從 `dev` 切分支並把 PR 提到 `dev`。一個 PR 只做一件事：只提交項目資訊的 PR 不要順帶改站點程式碼。

### 流程

1. 複製 `repos/_template.md`，改名為穩定的項目檔案名。
2. 填寫 front matter 和 Markdown 正文。
3. 在儲存庫根目錄本機執行：

```bash
npm install
npm run validate
npm run build
```

4. 從 `feature` 切分支（例如 `feat/add-my-project`），建立目標分支為 `feature` 的 Pull Request。CI 會校驗 front matter、項目 ID 和儲存庫網址是否重複，並跑一遍整站建置。
5. 維護者 review 合併後，會定期把 `feature` 合併進 `main`；**只有合併到 `main` 才會觸發發布**——由 `scripts/sync-and-build.sh` 或 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 在目標機器上拉取最新程式碼並重建。

### 約定

- `repoUrl` 必須是公開 GitHub 儲存庫網址。
- `author` 填寫 GitHub 使用者名稱；`authorName`、`major` 和 `enrollmentYear` 必須填寫作者的姓名、專業和入學年份。
- `enrollmentYear` 使用四位數字，例如 `2024`。
- `id` 可省略，解析器會根據儲存庫 owner 和 repo 生成；顯式填寫後不可隨意修改。
- `tags` 使用小寫短標籤，最多 12 個。
- 項目介紹正文寫在 front matter 後面，解析器會把它渲染成項目詳情頁的 HTML。
- `## Features` 段落完全可選：不寫或留空都不會展示 Features，也不會用 GitHub 儲存庫簡介補齊；想展示儲存庫 README，把項目介紹留空即可。
- `status: hidden` 的條目不會出現在網站上。
- 不要提交 `web/public/data/`，它是建置時自動生成的產物。

### 行為準則

參與本儲存庫即表示你同意遵守[行為準則](CODE_OF_CONDUCT.md)。

## 简体中文

项目作者通过 Pull Request 添加或修改 `repos/*.md`，不要直接编辑解析产物 `web/public/data/`。

### 一键入口

- 提交项目：[新建 `repos/我的项目.md`](https://github.com/Warpshlczy/CityUHK-Hub/new/feature?filename=repos/my-project.md)（文件建在 `feature` 分支上，提交即开 PR）
- 报告 Bug：[开 Bug Issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=bug&title=%5BBug%5D%20)（预填 `[Bug]` 标题与 `bug` 标签）
- 功能建议 / 提问：[开建议 Issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=enhancement&title=%5BFeature%5D%20)（预填 `[Feature]` 标题与 `enhancement` 标签）

### 分支模型

仓库只有三条长期分支，默认分支是 `main`；旧分支 `master` 已删除，请统一使用 `main`：

| 分支 | 用途 | 收哪类 PR |
| --- | --- | --- |
| `main` | 稳定发布分支，线上的正式版本以它为准 | 只接受 `feature` / `dev` 的合并，不直接往上提交 |
| `feature` | 只丢 Markdown 文件：`repos/*.md` | 提交项目的 PR，全部提到这里 |
| `dev` | 网站改动与新功能：`web/`、`repos-parser/`、`scripts/`、工作流、文档 | 前端 / 解析器 / 文档类 PR |

**本文只讲怎么往 `feature` 提交项目**；改站点代码请从 `dev` 切分支并把 PR 提到 `dev`。一个 PR 只做一件事：只提交项目信息的 PR 不要顺带改站点代码。

### 流程

1. 复制 `repos/_template.md`，改名为稳定的项目文件名。
2. 填写 front matter 和 Markdown 正文。
3. 在仓库根目录本地运行：

```bash
npm install
npm run validate
npm run build
```

4. 从 `feature` 切分支（例如 `feat/add-my-project`），创建目标分支为 `feature` 的 Pull Request。CI 会校验 front matter、项目 ID 和仓库地址是否重复，并跑一遍整站构建。
5. 维护者 review 合并后，会定期把 `feature` 合并进 `main`；**只有合并到 `main` 才会触发发布**——由 `scripts/sync-and-build.sh` 或 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 在目标机器上拉取最新代码并重建。

### 约定

- `repoUrl` 必须是公开 GitHub 仓库地址。
- `author` 填写 GitHub 用户名；`authorName`、`major` 和 `enrollmentYear` 必须填写作者的姓名、专业和入学年份。
- `enrollmentYear` 使用四位数字，例如 `2024`。
- `id` 可省略，解析器会根据仓库 owner 和 repo 生成；显式填写后不可随意修改。
- `tags` 使用小写短标签，最多 12 个。
- 项目介绍正文写在 front matter 后面，解析器会把它渲染成项目详情页的 HTML。
- `## Features` 段落完全可选：不写或留空都不会展示 Features，也不会用 GitHub 仓库简介补齐；想展示仓库 README，把项目介绍留空即可。
- `status: hidden` 的条目不会出现在站点上。
- 不要提交 `web/public/data/`，它是构建时自动生成的产物。

### 行为准则

参与本仓库即表示你同意遵守[行为准则](CODE_OF_CONDUCT.md)。

## English

Project authors add or modify `repos/*.md` through a Pull Request. Do not edit the parsed artifacts under `web/public/data/` directly.

### Quick links

- Submit a project: [create `repos/my-project.md`](https://github.com/Warpshlczy/CityUHK-Hub/new/feature?filename=repos/my-project.md) (the file is created on the `feature` branch — committing opens a PR)
- Report a bug: [open a Bug issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=bug&title=%5BBug%5D%20) (pre-fills the `[Bug]` title and the `bug` label)
- Feature request / question: [open a Feature issue](https://github.com/Warpshlczy/CityUHK-Hub/issues/new?labels=enhancement&title=%5BFeature%5D%20) (pre-fills the `[Feature]` title and the `enhancement` label)

### Branch model

The repository has three long-lived branches and the default branch is `main`. The old `master` branch has been deleted — please use `main` everywhere:

| Branch | Purpose | PRs it accepts |
| --- | --- | --- |
| `main` | Stable release branch; the live site tracks it | Merges from `feature` / `dev` only; never commit to it directly |
| `feature` | Markdown files only: `repos/*.md` | All project submissions go here |
| `dev` | Site changes and new features: `web/`, `repos-parser/`, `scripts/`, workflows, docs | Frontend / parser / docs PRs |

**This document only covers submitting a project to `feature`.** To change site code, branch off `dev` and open your PR against `dev`. One PR, one thing: a project-only PR should not carry site changes.

### Workflow

1. Copy `repos/_template.md` and rename it to a stable project filename.
2. Fill in the front matter and the Markdown body.
3. From the repository root, run locally:

```bash
npm install
npm run validate
npm run build
```

4. Branch off `feature` (for example `feat/add-my-project`) and open a Pull Request targeting `feature`. CI validates the front matter, project IDs, and duplicate repository URLs, then runs a full site build.
5. After a maintainer reviews and merges, `feature` is merged into `main` on a regular cadence. **Only a merge into `main` triggers a release** — `scripts/sync-and-build.sh` or [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) pulls the latest code onto the target machine and rebuilds.

### Conventions

- `repoUrl` must be a public GitHub repository URL.
- `author` is the GitHub username; `authorName`, `major`, and `enrollmentYear` are required and must be the author's real name, major, and enrollment year.
- `enrollmentYear` is a four-digit number, e.g. `2024`.
- `id` is optional — the parser derives it from the repository owner and name. Once set explicitly, do not change it casually.
- `tags` are short lowercase labels, 12 at most.
- The project description goes after the front matter; the parser renders it into the HTML of the project detail page.
- The `## Features` section is entirely optional: writing nothing or leaving it empty hides the Features block, and the GitHub repository description is not used as a fallback. To show the repository README instead, leave the project description empty.
- Entries with `status: hidden` never appear on the site.
- Do not commit `web/public/data/` — it is generated at build time.

### Code of Conduct

By participating in this repository you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).
