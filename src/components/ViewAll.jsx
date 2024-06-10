import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavBar } from './NavBar'

export const ViewAll = () => {
    const [data,changeData]=useState([])
    const fetchDarta=()=>{
     axios.get("https://friendsapi-re5a.onrender.com/view").then(
        (response)=>{
            changeData(response.data)
        }
     ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.map)
        }
     ).finally()
    }
    useEffect(()=>{fetchDarta()},[])
  return (
    <div>
         <h1><center>View All Friend Details</center></h1>
        <NavBar></NavBar>
        <div class="container">
       <div class="row g-3">
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               <table class="table" border="2" >
                   <thead>
                     <tr>
                       <th scope="col">user id</th>
                       <th scope="col">Name</th>
                       <th scope="col">friendName</th>
                       <th scope="col">friendNickName</th>
                       <th scope="col">DescribeYourFriend</th>
                       <th scope="col">__v</th>
                     </tr>
                   </thead>
                   <tbody>
                   {data.map(
                       (value,index)=>
                           {
                               return <tr>
                                 <td>{value._id}</td>
                                 <td>{value.name}</td>
                                 <td>{value.friendName}</td>
                                 <td>{value.friendNickName}</td>
                                 <td>{value.DescribeYourFriend}</td>
                                 <td>{value.__v}</td>
                               </tr>
                              
                           }
                   )}
                    </tbody>
                 </table>
           </div>
       </div>
   </div>

    </div>
  )
}
