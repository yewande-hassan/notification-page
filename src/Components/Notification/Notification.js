import React from "react";
import "./Notification.css";

export default function Notification ({images, name, message, activity, time, group, isRead, markAsRead, id}){
   return( 
        <div className="container" onClick={()=>console.log(markAsRead(id))} style={{backgroundColor: isRead ? "transparent":"rgb(242, 246, 250)" }} >
            <img className="images" src={images} alt="Avatar"/>
            <div>
                <p><span className="name">{name}</span><span className="message">{message}</span><span className="activiti">{activity}</span><span className="group">{group}</span> <span className="group">{isRead}</span></p>
                <p className="time">{time}</p>
            </div>
        </div> 

    )
}