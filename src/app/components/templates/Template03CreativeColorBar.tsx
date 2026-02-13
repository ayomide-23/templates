import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function Template03CreativeColorBar({ data, theme }: TemplateProps) {
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

  const accentColor = getAccentColor();

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Bold Color Bar Header */}
      <div className="flex-shrink-0 h-32" style={{ backgroundColor: accentColor }}>
        <div className="px-6 lg:px-12 pt-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-1">{data.name}</h1>
          <p className="text-lg lg:text-xl text-white text-opacity-90">{data.title}</p>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="flex-shrink-0 px-6 lg:px-12 py-3 lg:py-4 bg-gray-50 border-b border-gray-200 overflow-x-auto">
        <div className="flex flex-wrap gap-4 lg:gap-6 text-xs lg:text-sm text-gray-700">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Mail className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Phone className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.location}</span>
          </div>
          {data.website && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <Globe className="w-4 h-4" style={{ color: accentColor }} />
              <span>{data.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 lg:px-12 py-6 lg:py-8 overflow-y-auto">
        {/* Summary */}
        <section className="mb-6">
          <SectionTitle title="Professional Summary" theme={theme} variant="minimal" />
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </section>

        {/* Work Experience */}
        <section className="mb-6">
          <SectionTitle title="Experience" theme={theme} variant="minimal" />
          {data.workExperience.map((job, idx) => (
            <JobCard key={idx} job={job} theme={theme} variant="compact" />
          ))}
        </section>

        {/* Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Education */}
          <section>
            <SectionTitle title="Education" theme={theme} variant="minimal" />
            {data.education.map((edu, idx) => (
              <EducationCard key={idx} education={edu} theme={theme} variant="compact" />
            ))}
          </section>

          {/* Skills */}
          <section>
            <SectionTitle title="Skills" theme={theme} variant="minimal" />
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <SkillPill key={idx} skill={skill} theme={theme} variant="outlined" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
