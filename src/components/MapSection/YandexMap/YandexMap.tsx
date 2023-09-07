import { memo, useEffect, useState } from "react";
import { Map, Placemark } from "@pbe/react-yandex-maps";
import { message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCoords, setCoordsMark, setLoading, setMock, setSearch } from "@/store/reducers/mainReducer";
import { RootState } from "@/store/store";

const YandexMap = () => {
    const dispatch = useDispatch();

    const {search, loading, mock, coords, coordsMark, needAsyncFetch} = useSelector((state: RootState) => state);
    const [yamapsState, setYamapsState] = useState<typeof window.ymaps | null>(null);
    const [timeoutSearch, setTimeoutSearch] = useState<NodeJS.Timeout | undefined>(undefined);

    const fetchLocation = (value: string | readonly number[]) => {
        yamapsState?.geocode(value)
            .then((res) => {
                const firstGeoObject = res.geoObjects.get(0);
                const firstGeoObjectCoords = res.geoObjects.get(0).geometry?.getCoordinates();

                if (!Array.isArray(firstGeoObject)) {
                    dispatch(setMock(firstGeoObjectCoords));
                    dispatch(setCoordsMark(firstGeoObjectCoords));
                } else
                    dispatch(setMock(firstGeoObject));

                dispatch(setSearch(firstGeoObject.getAddressLine()));
                dispatch(setLoading(false));
                dispatch(setCoords([]));
            })
            .catch(() => {
                message.error("Несуществующий адрес");
                dispatch(setLoading(false));
            });
    };

    useEffect(() => {
        if (yamapsState && search && needAsyncFetch) {
            dispatch(setLoading(true));
            if (timeoutSearch)
                clearTimeout(timeoutSearch);
            setTimeoutSearch(setTimeout(() =>
                fetchLocation(search), 1000)
            );
        }
    }, [search]);
    useEffect(() => {
        if (yamapsState && coords.length > 0) {
            dispatch(setLoading(true));
            if (timeoutSearch)
                clearTimeout(timeoutSearch);
            setTimeoutSearch(setTimeout(() =>
                fetchLocation(coords), 1000)
            );
        }
    }, [yamapsState, coords]);
    return (
        <Map
            onLoad={(ymaps) => setYamapsState(ymaps)}
            state={{
                center: coordsMark.length > 0
                    ? coordsMark
                    : [55.75, 37.57],
                zoom: 9
            }}
            width={1050}
            height={400}
            modules={["geocode"]}
            onClick={(event: any) => {
                dispatch(setCoords(event.get("coords")))
                dispatch(setCoordsMark(event.get("coords")));
            }}
        >
            {(coordsMark.length > 0 || coords.length > 0) &&
                <Placemark
                    geometry={coordsMark.length > 0
                        ? coordsMark
                        : coords
                    }
                    options={{
                        iconImageSize: [30, 30],
                        draggable: true,
                        preset: "islands#yellowIcon",
                        hideIconOnBalloonOpen: false,
                        openEmptyHint: true
                    }}
                    properties={{
                        iconContent: "+"
                    }}
                />
            }
            {!loading && (coordsMark.length > 0 || coords.length > 0) &&
                mock.map((elem) =>
                    <Placemark
                        key={elem.crew_id}
                        geometry={[elem.lat, elem.lon]}
                        options={{
                            iconImageSize: [30, 30],
                            draggable: true,
                            preset: "islands#greenIcon",
                            hideIconOnBalloonOpen: false,
                            openEmptyHint: true
                        }}
                        properties={{
                            iconContent: elem.car_number
                        }}
                    />
                )
            }
        </Map>
    );
};

export default memo(YandexMap);