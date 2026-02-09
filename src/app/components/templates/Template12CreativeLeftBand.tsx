import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { ContactRow } from '../resume/ContactRow';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

export function Template12CreativeLeftBand({ data, theme }: TemplateProps) {
  const getBandColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#6366f1';
    }
  };

  const bandColor = getBandColor();
  const initials = data.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div className="flex h-full bg-white">
      {/* Left Color Band */}
      <div 
        className="w-20 flex flex-col items-center py-12"
        style={{ backgroundColor: bandColor }}
      >
        {/* Initials Circle */}
        {/* <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-white">{initials}</span>
        </div> */}
        
        {/* Vertical Name */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className="text-white font-bold text-lg tracking-widest"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            RESUME
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-1/3 p-8 bg-gray-50">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{data.name}</h1>
            <p className="text-sm text-gray-700">{data.title}</p>
          </div>

          {/* Contact */}
          <div className="mb-6">
            <SectionTitle title="Contact" theme={theme} variant="minimal" />
            <div className="space-y-2">
              <ContactRow icon={Mail} text={data.email} theme={theme} />
              <ContactRow icon={Phone} text={data.phone} theme={theme} />
              <ContactRow icon={MapPin} text={data.location} theme={theme} />
              {data.website && <ContactRow icon={Globe} text={data.website} theme={theme} />}
              {data.linkedin && <ContactRow icon={Linkedin} text={data.linkedin} theme={theme} />}
              {data.github && <ContactRow icon={Github} text={data.github} theme={theme} />}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <SectionTitle title="Skills" theme={theme} variant="minimal" />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <SkillPill key={idx} skill={skill} theme={theme} variant="default" />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle title="Education" theme={theme} variant="minimal" />
            {data.education.map((edu, idx) => (
              <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
            ))}
          </div>
        </div>

        {/* Right Main Content */}
        <div className="w-2/3 p-8 overflow-auto">
          {/* Summary */}
          <section className="mb-6">
            <SectionTitle title="About Me" theme={theme} variant="accent-bar" />
            <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <SectionTitle title="Experience" theme={theme} variant="accent-bar" />
            {data.workExperience.map((job, idx) => (
              <JobCard key={idx} job={job} theme={theme} variant="detailed" />
            ))}
          </section>

          {/* Projects */}
          {data.projects && data.projects.length > 0 && (
            <section>
              <SectionTitle title="Projects" theme={theme} variant="accent-bar" />
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
