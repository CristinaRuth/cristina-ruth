import React from 'react';

class Tags extends React.Component {
    render() {
        const tags = this.props.tags;
        return (<div className="post-tags">
            {tags && tags.map((tag, index) => {
                return <Tag
                    key={index}
                    totalTags={tags.length}
                    currentIndex={index}
                    value={tag}
                    filterPosts={this.props.filterPosts}
                />
            })}
        </div>
        );
    }
}

class Tag extends React.Component {
    handleClick = () => {
        const tagName = this.props.value;
        this.props.filterPosts(tagName);
        try {
            var gtag = window.gtag;
            gtag('event', 'blogFilter', {
                'event_category': 'engagement',
                'event_label': tagName
            });
        } catch (err) { }
    }
    render() {
        const tagName = this.props.value;
        const canFilterPost = typeof (this.props.filterPosts) !== "undefined";

        return (
            <React.Fragment>
                {canFilterPost &&
                    <span className="blog-tag" onClick={this.handleClick}>#{tagName}</span>
                }

                {!canFilterPost &&
                    <a href={`/blog?tag=${tagName}`} className="blog-tag">#{tagName}</a>
                }

                {this.props.currentIndex < (this.props.totalTags - 1) ? " " : null}
            </React.Fragment>
        );

    }
}

export default Tags;