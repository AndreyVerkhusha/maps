import { memo } from "react";
import { message } from "antd";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import moment from "moment";

import "./SendRequest.scss";

const SendRequest = () => {
    const {search, loading, coordsMark, relevantCrew} = useSelector((state: RootState) => state);

    const handleSend = () => {
        const objResult = {
            "source_time": moment().format("YYYYMMDDhhmmss"),
            "addresses": [
                {
                    "address": search,
                    "lat": coordsMark[0],
                    "lon": coordsMark[1]
                }
            ],
            "crew_id": relevantCrew.crew_id
        };
        alert(JSON.stringify(objResult, null, 4));
    };
    return (
        <div
            className="send_request"
            onClick={() => {
                if (loading || Object.values(relevantCrew)?.length === 0)
                    message.error("Заполните все поля");
                else
                    handleSend();
            }}
        >
            Заказать
        </div>
    );
};

export default memo(SendRequest);