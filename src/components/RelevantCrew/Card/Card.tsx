import { FC } from "react";
import { Crew } from "@/types";

import car from "@/assets/car.png";
import "./Card.scss";

const Card: FC<Crew> = ({car_mark, car_model, car_color, car_number}) => {
    return (
        <div className="card">
            <div className="card_icon">
                <img src={car} alt="car"/>
            </div>
            <div className="card_info">
                <div className="model">
                    {car_mark} {car_model}
                </div>
                <div className="color">
                    {car_color}
                </div>
                <div className="number">
                    {car_number}
                </div>
            </div>
        </div>
    );
};

export default Card;