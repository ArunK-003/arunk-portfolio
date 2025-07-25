export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  videoUrl?: string;
  githubUrl: string;
  tools: string[];
  category: string;
  slug: string;
  projectStartDate: Date;
  projectStatus: string;
  liveDemoUrl?: string;
  keyFeatures?: string[];
  galleryImages?: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company?: string;
  avatarUrl?: string;
}

export const projectsData: Project[] = [
  {
  id: "1",
  title: "Fund Raising Website UI",
  slug: "charity-fundraising-ui",
  shortDescription: "A complete UI/UX design for a donation platform with clean and intuitive layouts.",
  description: "Designed a responsive charity platform on Figma with donation flows, user onboarding, and an admin dashboard. Emphasized usability, trust-building visuals, and smooth user journeys.",
  imageUrl: "/images/projects/charity-fundraising-home.png",  // ✅ use lowercase with hyphens
  githubUrl: "https://github.com/ArunK-003/figma-prototype",
  tools: ["Figma", "UI/UX", "Design System"],
  category: "UI/UX",
  projectStartDate: new Date("2025-05-01"),
  projectStatus: "Completed",
  liveDemoUrl: "https://figma-fundraising-prototype-mu.vercel.app/",
  keyFeatures: [
    "Donation journey UI with CTAs",
    "Admin dashboard mockups",
    "Fully responsive layout",
    "High fidelity interactive prototype"],
  galleryImages: ["/images/projects/SM-campaign.png"]
},

  {
    id: "2",
    title: "Kolli Hills E-commerce UI Design",
    slug: "kolli-hills-ecommerce-ui",
    shortDescription: "A Figma-based e-commerce UI designed to directly connect Kolli Hills farmers with consumers.",
    description: "Crafted a user-centered e-commerce interface on Figma to empower Kolli Hills farmers by eliminating intermediaries. The design focuses on intuitive product browsing, simplified purchasing, and an ethical brand identity. Includes customer flows, farmer onboarding, and admin features.",
    imageUrl: "/images/projects/Desktop-Login.png",
    githubUrl: "https://github.com/ArunK-003/kolli-hills-embed-figma",
    tools: [ "Figma", "UI/UX Design", "Prototyping" ],
    category: "UI/UX",
    projectStartDate: new Date("2025-01-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://kolli-hills-embed-figma.vercel.app/",
    keyFeatures: [ "Farmer-to-customer product flow UI",
    "Responsive mobile and desktop layouts",
    "Clean, ethical branding",
    "Admin dashboard and product management"],
    galleryImages: [ "/images/projects/kolli-hills-land.png" ]
  },
  {
    id: "3",
    title: "Ice Cream Shop Management",
    slug: "ice-cream-shop-management",
    shortDescription: "A frontend UI for managing an ice cream shop with authentication and user-friendly layout.",
    description: "Developed a responsive frontend website to manage an ice cream shop using TypeScript and JavaScript. Included features such as user authentication, product listing, and order interaction. The design is clean, intuitive, and optimized for various devices.",
    imageUrl: "/images/projects/ice-creamshop-land.png",
    githubUrl: "https://github.com/ArunK-003/Ice-cream-shop-webpage",
    tools: [ "TypeScript", "JavaScript", "HTML", "CSS" ],
    category: "Web",
    projectStartDate: new Date("2024-06-09"),
    projectStatus: "Completed",
    liveDemoUrl: "https://ice-cream-shop-webpage.vercel.app/",
    keyFeatures: [ "Responsive and interactive UI", "Client-side data fetching and caching", "Integration with a Node.js backend", "Seamless chatbot widget integration" ],
    galleryImages: [ "/images/projects/ice-cream-shop-dash.png" ]
  },
  {
    id: "4",
    title: "VibeShare - Music Sharing Web App",
    slug: "vibeshare-music-sharing-app",
    shortDescription: "A collaborative music-sharing app where users upload and enjoy songs together in real-time rooms.",
    description: "VibeShare is a full-stack music-sharing application where users can create or join rooms, upload their favorite songs, and enjoy music together in a round-robin playlist. Built using React, Supabase, and Tailwind CSS, it offers smooth authentication, responsive UI, and admin controls for managing room dynamics. This app is designed for collaborative listening, making music more social and immersive.",
    imageUrl: "/images/vibeshare-land.png",
    githubUrl: "https://github.com/ArunK-003/VibeShare",
    tools: [ "React", "Supabase", "Tailwind CSS", "Vercel", "React Router" ],
    category: "Full Stack",
    projectStartDate: new Date("2025-07-18"),
    projectStatus: "Completed",
    liveDemoUrl: "https://vibe-share-music.vercel.app/",
    keyFeatures: [ "Create & join music rooms with custom names",
    "Secured Authentication",
    "User-based song uploading from local device",
    "Round-robin playback rotation for fairness",
    "Admin controls: set song limit, delete any song",
    "Responsive UI built with Tailwind and React Router",
    "Realtime data handling using Supabase" ],
    galleryImages: [ "/images/vibeshare-dash.png" ]
  },
  /*{
    id: "5",
    title: "Bookstore Chatbot",
    slug: "bookstore-chatbot",
    shortDescription: "A Python-based chatbot to assist users with book searches.",
    description: "This component of the bookstore project involved creating a chatbot from the ground up. The bot is designed to understand natural language queries, search the bookstore's database for relevant books, and provide helpful recommendations to users. This was my first foray into applying NLP techniques in a practical application.",
    imageUrl: "/images/projects/bookstore-project-chatbot.png",
    githubUrl: "https://github.com/dhlananhh/bookstore_chatbot",
    tools: [ "Python", "Flask", "NLP", "JavaScript", "MariaDB" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Natural Language Processing (NLP) for query understanding", "Direct database querying for real-time results", "Simple web interface for interaction", "Designed for easy integration into the frontend" ],
    galleryImages: [ "/images/projects/bookstore-project-chatbot.png" ]
  },
  {
    id: "7",
    title: "ChatHub-Web",
    slug: "chathub-web",
    shortDescription: "A real-time, web-based chat application for instant communication and collaboration.",
    description: "This project demonstrates the ability to build a real-time chat platform using modern web technologies. The focus was on creating a responsive and engaging user experience with features like live messaging, user presence indicators, and a clean interface, proving skills in handling real-time, bi-directional communication on the web.",
    imageUrl: "/images/projects/chathub-web.png",
    githubUrl: "https://github.com/dhlananhh/ChatHub-Web",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-09-15"),
    projectStatus: "Completed",
    liveDemoUrl: "https://chathub-web-liard.vercel.app/",
    keyFeatures: [ "Real-time messaging functionality", "Modern and clean user interface", "User authentication and profiles", "Responsive design for both mobile and desktop" ],
    galleryImages: [ "/images/projects/chathub-web.png" ]
  },
  {
    id: "8",
    title: "ForeverBuy Ecommerce Website",
    slug: "foreverbuy-ecommerce-website",
    shortDescription: "A stylish and modern e-commerce storefront with a focus on seamless user experience.",
    description: "ForeverBuy is another take on a modern e-commerce platform, focusing on a minimalistic and clean UI/UX design. This project showcases the ability to build a visually appealing and highly performant online store, with smooth animations, fast page loads, and a checkout process designed to maximize conversion.",
    imageUrl: "/images/projects/foreverbuy-ecommerce.png",
    githubUrl: "https://github.com/dhlananhh/ForeverBuy-Ecommerce",
    tools: [ "Next.js", "TailwindCSS", "TypeScript" ],
    category: "Web",
    projectStartDate: new Date("2024-07-20"),
    projectStatus: "Completed",
    liveDemoUrl: "https://forever-frontend-hazel.vercel.app/",
    keyFeatures: [ "Minimalistic and clean UI/UX design", "Fast page loads optimized with Next.js", "Smooth page animations and transitions", "A streamlined, multi-step checkout flow" ],
    galleryImages: [ "/images/projects/foreverbuy-ecommerce.png" ]
  },
  {
    id: "9",
    title: "Chat with PDF",
    slug: "chat-with-pdf",
    shortDescription: "An AI-powered application to interactively chat with your PDF documents.",
    description: "This project provides a web interface for a powerful RAG (Retrieval-Augmented Generation) system. Users can upload a PDF document, and the application processes it to allow for natural language conversations about its content. It's a practical demonstration of combining modern frontend development with advanced AI capabilities to create a useful tool.",
    imageUrl: "/images/projects/chat-with-pdf.png",
    githubUrl: "https://github.com/dhlananhh/chat-with-pdf",
    tools: [ "Next.js", "TailwindCSS", "TypeScript", "Vercel AI SDK" ],
    category: "AI",
    projectStartDate: new Date("2024-10-05"),
    projectStatus: "Completed",
    liveDemoUrl: "https://chat-with-pdf-seven-omega.vercel.app/",
    keyFeatures: [ "PDF upload and processing functionality", "Interactive chat interface for Q&A", "Streaming responses for a real-time feel", "Integration with backend AI services" ],
    galleryImages: [ "/images/projects/chat-with-pdf.png" ]
  },
  {
    id: "10",
    title: "RAG System with Gemini & MongoDB",
    slug: "rag-system-with-gemini-and-mongodb-atlas",
    shortDescription: "A Q&A system powered by Google's Gemini and a MongoDB vector database.",
    description: "This project explores the Retrieval-Augmented Generation (RAG) architecture. It uses Google's generative AI to understand user questions and retrieves relevant information from a knowledge base stored as vector embeddings in MongoDB Atlas. The goal was to build a system that provides accurate answers based on a specific set of documents.",
    imageUrl: "/images/projects/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_MongoDB",
    tools: [ "Python", "Google Generative AI", "MongoDB Atlas", "PyPDF" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "PDF document processing and text chunking", "Text embedding using the Gemini API", "Vector storage and search with MongoDB Atlas", "Generative question-answering based on retrieved context" ],
    galleryImages: [ "/images/projects/rag_system.png" ]
  },
  {
    id: "11",
    title: "RAG System with Gemini & ChromaDB",
    slug: "rag-system-with-gemini-and-chromadb",
    shortDescription: "An alternative RAG implementation using Gemini and the local vector store ChromaDB.",
    description: "Building on the previous RAG project, this version explores a different technology stack, replacing the cloud-based MongoDB Atlas with ChromaDB, a popular open-source vector database that can run locally. This demonstrates adaptability and understanding of different tools within the AI ecosystem.",
    imageUrl: "/images/projects/rag_system.png",
    githubUrl: "https://github.com/dhlananhh/Build_RAG_System_with_Gemini_and_ChromaDB",
    tools: [ "Python", "Google Generative AI", "ChromaDB", "LangChain" ],
    category: "AI",
    projectStartDate: new Date("2025-01-11"),
    projectStatus: "Completed",
    keyFeatures: [ "Uses LangChain for streamlined workflow", "Leverages the lightweight Gemini Flash model", "Operates with a local-first vector database (ChromaDB)", "Designed for rapid prototyping and offline use" ],
    galleryImages: [ "/images/projects/rag_system.png" ]
  },
  {
    id: "12",
    title: "Educational Mobile App",
    slug: "educational-app",
    shortDescription: "A cross-platform mobile application for interactive learning.",
    description: "This personal project aimed to explore mobile development using React Native. The concept is an educational app that provides users with interactive quizzes and lessons. It focuses on creating a smooth, native-like user experience on both iOS and Android from a single codebase.",
    imageUrl: "/images/projects/educational-app-project.png",
    githubUrl: "https://github.com/dhlananhh/Educational-App",
    tools: [ "React Native", "TypeScript", "Expo" ],
    category: "Mobile",
    projectStartDate: new Date("2024-11-01"),
    projectStatus: "Completed",
    keyFeatures: [ "Cross-platform compatibility (iOS & Android)", "Interactive quiz and lesson components", "State management for user progress", "Built using the Expo managed workflow for faster development" ],
    galleryImages: [ "/images/projects/educational-app-project.png" ]
  },*/
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote: "Designed posters, flyers, and digital creatives for various college events, guest lectures, and cultural functions for past 3 Years. Delivered visually appealing and brand-consistent materials across all departments.",
    author: "K. S. Rangasamy College of Technology",
    company: "Poster & Flyer Designer",
    avatarUrl: "/images/avatars/jane-doe.png",
  },
  {
    id: "2",
    quote: "Handled the complete UI/UX design of an E-learning platform for Zidio Developemnt from scratch. Worked on competitive analysis, user persona creation, wireframing, low & high fidelity designs, and interactive prototyping using Figma.",
    author: "Zidio Development",
    company: "UI UX Designer Intern(3 mon)",
    avatarUrl: "/images/avatars/john-smith.png",
  },
  {
    id: "3",
    quote: "Collaborated on the SaaS-based Track Pilots application — an Employee Monitoring product. Contributed to UI design for multiple pages, created high-quality mockups, and developed visual assets to support the product’s design system.",
    author: "Quick App Studio",
    company: "UI UX Designer Intern(1 mon) ",
    avatarUrl: "/images/avatars/michael-chen.png",
  },
  {
    id: "4",
    quote: "Managed and maintained official social media pages of the Institution's Innovation Council (IIC-KSRCT). Designed and published event flyers, announcements, and post-event updates to ensure timely communication and audience engagement.",
    author: "K. S. Rangasamy College of Technology",
    company: "Admin of iic-ksrct",
    avatarUrl: "/images/avatars/sophia-rodriguez.png",
  },
 /* {
    id: "5",
    quote: "Pair-programming with Lan Anh was always a learning experience. She's a quick problem-solver and is always open to discussing new approaches. Her proficiency in React and Next.js is top-notch.",
    author: "David Lee",
    company: "UI",
    avatarUrl: "/images/avatars/david-lee.png",
  },
  {
    id: "6",
    quote: "Lan Anh consistently delivered high-quality, clean code that was easy to review and maintain. Her attention to detail and proactive approach made a significant impact on our product's stability.",
    author: "Emily White",
    company: "Tech Lead, QuantumLeap Software",
    avatarUrl: "/images/avatars/emily-white.png",
  }*/
];
