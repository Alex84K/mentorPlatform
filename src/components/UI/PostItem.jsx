import React from "react";
import { useNavigate} from 'react-router-dom';

function PostItem(props) {
    const navigate = useNavigate();
    return (
        <section className='container'>

<div className='container col-xl-8 col-sm-12 col-md-12 container_blog_cast'>
                <div>
                    <div className='line-blye mt-4 mb-4 row'></div>
                    <div className='row'>
                        <img src="../img/theach2.jpg" alt="mein" className='imgblogBig col-sm-12 col-md-4 col-xl-4' />
                        <div className='col-sm-12 col-md-8 col-xl-8'>
                            <h2 className='text-green_blog'>{props.post.title}</h2>
                            <p className='text-blye'>{props.post.body}</p>
                            <div className='post__btns'>
                </div>
                            <p className='text-green_blog readBlog' onClick={() => navigate(`/blogOne/${props.post.id}`)}>Read more &gt;&gt;</p>
                            <div className='row'>
                                <p className='col-4 text-blye'><b>Text</b><span className='ps-2'>Sian</span></p>
                                <p className='col-4 text-blye'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                                <p className='col-4 text-blye'><b>Read</b><span className='ps-2'>1 min</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PostItem;