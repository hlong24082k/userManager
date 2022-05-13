import React, { useState } from 'react';
import "./newUser.css";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function NewUser() {
    const [addData, setAddData] = useState({});

    function handleValue(event){
        setAddData(e=>({
            ...e,
            [event.target.name]: event.target.value
        }));
    }
    function handleAdd(){
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/users',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
        })
        .then(function (response) {
            return response.json();
           })
        .then(function(data){
           console.log(data);
        })
        alert("Add success");
    }

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Full name</label>
                    <input 
                        name ="name"
                        type="text" 
                        placeholder="Le Phuoc Hoang Long" 
                        onChange={handleValue}
                        value={addData.name}
                    />
                </div>
                <div className="newUserItem">
                    <label>Date</label>
                    <input 
                        name='age'
                        type="text" 
                        placeholder="24-08-2000" 
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
                    <input 
                        name="position"
                        type="text" 
                        placeholder="FE" 
                        onChange={handleValue} 
                        value={addData.position}
                    />
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
    )
}
