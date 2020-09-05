import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import useThemeContext from '@theme/hooks/useThemeContext';

const features = [
  {
    title: <>Library Tracking/Following</>,
    imageUrl: 'img/tracking_01_light_rp.png'/*'img/undraw_docusaurus_mountain.svg'*/,
    imageDarkUrl: 'img/tracking_01_dark_rp.png',
    description: (
      <>
        Follow series and track your reading progress in your library,
         search, and sort within it. View your library in list or a resizable grid view.
      </>
    ),
  },
  {
    title: <>Sources</>,
    imageUrl: 'img/sources_01_light_rp.png'/*'img/undraw_docusaurus_tree.svg'*/,
    imageDarkUrl: 'img/sources_01_dark_rp.png',
    description: (
      <>
        Online and offline reading/browsing from an ever expanding list of sources,
        including <code>MangaDex</code>, <code>Manganelo</code>, and <code>MangaPark</code>.
      </>
    ),
  },
  {
    title: <>Customization</>,
    imageUrl: 'img/reading_01_light_rp.png'/*'img/undraw_docusaurus_react.svg'*/,
    imageDarkUrl: 'img/reading_01_dark_rp.png',
    description: (
      <>
        Customizable UI themes/modes in settings and customizable 
        reading preferences and modes including paged and longstrip.
      </>
    ),
  },
];

const features2 = [
  {
    title: <>Reading Recommendations</>,
    imageUrl: 'img/recommendations_01_light_rp.png'/*'img/undraw_docusaurus_mountain.svg'*/,
    imageDarkUrl: 'img/recommendations_01_dark_rp.png',
    description: (
      <>
        Manga reading recommendations, updated periodically with new goodies. 
        Themed reading lists, newly updated lists, works of accomplished authors.
      </>
    ),
  },
  {
    title: <>Import</>,
    imageUrl: 'img/import_01_light_rp.png'/*'img/undraw_docusaurus_tree.svg'*/,
    imageDarkUrl: 'img/import_01_dark_rp.png',
    description: (
      <>
        Import your own manga files in .zip format! Smart import will automatically figure out what you're adding!
         Rename the manga if it doesn't correctly figure it out.
      </>
    ),
  },
  {
    title: <>Quality of Life</>,
    imageUrl: 'img/qol_01_light_rp.png'/*'img/undraw_docusaurus_tree.svg'*/,
    imageDarkUrl: 'img/qol_01_dark_rp.png',
    description: (
      <>
        Various QOL features - On chapter list pages you can view chapters in list/grid to save scrolling time,
         filter by languages, sort, and jump scroll to a specific chapter. 
      </>
    ),
  }
];

function Feature({imageUrl, imageDarkUrl, title, description}) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();
  const imgUrl = useBaseUrl(`${isDarkTheme ? imageDarkUrl : imageUrl}`);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Manga Reader for iOS and MacOS<head />">
      <header className={clsx('', styles.heroBanner)}> {/*hero hero--primary --use this for class to use ifm colors from custom.css*/}
        <div className="container">
          <img className={styles.headerImage} src="/img/logo.svg" alt="AltTitle" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://www.patreon.com/mangaxmanga'}>
              Patreon Test Flight
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://apps.apple.com/us/app/manga-x-manga/id1508425099' /*useBaseUrl('docs/')*/}>
              iOS App Store
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              href={'https://github.com/chubimauk/MangaxMangaMacOSInstall/releases'}>
              MacOS Install
            </Link>
          </div>
          
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {features2 && features2.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features2.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;