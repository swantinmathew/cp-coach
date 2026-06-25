import "./Compare.css"
import API from "../services/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Compare() {

    const location = useLocation();
    const currentProfile = location.state?.currentProfile;
    const directHandle =
    location.state?.directHandle;
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
    useEffect(() => {

        if (directHandle) {

            setCompareHandle(
                directHandle
            );

        }

    }, [directHandle]);

    useEffect(() => {

        if (
            directHandle &&
            compareHandle
        ) {

            compareProfiles();

        }

    }, [compareHandle]);

    const getRankClass = (rank) => {

        const r = rank?.toLowerCase() || "";

        if (r.includes("legendary")) return "legendary";
        if (r.includes("grandmaster")) return "grandmaster";
        if (r.includes("master")) return "master";
        if (r.includes("candidate")) return "candidate-master";
        if (r.includes("expert")) return "expert";
        if (r.includes("specialist")) return "specialist";
        if (r.includes("pupil")) return "pupil";

        return "newbie";
    };
    return (

        <div className="compare-page">

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

                        <div className="battle-banner">

                            <div className="fighter-side">

                                <h3>{currentProfile.handle}</h3>

                                <div className={`rank ${getRankClass(currentProfile.rank)}`}>
                                    {currentProfile.rank}
                                </div>

                                <div className="banner-stat">
                                    Rating: {currentProfile.rating}
                                </div>

                                <div className="banner-stat">
                                    Max: {currentProfile.maxRating}
                                </div>

                            </div>

                            <div className="battle-center">

                                <div className="battle-vs">
                                    ⚔️ VS ⚔️
                                </div>

                            </div>

                            <div className="fighter-side">

                                <h3>{compareProfile.handle}</h3>

                                <div className={`rank ${getRankClass(compareProfile.rank)}`}>
                                    {compareProfile.rank}
                                </div>

                                <div className="banner-stat">
                                    Rating: {compareProfile.rating}
                                </div>

                                <div className="banner-stat">
                                    Max: {compareProfile.maxRating}
                                </div>

                            </div>

                        </div>

                    </div>  
                    <div className="section-divider">
                        Detailed Comparison
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