import { FC } from "react";
import { Crew } from "@/types";

import car from "@/assets/car.png";
import arrow from "@/assets/arrow.png";
import "./CrewItem.scss";

const CrewItem: FC<Crew & { setCurrentRelevant: () => void }> = (props) => {
    const {car_color, car_model, car_mark, distance, setCurrentRelevant} = props;

    return (
        <div
            className="crew_item"
            onClick={() => setCurrentRelevant()}
        >
            <div className="crew_item-icon">
                <img src={car} alt="car"/>
            </div>
            <div className="crew_item-info">
                <div className="model">
                    {car_mark} {car_model}
                </div>
                <div className="color">
                    {car_color}
                </div>
            </div>
            <div className="crew_item-distance">
                {distance}м
            </div>
            <div className="crew_item-arrow">
                <img src={arrow} alt="arrow"/>
            </div>
        </div>
    );
};

export default CrewItem;