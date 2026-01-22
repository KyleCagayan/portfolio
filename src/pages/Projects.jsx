import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Full Stack Web App",
      description:
        "Built with React, TypeScript, SQL, and REST APIs. Includes authentication and data-driven features.",
      link: "https://github.com/yourusername/project",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React and Vite, hosted on GitHub Pages.",
      link: "https://github.com/yourusername/portfolio",
    },
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  )
}
