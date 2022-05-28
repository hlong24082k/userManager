import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { Link, useParams } from "react-router-dom";
import "./product.css";
import React,{useState, useEffect} from "react";

import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";


  
export default function Product() {
    let {id} = useParams();
    
    const [dataId, setDataId] = useState([])
    const [userUpdate, setUserUpdate] = useState({})

    const url = 'https://6264b15da55d5055be4ab0c6.mockapi.io/product/';
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
        fetch('https://6264b15da55d5055be4ab0c6.mockapi.io/product/' + id,{
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
        <div className="container">
          <Sidebar/>
          <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Edit Product</h1>
        </div>
        <div className="productContainer">
          <div className="productShow">
            <div className="productShowTop">
              {/* <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productShowImg"
              /> */}
              <div className="productShowTopTitle">
                <span className="productShowproductname">Customer</span>
                {/* <span className="productShowproductTitle">Software Engineer</span> */}
              </div>
            </div>
            <div className="productShowBottom">
              <span className="productShowTitle">Customer Details</span>
              <div className="productShowInfo">
                <PermIdentity className="productShowIcon" />
                <span className="productShowInfoTitle">{dataId.nameCustomer}</span>
              </div>
              {/* <div className="productShowInfo">
                <CalendarToday className="productShowIcon" />
                <span className="productShowInfoTitle">24-08-2000</span>
              </div> */}
              <span className="productShowTitle">Contact Details</span>
              <div className="productShowInfo">
                <PhoneAndroid className="productShowIcon" />
                <span className="productShowInfoTitle">{dataId.number}</span>
              </div>
              <div className="productShowInfo">
                <MailOutline className="productShowIcon" />
                <span className="productShowInfoTitle">{dataId.email}</span>
              </div>
              <div className="productShowInfo">
                <LocationSearching className="productShowIcon" />
                <span className="productShowInfoTitle">{dataId.address}</span>
              </div>
            </div>
          </div>
          <div className="productUpdate">
            <span className="productUpdateTitle">Edit</span>
            <form className="productUpdateForm">
              <div className="productUpdateLeft">
                <div className="productUpdateItem">
                  <label>Product name</label>
                  <input
                    
                    type="text"
                    placeholder={dataId.nameProduct}
                    className="productUpdateInput"
                    name="nameProduct"
                    onChange={handleValue}
                    value={userUpdate.nameProduct}
                  />
                </div>
                <div className="productUpdateItem">
                  <label>Received date</label>
                  <input
                    type="text"
                    placeholder={dataId.date}
                    className="productUpdateInput"
                    name="date"
                    onChange={handleValue}
                    value={userUpdate.date}
                  />
                </div>
                
                <div className="productUpdateItem">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder={dataId.price}
                    className="productUpdateInput"
                    name="price"
                    onChange={handleValue}
                    value={userUpdate.price}
                  />
                </div>

                <div className="productUpdateItem">
                  <label>Status</label>
                    <div className="productUpdateItemCheck">
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="status"
                        onChange={handleValue}
                      >
                        <FormControlLabel value="true" control={<Radio />} label="Hoan thanh" />
                        <FormControlLabel value="false" control={<Radio />} label="Chua hoan thanh" />
                      </RadioGroup>
                    </FormControl>
                    </div>
                    
                </div>
                
                
              </div>
              <div className="productUpdateRight">
                <div className="productUpdateItem">
                  <label>Request details</label>
                  <textarea
                    type="textarea"
                    rows="10"
                    placeholder={dataId.detail}
                    className="productUpdateInput productUpdateInputDetail"
                    name="detail"
                    onChange={handleValue}
                    value={userUpdate.detail}
                  />
                </div>
                <button className="productUpdateButton" type="button" onClick={handleChange}>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

        </div>
      </>
      
    );
  }