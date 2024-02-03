import React, { useEffect, useState } from 'react';
import { usePosts } from '../hooks/useSortedPosts';
import { useFetching } from '../hooks/useFetching';
import ResponseServise from '../../API/ResponseService';
import { getPageCount, getPagesArray } from '../../utils/pages';
import Pagination from '../UI/pagination/Pagination';
import PostList from '../UI/PostList';

function ListBlog() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', qery: '' });
    const [modal, setModal] = useState(false);
    const [toalPages, setToalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.qery);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await ResponseServise.getAllPosts(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setToalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPosts();
    }, [page]);

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <section className='container'>
            <div>
                {isPostLoading ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><p>Gruzim</p></div> : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS' />}
            </div>
            <div className='container col-xl-8 col-sm-12 col-md-12 container_blog_cast'>
                <div className='line-blye mt-4 mb-0 '></div>
            </div>
            <Pagination page={page} changePage={changePage} totalPages={toalPages} />
        </section>

    );
}

export default ListBlog;

