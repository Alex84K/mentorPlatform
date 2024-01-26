import React, { useState } from 'react';
import BlogMainElem from './BlogMainElem';
import './blog.css';

function PostBlog() {

    const [check, setCheck] = useState('../img/checkOff.svg');

    function fotoLoad() {
        setCheck('../img/checkOn.svg');
        //alert('Donload!');
    }

    function publish() {
        alert('Publish blog');
    }

    return (
        <div id='postblog'>
            <BlogMainElem />
            <h2 className='text-green_blog text-center mt-5'>Publish a blog</h2>
            <div className='container'>
                <div className='formContainer container'>
                    <form className='bordFormContainer mt-5 mb-5 p-5'>
                        <div className='inputBoxSmallBlog container row moauto'>
                            <div className='inpL container col-xl-6 col-sm-12 col-md-12'>
                                <div className='blockInpBlog col-12 d-flex flex-column justify-content-center my-3'>
                                    <label >Title</label>
                                    <input className="mt-2 p-3" type="text" name="title" id="title" placeholder="Title" autofocus />
                                </div>
                                <div className='blockInpBlog d-flex flex-column mt-3'>
                                    <label>Author</label>
                                    <input className="mt-2 p-3" type="text" name="author" id="" placeholder="Author" autofocus />
                                </div>
                            </div>
                            <div className='inpR col-xl-6 col-sm-12 col-md-12'>

                                <div className='blockInpBlog d-flex flex-column mt-3'>
                                    <label>Heading</label>
                                    <input className="mt-2 p-3" type="text" name="Heading" id="" placeholder="Heading" autofocus />
                                </div>

                                <div className='blokForFotoBlog mt-2'>
                                    <p className="text-blye">Upload a profile photo (no more than 25KB)</p>
                                    <div className='flForButton d-flex flex-row'>
                                        <p onClick={fotoLoad} className='fotoBottonBlog text-fff'>Upload a photo</p>
                                        <img className='imgChek ms-3 mb-3' src={check} alt="chek" />
                                    </div>
                                </div>
                            </div>
                            <div className="txtblog ">
                                <label className='txtblog'><p>Your text</p>
                                    <textarea className="txtblog p-4" name="comment" id="" cols="30" rows="10" placeholder="Your text"></textarea>
                                </label>
                            </div>
                            <div className="d-flex justify-content-center mt-3">
                                <button type="button" className=" publishButton mt-3 mb-4" onClick={publish}>Publish</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    );
}

export default PostBlog;

