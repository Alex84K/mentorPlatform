import React from 'react';

function ListBlog() {
    function readBlog() {
        window.location.assign('http://localhost:3000/blogOne');
        //alert('READ BLOG');
    }
    return (
        <section className='container'>
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
            </section>

    );
}

export default ListBlog;

