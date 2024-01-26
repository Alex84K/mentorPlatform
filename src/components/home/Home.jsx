import React, { useState } from 'react';
import './home.css';
import InstrumentsBox from '../instrumentsbox/InstrumentsBox';
import TeacherBox from '../instrumentsbox/TacherBox';

function Home() {
    let refInpMain = React.createRef();
    let [search, setSearch] = useState("Instrument or Discipline");


    let searchMain = () => {
        console.log(refInpMain.current.value);
        let k = refInpMain.current.value;
        //alert('searchMain work  ' + k);
        setSearch(alert('searchMain work  ' + k))
    }

    function goTOformTeacher() {
        window.location.assign('http://localhost:3000/formForTeacher');
    }

    function goTODonat() {
        window.location.assign('http://localhost:3000/donat');
    }

    function seeAll(event) {
        window.location.assign('http://localhost:3000/teacher');
    }

    return (

        <div id='home'>
            <main className="home container-fluid bg_color_blye pt-3 pb-3">
                <div className='container d-flex flex-row justify-content-between row align-items-center ps-4 pe-4'>
                    <div className="mainL col-xl-6 col-sm-12 col-md-8 p-3">
                        <h1 className="hGreen txt_color_green pb-3">Find your teacher</h1>
                        <p className='txt_color_fff'>MusSkils is an open community of musician teachers,
                            ready to share knowledge and experience.</p>
                        <p className='txt_color_fff pb-3'>A proper conversation will clarify the situation better than ten hours of searching on the Internet. That's why we help those who need advice find someone and discuss their issue one on one.</p>
                        <div className="input-group mb-3 inpBox">
                            <input type="text" className="form-control" placeholder={search} ref={refInpMain} />
                            <button className="btn btn_green" onClick={searchMain} type="submit">Go</button>
                            {/*<button className="btn btn_main_cast" type="submit">Go</button>*/}
                        </div>
                    </div>
                    <img src="../img/dream_Tr.png" alt="mein" className='imgMain col-xxl-4 col-sm-0 col-md-4' />
                </div>
            </main>

            <main className='container-fluid'>
                <section className='container d-flex flex-row justify-content-between row align-items-center mainPlanBox'>
                    <h2 className="h2 text-green text-center mb-3 mt-4">How it works</h2>
                    <div className='row justify-content-center align-content-center'>
                        <div className='planBox col-12 col-sm-6 col-md-4 col-xl m-3'>
                            <h3 className='h3blye text-blye text-center pt-2'>Choose a teacher</h3>
                            <p className='text-blye text-center'>You can choose the right person based on specialty, work experience and cost of the meeting.</p>
                            <p className='text-blye text-center'>We check all mentors ourselves: no quackery.</p>
                        </div>
                        <div className='planBox col-12 col-sm-6 col-md-4 col-xl m-3'>
                            <h3 className='h3blye text-blye text-center pt-2'>Write to him</h3>
                            <p className='text-blye text-center'>Leave a request on the website. Write what you need help with and what you would like to receive.</p>
                            <p className='text-blye text-center'>Remember: a well-formulated problem is a half-solved problem. The more detailed you describe, the better.</p>
                        </div>
                        <div className='planBox col-12 col-sm-6 col-md-4 col-xl m-3'>
                            <h3 className='h3blye text-blye text-center h_3 pt-2'>Agree</h3>
                            <p className='text-blye text-center'>We will forward your application to the mentor. He will evaluate the task and contact you to discuss the details and choose a time. Each mentor determines the cost and duration of the session.
                            </p>
                            <p className='text-blye text-center'>We don’t interfere here—it’s up to you.</p>
                        </div>
                    </div>
                </section>
            </main>

            <section className='cart'>
                <div className='d-flex justify-content-center'>
                    <InstrumentsBox />
                </div>
                <div className='tbMain'>
                    <TeacherBox />
                </div>
                <div className="row justify-content-center ">
                    <button type="button" onClick={seeAll} className="btn btn-blay w-25 mt-4 border border-2">See all</button>
                </div>
            </section>

            <section className='container mt-5 '>
                <div className='row col-12  ps-5 pe-5 pt-3 pb-3 donatContainer'>
                    <div className='col-sm-12 col-md-8 col-xl-8 m0auto align-item-center'>
                        <h2 className='text-fff text-center'>Donat</h2>
                        <p className='text-fff text-center pDonat'>Finding a mentor is a difficult process. At least because it is not clear where to look for it. Absolutely the same complex process is finding students if you are an expert. This site was conceived as a place where people who need mentoring and specialists who are ready to share knowledge could find each other.
                            Our main task is to connect people and develop the community through new acquaintances and the transfer of knowledge. For our work we do not take any commission, payment for participation or other mandatory fees and rewards from either mentors or mentees. We believe that if This platform brings benefits to people, then they themselves will want to thank us for it.
                            Therefore, you have the opportunity to donate to us as much as you want. This is quite easy to do, here is how it is written.</p>
                        <div className='row donatButton'>
                            <button type="button" className="btn button_fff m0auto" onClick={goTODonat}>Give thanks</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='teacherCom container'>
                <div className='row mt-5'>
                    <h2 className='text-blye text-center mb-2'>Become a teacher</h2>
                    <p className='text-blye text-center col-md-8 col-xl-6 m0auto'>Do you have experience and want to share your knowledge and help others?
                        Join our team of mentors!
                        Fill out the form and we will definitely add you to the site.</p>
                    <div className="d-flex justify-content-center">
                        <button type="button" className=" submitButton mt-4" onClick={goTOformTeacher}>Submit your application</button>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Home;

