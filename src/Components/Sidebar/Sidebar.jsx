import { Link } from "react-router-dom"
import {
Dashboard,
Menu,
} from "@mui/icons-material"

import "./sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Dashboard />
                <span className="logo">Fusion Pro</span>
            </div>
            <div className="center">
                <ul>
                    <p className="title">Dashboard Overview</p>
                    <Link to="/">
                        <Menu className="icon" />
                        <span>Overview</span>
                    </Link>
                    <Link to="/navigation">
                        <Menu className="icon" />
                        <span>Navigation</span>
                    </Link>
                    <Link to="/sales">
                        <Menu className="icon" />
                        <span>Sales</span>
                    </Link>
                    <Link to="/traffic">
                        <Menu className="icon" />
                        <span>traffic</span>
                    </Link>
                    <Link to="/user-behavior ">
                        <Menu className="icon" />
                        <span>User Behavior</span>
                    </Link>
                    <Link to="/marketing-campaigns">
                        <Menu className="icon" />
                        <span>Marketing Campaigns</span>
                    </Link>
                    <Link to="/content-performance">
                        <Menu className="icon" />
                        <span>Content Performance</span>
                    </Link>
                    <Link to="/tracks-customers">
                        <Menu className="icon" />
                        <span>Tracks Customers</span>
                    </Link>
                    <Link to="/security">
                        <Menu className="icon" />
                        <span>Security</span>
                    </Link>
                    <Link to="/customization">
                        <Menu className="icon" />
                        <span>Customization</span>
                    </Link>
                    <p className="title">User Management</p>
                    <Link to="/user-accounts">
                        <Menu className="icon" />
                        <span>User Accounts</span>
                    </Link>
                    <Link to="/user-permissions">
                        <Menu className="icon" />
                        <span>User Permissions</span>
                    </Link>
                    <Link to="/password-management">
                        <Menu className="icon" />
                        <span>Pass Management</span>
                    </Link>
                    <Link to="/user-comments">
                        <Menu className="icon" />
                        <span>User Comments</span>
                    </Link>
                    <Link to="/user-tickets ">
                        <Menu className="icon" />
                        <span>User Tickets </span>
                    </Link>
                    <Link to="/user-activity-logs">
                        <Menu className="icon" />
                        <span>User Activity Logs</span>
                    </Link>
                    <Link to="/user-feedback">
                        <Menu className="icon" />
                        <span>User Feedback</span>
                    </Link>
                    <p className="title">Product Management</p>
                    <Link to="/products">
                        <Menu className="icon" />
                        <span>Products</span>
                    </Link>
                    <Link to="/product-creation">
                        <Menu className="icon" />
                        <span>Product Creation</span>
                    </Link>
                    <Link to="/categories">
                        <Menu className="icon" />
                        <span>Categories</span>
                    </Link>
                    <Link to="/brands">
                        <Menu className="icon" />
                        <span>Brands</span>
                    </Link>
                    <Link to="/special-offers">
                        <Menu className="icon" />
                        <span>Special Offers</span>
                    </Link>
                    <Link to="/orders">
                        <Menu className="icon" />
                        <span>Orders</span>
                    </Link>
                    <Link to="/shipping">
                        <Menu className="icon" />
                        <span>Shipping</span>
                    </Link>
                    <Link to="/inventory-tracking">
                        <Menu className="icon" />
                        <span>Inventory Tracking</span>
                    </Link>
                    <Link to="/taxes">
                        <Menu className="icon" />
                        <span>Taxes</span>
                    </Link>
                    <Link to="/reviews">
                        <Menu className="icon" />
                        <span>Reviews</span>
                    </Link>
                    <Link to="/product-performance">
                        <Menu className="icon" />
                        <span>Product Performance</span>
                    </Link>
                    <p className="title">Content Management</p>
                    <Link to="/posts">
                        <Menu className="icon" />
                        <span>Posts</span>
                    </Link>
                    <Link to="/create-post">
                        <Menu className="icon" />
                        <span>Create Post</span>
                    </Link>
                    <Link to="/categories">
                        <Menu className="icon" />
                        <span>Categories</span>
                    </Link>
                    <Link to="/media-library">
                        <Menu className="icon" />
                        <span>Media Library</span>
                    </Link>
                    <Link to="/comments-moderation">
                        <Menu className="icon" />
                        <span>Comments</span>
                    </Link>
                    <p className="title">Analytics</p>
                    <Link to="/Traffic Tracking">
                        <Menu className="icon" />
                        <span>Traffic Tracking</span>
                    </Link>
                    <Link to="/Engagement Metrics">
                        <Menu className="icon" />
                        <span>Engagement Metrics</span>
                    </Link>
                    <Link to="/Conversion Rates">
                        <Menu className="icon" />
                        <span>Conversion Rates</span>
                    </Link>
                    <Link to="/Pages Behavior">
                        <Menu className="icon" />
                        <span>Pages Behavior</span>
                    </Link>
                    <Link to="/Landing Analytics">
                        <Menu className="icon" />
                        <span>Landing Analytics</span>
                    </Link>
                    <Link to="/Audience">
                        <Menu className="icon" />
                        <span>Audience</span>
                    </Link>
                    <Link to="/Ecommerce Performance">
                        <Menu className="icon" />
                        <span>Ecommerce Performance</span>
                    </Link>
                    <Link to="/Events Interactions">
                        <Menu className="icon" />
                        <span>Events Interactions</span>
                    </Link>
                    <Link to="/Site Speed">
                        <Menu className="icon" />
                        <span>Site Speed</span>
                    </Link>
                    <Link to="/Reports">
                        <Menu className="icon" />
                        <span>Reports</span>
                    </Link>
                    <p className="title">Resource Management</p>
                    <Link to="/resource-overview">
                        <Menu className="icon" />
                        <span>Resource Overview</span>
                    </Link>
                    <Link to="/resource-allocation">
                        <Menu className="icon" />
                        <span>Resource Allocation</span>
                    </Link>
                    <Link to="/resource-planning">
                        <Menu className="icon" />
                        <span>Resource Planning</span>
                    </Link>
                    <Link to="/resource-tracking">
                        <Menu className="icon" />
                        <span>Resource Tracking</span>
                    </Link>
                    <Link to="/resource-reporting">
                        <Menu className="icon" />
                        <span>Resource Reporting</span>
                    </Link>
                    <Link to="/resource-administration">
                        <Menu className="icon" />
                        <span>Administration</span>
                    </Link>
                    <Link to="/employees">
                        <Menu className="icon" />
                        <span>Employees</span>
                    </Link>
                    <Link to="/performance">
                        <Menu className="icon" />
                        <span>Performance</span>
                    </Link>
                    <p className="title">Task Management</p>
                    <Link to="/quick-actions">
                        <Menu className="icon" />
                        <span>Quick Actions</span>
                    </Link>
                    <Link to="/tasks">
                        <Menu className="icon" />
                        <span>Tasks</span>
                    </Link>
                    <Link to="/workspaces">
                        <Menu className="icon" />
                        <span>Workspaces</span>
                    </Link>
                    <Link to="/projects">
                        <Menu className="icon" />
                        <span>Projects</span>
                    </Link>
                    <Link to="/kanban-board">
                        <Menu className="icon" />
                        <span>Kanban Board</span>
                    </Link>
                    <Link to="/gantt-chart">
                        <Menu className="icon" />
                        <span>Gantt Chart</span>
                    </Link>
                    <p className="title">Event Management</p>
                    <Link to="/events">
                        <Menu className="icon" />
                        <span>Events</span>
                    </Link>
                    <Link to="/registrations">
                        <Menu className="icon" />
                        <span>Registrations</span>
                    </Link>
                    <Link to="/calendar">
                        <Menu className="icon" />
                        <span>Calendar</span>
                    </Link>
                    <Link to="/contacts">
                        <Menu className="icon" />
                        <span>Contacts</span>
                    </Link>
                    <Link to="/scheduling-event">
                        <Menu className="icon" />
                        <span>Scheduling Event</span>
                    </Link>
                    <Link to="/event-Management">
                        <Menu className="icon" />
                        <span>Event Management</span>
                    </Link>
                    <p className="title">Settings</p>
                    <Link to="/general">
                        <Menu className="icon" />
                        <span>General</span>
                    </Link>
                    <Link to="/integration">
                        <Menu className="icon" />
                        <span>Integration</span>
                    </Link>
                    <Link to="/email">
                        <Menu className="icon" />
                        <span>Email</span>
                    </Link>
                    <Link to="/preferences">
                        <Menu className="icon" />
                        <span>Preferences</span>
                    </Link>
                    <Link to="/appearance">
                        <Menu className="icon" />
                        <span>Appearance</span>
                    </Link>
                    <Link to="/navigation">
                        <Menu className="icon" />
                        <span>Navigation</span>
                    </Link>
                    <Link to="/advanced-settings">
                        <Menu className="icon" />
                        <span>Advanced Settings</span>
                    </Link>
                    <Link to="/branding-setting">
                        <Menu className="icon" />
                        <span>Branding Setting</span>
                    </Link>
                    <Link to="/payment-processing">
                        <Menu className="icon" />
                        <span>Payment Processing</span>
                    </Link>
                    <Link to="/configures-security">
                        <Menu className="icon" />
                        <span>Configures Security</span>
                    </Link>
                    <Link to="/api-integrations">
                        <Menu className="icon" />
                        <span>API Integrations</span>
                    </Link>
                    <p className="title">Support</p>
                    <Link to="/about">
                        <Menu className="icon" />
                        <span>About</span>
                    </Link>
                    <Link to="/ticket">
                        <Menu className="icon" />
                        <span>Ticket</span>
                    </Link>
                    <Link to="/documentation">
                        <Menu className="icon" />
                        <span>Documentation</span>
                    </Link>
                    <Link to="/legal">
                        <Menu className="icon" />
                        <span>Legal</span>
                    </Link>
                    <Link to="/faqs">
                        <Menu className="icon" />
                        <span>FAQs</span>
                    </Link>
                    <Link to="/help">
                        <Menu className="icon" />
                        <span>Help</span>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <span className="copy-right">Fusion Dashboard Pro v1.0</span>
            </div>
        </div>
    )
}

export default Sidebar