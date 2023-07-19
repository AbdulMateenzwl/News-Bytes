import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    captalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from News componant");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = this.captalizeFirstLetter(props.category) + " - NewsBytes";
    };

    async updateNews(pageNo) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=367be74b571d49c8ab6155190d0e4b47&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3 align-center'>
                <h2 className='text-center'>NewsBytes - Top Headlines on {this.captalizeFirstLetter(this.props.category)}</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                    {!this.state.loading &&  this.state.articles?.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} content={element.content} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalArticles / this.props.pageSize) < this.state.page + 1} className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News