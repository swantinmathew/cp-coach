import "./CompareDirect.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function CompareDirect() {

    const [handle1, setHandle1] = useState("");
    const [handle2, setHandle2] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const compareProfiles = async () => {

        try {

            setLoading(true);

            const response =
                await API.get(
                    `/profile/${handle1}`
                );

            const firstProfile =
                response.data.result[0];

            navigate(
                "/compare",
                {
                    state: {
                        currentProfile:
                            firstProfile,
                        directHandle:
                            handle2
                    }
                }
            );

        } catch(error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="compare-direct-page">

            <div className="compare-direct-card">

                <h1>
                    Compare Profiles
                </h1>

                <p>
                    Compare two Codeforces
                    programmers side by side.
                </p>

                <div className="compare-form">

                    <div className="compare-input-group">

                        <label>
                            First Handle
                        </label>

                        <input
                            placeholder="tourist"
                            value={handle1}
                            onChange={(e) =>
                                setHandle1(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="compare-input-group">

                        <label>
                            Second Handle
                        </label>

                        <input
                            placeholder="Benq"
                            value={handle2}
                            onChange={(e) =>
                                setHandle2(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <button
                        className="compare-button"
                        onClick={compareProfiles}
                    >

                        {loading
                            ? "Loading..."
                            : "Compare Now →"}

                    </button>

                </div>

            </div>

        </div>

    );

}

export default CompareDirect;