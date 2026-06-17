import "./Sidebar.css";
function Sidebar({
    menuOpen,
    setMenuOpen
}) {
    return (
        <div className={
            menuOpen
                ? "sidebar open"
                : "sidebar"
        }>
            <div className="sidebar-logo">
                <h2>CP Coach</h2>
            </div>
            <div className="sidebar-menu">
                <div className="menu-item active">
                    Dashboard
                </div>
                <div className="menu-item">
                    Profile Analysis
                </div>
                <div className="menu-item">
                    Contest
                </div>
                <div className="menu-item">
                    Topics
                </div>
                <div className="menu-item">
                    Recommendations
                </div>
                <div className="menu-item">
                    Roadmap
                </div>
                <div className="menu-item">
                    Compare
                </div>
                <div className="menu-item">
                    Settings
                </div>
            </div>
            <div className="analyze-card">
                <h4>Analyze Another Profile</h4>
                <button className="arrow-btn">→</button>
            </div>
            <div className="user-card">
                <div className="user-info">
                    <h4>User Info</h4>
                </div>
            </div>
        </div>

    );
}

export default Sidebar;