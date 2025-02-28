import React from 'react'
import { useAuth } from '../context/AuthContext'

const Usersdetails = () => {
    const [auth,setAuth] = useAuth();
    return (
        <div className="card">
            <div className="card-header">Admin Dashboard</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="card-title">Name :- {auth?.token?.user?.name}</h6>
                        <h6 className="card-title">Email :- {auth?.token?.user?.email}</h6>
                        <h6 className="card-title">Password :- {auth?.token?.user?.password}</h6>
                        <h6 className="card-title">Gender :- {auth?.token?.user?.gender}</h6>
                        <h6 className="card-title">City :- {auth?.token?.user?.city}</h6>
                        <h6 className="card-title">Contact :- {auth?.token?.user?.contact}</h6>
                        <h6 className="card-title">Role :- {auth?.token?.user?.role}</h6>

                        <button className='btn btn-success'>Change Profile</button>   
                    </div>
                    <div className="col-md-6">
                        <img src={auth?.token?.user?.image} class="img-thumbnail float-end" alt="..."/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Usersdetails
