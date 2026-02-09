import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';
import { ThemeVariant } from '@/types/resume';

interface ResumeHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  theme: ThemeVariant;
  variant?: 'default' | 'centered' | 'minimal' | 'split';
}

export function ResumeHeader({
  name,
  title,
  email,
  phone,
  location,
  website,
  linkedin,
  github,
  theme,
  variant = 'default'
}: ResumeHeaderProps) {
  const getThemeColors = () => {
    switch (theme) {
      case 'accent':
        return { primary: '#2563eb', secondary: '#1e40af', text: '#1e3a8a' };
      case 'dark':
        return { primary: '#1f2937', secondary: '#111827', text: '#374151' };
      default:
        return { primary: '#4b5563', secondary: '#6b7280', text: '#374151' };
    }
  };

  const colors = getThemeColors();

  if (variant === 'centered') {
    return (
      <div className="text-center mb-8 pb-6 border-b-2" style={{ borderColor: colors.primary }}>
        <h1 className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>
          {name}
        </h1>
        <p className="text-xl mb-4" style={{ color: colors.text }}>
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: colors.text }}>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          {website && (
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>{website}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="mb-6">
        <h1 className="text-5xl font-bold mb-1" style={{ color: colors.primary }}>
          {name}
        </h1>
        <p className="text-lg mb-3" style={{ color: colors.text }}>
          {title}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm" style={{ color: colors.text }}>
          <span>{email}</span>
          <span>•</span>
          <span>{phone}</span>
          <span>•</span>
          <span>{location}</span>
          {website && (
            <>
              <span>•</span>
              <span>{website}</span>
            </>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'split') {
    return (
      <div className="mb-8 pb-6 border-b" style={{ borderColor: colors.primary }}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-1" style={{ color: colors.primary }}>
              {name}
            </h1>
            <p className="text-xl" style={{ color: colors.text }}>
              {title}
            </p>
          </div>
          <div className="text-right text-sm space-y-1" style={{ color: colors.text }}>
            <div className="flex items-center justify-end gap-2">
              <span>{email}</span>
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>{phone}</span>
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>{location}</span>
              <MapPin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>
        {name}
      </h1>
      <p className="text-xl mb-4" style={{ color: colors.text }}>
        {title}
      </p>
      <div className="flex flex-wrap gap-4 text-sm" style={{ color: colors.text }}>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        {website && (
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{website}</span>
          </div>
        )}
        {linkedin && (
          <div className="flex items-center gap-2">
            <Linkedin className="w-4 h-4" />
            <span>{linkedin}</span>
          </div>
        )}
        {github && (
          <div className="flex items-center gap-2">
            <Github className="w-4 h-4" />
            <span>{github}</span>
          </div>
        )}
      </div>
    </div>
  );
}
