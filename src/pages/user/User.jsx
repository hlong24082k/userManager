import React, { useEffect, useState } from 'react';
import './user.css';
import {useParams} from 'react-router-dom';

import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
    Wc
} from "@material-ui/icons";
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function User() {
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
                <h1 className="userTitle">Edit user</h1>
                
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                            src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt=''
                            className='userShowImg'
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{dataId.name}</span>
                            <span className="userShowUserTitle">{dataId.position} Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Hlong24082k</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">{dataId.age}</span>
                        </div>
                        <div className="userShowInfo">
                            <Wc className="userShowIcon" />
                            <span className="userShowInfoTitle">{dataId.sex}</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">{dataId.number}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{dataId.email}</span>
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
                                <label>Date</label>
                                <input
                                name='age'
                                type="text"
                                placeholder="22"
                                className="userUpdateInput"
                                onChange={handleValue}
                                value={userUpdate.age}
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
                            
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                className="userUpdateImg"
                                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                                />
                                <label htmlFor="file">
                                <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
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
