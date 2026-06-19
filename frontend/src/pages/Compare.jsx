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

        <div className="comapare-page">

            <div className="compare-hero">

                <h1>
                    ⚔️ Compare Profiles
                </h1>

                <p>
                    Compare your Codeforces performance
                    against any competitive programmer
                    and discover where you stand.
                </p>

                <div className="compare-search">

                    <input
                        placeholder="Enter Handle To Compare"
                        value={compareHandle}
                        onChange={(e) =>
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

                </div>

            </div>
            
            {compareProfile && currentProfile && (

                
                <div className="battle-table">

                    <div className="battle-header">

                        <h3>
                            {currentProfile.handle}
                        </h3>

                        <span>VS</span>

                        <h3>
                            {compareProfile.handle}
                        </h3>

                    </div>

                    <div className="battle-row">

                        <span
                            className={
                                currentProfile.rating >
                                compareProfile.rating
                                    ? "winner"
                                    : ""
                            }
                        >
                            {currentProfile.rating}
                        </span>

                        <span className="metric">
                            Rating
                        </span>

                        <span
                            className={
                                compareProfile.rating >
                                currentProfile.rating
                                    ? "winner"
                                    : ""
                            }
                        >
                            {compareProfile.rating}
                        </span>

                    </div>

                    <div className="battle-row">

                        <span
                            className={
                                currentProfile.maxRating >
                                compareProfile.maxRating
                                    ? "winner"
                                    : ""
                            }
                        >
                            {currentProfile.maxRating}
                        </span>

                        <span className="metric">
                            Max Rating
                        </span>

                        <span
                            className={
                                compareProfile.maxRating >
                                currentProfile.maxRating
                                    ? "winner"
                                    : ""
                            }
                        >
                            {compareProfile.maxRating}
                        </span>

                    </div>

                    <div className="battle-row">

                        <span>
                            {currentProfile.rank}
                        </span>

                        <span className="metric">
                            Rank
                        </span>

                        <span>
                            {compareProfile.rank}
                        </span>

                    </div>

                    <div className="battle-row">

                        <span
                            className={
                                currentProfile.contribution >
                                compareProfile.contribution
                                    ? "winner"
                                    : ""
                            }
                        >
                            {currentProfile.contribution}
                        </span>

                        <span className="metric">
                            Contribution
                        </span>

                        <span
                            className={
                                compareProfile.contribution >
                                currentProfile.contribution
                                    ? "winner"
                                    : ""
                            }
                        >
                            {compareProfile.contribution}
                        </span>

                    </div>

                </div>

        )}
        </div>

    );

};


export default Compare;