import React from "react"
import DescriptionItems from "./DescriptionItems";

const Description = (props) => 
        <div className="App">
            <DescriptionItems lists={props.lists}
              loading={props.loading} />
        </div>

export default Description