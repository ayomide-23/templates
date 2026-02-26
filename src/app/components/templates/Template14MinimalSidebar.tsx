import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SocialLink } from '../resume/SocialLink';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export function Template14MinimalSidebar({ data, theme }: TemplateProps) {
  return (
    <div className="flex flex-col md:flex-row h-full bg-white overflow-auto">
      {/* Slim Left Sidebar */}
      <div className="hidden md:flex w-full md:w-56 bg-gray-900 flex-col py-8 px-4 gap-6">
        {/* Profile Icon */}
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold self-center">
          {data.name[0]}
        </div>
        
        {/* Social Icons */}
        <div className="flex flex-col gap-4">
          <SocialLink icon={Mail} url={data.email} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          <SocialLink icon={Phone} url={data.phone} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          <SocialLink icon={MapPin} url={data.location} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          {data.website && (
            <SocialLink icon={Globe} url={data.website} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          )}
          {data.linkedin && (
            <SocialLink icon={Linkedin} url={data.linkedin} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          )}
          {data.github && (
            <SocialLink icon={Github} url={data.github} theme={theme} containerClassName="text-xs" textClassName="text-gray-100" />
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="px-6 md:px-12 py-6 md:py-8 bg-gray-50 border-b border-gray-200">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
          <p className="text-lg md:text-xl text-gray-700">{data.title}</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 md:hidden">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{data.location}</span>
            </div>
            {data.website && (
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{data.website}</span>
              </div>
            )}
            {data.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>{data.linkedin}</span>
              </div>
            )}
            {data.github && (
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>{data.github}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-8 overflow-auto w-full">
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
          {/* Two Column Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="grid grid-cols-1">
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
