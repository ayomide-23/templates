import { ThemeVariant, Education } from '@/types/resume';
import { MapPin, Calendar, Award } from 'lucide-react';

interface EducationCardProps {
  education: Education;
  theme: ThemeVariant;
  variant?: 'default' | 'compact' | 'detailed';
}

export function EducationCard({ education, theme, variant = 'default' }: EducationCardProps) {
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
      <div className="mb-3">
        <div className="flex justify-between items-baseline">
          <h3 className="font-semibold" style={{ color: colors.primary }}>
            {education.degree} in {education.field}
          </h3>
          <span className="text-sm" style={{ color: colors.secondary }}>
            {education.graduationDate}
          </span>
        </div>
        <div className="text-sm" style={{ color: colors.secondary }}>
          {education.institution}
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className="mb-5">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-semibold text-lg" style={{ color: colors.primary }}>
              {education.degree}
            </h3>
            <p className="text-sm" style={{ color: colors.text }}>
              {education.field}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm" style={{ color: colors.secondary }}>
            <Calendar className="w-4 h-4" />
            <span>{education.graduationDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm mt-2" style={{ color: colors.secondary }}>
          <span className="font-medium">{education.institution}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{education.location}</span>
          </div>
          {education.gpa && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>GPA: {education.gpa}</span>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="mb-4">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="font-semibold" style={{ color: colors.primary }}>
          {education.degree} in {education.field}
        </h3>
        <span className="text-sm" style={{ color: colors.secondary }}>
          {education.graduationDate}
        </span>
      </div>
      <div className="text-sm" style={{ color: colors.secondary }}>
        {education.institution} | {education.location}
        {education.gpa && <span> | GPA: {education.gpa}</span>}
      </div>
    </div>
  );
}
