import React, { useEffect, useState } from 'react';
import './salary.css';
import { useParams } from 'react-router-dom';
import { priceList } from "../../data";

import { LocalAtm } from "@material-ui/icons";

import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Salary() {
	let { id } = useParams();

	const [dataId, setDataId] = useState([])

	const [ot, setOt] = useState(dataId.ot);
	const [luongCung, setLuongCung] = useState(dataId.luongCung);
	const [dayoff, setDayoff] = useState(dataId.dayOff)
	const [total, setTong] = useState(dataId.Tong);

	const url = 'http://localhost:5051/users/';

	useEffect(() => {
		fetch(url + id)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setDataId(data)
				console.log(data)
			})
	}, [])

	function handleChange() {
		const userUpdate = {
			'ot': ot,
			'basicSalary': luongCung,
			'dayOff': dayoff,
			'total': luongCung + ot * 5 - (luongCung / 25) * (25 - dayoff)
		}

		setTong(luongCung + ot * 5 - (luongCung / 25) * (25 - dayoff))

		fetch('http://localhost:5051/users/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userUpdate)
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			})
		alert("Update successful!!!")
		window.location.reload();
	}



	return (
		<>
			<Topbar />
			<div className='container'>
				<Sidebar />
				<div className='user'>
					<div className="userTitleContainer">
						<h1 className="userTitle">Detail salary Le Phuoc Hoang Long</h1>

					</div>
					<div className="userContainer">
						<div className="userShow">
							<div className="userShowTop">
								<span className="userUpdateTitle">Note</span>
							</div>
							<div className="userShowBottom">
								<span className="userShowTitle">Rank salary</span>
								{priceList?.map((item, index) => (
									<div className="userShowInfo">
										<LocalAtm className="userShowIcon" />
										<span className="userShowInfoTitle">{item.name}: {item.rate}$</span>
									</div>
								))}
								<span className="userShowTitle">Overtime salary</span>
								<div className="userShowInfo">
									<LocalAtm className="userShowIcon" />
									<span className="userShowInfoTitle">OT: 5$/1 hour</span>
								</div>
							</div>
						</div>

						<div className="userShowRight">
							<div className="userShowTop">
								<span className="userUpdateTitle">User</span>
							</div>
							<div className="userShowBottom">
								<span className="userShowTitle">Detail user</span>
								<div className="userShowInfo">
									<span className="userShowInfoTitle">Full name: {dataId.name}</span>
								</div>
								<div className="userShowInfo">
									<span className="userShowInfoTitle">email: {dataId.email}</span>
								</div>
								<div className="userShowInfo">
									<span className="userShowInfoTitle">Phone: {dataId.number}</span>
								</div>
								<div className="userShowInfo">
									<span className="userShowInfoTitle">Position: {dataId.position}</span>
								</div>
							</div>
						</div>

						<div className="userUpdate">
							<span className="userUpdateTitle">Edit</span>
							<form className="userUpdateForm">
								<div className="userUpdateRight">
									<div className="userUpdateItem">
										<label>Basic salary</label>
										<input
											name='luongCung'
											type="text"
											placeholder={dataId.luongCung}
											className="userUpdateInput"
											onChange={(e) => setLuongCung(e.target.value)}
											value={luongCung}
										/>
									</div>
									<div className="userUpdateItem">
										<label>OT</label>
										<input
											name="OT"
											type="text"
											placeholder={dataId.ot}
											className="userUpdateInput"
											onChange={(e) => setOt(e.target.value)}
											value={ot}
										/>
									</div>
									<div className="userUpdateItem">
										<label>Day off</label>
										<input
											name="dayOff"
											type="text"
											placeholder={dataId.dayOff}
											className="userUpdateInput"
											onChange={(e) => setDayoff(e.target.value)}
											value={dayoff}
										/>
									</div>
									<div className="userShowInfo">
										<span className="userShowInfoTitle" style={{ 'marginLeft': '0px', 'color': 'red' }}>Total: {total}</span>
									</div>
									<button className="userUpdateButton" type='button' onClick={handleChange}>Update</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}