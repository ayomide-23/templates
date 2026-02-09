import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';

export function Template08Timeline({ data, theme }: TemplateProps) {
  const getTimelineColor = () => {
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
        variant="centered"
      />

      {/* Summary */}
      <section className="mb-8">
        <p className="text-sm leading-relaxed text-gray-700 text-center max-w-3xl mx-auto">
          {data.summary}
        </p>
      </section>

      {/* Career Timeline */}
      <section className="mb-8">
        <SectionTitle title="Career Timeline" theme={theme} variant="bold" />
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: getTimelineColor() }}
          ></div>
          
          {/* Timeline items */}
          {data.workExperience.map((job, idx) => (
            <JobCard key={idx} job={job} theme={theme} variant="timeline" />
          ))}
        </div>
      </section>

      {/* Education & Skills Grid */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Education */}
        <section>
          <SectionTitle title="Education" theme={theme} variant="underline" />
          {data.education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} theme={theme} variant="default" />
          ))}
        </section>

        {/* Skills */}
        <section>
          <SectionTitle title="Skills" theme={theme} variant="underline" />
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <SkillPill key={idx} skill={skill} theme={theme} variant="default" />
            ))}
          </div>
        </section>
      </div>

      {/* Certifications */}
      {data.certificates && data.certificates.length > 0 && (
        <section>
          <SectionTitle title="Certifications" theme={theme} variant="underline" />
          <div className="grid grid-cols-2 gap-3">
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="text-sm">
                <span className="font-semibold text-gray-800">{cert.name}</span>
                <span className="text-gray-600 block">{cert.issuer} • {cert.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
