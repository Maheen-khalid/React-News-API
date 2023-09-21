import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <div>
        <div>
        <img className="mx-5 my-3"
        src="https://img.freepik.com/premium-vector/abstract-colorful-bird_621127-276.jpg" 
        height={80} width={80}></img>
          <ul class="nav nav-underline justify-content-center ">
         
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
          {/* <hr style={{"color":"solid black"}}></hr> */}
        </div>
      </div>
    );
  }
}
