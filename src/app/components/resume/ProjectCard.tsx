import { ThemeVariant, Project } from '@/types/resume';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  theme: ThemeVariant;
  variant?: 'default' | 'compact';
}

export function ProjectCard({ project, theme, variant = 'default' }: ProjectCardProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'accent':
        return { primary: '#2563eb', secondary: '#1e40af', text: '#374151', accent: '#dbeafe' };
      case 'dark':
        return { primary: '#1f2937', secondary: '#374151', text: '#4b5563', accent: '#e5e7eb' };
      default:
        return { primary: '#374151', secondary: '#6b7280', text: '#4b5563', accent: '#f3f4f6' };
    }
  };

  const colors = getThemeColors();

  if (variant === 'compact') {
    return (
      <div className="mb-3">
        <h3 className="font-semibold mb-1" style={{ color: colors.primary }}>
          {project.name}
          {project.link && <ExternalLink className="inline w-3 h-3 ml-1" />}
        </h3>
        <p className="text-sm mb-1" style={{ color: colors.text }}>
          {project.description}
        </p>
      </div>
    );
  }

  // Default variant
  return (
    <div className="mb-4">
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-semibold" style={{ color: colors.primary }}>
          {project.name}
        </h3>
        {project.link && (
          <ExternalLink className="w-4 h-4 flex-shrink-0" style={{ color: colors.secondary }} />
        )}
      </div>
      <p className="text-sm mb-2" style={{ color: colors.text }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx}
            className="text-xs px-2 py-0.5 rounded"
            style={{ backgroundColor: colors.accent, color: colors.primary }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
