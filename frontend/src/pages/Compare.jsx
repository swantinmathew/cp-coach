import "./Compare.css"
import API from "../services/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Compare() {

    const location = useLocation();
    const currentProfile = location.state?.currentProfile;
    const [compareHandle, setCompareHandle] = useState("");
    const [compareProfile, setCompareProfile] = useState(null)
    const [loading, setLoading] = useState(false);
    const compareProfiles = async () => {

        try {

            setLoading(true);

            const response =
                await API.get(
                    `/profile/${compareHandle}`
                );
            console.log(response.data.result[0]);
            setCompareProfile(
                response.data.result[0]
            );

        } catch(error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };
    return (

        <div>

            <h1>
                Compare Profiles
            </h1>

            <p>
                Current Profile:
                {" "}
                {currentProfile?.handle}
            </p>

            <input
                placeholder="Enter Handle To Compare"
                value={compareHandle}
                onChange={(e)=>
                    setCompareHandle(
                        e.target.value
                    )
                }
            />

            <button
                onClick={compareProfiles}
            >
                {loading
                    ? "Comparing..."
                    : "Compare"}
            </button>
            
            {compareProfile && currentProfile && (

            <div className="comparison-card">

                <h2>
                    {currentProfile?.handle}
                    {" vs "}
                    {compareProfile.handle}
                </h2>

                <div className="comparison-row">
                    <span>Rating</span>

                    <strong>
                        {currentProfile?.rating}
                    </strong>

                    <strong>
                        {compareProfile.rating}
                    </strong>
                </div>

                <div className="comparison-row">
                    <span>Max Rating</span>

                    <strong>
                        {currentProfile?.maxRating}
                    </strong>

                    <strong>
                        {compareProfile.maxRating}
                    </strong>
                </div>

                <div className="comparison-row">
                    <span>Rank</span>

                    <strong>
                        {currentProfile?.rank}
                    </strong>

                    <strong>
                        {compareProfile.rank}
                    </strong>
                </div>

            </div>

        )}
        </div>

    );

};


export default Compare;