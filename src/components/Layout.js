import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';
import { GoogleAnalytics, TrackBuyClicks, TrackDonateClicks, TrackMoreThan30SecondVisitsAsNoBounce } from './GoogleAnalytics';

export default class Body extends React.Component {

  render() {
    const isLive = typeof(window) !== "undefined" && window.location.host.indexOf("localhost") === -1;
    //const isLive = true;
    return (
      <React.Fragment>
        <Helmet>
          <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initialScale=1.0" />
          <meta name="google" content="notranslate" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" />
          <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
          {(_.get(this.props, 'pageContext.frontmatter.template') === 'post') &&
            _.get(this.props, 'pageContext.frontmatter.canonical_url') &&
            <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')} />
          }
          {
            //Global site tag (gtag.js) - Google Analytics
            isLive &&
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153295015-1" />}
          {isLive && GoogleAnalytics()}
          {isLive && TrackBuyClicks()}
          {isLive && TrackDonateClicks()}
        </Helmet>
        <div id="page" className={'site style-' + _.get(this.props, 'pageContext.site.siteMetadata.layout_style') + ' palette-' + _.get(this.props, 'pageContext.site.siteMetadata.palette')}>
          <Header {...this.props} />
          <div id="content" className="site-content">
            <div className="inner">
              <main id="main" className="site-main">
                {this.props.children}
              </main>
              <Footer {...this.props} />
            </div>
          </div>
        </div>
        {isLive && TrackMoreThan30SecondVisitsAsNoBounce()}
      </React.Fragment>
    );
  }
}
