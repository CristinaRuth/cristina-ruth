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
                />
            })}
        </div>
        );
    }
}

function Tag(props) {
    const tagName = props.value;
    return (<React.Fragment>
        <a href={`/blog?tag=${tagName}`} className="blog-tag">#{tagName}</a>
        {props.currentIndex < (props.totalTags - 1) ? " " : null}
    </React.Fragment>
    );
}

export default Tags;