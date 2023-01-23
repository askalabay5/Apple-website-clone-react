import React, { Component } from "react";

class FooterLi extends Component {
    render() {
        const element = this.props.links;
        return (
            <ul>
                {element.map((el,i) => {
                    return (
                        <li key={i} >
                            <a href="#">{el}</a>
                        </li>
                    );
                })}
            </ul>
        );
    }
}
export default FooterLi;
