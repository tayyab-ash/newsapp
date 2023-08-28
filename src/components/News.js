import React, { Component } from 'react'
import NewsItem from './NewsItem'
import './News.css'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>All Headlines</h1>
        <div className='allNews my-3'>
          <NewsItem title="Sample Title" description="Some quick example text of the card's content."/>
          <NewsItem title="Sample Title" description="Some quick example text of the card's content."/>
          <NewsItem title="Sample Title" description="Some quick example text of the card's content."/>
          <NewsItem title="Sample Title" description="Some quick example text of the card's content."/>
        </div>
        
      </div>
    )
  }
}

export default News