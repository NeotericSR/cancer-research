import React from "react"
import Navigation from "./Navigation"
import Search from "./Search"
import "../styles/Header.scss"

const Header = (props) =>
    <header className="App__header">
        <h3> Cancer Research: Assignment </h3>
        <Navigation />
        <Search value={props.search}
            updateSearch={props.updateSearch}
            addToFilter={props.addToFilter} />
    </header>

export default Header