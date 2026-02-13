import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { TemplateGallery } from '@/app/components/TemplateGallery';
import { TemplateViewer } from '@/app/components/TemplateViewer';
import { templateMetadata } from '@/data/templateMetadata';
import { ThemeVariant } from '@/types/resume';
import { useState } from 'react';

function TemplateViewerWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('neutral');
  const navigate = useNavigate();

  const selectedTemplate = templateMetadata.find(t => t.slug === slug);

  const handleBackToGallery = () => {
    navigate('/');
  };

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template not found</h1>
          <button 
            onClick={handleBackToGallery}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <TemplateViewer
      templateId={selectedTemplate.id}
      template={selectedTemplate}
      theme={currentTheme}
      onThemeChange={setCurrentTheme}
      onBack={handleBackToGallery}
    />
  );
}

export default function App() {
  const navigate = useNavigate();

  const handleTemplateSelect = (id: number) => {
    const template = templateMetadata.find(t => t.id === id);
    if (template) {
      navigate(`/template/${template.slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<TemplateGallery onSelectTemplate={handleTemplateSelect} />} />
        <Route path="/template/:slug" element={<TemplateViewerWrapper />} />
      </Routes>
    </div>
  );
}
