import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrewItem from "@/components/MapSection/CrewsList/CrewItem/CrewItem";
import { setRelevantCrew } from "@/store/reducers/mainReducer";
import { RootState } from "@/store/store";

import "./CrewsList.scss";

const CrewsList = () => {
    const dispatch = useDispatch();
    const {crewsList, loading} = useSelector((state: RootState) => state);

    return (
        <div className="crews_list">
            {(crewsList?.length > 0 && !loading) &&
                crewsList.map(elem =>
                    <CrewItem
                        {...elem}
                        key={elem.crew_id}
                        setCurrentRelevant={() => dispatch(setRelevantCrew(elem))}
                    />
                )
            }
        </div>
    );
};

export default memo(CrewsList);