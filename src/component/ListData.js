import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import { Data } from "../data";

const ListData = () => {
    const [query, setQuery] = useState("");
    return (
        <Fragment>
            <div className="header">
                <Navbar />
            </div>
            <div className='main' style={{
                paddingTop: '2.5rem',
            }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='panel'>
                                <div className='panel-heading'>
                                    <h3 class="panel-title text-center">DATA KARYAWAN</h3>
                                    <div class="right">
                                    </div>
                                </div>

                                <div className="d-flex content-start" style={{
                                    paddingLeft: '2.5rem',
                                }}>
                                    <h7>Search Nama Karyawan atau Job Karyawan</h7>
                                </div>
                                <div className="d-flex content-start" style={{
                                    paddingLeft: '2.5rem',
                                }}>
                                    <input
                                        type="text" placeholder="search" className="search" onChange={e => setQuery(e.target.value)}
                                    />
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Karyawan</th>
                                            <th scope="col">Job Karyawan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.filter((datas) => datas.nama.toLowerCase().includes(query) ||
                                            datas.job.toLowerCase().includes(query))
                                            .map((datas) => (
                                                <tr key={datas.id}>
                                                    <th scope="row">{datas.id}</th>
                                                    <td>{datas.nama}</td>
                                                    <td>{datas.job}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default ListData;