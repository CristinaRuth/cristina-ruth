import React from 'react';
import _ from 'lodash';
import { Layout } from '../components/index';
import { getPages } from '../utils';
import { Article } from '../components/Article';
import {getQueryParameterValue} from '../utils/custom/getQueryParameter';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    const postsData = this.getPostsData();

    this.state = {
      posts: postsData.posts,
      isFiltered: postsData.isFiltered,
      origPosts: postsData.origPosts,
      currentFilter: postsData.filterName
    };
  }

  getPostsData = () => {
    const origPosts = _.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc');
    let displayPosts = origPosts;
    
    //filter by the query tag
    let isFiltered = false;
    const tagParam = getQueryParameterValue('tag');
    let filterName = "";
    if (tagParam.length > 0) {
      let filteredPosts  = _.filter(origPosts, function(o) { 
         return o.frontmatter.tags.includes(tagParam); });
      if (filteredPosts.length > 0) {
        displayPosts = filteredPosts;
        isFiltered = true;
        filterName = tagParam;
      }
    }
    return {
      isFiltered: isFiltered,
      posts: displayPosts,
      origPosts: origPosts,
      filterName: filterName
    };
  }

  resetFilter = () => {
    this.setState({
      posts: this.state.origPosts,
      isFiltered: false
    })
  }

  filterPosts = (tagName) => {
    const origPosts = this.state.origPosts;
    let filteredPosts  = _.filter(origPosts, function(o) { 
      return o.frontmatter.tags.includes(tagName); });
   if (filteredPosts.length > 0) {
     this.setState({
       posts: filteredPosts,
       isFiltered: true,
       currentFilter: tagName
     });
   }
  }

  render() {
   const posts = this.state.posts;
   const isFiltered = this.state.isFiltered;
    return (
      <Layout {...this.props}>
        {isFiltered && 
            <React.Fragment>
              <p>Filtering by tag: {this.state.currentFilter}</p>
            <p className="block-cta">
              <button className="button" role="button" onClick={this.resetFilter}>See All Posts</button>
            </p>
            </React.Fragment>
          }
        <div className="post-feed">
          {_.map(posts, (post, post_idx) =>
            (
              <Article key={post_idx}
                post={post}
                index={post_idx} 
                filterPosts={this.filterPosts}
                />
            ))}
        </div>
      </Layout>
    );
  }
}
