# Awakening 觉醒计划

## 项目一句话说明

Awakening 觉醒计划是一个围绕“AI 时代，个体和组织如何完成重构”的长期探索项目，当前用于沉淀个人学习、B 端行业实验、C 端用户验证和个人 IP 叙事的上下文。

## 当前阶段

已知事实：

- 当前处于 Codex 上下文同步包搭建阶段。
- 当前仓库已建立基础 Markdown 文档，用于保存项目背景、协作规则和任务状态。

判断：

- 当前还不适合直接进入大规模开发，应该先确认产品形态、技术栈、最小验证目标和真实用户场景。

## 项目目标

已知事实：

- 长期命题：AI 时代，个体和组织如何完成重构。
- 身份叙事：一个软件工程学生，试图用 30 天、120 天、一年，亲自探索 AI 时代个体和传统行业如何被重构。

当前主线：

- 考研基本盘：保持长期学习和学历路径，不能被创业实验完全挤压。
- B 端实验：从建筑行业切入，验证传统行业真实 AI 工作流改造机会。
- C 端实验：验证年轻人 AI 职业重构需求、内容传播和用户转化。
- 个人 IP 叙事：记录一个软件工程学生亲自探索 AI 时代个体与组织重构的过程。

## 当前已知信息

- 项目名称：Awakening 觉醒计划。
- 当前仓库根目录已包含 `AGENTS.md` 和 `docs/`。
- 当前 `docs/` 下包含项目上下文、产品上下文、任务池和当前任务状态文档。
- 当前仓库已新增一个静态前端单页 MVP，用于交付《AI 时代个人竞争力重构报告》。

## 待确认信息

- 当前项目是否最终会发展为网站、App、自动化工具、内容产品、社群服务、训练营或其他形态。
- 目标用户分层。
- 30 天内最重要的单一验证目标。
- B 端建筑行业的具体切入场景、客户画像、工作流和试点对象。
- C 端用户的核心痛点、交付形态、转化路径和关键指标。
- 技术栈、运行方式、部署方式。

## 本地运行方式

已知事实：

- 当前前端 MVP 使用 React + TypeScript + Vite。
- PowerShell 可能因执行策略拦截 `npm.ps1`，本项目建议在 PowerShell 中使用 `npm.cmd`。

首次安装依赖：

```powershell
npm.cmd install
```

本地开发：

```powershell
npm.cmd run dev
```

构建验证：

```powershell
npm.cmd run build
```

本地预览：

```powershell
npm.cmd run preview
```

## 技术栈

当前真实结构：

- React
- TypeScript
- Vite
- 普通 CSS

判断：

- 当前阶段不做登录、数据库、后台、支付或真实 AI API。
- 报告内容通过 `src/data/reportData.ts` 维护，便于后续替换不同用户的数据。

## 目录结构说明

基于当前真实目录结构：

```text
Awakening觉醒计划/
├── .git/
├── .gitignore
├── README.md
├── AGENTS.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── data/
│       └── reportData.ts
└── docs/
    ├── CURRENT_TASK_STATE.md
    ├── MASTER_CONTEXT.md
    ├── PRODUCT_CONTEXT.md
    └── TASKS.md
```

文件作用：

- `README.md`：项目入口说明，帮助快速了解项目名称、阶段、目标、运行状态和目录结构。
- `AGENTS.md`：Codex / AI 助手工作规则、代码修改流程、禁止事项、测试要求和不确定信息处理方式。
- `.gitignore`：排除依赖、构建产物和本地开发日志。
- `package.json`：前端 MVP 的依赖和运行脚本。
- `package-lock.json`：锁定依赖版本，保证安装结果可复现。
- `src/data/reportData.ts`：报告结构化数据，后续替换不同用户报告时优先修改这里。
- `src/App.tsx`：报告交付页组件结构。
- `src/styles.css`：移动端优先的页面视觉样式。
- `docs/MASTER_CONTEXT.md`：长期命题、身份叙事、B/C 端实验、个人 IP、考研基本盘和当前不确定性。
- `docs/PRODUCT_CONTEXT.md`：产品相关上下文，包括 B 端、C 端和个人 IP 的产品假设。
- `docs/TASKS.md`：任务池和近期优先任务。
- `docs/CURRENT_TASK_STATE.md`：当前 Codex 任务状态、风险、已修改文件和下一步行动。

## 下一步开发计划

建议顺序：

1. 使用当前页面交付 1-3 个真实访谈用户的报告，观察用户是否愿意继续反馈或咨询。
2. 根据真实反馈调整报告内容密度、CTA 文案和作品集路径展示。
3. 如果需要批量生成，再考虑模板化数据输入方式；当前阶段不要提前做登录、后台或数据库。
