import'./productList.css';
import { DataGrid, renderCell } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function ProductList() {
    const [staff, setStaff] = useState([]);
    //call api, get data
    useEffect(()=>{
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/product')
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            setStaff(data)
        })
    },[])


    const handleDelete = (id) => {
        setStaff(staff.filter((item) => item.id !== id));
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io//product/' + id,{
                method:'DELETE'
            })
            .then(function (response) {
                 return response.json();
                })
            .then(function(data){
                console.log(data);
            })
    };
    
    console.log(staff)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'nameProduct', headerName: 'Products', width: 180 },
        { field: 'nameCustomer', headerName: 'Customer', width: 180 },
        { field: 'email', headerName: 'Email', width: 200},
        { field: 'number', headerName: 'Number',type:'number',  width:130,},
        { field: 'price', headerName: 'Price',type:'number', width: 130 },
        { field: 'status', headerName: 'Status',type:'booleen', width:100,
            renderCell:(params)=>{
                if(params.row.status === "true"){
                    return(
                        <>
                            <button className="userListStatusTrue">True</button>
                        </>
                    )
                } else{
                    return(
                        <>
                            <button className="userListStatusFalse">False</button>
                        </>
                    )
                }
        }},
        { 
            field: 'action', 
            headerName: 'Action', 
            width: 120, 
            renderCell:(params)=>{
                console.log(params.row.id);
                return(
                    <>
                        
                        <Link to={"/product/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>  
            )
        } },
      ];
      

    
  return (
    <div className='userList'>
        <div className="userListAdd">
            <h1>Product List</h1>
            <Link to={"/newProduct"}>
                <button className='userAddButton'>Create</button>
            </Link>      
        </div>
        
        <DataGrid
        rows={staff}
        disableSelectionOnClick
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{borderRadius: "10px"}}
      />
    </div>
  )
}
 