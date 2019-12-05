import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';
import { Layout } from '../components/index';
import { htmlToReact, safePrefix, getPages } from '../utils';
import Tags from '../components/Tags';
import { Article } from '../components/Article';
import { PostThank } from '../components/PostThank';
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    const tags = this.props.pageContext.frontmatter.tags;
    const title = this.props.pageContext.frontmatter.title;
    this.tags = tags;
    this.title = title;
    this.posts = this.getOtherPosts(tags, title);
  }

  getOtherPosts = (tags, title) => {
    const origPosts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
    const origPostsWithoutCurrentPost = _.filter(origPosts, function (o) {
      return o.frontmatter.title.indexOf(title) === -1;
    });

    let tagRelatedPosts = [];
    tags = tags || [];
    let posts = [];

    function filterPost(tagName) {
      const filteredPosts = _.filter(origPostsWithoutCurrentPost, function (o) {
        return o.frontmatter.tags.includes(tagName)
          && !tagRelatedPosts.includes(o);
      });
      return filteredPosts;
    }

    //filter by similar tags
    for (var i = 0; i < tags.length; i++) {
      const tagParam = tags[i];
      if (tagParam.length > 0) {
        let filteredPosts = filterPost(tagParam);
        if (filteredPosts.length > 0) {
          tagRelatedPosts = tagRelatedPosts.concat(filteredPosts)
        }
      }
    }

    const maxPosts = 4;

    //select max random posts from matching tag posts
    if (tagRelatedPosts.length === maxPosts) {
      posts = tagRelatedPosts;
    }
    else if (tagRelatedPosts.length > maxPosts) {
      let currentCount = 0;
      while (currentCount < maxPosts) {
        const randomPost = tagRelatedPosts[Math.floor(Math.random() * tagRelatedPosts.length)];
        if (!posts.includes(randomPost)) {
          posts.push(randomPost);
          currentCount++;
        }
      }
    }
    //select max random other posts if no tags found
    else if (tagRelatedPosts.length < maxPosts) {
      const origPostsLeft = origPostsWithoutCurrentPost.length - tagRelatedPosts.length;
      const postsToGet = maxPosts - tagRelatedPosts.length;
      posts.concat(tagRelatedPosts);
      if (postsToGet <= origPostsLeft) {
        let currentCount = posts.length;
        while (currentCount < maxPosts) {
          const randomPost = origPostsWithoutCurrentPost[Math.floor(Math.random() * origPostsWithoutCurrentPost.length)];
          if (!posts.includes(randomPost)) {
            posts.push(randomPost);
            currentCount++;
          }
        }
      }
    }
    return posts;
  }

  render() {
    let tags = this.tags;
    let posts = this.posts;
    return (
      <Layout {...this.props}>
        <article className="post post-full">
          <header className="post-header">
            <h1 className="post-title underline">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
          </header>
          {_.get(this.props, 'pageContext.frontmatter.subtitle') &&
            <div className="post-subtitle">
              {htmlToReact(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
            </div>
          }
          {_.get(this.props, 'pageContext.frontmatter.content_img_path') &&
            <div className="post-thumbnail">
              <img src={safePrefix(_.get(this.props, 'pageContext.frontmatter.content_img_path'))} alt={_.get(this.props, 'pageContext.frontmatter.title')} />
            </div>
          }
          <div className="post-content">
            {htmlToReact(_.get(this.props, 'pageContext.html'))}
          </div>
          <footer className="post-meta">
            <time className="published"
              dateTime={moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'pageContext.frontmatter.date')).strftime('%A, %B %e, %Y')}</time>
            <Tags tags={tags} />
          </footer>
        </article>
        <PostThank />
        {posts.length > 0 &&
          <React.Fragment>
            <section id="other-posts">
              <h2 className="block-title underline">Other Posts You May Like</h2>
              <div className="post-feed">
                {_.map(posts, (post, post_idx) =>
                  (
                    <Article key={post_idx}
                      post={post}
                      index={post_idx}
                      isUseH3ForHeader={true}
                    />
                  ))}
              </div>
            </section>
          </React.Fragment>
        }
      </Layout>
    );
  }
}