import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';

export function Template15Corporate({ data, theme }: TemplateProps) {
  // Conservative, traditional design
  return (
    <div className="p-12 h-full overflow-auto text-gray-900 bg-white" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Traditional Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-gray-800">
        <h1 className="text-3xl font-bold mb-2 text-gray-900" style={{ letterSpacing: '0.05em' }}>
          {data.name.toUpperCase()}
        </h1>
        <p className="text-lg text-gray-700 mb-3">{data.title}</p>
        <div className="text-sm text-gray-600">
          {data.email} • {data.phone} • {data.location}
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-1">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed text-gray-800">{data.summary}</p>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-1">
          Professional Experience
        </h2>
        {data.workExperience.map((job, idx) => (
          <div key={idx} className="mb-5">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-gray-900">{job.jobTitle}</h3>
              <span className="text-sm text-gray-600">
                {job.startDate} – {job.endDate}
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-700 mb-2">
              {job.company}, {job.location}
            </div>
            <ul className="list-disc list-outside ml-5 space-y-1 text-sm text-gray-800">
              {job.description.map((item, didx) => (
                <li key={didx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-1">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between items-baseline">
              <div>
                <div className="font-bold text-gray-900">
                  {edu.degree} in {edu.field}
                </div>
                <div className="text-sm text-gray-700">
                  {edu.institution}, {edu.location}
                </div>
              </div>
              <span className="text-sm text-gray-600">{edu.graduationDate}</span>
            </div>
            {edu.gpa && (
              <div className="text-sm text-gray-700">GPA: {edu.gpa}</div>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-base font-bold mb-2 text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-1">
          Core Competencies
        </h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-800">
          {data.skills.map((skill, idx) => (
            <div key={idx}>• {skill}</div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {data.certificates && data.certificates.length > 0 && (
        <section>
          <h2 className="text-base font-bold mb-3 text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-1">
            Professional Certifications
          </h2>
          {data.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2 text-sm text-gray-800">
              <span className="font-bold">{cert.name}</span>, {cert.issuer} ({cert.date})
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
