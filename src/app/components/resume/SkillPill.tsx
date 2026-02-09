import { ThemeVariant } from '@/types/resume';

interface SkillPillProps {
  skill: string;
  theme: ThemeVariant;
  variant?: 'default' | 'outlined' | 'minimal' | 'filled';
}

export function SkillPill({ skill, theme, variant = 'default' }: SkillPillProps) {
  const getThemeStyles = () => {
    switch (theme) {
      case 'accent':
        return {
          bg: '#dbeafe',
          border: '#2563eb',
          text: '#1e40af'
        };
      case 'dark':
        return {
          bg: '#e5e7eb',
          border: '#1f2937',
          text: '#1f2937'
        };
      default:
        return {
          bg: '#f3f4f6',
          border: '#6b7280',
          text: '#374151'
        };
    }
  };

  const styles = getThemeStyles();

  if (variant === 'outlined') {
    return (
      <span 
        className="px-3 py-1 text-sm rounded-full border"
        style={{ 
          borderColor: styles.border,
          color: styles.text,
          backgroundColor: 'transparent'
        }}
      >
        {skill}
      </span>
    );
  }

  if (variant === 'minimal') {
    return (
      <span className="text-sm" style={{ color: styles.text }}>
        {skill}
      </span>
    );
  }

  if (variant === 'filled') {
    return (
      <span 
        className="px-3 py-1.5 text-sm rounded font-medium"
        style={{ 
          backgroundColor: styles.border,
          color: 'white'
        }}
      >
        {skill}
      </span>
    );
  }

  // Default variant
  return (
    <span 
      className="px-3 py-1 text-sm rounded-full"
      style={{ 
        backgroundColor: styles.bg,
        color: styles.text
      }}
    >
      {skill}
    </span>
  );
}
