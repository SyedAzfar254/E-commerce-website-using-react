import React from 'react'
import CardItem from './CardItem'
import './Cards.css' 


function Cards() {
    return (
        <div className="cards">
            <h1> Check Out Our Epic Projects! </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                         src='.././images/img-9.jpg'
                         text="Measuring The Average WaterFall Per Duration"
                         label="Within 3 Months"
                         path="/sign-up"
                        />
                        <CardItem
                         src='.././images/img-2.jpg'
                         text="Travel Maps Via Cruise"
                         label="Within 4 Months"
                         path="/sign-up"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                         src='.././images/img-3.jpg'
                         text="Track The Number Of Cruises Within A Associated Circle"
                         label="Within 6 Months"
                         path="/sign-up"
                        />
                        <CardItem
                         src='.././images/img-4.jpg'
                         text="Visualize A FootBall Playing Ground"
                         label="Within 8 Months"
                         path="/sign-up"
                        />
                        <CardItem
                         src='.././images/img-8.jpg'
                         text="Camel Tour Guide In Sahara"
                         label="Within 2 Years"
                         path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
