import React, { useState } from "react";
import List from "./List";
import Input from "./Input";
function App() {

let [list,addList]=useState([]);

 function strike(id){
   addList(()=>list.filter((item,key)=> id!==key));

 }
function addListItem(text){
  addList((previousList)=>[...previousList,text]); 
  
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <Input addListItem={addListItem}/>
      <div>
        <ul>
        {list.map((item,i)=><List key={i} Clicked={strike} id={i} item={item}/>)}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
