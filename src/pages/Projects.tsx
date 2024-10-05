import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectItemProps {
  name: string;
  languages: string[];
  repo: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ name, languages, repo, description }) => (
  <div className="group flex flex-col justify-between items-start p-6 rounded-lg bg-black text-primary hover:bg-primary hover:text-black w-full m-auto transition-colors duration-300">
    <h3 className="text-lg font-bold">{name}</h3>
    <p className="mt-2 text-sm">{description}</p>
    <div className="mt-4">
      <h4 className="text-sm font-medium">Technologies:</h4>
      <ul className="flex flex-wrap gap-2 mt-2">
        {languages.map((language, index) => (
          <li 
            key={index} 
            className="text-xs bg-black text-primary border-primary border-2 px-2 py-1 rounded 
                       group-hover:bg-primary group-hover:text-black group-hover:border-black 
                       transition-colors duration-300"
          >
            {language}
          </li>
        ))}
      </ul>
    </div>
    <a
      href={repo}
      className="mt-4 flex items-center text-sm hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="mr-2" /> View Repository
    </a>
  </div>
);

const Projects: React.FC = () => {
  const projects: ProjectItemProps[] = [
    {
      name: 'sfnx',
      languages: ['Python', 'Typer', 'SQLModel', 'Argon2'],
      repo: 'https://github.com/themohitnair/sfnx',
      description: 'A minimalist password manager made using Python. Published to the Arch User Repository (AUR).',
    },
    {
      name: 'skyblog',
      languages: ['Go', 'FastAPI', 'SQLite'],
      repo: 'https://github.com/themohitnair/skyblog',
      description: 'A simple, easy-to-configure blogging framework written in Go for self-hosted blogs.',
    },
    {
      name: 'distrowiz',
      languages: ['TypeScript/JavaScript', 'ReactJS'],
      repo: 'https://github.com/themohitnair/distrowiz',
      description: 'A ReactJS Application that uses a simple scoring algorithm to help new Linux users to choose a suitable Linux distribution.'
    }
  ];

  return (
    <div className="projects">
      <div className="grid grid-cols-1 gap-4 w-1/2 m-auto">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            languages={project.languages}
            repo={project.repo}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;