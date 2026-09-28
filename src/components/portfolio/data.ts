export const PROFILE = {
  name: "Vishal Harichandra Thakur",
  headline: "Software Developer | Full-Stack Developer | AI & Data Enthusiast",
  intro:
    "An aspiring software developer and MCA student passionate about transforming ideas into practical, user-focused digital solutions using modern web technologies, AI, machine learning, and data-driven approaches.",
  email: "mr.vishu2222@gmail.com",
  phone: "7821838661",
  location: "Dhule, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/vishal-thakur-4b2a27340/",
  github: "https://github.com/vishalt2222",
};

export const ROLES = [
  "Software Developer",
  "Full-Stack Developer",
  "AI Enthusiast",
  "Data Science Enthusiast",
  "MCA Student",
];

export const TECH_HIGHLIGHTS = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "AI",
  "Machine Learning",
  "OCR",
];

export const BELIEFS = [
  "Learn by Building",
  "Solve Real Problems",
  "Continuous Learning",
  "Clean & Scalable Development",
  "User-Focused Solutions",
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "SSVPS College, Dhule",
    place: "Dhule, Maharashtra",
    period: "Expected 2027",
    current: true,
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Jai Hind Senior College, Dhule",
    place: "Dhule, Maharashtra",
    period: "Completed",
    current: false,
  },
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning Engineer & AI Analyst",
    org: "Symbiosis University, Pune",
  },
  { title: "Master in Data Science", org: "3ri Technology, Pune" },
];

export const SKILL_GROUPS = [
  {
    title: "Programming",
    items: ["Java", "Python", "JavaScript", "C/C++"],
  },
  {
    title: "Web Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
      "MERN Stack",
      "REST APIs",
    ],
  },
  {
    title: "Data Science & AI",
    items: [
      "Machine Learning",
      "Artificial Intelligence",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Analysis",
      "Data Visualization",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Postman",
      "Tesseract OCR",
      "Google Gemini AI",
      "MVC Architecture",
    ],
  },
];

export const SERVICES = [
  {
    title: "Web Development",
    desc: "Build responsive and user-focused websites using modern web technologies.",
    icon: "Globe",
  },
  {
    title: "Frontend Development",
    desc: "Develop interactive interfaces using React.js, JavaScript, HTML, CSS, and Bootstrap.",
    icon: "Layout",
  },
  {
    title: "MERN Stack Development",
    desc: "Build full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
    icon: "Layers",
  },
  {
    title: "REST API Integration",
    desc: "Develop and integrate APIs for communication between frontend and backend systems.",
    icon: "Plug",
  },
  {
    title: "AI Integration",
    desc: "Integrate AI capabilities into applications for automation and intelligent content processing.",
    icon: "Sparkles",
  },
  {
    title: "Machine Learning Solutions",
    desc: "Develop practical machine-learning-based solutions for data-driven applications.",
    icon: "Brain",
  },
  {
    title: "Data Analysis",
    desc: "Analyze datasets to identify patterns, trends, relationships, and useful insights.",
    icon: "BarChart3",
  },
  {
    title: "Data Visualization",
    desc: "Transform data into meaningful visual representations using Python data-science technologies.",
    icon: "LineChart",
  },
  {
    title: "PDF Processing & OCR",
    desc: "Build workflows for PDF text extraction, scanned-document detection, OCR, and multi-page document processing.",
    icon: "FileText",
  },
  {
    title: "AI-Powered Content Generation",
    desc: "Integrate AI workflows for generating structured content from extracted information.",
    icon: "Wand2",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  featured?: boolean;
  role?: string;
  tech: string[];
  description: string;
  highlights: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
  challenges: string;
  learned: string;
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "news-epaper",
    title: "News E-Paper Platform",
    featured: true,
    role: "PDF Processing & OCR / AI Integration",
    tech: [
      "MERN Stack",
      "MVC",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PDF Processing",
      "OCR",
      "Google Gemini AI",
    ],
    description:
      "A web-based news e-paper management platform designed to process news PDFs, extract text and content using PDF processing and OCR, and integrate AI-powered Marathi news generation. The platform also includes e-paper edition management and content organization workflows.",
    highlights: [
      "PDF Processing",
      "OCR",
      "AI Integration",
      "Marathi News Generation",
      "MERN Stack",
      "MVC Architecture",
      "Backend APIs",
      "Content Management",
    ],
    overview:
      "Built during a software development internship at Infodad Technology Pvt. Ltd., this platform turns uploaded news PDFs into structured, manageable e-paper editions.",
    problem:
      "News PDFs arrive in mixed formats — digital and scanned — which makes extracting readable, reusable content for an online e-paper slow and manual.",
    solution:
      "A MERN + MVC application that validates and processes uploaded PDFs, detects scanned pages, runs OCR where needed, and passes extracted content into an AI workflow for Marathi news generation.",
    features: [
      "PDF upload and processing",
      "PDF validation",
      "Text extraction",
      "Scanned-PDF detection",
      "OCR integration",
      "Multi-page PDF handling",
      "Extracted-content processing",
      "AI-powered news generation workflow",
      "Marathi content generation integration",
      "Backend API integration",
      "E-paper edition and content management",
    ],
    contribution:
      "Worked on the PDF processing and OCR pipeline and the AI integration, including validation, scanned-document detection, multi-page handling, and backend API integration.",
    challenges:
      "Handling scanned versus digital PDFs reliably, processing multi-page documents, and keeping extracted text clean enough for the AI content generation step.",
    learned:
      "Practical experience with document processing pipelines, OCR tooling, AI API integration, and structuring a backend using MVC architecture.",
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    tech: [
      "Python",
      "Machine Learning",
      "Tkinter",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
    description:
      "A movie recommendation application that provides personalized movie recommendations using machine-learning techniques. The project includes a Netflix-inspired user interface, movie posters, recommendation functionality, and data visualization. The recommendation system explores techniques such as KNN and text-based similarity.",
    highlights: [
      "Machine Learning",
      "Recommendation System",
      "Data Processing",
      "Interactive UI",
      "Data Visualization",
    ],
    overview:
      "A desktop application that recommends movies from a dataset using machine-learning similarity techniques, wrapped in a Netflix-inspired interface.",
    problem:
      "Browsing a large movie dataset gives no sense of what a viewer might actually enjoy next.",
    solution:
      "A recommendation engine exploring KNN and text-based similarity, presented through a Tkinter interface with posters and visualizations of the underlying data.",
    features: [
      "Personalized movie recommendations",
      "Netflix-inspired interface with posters",
      "KNN and text-based similarity approaches",
      "Data processing with Pandas and NumPy",
      "Data visualization with Matplotlib",
    ],
    contribution:
      "Designed and built the full project: data processing, the recommendation logic, and the desktop interface.",
    challenges:
      "Cleaning and shaping the dataset for similarity comparisons, and keeping the interface responsive while computing recommendations.",
    learned:
      "How recommendation techniques behave on real data, and how to connect a machine-learning model to a usable interface.",
  },
  {
    id: "medical-insurance",
    title: "Medical Insurance Analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    description:
      "A data analysis project focused on exploring medical insurance data, identifying patterns and relationships within the dataset, and presenting meaningful insights through data analysis and visualization.",
    highlights: [
      "Data Analysis",
      "Data Cleaning",
      "Pattern Identification",
      "Visualization",
      "Python",
    ],
    overview:
      "An exploratory data analysis of a medical insurance dataset, from cleaning through to visual storytelling.",
    problem:
      "Raw insurance data hides the relationships between personal factors and cost until it is cleaned and explored.",
    solution:
      "A Python analysis workflow that cleans the dataset, explores patterns and relationships, and presents findings through charts.",
    features: [
      "Data cleaning and preparation",
      "Exploratory data analysis",
      "Pattern and relationship identification",
      "Visualization of insights",
    ],
    contribution:
      "Carried out the full analysis: preparation, exploration, and visualization.",
    challenges:
      "Deciding which relationships were meaningful rather than coincidental, and presenting them clearly.",
    learned:
      "A practical workflow for exploratory data analysis and for communicating findings visually.",
  },
];

export const JOURNEY = [
  "B.Sc. Computer Science",
  "Data Science Learning",
  "Machine Learning & AI Learning",
  "MCA",
  "Software Development Internship",
  "MERN + PDF/OCR + AI Projects",
];

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
