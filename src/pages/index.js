import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import helmsman from '/static/img/cyclops_helmsman.png';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/*<Link*/}
          {/*  className="button button--secondary button--lg"*/}
          {/*  to="/docs/intro">*/}
          {/*  Docusaurus Tutorial - 5min ⏱️*/}
          {/*</Link>*/}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const yamlString = 'apiVersion: apps/v1\n' +
      'kind: Deployment\n' +
      'metadata:\n' +
      '  name: nginx-deployment\n' +
      '  labels:\n' +
      '    app: nginx\n' +
      'spec:\n' +
      '  replicas: 3\n' +
      '  selector:\n' +
      '    matchLabels:\n' +
      '      app: nginx\n' +
      '  template:\n' +
      '    metadata:\n' +
      '      labels:\n' +
      '        app: nginx\n' +
      '    spec:\n' +
      '      containers:\n' +
      '      - name: nginx\n' +
      '        image: nginx:1.14.2\n' +
      '        ports:\n' +
      '        - containerPort: 80';

  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Developer friendly Kubernetes">
      <HomepageHeader />
      <main>
          <img src={helmsman} />

          {/*<SyntaxHighlighter*/}
          {/*    language="yaml"*/}
          {/*    style={atomOneDark}*/}
          {/*    customStyle={{*/}
          {/*        borderBottomLeftRadius: '10px',*/}
          {/*        borderBottomRightRadius: '10px',*/}
          {/*        paddingLeft: '15px',*/}
          {/*        width: '30%',*/}
          {/*    }}*/}
          {/*>*/}
          {/*    {yamlString}*/}
          {/*</SyntaxHighlighter>*/}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
