import React from "react"

const ComponentWrapper = (props) => {
    return <props.comp class='App__main' hocData={props}/>
}

export default ComponentWrapper