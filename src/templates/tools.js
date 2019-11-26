import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
import { getPages, Link, safePrefix } from '../utils';
import { Article } from '../components/Article';
import Tags from '../components/Tags';

export default class Tools extends React.Component {
  render() {
    const display_tools = _.orderBy(getPages(this.props.pageContext.pages, '/tools'), 'frontmatter.title', 'desc');
    //remove index page from results
    const tools = display_tools.filter((x) => { return x.relativePath.indexOf("tools/index.md") === -1; })
    return (
      <Layout {...this.props}>
        <div className="post-feed">
          {_.map(tools, (tool, index) =>
            (
              <Tool key={index}
                post={tool}
                index={index} />
            ))}
        </div>
      </Layout>
    );
  }
}

class Tool extends React.Component {
    render() {
        const post = this.props.post;
    const post_idx = this.props.index;
    const tags = post.frontmatter.tags;
        return (
            <article key={post_idx} className="post">
      <div className="post-inside">
        {_.get(post, 'frontmatter.thumb_img_path') &&
          <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}>
            <img className="thumbnail" src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} />
          </Link>}
        <header className="post-header">
          <h2 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h2>
        </header>
        <div className="post-content">
          <p>{_.get(post, 'frontmatter.excerpt')}</p>
        </div>
        <footer className="post-meta">
          <Tags tags={tags} />
        </footer>
      </div>
    </article>
        )
    }
}