import React from 'react';
import Tags from './Tags';
import _ from 'lodash';
import moment from 'moment-strftime';
import { Link, safePrefix } from '../utils';
import { calculateEstimatedReadingTime } from '../utils/custom/postUtil';

class PostsBlockArticle extends React.Component {
    render() {
        const post = this.props.post;
        const post_idx = this.props.index;
        const tags = post.frontmatter.tags;
        const estimatedReadingTime = calculateEstimatedReadingTime(post.html);
        return (
            <article key={post_idx} className="post">
                <div className="post-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') &&
                        <Link className="post-thumbnail" to={safePrefix(_.get(post, 'url'))}><img className="thumbnail"
                            src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))} alt={_.get(post, 'frontmatter.title')} /></Link>
                    }
                    <header className="post-header">
                        <h3 className="post-title"><Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">{_.get(post, 'frontmatter.title')}</Link></h3>
                    </header>
                    <div className="post-content">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                    </div>
                    <footer className="post-meta">
                        <time className="published"
                            dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time> • {estimatedReadingTime} min read
                        <Tags tags={tags} />
                    </footer>
                </div>
            </article>
        );
    }

}

export default PostsBlockArticle;