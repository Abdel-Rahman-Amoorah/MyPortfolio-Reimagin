"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { ThemeToggle } from "./components/theme-toggle"
import { LanguageToggle } from "./components/language-toggle"
import { useTranslation } from "./lib/useTranslation"
import { parseRichText } from "./lib/parseRichText"

import {
  Shield,
  Code,
  Terminal,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Send,
  CheckCircle2,
} from "lucide-react"


export default function Portfolio() {
  const { t, lang } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background ">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl mx-20 rounded-b-2xl">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="text-2xl font-bold hover:bg-primary/35 rounded-2xl">
              <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                AA
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["about", "experience", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header" + item)}
                </button>
              ))}
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {["about", "experience", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("header" + item)}
                </button>
              ))}
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-6 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm text-primary font-medium">{t("available")}</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-linear-to-r from-foreground via-primary pb-4 to-foreground bg-clip-text text-transparent">
              {t("name")}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t("title")}
            </p>

            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                {t("viewProjects")}
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                {t("getInTouch")}
              </Button>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/Abdel-Rahman-Amoorah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrhmanammourah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:abdulrhmanammourah@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-primary">{t("about")} </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">{t("education")}</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">{t("degree")}</p>
                    <p className="text-muted-foreground">{t("university")}</p>
                    <p className="text-sm text-primary">{t("GPA")}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t("CEthicalHacking")}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t("CNetworkSecurity")}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t("CSoftwareSecurity")}
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {t("CCryptography")}
                    </span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold">{t("certifications")}</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">CompTIA Security+</p>
                      <p className="text-sm text-muted-foreground">{t("earnSec+")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">CCT-Fast-Track</p>
                      <p className="text-sm text-muted-foreground">{t("earnCCT+")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full border-2 border-primary/40 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">CCNA</p>
                      <p className="text-sm text-muted-foreground">{t("CCNA")}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {parseRichText(t("aboutParagraph1"))}
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                {parseRichText(t("aboutParagraph2"))}
              </p>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground"> {t("yearsExperience")}</div>
                </div>
                <div className="border-l border-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">{t("projectsCompleted")}</div>
                </div>
                <div className="border-l border-border" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">{t("certificationsCount")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {parseRichText(t("experience"))}
          </h2>

          <div
            className={`space-y-8 relative before:absolute before:top-0 before:bottom-0 before:w-px before:bg-linear-to-b before:from-primary before:via-accent before:to-primary ${lang === "ar" ? "before:right-8 md:before:right-1/2" : "before:left-8 md:before:left-1/2"
              }`}
          >
            {/* Freelance \*/}
            <div className={`relative md:grid md:grid-cols-2 md:gap-8 ${lang === "ar" ? "md:[direction:rtl]" : ""}`}>
              <div className={lang === "ar" ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                  {t("FreeDate")}
                </span>
              </div>
              <Card className="ml-16 md:ml-0 p-6 border-primary/20 bg-card/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{t("FreelancePosition")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("freelanceWork")}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("freePoint1")}</li>
                  <li>• {t("freePoint2")}</li>
                  <li>• {t("freePoint3")}</li>
                </ul>
              </Card>
              <div
                className={`absolute top-8 w-3 h-3 rounded-full ${lang === "ar"
                  ? "bg-primary right-8 md:right-1/2 md:translate-x-1/2"
                  : "bg-primary left-8 md:left-1/2 md:-translate-x-1/2"
                  }`}
              />
            </div>

            {/* GIG Program */}
            <div className="relative md:grid md:grid-cols-2 md:gap-8">
              <div className="md:order-1 md:pl-12">
                <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-2">
                  {t("GIGDate")}
                </span>
              </div>
              <Card className="ml-16 md:ml-0 p-6 border-accent/20 bg-card/80 backdrop-blur md:order-0">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold">{t("GIGPosition")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("GIGwork")}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("GIGPoint1")}</li>
                  <li>• {t("GIGPoint2")}</li>
                  <li>• {t("GIGPoint3")}</li>
                </ul>
              </Card>
              <div className="absolute left-8 top-8 w-3 h-3 bg-accent rounded-full md:left-1/2 md:-translate-x-1/2" />
            </div>

            {/* JoVision */}
            <div className={`relative md:grid md:grid-cols-2 md:gap-8 ${lang === "ar" ? "md:[direction:rtl]" : ""}`}>
              <div className={lang === "ar" ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-2">
                  {t("JoDate")}
                </span>
              </div>
              <Card className="ml-16 md:ml-0 p-6 border-primary/20 bg-card/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">{t("JoVisionPosition")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("JoVisionWork")}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• {t("JoPoint1")}</li>
                  <li>• {t("JoPoint2")}</li>
                  <li>• {t("JoPoint3")}</li>
                </ul>
              </Card>
              <div
                className={`absolute top-8 w-3 h-3 rounded-full ${lang === "ar"
                  ? "bg-primary right-8 md:right-1/2 md:translate-x-1/2"
                  : "bg-primary left-8 md:left-1/2 md:-translate-x-1/2"
                  }`}
              />
            </div>

          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-primary">{t("skills")}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">{t("development")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "OOP",
                  "DS",
                  "React",
                  "React Native",
                  "Next.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "Python",
                  "Flask",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-accent/20 bg-card/50 backdrop-blur hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-bold">{t("cybersecurity")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "SIEM (Splunk)",
                  "Network Security",
                  "Threat Detection",
                  "Log Analysis",
                  "Incident Response",
                  "Vulnerability Assessment",
                  "Digital Forensics",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-foreground border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">{t("tools")}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Linux", "Windows", "VirtualBox", "Figma", "REST APIs", "JSON"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {parseRichText(t("projects"))}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UMBRA */}
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:-translate-y-2 duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  {t("graduationProject")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">UMBRA</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t("UMBRADes")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">Python</span>
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">GPT-2</span>
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">Python/Flask</span>
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">OSINT</span>
              </div>
              <a
                href="https://github.com/Abdul-Rahman-Ammourah/UMBRA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t("viewOnGithub")} <ExternalLink className="h-4 w-4" />
              </a>
            </Card>

            {/* TaskSentinel */}
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:-translate-y-2 duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Terminal className="h-6 w-6 text-accent" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  Full-Stack
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">TaskSentinel</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t("TaskSintinelDes")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent">React Native</span>
                <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent">Python/Flask</span>
                <span className="px-2 py-1 text-xs rounded bg-accent/10 text-accent">Splunk</span>
              </div>
              <a
                href="https://github.com/Abdul-Rahman-Ammourah/TaskSentinel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                {t("viewOnGithub")} <ExternalLink className="h-4 w-4" />
              </a>
            </Card>

            {/* WannaChat */}
            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all hover:-translate-y-2 duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                  {t("mobileApp")}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">WannaChat</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {t("WannachatDes")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">React Native</span>
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">C#/.NET</span>
                <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary">MongoDB</span>
              </div>
              <a
                href="https://github.com/Abdul-Rahman-Ammourah/-WannaChat-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {t("viewOnGithub")} <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {parseRichText(t("contact"))}
          </h2>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:abdulrhmanammourah@gmail.com"
              className="block"
            >
              <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur text-center hover:border-primary/40 transition-colors cursor-pointer">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{t("email")}</h3>
                <p className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  abdulrhmanammourah@gmail.com
                </p>
              </Card>
            </a>


            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur text-center hover:border-primary/40 transition-colors cursor-pointer" onClick={() => { window.open('https://github.com/Abdel-Rahman-Amoorah') }}>
              <Github className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/Abdel-Rahman-Amoorah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Abdel-Rahman-Amoorah
              </a>
            </Card>

            <Card className="p-6 border-primary/20 bg-card/50 backdrop-blur text-center hover:border-primary/40 transition-colors cursor-pointer" onClick={() => { window.open('https://www.linkedin.com/in/abdulrhmanammourah/') }}>
              <Linkedin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/abdulrhmanammourah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                abdulrhmanammourah
              </a>
            </Card>
          </div>
          {/* Contact Form */}
          <Card className="p-8 border-primary/20 bg-card/50 backdrop-blur">
            {formStatus === "sent" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{t("sent")}</h4>
                <p className="text-muted-foreground">
                  {t("thankYou")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  setFormStatus("sending")

                  const form = e.currentTarget
                  const formData = new FormData(form)

                  await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdHoisGHwRkS_W8bwGlP146lBU4w_IH6u9Qrr65lb5qn_JKnA/formResponse",
                    {
                      method: "POST",
                      body: formData,
                      mode: "no-cors", // allow cross-origin submit silently
                    }
                  )

                  setFormStatus("sent")
                  form.reset()

                  setTimeout(() => setFormStatus("idle"), 4000)
                }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t("contactName")}
                    </label>
                    <Input
                      id="name"
                      name="entry.2005620554"
                      placeholder={t("contactNamePH")}
                      required
                      disabled={formStatus === "sending"}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("email")}
                    </label>
                    <Input
                      id="email"
                      name="entry.1045781291"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      disabled={formStatus === "sending"}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {t("subject")}
                  </label>
                  <Input
                    id="subject"
                    name="entry.1065046570"
                    placeholder={t("contactSubject")}
                    required
                    disabled={formStatus === "sending"}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {t("message")}
                  </label>
                  <Textarea
                    id="message"
                    name="entry.1166974658"
                    placeholder={t("contactMessage")}
                    rows={6}
                    required
                    disabled={formStatus === "sending"}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center justify-center"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      {t("Sending")}...
                    </>
                  ) : (
                    <>
                      {t("SendMessage")}
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground"> © 2025 {t("name")}. {t("rights")}</p>
            <p className="text-sm text-muted-foreground">
              {t("builtWith")} <span className="text-primary"><a href="mailto:abdulrhmanammourah@gmail.com">Benaa-ai</a></span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
