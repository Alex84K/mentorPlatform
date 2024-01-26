import React from 'react';
import BlogMainElem from './BlogMainElem';
import './blog.css';

function OneBlog() {
    return (
        <div id='blogOne'>
            <BlogMainElem />

            <section className='container'>
                <div className='container col-xl-8 col-sm-12 col-md-12 container_blog_cast'>
                    <h2 className='text-green_blog text-center mt-5 mb-5'>Die Violine oder Geige</h2>
                    <div>
                        <div className='line-blye mt-4 mb-4 '></div>
                        <div className='row ps-3'>
                            <p className='col-4 text-blye pMobi'><b>Text</b><span className='ps-2'>Sian</span></p>
                            <p className='col-4 text-blye pMobi'><b>Date</b><span className='ps-2'>10.Oct 2023</span></p>
                            <p className='col-4 text-blye pMobi'><b>Read</b><span className='ps-2'>1 min</span></p>
                        </div>
                        <div className='line-blye mt-2 mb-4 '></div>

                        <img src="../img/skripka.jpg" alt="mein" className='imgblogBigSelf col-sm-12 col-md-12 col-xl-12' />

                        <p className='mt-5 mb-5'>Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet. It involves various specialized fields, each with its own set of skills and techniques. While some individuals might view web development as a holistic process, it can be broken down into several key areas that are essential for building a functional and visually appealing website.
                            Frontend Development:
                            Frontend development focuses on the user-facing aspects of a website. It involves creating the visual elements that users interact with directly. Frontend developers use a combination of languages such as HTML, CSS, and JavaScript to build and style the layout, design, and interactivity of the website. They need to have a strong understanding of user experience (UX) and user interface (UI) design to ensure that the website is both aesthetically pleasing and user-friendly.
                            Backend Development:
                            Backend development involves the behind-the-scenes functionality of a website. It includes server-side scripting, databases, and the logic that operates behind the scenes to ensure that the frontend works smoothly. Backend developers work with programming languages such as Ruby, Python, PHP, and Java, and frameworks such as Node.js, Django, and Laravel. They are responsible for building and maintaining the server, application, and database that power the website.
                            DevOps (Development and Operations):
                            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). DevOps professionals work to shorten the systems development life cycle and provide continuous delivery with high software quality. They utilize various tools to automate the software development process, including coding, building, testing, and deployment. DevOps engineers often work closely with both frontend and backend developers to ensure a smooth and efficient development and deployment process.
                            Design:
                            Design is a crucial aspect of web development that focuses on creating visually appealing and intuitive interfaces. Web designers use their creative skills to develop the overall look and feel of a website. They work with graphic design tools and software to create layouts, color schemes, typography, and other visual elements that contribute to the overall user experience. Good design is essential for attracting and retaining users on a website.
                            Understanding and mastering these four key areas of web development can open up numerous career opportunities in the ever-evolving field of technology. It is important for web developers to stay updated with the latest trends and technologies and continuously enhance their skills to build innovative and high-quality websites that meet the needs of modern users.</p>

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
                </div>
            </section>

        </div>

    );
}

export default OneBlog;

