import React from "react";
import './Dashboard.css';

function Dashboard() {

  const dashboardLists = [
    {name: "Profile"},
    {name: "Logout"}
  ]

  return (
    <>
      <div className="dashboard-container">
        <ul type="none" className="dash-lists-container">
       {dashboardLists?.map(copyOfDashboardLists => {
        return (
          <li className="dash-lists">{copyOfDashboardLists.name}</li>
        )
       })}
       </ul>
      </div>
    </>
  )
}


export default Dashboard;