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
        //show role only manager and user
        let filterdata = data?.users.filter(val => val.role=="manager" || val.role=="user")
        setUsers(filterdata);

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
                      <th scope='col'>Create At</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users.map((val, index) => {
                        // Function to format date in dd-mm-yy hh:mm:ss AM/PM format
                        const formatDateTime = (date) => {
                          const d = new Date(date);
                          const day = String(d.getDate()).padStart(2, '0');
                          const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
                          const year = String(d.getFullYear()).slice(-2); // Last two digits of the year

                          let hours = d.getHours();
                          const minutes = String(d.getMinutes()).padStart(2, '0');
                          const seconds = String(d.getSeconds()).padStart(2, '0');

                          const ampm = hours >= 12 ? 'PM' : 'AM';
                          hours = hours % 12; // Convert 24-hour time to 12-hour format
                          hours = hours ? String(hours).padStart(2, '0') : '12'; // Hour 0 should be 12 for AM

                          return `${day}-${month}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
                        };

                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val?.name}</td>
                            <td>{val?.email}</td>
                            <td>{val?.password}</td>
                            <td>{formatDateTime(val?.createdAt)}</td> {/* Format createdAt with time in 12-hour format */}
                            <td>
                              <button className='btn btn-danger btn-sm'>Delete</button>&nbsp;
                              <button className='btn btn-success btn-sm'>Edit</button>&nbsp;
                              <button className='btn btn-info btn-sm'>More Details</button>
                            </td>
                          </tr>
                        );
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
