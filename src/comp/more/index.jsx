import React from "react";
import "./style.css"
export const More =()=>{

    return(
        <div className="more">
          <button onClick={()=>{alert('order is accepted!!!')}} className="er">Order</button>
          <button onClick={()=>{alert('order is accepted!!!')}} className="er"> Order</button>
          <button onClick={()=>{alert('order is accepted!!!')}} className="er"> Order</button>
        </div>
    )
}