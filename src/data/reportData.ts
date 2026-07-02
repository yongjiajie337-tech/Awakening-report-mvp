export type TaskMapItem = {
  title: string;
  percent?: number;
  description: string;
  items: string[];
};

export type CompetitivenessDimension = {
  dimension: string;
  score: number;
  status: string;
  weakness: string;
  suggestion: string;
};

export type PortfolioPath = {
  name: string;
  priority: string;
  reason: string;
  mvp: string;
  aiAssistedParts: string[];
  userOwnedParts: string[];
  displayMethod: string;
  resumeInterviewUsage: string;
};

export type SevenDayPlanItem = {
  day: number;
  goal: string;
  tasks: string[];
  aiUsage: string;
  output: string;
  doneCriteria: string;
};

export const aiLevels = [
  "Level 1：把 AI 当搜索工具",
  "Level 2：把 AI 当写作 / 润色工具",
  "Level 3：把 AI 当学习助手",
  "Level 4：把 AI 当项目协作者",
  "Level 5：把 AI 当个人工作流系统",
  "Level 6：把 AI 当个人商业 / 职业杠杆",
];

export const reportData = {
  meta: {
    projectName: "Awakening 觉醒计划",
    reportTitle: "AI 时代个人竞争力重构报告",
    userLabel: "用户 A｜生物信息学大三｜求职 / 读研选择期",
    date: "2026-07-02",
    disclaimer:
      "本报告基于访谈信息生成，属于初步诊断建议，不代表精确测评、就业承诺或投资建议。",
  },
  hero: {
    coreDiagnosis:
      "你不是没有项目想法，而是缺少一条可展示的核心作品主线。",
    summary:
      "你已经不是 AI 小白，下一阶段的关键是把 AI 从临时工具升级为项目系统、学习系统和作品集系统。",
  },
  snapshot: {
    currentStage: "多任务挤压期",
    aiLevel: "Level 3 → Level 4｜学习助手到项目协作者",
    coreWeakness: "项目方向分散，缺少可展示作品集",
    recommendedDirection: "以 AI 辅助生物信息学分析工作流作为主项目",
  },
  taskMap: {
    automated: {
      title: "可自动化任务",
      percent: 25,
      description: "信息结构固定、重复性强，适合交给 AI 承担初稿和整理。",
      items: [
        "课程资料和知识点清单整理",
        "文献摘要、方法、数据、结论结构化提取",
        "岗位 JD 技能关键词拆解",
        "简历项目初稿和不同岗位版本改写",
        "代码脚手架、注释、README 初稿生成",
      ],
    },
    enhanced: {
      title: "可增强任务",
      percent: 40,
      description: "AI 可以提升效率，但方向判断、结果验证仍必须由你负责。",
      items: [
        "毕设项目的问题拆解、技术路线和实验步骤设计",
        "生物信息学数据分析代码框架和报错排查",
        "交易提醒工具的数据抓取、提醒逻辑和复盘报告",
        "面试追问模拟与项目表达优化",
        "项目过程复盘、问题记录和改进建议整理",
      ],
    },
    humanAdvantage: {
      title: "人类优势任务",
      percent: 25,
      description: "真正决定竞争力的是问题定义、取舍、风险判断和表达。",
      items: [
        "在生物信息学、AI 工具、金融辅助工具之间选主线",
        "把想法转成真实用户、场景、输入、输出和边界",
        "判断研究问题、数据质量和生物学意义是否成立",
        "为交易工具设定风险边界，不把收益责任交给 AI",
        "把项目讲成简历、面试、GitHub 和个人主页成果",
      ],
    },
    highRisk: {
      title: "高风险低价值任务",
      percent: 10,
      description: "这些行为会制造忙碌感，但很难转化为求职竞争力。",
      items: [
        "同时追多个项目，但没有一个做到可展示",
        "只看教程、收藏资料，却不形成仓库或 Demo",
        "机械补简历，没有真实项目内容支撑",
        "直接使用 AI 输出，不做运行、解释和事实验证",
        "过早追求自动交易，而不是先做提醒、回测和风险记录",
      ],
    },
  },
  diagnosis: {
    surfaceProblems: [
      "成熟项目和实习经历不足，面试竞争力不稳",
      "课程、毕设、项目积累、求职 / 读研选择同时挤压",
      "感兴趣方向多，但每个方向都需要额外学习成本",
      "AI 输出质量波动，提示词和验收标准不稳定",
    ],
    deepProblems: [
      "没有把任务拆成一条可持续推进的主线",
      "项目兴趣没有形成能服务毕设、读研和求职表达的作品集路径",
      "AI 已用于重复任务，但还没有沉淀成个人工作流系统",
      "已经知道人要驾驶 AI，但还没有稳定的方法论和展示标准",
    ],
    keyConflict:
      "你现在最大的问题不是「不会使用 AI」，而是「没有把 AI 转化成可展示的求职竞争力」。",
  },
  competitiveness: [
    {
      dimension: "AI 使用能力",
      score: 4,
      status: "已经高于普通浅层用户，会使用 Codex Pro、GPT、Gemini 处理学习、代码和重复任务。",
      weakness: "提示词和任务定义不稳定，缺少可复用工作流。",
      suggestion: "建立“目标-输入-约束-输出格式-验收标准”的提示词模板。",
    },
    {
      dimension: "专业 / 岗位能力",
      score: 3,
      status: "生物信息学背景具备潜力，能连接数据分析、研究工具和 AI 应用。",
      weakness: "目标岗位不清晰，专业能力还没有转成项目表达。",
      suggestion: "先围绕“生物信息学 + AI 数据分析工具”做一个主项目。",
    },
    {
      dimension: "项目与作品集能力",
      score: 2,
      status: "有工具落地兴趣，也有真实痛点来源。",
      weakness: "缺少成熟可展示项目，方向偏分散。",
      suggestion: "一个主项目服务毕设 / 读研 / 求职，一个兴趣项目做辅助展示。",
    },
    {
      dimension: "表达与展示能力",
      score: 3,
      status: "有清晰比喻：AI 是车，人是驾驶员。",
      weakness: "项目故事还没有沉淀成可验证材料。",
      suggestion: "把项目整理成 README、流程图、Demo、简历 bullet 和 2 分钟讲述稿。",
    },
    {
      dimension: "求职策略能力",
      score: 2,
      status: "在求职和读研之间重新评估，开始意识到需要缓冲和深化。",
      weakness: "求职路径和读研路径没有统一主线。",
      suggestion: "把毕设项目设计成未来求职作品，读研不是逃避，而是深化项目。",
    },
    {
      dimension: "持续行动能力",
      score: 2,
      status: "有焦虑，也有工具化动机。",
      weakness: "规划不过来，容易被多个方向拉扯。",
      suggestion: "7 天内只推进一个最小作品，不再同时开多个新坑。",
    },
  ],
  aiUpgrade: {
    currentLevel: "Level 3 / 4",
    nextLevel: "Level 5",
    upgradeSummary:
      "你已经把 AI 用于学习、代码和繁琐任务处理。下一步不是再收藏更多工具，而是为每个项目建立固定的 AI 工作流。",
    scenarios: [
      "生物信息学文献结构化阅读",
      "毕设项目技术路线拆解",
      "数据处理脚本生成与调试",
      "README、流程图说明和项目复盘生成",
      "面试项目追问模拟",
    ],
  },
  portfolioPaths: [
    {
      name: "BioInsight AI：生物信息学文献与数据分析助手",
      priority: "优先级 1",
      reason: "最贴合专业背景，也能连接毕设、读研和求职，不会变成纯兴趣项目。",
      mvp: "输入一篇论文或一个小型数据集，输出研究问题、数据来源、分析流程、关键代码和结果解释模板。",
      aiAssistedParts: [
        "文献摘要与研究问题提取",
        "代码框架和数据清洗脚本",
        "图表说明和 README 初稿",
        "结果报告结构化表达",
      ],
      userOwnedParts: [
        "选择真实研究问题",
        "判断方法是否合理",
        "跑通代码并记录失败过程",
        "解释结果的生物学意义",
      ],
      displayMethod: "GitHub 仓库 + Notion 项目页 + 3 分钟演示视频 + 一页项目报告。",
      resumeInterviewUsage:
        "可表达为：构建 AI 辅助生物信息学分析流程，完成文献解析、数据预处理、分析脚本生成与结果报告自动化。",
    },
    {
      name: "TradeWake：交易时段提醒与策略复盘助手",
      priority: "优先级 2",
      reason: "来自真实痛点：交易时段起不来、错过机会，同时能展示数据管道和规则系统能力。",
      mvp: "不做真实自动买卖，只做行情监控、规则提醒、纸面交易记录和策略复盘。",
      aiAssistedParts: [
        "数据抓取脚本",
        "提醒逻辑和规则引擎草稿",
        "回测模板",
        "复盘报告生成",
      ],
      userOwnedParts: [
        "定义交易规则",
        "设定风险边界",
        "验证数据准确性",
        "明确不承诺收益",
      ],
      displayMethod: "本地 Demo、核心截图、回测报告和风险说明文档。",
      resumeInterviewUsage:
        "适合数据分析、量化工具、AI 应用开发方向；面试中强调数据管道、规则引擎、提醒系统和回测复盘。",
    },
    {
      name: "ProjectPilot：课程、毕设与项目进度规划助手",
      priority: "优先级 3",
      reason: "直接解决规划不过来的问题，可作为 AI 工作流设计能力的辅助展示。",
      mvp: "输入课程任务、项目任务、截止时间，输出一周计划、任务优先级和每日产出物。",
      aiAssistedParts: ["任务拆解", "排期建议", "复盘提示", "风险提醒"],
      userOwnedParts: ["真实记录任务", "执行计划", "按现实约束调整优先级"],
      displayMethod: "Notion 模板、网页 Demo 和一组真实使用案例。",
      resumeInterviewUsage:
        "作为辅助项目展示 AI 工作流设计能力，但求职竞争力弱于 BioInsight AI。",
    },
  ],
  sevenDayPlan: [
    {
      day: 1,
      goal: "收敛方向",
      tasks: ["写出 3 个候选项目", "按求职价值、可行性、展示性排序", "选定一个主项目和一个备用项目"],
      aiUsage: "让 AI 对项目做“求职价值 / 可行性 / 展示性”评分，并说明风险。",
      output: "项目选择表",
      doneCriteria: "明确一个主项目，一个备用项目，不再同时推进多个新方向。",
    },
    {
      day: 2,
      goal: "定义主项目",
      tasks: ["写一页 PRD", "定义用户、场景、输入、输出", "划清 MVP 功能边界"],
      aiUsage: "让 AI 生成 PRD 初稿和 MVP 范围，再人工删减到 7 天可完成。",
      output: "一页项目说明",
      doneCriteria: "能用 3 句话讲清项目解决什么问题。",
    },
    {
      day: 3,
      goal: "准备资料",
      tasks: ["收集 3-5 篇相关论文或一个小数据集", "记录来源和使用边界", "完成结构化摘要"],
      aiUsage: "让 AI 提取研究问题、方法、数据、结论和可复现步骤。",
      output: "文献 / 数据整理表",
      doneCriteria: "每份资料都有结构化摘要，能说明为什么选它。",
    },
    {
      day: 4,
      goal: "搭建项目骨架",
      tasks: ["创建 GitHub 仓库", "建立 README、data、notebooks、src 目录", "写清项目目标和运行方式"],
      aiUsage: "用 Codex 生成项目目录建议、README 初稿和样例脚本结构。",
      output: "可公开仓库骨架",
      doneCriteria: "别人打开仓库能看懂项目目标、输入输出和当前进度。",
    },
    {
      day: 5,
      goal: "跑通最小流程",
      tasks: ["完成一个最小分析脚本或 notebook", "输入样例数据", "输出一个结果表或图表"],
      aiUsage: "用 Codex 辅助写代码、修报错、补说明，但保留人工验证记录。",
      output: "可运行 notebook / 脚本",
      doneCriteria: "输入样例数据后能稳定得到结果或图表。",
    },
    {
      day: 6,
      goal: "做展示材料",
      tasks: ["整理截图", "写流程图说明", "解释结果价值和局限", "记录失败与改进"],
      aiUsage: "让 AI 生成 README v1、架构图说明和项目复盘草稿。",
      output: "README v1 + 项目报告 v1",
      doneCriteria: "其他人打开仓库能理解项目价值和你的实际贡献。",
    },
    {
      day: 7,
      goal: "转成求职资产",
      tasks: ["生成简历项目段", "写 2 分钟面试讲述稿", "准备 5 个面试追问答案"],
      aiUsage: "让 AI 模拟面试官追问项目背景、方法、结果、AI 参与和你的判断。",
      output: "简历 bullet + 面试稿",
      doneCriteria: "能完整讲清项目背景、方法、结果、改进和个人贡献。",
    },
  ],
  roadmap: {
    fourteenDays: {
      goal: "完成一个可展示的 MVP，而不是继续停留在想法阶段。",
      outcomes: [
        "BioInsight AI v0.1",
        "能完成一篇论文或一个数据集的结构化分析",
        "GitHub README、流程图、notebook、1 页项目报告",
      ],
      resumePoints: [
        "使用 AI 辅助构建生物信息学分析工作流",
        "完成文献解析、数据处理、代码生成与结果报告",
      ],
      interviewPoints: [
        "强调自己不是只会调用 AI",
        "能定义问题、拆解流程、验证结果",
      ],
      nextStep: "增加多篇论文批量分析或接入更多数据集。",
    },
    thirtyDays: {
      goal: "形成一个能同时服务毕设、读研沟通和求职展示的项目主线。",
      outcomes: [
        "BioInsight AI v1.0 或与毕设强相关的 AI 辅助分析工具",
        "GitHub 仓库、项目主页、Demo 视频、技术报告、简历项目段",
        "补齐项目经历不足的短板",
      ],
      resumePoints: [
        "将课程和专业背景转化为可验证项目经历",
        "用项目证明 AI 工作流设计、数据处理和结果表达能力",
      ],
      interviewPoints: [
        "为什么做",
        "怎么设计",
        "AI 参与了什么",
        "你自己判断了什么",
        "下一步怎么改",
      ],
      nextStep:
        "如果继续读研，把该项目深化为研究工具；如果求职，把它包装成数据分析 / AI 应用开发 / 生物信息学工程项目。",
    },
  },
  finalReminder:
    "你接下来最重要的不是同时学更多方向，而是把一个能服务毕设、读研和求职的项目做成可展示作品。",
  cta: {
    primary: "我想做深度版诊断",
    secondary: "我想做 7 天作品集计划",
    tertiary: "反馈这个报告是否准确",
    note: "如果你是通过私信收到本报告，可以回复「深度诊断」或「7 天作品集计划」继续沟通。",
  },
};
