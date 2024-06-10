import axios from 'axios'
import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const AddFriend = () => {
    const [data,setDta]=useState(
        {
            "name":"",
            "friendName":"",
            "friendNickName":"",
            "DescribeYourFriend":""
        }
    )
    const inputHandler=(event)=>{
        setDta({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.map)
            }
        ).finally()
    }
  return (
    <div>
        <h1><center>ADD FRIEND</center></h1>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Friend Name</label>
                        <input type="text" className="form-control"name='friendName' value={data.friendName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Friend Nick Name</label>
                        <input type="text" className="form-control" name='friendNickName'value={data.friendNickName}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Describe your friend</label>
                        <input type="text" className="form-control"name='DescribeYourFriend'value={data.DescribeYourFriend}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <br /><br /><button onClick={readValue} className="btn btn-success">AddFriend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
