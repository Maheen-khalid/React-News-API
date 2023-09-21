import React, { Component } from 'react'

export default class Cover extends Component {
  render() {
    return (
      <div>
        <div className='container'>
            <div className='row flex-md-row'>
                <div className='col-md-5 py-5 px-4 col-sm-12 mx-4 '>
                    <h1 className='my-5'>Manage all your cards in one place</h1>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Consectetur earum voluptatibus impedit ullam, similique facilis nam id doloremque ducimus, 
                      aperiam ea! Obcaecati aperiam, iusto error eligendi dolorem perferendis ea id?</p>
                      <button className='btn btn-primary w-12'>Sign Up</button>
                </div>
                
                <div className='col-md-5 col-sm-12 mx-4'>
                    <img src='https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg'></img>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
