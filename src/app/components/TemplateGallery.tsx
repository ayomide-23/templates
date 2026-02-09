import { templateMetadata } from '@/data/templateMetadata';
import { FileText, Layers } from 'lucide-react';

interface TemplateGalleryProps {
  onSelectTemplate: (id: number) => void;
}

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Layers className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Resume Template Gallery</h1>
              <p className="text-gray-600 mt-1">20 Production-Quality Resume Templates</p>
            </div>
          </div>
          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>3 color themes per template</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>A4 ready (2480×3508px)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Web preview (1200×1700px)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templateMetadata.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all hover:scale-105 text-left"
            >
              {/* Template Preview */}
              <div className="aspect-[17/24] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>
                <div className="relative z-10 text-center p-6">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                  <div className="text-6xl font-bold text-gray-300">
                    {String(template.id).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                  <span className="text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Template
                  </span>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {String(template.id).padStart(2, '0')} — {template.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {template.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {template.industry}
                  </span>
                  {template.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Export Formats</h4>
              <ul className="space-y-1">
                <li>• A4 High Resolution: 2480×3508px (300 DPI)</li>
                <li>• A4 Print Quality: 4960×7016px (2x)</li>
                <li>• Web Preview: 1200×1700px</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
              <ul className="space-y-1">
                <li>• 3 color themes: Neutral, Accent, Dark</li>
                <li>• ATS-friendly variants included</li>
                <li>• Professional fonts & typography</li>
                <li>• WCAG AA contrast compliance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Industries Covered</h4>
              <ul className="space-y-1">
                <li>• Tech & Engineering</li>
                <li>• Creative & Design</li>
                <li>• Corporate & Finance</li>
                <li>• Healthcare & Academia</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
