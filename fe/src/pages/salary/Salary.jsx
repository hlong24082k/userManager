import React, { useEffect, useState } from 'react';
import './salary.css';
import {useParams} from 'react-router-dom';

import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    Wc,
    LocalAtm,
    Update
} from "@material-ui/icons";

import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Salary() {
    let {id} = useParams();
    
    const [dataId, setDataId] = useState([])

  
    const [ot, setOt] = useState(dataId.ot);
    const [luongCung, setLuongCung] = useState(dataId.luongCung);
    const [dayoff, setDayoff] = useState(dataId.dayOff)
    const [tong, setTong] = useState(dataId.Tong);

    

    
    const url = 'https://6264b15da55d5055be4ab0c6.mockapi.io/users/';
    
    useEffect(()=>{
        fetch(url + id)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            setDataId(data)
            console.log(data)
        })
    },[])

    function handleChange(){
        const userUpdate = {
            'OT': ot,
            'luongCung': luongCung,
            'dayOff': dayoff,
            'Tong': luongCung + ot*5 - (luongCung/25) * (25-dayoff) 
        }
        
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/users/' + id,{
            method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(userUpdate)
        })
        .then(function (response) {
            return response.json();
           })
        .then(function(data){
           console.log(data);
        })
        alert("Update successful!!!")
        window.location.reload();
    }
    
    

    return (
        <>
            <Topbar/>
            <div className='container'>
                <Sidebar/>
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
                                <div className="userShowInfo">
                                    <LocalAtm className="userShowIcon" />
                                    <span className="userShowInfoTitle">Bussiness Analyst: 1000$</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocalAtm className="userShowIcon" />
                                    <span className="userShowInfoTitle">Front-end: 1100$</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocalAtm className="userShowIcon" />
                                    <span className="userShowInfoTitle">Back-end: 1500$</span>
                                </div>
                                <div className="userShowInfo">
                                    <LocalAtm className="userShowIcon" />
                                    <span className="userShowInfoTitle">Tester: 1000$</span>
                                </div>
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
                                {/* <span className="userShowTitle">Overtime salary</span>
                                <div className="userShowInfo">
                                    <span className="userShowInfoTitle">OT: 5$/1 hour</span>
                                </div>   */}
                            </div>
                        </div>
                            
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Edit</span>
                            <form className="userUpdateForm">
                                {/* <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Full Name</label>
                                        <input
                                        name='name'
                                        type="text"
                                        placeholder={dataId.name}
                                        className="userUpdateInput"
                                        // onChange={handleValue}
                                        // value={userUpdate.name}
                                        />
                                    </div>
                                    
                                    <div className="userUpdateItem">
                                        <label>Email</label>
                                        <input
                                        name="email"
                                        type="text"
                                        placeholder={dataId.email}
                                        className="userUpdateInput"
                                        // onChange={handleValue}
                                        // value={userUpdate.email}
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Phone</label>
                                        <input
                                        name="number"
                                        type="text"
                                        placeholder={dataId.number}
                                        className="userUpdateInput"
                                        // onChange={handleValue}
                                        // value={userUpdate.number}
                                        />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Position</label>
                                        <input
                                        name='position'
                                        type="text"
                                        placeholder={dataId.position}
                                        className="userUpdateInput"
                                        // onChange={handleValue}
                                        // value={userUpdate.position}
                                        />
                                    </div>
                                    
                                </div> */}

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
                                    {/* <div className="userUpdateItem">
                                        <label>Total</label>
                                        <input
                                        name="Tong"
                                        type="text"
                                        placeholder={dataId.Tong}
                                        className="userUpdateInput"
                                        // onChange={handleValue}
                                        value={tong}
                                        />
                                    </div> */}
                                    <div className="userShowInfo">
                                        <span className="userShowInfoTitle" style={{'marginLeft':'0px','color':'red'}}>Total: {dataId.Tong}</span>
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