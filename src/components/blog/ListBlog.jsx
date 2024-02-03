import React, { useEffect, useState } from 'react';
import { usePosts } from '../hooks/useSortedPosts';
import { useFetching } from '../hooks/useFetching';
import ResponseServise from '../../API/ResponseService';
import { getPageCount, getPagesArray } from '../../utils/pages';
import Pagination from '../UI/pagination/Pagination';
import PostList from '../UI/PostList';

function ListBlog() {
    function readBlog() {
        window.location.assign('http://localhost:3000/blogOne');
        //alert('READ BLOG');
    }

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
                <div>
                    <div className='line-blye mt-4 mb-4 row'></div>
                    <div className='row'>
                        <img src="../img/theach2.jpg" alt="mein" className='imgblogBig col-sm-12 col-md-4 col-xl-4' />
                        <div className='col-sm-12 col-md-8 col-xl-8'>
                            <h2 className='text-green_blog'>Die Violine oder Geige</h2>
                            <p className='text-blye'>Die Violine oder Geige ist ein zu den Kastenhalslauten gehörendes Streichinstrument. Ihre vier Saiten (g – d1 – a1 – e2) werden hauptsächlich mit den Haaren eines Bogens gestrichen (italienisch coll’arco), selten mit der Stange desselben (italienisch col legno) oder den Bogenhaaren geschlagen (ital. battuto) oder auch mit den Fingern gezupft (italienisch pizzicato). </p>
                            <p className='text-green_blog readBlog' onClick={readBlog}>Read more &gt;&gt;</p>
                            <div className='row'>
                                <p className='col-4 text-blye'><b>Text</b><span className='ps-2'>Sian</span></p>
                                <p className='col-4 text-blye'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                                <p className='col-4 text-blye'><b>Read</b><span className='ps-2'>1 min</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='line-blye mt-4 mb-4 row'></div>
                    <div className='row'>
                        <img src="../img/theach2.jpg" alt="mein" className='imgblogBig col-sm-12 col-md-4 col-xl-4' />
                        <div className='col-sm-12 col-md-8 col-xl-8'>
                            <h2 className='text-green_blog'>Die Violine oder Geige</h2>
                            <p className='text-blye'>Die Violine oder Geige ist ein zu den Kastenhalslauten gehörendes Streichinstrument. Ihre vier Saiten (g – d1 – a1 – e2) werden hauptsächlich mit den Haaren eines Bogens gestrichen (italienisch coll’arco), selten mit der Stange desselben (italienisch col legno) oder den Bogenhaaren geschlagen (ital. battuto) oder auch mit den Fingern gezupft (italienisch pizzicato). </p>
                            <p className='text-green_blog readBlog' onClick={readBlog}>Read more &gt;&gt;</p>
                            <div className='row'>
                                <p className='col-4 text-blye'><b>Text</b><span className='ps-2'>Sian</span></p>
                                <p className='col-4 text-blye'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                                <p className='col-4 text-blye'><b>Read</b><span className='ps-2'>1 min</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='line-blye mt-4 mb-0 '></div>
            </div>
            <Pagination page={page} changePage={changePage} totalPages={toalPages}/>
        </section>

    );
}

export default ListBlog;

