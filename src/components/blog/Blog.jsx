import React from 'react';

import './blog.css';
import BlogMainElem from './BlogMainElem';
import ListBlog from './ListBlog';

function Blog() {
    

    return (
        <div id='blogAll'>
            <BlogMainElem />

            <ListBlog />
        </div>

    );
}

export default Blog;

