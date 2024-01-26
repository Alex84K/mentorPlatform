import React from "react";
import { useEffect, useState } from "react";


export default function TeacherBox() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //fetch('https://jsonplaceholder.typicode.com/users')
        fetch('https://alex84k.github.io/myjsonobj/')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);


    function comToTeacher() {
        window.location.assign('http://localhost:3000/teacherinfo');
        //alert('Post blog');
    }

    return (
        <div className="theacherContainer container">
            <h2 className='text-green text-center mt-4 mb-3'>Our teachers</h2>
            <div className="row justify-content-center theacherCarts" id="theacherCarts">
                {data.map(item => (<div className="theacherCart m-2 col-12 col-sm-6 col-md-4 col-xl-3" key={item.id}>
                    <div className="row m-1 mt-3 justify-content-between">
                        <div className="col-4 ">
                            <img src="../img/theach1.jpg" alt="foto small cart" className="fotoCartSmall p-0 border border-1 rounded" />
                        </div>
                        <div className="col-6  m-1">
                            <h3 className="h3cartName ms-2" onClick={comToTeacher}>{item.fullname}</h3>
                            <p className="pToolsName ms-2">{item.speciality}</p>
                        </div>
                    </div>
                    <div className="datas col-12">
                        <div className="row">
                            <p className="pExpiriens">Experience <span className="spanCartData">{item.expiriense}</span></p>
                            <p className="pExpiriens">Payment <span className="spanCartData">{item.tel}</span></p>
                        </div>
                    </div>
                </div>))}
            </div>
            {/*<div className="row justify-content-center ">
                <button type="button" onClick={seeAll} className="btn btn-blay w-25 mt-4 border border-2">See all</button>
    </div>*/}
        </div>
    )
}