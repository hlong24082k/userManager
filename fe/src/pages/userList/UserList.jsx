import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';



export default function UserList(props) {
	const [staff, setStaff] = useState([]);	

	console.log(staff)

	useEffect(() => {
		fetch('http://localhost:5051/users')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setStaff(data)
			})
	}, [])

	const handleDelete = (id) => {
		setStaff(staff.filter((item) => item.id !== id));
		fetch('http://localhost:5051/users/' + id, {
			method: 'DELETE'
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			})
	};


	const columns = [
		{ field: 'id', headerName: 'ID', width: 100 },
		{ field: 'name', headerName: 'Full name', width: 180 },
		{ field: 'age', headerName: 'Age', type: 'number', width: 100, },
		{ field: 'sex', headerName: 'Sex', width: 110 },
		{ field: 'email', headerName: 'Email', width: 200 },
		{ field: 'number', headerName: 'Number', type: 'number', width: 130, },
		{ field: 'position', headerName: 'Position', width: 130 },
		{
			field: 'action',
			headerName: 'Action',
			width: 120,
			renderCell: (params) => {
				console.log(params.row.id);
				return (
					<>

						<Link to={"/users/" + params.row.id} ele>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				)
			}
		},
	];



	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<div className='userList'>
					<div className="userListAdd">
						<h1>User List</h1>
						<Link to={"/newUser"}>
							<button className='userAddButton'>Create</button>
						</Link>

					</div>

					<DataGrid
						rows={staff}

						columns={columns}
						pageSize={6}
						rowsPerPageOptions={[5]}
						checkboxSelection
						style={{ "borderRadius": "10px", "height": "90%" }}
					/>
				</div>
			</div>
		</>

	)
}
