import { TemplateProps } from './index';
import { ResumeHeader } from '../resume/ResumeHeader';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';

export function Template04ExecutiveMinimal({ data, theme }: TemplateProps) {
  return (
    <div className="p-16 h-full overflow-auto text-gray-900 bg-white">
      {/* Large Name Header */}
      <ResumeHeader
        name={data.name}
        title={data.title}
        email={data.email}
        phone={data.phone}
        location={data.location}
        website={data.website}
        theme={theme}
        variant="minimal"
      />

      {/* Generous spacing */}
      <div className="my-12 h-px bg-gray-200"></div>

      {/* Summary - Brief */}
      <section className="mb-12">
        <p className="text-base leading-relaxed text-gray-700 max-w-3xl">
          {data.summary}
        </p>
      </section>

      {/* Work Experience - Focus on Recent */}
      <section className="mb-12">
        <SectionTitle title="Leadership Experience" theme={theme} variant="bold" />
        <div className="space-y-8">
          {data.workExperience.slice(0, 3).map((job, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-baseline mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{job.jobTitle}</h3>
                  <p className="text-lg text-gray-600 mt-1">{job.company}</p>
                </div>
                <div className="text-right text-gray-600">
                  <div>{job.startDate} - {job.endDate}</div>
                  <div className="text-sm">{job.location}</div>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                {job.description.slice(0, 3).map((item, didx) => (
                  <li key={didx} className="flex gap-3">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <SectionTitle title="Education" theme={theme} variant="bold" />
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.degree}, {edu.field}
            </h3>
            <p className="text-gray-600">
              {edu.institution} • {edu.graduationDate}
            </p>
          </div>
        ))}
      </section>

      {/* Key Skills - Minimal List */}
      <section>
        <SectionTitle title="Core Competencies" theme={theme} variant="bold" />
        <div className="grid grid-cols-3 gap-4 text-gray-700">
          {data.skills.slice(0, 9).map((skill, idx) => (
            <div key={idx} className="text-sm">• {skill}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
