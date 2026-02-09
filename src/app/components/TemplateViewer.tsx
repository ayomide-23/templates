import { ArrowLeft, Download, Palette } from 'lucide-react';
import { TemplateMetadata, ThemeVariant } from '@/types/resume';
import { getSampleDataByTemplate } from '@/data/sampleData';
import { getTemplateComponent } from '@/app/components/templates';
import { useRef, useState } from 'react';
import domtoimage from 'dom-to-image-more';

interface TemplateViewerProps {
  templateId: number;
  template: TemplateMetadata;
  theme: ThemeVariant;
  onThemeChange: (theme: ThemeVariant) => void;
  onBack: () => void;
}

export function TemplateViewer({
  templateId,
  template,
  theme,
  onThemeChange,
  onBack
}: TemplateViewerProps) {
  const TemplateComponent = getTemplateComponent(templateId);
  const resumeData = getSampleDataByTemplate(templateId);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  // Image Export using dom-to-image-more
  const handleExport = async (size: 'print' | 'web') => {
    if (!resumeRef.current) return;

    try {
      setIsExporting(true);

      // Clone the element
      const clonedElement = resumeRef.current.cloneNode(true) as HTMLElement;
      
      // Remove visual artifacts (borders, shadows, etc)
      const removeVisualArtifacts = (element: HTMLElement) => {
        const walker = document.createTreeWalker(
          element,
          NodeFilter.SHOW_ELEMENT,
          null
        );
        
        const elements: HTMLElement[] = [element];
        let node;
        while ((node = walker.nextNode())) {
          elements.push(node as HTMLElement);
        }
        
        elements.forEach((el) => {
          el.style.boxShadow = 'none';
          el.style.outline = 'none';
          el.style.border = 'none';
        });
      };
      
      // Append clone to body (hidden, but able to scroll)
      clonedElement.style.position = 'absolute';
      clonedElement.style.left = '-9999px';
      clonedElement.style.top = '0';
      clonedElement.style.boxShadow = 'none';
      clonedElement.style.overflow = 'visible';
      document.body.appendChild(clonedElement);
      
      // Remove borders and shadows
      removeVisualArtifacts(clonedElement);
      
      // Calculate page dimensions (A4 aspect ratio: 794 × 1123)
      const pageWidth = clonedElement.offsetWidth;
      const pageHeight = Math.round(pageWidth * 1.414); // A4 aspect ratio
      const fullHeight = clonedElement.scrollHeight;
      
      // Calculate number of pages needed
      const totalPages = Math.ceil(fullHeight / pageHeight);
      
      const pixelRatio = size === 'print' ? 3 : 2;

      // Export each page
      for (let pageNum = 0; pageNum < totalPages; pageNum++) {
        // Create a wrapper for this specific page
        const pageWrapper = document.createElement('div');
        pageWrapper.style.position = 'absolute';
        pageWrapper.style.left = '-19999px';
        pageWrapper.style.top = '0';
        pageWrapper.style.width = pageWidth + 'px';
        pageWrapper.style.height = pageHeight + 'px';
        pageWrapper.style.overflow = 'hidden';
        pageWrapper.style.backgroundColor = '#ffffff';
        
        // Clone the content again for this page
        const pageContent = clonedElement.cloneNode(true) as HTMLElement;
        pageContent.style.position = 'relative';
        pageContent.style.top = (-pageNum * pageHeight) + 'px';
        pageContent.style.left = '0';
        
        pageWrapper.appendChild(pageContent);
        document.body.appendChild(pageWrapper);
        
        // Capture this page
        const blob = await domtoimage.toBlob(pageWrapper, {
          cacheBust: true,
          pixelRatio: pixelRatio,
        });

        // Download this page
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const pageSuffix = totalPages > 1 ? `-page${pageNum + 1}` : '';
        a.download = `resume-${template.name}-${theme}-${size}${pageSuffix}.png`;
        a.click();
        URL.revokeObjectURL(url);
        
        // Remove page wrapper
        document.body.removeChild(pageWrapper);
        
        // Small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Remove cloned element
      document.body.removeChild(clonedElement);
      
      setIsExporting(false);
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed. Check console for details.');
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Gallery</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h2 className="font-semibold text-gray-900">
                  {String(templateId).padStart(2, '0')} — {template.name}
                </h2>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Selector */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <Palette className="w-4 h-4 text-gray-500 ml-2" />
                {(['neutral', 'accent', 'dark'] as ThemeVariant[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => onThemeChange(t)}
                    className={`px-3 py-1.5 rounded text-sm transition-colors ${
                      theme === t
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>

              {/* Export dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                  disabled={isExporting}
                >
                  <Download className="w-4 h-4" />
                  <span>{isExporting ? 'Exporting...' : 'Export'}</span>
                </button>

                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                  <div className="py-2">
                    <button
                      onClick={() => handleExport('print')}
                      disabled={isExporting}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      A4 Print (2480×3508)
                    </button>
                    <button
                      onClick={() => handleExport('web')}
                      disabled={isExporting}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Web Preview (1200×1700)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Template Preview */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-8">
            {/* THIS IS THE RESUME CONTAINER */}
            <div
              ref={resumeRef}
              className="mx-auto bg-white shadow-lg"
              style={{
                width: '100%',
                maxWidth: '794px',
                aspectRatio: '1/1.414',
              }}
            >
              <TemplateComponent data={resumeData} theme={theme} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
