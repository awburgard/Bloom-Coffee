import React from 'react';
import ImageList from '../ImageList/ImageList';
import 'bulma/css/bulma.css';
import './KCMO.css'

const HomePage = () => {
  return (
    <div>
      <div className="hero is-large bg-img">
        <div className="hero-body">
          <div className="container">
            <h1 className="shadow-text title has-text-white has-text-centered">
              Welcome to <br /> Kansas City
            </h1>
          </div>
        </div>
      </div>
      <ImageList />
    </div>
  )

}



export default HomePage
