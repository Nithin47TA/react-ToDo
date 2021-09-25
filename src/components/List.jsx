import React from "react";

export default function List(prop){
return <li onClick={()=>{prop.Clicked(prop.id)}}>{prop.item}</li>
}