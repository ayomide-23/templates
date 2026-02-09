import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { TrendingUp } from 'lucide-react';

export function Template16StartupProduct({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#8b5cf6';
    }
  };

  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Bold Header */}
      <div className="mb-6">
        <h1 className="text-5xl font-extrabold mb-2" style={{ color: getAccentColor() }}>
          {data.name}
        </h1>
        <p className="text-2xl text-gray-700 mb-4">{data.title}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.location}</span>
          {data.linkedin && (
            <>
              <span>•</span>
              <span>{data.linkedin}</span>
            </>
          )}
        </div>
      </div>

      {/* Key Metrics Section */}
      {data.metrics && data.metrics.length > 0 && (
        <section className="mb-6 p-5 rounded-lg" style={{ backgroundColor: '#faf5ff' }}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5" style={{ color: getAccentColor() }} />
            <h2 className="font-bold text-lg" style={{ color: getAccentColor() }}>
              Impact Metrics
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {data.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold" style={{ color: getAccentColor() }}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle title="About" theme={theme} variant="bold" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <SectionTitle title="Experience" theme={theme} variant="bold" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="detailed" />
        ))}
      </section>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Product & Projects" theme={theme} variant="bold" />
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-4 p-4 border-l-4" style={{ borderColor: getAccentColor() }}>
              <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, tidx) => (
                  <span 
                    key={tidx}
                    className="text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: '#faf5ff', color: getAccentColor() }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        <section>
          <SectionTitle title="Skills" theme={theme} variant="bold" />
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <SkillPill key={idx} skill={skill} theme={theme} variant="filled" />
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <SectionTitle title="Education" theme={theme} variant="bold" />
          {data.education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
          ))}
        </section>
      </div>
    </div>
  );
}
