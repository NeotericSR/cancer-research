import React, { Component } from "react"

class ItemView extends Component {
    render() {
        
      const { items, location } = this.props;
  
      if (!items.length || !location) {
          return (<div>Loading...</div>);
      }
  
      const item = items.find(p => location.href.split('/').includes(p.id));
  
      return item ? (
        <div class="App__list--item">
          <h2>Family: {item.full_name}</h2>
          <h3>Short Name: {item.short_name}</h3>
          <h3>It is {item.features.is_druggable ? " " : " not"} druggable and It is {item.features.is_enzyme ? " " : " not"} an enzyme</h3>
          <img src = {item.image} alt ={item.full_name}/>
          <p>{item.description}</p>
          {item.publications.map(date => <h5 Key={item.id}>Year: {date[0]} | Number of publications: {date[1]}</h5>)}
        </div>
      ) : (
        <div class="App__list--item App__text--warning"><h1>Error: Product doesn't exist</h1></div>
      );
    }
  }

  export default ItemView