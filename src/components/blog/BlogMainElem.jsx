import React from 'react';

function BlogMainElem() {

    function postBlog() {
        window.location.assign('http://localhost:3000/postblog');
        //alert('Post blog');
    }


    return (
        <main className='container-fluid bg_color_blye blog_maim_blye flex-row justify-content-between align-items-center'>
            <div className='container row m0auto d-flex justify-content-between align-items-center pb-5 pt-5 contBlog1'>
                <div className='row col-12 col-sm-12 col-md-8 col-xl-8 blog_row'>
                    <h1 className='text-green txt_blog col-sm-12'>Blogs</h1>
                    <button className='btn_cast col-sm-12 ms-3' onClick={postBlog}>Post a Blog</button>
                </div>
                <div className='row col-12 col-sm-12 col-md-4 col-xl-4'>
                    <div className="input-group mb-3 searchcastom ">
                        <input type="text" className="form-control " placeholder="Search" />
                        <button className="btn btn-success bg_color_fff" type="submit"><img src="../img/Shape.svg" alt="mein" className='iconContakt searchcastom ' /></button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default BlogMainElem;

