import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import { dataBase } from "../../data";

function Cards(){
    return (
        <div className="cards">
            <h1> Check out these absolute stunning destination </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {dataBase.map((item) => {
                            return (
                                <CardItem 
                                    key={item.id}
                                    src={`../../images/img-${item.id}.jpg`}
                                    text={item.text}
                                    label={item.label}
                                    path="/services"
                                />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards