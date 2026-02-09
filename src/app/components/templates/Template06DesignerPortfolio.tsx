import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { Mail, Phone, Globe, Linkedin } from 'lucide-react';

export function Template06DesignerPortfolio({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#6366f1';
    }
  };

  return (
    <div className="h-full overflow-auto bg-white">
      {/* Creative Header with Profile Photo */}
      <div className="px-12 pt-12 pb-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="flex items-start gap-8">
          {/* Profile Photo */}
          <div className="w-32 h-32 rounded-lg bg-gray-300 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt={`${data.name} Profile`} className="w-full h-full object-cover rounded-lg" />
          </div>
          
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>
              {data.name}
            </h1>
            <p className="text-xl text-gray-700 mb-4">{data.title}</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>{data.website}</span>
              </div>
              {data.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <span>{data.linkedin}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 pb-12">
        {/* About */}
        <section className="mb-6">
          <SectionTitle title="About" theme={theme} variant="accent-bar" />
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </section>

        {/* Featured Projects with Thumbnails */}
        {data.projects && data.projects.length > 0 && (
          <section className="mb-6">
            <SectionTitle title="Portfolio Projects" theme={theme} variant="accent-bar" />
            <div className="grid grid-cols-2 gap-4">
              {data.projects.map((project, idx) => {
                // Design/branding related images for brand designer portfolio
                const projectImages = [
                  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop', // Brand design
                  'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop', // Color palette
                ];
                
                return (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    {/* Project Thumbnail */}
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img src={projectImages[idx % projectImages.length]} alt={`${project.name} Thumbnail`} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, tidx) => (
                          <span key={tidx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Work Experience */}
        <section className="mb-6">
          <SectionTitle title="Experience" theme={theme} variant="accent-bar" />
          {data.workExperience.map((job, idx) => (
            <JobCard key={idx} job={job} theme={theme} variant="default" />
          ))}
        </section>

        {/* Bottom Grid */}
        <div className="grid grid-cols-2 gap-8">
          {/* Education */}
          <section>
            <SectionTitle title="Education" theme={theme} variant="accent-bar" />
            {data.education.map((edu, idx) => (
              <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
            ))}
          </section>

          {/* Skills */}
          <section>
            <SectionTitle title="Skills & Tools" theme={theme} variant="accent-bar" />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <SkillPill key={idx} skill={skill} theme={theme} variant="default" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
