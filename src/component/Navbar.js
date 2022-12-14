import React, { Fragment } from "react";

const Navbar = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://placeimg.com/640/480/nature" alt="" width="30" height="24" />
                    </a>
                    <a class="navbar-brand" href="#">ERAJAYA</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>


        </Fragment>

    );


}

export default Navbar;