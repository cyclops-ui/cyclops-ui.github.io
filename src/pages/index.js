import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import helmsman from '/static/img/cyclops_helmsman.png';
import nuqleus from '/static/img/nuqleus_logo.png';

import styles from './index.module.css';
import Comparison from "../components/Comparison";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <img src={helmsman} className={styles.image}/>
            <div className={styles.letters}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/about">
                        Check it out
                    </Link>
                </div>
                <div className={styles.support}>
                    <p style={{padding: 0, margin: 0}}>Supported by</p>
                    <Link to="https://nuqleus.io/">
                        <img src={nuqleus}/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <Comparison/>
            </main>
        </Layout>
    );
}