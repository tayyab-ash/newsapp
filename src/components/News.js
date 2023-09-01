import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: this.country,
    pageSize: this.pageSize,
    category: 'general'

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }


  constructor() {
    super();
    console.log("hello i am a Constructor.")
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }


  async componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.setState({
        page: 1
      })
      this.componentDidMount();
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94c9334cf7384aa6a251f6dab17f9b39&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState(
        (prevState) => ({
          page: prevState.page - 1,
        }),
        () => {
          this.updateNews();
        }
      );
    }
  }

  handleNextClick = async () => {
    if (this.state.page < (Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState(
        (prevState) => ({
          page: prevState.page + 1,
        }),
        () => {
          this.updateNews();
        }
      );
    }
  }





  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center'>Top Headlines</h1>
        <hr />
        {this.state.loading && <Spinner />}
        {!this.state.loading && <div className='d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&#8592; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
        </div>}
        <div className='d-flex justify-content-between flex-wrap'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <NewsItem key={!element.url ? Math.random() : element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={!element.author ? 'Unknown' : element.author} date={element.publishedAt} source={element.source.name} />
          })}
        </div>
        {!this.state.loading && <div className='d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&#8592; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
        </div>}
      </div>
    )
  }
}

export default News