import React from 'react'
import { Link } from 'react-router-dom'

const Adminsidebar = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div class="list-group">
                        <Link class="list-group-item list-group-item-action active" aria-current="true">
                            Dashboard
                        </Link>
                        <Link class="list-group-item list-group-item-action" aria-current="true">
                            User
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
