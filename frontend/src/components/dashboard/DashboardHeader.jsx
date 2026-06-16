import "./DashboardHeader.css"
function DashboardHeader({
    handle,
    setHandle,
    fetchProfile,
    loading
}) {
    return (
        <div className="dashboard-header">
            <div className="dashboard-title">
                <h1>Dashboard</h1>
                <p>
                    Track your progress, identify weaknesses,
                    and improve faster.
                </p>                
            </div>
            <div className="search-box">
            
                <input
                    type="text"
                    placeholder="Enter Codeforces Handle"
                    value={handle}
                    onChange={(e) =>
                        setHandle(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if(e.key==="Enter"){
                            fetchProfile();
                        }
                    }}
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
export default DashboardHeader;