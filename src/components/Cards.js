import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Clínica de Tratamentos Estéticos e Vacinação</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Tratamentos Corporais'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Tratamentos Faciais'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Vacinação'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Colocação de brincos em bebês'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Medicina Integrativa'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
            <h1>Tratamentos Corporais</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Emagrecimento'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Gordura Localizada'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Drenagem Linfática'
                            label='Mystery'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            <h1>Tratamentos Faciais</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Botox'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Melasma'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Peeling'
                            label='Mystery'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            <h1>Medicina Integrativa</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Botox'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Melasma'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Peeling'
                            label='Mystery'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
            <h1>Vacinação</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Meningite ACWY'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Herpes Zoster'
                            label='Luxury'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Gripe'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Febre Amarela'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Tuberculose'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
        
    );
}

export default Cards;