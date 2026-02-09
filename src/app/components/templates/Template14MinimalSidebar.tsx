import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SocialLink } from '../resume/SocialLink';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export function Template14MinimalSidebar({ data, theme }: TemplateProps) {
  return (
    <div className="flex h-full bg-white">
      {/* Slim Left Sidebar */}
      <div className="w-16 bg-gray-900 flex flex-col items-center py-8 gap-6">
        {/* Profile Icon */}
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
          {data.name[0]}
        </div>
        
        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <SocialLink icon={Mail} url={data.email} theme={theme} variant="icon-only" />
          <SocialLink icon={Phone} url={data.phone} theme={theme} variant="icon-only" />
          <SocialLink icon={MapPin} url={data.location} theme={theme} variant="icon-only" />
          {data.website && <SocialLink icon={Globe} url={data.website} theme={theme} variant="icon-only" />}
          {data.linkedin && <SocialLink icon={Linkedin} url={data.linkedin} theme={theme} variant="icon-only" />}
          {data.github && <SocialLink icon={Github} url={data.github} theme={theme} variant="icon-only" />}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-12 py-8 bg-gray-50 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
          <p className="text-xl text-gray-700">{data.title}</p>
        </div>

        {/* Content */}
        <div className="px-12 py-8 overflow-auto">
          {/* Summary */}
          <section className="mb-6">
            <SectionTitle title="About" theme={theme} variant="minimal" />
            <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <SectionTitle title="Experience" theme={theme} variant="minimal" />
            {data.workExperience.map((job, idx) => (
              <JobCard key={idx} job={job} theme={theme} variant="detailed" />
            ))}
          </section>

          {/* Two Column Bottom */}
          <div className="grid grid-cols-2 gap-8">
            {/* Education */}
            <section>
              <SectionTitle title="Education" theme={theme} variant="minimal" />
              {data.education.map((edu, idx) => (
                <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
              ))}
            </section>

            {/* Skills */}
            <section>
              <SectionTitle title="Skills" theme={theme} variant="minimal" />
              <div className="grid grid-cols-2 gap-2">
                {data.skills.map((skill, idx) => (
                  <div key={idx} className="text-sm text-gray-700">• {skill}</div>
                ))}
              </div>
            </section>
          </div>

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section className="mt-6">
              <SectionTitle title="Projects" theme={theme} variant="minimal" />
              {data.projects.map((project, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, tidx) => (
                      <span key={tidx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
