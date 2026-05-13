import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: "ZCConnect",
    desc: "A virtual compass system guide for tourists in Zamboanga City, powered by an AI chatbot to help visitors explore local landmarks and destinations.",
    longDesc: "ZCConnect is a web-based virtual compass system designed to guide tourists exploring Zamboanga City. It features an AI-powered chatbot (ZconnectAgent) built with Kommunicate.io that answers visitor questions about local landmarks, universities, and points of interest. The platform helps both seasoned travelers and first-time visitors discover the beauty of Zamboanga City with ease.",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    color: "from-pink to-purple",
    github: "#",
    demo: "#",
    image: "/zcconnect.jpg",
  },
  {
    title: "PATm",
    desc: "Perocho Task Management System — a comprehensive task and accounting management solution for the Perocho Abubalas Accounting Office.",
    longDesc: "PATm (Perocho Task Management System) is a full-featured task management and accounting system developed for the Perocho Abualas Accounting Office. It provides role-based access control with Admin and staff roles, secure email-based authentication, and a clean dashboard for managing tasks, assignments, and office workflows efficiently.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    color: "from-[#5CE1E6] to-purple",
    github: "#",
    demo: "#",
    image: "/patm.jpg",
  },
];
