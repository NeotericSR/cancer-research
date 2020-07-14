import React, { Component } from 'react'
import '../styles/App.scss'
import axios from 'axios'
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Description from "./Description"
import Image from "./Image"
import Header from "./Header"
import ItemView from "./ItemView"

const api = axios.create({
  method: 'get',
  baseURL: "http://localhost:3000/"
})

class App extends Component {

  constructor() {
    super();
    this.state = {
      lists: [],
      count: 0,
      loading: false,
      currentPage: 1,
      listsPerPage: 20,
      filters: [],
      search: ''
    }
  }

  componentWillMount() {
    this.getLists();
  }

  getLists = async () => {
    this.setState({ loading: true });
    try {
      let data = await api.get(`api/cancer_research`).then(({ data }) => data);
      this.setState({ lists: data, count: data.length });
    } catch (exp) {
      console.error(exp);
    } finally {
      this.setState({ loading: false });
    }
  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  addToFilter = (event) => {
    if (event.key === 'Enter') {
      const list = [];
      list.push(this.state.search);
      this.setState({ filters: list });
      this.setState({ search: '' });
    }
  }

  render() {
    return (
      <div className="App">
        <Header search={this.state.search} updateSearch={this.updateSearch} addToFilter={this.addToFilter} />
        <Switch>
            <Route exact path="/" render={() => <Home
              lists={this.state.lists}
              loading={this.state.loading}
            />
            } />
            <Route path="/description" render={() => <Description
              lists={this.state.lists}
              loading={this.state.loading}
            />} />
            <Route path="/images" render={() => <Image
              lists={this.state.lists}
              loading={this.state.loading}
            />} />
            
             <Route path="/item" render={() => <ItemView 
             items = {this.state.lists} 
             location = {window.location}
             />}/>
          </Switch>
      </div>
    );
  }
}
export default App;