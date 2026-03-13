import { ArrowLeft, Download, Palette } from 'lucide-react';
import { ResumeData, TemplateMetadata, ThemeVariant } from '@/types/resume';
import { getSampleDataByTemplate } from '@/data/sampleData';
import { getTemplateComponent } from '@/app/components/templates';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const sampleData = getSampleDataByTemplate(templateId);
  const [resumeData, setResumeData] = useState<ResumeData>(sampleData);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [usingSample, setUsingSample] = useState(true);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const location = useLocation();
  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const resumeId = query.get('resumeId');
  const resumeApi = query.get('resumeApi') || 'http://localhost:5001';

  const normalizeText = (value: unknown) => (value ? String(value).trim() : '');
  const splitToList = (value: unknown) => {
    const text = normalizeText(value);
    if (!text) return [];
    return text
      .split(/\n|•|- /)
      .map(item => item.trim())
      .filter(Boolean);
  };
  const splitComma = (value: unknown) => {
    const text = normalizeText(value);
    if (!text) return [];
    return text
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
  };

  const mapResumeData = (payload: any): ResumeData => {
    const info = payload?.personalInfo || {};
    const experience = Array.isArray(payload?.experience) ? payload.experience : [];
    const education = Array.isArray(payload?.education) ? payload.education : [];
    const skills = Array.isArray(payload?.skills) ? payload.skills : [];
    const projects = Array.isArray(payload?.projects) ? payload.projects : [];
    const certifications = Array.isArray(payload?.certifications) ? payload.certifications : [];
    const languages = Array.isArray(payload?.languages) ? payload.languages : [];

    const title =
      normalizeText(payload?.title) ||
      normalizeText(experience[0]?.jobTitle) ||
      normalizeText(experience[0]?.jobtitle) ||
      '';

    return {
      name: normalizeText(info.fullName) || 'Your Name',
      title,
      email: normalizeText(info.email),
      phone: normalizeText(info.phone),
      location: normalizeText(info.location),
      website: normalizeText(info.portfolio),
      linkedin: normalizeText(info.linkedin),
      portfolio: normalizeText(info.portfolio),
      summary: normalizeText(payload?.summary),
      workExperience: experience.map((exp: any) => ({
        company: normalizeText(exp.company),
        jobTitle: normalizeText(exp.jobTitle),
        location: normalizeText(exp.location),
        startDate: normalizeText(exp.startDate),
        endDate: normalizeText(exp.isCurrent ? 'Present' : exp.endDate),
        description: splitToList(exp.description)
      })),
      education: education.map((edu: any) => ({
        institution: normalizeText(edu.schoolName),
        degree: normalizeText(edu.degree),
        field: normalizeText(edu.fieldOfStudy),
        location: normalizeText(edu.location),
        graduationDate: normalizeText(edu.endDate || edu.startDate),
      })),
      skills: skills
        .map((skill: any) => normalizeText(skill.skillName || skill.skillname))
        .filter(Boolean),
      projects: projects.map((project: any) => ({
        name: normalizeText(project.Title),
        description: normalizeText(project.Description),
        technologies: splitComma(project.Technologies),
        link: normalizeText(project.Link)
      })),
      certificates: certifications.map((cert: any) => ({
        name: normalizeText(cert.Name),
        issuer: normalizeText(cert.Organisation),
        date: normalizeText(cert.Date),
      })),
      languages: languages.map((lang: any) => ({
        name: normalizeText(lang.Language),
        proficiency: normalizeText(lang.Proficiency),
      }))
    };
  };

  useEffect(() => {
    if (!resumeId) {
      setResumeData(sampleData);
      setUsingSample(true);
      return;
    }

    const fetchResume = async () => {
      try {
        setFetchError(null);
        const response = await fetch(`${resumeApi}/api/resumes/${resumeId}`, {
          headers: {
            'ngrok-skip-browser-warning': 'true'
          }
        });
        const contentType = response.headers.get('content-type') || '';
        if (!response.ok) {
          throw new Error(`Resume not found (${response.status})`);
        }
        if (!contentType.includes('application/json')) {
          const text = await response.text();
          throw new Error(`Expected JSON but got: ${text.slice(0, 60)}...`);
        }
        const result = await response.json();
        const mapped = mapResumeData(result.data || result);
        setResumeData(mapped);
        setUsingSample(false);
      } catch (err: any) {
        console.error('Failed to fetch resume', err);
        setFetchError(err?.message || 'Failed to load resume');
        setResumeData(sampleData);
        setUsingSample(true);
      }
    };

    fetchResume();
  }, [resumeId, resumeApi, sampleData]);
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
      {/* <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
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
      </header> */}

      {/* Template Preview */}
      <main className="max-w-full mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-12">
        <div className="mb-4 text-xs text-gray-600">
          {resumeId ? (
            <>
              Data source: {usingSample ? 'Sample (fallback)' : 'Live resume'}
              {fetchError && <span className="text-red-600"> • {fetchError}</span>}
            </>
          ) : (
            'Data source: Sample (no resumeId provided)'
          )}
        </div>
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-3 sm:p-8">
            <div
              ref={resumeRef}
              className="mx-auto"
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
