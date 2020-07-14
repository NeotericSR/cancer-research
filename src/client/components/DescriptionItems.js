import React from 'react';
import { Link } from "react-router-dom"

const DescriptionItems = ({ lists, loading, search }) => {

  if (loading) {
    return <div id="loading" > Loading... </div>;
  } else {
    return <ul className="App__List--heading description">
      <li>
        <h3>
          Description
        </h3>
      </li>{
        lists.map(list =><Link key={list.id} to={{pathname: `item/${list.id}`, query:{id: list.id}}}>
          <li key={list.id}
            className="App__list" >
            <span className="App__list--description"> {list.description} </span>
          </li></Link>)
      } </ul>;
  }
}

export default DescriptionItems;