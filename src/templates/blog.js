import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
import { getPages, Link, safePrefix } from '../utils';
import { Article } from '../components/Article';

export default class Blog extends React.Component {
  render() {
    let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
    return (
      <Layout {...this.props}>
        <div className="post-feed">
          {_.map(display_posts, (post, post_idx) =>
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
