import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { ProjectCard } from '../resume/ProjectCard';

export function Template13ModernThreeColumn({ data, theme }: TemplateProps) {
  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-6 pb-4 border-b-2 border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.name}</h1>
        <p className="text-xl text-gray-700 mb-3">{data.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.location}</span>
          {data.website && (
            <>
              <span>•</span>
              <span>{data.website}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Three Column Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Column 1: Skills */}
        <section>
          <SectionTitle title="Skills" theme={theme} variant="minimal" />
          <div className="space-y-2">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="text-sm text-gray-700">• {skill}</div>
            ))}
          </div>
        </section>

        {/* Column 2: Certifications */}
        <section>
          <SectionTitle title="Certifications" theme={theme} variant="minimal" />
          {data.certificates && data.certificates.length > 0 ? (
            data.certificates.map((cert, idx) => (
              <div key={idx} className="mb-3 text-sm">
                <div className="font-semibold text-gray-800">{cert.name}</div>
                <div className="text-gray-600 text-xs">{cert.issuer}</div>
                <div className="text-gray-500 text-xs">{cert.date}</div>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-600">No certifications listed</div>
          )}
        </section>

        {/* Column 3: Education */}
        <section>
          <SectionTitle title="Education" theme={theme} variant="minimal" />
          {data.education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              <div className="font-semibold text-sm text-gray-800">{edu.degree}</div>
              <div className="text-xs text-gray-600">{edu.field}</div>
              <div className="text-xs text-gray-600">{edu.institution}</div>
              <div className="text-xs text-gray-500">{edu.graduationDate}</div>
            </div>
          ))}
        </section>
      </div>

      {/* Work Experience */}
      <section className="mb-6">
        <SectionTitle title="Professional Experience" theme={theme} variant="underline" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="compact" />
        ))}
      </section>

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section>
          <SectionTitle title="Projects" theme={theme} variant="underline" />
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} theme={theme} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
