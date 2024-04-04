import {
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid
} from "@material-ui/icons";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { useParams } from "react-router-dom";
import "./product.css";
import React, { useState, useEffect } from "react";

import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";



export default function Product() {
  let { id } = useParams();

  const [dataId, setDataId] = useState([])
  const [userUpdate, setUserUpdate] = useState({})

  const url = 'http://localhost:5051/products/';
  const getApi = (url) => {
    fetch(url + id)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setDataId(data)
        console.log(data)
      })
  }
  useEffect(() => {
    getApi(url)
  }, [])

  function handleValue(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    setUserUpdate(e => ({
      ...e,
      [event.target.name]: event.target.value
    }));

  }

  function handleChange() {
    console.log(userUpdate);

    const res = fetch('http://localhost:5051/products/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userUpdate)
    })

    if (res) {
      alert("Update successful !!!")
      window.location.reload();
    }
    else {
      alert("Please check again !!!")
    }
  }

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="product">
          <div className="productTitleContainer">
            <h1 className="productTitle">Edit Product</h1>
          </div>
          <div className="productContainer">
            <div className="productShow">
              <div className="productShowTop">
                <div className="productShowTopTitle">
                  <span className="productShowproductname">Customer</span>
                </div>
              </div>
              <div className="productShowBottom">
                <span className="productShowTitle">Customer Details</span>
                <div className="productShowInfo">
                  <PermIdentity className="productShowIcon" />
                  <span className="productShowInfoTitle">{dataId.nameCustomer}</span>
                </div>
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
                          <FormControlLabel value="true" control={<Radio />} label="Done" />
                          <FormControlLabel value="false" control={<Radio />} label="In progress" />
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