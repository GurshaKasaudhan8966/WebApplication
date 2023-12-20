import React from 'react'
import { Link } from "react-router-dom";


export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{padding:0}}>
       <img src='../Logo.jpeg' style={{width:50}}/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav justify-content-end">
                <li class="nav-item active">
                    <Link class="nav-link" href="#">For brands <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">For creaters</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Pricing</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/addContact">Contact us</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/viewContact">View Contact</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" href="#">Blogs</Link>
                </li>
            
                  

            </ul>
           
                    <Link class="btn btn-outline-success mr-sm-2" type="button">LogIn</Link>
                    <Link class="btn btn-outline-success mr-sm-2" type="button">Book A Demo</Link>

                    <button class="button1">Book a Demo</button>
        </div>
    </nav>
  )
}
