import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'feature1.title',
    Svg: require('@site/static/img/xcharts1.svg').default,
    description: (
      <>
        <Translate>feature1.desc</Translate>
      </>
    ),
  },
  {
    title: 'feature2.title',
    Svg: require('@site/static/img/xcharts2.svg').default,
    description: (
      <>
        <Translate>feature2.desc</Translate>
      </>
    ),
  },
  {
    title: 'feature3.title',
    Svg: require('@site/static/img/xcharts3.svg').default,
    description: (
      <>
        <Translate>feature3.desc</Translate>
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Translate>{title}</Translate></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
