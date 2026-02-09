import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { ProjectCard } from '../resume/ProjectCard';
import { Code, Terminal } from 'lucide-react';

export function Template19EngineeringTechnical({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#3b82f6';
    }
  };

  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-6 pb-4 border-b" style={{ borderColor: getAccentColor() }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>
          {data.name}
        </h1>
        <p className="text-xl text-gray-700 mb-3">{data.title}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          {data.github && (
            <>
              <span>•</span>
              <span>github.com/{data.github.split('/').pop()}</span>
            </>
          )}
          {data.linkedin && (
            <>
              <span>•</span>
              <span>LinkedIn</span>
            </>
          )}
        </div>
      </div>

      {/* Technology Stack */}
      <section className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#eff6ff' }}>
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="w-5 h-5" style={{ color: getAccentColor() }} />
          <h2 className="font-bold text-lg" style={{ color: getAccentColor() }}>
            Technology Stack
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
            <div className="space-y-1 text-gray-700">
              {data.skills.slice(0, 3).map((skill, idx) => (
                <div key={idx}>• {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Frameworks</h4>
            <div className="space-y-1 text-gray-700">
              {data.skills.slice(3, 6).map((skill, idx) => (
                <div key={idx}>• {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Tools</h4>
            <div className="space-y-1 text-gray-700">
              {data.skills.slice(6, 9).map((skill, idx) => (
                <div key={idx}>• {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Other</h4>
            <div className="space-y-1 text-gray-700">
              {data.skills.slice(9, 12).map((skill, idx) => (
                <div key={idx}>• {skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle title="Summary" theme={theme} variant="accent-bar" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Featured Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Code className="w-5 h-5" style={{ color: getAccentColor() }} />
            <h2 className="text-lg font-semibold" style={{ color: getAccentColor() }}>
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((project, idx) => (
              <div 
                key={idx}
                className="p-4 border-2 rounded-lg"
                style={{ borderColor: '#e0e7ff' }}
              >
                <h3 className="font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, tidx) => (
                    <span 
                      key={tidx}
                      className="text-xs px-2 py-1 rounded font-mono"
                      style={{ 
                        backgroundColor: '#eff6ff',
                        color: getAccentColor()
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      <section className="mb-6">
        <SectionTitle title="Professional Experience" theme={theme} variant="accent-bar" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="compact" />
        ))}
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-2 gap-8">
        <section>
          <SectionTitle title="Education" theme={theme} variant="accent-bar" />
          {data.education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
          ))}
        </section>

        {data.certificates && data.certificates.length > 0 && (
          <section>
            <SectionTitle title="Certifications" theme={theme} variant="accent-bar" />
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="mb-3 text-sm">
                <div className="font-semibold text-gray-900">{cert.name}</div>
                <div className="text-gray-600">{cert.issuer} • {cert.date}</div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
