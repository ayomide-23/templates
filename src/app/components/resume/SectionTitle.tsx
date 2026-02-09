import { ThemeVariant } from '@/types/resume';

interface SectionTitleProps {
  title: string;
  theme: ThemeVariant;
  variant?: 'default' | 'underline' | 'bold' | 'minimal' | 'accent-bar';
}

export function SectionTitle({ title, theme, variant = 'default' }: SectionTitleProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'accent':
        return { primary: '#2563eb', accent: '#dbeafe' };
      case 'dark':
        return { primary: '#1f2937', accent: '#e5e7eb' };
      default:
        return { primary: '#374151', accent: '#f3f4f6' };
    }
  };

  const colors = getThemeColors();

  if (variant === 'underline') {
    return (
      <div className="mb-4">
        <h2 
          className="text-xl font-semibold pb-2 border-b-2"
          style={{ color: colors.primary, borderColor: colors.primary }}
        >
          {title}
        </h2>
      </div>
    );
  }

  if (variant === 'bold') {
    return (
      <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        {title}
      </h2>
    );
  }

  if (variant === 'minimal') {
    return (
      <h2 className="text-sm uppercase tracking-wider font-semibold mb-3" style={{ color: colors.primary }}>
        {title}
      </h2>
    );
  }

  if (variant === 'accent-bar') {
    return (
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6" style={{ backgroundColor: colors.primary }}></div>
          <h2 className="text-xl font-semibold" style={{ color: colors.primary }}>
            {title}
          </h2>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <h2 className="text-lg font-semibold mb-3" style={{ color: colors.primary }}>
      {title}
    </h2>
  );
}
