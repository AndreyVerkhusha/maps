import { createSlice } from "@reduxjs/toolkit";
import { Crew, State } from "@/types";

const initialState: State = {
    search: "",
    relevantCrew: {} as Crew,
    loading: false,
    crewsList: [],
    coords: [],
    coordsMark: [],
    needAsyncFetch: false,
    mock: [
        {
            "crew_id": 123,
            "car_mark": "Chevrolet",
            "car_model": "Lacetti",
            "car_color": "синий",
            "car_number": "Е234КУ",
            "driver_name": "Деточкин",
            "driver_phone": "7788",
            "lat": 56.855532,
            "lon": 53.217462,
            "distance": 300
        },
        {
            "crew_id": 124,
            "car_mark": "Hyundai",
            "car_model": "Solaris",
            "car_color": "белый",
            "car_number": "Ф567АС",
            "driver_name": "Петров",
            "driver_phone": "8899",
            "lat": 56.860581,
            "lon": 53.209223,
            "distance": 600
        },
        {
            "crew_id": 125,
            "car_mark": "BMW",
            "car_model": "x3",
            "car_color": "красный",
            "car_number": "М566АУ",
            "driver_name": "Василий",
            "driver_phone": "8899",
            "lat": 56.860581,
            "lon": 53.209223,
            "distance": 600
        },
        {
            "crew_id": 126,
            "car_mark": "AUDI",
            "car_model": "Q9",
            "car_color": "зелёный",
            "car_number": "Т666ИУ",
            "driver_name": "Иван",
            "driver_phone": "8899",
            "lat": 56.860581,
            "lon": 53.209223,
            "distance": 100
        }
    ]
};

const mainReducer = createSlice({
    name: "data",
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
            state.needAsyncFetch = false;
        },
        setSearchAsyncFetch(state, action) {
            if (!action.payload) {
                state.coords = [];
                state.coordsMark = [];
                state.relevantCrew = {} as Crew;
            }
            state.crewsList = [];
            state.search = action.payload;
            state.needAsyncFetch = true;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setCoords(state, action) {
            state.coords = action.payload;
        },
        setCoordsMark(state, action) {
            state.coordsMark = action.payload;
        },
        setRelevantCrew(state, action) {
            state.relevantCrew = action.payload;
        },
        setMock(state, action) {
            let crewsList = [...state.mock];
            for (let i = 0; i < crewsList.length; i++) {
                const lat = action.payload[0];
                const lon = action.payload[1];
                crewsList[i].lat = lat + (lat / 100 * (Math.random() * 0.1));
                crewsList[i].lon = lon + (lon / 100 * (Math.random() * 0.1));
                crewsList[i].distance = Math.floor(Math.random() * 1000);
            }
            crewsList = crewsList.sort((a, b) => a.distance - b.distance);
            state.crewsList = crewsList;
            state.relevantCrew = crewsList[0];
        }
    }
});
export const {
    setSearch, setLoading, setMock, setSearchAsyncFetch,
    setRelevantCrew, setCoords, setCoordsMark
} = mainReducer.actions;
export default mainReducer.reducer;