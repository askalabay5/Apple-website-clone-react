import React, { Component } from "react";


export default class HLink extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={this.props.url}>
                    {this.props.pic ? <img src={this.props.pic} />:this.props.name}
                </a>
            </li>
        );
    }
}
