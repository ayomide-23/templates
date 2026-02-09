import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';

export function Template01ClassicClean({ data, theme }: TemplateProps) {
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
        linkedin={data.linkedin}
        github={data.github}
        theme={theme}
        variant="default"
      />

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle title="Professional Summary" theme={theme} variant="underline" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <SectionTitle title="Work Experience" theme={theme} variant="underline" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="default" />
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <SectionTitle title="Education" theme={theme} variant="underline" />
        {data.education.map((edu, idx) => (
          <EducationCard key={idx} education={edu} theme={theme} variant="default" />
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <SectionTitle title="Skills" theme={theme} variant="underline" />
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, idx) => (
            <SkillPill key={idx} skill={skill} theme={theme} variant="default" />
          ))}
        </div>
      </section>

      {/* Certifications */}
      {data.certificates && data.certificates.length > 0 && (
        <section>
          <SectionTitle title="Certifications" theme={theme} variant="underline" />
          {data.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2 text-sm">
              <span className="font-semibold text-gray-800">{cert.name}</span>
              <span className="text-gray-600"> — {cert.issuer}, {cert.date}</span>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
