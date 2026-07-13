# AI 时代个人竞争力重构报告交付页复用指南

本文件用于在新的 Codex 对话中复用第一版报告交付页的产品结构、视觉风格和工程约束。新建第二个用户报告页前，先阅读本文件，再改数据和页面。

## 可直接复制给新 Codex 对话的任务说明

你现在是 Awakening 觉醒计划的前端产品工程师和产品设计师。请基于当前仓库已有的报告交付页 MVP，为新的用户报告生成同风格页面。

重要部署隔离规则：

- 当前已上线的用户 A 报告保留在现有 GitHub 仓库 `main` 分支和现有 Vercel 项目中，不要在 `main` 上直接替换成用户 B 数据。
- 新用户报告必须先单独开分支，例如 `codex/user-b-report`，只在该分支上替换 `src/data/reportData.ts`。
- 如果用户 A 和用户 B 都需要长期分别打开，最终必须给用户 B 使用单独的 Vercel 项目或单独 GitHub 仓库，生成独立公网链接。
- 不要把用户 B 分支合并回 `main`，除非明确决定用 B 替换 A 的线上主链接。

必须先阅读：

- `README.md`
- `AGENTS.md`
- `docs/MASTER_CONTEXT.md`
- `docs/TASKS.md`
- `docs/REPORT_PAGE_STYLE_GUIDE.md`
- `docs/CURRENT_TASK_STATE.md`

执行前先检查：

```powershell
git status --short
npm.cmd run build
```

核心要求：

- 只做静态单页报告交付页。
- 不做登录、数据库、支付、后台、真实 AI API。
- 报告内容必须从结构化数据维护，优先改 `src/data/reportData.ts`，不要把新用户报告硬编码到组件里。
- 不写真实姓名、电话、微信、身份证等敏感信息。
- 保持第一版页面的暗色 Linear / Apple 风格，不要改成传统测评报告、廉价 H5 或后台系统。
- 每次任务结束后更新 `docs/CURRENT_TASK_STATE.md`。

## 原始业务背景和边界

Awakening 觉醒计划是一个面向应届生、求职者、年轻职场人和转型者的 AI 时代个人竞争力重构项目。

前台身份：

- AI 全栈架构师
- Awakening 觉醒计划主理人

核心服务：

- 根据用户访谈信息，生成《AI 时代个人竞争力重构报告》。
- 帮助用户看清当前竞争力状态、AI 使用层级、可自动化任务、可增强任务、人类优势、高风险低价值努力、作品集方向，以及 7 天 / 14 天 / 30 天行动路径。

页面目标：

- 不是把文字报告原样搬上网页。
- 是把长报告重新产品化、卡片化、重点化，让用户愿意继续往下看，并最终产生反馈、私信、咨询或深度版报告需求。

严格禁止：

- 不做登录系统。
- 不做数据库。
- 不做支付系统。
- 不做后台管理。
- 不接入真实 AI API。
- 不暴露用户隐私。
- 不把真实姓名、学校全称、电话、微信、身份证等敏感信息写进页面。
- 不把页面做成完整 SaaS、传统测评报告、廉价 H5 或后台系统。

技术边界：

- 当前项目已是 React + TypeScript + Vite + 普通 CSS，后续优先沿用。
- 不新增复杂第三方库；如需新增依赖，必须先说明原因、替代方案和维护成本。
- 页面移动端优先，桌面端也要适配。
- 组件结构和报告数据必须分离。
- 新用户报告优先只改 `src/data/reportData.ts`。
- 不要把所有报告内容硬编码在 JSX 里。
- 页面加载应保持轻量，不接复杂运行时逻辑。

## 产品定位

这是一个“AI 时代个人竞争力重构报告交付页 MVP”，不是完整 SaaS。

用户打开页面后，第一屏要在 10 秒内回答：

- 我现在处于什么状态；
- 我的核心问题是什么；
- 我应该往哪个方向重构；
- 接下来我能做什么。

页面价值不在于把长报告搬上网页，而是把报告产品化：重点突出、卡片化、可行动、可转化。

## 页面结构

保持以下结构，不要随意删核心模块：

1. 顶部 Hero 区
2. 核心诊断摘要
3. AI 时代任务地图
4. 核心问题诊断
5. 竞争力维度
6. AI 使用方式升级
7. 作品集 / 项目路径
8. 7 天行动计划
9. 14 天 / 30 天路线
10. 关键提醒
11. 底部 CTA

重点优先级：

- 作品集 / 项目路径是页面价值最高的区域，要比普通诊断区更突出。
- 7 天行动计划必须可执行，不写“提升能力”“学习 AI”这种空话。
- 关键提醒要有视觉冲击力，但文字层级不能失衡。
- CTA 只做轻引导，不接复杂系统。

## 模块内容要求

### 1. 顶部 Hero 区

必须包含：

- Awakening 觉醒计划
- AI 时代个人竞争力重构报告
- 用户代号 / 用户身份标签，例如“用户 B｜身份标签｜阶段标签”
- 一句话核心诊断
- 简短摘要

第一屏不要放太多长文字。用户应在 10 秒内看到自己的状态、核心问题、重构方向和下一步行动。

### 2. 核心诊断摘要区

用 3-4 个重点卡片展示：

- 当前阶段
- 当前 AI 使用层级
- 核心短板
- 推荐重构方向

这些卡片是第一屏后的快速判断，不写大段解释。

### 3. AI 时代任务地图区

固定展示四类任务：

- 可自动化任务
- 可增强任务
- 人类优势任务
- 高风险低价值任务

每类任务应包含：

- 标题
- 简短解释
- 3-5 个具体任务点

如果原始报告中有比例，可以展示百分比；如果没有，不要强行生成。

使用百分比时必须在页面小字标注：

```text
比例为基于访谈信息的初步估算，不代表精确测评。
```

### 4. 核心问题诊断区

只展示三层：

- 表层问题
- 深层问题
- 最关键矛盾

最关键矛盾要突出显示。不要堆成长文。

### 5. 竞争力重构 / 能力维度区

展示 5-6 个维度：

- AI 使用能力
- 专业 / 岗位能力
- 项目与作品集能力
- 表达与展示能力
- 求职策略能力
- 持续行动能力

每个维度展示：

- 当前状态
- 主要短板
- 重构建议

可以用进度条、评分条或卡片，不要求真正雷达图。

### 6. AI 使用方式升级区

必须展示：

- 当前 AI 使用层级
- 下一阶段目标
- 当前层级 -> 下一阶段目标的升级关系
- 3-5 个推荐高频 AI 使用场景

AI 层级定义：

- Level 1：把 AI 当搜索工具
- Level 2：把 AI 当写作 / 润色工具
- Level 3：把 AI 当学习助手
- Level 4：把 AI 当项目协作者
- Level 5：把 AI 当个人工作流系统
- Level 6：把 AI 当个人商业 / 职业杠杆

### 7. 作品集 / 项目路径区

这是页面重点。展示 1-3 个作品集方向。

每个方向必须包含：

- 作品名称
- 适合原因
- 最小可行版本
- AI 可以辅助的部分
- 用户必须自己完成的部分
- 如何展示
- 如何写进简历 / 面试 / 个人主页

这个区域要比其他区域更突出，因为它最能体现报告价值。

### 8. 7 天行动计划区

用时间轴展示 7 天行动计划。

每天必须包含：

- Day 1 / Day 2 ...
- 当天目标
- 具体任务
- 推荐 AI 用法
- 当天产出物
- 完成标准

每一天都必须是可执行动作，不出现“提升能力”“学习 AI”这种空话。

### 9. 14 天 / 30 天路线区

用两个卡片展示：

- 14 天目标
- 30 天目标

内容包括：

- 阶段性成果
- 可展示材料
- 简历增强点
- 面试表达点
- 下一步升级方向

### 10. 关键提醒区

突出展示一句话：

```text
你接下来最重要的不是 XXX，而是 XXX。
```

这句话要有视觉冲击力，且整体居中。

### 11. 底部 CTA 区

页面底部需要有行动引导。

按钮文案可包括：

- 我想做深度版诊断
- 我想做 7 天作品集计划
- 我想继续和主理人沟通
- 反馈这个报告是否准确

前期按钮不接真实系统，可以使用占位链接、`mailto`、滚动到反馈说明，或提示“请回到私信回复：深度诊断”。

## 数据结构约束

报告数据维护在：

```text
src/data/reportData.ts
```

新用户报告优先替换：

- `meta`
- `hero`
- `snapshot`
- `taskMap`
- `diagnosis`
- `competitiveness`
- `aiUpgrade`
- `portfolioPaths`
- `sevenDayPlan`
- `roadmap`
- `finalReminder`
- `cta`

推荐数据结构：

```ts
export const reportData = {
  meta: {
    projectName: "Awakening 觉醒计划",
    reportTitle: "AI 时代个人竞争力重构报告",
    userLabel: "用户 B｜身份标签｜阶段标签",
    date: "2026-XX-XX",
    disclaimer: "本报告基于访谈信息生成，属于初步诊断建议，不代表精确测评或就业承诺。",
  },
  hero: {
    coreDiagnosis: "",
    summary: "",
  },
  snapshot: {
    currentStage: "",
    aiLevel: "",
    coreWeakness: "",
    recommendedDirection: "",
  },
  taskMap: {
    automated: { title: "可自动化任务", percent: undefined, items: [] },
    enhanced: { title: "可增强任务", percent: undefined, items: [] },
    humanAdvantage: { title: "人类优势任务", percent: undefined, items: [] },
    highRisk: { title: "高风险低价值任务", percent: undefined, items: [] },
  },
  diagnosis: {
    surfaceProblems: [],
    deepProblems: [],
    keyConflict: "",
  },
  competitiveness: [
    { dimension: "", score: 0, status: "", weakness: "", suggestion: "" },
  ],
  aiUpgrade: {
    currentLevel: "",
    nextLevel: "",
    upgradeSummary: "",
    scenarios: [],
  },
  portfolioPaths: [
    {
      name: "",
      reason: "",
      mvp: "",
      aiAssistedParts: [],
      userOwnedParts: [],
      displayMethod: "",
      resumeInterviewUsage: "",
    },
  ],
  sevenDayPlan: [
    {
      day: 1,
      goal: "",
      tasks: [],
      aiUsage: "",
      output: "",
      doneCriteria: "",
    },
  ],
  roadmap: {
    fourteenDays: {
      goal: "",
      outcomes: [],
      resumePoints: [],
      interviewPoints: [],
    },
    thirtyDays: {
      goal: "",
      outcomes: [],
      resumePoints: [],
      interviewPoints: [],
      nextStep: "",
    },
  },
  finalReminder: "",
  cta: {
    primary: "我想做深度版诊断",
    secondary: "我想做 7 天作品集计划",
    note: "如果你是通过私信收到本报告，可以回复「深度诊断」继续沟通。",
  },
};
```

不要改组件结构，除非新报告真的缺少必要表达方式。

隐私处理：

- `userLabel` 使用“用户 B｜身份标签｜阶段标签”即可。
- 不写真实姓名、学校全称、手机号、微信号、身份证号。
- 如果必须出现专业背景，用泛化表达，例如“城乡规划方向学生”“转型准备期”。

金融或高风险方向：

- 只能写分析、提醒、回测、复盘、风险记录。
- 不写自动交易、保证收益、一键赚钱。

## 视觉风格

整体参考第一版的 Linear / Apple 暗色产品官网感：

- 专业、克制、科技感、高级；
- 大字号结论 + 暗色背景 + 细线边框 + 低对比面板；
- 不做花哨动画，不做廉价渐变 H5；
- 不做后台系统感，不做传统测评报告感。

核心色值来自 `src/styles.css`：

```css
--bg: #07080a;
--bg-soft: #0c0d10;
--panel: rgba(20, 21, 24, 0.86);
--panel-strong: #131417;
--ink: #f4f4f5;
--muted: #9a9da6;
--subtle: #626772;
--line: rgba(255, 255, 255, 0.1);
--line-soft: rgba(255, 255, 255, 0.065);
--accent: #d9ff00;
--accent-cyan: #00c7d4;
--accent-warm: #ff6b5e;
```

字体：

- 使用系统无衬线：`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif`
- 不使用负 letter-spacing。
- 不用 viewport width 直接控制所有文字，采用 `clamp()` 控制上下限。

## 已验证的关键样式细节

这些是第一版页面反复调整后的结果，新页面应优先复用。

### Hero 区

- `report-title` 是黄绿色大标题，必须比白色核心诊断更大。
- `h1` 是白色核心诊断，作为副主标题，不要再放到超大。
- 用户信息标签 `.hero-labels .badge` 要足够清晰：

```css
.hero-labels {
  gap: 14px;
}

.hero-labels .badge {
  padding: 10px 16px;
  font-size: clamp(1rem, 1.14vw, 1.2rem);
  font-weight: 780;
}
```

### 模块标题

模块 eyebrow 和大标题不能差距过大。

第一版已将 `.section-heading` 调整为：

- 小标题更大；
- 大标题略收；
- 两行间距收紧。

避免恢复成超大 H2 + 很小 eyebrow 的失衡状态。

### 诊断摘要四卡片

四张摘要卡片必须内容居中：

```css
.metric-card {
  align-content: center;
  justify-items: center;
  text-align: center;
  gap: 18px;
}
```

不要再使用 `align-content: space-between`，否则标签和结论会贴上下边缘。

### Report OS 面板

Hero 右侧的 Report OS 面板是第一版的重要产品感来源。

左侧导航必须能跳转：

- `Diagnosis` -> `#diagnosis`
- `Task Map` -> `#task-map`
- `Portfolio` -> `#portfolio-plan`
- `Action Plan` -> `#seven-day-plan`

如果新增模块，优先保持该面板作为“报告操作系统”的视觉锚点。

### 关键提醒区

关键提醒区必须居中，且标签不能太小：

```css
.reminder-section {
  text-align: center;
}

.reminder-section .section-inner {
  display: grid;
  justify-items: center;
}

.reminder-section .eyebrow {
  font-size: clamp(1.38rem, 1.75vw, 1.95rem);
  font-weight: 850;
}

.reminder-section h2 {
  max-width: 1240px;
  margin: 26px auto 0;
  font-size: clamp(2.65rem, 4.6vw, 5.35rem);
  line-height: 1.08;
}
```

### CTA 区

CTA 小标题“下一步行动”不能太小：

```css
.cta-inner .eyebrow {
  font-size: clamp(1.25rem, 1.45vw, 1.7rem);
  font-weight: 840;
}
```

CTA 按钮保持简洁，不接真实支付、表单或登录。

## 移动端注意事项

移动端优先，至少检查 390px 宽度。

必须避免：

- 横向溢出；
- 大标题挤出屏幕；
- 按钮文字不换行；
- 卡片内文字贴边；
- Hero 第一屏信息过多。

移动端检查建议：

```text
390px 宽度：
- Hero 能看到报告身份、核心诊断、用户标签。
- 摘要卡片可读。
- 作品集方向和 7 天计划不横向溢出。
- CTA 按钮能自然堆叠。
```

## 内容提炼规则

把长报告转成页面时，不要直接搬全文。

要做这些提炼：

- 状态画像 -> Hero + snapshot
- 表层问题 / 深层问题 / 关键矛盾 -> diagnosis
- 可自动化 / 可增强 / 人类优势 / 高风险低价值 -> taskMap
- 能力短板 -> competitiveness
- 当前 AI 层级和下一层级 -> aiUpgrade
- 1-3 个作品集方向 -> portfolioPaths
- 7 天可执行动作 -> sevenDayPlan
- 14 / 30 天成果 -> roadmap
- 最重要提醒 -> finalReminder

每条建议必须具体到：

- 任务；
- 动作；
- 工具；
- 产出物；
- 完成标准。

## 工程工作流

改第二个用户页面时，推荐顺序：

1. 读取项目文档和本指南。
2. 检查 `git status --short`。
3. 确认当前 `main` 分支仍然是用户 A 的已上线版本。
4. 为新用户先创建独立分支，例如：

```powershell
git switch main
git pull
git switch -c codex/user-b-report
```

5. 只在新用户分支上复制或替换 `src/data/reportData.ts` 中的新用户结构化数据。
6. 只在必要时微调组件。
7. 保持 `src/styles.css` 视觉系统，不要大改配色。
8. 运行：

```powershell
npm.cmd run build
```

9. 检查桌面和移动端。
10. 更新 `docs/CURRENT_TASK_STATE.md`。
11. 提交并推送新用户分支。
12. 使用单独 Vercel 项目或单独 GitHub 仓库发布新用户页面，避免覆盖用户 A 的生产链接。

## 部署和回滚

当前用户 A 部署链路：

- GitHub 仓库：`yongjiajie337-tech/Awakening-report-mvp`
- 生产分支：`main`
- 含义：`main` 保持用户 A 已上线报告，不直接替换为用户 B 数据。
- Vercel Framework Preset：`Vite`
- Build Command：`npm run build`
- Output Directory：`dist`

多用户独立链接策略：

### 方案 A：单独仓库 + 单独 Vercel 项目

这是新手阶段最稳的方式。

- 用户 A：保留当前仓库和当前 Vercel 项目。
- 用户 B：从用户 A 当前代码复制出一个新仓库，例如 `Awakening-report-user-b`，再导入一个新的 Vercel 项目。
- 优点：隔离最清楚，用户 A 不会被误覆盖。
- 缺点：后续如果统一改 UI，需要同步多个仓库。

### 方案 B：同一仓库不同分支 + 单独 Vercel 项目

这是更省仓库的方式，但需要更小心配置。

- 用户 A：现有 Vercel 项目继续绑定 `main`。
- 用户 B：创建 `codex/user-b-report` 分支，替换用户 B 数据后推送。
- 在 Vercel 新建第二个项目，导入同一个 GitHub 仓库，但把生产分支设置为 `codex/user-b-report`。
- 不要让用户 A 的 Vercel 项目改绑到用户 B 分支。
- 不要把 `codex/user-b-report` 合并回 `main`，否则用户 A 的线上页会被替换。

当前建议：

- 先用方案 B 进行用户 B 页面开发和预览，因为它能保留同一套代码历史。
- 如果后续用户数量增加，或你担心误操作覆盖用户 A，再把每个用户拆成单独仓库。

注意：

- GitHub 仓库名可以是 `Awakening-report-mvp`。
- Vercel Project Name 必须小写，例如 `awakening-report-mvp`。
- 不要把 Vercel 后台链接发给用户，要发 `.vercel.app` 公网链接。
- 如果手机访问要求登录，优先确认是否打开了 `vercel.com/...` 后台链接，而不是公网域名。

回滚优先级：

1. 线上坏了，先在 Vercel Deployments 里恢复上一个正常版本。
2. 代码坏了且已经推送，用 `git revert <commit>`。
3. 本地坏了但没提交，先看 `git status`，不要直接 `git reset --hard`。

## 验收标准

新用户页面完成后必须满足：

- 用户打开第一屏能快速看到核心诊断。
- 页面不是长文字堆砌，而是卡片化、重点化展示。
- 任务地图、作品集路径、7 天行动计划是页面重点。
- 移动端阅读体验良好，390px 宽度无横向溢出。
- 桌面端布局不崩，标题、卡片、按钮不重叠。
- 可以方便替换 `reportData.ts` 生成不同用户报告。
- 没有复杂登录 / 后台 / 数据库。
- 没有真实隐私信息。
- 视觉风格保持专业、克制、科技感、高级，适合 Awakening 觉醒计划品牌。
- 用户 A 的线上页面不会被用户 B 的数据覆盖。

## 下一次报告交付前的检查清单

- [ ] 新用户报告数据已脱敏。
- [ ] `reportData.ts` 中无真实姓名、电话、微信、身份证等敏感信息。
- [ ] Hero 10 秒内能看懂核心诊断。
- [ ] 任务地图、作品集路径、7 天计划是页面重点。
- [ ] 作品集方向能转成简历 / 面试 / 个人主页表达。
- [ ] 7 天计划每天都有具体产出物和完成标准。
- [ ] 移动端无横向溢出。
- [ ] `npm.cmd run build` 通过。
- [ ] `docs/CURRENT_TASK_STATE.md` 已更新。
