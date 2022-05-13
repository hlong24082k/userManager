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
    LocalAtm
} from "@material-ui/icons";

export default function Salary() {
    let {id} = useParams();
    
    const [dataId, setDataId] = useState([])
    const [userUpdate, setUserUpdate] = useState({})
    
    const url = 'https://6264b15da55d5055be4ab0c6.mockapi.io/users/';
    const getApi = (url) =>{
        fetch(url + id)
        .then(function (response) {
            return response.json();
        })
        .then(function(data){
            setDataId(data)
            console.log(data)
        })
    }
    useEffect(()=>{
        getApi(url)
    },[])

    function handleValue(event){
        console.log(event.target.name);
        console.log(event.target.value);
        setUserUpdate(e =>({
            ...e,
            [event.target.name]: event.target.value
        }));
        
    }

    function handleChange(){
        console.log(userUpdate)
        fetch('https://625f92cf92df0bc0f3369a3d.mockapi.io/api/list/user/' + id,{
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
                    
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                name='name'
                                type="text"
                                placeholder="Le Phuoc Hoang Long"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.name}
                                />
                            </div>
                            
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                name="email"
                                type="text"
                                placeholder="hlong.24082k@gmail.com"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.email}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input
                                name="number"
                                type="text"
                                placeholder="+1 123 456 67"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.number}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Position</label>
                                <input
                                name='position'
                                type="text"
                                placeholder="22"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.position}
                                />
                            </div>
                            
                        </div>

                        <div className="userUpdateRight">
                            
                            <div className="userUpdateItem">
                                <label>luongCung</label>
                                <input
                                name='luongCung'
                                type="text"
                                placeholder="22"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.luongCung}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>OT</label>
                                <input
                                name="OT"
                                type="text"
                                placeholder="hlong.24082k@gmail.com"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.OT}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>OT</label>
                                <input
                                name="OT"
                                type="text"
                                placeholder="hlong.24082k@gmail.com"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.OT}
                                />
                            </div>
                            <button className="userUpdateButton" type='button' onClick={handleChange}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}