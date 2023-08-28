import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props; 
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/95e29496e5ca0c3441d0471d5258dc6d.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
