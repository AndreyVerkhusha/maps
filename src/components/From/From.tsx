import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAsyncFetch } from "@/store/reducers/mainReducer";
import { RootState } from "@/store/store";
import { Spin } from "antd";

import "./From.scss";

const From = () => {
    const dispatch = useDispatch();
    const {search, loading} = useSelector((state: RootState) => state);

    return (
        <div className="from">
            <div className="label">Откуда</div>
            <input
                value={search}
                autoFocus={true}
                onChange={(e) => dispatch(setSearchAsyncFetch(e.target.value))}
                placeholder={"Search..."}
                type="text"
            />
            {loading &&
                <Spin className={"spin"}/>
            }
        </div>
    );
};

export default memo(From);