import React from 'react';
import _ from 'lodash';
import { getPages, Link, safePrefix } from '../utils';
import PostsBlockArticle from './PostsBlockArticle';

export default class PostsBlock extends React.Component {
  render() {
    let display_posts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.display_weight', 'asc');
    let recent_posts = display_posts.slice(0, _.get(this.props, 'section.num_posts_displayed'));
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block">
        <h2 className="block-title underline">{_.get(this.props, 'section.title')}</h2>
        <div className="post-feed">
          {_.map(recent_posts, (post, post_idx) => (
            <PostsBlockArticle
              key={post_idx}
              post={post}
              index={post_idx}
            />
          ))}
        </div>
        {_.get(this.props, 'section.actions') &&
          <p className="block-cta">
            {_.map(_.get(this.props, 'section.actions'), (action, action_idx) => (
              <Link key={action_idx} to={safePrefix(_.get(action, 'url'))} className="button">{_.get(action, 'label')}</Link>
            ))}
          </p>
        }
      </section>
    );
  }
}
