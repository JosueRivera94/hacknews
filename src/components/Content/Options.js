import React from 'react'
import {NewsFaves} from './NewsFaves'

export const Options = () => {
  return (
    <>

     {/*Buttons to select all the news o the faves */}
      <div className="options-container">
        <div className="options-box">

          <div className="all-container">
            <span className="all">All</span>
          </div>
          
          <a className='faveslink' href={NewsFaves}  >
          <div className="faves-container">
            <span className="faves">My Faves</span>
          </div>
          </a>

        </div>
      </div>
    </>
  );
}
