import React from 'react';
import {translate} from '@docusaurus/Translate';
import styles from './HeroVisual.module.css';

const weekX = [60, 134, 208, 282, 356, 430, 500];

/**
 * Decorative product visual for the homepage hero.
 * Built from pure SVG/CSS so it stays crisp on every screen and costs no images.
 */
export default function HeroVisual(): JSX.Element {
  const weekdays = translate({
    id: 'home.heroVisual.weekdays',
    message: '一 二 三 四 五 六 日',
  }).split(' ');

  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.halo} />

      <div className={styles.card}>
        <div className={styles.cardHead}>
          <div>
            <p className={styles.eyebrow}>
              {translate({id: 'home.heroVisual.eyebrow', message: '实时数据'})}
            </p>
            <p className={styles.cardTitle}>
              {translate({id: 'home.heroVisual.title', message: '周活跃用户'})}
            </p>
          </div>
          <span className={styles.live}>
            <span className={styles.liveDot} />
            LIVE
          </span>
        </div>

        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <i className={styles.dotActive} />
            {translate({id: 'home.heroVisual.active', message: '活跃用户'})}
          </span>
          <span className={styles.legendItem}>
            <i className={styles.dotNew} />
            {translate({id: 'home.heroVisual.new', message: '新增用户'})}
          </span>
          <span className={styles.range}>
            {translate({id: 'home.heroVisual.range', message: '近 7 天'})}
          </span>
        </div>

        <svg
          className={styles.chart}
          viewBox="0 0 520 300"
          role="presentation"
          focusable="false">
          <defs>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>

          {/* grid */}
          <g stroke="rgba(148,163,184,0.16)" strokeWidth="1">
            <line x1="48" y1="16" x2="504" y2="16" />
            <line x1="48" y1="76" x2="504" y2="76" />
            <line x1="48" y1="136" x2="504" y2="136" />
            <line x1="48" y1="196" x2="504" y2="196" />
            <line x1="48" y1="256" x2="504" y2="256" />
          </g>
          <g
            fill="rgba(148,163,184,0.72)"
            fontSize="10"
            textAnchor="end"
            fontFamily="inherit">
            <text x="40" y="20">6k</text>
            <text x="40" y="80">4.5k</text>
            <text x="40" y="140">3k</text>
            <text x="40" y="200">1.5k</text>
            <text x="40" y="260">0</text>
          </g>
          <g
            fill="rgba(148,163,184,0.72)"
            fontSize="10"
            textAnchor="middle"
            fontFamily="inherit">
            {weekdays.map((day, index) => (
              <text key={day} x={weekX[index]} y="282">
                {day}
              </text>
            ))}
          </g>

          {/* area + line */}
          <path
            d="M60 206 C96 200 108 178 134 176 C160 174 180 194 208 188 C236 182 250 128 282 126 C314 124 328 152 356 148 C384 144 402 88 430 92 C458 96 476 108 500 104 L500 256 L60 256 Z"
            fill="url(#heroArea)"
          />
          <path
            className={styles.line}
            d="M60 206 C96 200 108 178 134 176 C160 174 180 194 208 188 C236 182 250 128 282 126 C314 124 328 152 356 148 C384 144 402 88 430 92 C458 96 476 108 500 104"
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M60 238 C96 232 108 220 134 222 C160 224 180 236 208 230 C236 224 250 196 282 198 C314 200 328 214 356 208 C384 202 402 176 430 180 C458 184 476 190 500 186"
            fill="none"
            stroke="rgba(129,140,248,0.85)"
            strokeWidth="2"
            strokeDasharray="4 5"
            strokeLinecap="round"
          />

          {/* marker + tooltip */}
          <line
            x1="282"
            y1="126"
            x2="282"
            y2="256"
            stroke="rgba(34,211,238,0.35)"
            strokeDasharray="3 4"
          />
          <circle cx="282" cy="126" r="10" fill="rgba(34,211,238,0.14)">
            <animate
              attributeName="r"
              values="6;14;6"
              dur="2.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.8;0;0.8"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="282"
            cy="126"
            r="5"
            fill="#0b1220"
            stroke="#22d3ee"
            strokeWidth="2.5"
          />

          <g className={styles.tooltip}>
            <rect
              x="214"
              y="58"
              width="136"
              height="58"
              rx="12"
              fill="rgba(9,15,30,0.94)"
              stroke="rgba(148,163,184,0.24)"
            />
            <text
              x="230"
              y="78"
              fill="#94a3b8"
              fontSize="10"
              fontFamily="inherit">
              {translate({
                id: 'home.heroVisual.tooltipLabel',
                message: '周四 · 活跃用户',
              })}
            </text>
            <text
              x="230"
              y="100"
              fill="#f8fafc"
              fontSize="17"
              fontWeight="700"
              fontFamily="inherit">
              5,240
            </text>
            <text
              x="286"
              y="100"
              fill="#34d399"
              fontSize="11"
              fontWeight="600"
              fontFamily="inherit">
              +18.6%
            </text>
          </g>
        </svg>
      </div>

      <div className={styles.floatA}>
        <span className={styles.floatIcon}>◧</span>
        <span>
          <b>20+</b>
          <small>
            {translate({id: 'home.heroVisual.floatCharts', message: '图表类型'})}
          </small>
        </span>
      </div>

      <div className={styles.floatB}>
        <span className={styles.floatIcon}>{'{ }'}</span>
        <span>
          <b>JSON / C#</b>
          <small>
            {translate({id: 'home.heroVisual.floatConfig', message: '配置即用'})}
          </small>
        </span>
      </div>
    </div>
  );
}
