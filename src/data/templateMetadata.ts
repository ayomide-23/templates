import { TemplateMetadata } from '@/types/resume';

export const templateMetadata: TemplateMetadata[] = [
  {
    id: 1,
    name: 'Classic Clean',
    slug: 'classic-clean',
    description: 'Single column layout with strong header section and clean typography',
    industry: 'General / Traditional',
    fonts: ['Inter', 'System UI'],
    features: ['Single column', 'Clear hierarchy', 'Print-friendly'],
    recommendedFor: 'Traditional industries, all experience levels'
  },
  {
    id: 2,
    name: 'Modern Two-Column',
    slug: 'modern-two-column',
    description: 'Left sidebar for contact and skills, main content area for experience',
    industry: 'Tech / Creative',
    fonts: ['Inter'],
    features: ['Two-column layout', 'Sidebar navigation', 'Visual hierarchy'],
    recommendedFor: 'Tech professionals, designers, developers'
  },
  {
    id: 3,
    name: 'Creative Color Bar',
    slug: 'creative-color-bar',
    description: 'Bold horizontal accent bar with minimal body design',
    industry: 'Creative / Marketing',
    fonts: ['Inter', 'Space Grotesk'],
    features: ['Bold accent', 'Minimal design', 'Eye-catching'],
    recommendedFor: 'Creative professionals, marketing, design'
  },
  {
    id: 4,
    name: 'Executive Minimal',
    slug: 'executive-minimal',
    description: 'Large name section, minimal sections with lots of white space',
    industry: 'Executive / Leadership',
    fonts: ['Merriweather', 'Inter'],
    features: ['Minimal design', 'Generous spacing', 'Elegant typography'],
    recommendedFor: 'C-level executives, senior leadership'
  },
  {
    id: 5,
    name: 'Technical CV',
    slug: 'technical-cv',
    description: 'Skills matrix, project highlights, and compact job cards',
    industry: 'Technology / Engineering',
    fonts: ['Inter', 'JetBrains Mono'],
    features: ['Skills matrix', 'Technical focus', 'Project showcase'],
    recommendedFor: 'Software engineers, developers, technical roles'
  },
  {
    id: 6,
    name: 'Designer Portfolio',
    slug: 'designer-portfolio',
    description: 'Image placeholders and project thumbnails with descriptions',
    industry: 'Design / Creative',
    fonts: ['Inter', 'Playfair Display'],
    features: ['Visual showcase', 'Portfolio integration', 'Image support'],
    recommendedFor: 'Designers, artists, creative professionals'
  },
  {
    id: 7,
    name: 'Academic Research',
    slug: 'academic-research',
    description: 'Publications list and education prominence for academic positions',
    industry: 'Academia / Research',
    fonts: ['Merriweather', 'Lora'],
    features: ['Publications section', 'Research focus', 'Academic formatting'],
    recommendedFor: 'Researchers, professors, PhD candidates'
  },
  {
    id: 8,
    name: 'One-Page Timeline',
    slug: 'timeline',
    description: 'Vertical timeline showing career progression',
    industry: 'General / Progressive',
    fonts: ['Inter'],
    features: ['Visual timeline', 'Career progression', 'Chronological focus'],
    recommendedFor: 'Mid to senior level professionals'
  },
  {
    id: 9,
    name: 'Functional Skills-First',
    slug: 'functional-skills',
    description: 'Skills and achievements highlighted before experience',
    industry: 'Career Change / General',
    fonts: ['Inter'],
    features: ['Skills-first layout', 'Achievement focus', 'Flexible format'],
    recommendedFor: 'Career changers, skills-focused roles'
  },
  {
    id: 10,
    name: 'Infographic Light',
    slug: 'infographic-light',
    description: 'Subtle charts for skills ratings and timeline accents',
    industry: 'Creative / Tech',
    fonts: ['Inter', 'Poppins'],
    features: ['Visual elements', 'Skill ratings', 'Modern design'],
    recommendedFor: 'Creative tech, data visualization roles'
  },
  {
    id: 11,
    name: 'ATS-Friendly',
    slug: 'ats-friendly',
    description: 'Simple single-column with no decorative elements for ATS parsing',
    industry: 'General / Corporate',
    fonts: ['Inter', 'Arial'],
    features: ['ATS optimized', 'Simple formatting', 'Text-focused'],
    recommendedFor: 'Large corporations, automated screening systems'
  },
  {
    id: 12,
    name: 'Creative Left Band',
    slug: 'creative-left-band',
    description: 'Full-height colored left band with initials or branding',
    industry: 'Creative / Design',
    fonts: ['Inter', 'Montserrat'],
    features: ['Bold sidebar', 'Personal branding', 'Visual impact'],
    recommendedFor: 'Creative directors, brand designers'
  },
  {
    id: 13,
    name: 'Modern Three-Column',
    slug: 'modern-three-column',
    description: 'Three-column grid for skills, certifications, and projects',
    industry: 'Tech / Multi-disciplinary',
    fonts: ['Inter'],
    features: ['Multi-column', 'Grid layout', 'Information dense'],
    recommendedFor: 'Multi-skilled professionals, consultants'
  },
  {
    id: 14,
    name: 'Minimal Sidebar',
    slug: 'minimal-sidebar',
    description: 'Slim sidebar with icons and minimal contact information',
    industry: 'Tech / Modern',
    fonts: ['Inter', 'SF Pro'],
    features: ['Compact sidebar', 'Icon-based', 'Clean design'],
    recommendedFor: 'Tech professionals, modern companies'
  },
  {
    id: 15,
    name: 'Corporate Template',
    slug: 'corporate',
    description: 'Formal grid-based layout with conservative palette',
    industry: 'Corporate / Finance',
    fonts: ['Georgia', 'Times New Roman'],
    features: ['Traditional design', 'Conservative', 'Professional'],
    recommendedFor: 'Finance, law, traditional corporate'
  },
  {
    id: 16,
    name: 'Startup Product',
    slug: 'startup-product',
    description: 'Bold headings with quick metrics section for impact',
    industry: 'Startup / Product',
    fonts: ['Inter', 'Space Grotesk'],
    features: ['Metrics focus', 'Bold typography', 'Impact-driven'],
    recommendedFor: 'Product managers, startup roles'
  },
  {
    id: 17,
    name: 'Sales Business Dev',
    slug: 'sales-business',
    description: 'Metrics and KPI highlights with achievement callouts',
    industry: 'Sales / Business',
    fonts: ['Inter', 'Open Sans'],
    features: ['KPI focus', 'Achievement highlights', 'Results-driven'],
    recommendedFor: 'Sales professionals, business development'
  },
  {
    id: 18,
    name: 'Healthcare Clinical',
    slug: 'healthcare-clinical',
    description: 'Certifications and licenses emphasized for medical professionals',
    industry: 'Healthcare / Medical',
    fonts: ['Inter', 'Lato'],
    features: ['Certification focus', 'License section', 'Professional'],
    recommendedFor: 'Healthcare professionals, clinicians'
  },
  {
    id: 19,
    name: 'Engineering Technical',
    slug: 'engineering-technical',
    description: 'Code snippets area and technology stack with icons',
    industry: 'Engineering / Development',
    fonts: ['Inter', 'Fira Code'],
    features: ['Tech stack display', 'Code focus', 'Technical layout'],
    recommendedFor: 'Software engineers, technical architects'
  },
  {
    id: 20,
    name: 'Personal Brand',
    slug: 'personal-brand',
    description: 'Prominent branding area with tagline and social links',
    industry: 'Entrepreneurship / Freelance',
    fonts: ['Inter', 'Playfair Display'],
    features: ['Personal branding', 'Social focus', 'Unique identity'],
    recommendedFor: 'Freelancers, consultants, entrepreneurs'
  }
];
