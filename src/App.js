import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Footer from './components/Footer';

export default class App extends Component {
  
  state ={
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }
  constructor() {
    super();
    this.state = {
      country: 'in'
    }
  }
  changeCountry(ctr) {
    this.setState({
      country: ctr
    })
    console.log("COUNTRY CHANGED", ctr)
  }
  pagesize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <Navbar changeCountry={this.changeCountry.bind(this)} />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="home" pageSize={this.pagesize} country={this.state.country} category='general' />} />
            {/* <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pagesize} country={this.state.country} category='general' />} /> */}
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pagesize} country={this.state.country} category='business' />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pagesize} country={this.state.country} category='entertainment' />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pagesize} country={this.state.country} category='health' />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pagesize} country={this.state.country} category='science' />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pagesize} country={this.state.country} category='sports' />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pagesize} country={this.state.country} category='technology' />} />
          </Routes>



          {/* <News apiKey={this.apiKey} setProgress={this.setProgress} pageSize={this.pagesize} country='in' category='sports'/> */}
          {/* <Footer/> */}
        </Router>
      </div>

    )
  }
}

