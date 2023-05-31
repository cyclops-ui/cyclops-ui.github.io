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
import {Button} from "antd";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();

    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <img src={helmsman} className={styles.image}/>
            <div className={styles.letters}>
                <h1 className="hero__title" style={{marginBottom: 0}}>{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div style={{paddingTop: '10px', color: '#fe8801'}} >
                    <Link
                        className="demo button button--secondary button--lg button--demo"
                        to="https://docs.google.com/forms/d/e/1FAIpQLSfm9sSsmqJYsofteSrGigWMW9eOgSjoinHwjsvtjX6wOcAv9w/viewform">
                        Schedule a demo
                    </Link>
                </div>
                <div className={styles.buttons} style={{paddingTop: '10px', color: 'red!important'}}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/about">
                        Read the docs
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
    return (
        <Layout
            title={`Developer friendly Kubernetes`}
            description="Deploy your K8s workloads through a UI">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
                <Comparison/>
            </main>
        </Layout>
    );
}