import { Link } from "react-router-dom"

import {
    Accessibility,
    AddShoppingCart,
    AdsClick,
    Analytics,
    Assignment,
    BrandingWatermark,
    BugReport,
    Build,
    BusinessCenter,
    CalendarMonth,
    Campaign,
    Category,
    Chat,
    Comment,
    ContactSupport,
    Contacts,
    ContentPaste,
Dashboard,
    DashboardCustomize,
    Description,
    Diamond,
    Directions,
    Email,
    Engineering,
    Event,
    EventAvailable,
    Feedback,
    FlashOn,
    FlightLand,
    Gavel,
    GridView,
    Group,
    Hail,
    Info,
    Insights,
    Inventory,
    Layers,
    ListAlt,
    LiveHelp,
    LocalActivity,
    LocalOffer,
    LocalShipping,
    ManageAccounts,
Menu,
ModeComment,
MoveDown,
Navigation,
NoteAdd,
Palette,
Password,
Payment,
PermMedia,
PersonSearch,
PlaylistAddCheck,
PriceChange,
PsychologyAlt,
QueryStats,
QuestionAnswer,
Receipt,
RequestQuote,
Schedule,
Score,
Security,
SecurityUpdate,
SelfImprovement,
SettingsApplications,
ShoppingBag,
ShoppingCart,
ShoppingCartCheckout,
Source,
Speed,
Storage,
SwapHoriz,
Timeline,
Today,
TrendingUp,
Tune,
Update,
ViewColumn,
Workspaces,
} from "@mui/icons-material"

import "./sidebar.scss"
import { BarChart } from "recharts"

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
                        <Directions className="icon" />
                        <span>Navigation</span>
                    </Link>
                    <Link to="/sales">
                        <QueryStats className="icon" />
                        <span>Sales</span>
                    </Link>
                    <Link to="/traffic">
                        <AdsClick className="icon" />
                        <span>traffic</span>
                    </Link>
                    <Link to="/user-behavior ">
                        <PsychologyAlt className="icon" />
                        <span>User Behavior</span>
                    </Link>
                    <Link to="/marketing-campaigns">
                        <Campaign className="icon" />
                        <span>Marketing Campaigns</span>
                    </Link>
                    <Link to="/content-performance">
                        <ContentPaste className="icon" />
                        <span>Content Performance</span>
                    </Link>
                    <Link to="/tracks-customers">
                        <PersonSearch className="icon" />
                        <span>Tracks Customers</span>
                    </Link>
                    <Link to="/security">
                        <Security className="icon" />
                        <span>Security</span>
                    </Link>
                    <Link to="/customization">
                        <DashboardCustomize className="icon" />
                        <span>Customization</span>
                    </Link>
                    <p className="title">User Management</p>
                    <Link to="/user-accounts">
                        <Group className="icon" />
                        <span>User Accounts</span>
                    </Link>
                    <Link to="/user-permissions">
                        <ManageAccounts className="icon" />
                        <span>User Permissions</span>
                    </Link>
                    <Link to="/password-management">
                        <Password className="icon" />
                        <span>Pass Management</span>
                    </Link>
                    <Link to="/user-comments">
                        <Comment className="icon" />
                        <span>User Comments</span>
                    </Link>
                    <Link to="/user-tickets ">
                        <LiveHelp className="icon" />
                        <span>User Tickets </span>
                    </Link>
                    <Link to="/user-activity-logs">
                        <Accessibility className="icon" />
                        <span>User Activity Logs</span>
                    </Link>
                    <Link to="/user-feedback">
                        <Feedback className="icon" />
                        <span>User Feedback</span>
                    </Link>
                    <p className="title">Product Management</p>
                    <Link to="/products">
                        <ShoppingCart className="icon" />
                        <span>Products</span>
                    </Link>
                    <Link to="/product-creation">
                        <AddShoppingCart className="icon" />
                        <span>Product Creation</span>
                    </Link>
                    <Link to="/categories">
                        <Category className="icon" />
                        <span>Categories</span>
                    </Link>
                    <Link to="/brands">
                        <Diamond className="icon" />
                        <span>Brands</span>
                    </Link>
                    <Link to="/special-offers">
                        <LocalOffer className="icon" />
                        <span>Special Offers</span>
                    </Link>
                    <Link to="/orders">
                        <ShoppingBag className="icon" />
                        <span>Orders</span>
                    </Link>
                    <Link to="/shipping">
                        <LocalShipping className="icon" />
                        <span>Shipping</span>
                    </Link>
                    <Link to="/inventory-tracking">
                        <Inventory className="icon" />
                        <span>Inventory Tracking</span>
                    </Link>
                    <Link to="/taxes">
                        <PriceChange className="icon" />
                        <span>Taxes</span>
                    </Link>
                    <Link to="/reviews">
                        <Chat className="icon" />
                        <span>Reviews</span>
                    </Link>
                    <Link to="/product-performance">
                        <ShoppingCartCheckout className="icon" />
                        <span>Product Performance</span>
                    </Link>
                    <p className="title">Content Management</p>
                    <Link to="/posts">
                        <Source className="icon" />
                        <span>Posts</span>
                    </Link>
                    <Link to="/create-post">
                        <NoteAdd className="icon" />
                        <span>Create Post</span>
                    </Link>
                    <Link to="/categories">
                        <Category className="icon" />
                        <span>Categories</span>
                    </Link>
                    <Link to="/media-library">
                        <PermMedia className="icon" />
                        <span>Media Library</span>
                    </Link>
                    <Link to="/comments-moderation">
                        <ModeComment className="icon" />
                        <span>Comments</span>
                    </Link>
                    <p className="title">Analytics</p>
                    <Link to="/traffic-tracking">
                        <Analytics className="icon" />
                        <span>Traffic Tracking</span>
                    </Link>
                    <Link to="/engagement-metrics">
                        <Insights className="icon" />
                        <span>Engagement Metrics</span>
                    </Link>
                    <Link to="/conversion-rates">
                        <Score className="icon" />
                        <span>Conversion Rates</span>
                    </Link>
                    <Link to="/pages-behavior">
                        <Layers className="icon" />
                        <span>Pages Behavior</span>
                    </Link>
                    <Link to="/landing-analytics">
                        <FlightLand className="icon" />
                        <span>Landing Analytics</span>
                    </Link>
                    <Link to="/audience">
                        <SelfImprovement className="icon" />
                        <span>Audience</span>
                    </Link>
                    <Link to="/ecommerce-performance">
                        <RequestQuote className="icon" />
                        <span>Ecommerce Performance</span>
                    </Link>
                    <Link to="/events-interactions">
                        <LocalActivity className="icon" />
                        <span>Events Interactions</span>
                    </Link>
                    <Link to="/site-speed">
                        <Speed className="icon" />
                        <span>Site Speed</span>
                    </Link>
                    <Link to="/reports">
                        <BugReport className="icon" />
                        <span>Reports</span>
                    </Link>
                    <p className="title">Resource Management</p>
                    <Link to="/resource-overview">
                        <GridView className="icon" />
                        <span>Resource Overview</span>
                    </Link>
                    <Link to="/resource-allocation">
                        <Assignment className="icon" />
                        <span>Resource Allocation</span>
                    </Link>
                    <Link to="/resource-planning">
                        <CalendarMonth className="icon" />
                        <span>Resource Planning</span>
                    </Link>
                    <Link to="/resource-tracking">
                        <Update className="icon" />
                        <span>Resource Tracking</span>
                    </Link>
                    <Link to="/resource-reporting">
                        <BarChart className="icon" />
                        <span>Resource Reporting</span>
                    </Link>
                    <Link to="/resource-administration">
                        <Engineering className="icon" />
                        <span>Administration</span>
                    </Link>
                    <Link to="/employees">
                        <Hail className="icon" />
                        <span>Employees</span>
                    </Link>
                    <Link to="/performance">
                        <TrendingUp className="icon" />
                        <span>Performance</span>
                    </Link>
                    <p className="title">Task Management</p>
                    <Link to="/quick-actions">
                        <FlashOn className="icon" />
                        <span>Quick Actions</span>
                    </Link>
                    <Link to="/tasks">
                        <ListAlt className="icon" />
                        <span>Tasks</span>
                    </Link>
                    <Link to="/workspaces">
                        <Workspaces className="icon" />
                        <span>Workspaces</span>
                    </Link>
                    <Link to="/projects">
                        <BusinessCenter className="icon" />
                        <span>Projects</span>
                    </Link>
                    <Link to="/kanban-board">
                        <ViewColumn className="icon" />
                        <span>Kanban Board</span>
                    </Link>
                    <Link to="/gantt-chart">
                        <Timeline className="icon" />
                        <span>Gantt Chart</span>
                    </Link>
                    <p className="title">Event Management</p>
                    <Link to="/events">
                        <Event className="icon" />
                        <span>Events</span>
                    </Link>
                    <Link to="/registrations">
                        <PlaylistAddCheck className="icon" />
                        <span>Registrations</span>
                    </Link>
                    <Link to="/calendar">
                        <Today className="icon" />
                        <span>Calendar</span>
                    </Link>
                    <Link to="/contacts">
                        <Contacts className="icon" />
                        <span>Contacts</span>
                    </Link>
                    <Link to="/scheduling-event">
                        <Schedule className="icon" />
                        <span>Scheduling Event</span>
                    </Link>
                    <Link to="/event-Management">
                        <EventAvailable className="icon" />
                        <span>Event Management</span>
                    </Link>
                    <p className="title">Settings</p>
                    <Link to="/general">
                        <SettingsApplications className="icon" />
                        <span>General</span>
                    </Link>
                    <Link to="/integration">
                        <SwapHoriz className="icon" />
                        <span>Integration</span>
                    </Link>
                    <Link to="/email">
                        <Email className="icon" />
                        <span>Email</span>
                    </Link>
                    <Link to="/preferences">
                        <Tune className="icon" />
                        <span>Preferences</span>
                    </Link>
                    <Link to="/appearance">
                        <Palette className="icon" />
                        <span>Appearance</span>
                    </Link>
                    <Link to="/navigation">
                        <Navigation className="icon" />
                        <span>Navigation</span>
                    </Link>
                    <Link to="/advanced-settings">
                        <Build className="icon" />
                        <span>Advanced Settings</span>
                    </Link>
                    <Link to="/branding-setting">
                        <BrandingWatermark className="icon" />
                        <span>Branding Setting</span>
                    </Link>
                    <Link to="/payment-processing">
                        <Payment className="icon" />
                        <span>Payment Processing</span>
                    </Link>
                    <Link to="/configures-security">
                        <SecurityUpdate className="icon" />
                        <span>Configures Security</span>
                    </Link>
                    <Link to="/api-integrations">
                        <Storage className="icon" />
                        <span>API Integrations</span>
                    </Link>
                    
                    <p className="title">Support</p>
                    <Link to="/about">
                        <Info className="icon" />
                        <span>About</span>
                    </Link>
                    <Link to="/ticket">
                        <Receipt className="icon" />
                        <span>Ticket</span>
                    </Link>
                    <Link to="/documentation">
                        <Description className="icon" />
                        <span>Documentation</span>
                    </Link>
                    <Link to="/legal">
                        <Gavel className="icon" />
                        <span>Legal</span>
                    </Link>
                    <Link to="/faqs">
                        <QuestionAnswer className="icon" />
                        <span>FAQs</span>
                    </Link>
                    <Link to="/help">
                        <ContactSupport className="icon" />
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