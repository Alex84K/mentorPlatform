import React, { useEffect, useState } from 'react';
import BlogMainElem from './BlogMainElem';
import './blog.css';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import ResponseServise from '../../API/ResponseService';

function OneBlog() {

    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await ResponseServise.getPostById(params.id);
        setPost(response.data);
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await ResponseServise.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id)
    }, [])

    return (
        <div id='blogOne'>


            <BlogMainElem />

            <section className='container'>
                <div className='container col-xl-8 col-sm-12 col-md-12 container_blog_cast'>
                    <h2 className='text-green_blog text-center mt-5 mb-5'>{post.id}.{post.title}</h2>
                    <div>
                        <div className='line-blye mt-4 mb-4 '></div>
                        <div className='row ps-3'>
                            <p className='col-4 text-blye pMobi'><b>Text</b><span className='ps-2'>Sian</span></p>
                            <p className='col-4 text-blye pMobi'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                            <p className='col-4 text-blye pMobi'><b>Read</b><span className='ps-2'>1 min</span></p>
                        </div>
                        <div className='line-blye mt-2 mb-4 '></div>

                        <img src="../img/skripka.jpg" alt="mein" className='imgblogBigSelf col-sm-12 col-md-12 col-xl-12' />

                        <p className='mt-5 mb-5'>{post.body}</p>

                        <div className='col-sm-12 col-md-8 col-xl-8'>

                        </div>
                    </div>

                    <div className='line-blye mt-4 mb-4 '></div>
                    <div className='row ps-3'>
                        <p className='col-4 text-blye pMobi'><b>Text</b><span className='ps-2'>Sian</span></p>
                        <p className='col-4 text-blye pMobi'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                        <p className='col-4 text-blye pMobi'><b>Read</b><span className='ps-2'>1 min</span></p>
                    </div>
                    <div className='line-blye mt-2 mb-4 '></div>
                    <div className='comment'>
                        <h3 className='text-green_blog text-center mt-5 mb-5'>Comments</h3>
                        {isComLoading ? <p>Gruzim</p> : <div>
                            {comments.map(comm => <div key={comm.id} style={{ marginTop: 15 }}>
                                <h5>{comm.email}</h5>
                                <p className='ms-3'>{comm.body}</p>
                            </div>)}
                        </div>}
                    </div>
                </div>

            </section>

        </div>

    );
}

export default OneBlog;

