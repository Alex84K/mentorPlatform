import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFetching } from "../hooks/useFetching";
import ResponseServise from "../../API/ResponseService";


export default function TeacherBox() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [limit, setLimit] = useState(6);
    //const [page, setPage] = useState(1);

    const [fetchTeach] = useFetching(async () => {
        const response = await ResponseServise.getAll(limit);
        setData(response.data);
    });

    useEffect(() => {
        fetchTeach();
    }, [limit]);


    function seeAll() {
        //window.location.assign('http://localhost:3000/teacher');
        setLimit(limit + 6);
    }

    return (
        <div className="theacherContainer container">
            <h2 className='text-green text-center mt-4 mb-3'>Our teachers</h2>
            <div className="row justify-content-center theacherCarts" id="theacherCarts">
                {data.map(data => (<div className="theacherCart m-2 col-12 col-sm-6 col-md-4 col-xl-3" key={data.id}>
                    <div className="row m-1 mt-3 justify-content-between">
                        <div className="col-4 ">
                            <img src="../img/theach1.jpg" alt="foto small cart" className="fotoCartSmall p-0 border border-1 rounded" />
                        </div>
                        <div className="col-6  m-1">
                            <h3 className="h3cartName ms-2" onClick={() => navigate(`/teacherinfo/${data.id}`)} data={data.id}>{data.name}</h3>
                            <p className="pToolsName ms-2">{data.username}</p>
                        </div>
                    </div>
                    <div className="datas col-12">
                        <div className="row">
                            <p className="pExpiriens">Experience <span className="spanCartData">{data.address.zipcode}</span></p>
                            <p className="pExpiriens">Payment <span className="spanCartData">{data.address.city}</span></p>
                        </div>
                    </div>
                </div>))}
            </div>
            <div className="row justify-content-center ">
                <button type="button" onClick={seeAll} className="btn btn-blay w-25 mt-4 border border-2">See all</button>
            </div>
        </div>
    )
}