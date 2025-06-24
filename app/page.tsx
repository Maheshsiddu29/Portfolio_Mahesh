"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Always call Framer Motion hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Error boundary for motion components
  if (hasError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-white/80 mb-4">Please refresh the page to try again.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  // Loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80">Loading...</p>
        </div>
      </div>
    )
  }

  const experiences = [
    {
      company: "Cognizant",
      role: "Associate - Research & Development",
      period: "Feb 2022 - Jan 2023",
      location: "India",
      achievements: [
        "Architected Microsoft Hololens2 XR solutions using Unity3D/C#, achieving 30% performance improvement",
        "Engineered real-time collaboration systems with Unity Networking and Azure cloud integration",
        "Designed Mixed Reality dashboards with RESTful API integrations, enhancing asset utilization by 20%",
      ],
    },
    {
      company: "Cognizant",
      role: "Program Analyst - AR/VR Developer",
      period: "Dec 2021 - Feb 2022",
      location: "India",
      achievements: [
        "Developed Ethereum blockchain tracking system with Solidity smart contracts",
        "Directed automotive AR application project, boosting customer engagement by 35%",
        "Implemented AR navigation system reducing wayfinding time by 40%",
      ],
    },
    {
      company: "Cognizant",
      role: "Program Analyst Trainee",
      period: "Dec 2020 - Dec 2021",
      location: "India",
      achievements: [
        "Built full-stack applications with .NET Core, SQL Server, and C# in Agile sprints",
        "Consistently ranked in top 10% of trainees",
        "Earned certifications in HTML5/CSS3, Smart Contracts, and Python",
      ],
    },
  ]

  const projects = [
    {
      title: "Medi Vault",
      period: "Mar 2024 - May 2024",
      description: "Healthcare blockchain dApp with role-based access controls",
      achievements: [
        "Increased security by 30% while maintaining HIPAA compliance",
        "Scaled on Polygon Layer-2, processing 5M+ daily transactions",
        "Reduced operational costs by 40%",
      ],
      tech: ["Solidity", "Polygon", "React", "Web3.js"],
    },
    {
      title: "Healthcare Security with ZKP",
      period: "Feb 2025 - May 2025",
      description: "Zero-Knowledge Proof authentication system",
      achievements: [
        "Reduced data breach risks by 40%",
        "Improved system response time by 15%",
        "Implemented distributed storage with Docker containers",
      ],
      tech: ["Zero-Knowledge Proofs", "Ethereum", "Docker", "Jest"],
    },
    {
      title: "Ethereum Healthcare System",
      period: "Feb 2019 - Jun 2019",
      description: "Blockchain data management system with encrypted storage",
      achievements: [
        "Secured innovation award",
        "Implemented CI/CD with Jenkins automation",
        "Healthcare standards compliant",
      ],
      tech: ["Ethereum", "Smart Contracts", "Jenkins", "Blockchain"],
    },
  ]

  const skills = {
    Languages: ["Python", "JavaScript", "TypeScript", "Solidity", "C#", "SQL", "HTML/CSS", "Go"],
    Blockchain: ["Ethereum", "Polygon", "Hyperledger", "Web3.js", "Smart Contracts", "Truffle", "Hardhat"],
    Frameworks: ["React.js", "Node.js", "Angular", "Unity3D", ".NET Core", "MRTK", "Express"],
    "Cloud & DevOps": ["Azure", "CI/CD", "REST APIs", "Docker", "Jenkins"],
    Databases: ["SQL Server", "PostgreSQL", "MongoDB", "IPFS"],
  }

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <>
      <noscript>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Sai Mahesh Sure</h1>
            <p className="text-xl text-white/80 mb-6">Computer Science Master's Candidate | Full-Stack Developer | Blockchain & AR/VR Specialist</p>
            <p className="text-white/60">Please enable JavaScript to view the full interactive experience.</p>
          </div>
        </div>
      </noscript>
      
      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      >
        {/* Animated Background */}
        <motion.div 
          className="fixed inset-0 opacity-30" 
          style={{ y: backgroundY }}
          onError={() => setHasError(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>

        {/* Mouse Follower */}
        <div
          className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
          }}
        />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 left-0 right-0 z-40 p-6"
          onError={() => setHasError(true)}
        >
          <div className="max-w-7xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 px-6 py-4">
              <div className="flex items-center justify-between">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Sai Mahesh Sure
                </motion.div>
                <div className="hidden md:flex items-center space-x-8">
                  {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="nav-link text-white/80 hover:text-white transition-colors duration-400 font-medium"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative px-6 pt-24">
          <motion.div style={{ y: textY }} className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.6,
                ease: [0.23, 1, 0.32, 1],
                type: "spring",
                stiffness: 60,
                damping: 15,
              }}
              className="mb-8"
            >
              <motion.div
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-white">
                  SM
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
            >
              Sai Mahesh Sure
            </motion.h1>

            <motion.p
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
            >
              Computer Science Master's Candidate | Full-Stack Developer | Blockchain & AR/VR Specialist
            </motion.p>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-wrap items-center justify-center gap-6 mb-12"
            >
              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5" />
                <span>Amherst, MA</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-5 h-5" />
                <span>+1-413-210-0159</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-white/70"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5" />
                <span>suresaimahesh@gmail.com</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center justify-center gap-6"
            >
              <motion.a
                href="https://github.com/Maheshsiddu29"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-2xl p-4 border border-white/20 transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sure-sai-mahesh-034b8b156"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-2xl p-4 border border-white/20 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </motion.a>
              <motion.a
                href="mailto:suresaimahesh@gmail.com"
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 rounded-2xl px-8 py-4 border border-white/20 transition-all duration-300 flex items-center gap-2 text-white font-medium"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    Computer Science master's candidate with robust full-stack development skills and experience in rapid
                    technology adaptation. Demonstrated ability to enhance performance via test-driven development and
                    CI/CD, delivering measurable improvements.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    Adept in agile environments and focused on building scalable, user-centric systems for dynamic
                    platforms, with specialized expertise in blockchain technology, AR/VR development, and cloud
                    solutions.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-blue-400 font-medium">University of Massachusetts Amherst</p>
                        <p className="text-white/80">Master of Science, Computer Science</p>
                        <p className="text-white/60 text-sm">Expected May 2025</p>
                      </div>
                      <div>
                        <p className="text-purple-400 font-medium">IFET College of Engineering</p>
                        <p className="text-white/80">B.E., Electronics and Communication</p>
                        <p className="text-white/60 text-sm">GPA: 8.11/10.0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <p className="text-blue-400 text-lg font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-white/80 font-medium">{exp.period}</p>
                      <p className="text-white/60">{exp.location}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-white/80 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    y: -20,
                    scale: 1.05,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                  }}
                  className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-700 group cursor-pointer"
                >
                  <motion.div
                    className="flex items-center justify-between mb-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <motion.div whileHover={{ rotate: 45, scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </motion.div>
                  <p className="text-white/60 text-sm mb-4">{project.period}</p>
                  <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

                  <div className="space-y-3 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <p className="text-white/70 text-sm leading-relaxed">{achievement}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)",
                          transition: { duration: 0.2 },
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs text-white/80 border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Core Competencies
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category === "Languages" && <Code className="w-6 h-6 text-blue-400" />}
                    {category === "Blockchain" && <Database className="w-6 h-6 text-purple-400" />}
                    {category === "Frameworks" && <Globe className="w-6 h-6 text-green-400" />}
                    {category === "Cloud & DevOps" && <Cloud className="w-6 h-6 text-orange-400" />}
                    {category === "Databases" && <Cpu className="w-6 h-6 text-pink-400" />}
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-xl text-sm text-white/80 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Achievements & Recognition
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Best Innovation Project Award</p>
                      <p className="text-white/70 text-sm">Blockchain healthcare implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Department President</p>
                      <p className="text-white/70 text-sm">Electronics & Communication Department Association</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Publications & Leadership</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">IEEE Research Paper</p>
                      <p className="text-white/70 text-sm">Published - DOI: 9202232 (2020)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Workshop Leader</p>
                      <p className="text-white/70 text-sm">"Blockchain Use Cases" (150+ attendees)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Conference Presentation</p>
                      <p className="text-white/70 text-sm">"Blockchain for Water Management" at IEI Tamil Nadu (2019)</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-xl text-white/80">
                Ready to collaborate on innovative projects or discuss opportunities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

                  <motion.a
                    href="mailto:suresaimahesh@gmail.com"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/70">suresaimahesh@gmail.com</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:text-white transition-colors" />
                  </motion.a>

                  <motion.a
                    href="tel:+14132100159"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-white/70">+1-413-210-0159</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:text-white transition-colors" />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/sure-sai-mahesh-034b8b156"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-white/70">Connect with me</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:text-white transition-colors" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/Maheshsiddu29"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-white/70">View my projects</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/50 ml-auto group-hover:text-white transition-colors" />
                  </motion.a>
                </div>

                <div className="flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                      Let's Talk!
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/60"
            >
              © 2024 Sai Mahesh Sure. Crafted with passion and innovation.
            </motion.p>
          </div>
        </footer>
      </div>
    </>
  )
}
