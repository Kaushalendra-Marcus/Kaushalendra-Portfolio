import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "buildify-labs",
    title: "Buildify Labs",
    subtitle: "AI Business Intelligence",
    description:
      "Conversational analytics platform turning natural language into dynamic UI components with real-time rendering.",
    detailedDescription: [
      "Conversational analytics platform that transforms natural language queries into dynamic UI components including metric cards, charts, and comparisons.",
      "Implemented mock AI backend that returns structured JSON for real-time React component rendering.",
      "Utilized Zustand for efficient state management of sessions and query context filtering.",
      "Built responsive interface with Next.js 14+ featuring server-side rendering and optimized performance.",
      "Designed intuitive dashboard with natural language processing for business intelligence insights.",
    ],
    technologies: ["Next.js", "Tambo AI", "Zustand", "TypeScript", "Tailwind"],
    github: "https://github.com/Kaushalendra-Marcus/AI-Business-Intelligence",
    live: "https://buildifylabs.in",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "postly",
    title: "Postly",
    subtitle: "Modern Social Media Platform",
    description:
      "Full-stack social media application with authentication, posting, media uploads, and real-time interactions.",
    detailedDescription: [
      "Developed a comprehensive social media platform with user authentication, profile management, and content creation features.",
      "Implemented secure authentication using Clerk with support for multiple sign-in methods.",
      "Built real-time feed with infinite scroll, like/comment functionality, and media upload capabilities.",
      "Designed responsive UI with modern design patterns and smooth animations.",
      "Integrated MongoDB for scalable data storage with optimized queries.",
    ],
    technologies: ["Next.js", "Clerk", "MongoDB", "TypeScript", "Tailwind"],
    github: "https://github.com/Kaushalendra-Marcus/Postly",
    live: "https://postly-lake.vercel.app"
  },
  {
    id: "myattendance",
    title: "MyAttendance",
    subtitle: "Smart Attendance Management System",
    description:
      "Progressive Web App for attendance tracking used by 1300+ active users to maintain 75% attendance criteria.",
    detailedDescription: [
      "Built Progressive Web App (PWA) that works offline and provides native app-like experience.",
      "Implemented real-time attendance tracking with calendar view and detailed statistics.",
      "Developed smart prediction algorithm to help students maintain minimum attendance requirements.",
      "Designed intuitive dashboard showing attendance percentage, present/absent days, and alerts.",
      "Scaled to support 1300+ active users with consistent performance and reliability.",
    ],
    technologies: ["Next.js", "MongoDB", "PWA", "TypeScript", "Chart.js"],
    github: "https://github.com/Kaushalendra-Marcus/attendance-tracker",
    live: "https://myattendance-eta.vercel.app",
  },
  {
    id: "grs-worker",
    title: "GRS Worker Business",
    subtitle: "Worker Management System",
    description:
      "Enterprise platform for managing worker information, attendance, payroll with Twilio SMS and QR codes.",
    detailedDescription: [
      "Architected full-stack application with Next.js 15, Prisma ORM, and NextAuth for secure authentication.",
      "Integrated Twilio SMS API for automated worker notifications and communication.",
      "Implemented QR code generation for worker identification and quick check-ins.",
      "Built comprehensive admin dashboard with worker management, attendance tracking, and payroll processing.",
      "Used Zod for robust form validation reducing data entry errors by 40%.",
      "Optimized performance with Turbopack and Server Actions for instant page loads.",
    ],
    technologies: [
      "Next.js 15",
      "Prisma",
      "Twilio",
      "NextAuth",
      "PostgreSQL",
      "Zod",
    ],
    github: "https://github.com/Kaushalendra-Marcus/grsp",
    live: "https://grsworker.com",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "cosmodetect",
    title: "CosmoDetect",
    subtitle: "AI Object Detection for Space Operations",
    description:
      "Custom YOLOv11 model for space object detection with deployed inference API.",
    detailedDescription: [
      "Trained custom YOLOv11 model for detecting and classifying space objects with high accuracy.",
      "Implemented complete ML pipeline including data preprocessing, augmentation, and annotation.",
      "Built REST API using FastAPI for real-time inference with optimized response times.",
      "Deployed model on Render with automatic scaling and health monitoring.",
      "Used OpenCV for image processing and PyTorch for model training and optimization.",
    ],
    technologies: ["Python", "YOLOv11", "OpenCV", "FastAPI", "PyTorch"],
    github: "https://github.com/Kaushalendra-Marcus/SpaceSafe",
    live: "https://object-detection-project-iz9g.onrender.com/docs",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "twitter-bot",
    title: "Twitter AI Bot",
    subtitle: "AI-Powered Twitter Automation",
    description:
      "Automated Twitter bot with AI-generated content and intelligent scheduling capabilities.",
    detailedDescription: [
      "Developed autonomous Twitter bot using Twitter API v2 for automated posting and engagement.",
      "Integrated AI models for generating contextually relevant and engaging tweet content.",
      "Implemented intelligent scheduling algorithm to optimize posting times for maximum engagement.",
      "Built content moderation system to ensure brand consistency and safety.",
      "Created analytics dashboard to track bot performance and engagement metrics.",
    ],
    technologies: ["Python", "AI/ML", "Twitter API", "OpenAI", "MongoDB"],
    github: "https://github.com/Kaushalendra-Marcus/TwitterBotAI",
    live: "https://twitter-bot-ai-off.vercel.app",
  },
  {
    id: "see2say",
    title: "See2Say",
    subtitle: "AI Vision to Speech for Visually Impaired",
    description:
      "Accessibility platform converting visual content to audio narration using Computer Vision and Generative AI.",
    detailedDescription: [
      "Built accessibility-first platform to assist visually impaired users with scene understanding.",
      "Integrated Computer Vision models for object detection, scene recognition, and text extraction.",
      "Implemented text-to-speech synthesis for natural audio narration of visual content.",
      "Used Generative AI to create descriptive, contextual explanations of complex scenes.",
      "Designed intuitive interface with voice commands and haptic feedback for navigation.",
    ],
    technologies: ["CV", "AI", "Accessibility", "Python", "Next.js"],
    github: "https://github.com/Kaushalendra-Marcus/see2say",
    live: "https://see2say.vercel.app"
  },
  {
    id: "cokkie-chat",
    title: "Cokkie Chat",
    subtitle: "Real-Time Chat Application",
    description:
      "MERN stack chat application with Socket.IO for instant messaging. 150+ active users with 80+ Lighthouse score.",
    detailedDescription: [
      "Developed full-stack real-time chat application using MERN stack with WebSocket communication.",
      "Implemented Socket.IO for instant message delivery, typing indicators, and online status.",
      "Built user authentication with JWT tokens and secure password hashing.",
      "Designed responsive chat interface with message threading, emoji support, and file sharing.",
      "Optimized performance achieving 80+ Lighthouse score across all metrics.",
      "Scaled to support 150+ concurrent users with low latency and high reliability.",
    ],
    technologies: ["MERN", "Socket.IO", "Real-time", "JWT", "MongoDB"],
    github: "https://github.com/Kaushalendra-Marcus/chat-application",
    live: "https://cokkie-chat.onrender.com",
    gradient: "from-orange-600 to-red-600"
  },
];
