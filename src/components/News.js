import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    console.log("hello i am a Constructor.")
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=94c9334cf7384aa6a251f6dab17f9b39&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData =await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }

  handlePrevClick =async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=94c9334cf7384aa6a251f6dab17f9b39&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData =await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page-1,
      loading: false
    })
  }

  handleNextClick =async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=94c9334cf7384aa6a251f6dab17f9b39&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parseData =await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page+1,
      loading: false
    })
  }

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Top Headlines</h1>
        <hr />
        {this.state.loading && <Spinner/>}
       { !this.state.loading && <div className='d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&#8592; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
        </div>}
        <div className='d-flex justify-content-between flex-wrap'>
          {!this.state.loading && this.state.articles.map((element)=>{
             return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          })}  
        </div>
        { !this.state.loading && <div className='d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&#8592; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
        </div>}
      </div>
    )
  }
}

export default News