import { useState } from "react";
import React from 'react';
import './formteacher.css';

function FormForTeacher() {
    const [check, setCheck] = useState('../img/checkOff.svg');

    function fotoLoad() {
        setCheck('../img/checkOn.svg');
        //alert('Donload!');
    }

    return (
        <div id='formForTeacher'>
            <main className="home container-fluid bg_color_blye pt-3 pb-3">
                <div className='container d-flex flex-row justify-content-between row align-items-center ps-4 pe-4'>
                    <div className="mainL col-xl-8 col-sm-12 col-md-6 p-3">
                        <h1 className="hGreen txt_color_green mb-4">Become part of our team</h1>
                        <p className='txt_color_fff'>Helping others is honorable and cool. Thank you for wanting to do this. Fill out the form below and we will definitely review your application as soon as possible.</p>
                    </div>
                    <img className='imgTech col-xl-4 col-sm-0 col-md-4 mt-5 mb-5' src="../img/dream_TradingCard (7) 1.png" alt="mein" />
                </div>
            </main>

            <div className='formContainer container'>
                <form className='bordFormContainer mt-5 mb-5 p-5'>
                    <div className='inputBoxSmall container row'>
                        <div className='inpL container col-xl-6 col-sm-12 col-md-12'>
                            <div className='blockInp col-12 d-flex flex-column justify-content-center'>
                                <label >Name:</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="Name" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label >Email:</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="Email" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label >Music tool or item</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="Music tool or item" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label>Experience</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="Experience" autofocus />
                            </div>
                        </div>
                        <div className='inpR col-xl-6 col-sm-12 col-md-12'>
                            <div className='blockInp d-flex flex-column'>
                                <label >Surname</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="John" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label>Telegram</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="John" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label>Education</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="John" autofocus />
                            </div>
                            <div className='blockInp d-flex flex-column'>
                                <label>Education</label>
                                <input className="mt-2 p-3" type="text" name="firstName" id="fName" placeholder="John" autofocus />
                            </div>
                        </div>
                    </div>
                    <div className='blokForFoto '>
                        <p className="text-blye">Upload a profile photo (no more than 25KB)</p>
                        <div className='flForButton d-flex flex-row'>
                            <p onClick={fotoLoad} className='fotoBotton text-fff'>Upload a photo</p>
                            <img className='imgChek ms-3 mb-3' src={check} alt="chek" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row m-6">
                            <label className='comment col-xl-10 col-sm-12 col-md-8 m0auto'><p>Comment</p>
                                <textarea className="selfInfo" name="comment" id="" cols="30" rows="10" placeholder="tell us about yourself"></textarea>
                            </label>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button"  className=" submitButton mt-3 mb-4" >Submit your application</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default FormForTeacher;

