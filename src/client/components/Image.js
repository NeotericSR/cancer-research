import React from "react"
import ImageItem from "./ImageItem";

const Image = (props) => 
        <div className="App">
            <ImageItem lists={props.lists}
              loading={props.loading} />
        </div>

export default Image