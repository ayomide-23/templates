import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export function Template02ModernTwoColumn({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#374151';
    }
  };

  const accentColor = getAccentColor();

  return (
    <div className="h-full bg-white overflow-auto">
      {/* Header Section */}
      <div className="px-6 lg:px-12 py-6 lg:py-8 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-20 h-20 rounded-lg flex-shrink-0 bg-gray-300">
            <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop" alt={`${data.name} Profile`} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold mb-1" style={{ color: accentColor }}>
              {data.name}
            </h1>
            <p className="text-lg text-gray-600 mb-3">{data.title}</p>
            <div className="flex flex-wrap gap-4 text-xs lg:text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" style={{ color: accentColor }} />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" style={{ color: accentColor }} />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" style={{ color: accentColor }} />
                <span>{data.location}</span>
              </div>
              {data.website && (
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" style={{ color: accentColor }} />
                  <span>{data.website}</span>
                </div>
              )}
              {data.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" style={{ color: accentColor }} />
                  <span>{data.linkedin}</span>
                </div>
              )}
              {data.github && (
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" style={{ color: accentColor }} />
                  <span>{data.github}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-12 py-6 lg:py-8">
        {/* Summary */}
        <section className="mb-8">
          <SectionTitle title="About Me" theme={theme} variant="accent-bar" />
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </section>

        {/* Two Column Grid for Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <section>
            <SectionTitle title="Education" theme={theme} variant="accent-bar" />
            {data.education.map((edu, idx) => (
              <EducationCard key={idx} education={edu} theme={theme} variant="default" />
            ))}
          </section>

          {/* Skills */}
          <section>
            <SectionTitle title="Skills" theme={theme} variant="accent-bar" />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <SkillPill key={idx} skill={skill} theme={theme} variant="filled" />
              ))}
            </div>
          </section>
        </div>

        {/* Work Experience */}
        <section className="mb-8">
          <SectionTitle title="Work Experience" theme={theme} variant="accent-bar" />
          {data.workExperience.map((job, idx) => (
            <JobCard key={idx} job={job} theme={theme} variant="detailed" />
          ))}
        </section>

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <section className="mb-8">
            <SectionTitle title="Projects" theme={theme} variant="accent-bar" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.projects.map((project, idx) => (
                <div key={idx} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{project.name}</h3>
                  <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, tidx) => (
                      <span key={tidx} className="text-xs px-2 py-1" style={{ backgroundColor: `${accentColor}20`, color: accentColor, borderRadius: '4px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
