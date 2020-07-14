import React from 'react';
import { Link } from "react-router-dom"

const Items = ({ lists, loading, search }) => {

  if (loading) {
    return <div id="loading" > Loading... </div>;
  } else {
    return <ul className="App__List--heading"> 
        <li className="App__list">
          <span> <h3>ID</h3> </span>
          <span> <h3>Features</h3> </span>
          <span> <h3>Family </h3></span>
          <span> <h3>Structures</h3> </span>
          <span> <h3>Compounds</h3> </span>
          <span> <h3>Fullname</h3> </span>
          <span> <h3>Images</h3> </span> 
        </li>{
      lists.map(list =><Link key={list.id} to={{pathname: `item/${list.id}`, query:{id: list.id}}}>
        <li key={list.id}
          className="App__list" >
          <span> {list.id} </span>
          <span> {JSON.stringify(list.features)} </span>
          <span> {list.family} </span>
          <span> {list.num_structures} </span>
          <span> {list.num_compounds} </span>
          <span> {list.full_name} </span>
          <span> <img src = {list.image} alt='cancer-research'/></span> 
        </li></Link>)
    } </ul>;
  }
}

export default Items;