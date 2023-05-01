import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Services() {
  return ( 
    <>
    <div className='services'>
      <h1 className='services'>TRATAMENTOS</h1>;
        <div className='services__container'>
                <div className='services__wrapper'>
                    {/* <ul className='services__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Tratamentos Corporais'
                            label='Adventure'
                            path='/services'
                        />
                    </ul> */}
                </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}
