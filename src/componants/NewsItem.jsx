import React, { Component } from 'react'

export class NewsItem extends Component {

    constructor() {
        super();
    }

    render() {

        let { title, description, imageUrl ,newsUrl,content} = this.props;

        return (
            <div className='my-3'>
                 <div className="card" >
                    <img src={!imageUrl?"https://demofree.sirv.com/nope-not-here.jpg":imageUrl}  className="card-img-top" alt={content} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; 
                        currentTarget.src="https://demofree.sirv.com/nope-not-here.jpg";
                      }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description} . . .</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem 