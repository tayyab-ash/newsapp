import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import india from './images/india.png'
import us from './images/united-states.png'
import './NewsItem.css'
import './ModeButton.css'
const countryImages = {
  in: india,
  us: us
};

export class Navbar extends Component {

  constructor(props) {
    super(props);
    const storedFlag = localStorage.getItem('selectedFlag');
    this.state = {
      selectedCountry: storedFlag || 'in' //retrieves the country from the Local storage if no Key is pressent the in the local storage 'in' is used.
    };
  }

  handleChangeCountry(newCountry) {
    this.props.changeCountry(newCountry)
    localStorage.setItem('selectedFlag', newCountry); //stores the selected country Flag key in the local storage when the country is changed.
    this.setState({
      selectedCountry: newCountry,
    });
  }

  handleCheckboxChange(){
    this.props.checkboxChange();
  }


  render() {
    const { selectedCountry } = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary  ">
        <div className="container-fluid">
          <div className='d-flex justify-content-center align-items-center'>
            <img src="https://i.ibb.co/QdZ1f11/live.png" className='mx-1' width='40px' alt="" />
            <Link className="navbar-brand" style={{ fontSize: '1.5em' }} to="/">NewsAPP</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" activeclassname="active" to="/technology">Technology</NavLink></li>
            </ul>
            <label className="switch">
              <input type="checkbox" onChange={()=> this.handleCheckboxChange()} />
              <span className="slider"></span>
            </label>
            <div className="btn-group">
              <button
                type="button"
                className="btn px-0"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <span><img src={countryImages[selectedCountry]} width='24px' alt="" /></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                <li><button className="dropdown-item d-flex justify-content-between" onClick={() => this.handleChangeCountry('in')}> <span>India</span>  <span><img src={india} width='24px' alt="" /></span></button></li>
                <li><button className="dropdown-item d-flex justify-content-between" onClick={() => this.handleChangeCountry('us')}> <span>US</span>  <span><img src={us} alt="" width='24px' /></span></button></li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar 