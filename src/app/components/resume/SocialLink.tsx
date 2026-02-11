import { LucideIcon } from 'lucide-react';
import { ThemeVariant } from '@/types/resume';
import { cn } from '../ui/utils';

interface SocialLinkProps {
  icon: LucideIcon;
  url: string;
  theme: ThemeVariant;
  variant?: 'default' | 'icon-only';
  containerClassName?: string;
  textClassName?: string;
}

export function SocialLink({
  icon: Icon,
  url,
  theme,
  variant = 'default',
  containerClassName,
  textClassName,
}: SocialLinkProps) {
  const getIconColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#6b7280';
    }
  };

  if (variant === 'icon-only') {
    return (
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
        <Icon className="w-4 h-4" style={{ color: getIconColor() }} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2 text-sm", containerClassName)}>
      <Icon className="w-4 h-4" style={{ color: getIconColor() }} />
      <span className={cn("text-gray-700", textClassName)}>{url}</span>
    </div>
  );
}
