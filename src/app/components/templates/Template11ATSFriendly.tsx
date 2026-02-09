import { TemplateProps } from './index';

export function Template11ATSFriendly({ data, theme }: TemplateProps) {
  // Simple, text-based, ATS-optimized layout
  // No decorative elements, simple formatting only
  
  return (
    <div className="p-12 h-full overflow-auto text-gray-900 bg-white font-sans">
      {/* Header - Plain Text */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-1 text-gray-900">{data.name}</h1>
        <p className="text-lg mb-2 text-gray-700">{data.title}</p>
        <p className="text-sm text-gray-700">
          {data.email} | {data.phone} | {data.location}
          {data.website && ` | ${data.website}`}
          {data.linkedin && ` | ${data.linkedin}`}
        </p>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-gray-900 uppercase border-b border-gray-400 pb-1">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed text-gray-800">{data.summary}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-900 uppercase border-b border-gray-400 pb-1">
          Work Experience
        </h2>
        {data.workExperience.map((job, idx) => (
          <div key={idx} className="mb-4">
            <div className="mb-1">
              <span className="font-bold text-gray-900">{job.jobTitle}</span>
              <span className="text-gray-700"> — {job.company}</span>
            </div>
            <div className="text-sm text-gray-700 mb-1">
              {job.location} | {job.startDate} - {job.endDate}
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
              {job.description.map((item, didx) => (
                <li key={didx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-900 uppercase border-b border-gray-400 pb-1">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <div className="font-bold text-gray-900">
              {edu.degree} in {edu.field}
            </div>
            <div className="text-sm text-gray-700">
              {edu.institution}, {edu.location} | {edu.graduationDate}
              {edu.gpa && ` | GPA: ${edu.gpa}`}
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold mb-2 text-gray-900 uppercase border-b border-gray-400 pb-1">
          Skills
        </h2>
        <p className="text-sm text-gray-800">
          {data.skills.join(' • ')}
        </p>
      </section>

      {/* Certifications */}
      {data.certificates && data.certificates.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-gray-900 uppercase border-b border-gray-400 pb-1">
            Certifications
          </h2>
          {data.certificates.map((cert, idx) => (
            <div key={idx} className="mb-2 text-sm text-gray-800">
              <span className="font-bold">{cert.name}</span> — {cert.issuer}, {cert.date}
              {cert.id && ` (ID: ${cert.id})`}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {data.projects && data.projects.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3 text-gray-900 uppercase border-b border-gray-400 pb-1">
            Projects
          </h2>
          {data.projects.map((project, idx) => (
            <div key={idx} className="mb-3">
              <div className="font-bold text-gray-900">{project.name}</div>
              <p className="text-sm text-gray-800 mb-1">{project.description}</p>
              <p className="text-sm text-gray-700">
                Technologies: {project.technologies.join(', ')}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
