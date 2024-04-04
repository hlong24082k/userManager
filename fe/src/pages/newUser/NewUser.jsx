import React, { useState } from 'react';
import "./newUser.css";
import { priceList } from '../../data';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function NewUser() {
	const [addData, setAddData] = useState({});

	function handleValue(event) {
		event.preventDefault();
		setAddData(e => ({
			...e,
			[event.target.name]: event.target.value
		}));
		console.log(addData)
	}

	function handleBasicSalary(position) {
		return priceList[position]
	}

	function handleAdd() {
		const addDataUser = {
			"name": addData.name,
			"age": Number(addData.age),
			"sex": addData.sex,
			"email": addData.email,
			"position": addData.position,
			"number": addData.number,
			"address": addData.address,
			"basicSalary": handleBasicSalary(addData.position),
			"dayOff": 0,
			"ot": 0,
			"total": 0
		}
		console.log(addDataUser)
		fetch('http://localhost:5051/users', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(addDataUser)
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			})
		alert("Add success");
	}

	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<div className="newUser">
					<h1 className="newUserTitle">New User</h1>
					<form className="newUserForm">
						<div className="newUserItem">
							<label>Full name</label>
							<input
								name="name"
								type="text"
								placeholder="Le Phuoc Hoang Long"
								onChange={handleValue}
								value={addData.name}
							/>
						</div>
						<div className="newUserItem">
							<label>Age</label>
							<input
								name='age'
								type="number"
								placeholder="24"
								onChange={handleValue}
								value={addData.age}
							/>
						</div>
						<div className="newUserItem">
							<label>Email</label>
							<input
								name='email'
								type="email"
								placeholder="Hlong.24082k@gmail.com"
								onChange={handleValue}
								value={addData.email}
							/>
						</div>
						<div className="newUserItem">
							<label>Position</label>
							<select id="cars" name="position" onChange={handleValue}>
								<option value="Front-end">Front-end Developer</option>
								<option value="Back-end">Back-end Developer</option>
								<option value="FullStack">FullStack Developer</option>
								<option value="Tester">Tester</option>
								<option value="DevOps">DevOps Developer</option>
								<option value="AI">AI Engineer</option>
								<option value="Hr">Hr</option>
							</select>
						</div>
						<div className="newUserItem">
							<label>Phone</label>
							<input
								name="number"
								type="text"
								placeholder="+1 123 456 78"
								onChange={handleValue}
								value={addData.number}
							/>
						</div>
						<div className="newUserItem">
							<label>Address</label>
							<input
								name='address'
								type="text"
								placeholder="Da Nang | Viet Nam"
								onChange={handleValue}
								value={addData.address}
							/>
						</div>
						<div className="newUserItem">
							<label>Gender</label>
							<div className="newUserGender">
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="sex"
										onChange={handleValue}
									>
										<FormControlLabel value="Male" control={<Radio />} label="Male" />
										<FormControlLabel value="Female" control={<Radio />} label="Female" />
									</RadioGroup>
								</FormControl>
							</div>
						</div>

						<button className="newUserButton" type='button' onClick={handleAdd}>Create</button>
					</form>
				</div>
			</div>
		</>

	)
}
