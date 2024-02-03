import React, { useEffect, useState } from 'react';
import './teacher.css';
import { useParams } from 'react-router-dom';
import ResponseServise from '../../API/ResponseService';
import { useFetching } from '../hooks/useFetching';

function Teacherinformation() {
    const params = useParams();
    console.log(params.id);
    const [teacher, setTeacher] = useState({});

    function subm() {
        alert("Submit your application");
    }

    const [fechById] = useFetching( async (id) => {
        const response = await ResponseServise.getById(params.id);
        setTeacher(response.data)
    })

    useEffect(() => {
        fechById(params.id)
    }, []);



    return (
        <main id='teacherinfoOne container' >
            <div className='row container m0auto mt-5'>
                <div className='row m0auto col-12 border_blue_big bg_cast p-5'>
                    <div className='dL col-xl-8 col-sm-12 col-md-6 pe-3'>
                    <h1 className='text-green'></h1>
                        <div className="datas col-12">
                            <h1 className='text-green'>{teacher.name}</h1>
                            <div className="row">
                                <p className="pExpiriens">Experience <span className="spanCartData">{teacher.username}</span></p>
                                <p className="pExpiriens">Payment <span className="spanCartData">{teacher.website}</span></p>
                            </div>

                        </div>
                        <div className="">
                            <button type="button" className="buttn_green mb-3" onClick={subm}>Submit your application</button>
                        </div>
                        <h3 className='text-green'>About Me</h3>
                        <p className='text-blye'>Creator of the development at MaximaTelecom with its historical Wi-Fi project in the Moscow metro, author of several patents at the interface between the network and advertising technologies, co-author of the concept of the Gazprom ecosystem, participant in the international wireless communication communities WBA, TIP and IETF, now STO JSC MTT, and just a good person
                        </p>
                        <h3 className='text-green'>What can I help with?</h3>
                        <p className='text-blye'>I can help with team management, digital transformation for C-level managers
                            CompetenciesLeadership, Architecture review</p>
                    </div>
                    <div className='dR col-xl-4 col-sm-12 col-md-6 '>
                        <div>
                            <img src="../img/theach2.jpg" alt="mein" className='imgTeachBig col-12 mb-3' />
                            <div className='contakt d-flex flex-row'>
                                <img src="../img/telephone.svg" alt="mein" className='iconContakt col-12 ms-3' />
                                <p className='ms-3'>{teacher.phone}</p>
                            </div>
                            <div className='contakt d-flex flex-row'>
                                <img src="../img/send.svg" alt="mein" className='iconContakt col-12 ms-3' />
                                <p className='ms-3'>{teacher.website}</p>
                            </div>
                            <div className='contakt d-flex flex-row'>
                                <img src="../img/skype 1.svg" alt="mein" className='iconContakt col-12 ms-3' />
                                <p className='ms-3'>{teacher.website}</p>
                            </div>
                            <div className='contakt d-flex flex-row'>
                                <img src="../img/mail.svg" alt="mein" className='iconContakt col-12 ms-3' />
                                <p className='ms-3'>{teacher.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Teacherinformation;

