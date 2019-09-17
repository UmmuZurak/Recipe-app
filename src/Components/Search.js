import React from 'react';
import Button from './Button.js';
import Logo from './logo.js'

const Search = (props) => (
   <div className='search'>
      <Logo/>
      <div className='search-content'>
         <div className='search-title'>
            <h1>That recipe you've always wanted for a great meal is just a search away...</h1> 
         </div>
         <div className='search-form'>
            <form className='form' onSubmit={props.getRecipe}>
              <div className='form-input'>
              <span><input type='text' name='recipeName' placeholder='Search recipe here...'/></span><span><i className='fa fa-search'></i></span>
              </div>
              <Button buttonClass='form-button' buttonText="Let's Go"/>
            </form>
         </div>
      </div>
   </div>
);

export default Search;