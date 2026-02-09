import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Template10InfographicLight({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#6366f1';
    }
  };

  // Create skill levels (for visualization)
  const skillsWithLevels = data.skills.slice(0, 8).map((skill, idx) => ({
    name: skill,
    level: idx < 4 ? 90 : 75 // Mock skill levels
  }));

  return (
    <div className="p-10 h-full overflow-auto text-gray-900 bg-white">
      {/* Header with Visual Elements */}
      <div className="mb-8 pb-6 border-b-2" style={{ borderColor: getAccentColor() }}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: getAccentColor() }}>
              {data.name}
            </h1>
            <p className="text-xl text-gray-700">{data.title}</p>
          </div>
          
          {/* Key Metrics */}
          {data.metrics && (
            <div className="grid grid-cols-2 gap-3 text-center">
              {data.metrics.slice(0, 4).map((metric, idx) => (
                <div key={idx} className="p-2 bg-gray-50 rounded">
                  <div className="text-2xl font-bold" style={{ color: getAccentColor() }}>
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex gap-6 text-sm text-gray-600 mt-4">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{data.location}</span>
          </div>
          {data.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>{data.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <SectionTitle title="About" theme={theme} variant="accent-bar" />
        <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
      </section>

      {/* Skills with Visual Bars */}
      <section className="mb-6 p-4 bg-gray-50 rounded-lg">
        <SectionTitle title="Skills" theme={theme} variant="minimal" />
        <div className="grid grid-cols-2 gap-3">
          {skillsWithLevels.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-800">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: getAccentColor()
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <SectionTitle title="Experience" theme={theme} variant="accent-bar" />
        {data.workExperience.map((job, idx) => (
          <JobCard key={idx} job={job} theme={theme} variant="default" />
        ))}
      </section>

      {/* Education & Certifications Grid */}
      <div className="grid grid-cols-2 gap-6">
        <section>
          <SectionTitle title="Education" theme={theme} variant="accent-bar" />
          {data.education.map((edu, idx) => (
            <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
          ))}
        </section>

        {data.certificates && data.certificates.length > 0 && (
          <section>
            <SectionTitle title="Certifications" theme={theme} variant="accent-bar" />
            {data.certificates.map((cert, idx) => (
              <div key={idx} className="mb-3 text-sm">
                <div className="font-semibold text-gray-800">{cert.name}</div>
                <div className="text-gray-600">{cert.issuer}</div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
