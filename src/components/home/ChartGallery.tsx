import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import styles from './ChartGallery.module.css';

type Group = 'builtin' | 'extra';

type ChartItem = {
  id: string;
  nameKey: string;
  name: string;
  group: Group;
  art: JSX.Element;
};

const PLOT = {left: 26, right: 186, top: 18, bottom: 108};

/** XCharts default theme uses a thin axis and dashed split lines. */
function AxisFrame(): JSX.Element {
  const splitY = [18, 40.5, 63, 85.5, 108];
  const splitLabels = [100, 75, 50, 25, 0];
  const xLabels = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <g stroke="var(--xc-chart-split)" strokeWidth="0.7" strokeDasharray="2.5 3">
        {splitY.map((y) => (
          <line key={y} x1={PLOT.left} y1={y} x2={PLOT.right} y2={y} />
        ))}
      </g>
      <g stroke="var(--xc-chart-axis)" strokeWidth="0.8">
        <line x1={PLOT.left} y1={PLOT.top - 4} x2={PLOT.left} y2={PLOT.bottom} />
        <line x1={PLOT.left} y1={PLOT.bottom} x2={PLOT.right + 2} y2={PLOT.bottom} />
      </g>
      <g fill="var(--xc-chart-text)" fontSize="6" fontFamily="inherit">
        {splitLabels.map((label, index) => (
          <text key={label} x={PLOT.left - 3} y={splitY[index] + 2} textAnchor="end">
            {label}
          </text>
        ))}
        {xLabels.map((label, index) => (
          <text key={label} x={40 + index * 26} y={PLOT.bottom + 8} textAnchor="middle">
            {label}
          </text>
        ))}
      </g>
    </>
  );
}

function polar(cx: number, cy: number, radius: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

function pieSlice(
  cx: number,
  cy: number,
  radius: number,
  start: number,
  end: number,
): string {
  const from = polar(cx, cy, radius, start);
  const to = polar(cx, cy, radius, end);
  const largeArc = end - start > 180 ? 1 : 0;
  return `M${cx} ${cy} L${from.x} ${from.y} A${radius} ${radius} 0 ${largeArc} 1 ${to.x} ${to.y} Z`;
}

function LineArt(): JSX.Element {
  const points: [number, number][] = [
    [40, 84],
    [66, 56],
    [92, 78],
    [118, 34],
    [144, 62],
    [170, 26],
  ];
  const path = points
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x} ${y}`)
    .join(' ');

  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <AxisFrame />
      <path
        d={path}
        fill="none"
        stroke="var(--xc-chart-1)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="2.1"
          fill="var(--xc-chart-bg)"
          stroke="var(--xc-chart-1)"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

function BarArt(): JSX.Element {
  const bars = [
    {x: 33, h: 30},
    {x: 59, h: 56},
    {x: 85, h: 38},
    {x: 111, h: 68},
    {x: 137, h: 44},
    {x: 163, h: 60},
  ];

  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <AxisFrame />
      {bars.map((bar) => (
        <rect
          key={bar.x}
          x={bar.x}
          y={108 - bar.h}
          width="14"
          height={bar.h}
          fill="var(--xc-chart-1)"
        />
      ))}
    </svg>
  );
}

function PieArt(): JSX.Element {
  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <g stroke="var(--xc-chart-bg)" strokeWidth="1.2">
        <path d={pieSlice(100, 64, 40, 0, 100)} fill="var(--xc-chart-1)" />
        <path d={pieSlice(100, 64, 40, 100, 190)} fill="var(--xc-chart-2)" />
        <path d={pieSlice(100, 64, 40, 190, 280)} fill="var(--xc-chart-3)" />
        <path d={pieSlice(100, 64, 40, 280, 360)} fill="var(--xc-chart-5)" />
      </g>
    </svg>
  );
}

function RadarArt(): JSX.Element {
  const center = {x: 100, y: 64};
  const point = (index: number, radius: number) => {
    const angle = ((-90 + index * 72) * Math.PI) / 180;
    return `${center.x + radius * Math.cos(angle)},${center.y + radius * Math.sin(angle)}`;
  };
  const ring = (radius: number) =>
    [0, 1, 2, 3, 4].map((index) => point(index, radius)).join(' ');
  const series = (values: number[]) =>
    values.map((value, index) => point(index, 40 * value)).join(' ');

  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <g fill="none" stroke="var(--xc-chart-split)" strokeWidth="0.8">
        <polygon points={ring(40)} />
        <polygon points={ring(26)} />
        <polygon points={ring(13)} />
        {[0, 1, 2, 3, 4].map((index) => {
          const [x, y] = point(index, 40).split(',').map(Number);
          return <line key={index} x1={center.x} y1={center.y} x2={x} y2={y} />;
        })}
      </g>
      <polygon
        points={series([0.9, 0.55, 0.72, 0.62, 0.86])}
        fill="var(--xc-chart-1)"
        fillOpacity="0.13"
        stroke="var(--xc-chart-1)"
        strokeWidth="1.5"
      />
      <polygon
        points={series([0.5, 0.78, 0.45, 0.82, 0.54])}
        fill="var(--xc-chart-2)"
        fillOpacity="0.1"
        stroke="var(--xc-chart-2)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GaugeArt(): JSX.Element {
  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <path
        d="M61.9 92 A44 44 0 1 1 138.1 92"
        fill="none"
        stroke="var(--xc-chart-split)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M61.9 92 A44 44 0 1 1 138.1 92"
        fill="none"
        stroke="var(--xc-chart-1)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="129 185"
      />
      <line
        x1="100"
        y1="70"
        x2="125.3"
        y2="47.3"
        stroke="var(--xc-chart-text)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="100"
        cy="70"
        r="3.2"
        fill="var(--xc-chart-bg)"
        stroke="var(--xc-chart-1)"
        strokeWidth="1.5"
      />
      <g fill="var(--xc-chart-text)" fontFamily="inherit" textAnchor="middle">
        <text x="100" y="86" fontSize="10" fontWeight="600">
          67
        </text>
        <text x="58" y="104" fontSize="6">
          0
        </text>
        <text x="142" y="104" fontSize="6">
          100
        </text>
      </g>
    </svg>
  );
}

function FunnelArt(): JSX.Element {
  const stages = [
    {points: '38,18 162,18 148,38 52,38', color: 'var(--xc-chart-1)'},
    {points: '52,40 148,40 134,60 66,60', color: 'var(--xc-chart-2)'},
    {points: '66,62 134,62 120,82 80,82', color: 'var(--xc-chart-3)'},
    {points: '80,84 120,84 106,104 94,104', color: 'var(--xc-chart-4)'},
  ];

  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      {stages.map((stage) => (
        <polygon
          key={stage.points}
          points={stage.points}
          fill={stage.color}
          stroke="var(--xc-chart-bg)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function TreemapArt(): JSX.Element {
  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <g stroke="var(--xc-chart-bg)" strokeWidth="1.5">
        <rect x="24" y="16" width="62" height="88" fill="var(--xc-chart-1)" />
        <rect x="86" y="16" width="90" height="52" fill="var(--xc-chart-2)" />
        <rect x="86" y="68" width="44" height="36" fill="var(--xc-chart-3)" />
        <rect x="130" y="68" width="46" height="36" fill="var(--xc-chart-4)" />
      </g>
    </svg>
  );
}

function Pie3DArt(): JSX.Element {
  return (
    <svg viewBox="0 0 200 130" className={styles.svg} role="presentation">
      <ellipse cx="100" cy="76" rx="44" ry="24" fill="var(--xc-chart-depth)" />
      <ellipse cx="100" cy="64" rx="44" ry="24" fill="var(--xc-chart-1)" />
      <g stroke="var(--xc-chart-bg)" strokeWidth="1">
        <path
          d="M100 64 L100 40 A44 24 0 0 1 138.1 76 Z"
          fill="var(--xc-chart-1)"
        />
        <path
          d="M100 64 L138.1 76 A44 24 0 0 1 61.9 76 Z"
          fill="var(--xc-chart-2)"
        />
        <path
          d="M100 64 L61.9 76 A44 24 0 0 1 100 40 Z"
          fill="var(--xc-chart-3)"
        />
      </g>
      <ellipse cx="82" cy="52" rx="12" ry="4" fill="#ffffff" opacity="0.18" />
    </svg>
  );
}

const charts: ChartItem[] = [
  {
    id: 'line',
    nameKey: 'home.chart.line',
    name: '折线图',
    group: 'builtin',
    art: <LineArt />,
  },
  {
    id: 'bar',
    nameKey: 'home.chart.bar',
    name: '柱状图',
    group: 'builtin',
    art: <BarArt />,
  },
  {
    id: 'pie',
    nameKey: 'home.chart.pie',
    name: '饼图 / 环形图',
    group: 'builtin',
    art: <PieArt />,
  },
  {
    id: 'radar',
    nameKey: 'home.chart.radar',
    name: '雷达图',
    group: 'builtin',
    art: <RadarArt />,
  },
  {
    id: 'gauge',
    nameKey: 'home.chart.gauge',
    name: '仪表盘',
    group: 'extra',
    art: <GaugeArt />,
  },
  {
    id: 'funnel',
    nameKey: 'home.chart.funnel',
    name: '漏斗图',
    group: 'extra',
    art: <FunnelArt />,
  },
  {
    id: 'treemap',
    nameKey: 'home.chart.treemap',
    name: '矩形树图',
    group: 'extra',
    art: <TreemapArt />,
  },
  {
    id: 'pie3d',
    nameKey: 'home.chart.pie3d',
    name: '3D 饼图',
    group: 'extra',
    art: <Pie3DArt />,
  },
];

const filters = [
  {id: 'all', key: 'home.gallery.all', label: '全部'},
  {id: 'builtin', key: 'home.gallery.builtin', label: '内置图表'},
  {id: 'extra', key: 'home.gallery.extra', label: '扩展图表'},
] as const;

export default function ChartGallery(): JSX.Element {
  const [filter, setFilter] = useState<'all' | Group>('all');
  const visible = charts.filter((chart) => filter === 'all' || chart.group === filter);

  return (
    <section className={styles.section} id="charts">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>{translate({id: 'home.gallery.eyebrow', message: '图表类型'})}</p>
            <h2 className={styles.title}>
              {translate({id: 'home.gallery.title', message: '覆盖常见的数据表达'})}
            </h2>
            <p className={styles.subtitle}>
              {translate({
                id: 'home.gallery.subtitle',
                message: '从基础折线到 3D 可视化，同一套 API 全部搞定。',
              })}
            </p>
          </div>
          <div className={styles.filters} role="group" aria-label={translate({id: 'home.gallery.filter', message: '筛选图表类型'})}>
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                className={filter === item.id ? `${styles.filter} ${styles.filterActive}` : styles.filter}
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}>
                {translate({id: item.key, message: item.label})}
              </button>
            ))}
          </div>
        </div>

        <ul className={styles.grid}>
          {visible.map((chart) => (
            <li key={chart.id}>
              <Link className={styles.card} to="/examples">
                <div className={styles.art}>{chart.art}</div>
                <div className={styles.meta}>
                  <span className={styles.name}>
                    {translate({id: chart.nameKey, message: chart.name})}
                  </span>
                  <span className={styles.tag}>
                    {chart.group === 'builtin'
                      ? translate({id: 'home.gallery.tag.builtin', message: '内置'})
                      : translate({id: 'home.gallery.tag.extra', message: '扩展'})}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <span>
            {translate({
              id: 'home.gallery.more',
              message: '还支持 K 线、热力、甘特、桑基等 20+ 图表类型。',
            })}
          </span>
          <Link className={styles.moreLink} to="/examples">
            {translate({id: 'home.gallery.cta', message: '在 Demo 中体验全部图表'})}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
