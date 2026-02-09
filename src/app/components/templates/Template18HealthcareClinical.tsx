import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { Shield, Award } from 'lucide-react';

export function Template18HealthcareClinical({ data, theme }: TemplateProps) {
  return (
    <div className="p-12 h-full overflow-auto text-gray-900 bg-white">
      {/* Professional Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-blue-600">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">{data.name}</h1>
        <p className="text-xl text-gray-700 mb-3">{data.title}</p>
        <div className="text-sm text-gray-600">
          {data.email} | {data.phone} | {data.location}
        </div>
      </div>

      {/* Licenses & Certifications - Prominent */}
      {data.certificates && data.certificates.length > 0 && (
        <section className="mb-6 p-5 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-lg text-blue-900">
              Licenses & Certifications
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="bg-white p-3 rounded border border-blue-100">
                <div className="font-semibold text-gray-900">{cert.name}</div>
                <div className="text-sm text-gray-700">{cert.issuer}</div>
                <div className="text-sm text-gray-600">
                  {cert.date}
                  {cert.id && <span className="ml-2 text-xs">ID: {cert.id}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Summary */}
      <section className="mb-6">
        <SectionTitle title="Professional Summary" theme={theme} variant="underline" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Education - Prominent for Healthcare */}
      <section className="mb-6">
        <SectionTitle title="Education & Training" theme={theme} variant="underline" />
        {data.education.map((edu, idx) => (
          <EducationCard key={idx} education={edu} theme={theme} variant="detailed" />
        ))}
      </section>

      {/* Clinical Experience */}
      <section className="mb-6">
        <SectionTitle title="Clinical Experience" theme={theme} variant="underline" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="detailed" />
        ))}
      </section>

      {/* Clinical Skills */}
      <section className="mb-6">
        <SectionTitle title="Clinical Skills & Competencies" theme={theme} variant="underline" />
        <div className="grid grid-cols-3 gap-3 text-sm">
          {data.skills.map((skill, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Award className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section>
          <SectionTitle title="Languages" theme={theme} variant="underline" />
          <div className="grid grid-cols-3 gap-3 text-sm">
            {data.languages.map((lang, idx) => (
              <div key={idx}>
                <span className="font-semibold text-gray-900">{lang.name}:</span>
                <span className="text-gray-700"> {lang.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
