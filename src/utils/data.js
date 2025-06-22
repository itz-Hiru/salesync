import { IoBulbOutline, IoSettingsOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { LuChartNoAxesCombined } from "react-icons/lu";
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
