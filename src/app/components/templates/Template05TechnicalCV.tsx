import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { ProjectCard } from '../resume/ProjectCard';
import { SkillPill } from '../resume/SkillPill';

export function Template05TechnicalCV({ data, theme }: TemplateProps) {
  // Organize skills into categories
  const programmingLanguages = data.skills.slice(0, 4);
  const frameworks = data.skills.slice(4, 8);
  const tools = data.skills.slice(8, 12);

  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Header */}
      <ResumeHeader
        name={data.name}
        title={data.title}
        email={data.email}
        phone={data.phone}
        location={data.location}
        website={data.website}
        linkedin={data.linkedin}
        github={data.github}
        theme={theme}
        variant="default"
      />

      {/* Skills Matrix */}
      <section className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
        <SectionTitle title="Technical Skills" theme={theme} variant="minimal" />
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Languages</h4>
            <div className="space-y-1">
              {programmingLanguages.map((skill, idx) => (
                <div key={idx} className="text-gray-600">• {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Frameworks</h4>
            <div className="space-y-1">
              {frameworks.map((skill, idx) => (
                <div key={idx} className="text-gray-600">• {skill}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Tools</h4>
            <div className="space-y-1">
              {tools.map((skill, idx) => (
                <div key={idx} className="text-gray-600">• {skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlight */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Featured Projects" theme={theme} variant="underline" />
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} theme={theme} variant="default" />
            ))}
          </div>
        </section>
      )}

      {/* Work Experience - Compact */}
      <section className="mb-6">
        <SectionTitle title="Professional Experience" theme={theme} variant="underline" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="compact" />
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
                <span className="text-gray-600 block text-xs">{cert.issuer} • {cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
