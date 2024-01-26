import { useEffect, useState } from "react";
import './instrbox.css';

export default function InstrumentsBox() {
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

    return (
        <div className="container toolsBox mt-4">
            <div className="row justify-content-center">
            {data.map(item => (
                <div className="instr col-6 col-sm-4 col-md-2 col-xl-2" key={item.id}>
                    <p className="pInstr p-1">{item.speciality}</p>
                </div>))}
            </div>
        </div>
    )
}