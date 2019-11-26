import React from 'react';
import _ from 'lodash';
import { getPages, Link, safePrefix } from '../utils';
import ToolsBlockArticle from './ToolsBlockArticle';

export default class ToolsBlock extends React.Component {
  render() {
    let display_tools = _.orderBy(getPages(this.props.pageContext.pages, '/tools'), 'frontmatter.date', 'desc');
    const tools = display_tools.filter((x) => { return x.relativePath.indexOf("tools/index.md") === -1; })
    let recent_posts = tools.slice(0, _.get(this.props, 'section.num_displayed'));
    return (
      <section id={_.get(this.props, 'section.section_id')} className="block">
        <h2 className="block-title underline">{_.get(this.props, 'section.title')}</h2>
        <div className="post-feed">
          {_.map(recent_posts, (post, post_idx) => (
            <ToolsBlockArticle
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
