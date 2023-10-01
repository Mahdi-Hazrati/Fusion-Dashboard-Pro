// ----------------- React --------------------
import React, { useContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
// ----------------- Pages --------------------
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login"
import List from "../../Pages/List/List"
import Single from "../../Pages/Single/Single"
import New from "../../Pages/New/New"
import Blank from "../../Pages/_blank/Blank";
// ---------------- Components ----------------
// --------------=-- Styles -------------------
import "./app.scss"
import "../../Global/Reset.scss"
import "../../Global/Dark_Mode.scss"
import "../../Global/RTL_Persian.scss"
// --------------------------------------------


function App() {
  const { darkmode } = useContext(DarkModeContext)

  return (
    <div className={darkmode ? "app dark" : "app"}>
      <HashRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="product">
              <Route index element={<List />} />
              <Route path=":productid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            {/* -------------------------------------------------------------------- */}
            <Route path="/navigation" element={<Blank title={"navigation"} />} />
            <Route path="/dashboard-overview" element={<Blank title={"Dashboard Overview"} />} />
            <Route path="/sales" element={<Blank title={"Sales"} />} />
            <Route path="/traffic" element={<Blank title={"Traffic"} />} />
            <Route path="/user-behavior" element={<Blank title={"User Behavior"} />} />
            <Route path="/marketing-campaigns" element={<Blank title={"Marketing Campaigns"} />} />
            <Route path="/content-performance" element={<Blank title={"Content Performance"} />} />
            <Route path="/tracks-customers" element={<Blank title={"Tracks Customers"} />} />
            <Route path="/security" element={<Blank title={"Security"} />} />
            <Route path="/customization" element={<Blank title={"Customization"} />} />
            <Route path="/user-accounts" element={<Blank title={"User Accounts"} />} />
            <Route path="/user-permissions" element={<Blank title={"User Permissions"} />} />
            <Route path="/password-management" element={<Blank title={"Password Management"} />} />
            <Route path="/user-comments" element={<Blank title={"User Comments"} />} />
            <Route path="/user-tickets" element={<Blank title={"User Tickets"} />} />
            <Route path="/user-activity-logs" element={<Blank title={"User Activity Logs"} />} />
            <Route path="/user-feedback" element={<Blank title={"User Feedback"} />} />
            <Route path="/products" element={<Blank title={"Products"} />} />
            <Route path="/product-creation" element={<Blank title={"Product Creation"} />} />
            <Route path="/categories" element={<Blank title={"Categories"} />} />
            <Route path="/brands" element={<Blank title={"Brands"} />} />
            <Route path="/inventory" element={<Blank title={"Inventory"} />} />
            <Route path="/special-offers" element={<Blank title={"Special Offers"} />} />
            <Route path="/orders" element={<Blank title={"Orders"} />} />
            <Route path="/shipping" element={<Blank title={"Shipping"} />} />
            <Route path="/inventory-tracking" element={<Blank title={"Inventory Tracking"} />} />
            <Route path="/taxes" element={<Blank title={"Taxes"} />} />
            <Route path="/reviews" element={<Blank title={"Reviews"} />} />
            <Route path="/product-performance" element={<Blank title={"Product Performance"} />} />
            <Route path="/posts" element={<Blank title={"Posts"} />} />
            <Route path="/create-post" element={<Blank title={"Create Post"} />} />
            <Route path="/categories" element={<Blank title={"Categories"} />} />
            <Route path="/media-library" element={<Blank title={"Media Library"} />} />
            <Route path="/comments-moderation" element={<Blank title={"Comments Moderation"} />} />
            <Route path="/traffic-tracking" element={<Blank title={"Traffic Tracking"} />} />
            <Route path="/engagement-metrics" element={<Blank title={"Engagement Metrics"} />} />
            <Route path="/conversion-rates" element={<Blank title={"Conversion Rates"} />} />
            <Route path="/pages-behavior" element={<Blank title={"Pages Behavior"} />} />
            <Route path="/landing-analytics" element={<Blank title={"Landing Analytics"} />} />
            <Route path="/audience" element={<Blank title={"Audience"} />} />
            <Route path="/ecommerce-performance" element={<Blank title={"Ecommerce Performance"} />} />
            <Route path="/events-interactions" element={<Blank title={"Events Interactions"} />} />
            <Route path="/site-speed" element={<Blank title={"Site Speed"} />} />
            <Route path="/reports" element={<Blank title={"Reports"} />} />
            <Route path="/resource-overview" element={<Blank title={"Resource Overview"} />} />
            <Route path="/resource-allocation" element={<Blank title={"Resource Allocation"} />} />
            <Route path="/resource-planning" element={<Blank title={"Resource Planning"} />} />
            <Route path="/resource-tracking" element={<Blank title={"Resource Tracking"} />} />
            <Route path="/resource-reporting" element={<Blank title={"Resource Reporting"} />} />
            <Route path="/resource-administration" element={<Blank title={"Resource Administration"} />} />
            <Route path="/employees" element={<Blank title={"Employees"} />} />
            <Route path="/teams" element={<Blank title={"Teams"} />} />
            <Route path="/performance" element={<Blank title={"performance"} />} />
            <Route path="/quick-actions" element={<Blank title={"Quick Actions"} />} />
            <Route path="/tasks" element={<Blank title={"Tasks"} />} />
            <Route path="/workspaces" element={<Blank title={"Workspaces"} />} />
            <Route path="/projects" element={<Blank title={"Projects"} />} />
            <Route path="/kanban-board" element={<Blank title={"Kanban Board"} />} />
            <Route path="/gantt-chart" element={<Blank title={"Gantt Chart"} />} />
            <Route path="/notes" element={<Blank title={"Notes"} />} />
            <Route path="/events" element={<Blank title={"Events"} />} />
            <Route path="/registrations" element={<Blank title={"Registrations"} />} />
            <Route path="/calendar" element={<Blank title={"Calendar"} />} />
            <Route path="/contacts" element={<Blank title={"Contacts"} />} />
            <Route path="/scheduling-event" element={<Blank title={"Scheduling Event"} />} />
            <Route path="/event-management" element={<Blank title={"Event Management"} />} />
            <Route path="/general" element={<Blank title={"General"} />} />
            <Route path="/integration" element={<Blank title={"Integration"} />} />
            <Route path="/email" element={<Blank title={"Email"} />} />
            <Route path="/preferences" element={<Blank title={"Preferences"} />} />
            <Route path="/appearance" element={<Blank title={"Appearance"} />} />
            <Route path="/navigation" element={<Blank title={"Navigation"} />} />
            <Route path="/advanced-settings" element={<Blank title={"Advanced Settings"} />} />
            <Route path="/branding-setting" element={<Blank title={"Branding Setting"} />} />
            <Route path="/payment-processing" element={<Blank title={"Payment Processing"} />} />
            <Route path="/configures-security" element={<Blank title={"Configures Security"} />} />
            <Route path="/api-integrations" element={<Blank title={"API Integrations"} />} />
            <Route path="/about" element={<Blank title={"About"} />} />
            <Route path="/ticket" element={<Blank title={"Ticket"} />} />
            <Route path="/documentation" element={<Blank title={"Documentation"} />} />
            <Route path="/legal" element={<Blank title={"Legal"} />} />
            <Route path="/faqs" element={<Blank title={"FAQs"} />} />
            <Route path="/help" element={<Blank title={"Help"} />} />
            {/* -------------------------------------------------------------------- */}

          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
