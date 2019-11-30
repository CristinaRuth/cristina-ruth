import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
import { getPages } from '../utils';
import { Article } from '../components/Article';
import {getQueryParameterValue} from '../utils/custom/getQueryParameter';

export default class Blog extends React.Component {
  render() {
    const origPosts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
    let displayPosts = origPosts;
    
    //filter by the query tag
    const tagParam = getQueryParameterValue('tag');
    if (tagParam.length > 0) {
      let filteredPosts  = _.filter(origPosts, function(o) { 
         return o.frontmatter.tags.includes(tagParam); });
      if (filteredPosts.length > 0) {
        displayPosts = filteredPosts;
      }
    }
    return (
      <Layout {...this.props}>
        <div className="post-feed">
          {_.map(displayPosts, (post, post_idx) =>
            (
              <Article key={post_idx}
                post={post}
                index={post_idx} />
            ))}
        </div>
      </Layout>
    );
  }
}
