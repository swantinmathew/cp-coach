function DashboardHeader() {
    return (
        <div>
            <h1>Dashboard</h1>

                <div className="search-box">
            
                    <input
                        type="text"
                        placeholder="Enter Codeforces Handle"
                        value={handle}
                        onChange={(e) =>
                            setHandle(
                                e.target.value
                                    )
                                }
                        onKeyDown={(e) => {
                                    if(e.key==="Enter"){
                                        fetchProfile();
                                    }
                                }
            
                                }
                            />
            
                            <button
                                onClick={fetchProfile}
                                disabled={loading || !handle.trim()}
                            >
                                {loading ? "Analyzing..." : "Analyze"}
                            </button>
                            </div>
        </div>
    );
}