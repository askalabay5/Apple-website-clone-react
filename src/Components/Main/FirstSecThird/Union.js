import React, { Component } from 'react'

export default class Union extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="new-alert">{this.props.new}</div>

          <div className={this.props.Cname}>
            {this.props.title}
          </div>

          <div className={this.props.Dname}>
            {this.props.description}
          </div>

          <div className={this.props.Pname}>
            {this.props.price}</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">{this.props.orderBuy}</a>
              </li>
            </ul>
          </div>

          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              {this.props.ipadText1}
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              {this.props.ipadText2}
            </div>
          </div>


        </div>


      </div >
    )
  }
}
