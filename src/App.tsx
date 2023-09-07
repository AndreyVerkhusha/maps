import From from "./components/From/From";
import RelevantCrew from "./components/RelevantCrew/RelevantCrew";
import MapSection from "@/components/MapSection/MapSection";
import SendRequest from "@/components/SendRequest/SendRequest";

function App() {
    return (
        <div className="app">
            <div className="container">
                <From/>
                <RelevantCrew/>
                <MapSection/>
                <SendRequest />
            </div>
        </div>
    );
}

export default App;
