import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GrUserManager } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";


const Adminsidebar = () => {
    const location = useLocation();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div class="list-group">
                        <Link to={`/admin/dashboard`} class={`list-group-item list-group-item-action ${location?.pathname ==='/admin/dashboard' ? 'active' : ''}`} aria-current="true">
                            <MdDashboard/>&nbsp;Dashboard
                        </Link>
                        <Link to={`/admin/user`} class={`list-group-item list-group-item-action ${location?.pathname ==='/admin/user' ? 'active' : ''}`} aria-current="true">
                            <FaUser/>&nbsp;User
                        </Link>
                        <Link class="list-group-item list-group-item-action" aria-current="true">
                            <GrUserManager/>&nbsp;Manager
                        </Link>
                        <Link class="list-group-item list-group-item-action" aria-current="true">
                            <FaBlogger/>&nbsp;Blog
                        </Link>
                        <Link class="list-group-item list-group-item-action" aria-current="true">
                            Profile
                        </Link>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Adminsidebar
