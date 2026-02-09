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
    <div className="h-full bg-white">
      {/* Bold Color Bar Header */}
      <div className="h-32" style={{ backgroundColor: accentColor }}>
        <div className="px-12 pt-12">
          <h1 className="text-4xl font-bold text-white mb-1">{data.name}</h1>
          <p className="text-xl text-white text-opacity-90">{data.title}</p>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="px-12 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: accentColor }} />
            <span>{data.location}</span>
          </div>
          {data.website && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" style={{ color: accentColor }} />
              <span>{data.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 py-8 overflow-auto">
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
        <div className="grid grid-cols-2 gap-8">
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
