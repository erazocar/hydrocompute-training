import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
         Streamline your hydrological computations with HydroCompute's user-friendly API.
      </>
    ),
  },
  {
    title: 'Scalable',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
       Scale your environmental simulations with ease using HydroCompute's cutting-edge tech.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/flexibility-icon.svg').default,
    description: (
      <>
      Powerful and customizable framework for hydrological research and education.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
