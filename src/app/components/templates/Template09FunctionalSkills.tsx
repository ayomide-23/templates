import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { SkillPill } from '../resume/SkillPill';
import { EducationCard } from '../resume/EducationCard';

export function Template09FunctionalSkills({ data, theme }: TemplateProps) {
  return (
    <div className="p-12 h-full overflow-auto text-gray-900 bg-white">
      {/* Header */}
      <ResumeHeader
        name={data.name}
        title={data.title}
        email={data.email}
        phone={data.phone}
        location={data.location}
        website={data.website}
        theme={theme}
        variant="default"
      />

      {/* Professional Summary */}
      <section className="mb-6">
        <SectionTitle title="Professional Summary" theme={theme} variant="underline" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Core Skills - Prominent */}
      <section className="mb-6">
        <SectionTitle title="Core Competencies" theme={theme} variant="underline" />
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, idx) => (
            <SkillPill key={idx} skill={skill} theme={theme} variant="filled" />
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="mb-6">
        <SectionTitle title="Key Achievements" theme={theme} variant="underline" />
        <div className="space-y-3">
          {data.workExperience.flatMap(job => job.description.slice(0, 1)).slice(0, 5).map((achievement, idx) => (
            <div key={idx} className="flex gap-3 text-sm">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">{achievement}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Highlight */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Notable Projects" theme={theme} variant="underline" />
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

      {/* Work History - Brief */}
      <section className="mb-6">
        <SectionTitle title="Work History" theme={theme} variant="underline" />
        {data.workExperience.map((job, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-semibold text-gray-900">{job.jobTitle}</span>
                <span className="text-gray-600"> at {job.company}</span>
              </div>
              <span className="text-sm text-gray-600">
                {job.startDate} - {job.endDate}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <SectionTitle title="Education" theme={theme} variant="underline" />
        {data.education.map((edu, idx) => (
          <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
        ))}
      </section>

      {/* Certifications */}
      {data.certificates && data.certificates.length > 0 && (
        <section>
          <SectionTitle title="Certifications" theme={theme} variant="underline" />
          <div className="grid grid-cols-2 gap-2">
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="text-sm">
                <span className="font-semibold text-gray-800">{cert.name}</span>
                <span className="text-gray-600 block text-xs">{cert.issuer}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
