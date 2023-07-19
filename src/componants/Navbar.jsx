import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsByte</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Buisness</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Entainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/">Technology</Link></li>

                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar