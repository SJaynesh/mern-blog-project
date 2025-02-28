import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Adminsidebar from '../../components/Adminsidebar';
import Usersdetails from '../../components/Usersdetails';
import { useAuth } from '../../context/AuthContext';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Adminuser = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    pendingOrders: 0,
    revenue: 0,
  });

  const [auth, setAuth] = useAuth();
  const [users, setUsers] = useState([]);

  let allUsers = async () => {
    try {
      let res = await fetch(`http://localhost:8000/admin/allusershow`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token?.token}`
        },
      })
      let data = await res.json();
      if (data?.success) {
        setUsers(data.users);

      }

    } catch (err) {
      console.log(err);
      return false
    }
  }

  useEffect(() => {
    allUsers()
  }, [])



  return (
    <>
      <Header />
      <div className="container mt-5">

        <div className="row">
          <div className="col-md-12">
            <Usersdetails />
          </div>
        </div>

        <div className="row mt-5">
          {/* Sidebar Column */}
          <div className="col-md-3">
            <Adminsidebar />
          </div>

          <div className="col-md-9">


            <div className="card">
              <div className="card-header">
                All Users
              </div>
              <div className="card-body">
            
                  <table className="table">
                    <thead className="table-info">
                      <tr>
                        <th scope="col">Srno</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                         users.map((val,index)=>{
                          return(
                            <tr key={index}>
                                <td>{++index}</td>
                                <td>{val?.name}</td>
                                <td>{val?.email}</td>
                                <td>{val?.password}</td> 
                                <td>{val?.role}</td>
                                <td>
                                  <button className='btn btn-danger btn-sm'>Delete</button>&nbsp;
                                    <button className='btn btn-success btn-sm'>Edit</button>&nbsp;
                                  <button className='btn btn-info btn-sm'>More Details</button>
                                </td>
                            </tr>
                          )
                         })
                      }

                    </tbody>
                  </table>
                </div>

              </div>
          


          </div>

        </div>
      </div>
    </>
  );
}

export default Adminuser;
