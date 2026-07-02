import type { CSSProperties, ReactNode } from "react";
import { aiLevels, reportData } from "./data/reportData";

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="section" id={id}>
      <div className="section-inner">
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return <span className="badge">{children}</span>;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
    </span>
  );
}

function TopNav() {
  return (
    <header className="top-nav">
      <a className="brand" href="#top" aria-label="Awakening 觉醒计划">
        <BrandMark />
        <span>Awakening</span>
      </a>
      <nav className="nav-links" aria-label="报告导航">
        <a href="#snapshot">诊断</a>
        <a href="#task-map">任务地图</a>
        <a href="#portfolio-plan">作品集</a>
        <a href="#seven-day-plan">7 天计划</a>
      </nav>
      <a className="nav-cta" href="#contact-note">
        深度诊断
      </a>
    </header>
  );
}

function HeroVisual() {
  const rows = [
    ["当前阶段", reportData.snapshot.currentStage],
    ["重构方向", reportData.snapshot.recommendedDirection],
    ["核心短板", reportData.snapshot.coreWeakness],
  ];

  return (
    <aside className="hero-visual" aria-label="报告摘要预览">
      <div className="visual-top">
        <div className="visual-title">
          <BrandMark />
          <span>Report OS</span>
        </div>
        <span className="visual-status">v0.1</span>
      </div>
      <div className="visual-body">
        <div className="visual-sidebar">
          <a className="is-active" href="#diagnosis">
            Diagnosis
          </a>
          <a href="#task-map">Task Map</a>
          <a href="#portfolio-plan">Portfolio</a>
          <a href="#seven-day-plan">Action Plan</a>
        </div>
        <div className="visual-content">
          <div className="visual-issue">
            <p>Core conflict</p>
            <strong>{reportData.diagnosis.keyConflict}</strong>
          </div>
          <div className="visual-rows">
            {rows.map(([label, value]) => (
              <div className="visual-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function Snapshot() {
  const items = [
    ["当前阶段", reportData.snapshot.currentStage],
    ["AI 使用层级", reportData.snapshot.aiLevel],
    ["核心短板", reportData.snapshot.coreWeakness],
    ["推荐重构方向", reportData.snapshot.recommendedDirection],
  ];

  return (
    <div className="snapshot-grid">
      {items.map(([label, value]) => (
        <article className="metric-card" key={label}>
          <p>{label}</p>
          <strong>{value}</strong>
        </article>
      ))}
    </div>
  );
}

function TaskMap() {
  return (
    <div className="task-grid">
      {Object.values(reportData.taskMap).map((task) => (
        <article className="task-card" key={task.title}>
          <div className="task-card-head">
            <div>
              <p className="card-kicker">任务类型</p>
              <h3>{task.title}</h3>
            </div>
            {task.percent ? <span className="percent">{task.percent}%</span> : null}
          </div>
          {task.percent ? (
            <div className="progress-track" aria-hidden="true">
              <span
                className="progress-fill"
                style={{ "--progress": `${task.percent}%` } as CSSProperties}
              />
            </div>
          ) : null}
          <p className="muted">{task.description}</p>
          <ul className="clean-list">
            {task.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function Diagnosis() {
  return (
    <div className="diagnosis-layout">
      <article className="plain-card">
        <h3>表层问题</h3>
        <ul className="clean-list">
          {reportData.diagnosis.surfaceProblems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </article>
      <article className="plain-card">
        <h3>深层问题</h3>
        <ul className="clean-list">
          {reportData.diagnosis.deepProblems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </article>
      <article className="conflict-card">
        <p>最关键矛盾</p>
        <strong>{reportData.diagnosis.keyConflict}</strong>
      </article>
    </div>
  );
}

function Competitiveness() {
  return (
    <div className="dimension-list">
      {reportData.competitiveness.map((item) => (
        <article className="dimension-card" key={item.dimension}>
          <div className="dimension-top">
            <h3>{item.dimension}</h3>
            <span>{item.score}/5</span>
          </div>
          <div className="score-track" aria-label={`${item.dimension} 当前评分 ${item.score}/5`}>
            <span
              className="score-fill"
              style={{ "--score": `${(item.score / 5) * 100}%` } as CSSProperties}
            />
          </div>
          <dl>
            <div>
              <dt>当前状态</dt>
              <dd>{item.status}</dd>
            </div>
            <div>
              <dt>主要短板</dt>
              <dd>{item.weakness}</dd>
            </div>
            <div>
              <dt>重构建议</dt>
              <dd>{item.suggestion}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

function AiUpgrade() {
  return (
    <div className="upgrade-layout">
      <article className="upgrade-panel">
        <p className="card-kicker">当前层级 → 下一阶段目标</p>
        <div className="level-shift">
          <strong>{reportData.aiUpgrade.currentLevel}</strong>
          <span aria-hidden="true">→</span>
          <strong>{reportData.aiUpgrade.nextLevel}</strong>
        </div>
        <p>{reportData.aiUpgrade.upgradeSummary}</p>
      </article>
      <div className="level-list">
        {aiLevels.map((level) => {
          const isCurrent = level.startsWith("Level 3") || level.startsWith("Level 4");
          const isTarget = level.startsWith("Level 5");
          return (
            <div
              className={`level-row ${isCurrent ? "is-current" : ""} ${
                isTarget ? "is-target" : ""
              }`}
              key={level}
            >
              <span>{level}</span>
              {isCurrent ? <Badge>当前</Badge> : null}
              {isTarget ? <Badge>目标</Badge> : null}
            </div>
          );
        })}
      </div>
      <article className="scenario-panel">
        <h3>推荐高频 AI 使用场景</h3>
        <ul className="pill-list">
          {reportData.aiUpgrade.scenarios.map((scenario) => (
            <li key={scenario}>{scenario}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function PortfolioPaths() {
  return (
    <div className="portfolio-stack">
      {reportData.portfolioPaths.map((path) => (
        <article className="portfolio-card" key={path.name}>
          <div className="portfolio-head">
            <Badge>{path.priority}</Badge>
            <h3>{path.name}</h3>
          </div>
          <div className="portfolio-grid">
            <div>
              <p className="card-kicker">适合原因</p>
              <p>{path.reason}</p>
            </div>
            <div>
              <p className="card-kicker">最小可行版本</p>
              <p>{path.mvp}</p>
            </div>
            <div>
              <p className="card-kicker">AI 可以辅助</p>
              <ul className="clean-list">
                {path.aiAssistedParts.map((part) => (
                  <li key={part}>{part}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="card-kicker">必须自己完成</p>
              <ul className="clean-list">
                {path.userOwnedParts.map((part) => (
                  <li key={part}>{part}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="card-kicker">如何展示</p>
              <p>{path.displayMethod}</p>
            </div>
            <div>
              <p className="card-kicker">简历 / 面试用法</p>
              <p>{path.resumeInterviewUsage}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function SevenDayPlan() {
  return (
    <div className="timeline">
      {reportData.sevenDayPlan.map((day) => (
        <article className="timeline-item" key={day.day}>
          <div className="day-label">Day {day.day}</div>
          <div className="timeline-content">
            <h3>{day.goal}</h3>
            <div className="timeline-grid">
              <div>
                <p className="card-kicker">具体任务</p>
                <ul className="clean-list">
                  {day.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="card-kicker">推荐 AI 用法</p>
                <p>{day.aiUsage}</p>
              </div>
              <div>
                <p className="card-kicker">当天产出物</p>
                <p>{day.output}</p>
              </div>
              <div>
                <p className="card-kicker">完成标准</p>
                <p>{day.doneCriteria}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function Roadmap() {
  const roadmapItems = [
    ["14 天目标", reportData.roadmap.fourteenDays],
    ["30 天目标", reportData.roadmap.thirtyDays],
  ] as const;

  return (
    <div className="roadmap-grid">
      {roadmapItems.map(([label, item]) => (
        <article className="roadmap-card" key={label}>
          <Badge>{label}</Badge>
          <h3>{item.goal}</h3>
          <div className="roadmap-block">
            <p className="card-kicker">阶段性成果 / 可展示材料</p>
            <ul className="clean-list">
              {item.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-block">
            <p className="card-kicker">简历增强点</p>
            <ul className="clean-list">
              {item.resumePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="roadmap-block">
            <p className="card-kicker">面试表达点</p>
            <ul className="clean-list">
              {item.interviewPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <p className="next-step">{item.nextStep}</p>
        </article>
      ))}
    </div>
  );
}

function Cta() {
  return (
    <section className="cta-section" id="contact-note">
      <div className="section-inner cta-inner">
        <p className="eyebrow">下一步行动</p>
        <h2>把报告变成一周内可展示的作品。</h2>
        <p>{reportData.cta.note}</p>
        <div className="cta-actions">
          <a className="button button-primary" href="#contact-note">
            {reportData.cta.primary}
          </a>
          <a className="button" href="#portfolio-plan">
            {reportData.cta.secondary}
          </a>
          <a className="button button-quiet" href="#contact-note">
            {reportData.cta.tertiary}
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <TopNav />
      <main>
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-meta">
              <Badge>{reportData.meta.projectName}</Badge>
              <span>{reportData.meta.date}</span>
            </div>
            <p className="report-title">{reportData.meta.reportTitle}</p>
            <h1>{reportData.hero.coreDiagnosis}</h1>
            <p className="hero-summary">{reportData.hero.summary}</p>
            <div className="hero-labels">
              <Badge>{reportData.meta.userLabel}</Badge>
              <Badge>{reportData.snapshot.aiLevel}</Badge>
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio-plan">
                查看作品集路径
              </a>
              <a className="button" href="#seven-day-plan">
                查看 7 天计划
              </a>
            </div>
            <p className="disclaimer">{reportData.meta.disclaimer}</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Section id="snapshot" eyebrow="10 秒读懂" title="核心诊断摘要">
        <Snapshot />
      </Section>

      <Section id="task-map" eyebrow="任务重构" title="AI 时代任务地图">
        <TaskMap />
        <p className="footnote">比例为基于访谈信息的初步估算，不代表精确测评。</p>
      </Section>

      <Section id="diagnosis" eyebrow="问题定位" title="核心问题诊断">
        <Diagnosis />
      </Section>

      <Section eyebrow="能力重构" title="竞争力维度">
        <Competitiveness />
      </Section>

      <Section eyebrow="AI 工作流" title="AI 使用方式升级">
        <AiUpgrade />
      </Section>

      <Section id="portfolio-plan" eyebrow="最重要的资产" title="作品集 / 项目路径">
        <PortfolioPaths />
      </Section>

      <Section id="seven-day-plan" eyebrow="立即执行" title="7 天行动计划">
        <SevenDayPlan />
      </Section>

      <Section eyebrow="阶段路线" title="14 天 / 30 天路线">
        <Roadmap />
      </Section>

      <section className="reminder-section">
        <div className="section-inner">
          <p className="eyebrow">关键提醒</p>
          <h2>{reportData.finalReminder}</h2>
        </div>
      </section>

      <Cta />
    </main>
    </>
  );
}

export default App;
