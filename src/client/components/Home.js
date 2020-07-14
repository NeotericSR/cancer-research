import React from "react"
import Items from "./Items";

const Home = (props) => 
        <div className="App">
            <Items lists={props.lists}
              loading={props.loading} />
        </div>

export default Home