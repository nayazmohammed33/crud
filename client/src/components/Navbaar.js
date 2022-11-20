import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">CUSTOMER</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                          
                        </ul>
                        <img src='https://th.bing.com/th/id/R.5af6d734508f806379cb83ed438cf669?rik=0FlhM4MskV6rEQ&riu=http%3a%2f%2fwww.freerideworldtour.com%2fsites%2fdefault%2ffiles%2fstyles%2fdefault_300x300%2fpublic%2fdefault-images%2f34b119158c71af13b8f5765aaac8956c.jpg&ehk=OZyx%2b%2bFPFKTecsnOZXgQZdEYefIECvbag%2b%2bhopuyOag%3d&risl=&pid=ImgRaw&r=0'></img>
                      
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
