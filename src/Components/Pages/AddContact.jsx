import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddContact() {

    let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone:"",
    description:""
  });

  const { firstName, lastName, email,phone, description} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5454/contact/user", user);
    // navigate("/");
  };


  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Contact Us</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Firstname" className="form-label">
              Firstname
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="firstName"
              value={firstName}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Lastname" className="form-label">
              Lastname
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="lastName"
              value={lastName}
              onChange={(e) => onInputChange(e)}
            />
          </div>


         
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your e-mail address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
             <div className="mb-3">
            <label htmlFor="Phone" className="form-label">
              Phone
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your username"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
  )
}
