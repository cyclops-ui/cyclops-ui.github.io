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
    const all = {
        background: "white",
    };

    const letters = {
        "text-align": "left",
        position: "relative",
        overflow: "hidden",
        background: "white",
        color: "#00152A",
        float: "right",
        width: "40%",
        margin: "0",
    };
    const image = {
        float: "right",
        width: "30%",
    };
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <img src={helmsman} style={image}/>
            <div className="container" style={letters}>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/installation/prerequisites">
                        Deploy your first Cyclops module
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
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}