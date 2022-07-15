import { NotificationButton } from '../NotificationButton';
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import axios from 'axios';

export const SalesCard = () => {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    useEffect(()=>{
        axios.get("http://localhost:8080/sales")
        .then(response =>{
            console.log(response.data);
        })
    },[]);

    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-title">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
                <div className="">
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor(a)</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">28/06/2022</td>
                                <td>Felipe Sousa</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <NotificationButton />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}