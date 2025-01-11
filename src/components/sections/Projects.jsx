import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  return (
    <div className="space-y-8">
      <p className="text-notion-gray">
        I love turning side projects into side hustles and exploring new
        exciting tech outside of the bounds of my day job.
        <br /><br />
        Currently, I'm exploring all of the available AI APIs (4o-mini & FLUX is my favourite) 
        and making a little $ on the side. Currently have over 400 MAU across 52 different countries.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Active Projects</h3>
          <div className="space-y-3">
            {projects.active.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Legacy Projects</h3>
          <div className="space-y-3">
            {projects.legacy.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};