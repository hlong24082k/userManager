import React, { useState } from 'react';
import "./newProduct.css";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function NewProduct() {
    const [addData, setAddData] = useState({});

    function handleValue(event){
        setAddData(e=>({
            ...e,
            [event.target.name]: event.target.value
        }));
    }
    function handleAdd(){
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/product',{
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

    }

    return (
        <>
            <Topbar/>
            <div className='container'>
                <Sidebar/>
                <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <h3>Detail customer</h3>
            <form className="newProductForm">
            <div className='newProductFormBottom'>
                    
                    <div className="newProductItem">
                        <label>Full name</label>
                        <input 
                            name ="nameCustomer"
                            type="text" 
                            placeholder="Le Phuoc Hoang Long" 
                            onChange={handleValue}
                            value={addData.nameCustomer}
                        />
                    </div>
                    <div className="newProductItem">
                        <label>Email</label>
                        <input 
                            name='email'
                            type="email" 
                            placeholder="Hlong.24082k@gmail.com" 
                            onChange={handleValue} 
                            value={addData.email}
                        />
                    </div>
                    <div className="newProductItem">
                        <label>Phone</label>
                        <input 
                            name="number"
                            type="text" 
                            placeholder="+1 123 456 78" 
                            onChange={handleValue} 
                            value={addData.number}
                        />
                    </div>
                    <div className="newProductItem">
                        <label>Address</label>
                        <input 
                            name='address'
                            type="text" 
                            placeholder="Da Nang | Viet Nam" 
                            onChange={handleValue} 
                            value={addData.address}
                        />
                    </div>
                </div>

                <h3 style={{marginTop:"30px"}}>Detail product</h3>
                <div className='newProductFormTop'>
                    <div className='newProductFormTopLeft'>
                        <div className="newProductItem">
                            <label>Name product</label>
                            <input 
                                name ="nameProduct"
                                type="text" 
                                placeholder="example: web, app,..." 
                                onChange={handleValue}
                                value={addData.nameProduct}
                            />
                        </div>
                        <div className="newProductItem">
                            <label>Date</label>
                            <input 
                                name='date'
                                type="text" 
                                placeholder="01-01-2022" 
                                onChange={handleValue} 
                                value={addData.date}
                            />
                        </div>
                        <div className="newProductItem">
                            <label>Price</label>
                            <input 
                                name='price'
                                type="text" 
                                placeholder="$200" 
                                onChange={handleValue} 
                                value={addData.price}
                            />
                        </div>
                    </div>
                    
                    <div>
                    <div className="newProductItem">
                        <label>Request</label>
                        <textarea 
                            name='detail'
                            type="textarea" 
                            rows="9"
                            placeholder={"-request1\r-request2"}
                            onChange={handleValue} 
                            value={addData.detail}
                        />
                    </div>
                    <button className="newProductButton" type='button' onClick={handleAdd}>Create</button>
                    </div>
                    
                </div>
                
            </form> 
        </div>

            </div>
        </>
        
    )
}
