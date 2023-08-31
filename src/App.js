import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Footer from './components/Footer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      country: 'in'
    }
  }
  changeCountry(ctr){
    this.setState({
      country: ctr
    })
    console.log("COUNTRY CHANGED")
    console.log(ctr)
  }
  render() {
    return (
      <div>
        <Router>
            <Navbar changeCountry={this.changeCountry.bind(this)}/>
          <Routes>
            <Route exact path="/" element={<News key="home" pageSize={20} country={this.state.country} category='general'/>}   />
            <Route exact path="/general" element={<News key="general" pageSize={20} country={this.state.country} category='general'/>}   />
            <Route exact path="/business" element={<News key="business" pageSize={20} country={this.state.country} category='business'/>}   />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country={this.state.country} category='entertainment'/>}   />
            <Route exact path="/health" element={<News key="health" pageSize={20} country={this.state.country} category='health'/>}   />
            <Route exact path="/science" element={<News key="science" pageSize={20} country={this.state.country} category='science'/>}   />
            <Route exact path="/sports" element={<News key="sports" pageSize={20} country={this.state.country} category='sports'/>}   />
            <Route exact path="/technology" element={<News key="technology" pageSize={20} country={this.state.country} category='technology'/>}   />
          </Routes>



            {/* <News pageSize={20} country='in' category='sports'/> */}
            {/* <Footer/> */}
        </Router>
      </div>
      
    )
  }
}

