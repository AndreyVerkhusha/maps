export type State = {
    search: string;
    relevantCrew: Crew;
    loading: boolean;
    crewsList: Crew[];
    coords: readonly number[];
    coordsMark:number[];
    mock: Crew[];
}
export type Crew = {
    "crew_id": number;
    "car_mark": string;
    "car_model": string;
    "car_color": string;
    "car_number": string;
    "driver_name": string;
    "driver_phone": string;
    "lat": number;
    "lon": number;
    "distance": number;
}

