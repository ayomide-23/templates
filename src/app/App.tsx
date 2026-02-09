import { useState } from 'react';
import { TemplateGallery } from '@/app/components/TemplateGallery';
import { TemplateViewer } from '@/app/components/TemplateViewer';
import { templateMetadata } from '@/data/templateMetadata';
import { ThemeVariant } from '@/types/resume';

export default function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState<number | null>(null);
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('neutral');

  const handleTemplateSelect = (id: number) => {
    setSelectedTemplateId(id);
    setCurrentTheme('neutral');
  };

  const handleBackToGallery = () => {
    setSelectedTemplateId(null);
  };

  const selectedTemplate = templateMetadata.find(t => t.id === selectedTemplateId);

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedTemplateId === null ? (
        <TemplateGallery onSelectTemplate={handleTemplateSelect} />
      ) : (
        <TemplateViewer
          templateId={selectedTemplateId}
          template={selectedTemplate!}
          theme={currentTheme}
          onThemeChange={setCurrentTheme}
          onBack={handleBackToGallery}
        />
      )}
    </div>
  );
}
