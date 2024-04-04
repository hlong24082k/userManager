import'./salaryList.css';
import { DataGrid } from '@material-ui/data-grid';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function SalaryList() {
    const [staff, setStaff] = useState([]);
       
    console.log(staff)

    useEffect(()=>{
        fetch('http://localhost:5051/users')
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            setStaff(data)
        })
      },[])

    const handleDelete = (id) => {
        setStaff(staff.filter((item) => item.id !== id));
        fetch('http://localhost:5051/users/' + id,{
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
        { field: 'basicSalary', headerName: 'basic Salary ($)',type:'number',  width:180,},
        { field: 'dayOff', headerName: 'Day Off (day)',type:'number',  width:150,},
        { field: 'ot', headerName: 'OT (hours)',type:'number',  width:150,},
        { field: 'total', headerName: 'Total ($)',type:'number',  width:150,},
        
       
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
 