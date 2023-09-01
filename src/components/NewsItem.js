import React, { Component } from "react";
import './NewsItem.css';


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <img src={!imageUrl ? 'https://i.ibb.co/JvHLYH0/News-APP-1.png' : imageUrl} className="card-img-top" alt="..." />
          <p className="card-text mt-1 mb-0"><small className="mx-3">{source}</small></p>
          <div className="card-body">
            <h5 className="card-title">{!title ? 'Sorry! This news is not avaiable right now. Please refresh to update news catalog!' : title}</h5>
            <p className="card-text">
              {!description ? 'Description not available. Click read more for details.' : description}
            </p>
            <p className="card-text"><small className="text-body-secondary">{!(author && title) ? 'Not Available' : `By ${author} Updated on ${new Date(date).toGMTString()}`}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
