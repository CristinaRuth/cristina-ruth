import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';

import { safePrefix } from '../utils';
import Header from './Header';
import Footer from './Footer';
import { GoogleAnalytics, IsGaEnabled } from './GoogleAnalytics';

export default class Body extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initialScale=1.0" />
          <meta name="google" content="notranslate" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet" />
          <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
          <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />
<style type="text/css">
  {
  `
	#mc_embed_signup{{background:"#fff", clear:"left", font:"14px Helvetica,Arial,sans-serif", width: "100%"}}
  {
  /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
     We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
  }
	#mc-embedded-subscribe-form input[type=checkbox]{{display: "inline", width: "auto", marginRight: "10px"}}
	#mergeRow-gdpr {{marginTop: "20px"}}
	#mergeRow-gdpr fieldset label {{fontWeight: "normal"}}
  #mc-embedded-subscribe-form .mc_fieldset{{border:"none", minHeight: "0px", paddingBottom: 0}}
  `
  }
</style>
          {(_.get(this.props, 'pageContext.frontmatter.template') === 'post') &&
            _.get(this.props, 'pageContext.frontmatter.canonical_url') &&
            <link rel="canonical" href={_.get(this.props, 'pageContext.frontmatter.canonical_url')} />
          }
          {
            //Global site tag (gtag.js) - Google Analytics
            IsGaEnabled() &&
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153295015-1" />}
          {GoogleAnalytics()}
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
      </React.Fragment>
    );
  }
}
