import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Multi-Language Cookbook',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: <>Easy-to-use reference of helpful patterns with code samples</>
	},
	{
		title: 'Getting Started Guides',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: <>Best practices for installation and operation of multiple languages</>
	},
	{
		title: 'Curated External Learning Resources',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				There are tons of tutorials for how to learn a programming language, we help you choose
				which one is best for each stage in your learning process.
			</>
		)
	}
];

function Feature({ Svg, title, description }) {
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
