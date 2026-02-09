import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { Award, Target } from 'lucide-react';

export function Template17SalesBusiness({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#10b981';
    }
  };

  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Header */}
      <div className="mb-6 pb-4 border-b-2" style={{ borderColor: getAccentColor() }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>
          {data.name}
        </h1>
        <p className="text-xl text-gray-700 mb-3">{data.title}</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.location}</span>
        </div>
      </div>

      {/* KPI Highlights */}
      {data.metrics && data.metrics.length > 0 && (
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5" style={{ color: getAccentColor() }} />
            <h2 className="font-bold text-lg text-gray-900">Key Performance Indicators</h2>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {data.metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-lg text-center border-2"
                style={{ borderColor: getAccentColor() }}
              >
                <div className="text-2xl font-bold" style={{ color: getAccentColor() }}>
                  {metric.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle title="Professional Summary" theme={theme} variant="accent-bar" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Work Experience with Achievement Focus */}
      <section className="mb-6">
        <SectionTitle title="Sales & Business Experience" theme={theme} variant="accent-bar" />
        {data.workExperience.map((job, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{job.jobTitle}</h3>
                <p className="font-medium text-gray-700">{job.company}</p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div>{job.startDate} - {job.endDate}</div>
                <div>{job.location}</div>
              </div>
            </div>
            <div className="space-y-2">
              {job.description.map((item, didx) => (
                <div key={didx} className="flex gap-2 text-sm">
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: getAccentColor() }} />
                  <span className="text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-8">
        {/* Skills */}
        <section>
          <SectionTitle title="Core Skills" theme={theme} variant="accent-bar" />
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <SkillPill key={idx} skill={skill} theme={theme} variant="outlined" />
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section>
          <SectionTitle title="Education" theme={theme} variant="accent-bar" />
          {data.education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
          ))}
          
          {data.certificates && data.certificates.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-sm text-gray-900 mb-2">Certifications</h3>
              {data.certificates.map((cert, idx) => (
                <div key={idx} className="text-sm text-gray-700 mb-1">
                  • {cert.name}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
