import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Cloud,
  Palette,
  Server,
  Database,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  ExternalLink,
  Menu,
  X,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // toggle expand and collapse of projects section
  const [showAll, setShowAll] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    "Backend & APIs": [
      "Python",
      "Java",
      "Kotlin",
      "Node.js",
      "Spring Boot",
      "Flask",
      "Django",
      "PHP",
      "Laravel",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
    ],
    Frontend: [
      "React",
      "Angular",
      "Svelte",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind",
      "Bootstrap",
    ],
    "Mobile Development": [
      "Flutter",
      "Kotlin Multiplatform",
      "Provider",
      "Cross-Platform UI",
      "Responsive Layouts",
    ],
    "Cloud & DevOps": [
      "AWS Lambda",
      "EC2",
      "S3",
      "Cognito",
      "Docker",
      "CI/CD Pipelines",
      "CloudFormation",
      "Datadog",
      "Zapier",
    ],
    "Design & UX": [
      "Figma",
      "Miro",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Requirements Gathering",
    ],
  };

  const skillIcons = {
    "Backend & APIs": Server,
    Frontend: Monitor,
    "Mobile Development": Smartphone,
    "Cloud & DevOps": Cloud,
    "Design & UX": Palette,
  };

  const experience = [
    {
      company: "Safety IO",
      role: "Software Developer Intern",
      period: "Jan 2025 - Sep 2025",
      location: "Cape Town, South Africa",
      highlights: [
        "Migrated Bamboo runner to Bitbucket Pipelines, reducing deployment errors by 25%",
        "Built full-stack applications using Angular, TypeScript, and PostgreSQL",
        "Analyzed Datadog logs to identify performance bottlenecks and improve system uptime",
        "Developed RESTful APIs with AWS Cognito authentication and Lambda deployments",
        "Co-developed Confluence analytics tool with activity heatmaps and search functionality",
      ],
    },
    {
      company: "Outlier AI",
      role: "Coding Expert - AI Trainer",
      period: "Aug 2024 - Jan 2025",
      location: "Remote",
      highlights: [
        "Completed 100+ coding tasks in one month, generating R25,000+ in earnings",
        "Reviewed and optimized AI-generated code across JavaScript, Python, Java, and TypeScript",
        "Applied RLHF workflows and structured annotation for AI training",
        "Designed coding challenges to strengthen AI reasoning and problem-solving",
      ],
    },
  ];

  const projects = [
    {
      title: "DHA Appointment Booking UX Revamp",
      tech: ["Angular", "TypeScript", "Cursor", "Figma"],
      description:
        "End-to-end UX redesign solving critical usability issues: added landing page, progress indicators, data persistence for backtracking, cross-browser compatibility and alternative branch suggestions for fully booked slots.",
      impact: "Faster task completion, reduced errors and failed searches",
      link: "https://sinomthamzamo.github.io/dha-babs/",
    },
    {
      title: "Bhala Edolweni - Debtor Management",
      tech: ["Python", "React", "Kotlin", "Stripe", "REST API"],
      description:
        "Full-stack platform for small businesses to track debtors. Features multi-user management, encrypted communications, Stripe payments integration, and real-time analytics dashboard.",
      impact:
        "Transitioning backend to Kotlin Multiplatform for cross-platform scalability",
      link: "https://github.com/SinomthaMzamo/bhala-edolweni",
    },
    {
      title: "RoutePool - Carpooling Platform",
      tech: ["Flutter", "Kotlin", "Spring Boot", "PostgreSQL", "AWS"],
      description:
        "Mobile app connecting drivers and passengers on shared routes to reduce traffic congestion in Cape Town. Features real-time updates, Google Maps integration, digital payments, and safety features.",
      impact:
        "Designed to leverage HOV lane incentives and address spatial inequality",
      link: "https://www.figma.com/proto/MXS3aWkjb31vA3BAsSKoLV/RoutePool-Wireframes?node-id=465-2325&p=f&t=rN6rzGxTPB5kuBn3-0&scaling=scale-down&content-scaling=fixed&page-id=376:3805&starting-point-node-id=462:1701&show-proto-sidebar=1",
    },
    {
      title: "Personal Portfolio & CRM Dashboard",
      tech: ["Angular", "AWS Lambda", "DynamoDB", "Cognito", "API Gateway"],
      description:
        "Deployed portfolio with secure admin dashboard, serverless backend, authenticated admin flows, and email notifications via SES.",
      impact:
        "Production-ready cloud architecture with full auth implementation",
      link: null,
    },
    {
      title: "Burn After Reading",
      tech: ["Angular", "Elastic Beanstalk", "EC2", "Encryption"],
      description:
        "View-once encrypted messaging app with symmetric encryption and ephemeral data handling.",
      impact: "Showcases security-first design principles",
      link: null,
    },
    {
      title: "NoteWatch - Confluence Activity Analytics & Search",
      tech: ["Webscraping", "Atlassian API", "Angular", "Node.js"],
      description:
        "Co-developed a tool to scrape Confluence pages and index intern notes to generate activity analytics and a heatmap-style view of contributions. Implemented search functionality to quickly find notes and surface collaboration patterns.",
      impact: "Improved visibility into intern activity and knowledge sharing",
      link: null,
    },
    {
      title: "Minesweeper Game Development",
      tech: ["Python", "Pygame", "Numpy", "OOP", "MVC"],
      description:
        "Developed a Minesweeper game from scratch using OOP, MVC, polymorphism, and composition for scalable design. Integrated game logic with graph theory, adjacency maps, and Numpy for optimized grid computations. Built an interactive Pygame interface showcasing Python and real-time rendering skills.",
      impact:
        "Demonstrated mastery of OOP, MVC, Liskov and Open/Closed principles, and performance optimization with Numpy and adjacency maps.",
    },
    {
      title: "Toy Robot Maze Solver → Multiplayer Game System",
      tech: ["Python", "Graph Theory", "Java", "OOP", "Distributed Systems"],
      description:
        "Built a Python prototype simulating a toy robot in procedurally generated mazes, solving them using BFS/DFS and graph theory. Applied OOP, TDD, and adjustable maze parameters. Later scaled to a multi-client Java server with JSON over WebSockets, concurrency, layered architecture, ORM, design patterns, Dockerized services, and CI/CD pipelines.",
      impact:
        "Transitioned a simple prototype into a robust distributed system, showcasing strong algorithm, system design, and software engineering skills.",
    },
    {
      title: "ClubConnect Website",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "REST API",
        "PostgreSQL",
      ],
      description:
        "Co-developed a community website for WeThinkCode_ clubs to showcase campus activities. Implemented testimonial submission and secure storage with PHP and PostgreSQL. Applied full-stack practices including backend API design, frontend integration, and responsive UI with HTML, CSS, JavaScript, and Bootstrap. Submitted to New Type Works Hacks Hackathon.",
      impact:
        "Enhanced club engagement while demonstrating full-stack development and scalable data management skills.",
    },
    {
      title: "Yo Africa - Health Information Platform",
      tech: ["React", "Firebase", "Botpress"],
      description:
        "Hackathon project improving access to health information in South Africa. Features chatbot integration and resource locator.",
      impact: "Selected at GirlCode Hackathon, aligned with UN SDG 3",
      link: null,
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    setShowAll((prev) => {
      if (prev) {
        // if collapsing
        const element = document.getElementById("projects");
        element?.scrollIntoView({ behavior: "smooth" });
      }
      return !prev;
    });
  };


  const awards = [
    {
      title: "AWS Certified Cloud Practitioner",
      org: "Amazon Web Services",
      year: "2025",
    },
    { title: "Mukuru SheHacks Hackathon Winner", org: "Mukuru", year: "2024" },
    {
      title: "Merit Bursary",
      org: "University of the Free State",
      year: "2020",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-transparent">
              SM
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-emerald-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-6">
            <div className="w-64 h-64 mx-auto bg-gradient-to-r from-emerald-400 to-pink-400 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="assets/logo-avatar.png"
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
            Sinomtha Mzamo
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Full-Stack Developer & Cloud Engineer
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building scalable, user-centric solutions from ideation to
            deployment
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:mzamo.sinomthaayakhanya@gmail.com"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://github.com/sinomthamzamo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sinomtha-mzamo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-full transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Full-stack developer and AWS Certified Cloud Practitioner with
                proven experience building production-ready systems from
                ideation to deployment. Skilled in designing and implementing
                RESTful APIs, managing SQL/NoSQL databases, building scalable
                backends in Python, Java, and Kotlin, as well as developing
                React/Angular frontends, cloud infrastructure (AWS), and CI/CD
                automation.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I combine deep technical expertise with UX design thinking to
                deliver user-centric, production-ready solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin size={20} className="text-emerald-400" />
                  Cape Town, South Africa
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone size={20} className="text-emerald-400" />
                  064 554 3447
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
                <Code className="text-emerald-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-sm text-gray-400">
                  React, Angular, Python, Java, Kotlin
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
                <Cloud className="text-pink-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-sm text-gray-400">
                  AWS, Docker, CI/CD, Monitoring
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
                <Server className="text-emerald-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">Backend Architecture</h3>
                <p className="text-sm text-gray-400">
                  REST APIs, Databases, Security
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-colors">
                <Palette className="text-pink-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2">UX Design</h3>
                <p className="text-sm text-gray-400">
                  Figma, Prototyping, User Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

          <div className="space-y-8">
            {experience.map((job, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 rounded-lg p-8 hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-400">
                      {job.role}
                    </h3>
                    <p className="text-xl text-gray-300">{job.company}</p>
                  </div>
                  <div className="text-gray-400 mt-2 md:mt-0 text-right">
                    <p>{job.period}</p>
                    <p className="text-sm">{job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-gray-300">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3 text-emerald-400">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-emerald-900/30 text-emerald-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <p className="text-sm text-pink-400 italic">
                    {project.impact}
                  </p>
                  {project.link && (
                    <div className="flex justify-end">
                      <a
                        className="bg-pink-400/40 mt-4 text-white px-4 py-2 rounded"
                        href={project.link}
                      >
                        Visit Project
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Toggle Button */}
            {projects.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleToggleProjects}
                  className="bg-emerald-500/80 mt-4 hover:bg-emerald-500 text-white px-6 py-2 rounded-full shadow-md transition"
                >
                  {showAll ? "See Less Projects" : "See More Projects"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => {
              // Pick the icon dynamically from the mapping
              const Icon = skillIcons[category] || Database; // fallback to Database
              return (
                <div key={category} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center gap-2">
                    <Icon size={20} /> {/* dynamically chosen icon */}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-slate-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Currently Learning */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Currently Exploring
            </h3>
            <div className="bg-gradient-to-r from-emerald-900/30 to-pink-900/30 rounded-lg p-8 border border-emerald-500/20">
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-pink-900/40 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                  GraphQL
                </span>
                <span className="bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                  Bloc/Cubit
                </span>
                <span className="bg-pink-900/40 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                  Workflow Automation (n8n)
                </span>
                <span className="bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                  AI-Assisted Development Patterns
                </span>
                <span className="bg-pink-900/40 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                  Advanced Cloud Architecture
                </span>
                <span className="bg-emerald-900/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
                  Model Context Protocol (MCP)
                </span>
                <span className="bg-pink-900/40 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-500/30">
                  SCSS
                </span>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-800 transition-colors"
                >
                  <Award className="text-yellow-400 mx-auto mb-3" size={32} />
                  <h4 className="font-semibold mb-2">{award.title}</h4>
                  <p className="text-sm text-gray-400">{award.org}</p>
                  <p className="text-xs text-gray-500 mt-1">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and collaborations.
            Whether you need a short-term project delivered quickly or a
            long-term team member, I can help bring your ideas to life.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:mzamo.sinomthaayakhanya@gmail.com"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full transition-colors text-lg"
            >
              <Mail size={24} />
              Email Me
            </a>
            <a
              href="https://github.com/sinomthamzamo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-colors text-lg"
            >
              <Github size={24} />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sinomtha-mzamo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-full transition-colors text-lg"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 Sinomtha Mzamo. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
