import React from 'react';
import TeacherBox from '../instrumentsbox/TacherBox';

function Teacher() {
    return (
        <main id=''>
            <section className='container-fluid bg_color_blye blog_maim_blye flex-row justify-content-between align-items-center'>
                <div className='container row m0auto d-flex justify-content-between align-items-center pb-5 pt-5 contBlog1'>
                    <div className='row col-12 col-sm-12 col-md-8 col-xl-8 blog_row'>
                        <h1 className='text-green txt_blog col-sm-12'>Become a teachers</h1>
                    </div>
                </div>
            </section>
            <TeacherBox />
        </main>

    );
}

export default Teacher;

