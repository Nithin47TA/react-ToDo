import React,{useState} from "react";

export default function Input(props){
    let [text,setText]=useState("");
return(
    
    <div className="form">
    <input type="text" value={text} onChange={e=>{setText(e.target.value)}} />
    <button type="button" onClick={()=>{props.addListItem(text);setText("");}}>
      <span>Add</span>
    </button>
  </div>
)

}