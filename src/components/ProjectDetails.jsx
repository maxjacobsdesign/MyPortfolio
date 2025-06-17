import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../constants';

const ProjectDetails = () => {
  const { projectName } = useParams();

  const project = projects.find(
    (p) => p.name.toLowerCase() === decodeURIComponent(projectName).toLowerCase()
  );

  if (!project) {
    return (
      <div className="text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-blue-400 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // ✅ Render custom case study component if it exists
  if (project.caseStudyComponent) {
    const CaseStudyComponent = project.caseStudyComponent;
    return <CaseStudyComponent />;
  }

  // ✅ Default rendering for standard projects
  return (
    <div className="text-white p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>

      <img
        src={project.image}
        alt={project.name}
        className="rounded-xl w-full max-w-[600px] mb-6 mx-auto"
      />

      <p className="text-lg mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-3 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className={`px-3 py-1 rounded-full text-sm font-semibold ${tag.color} bg-white/10`}
          >
            #{tag.name}
          </span>
        ))}
      </div>

      {project.source_code_link && (
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline block mb-10"
        >
          🔗 View Source Code
        </a>
      )}

      <Link to="/" className="text-secondary hover:underline text-lg">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetails;