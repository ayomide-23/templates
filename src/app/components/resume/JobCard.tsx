import { ThemeVariant, WorkExperience } from '@/types/resume';
import { MapPin, Calendar } from 'lucide-react';

interface JobCardProps {
  job: WorkExperience;
  theme: ThemeVariant;
  variant?: 'default' | 'compact' | 'detailed' | 'timeline';
}

export function JobCard({ job, theme, variant = 'default' }: JobCardProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'accent':
        return { primary: '#2563eb', secondary: '#1e40af', text: '#374151' };
      case 'dark':
        return { primary: '#1f2937', secondary: '#374151', text: '#4b5563' };
      default:
        return { primary: '#374151', secondary: '#6b7280', text: '#4b5563' };
    }
  };

  const colors = getThemeColors();

  if (variant === 'compact') {
    return (
      <div className="mb-4">
        <div className="flex justify-between items-baseline mb-1">
          <h3 className="font-semibold" style={{ color: colors.primary }}>
            {job.jobTitle}
          </h3>
          <span className="text-sm" style={{ color: colors.secondary }}>
            {job.startDate} - {job.endDate}
          </span>
        </div>
        <div className="text-sm mb-2" style={{ color: colors.secondary }}>
          {job.company} • {job.location}
        </div>
        <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: colors.text }}>
          {job.description.slice(0, 2).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'timeline') {
    return (
      <div className="flex gap-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.primary }}></div>
          <div className="w-0.5 h-full mt-2" style={{ backgroundColor: colors.secondary }}></div>
        </div>
        <div className="flex-1 pb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-lg" style={{ color: colors.primary }}>
                {job.jobTitle}
              </h3>
              <p className="font-medium" style={{ color: colors.secondary }}>
                {job.company}
              </p>
            </div>
            <div className="text-sm text-right" style={{ color: colors.secondary }}>
              <div>{job.startDate} - {job.endDate}</div>
              <div className="flex items-center justify-end gap-1 mt-1">
                <MapPin className="w-3 h-3" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: colors.text }}>
            {job.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className="mb-6 pb-6 border-b last:border-b-0" style={{ borderColor: '#e5e7eb' }}>
        <div className="mb-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-semibold" style={{ color: colors.primary }}>
              {job.jobTitle}
            </h3>
            <div className="flex items-center gap-1 text-sm" style={{ color: colors.secondary }}>
              <Calendar className="w-4 h-4" />
              <span>{job.startDate} - {job.endDate}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm" style={{ color: colors.secondary }}>
            <span className="font-medium">{job.company}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <ul className="space-y-1.5 text-sm" style={{ color: colors.text }}>
          {job.description.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-gray-400 mt-1">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Default variant
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold" style={{ color: colors.primary }}>
          {job.jobTitle}
        </h3>
        <span className="text-sm" style={{ color: colors.secondary }}>
          {job.startDate} - {job.endDate}
        </span>
      </div>
      <div className="text-sm font-medium mb-2" style={{ color: colors.secondary }}>
        {job.company} | {job.location}
      </div>
      <ul className="list-disc list-outside ml-4 space-y-1 text-sm" style={{ color: colors.text }}>
        {job.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
