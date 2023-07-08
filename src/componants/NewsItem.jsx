import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor() {
        super();
    }

    render() {

        let { title, description, imageUrl ,newsUrl} = this.props;

        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsdetails" className="btn btn-sm btn-primary">Read more ...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem 