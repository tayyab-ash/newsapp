import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  handleChangeCountry(newCountry){
    this.props.changeCountry(newCountry)
  }
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className='d-flex justify-content-center align-items-center'>
              <img src="https://i.ibb.co/QdZ1f11/live.png" className='mx-1' width='40px' alt="" />
              <Link className="navbar-brand" style={{fontSize: '1.5em'}} to="/">NewsAPP</Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Country
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('fr')}>France</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('de')}>Germany</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('hk')}>Hong Kong</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('in')}>India</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('it')}>Italy</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('nz')}>New Zealand</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('sa')}>Saudi Arabia</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('ch')}>Switzerland</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('us')}>US</button></li>
            <li><button className="dropdown-item"  onClick={()=>this.handleChangeCountry('ae')}>UAE</button></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
          </ul>
        </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar