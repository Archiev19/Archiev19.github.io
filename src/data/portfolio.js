export const heroData = {
    title: "AI Product Manager",
    hook: "Great products solve real problems.",
    subtitle: "I build user-centric products, intelligent AI-native platforms, and responsive web apps that solve real-world problems. Driven by empathy and strategic vision.",
    image: "/assets/main_1.jpg",
    name: "Archiev Kumar"
};

export const aboutData = {
    hook: "Building Products that matter.",
    bio: "With 4+ years spanning edtech, telecom, and AI-native startups, I bridge user empathy with engineering precision to drive 0→1 product builds. My systems-thinking background, sharpened through both technical education and UPSC experience, translates complex problems into products that help people."
};

// Radar Chart / Skills Breakdown
export const skillsData = {
    "Product Strategy": ["Roadmapping", "A/B Tests", "Project Management", "System Design"],
    "Product Design": ["User Stories", "User Flows", "Wireframes", "Persona Writing"],
    "Market & User Research": ["Market Analysis", "Experiment Design", "Usability Testing"],
    "AI & Machine Learning": ["Prompt Engineering", "LLM Evaluation", "RAG Pipelines", "AI Agents"],
    "Data Engineering & Analytics": ["SQL", "Python", "ETL Development", "Data Warehousing"],
    "PM Tools": ["Jira/Confluence", "Figma", "Notion", "GitHub"]
};

export const experienceData = [
    {
        role: "Product Manager (AI)",
        company: "VisionAI India",
        location: "Noida",
        date: "March 2025 – Present",
        logo: "/assets/visionaiindia_logo.png",
        logoScale: "scale-[1.55]",
        highlights: [
            "Led end-to-end PM for EvalFlow (AI-augmented answer evaluation) achieving >95% OCR accuracy, 0.90+ Pearson correlation with SME scores, and <2% hallucination rate.",
            "Drove LLM prompt engineering and model evals for subjective grading, achieving F1 >0.92 across Humanities and STEM.",
            "Prototyped AI Digital Classroom ecosystem mapping ASR transcription and LLM-based summarization into an end-to-end loop.",
            "Built internal Question Generation Platform replacing manual email workflows for 35+ faculty."
        ]
    },
    {
        role: "Assistant Manager - Academic & Product Operations",
        company: "VisionIAS",
        location: "New Delhi",
        date: "Dec 2022 – Feb 2025",
        logo: "/assets/visionias_logo.png",
        highlights: [
            "Bridged academic domain and product teams for India's leading UPSC platform, translating insights into features serving 50,000+ aspirants.",
            "Served as primary stakeholder interface between 35+ faculty and product team for Test Series Dashboard & Study Tracker.",
            "Owned content operations for UPSC Mains & Prelims, managing creators and evaluating answer copies.",
            "Established structured feedback loops between students, mentors, and engineering shaping product iterations."
        ]
    },
    {
        role: "UPSC Civil Services Aspirant",
        company: "Study Gap",
        location: "India",
        date: "Aug 2020 – Dec 2022",
        logo: null,
        highlights: [
            "Appeared for UPSC Civil Services Interview (Mains + Personality Test), ranked among Top 0.23% of 1M+ applicants, reaching the final interview stage.",
            "Developed deep expertise in Public Policy, Governance, Economics, Ethics, and International Relations, the macro-systems lens that shapes my product thinking.",
            "Pursuit driven by a goal to contribute towards nation building and help people."
        ]
    },
    {
        role: "Assistant Product Manager (Young Technical Leader Program)",
        company: "Bharti Airtel, Gurugram",
        location: "India",
        date: "Jun 2019 – Aug 2020",
        logo: "/assets/airtel_logo.png",
        highlights: [
            "Fast-tracked to core product responsibilities within 12 months, delivering 3 major releases for Airtel Work App.",
            "Conducted end-to-end user research translating 400+ field staff pain points into a 18% reduction in customer complaints (3.5K to 2.9K/month).",
            "Spearheaded product roadmap achieving a 4.2-star Playstore rating and 100% adoption through 20+ KT sessions.",
            "Directed migration of legacy workflows to digital platforms coordinating 10+ vendors to virtualize 500+ network nodes."
        ]
    },
    {
        role: "Research Assistant",
        company: "Indian Institute of Science (IISc)",
        location: "Bangalore",
        date: "May 2018 – Aug 2018",
        logo: "/assets/iisc_logo.png",
        highlights: [
            { text: "Published in Elsevier Sensors & Actuators B: Novel Hg²⁺ detection device with LOD 0.1 ppb, below WHO/EPA limits, at NeuRonICS Lab, IISc.", link: "https://labs.dese.iisc.ac.in/neuronics/wp-content/uploads/sites/16/2019/06/Sensors_and_Actuators_-B_Chem_290-1_73-78_2019.pdf", linkText: "View Paper" },
            { text: "Published in IEEE Xplore: AI-based IoT Home Automation system presented at the NeuRonICS Lab, IISc.", link: "https://ieeexplore.ieee.org/document/8745421", linkText: "View Paper" }
        ]
    }
];

export const educationData = [
    {
        degree: "B.E. in Instrumentation & Control Engineering (GPA: 7.46)",
        institution: "Netaji Subhas Institute of Technology, Delhi",
        date: "2015 – 2019",
        logo: "/assets/nsit_logo.png",
        coursework: [
            "Control Systems",
            "Sensors & Transducers",
            "Process Control",
            "Digital Signal Processing",
            "Microprocessors & Microcontrollers",
            "Industrial Instrumentation"
        ]
    }
];

export const currentlyBuilding = [
    {
        id: "simply-fit",
        title: "Simply Fit",
        category: "Fitness AI Platform",
        techStack: ["React", "Node.js", "GPT-4", "OpenAI API"],
        shortDescription: "An end-to-end personalized AI fitness coach featuring nutrition tracking, workout generation, and a bespoke chatbot. Zero external dependencies. A complete solo build.",
        links: [
            { text: "Visit Platform", url: "https://gosimply.fit/" }
        ],
        images: [
            { path: "/assets/sf_logo_1.png", scale: "scale-[1.7]" },
            { path: "/assets/Simplyfit_logo.png", scale: "scale-[1.3]" }
        ]
    }
];

export const launchedProducts = [
    {
        id: "evalflow",
        title: "EvalFlow: AI-Augmented Subjective Grading",
        category: "EdTech",
        techStack: ["Python", "RAG", "OCR", "SQL"],
        shortDescription: "A hybrid-intelligence assessment pipeline that digitizes and grades handwritten subjective answer copies, recovering thousands of hours for educators.",
        links: [
            { text: "View Product", url: "https://visionaiindia.com/products/assessments" }
        ],
        logo: "/assets/logo_1.png"
    },
    {
        id: "airtel-work",
        title: "Airtel Work App",
        category: "Telecom",
        techStack: ["Mobile Application", "Offline Sync", "Ticketing System"],
        shortDescription: "A streamlined operations app connecting 400+ field engineers, office staff, and customers to eliminate offline inefficiencies, resulting in an 18% complaint drop.",
        links: [
            { text: "View on Playstore", url: "https://play.google.com/store/apps/details?id=com.airtel.airtelwork&hl=en_IN" }
        ],
        images: ["/assets/work_1.jpg", "/assets/work_2.jpg"]
    },
    {
        id: "bookwise-ai",
        title: "BookWise AI",
        category: "AI Productivity",
        techStack: ["React", "OpenAI API", "Vite"],
        shortDescription: "Your AI reading companion — upload or search any book and get instant AI-powered summaries, key insights, author deep-dives, and personalized reading recommendations.",
        links: [
            { text: "Try BookWise AI", url: "https://bookwiseai.netlify.app/" }
        ],
        logo: null
    },
    {
        id: "visionias-dashboard",
        title: "Test Series Dashboard",
        category: "EdTech",
        techStack: ["Web Application", "Data Visualization", "User Profiles"],
        shortDescription: "A digital study tracker providing 50,000+ aspirants with unified progression visibility.",
        links: [
            { text: "Visit VisionIAS", url: "https://visionias.in/" }
        ],
        logo: "/assets/visionias_logo.png"
    }
];

export const humanLayerData = {
    title: "Hobbies and Interests",
    intro: "Something which you might find me doing when I am not building products.",
    interests: [
        {
            title: "Endurance Running",
            description: "Love to run.",
            images: [
                "/assets/run1.jpg",
                "/assets/run2.jpg",
                "/assets/run3.jpg",
                "/assets/run4.jpg"
            ]
        },
        {
            title: "Reading",
            description: "Deriving from my UPSC preparation, I have a deep-seated interest in macro-systems and philosophy. I spend my free time exploring the intersections of **International Relations** and **AI Ethics**, which helps me build more globally-aware and ethical products.",
            goodreads: "https://www.goodreads.com/user/show/143436479-archiev",
            books: [
                { title: "The Tragedy of Great Power Politics", author: "John Mearsheimer" },
                { title: "Justice: What's the Right Thing to Do?", author: "Michael J. Sandel" }
            ]
        }
    ]
};
