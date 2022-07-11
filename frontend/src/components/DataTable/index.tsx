import './styles.css';
import Imgbox from '../../assets/img/Vector.svg';
import { NotificationButton } from '../NotificationButton';

export const DataTable = () => {
    return (
        <>
            <section id="sales">
                <div className="dsmeta-container">
                    <div className="dsmeta-card">
                        <h2 className="dsmeta-sales-title">Vendas</h2>
                        <div>
                            <div className="dsmeta-form-control-container">
                                <input className="dsmeta-form-control" type="text" placeholder="Data inicial" />
                            </div>
                            <div className="dsmeta-form-control-container">
                                <input className="dsmeta-form-control" type="text" placeholder="Data Final" />
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
                                            <NotificationButton/>
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
                                            <NotificationButton/>
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
                                            <NotificationButton/>
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
                                            <NotificationButton/>
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
                                            <NotificationButton/>
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
                                            <NotificationButton/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}