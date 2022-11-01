import React from "react";
import "./Notification.css";


export default function Notification ({images, name, message, activity, time, group}){
 
    return(
        <div className="container">
            <img className="images" src={images}/>
            <div>
                <p><span className="name">{name}</span><span className="message">{message}</span><span className="activiti">{activity}</span><span className="group">{group}</span></p>
                <p className="time">{time}</p>
            </div>
        </div> 
  
    )
}