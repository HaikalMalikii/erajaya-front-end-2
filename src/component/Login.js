import React, { Fragment } from "react";
import Navbar from "./Navbar";


const Login = () => {

    return (
        <Fragment>
            <div className='Header'>
                <Navbar />
            </div>
            <section class="vh-100"
                style={{
                    paddingTop: '2.5rem',
                }}>
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://placeimg.com/640/480/nature" alt="" ></img>
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div class="form-outline mb-4">
                                    Email address
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                <div class="form-outline mb-3">
                                    Password
                                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label class="form-label" for="form3Example4">Password</label>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg"
                                        style={{
                                            paddingLeft: '2.5rem',
                                            paddingRight: '2.5rem',
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>



    );
}

export default Login