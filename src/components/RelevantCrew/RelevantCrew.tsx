import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Card from "./Card/Card";

import "./RelevantCrew.scss";

const RelevantCar = () => {
    const {relevantCrew, loading} = useSelector((state: RootState) => state);

    return (
        <>
            {(Object.values(relevantCrew).length > 0 && !loading) &&
                <div className="relevant_car">
                    <div className="label">Подходящий экипаж</div>
                    <Card {...relevantCrew}/>
                </div>
            }
        </>
    );
};

export default memo(RelevantCar);