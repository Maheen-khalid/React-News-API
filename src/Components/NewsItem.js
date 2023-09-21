import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title, description , imageUrl, newsurl} = this.props
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} class="card-img-top" alt="newspic" />
          <div className="card-body">
            <div className="card-title">
                <h5>{title}</h5></div>
            <p class="card-text">
              {description}
            </p>
            <a href={newsurl} target="_blank" className="btn btn-primary"> See News</a>
          </div>
        </div>
      </div>
    );
  }
}
