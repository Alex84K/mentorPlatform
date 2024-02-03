import { useEffect, useState } from "react";
import './instrbox.css';
import { useFetching } from "../hooks/useFetching";
import ResponseServise from "../../API/ResponseService";


export default function InstrumentsBox() {
    const [data, setData] = useState([]);

    const [fetchInstr] = useFetching(async () => {
        const response = await ResponseServise.getAll();
        setData(response.data);
    });

    useEffect(() => {
        fetchInstr();
    }, []);

    return (
        <div className="container toolsBox mt-4">
            <div className="row justify-content-center">
                {data.map(data => (
                    <div className="instr col-6 col-sm-4 col-md-2 col-xl-2" key={data.id}>
                        <p className="pInstr p-1">{data.website}</p>
                    </div>))}
            </div>
        </div>
    )
}