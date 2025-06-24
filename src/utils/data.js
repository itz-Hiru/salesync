import { BiBarChartSquare } from "react-icons/bi";
import { BsTelephoneInbound } from "react-icons/bs";
import {
  FaBoxes,
  FaMoneyCheckAlt,
  FaShippingFast,
  FaShoppingCart,
  FaSmile,
  FaUsers,
  FaUserTag,
} from "react-icons/fa";
import {
  FaBoxOpen,
  FaBuilding,
  FaClock,
  FaFileInvoiceDollar,
  FaIndustry,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import {
  MdAssessment,
  MdAssignmentTurnedIn,
  MdAttachMoney,
  MdEmojiEvents,
  MdMessage,
  MdMonitor,
  MdPeopleAlt,
  MdPhoneIphone,
  MdReceiptLong,
  MdShoppingCart,
  MdStore,
  MdTimer,
  MdTrendingUp,
} from "react-icons/md";
import ATTENDANCE from "../assets/Interfaces/attendance.jpg";
import INSPECTION from "../assets/Interfaces/inspection.jpg";
import PRODUCT_MANAGEMENT from "../assets/Interfaces/product-management.jpg";
import REPORT from "../assets/Interfaces/reports.jpg";
import STOCK from "../assets/Interfaces/stock.jpg";
import TRACKING from "../assets/Interfaces/tracking.jpg";
import ADIDAS from "../assets/Logo/adidas.png";
import COKE from "../assets/Logo/coca-cola.png";
import DIALOG from "../assets/Logo/dialog.png";
import DSI from "../assets/Logo/dsi.png";
import HIRU_TV from "../assets/Logo/hiru-tv.png";
import MOBITEL from "../assets/Logo/mobitel.png";
import TESTIMONIAL_IMAGE_01 from "../assets/Testimonials/testimonial-01.jpg";
import TESTIMONIAL_IMAGE_02 from "../assets/Testimonials/testimonial-02.jpg";
import TESTIMONIAL_IMAGE_03 from "../assets/Testimonials/testimonial-03.jpg";
import CASE01 from "../assets/Use-Cases/image-01.jpg";
import CASE02 from "../assets/Use-Cases/image-02.jpg";
import CASE03 from "../assets/Use-Cases/image-03.jpg";
import CASE04 from "../assets/Use-Cases/image-04.jpg";
import CASE05 from "../assets/Use-Cases/image-05.jpg";
import CASE06 from "../assets/Use-Cases/image-06.jpg";

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

export const USECASES = [
  {
    name: "Outlet Coverage Heat Map",
    image: CASE01,
  },
  {
    name: "BEAT/ROUTE Validation",
    image: CASE02,
  },
  {
    name: "Brand Coverage Map",
    image: CASE03,
  },
  {
    name: "Visit Coverage Heat Map",
    image: CASE04,
  },
  {
    name: "Facetime Outlet Coverage Map",
    image: CASE05,
  },
  {
    name: "Not ordered Outlet Coverage Map",
    image: CASE06,
  },
];

export const WORKFLOWS = [
  {
    icon: FaIndustry,
    title: "FMCG Industry",
    description:
      "SALESYNC streamlines supply chains, sales tracking, and distributor management for fast-moving consumer goods, ensuring efficiency and real-time analytics.",
  },
  {
    icon: FaShoppingCart,
    title: "Consumer Goods Industry",
    description:
      "Empower your sales teams with intelligent dashboards, territory mapping, and retail insights tailored to the consumer goods landscape.",
  },
  {
    icon: FaBuilding,
    title: "Building Materials Industry",
    description:
      "Manage dealer networks, monitor construction site deliveries, and track bulk orders with ease through our scalable workflow system.",
  },
];

export const INTERFACES = [
  {
    name: "Tracking",
    image: TRACKING,
  },
  {
    name: "Stock",
    image: STOCK,
  },
  {
    name: "Report",
    image: REPORT,
  },
  {
    name: "Inspection",
    image: INSPECTION,
  },
  {
    name: "Product Management",
    image: PRODUCT_MANAGEMENT,
  },
  {
    name: "Attendance",
    image: ATTENDANCE,
  },
];

export const TESTIMONIALS = [
  {
    name: "Sofia Javis",
    image: TESTIMONIAL_IMAGE_01,
    description:
      "Switching to this sales software completely transformed how my team works. From lead tracking to closing deals, everything is streamlined and intuitive. We’ve cut our manual workload in half and increased conversions by 30% in just two months!",
    facebook: "www.facebook.com/",
    twitter: "www.twitter.com/",
    linkedin: "www.linkedin.com/in/",
  },
  {
    name: "Anushka Sharma",
    image: TESTIMONIAL_IMAGE_02,
    description:
      "What I love most is how easy the dashboard is to navigate. Even my newest team members picked it up in no time. The automation features save me hours every week, and the real-time insights help us make smarter decisions faster.",
    facebook: "www.facebook.com/",
    twitter: "www.twitter.com/",
    linkedin: "www.linkedin.com/in/",
  },
  {
    name: "Natalia Vanhorf",
    image: TESTIMONIAL_IMAGE_03,
    description:
      "This software has been a total game-changer for my small business. I used to struggle with follow-ups and organizing leads, but now everything is in one place. It's like having a personal assistant for my sales pipeline!",
    facebook: "www.facebook.com/",
    twitter: "www.twitter.com/",
    linkedin: "www.linkedin.com/in/",
  },
];

export const BENEFITS = [
  {
    icon: MdAssignmentTurnedIn,
    title: "Streamlined Order Management",
    description:
      "Salesync simplifies order handling by automating order capture, tracking, and fulfillment. Say goodbye to paperwork and reduce errors, all while keeping customers and distributors in sync.",
  },
  {
    icon: FaBoxes,
    title: "Real-Time Inventory Visibility",
    description:
      "Get a live overview of inventory across all your distribution points. With automated stock updates, you’ll never oversell or run out of stock again—ensuring smoother logistics and satisfied clients.",
  },
  {
    icon: FaShippingFast,
    title: "Faster Distribution Workflows",
    description:
      "Automate routine tasks and build efficient workflows tailored for distribution. Save time, eliminate bottlenecks, and accelerate product movement from warehouse to retailer with ease.",
  },
  {
    icon: MdPeopleAlt,
    title: "Centralized Distributor Data",
    description:
      "Maintain all distributor profiles, contacts, transaction records, and analytics in one platform. With everything organized, collaboration becomes effortless and more productive.",
  },
  {
    icon: BiBarChartSquare,
    title: "Advanced Sales Reporting",
    description:
      "Visualize sales data, monitor distributor performance, and identify growth opportunities. Salesync delivers actionable insights through smart dashboards and customizable reports.",
  },
  {
    icon: MdPhoneIphone,
    title: "Mobile Access for Field Teams",
    description:
      "Enable your field sales and delivery teams to update orders, check inventory, and communicate on the go. Salesync’s mobile-optimized experience keeps your team connected and agile.",
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Automated Payment Tracking",
    description:
      "Never miss a payment again. Automatically track invoices, due dates, and payment status to ensure cash flow remains steady and reconciliations are seamless.",
  },
  {
    icon: MdMessage,
    title: "Seamless Communication Channels",
    description:
      "Keep your entire distribution network in sync with built-in messaging, alerts, and notifications. Communicate faster and make sure everyone’s always on the same page.",
  },
];

export const RATES = [
  {
    rate: 75,
    description: "Allowance TA Bill Reduction with Salesync DMS",
    icon: MdAttachMoney,
    color: "#0891B2",
  },
  {
    rate: 85,
    description:
      "Achieving Increase In Market Visit Efficlency With Salesync DMS",
    icon: MdTrendingUp,
    color: "#06B6D4",
  },
  {
    rate: 35,
    description: "Boots Retail Shop Visit Time with Salesync DMS",
    icon: MdTimer,
    color: "#22D3EE",
  },
  {
    rate: 25,
    description: "Increase in Retail Sales with Salesync DMS",
    icon: MdStore,
    color: "#67E8F9",
  },
];

export const COUNTS = [
  {
    icon: MdEmojiEvents,
    bg: "bg-violet-300/50",
    iconColor: "text-violet-500",
    number: 2650,
    label: "Live Subscriptions",
    suffix: "+",
  },
  {
    icon: FaSmile,
    bg: "bg-green-300/50",
    iconColor: "text-green-600",
    number: 45,
    label: "Active Clients",
  },
  {
    icon: FaShoppingCart,
    bg: "bg-orange-300/50",
    iconColor: "text-orange-700",
    number: 567000,
    label: "Retail Covered",
    suffix: "+",
    numberFormat: true,
  },
  {
    icon: FaBoxOpen,
    bg: "bg-cyan-300/50",
    iconColor: "text-cyan-600",
    number: 8000,
    label: "Product Items Listed",
    suffix: "+",
  },
  {
    icon: FaClock,
    bg: "bg-violet-300/50",
    iconColor: "text-violet-500",
    number: 14650000,
    label: "POS Check-Ins",
    suffix: "+",
    numberFormat: true,
  },
  {
    icon: FaFileInvoiceDollar,
    bg: "bg-green-300/50",
    iconColor: "text-green-600",
    number: 865000,
    label: "Million Invoices",
    suffix: "+",
    numberFormat: true,
  },
  {
    icon: MdReceiptLong,
    bg: "bg-orange-300/50",
    iconColor: "text-orange-700",
    number: 2750,
    label: "Crore Worth of Invoices",
    suffix: "+",
  },
];

export const FAQs = [
  {
    question: "What is a Distribution Management System (DMS)?",
    answer:
      "A DMS is a software solution that helps businesses manage and streamline their distribution processes, including inventory, orders, and logistics.",
  },
  {
    question: "How does a DMS work?",
    answer:
      "A DMS collects, tracks, and processes data across the supply chain to automate tasks like inventory control, order processing, and delivery tracking.",
  },
  {
    question: "How does a DMS contribute to supply chain optimization?",
    answer:
      "It improves visibility, reduces delays, and ensures efficient movement of goods from manufacturers to retailers or customers.",
  },
  {
    question: "What are the key components of a DMS?",
    answer:
      "Key components include inventory management, order processing, logistics tracking, reporting, and system integration.",
  },
  {
    question: "How much does a DMS cost?",
    answer:
      "Costs vary depending on features, users, and deployment type. It can range from a few hundred to several thousand dollars per month.",
  },
  {
    question: "Can a DMS integrate with other business systems?",
    answer:
      "Yes, modern DMS platforms can integrate with ERP, CRM, accounting, and other business tools to ensure data consistency.",
  },
  {
    question: "How do I maintain a DMS?",
    answer:
      "Regular updates, data backups, user training, and performance monitoring are key to maintaining a DMS.",
  },
  {
    question: "How does a DMS help in reducing costs?",
    answer:
      "By automating tasks, reducing errors, and improving supply chain efficiency, a DMS can significantly cut operational costs.",
  },
  {
    question: "Is a DMS suitable for small businesses?",
    answer:
      "Yes, many DMS solutions are scalable and affordable, making them suitable for small and medium-sized businesses.",
  },
  {
    question: "How does a DMS improve order processing?",
    answer:
      "It automates order entry, tracks status in real time, and reduces manual errors, ensuring faster and more accurate processing.",
  },
  {
    question: "How does a DMS contribute to customer satisfaction?",
    answer:
      "By ensuring timely deliveries, accurate order fulfillment, and better communication, a DMS enhances the customer experience.",
  },
  {
    question: "Can a DMS provide real-time data and reporting?",
    answer:
      "Yes, most DMS platforms offer real-time dashboards and analytics to support decision-making and performance tracking.",
  },
];

export const QUICK_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-statement",
  },
];

export const PRODUCTS = [
  { name: "Salesync DMS" },
  { name: "Salesync FMCG" },
  { name: "Salesync Cement" },
  { name: "Salesync Seed" },
];

export const OFFICE_INFORMATIONS = [
  {
    icon: FaLocationDot,
    description: "752, Dr Danister De Silva Mawatha, Colombo, 1 00900",
  },
  {
    icon: FaPhone,
    description: "+94 72 550 8919",
  },
  {
    icon: HiOutlineMail,
    description: "info@salesync.com",
  },
];
