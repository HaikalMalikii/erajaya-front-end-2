import React, { Fragment } from "react";
import Navbar from "./Navbar";

const ListData = () => {
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Karyawan</th>
                        <th scope="col">Job Karyawan</th>
                    </tr>
                </thead>
            </table>


        </Fragment>

    );
}

export default ListData;