import'./salaryList.css';
import { DataGrid, renderCell } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import User from '../user/User';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';



export default function SalaryList(props) {
    const [staff, setStaff] = useState([]);
       
    console.log(staff)

    useEffect(()=>{
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/users')
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            setStaff(data)
        })
      },[])

    const handleDelete = (id) => {
        setStaff(staff.filter((item) => item.id !== id));
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/users/' + id,{
                method:'DELETE'
            })
            .then(function (response) {
                 return response.json();
                })
            .then(function(data){
                console.log(data);
            })
    };


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Full name', width: 180 },
        { field: 'position', headerName: 'Position', width: 130 },
        { field: 'luongCung', headerName: 'Luong Cung ($)',type:'number',  width:180,},
        { field: 'dayOff', headerName: 'Day Off (day)',type:'number',  width:150,},
        { field: 'OT', headerName: 'OT (hours)',type:'number',  width:150,},
        { field: 'Tong', headerName: 'Tong ($)',type:'number',  width:150,},
        
       
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 120, 
            renderCell:(params)=>{
                console.log(params.row.id);
                return(
                    <>
                        
                        <Link to={"/salarys/" + params.row.id} ele>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        {/* <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/> */}
                    </>  
            )
        } },
      ];
      

    
  return (
    <>
        <Topbar/>
        <div className='container'>
            <Sidebar/>
            <div className='userList'>
                <div className="userListAdd">
                    <h1>Salary List</h1>
                </div>
                
                <DataGrid
                rows={staff}
                
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[5]}
                checkboxSelection
                style={{borderRadius: "10px", "height":"90%"}}
                />
            </div>
        </div>
    </>
    
  )
}
 