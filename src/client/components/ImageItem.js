import React from 'react';

const ImageItem = ({ lists, loading, search }) => {

  if (loading) {
    return <div id="loading" > Loading... </div>;
  } else {
    return <div className="images"> 
        <h3>
          <span> Images </span>
        </h3>{
      lists.map(list =><div key={list.id} className="image"> 
        <a target="_blank" rel="noopener noreferrer" href={list.image}>
     <img src={list.image} alt={list.family} width="600" height="400" />
     </a><div className="desc">{list.description.substr(5, 19)}</div></div>)
    } </div>;
  }
}

export default ImageItem;