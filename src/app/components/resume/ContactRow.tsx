import { LucideIcon } from 'lucide-react';
import { ThemeVariant } from '@/types/resume';

interface ContactRowProps {
  icon: LucideIcon;
  text: string;
  theme: ThemeVariant;
}

export function ContactRow({ icon: Icon, text, theme }: ContactRowProps) {
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

  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: getIconColor() }} />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
