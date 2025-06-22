import { BsTelephoneInbound } from "react-icons/bs";
import { FaUsers, FaUserTag } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { MdAssessment, MdMonitor, MdShoppingCart } from "react-icons/md";
import ADIDAS from "../assets/Logo/adidas.png";
import COKE from "../assets/Logo/coca-cola.png";
import DIALOG from "../assets/Logo/dialog.png";
import DSI from "../assets/Logo/dsi.png";
import HIRU_TV from "../assets/Logo/hiru-tv.png";
import MOBITEL from "../assets/Logo/mobitel.png";

export const NAVLINKS = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Use Cases",
    path: "#usecases",
  },
  {
    name: "Pricing",
    path: "#pricing",
  },
  {
    name: "Success Stories",
    path: "#stories",
  },
  {
    name: "Blogs",
    path: "#blogs",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

export const CHART_DATA = [
  { value: 100 },
  { value: 500 },
  { value: 600 },
  { value: 700 },
  { value: 1000 },
];

export const LOGO_ICONS = [
  { name: "", logo: ADIDAS },
  { name: "", logo: DSI },
  { name: "", logo: DIALOG },
  { name: "", logo: MOBITEL },
  { name: "", logo: HIRU_TV },
  { name: "", logo: COKE },
  { name: "", logo: ADIDAS },
  { name: "", logo: DSI },
  { name: "", logo: DIALOG },
  { name: "", logo: MOBITEL },
  { name: "", logo: HIRU_TV },
  { name: "", logo: COKE },
  { name: "", logo: ADIDAS },
  { name: "", logo: DSI },
  { name: "", logo: DIALOG },
  { name: "", logo: MOBITEL },
  { name: "", logo: HIRU_TV },
  { name: "", logo: COKE },
  { name: "", logo: ADIDAS },
  { name: "", logo: DSI },
  { name: "", logo: DIALOG },
  { name: "", logo: MOBITEL },
  { name: "", logo: HIRU_TV },
  { name: "", logo: COKE },
];

export const steps = [
  {
    step: "01",
    color: "#06B6D4",
    icon: IoBulbOutline,
    title: "Discovery & Lead Capture",
    description:
      "Identify potential customers and capture qualified leads efficiently through intelligent forms, campaigns, and tracking tools.",
  },
  {
    step: "02",
    color: "#0E7490",
    icon: IoMdTime,
    title: "Follow-Up & Scheduling",
    description:
      "Automate follow-ups and schedule meetings with leads using smart reminders and calendar integrations to improve engagement.",
  },
  {
    step: "03",
    color: "#155E75",
    icon: IoSettingsOutline,
    title: "Sales Workflow Automation",
    description:
      "Streamline and customize your sales pipeline with automated tasks, deal tracking, and configurable approval flows.",
  },
  {
    step: "04",
    color: "#164E63",
    icon: LuChartNoAxesCombined,
    title: "Reporting & Analytics",
    description:
      "Gain actionable insights with real-time dashboards, sales performance analytics, and forecasting tools to drive decisions.",
  },
];

export const FEATURES = [
  {
    icon: MdMonitor,
    title: "Market Monitoring",
    description:
      "Track real-time market activity, competitor pricing, and field performance. Helps sales teams adapt quickly to market changes and make informed decisions.",
    fullDescription: `
Stay ahead of the competition with our comprehensive market monitoring tools:
- Real-time order booking by field salesmen
- Live competitor pricing updates
- Sales trends and territory performance dashboards
- Automated alerts for low-performing areas
- Geo-location tracking for on-field staff
Use this data to quickly adapt strategies and make informed decisions.`,
  },
  {
    icon: BsTelephoneInbound,
    title: "In-app Telephone Service",
    description:
      "Connect with customers directly from the app using VoIP. Keep track of call history and maintain consistent communication with clients.",
    fullDescription: `
Improve client engagement with built-in call functionality:
- VoIP integration for cost-effective calls
- One-click dialing from customer profiles
- Call logging and history tracking
- Scheduled follow-up calls and reminders
- Secure, encrypted communication
This ensures quicker response times and improves client relationships.`,
  },
  {
    icon: FaUsers,
    title: "Field Force Acquisition",
    description:
      "Manage recruitment, scheduling, and performance tracking for your field team. Ensure maximum productivity with geo-tagged reporting and visit logs.",
    fullDescription: `
Optimize your sales force management:
- Simplified recruitment and onboarding
- Territory mapping and visit scheduling
- Geo-tagged check-ins and check-outs
- Daily visit logs with task tracking
- Performance dashboards for individuals and teams
Empower your field force to operate more efficiently and transparently.`,
  },
  {
    icon: MdShoppingCart,
    title: "Market Basket Analysis",
    description:
      "Discover product relationships and improve upselling by analyzing items frequently bought together. Perfect for bundling and personalized promotions.",
    fullDescription: `
Boost sales with intelligent product bundling:
- Analyze frequently co-purchased items
- Recommend upsells/cross-sells automatically
- Improve shelf placement using buying patterns
- Forecast product combinations for promotions
- Data-driven pricing and bundling strategies
Turn insights into revenue by leveraging buying behavior.`,
  },
  {
    icon: FaUserTag,
    title: "Customer Segmentation Analysis",
    description:
      "Segment customers by behavior and demographics for targeted campaigns. Identify high-value groups and tailor communication effectively.",
    fullDescription: `
Personalize your approach using advanced segmentation:
- Divide customers based on RFM (Recency, Frequency, Monetary)
- Behavioral and demographic segmentation
- Cluster analysis using ML techniques
- Targeted campaigns based on customer lifetime value
- Retention strategies for high-value segments
Reach the right customer with the right message at the right time.`,
  },
  {
    icon: MdAssessment,
    title: "Identifying Sales Generating KPI's",
    description:
      "Track and analyze key sales metrics like conversion rate and order value. Use insights to drive strategy and improve team performance.",
    fullDescription: `
Uncover high-impact sales drivers:
- Track KPIs like conversion rate, average order value, and deal size
- Visualize sales trends across time, region, and reps
- Identify bottlenecks and low-performing stages in the funnel
- Benchmark individual/team performance
- Use KPI-based incentives to boost motivation
Make data-backed decisions to maximize sales effectiveness.`,
  },
];
