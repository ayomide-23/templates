import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';

export function Template07AcademicResearch({ data, theme }: TemplateProps) {
  return (
    <div className="p-12 h-full overflow-auto text-gray-900 bg-white">
      {/* Header - Academic Style */}
      <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{data.name}</h1>
        <p className="text-lg text-gray-700 mb-3">{data.title}</p>
        <div className="flex justify-center gap-4 text-sm text-gray-600">
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

      {/* Research Interests / Summary */}
      <section className="mb-6">
        <SectionTitle title="Research Interests" theme={theme} variant="default" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Education - Prominence */}
      <section className="mb-6">
        <SectionTitle title="Education" theme={theme} variant="default" />
        {data.education.map((edu, idx) => (
          <EducationCard key={idx} education={edu} theme={theme} variant="detailed" />
        ))}
      </section>

      {/* Publications */}
      {data.publications && data.publications.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Publications" theme={theme} variant="default" />
          {data.publications.map((pub, idx) => (
            <div key={idx} className="mb-4 pl-4">
              <p className="text-sm text-gray-800">
                <span className="font-semibold">{pub.authors}</span> ({pub.date}). 
                "{pub.title}". <em>{pub.journal}</em>.
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Academic / Research Experience */}
      <section className="mb-6">
        <SectionTitle title="Academic & Research Experience" theme={theme} variant="default" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="detailed" />
        ))}
      </section>

      {/* Research Projects */}
      {data.projects && data.projects.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Research Projects" theme={theme} variant="default" />
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications & Awards */}
      {data.certificates && data.certificates.length > 0 && (
        <section className="mb-6">
          <SectionTitle title="Honors & Awards" theme={theme} variant="default" />
          {data.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2 text-sm">
              <span className="font-semibold text-gray-800">{cert.name}</span>
              <span className="text-gray-600"> — {cert.issuer}, {cert.date}</span>
            </div>
          ))}
        </section>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section>
          <SectionTitle title="Languages" theme={theme} variant="default" />
          <div className="grid grid-cols-3 gap-3 text-sm">
            {data.languages.map((lang, idx) => (
              <div key={idx}>
                <span className="font-semibold text-gray-800">{lang.name}</span>
                <span className="text-gray-600"> — {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
