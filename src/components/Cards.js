import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Posts</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now'
              label='Donate Here'
              path='/Donate'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now'
              label='Donate Here'
              path='/Donate'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now'
              label='Donate Here'
              path='/Donate'
            />

          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now '
              label='Donate Here'
              path='/Donate'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now'
              label='Donate Here'
              path='/Donate'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Donate For Our Orgnization Now'
              label='Donate Here'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
