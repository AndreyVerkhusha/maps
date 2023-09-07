import { memo } from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import CrewsList from "@/components/MapSection/CrewsList/CrewsList";
import YandexMap from "@/components/MapSection/YandexMap/YandexMap";

import "./MapSection.scss";

const MapSection = () => {
    return (
        <div className="map_section">
            <YMaps query={{apikey: "34257156-cf8f-43f0-ad85-8b21d88e01cf"}}>
                <YandexMap/>
            </YMaps>
            <CrewsList/>
        </div>
    );
};

export default memo(MapSection);