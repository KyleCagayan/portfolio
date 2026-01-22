export default function ProjectCard({ title, description, link }) {
  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1.5rem",
        border: "1px solid #1e293b",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        View on GitHub →
      </a>
    </div>
  )
}
