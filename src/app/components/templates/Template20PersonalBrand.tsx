import { TemplateProps } from './index';
import { SectionTitle } from '../resume/SectionTitle';
import { JobCard } from '../resume/JobCard';
import { EducationCard } from '../resume/EducationCard';
import { SkillPill } from '../resume/SkillPill';
import { SocialLink } from '../resume/SocialLink';
import { Mail, Phone, MapPin, Globe} from 'lucide-react';
export function Template20PersonalBrand({ data, theme }: TemplateProps) {
  const getAccentColor = () => {
    switch (theme) {
      case 'accent':
        return '#2563eb';
      case 'dark':
        return '#1f2937';
      default:
        return '#ec4899';
    }
  };

  return (
    <div className="h-full overflow-auto bg-white">
      {/* Hero Branding Section */}
      <div 
        className="px-12 py-16 text-white"
        style={{ 
          background: `linear-gradient(135deg, ${getAccentColor()} 0%, #a855f7 100%)`
        }}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-3">{data.name}</h1>
          <p className="text-2xl mb-6 text-white text-opacity-90">{data.title}</p>
          
          {/* Tagline */}
          <p className="text-lg mb-6 text-white text-opacity-80 italic">
            "Transforming ideas into impactful digital experiences"
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-white text-black bg-opacity-20 px-4 py-2 rounded-full">
              <Mail className="w-4 h-4" />
              <span className="text-sm">{data.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white text-black bg-opacity-20 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4" />
              <span className="text-sm">{data.phone}</span>
            </div>
            {data.website && (
              <div className="flex items-center gap-2 bg-white text-black bg-opacity-20 px-4 py-2 rounded-full">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{data.website}</span>
              </div>
            )}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {/* {data.linkedin && (
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Linkedin className="w-5 h-5" />
              </div>
            )}
            {data.github && (
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
                <Github className="w-5 h-5" />
              </div>
            )} */}
            {/* <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all">
              <Twitter className="w-5 h-5" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-12 py-8">
        {/* About */}
        <section className="mb-8">
          <SectionTitle title="About Me" theme={theme} variant="bold" />
          <p className="text-base leading-relaxed text-gray-700">{data.summary}</p>
        </section>

        {/* What I Do / Skills */}
        <section className="mb-8">
          <SectionTitle title="What I Do" theme={theme} variant="bold" />
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, idx) => (
              <SkillPill key={idx} skill={skill} theme={theme} variant="filled" />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <SectionTitle title="Experience" theme={theme} variant="bold" />
          {data.workExperience.map((job, idx) => (
            <JobCard key={idx} job={job} theme={theme} variant="detailed" />
          ))}
        </section>

        {/* Featured Work / Projects */}
        {data.projects && data.projects.length > 0 && (
          <section className="mb-8">
            <SectionTitle title="Featured Work" theme={theme} variant="bold" />
            <div className="grid grid-cols-2 gap-6">
              {data.projects.map((project, idx) => (
                <div key={idx} className="border-2 rounded-lg overflow-hidden" style={{ borderColor: getAccentColor() }}>
                  {/* Project Image Placeholder */}
                  {/* <div 
                    className="h-40"
                    style={{ 
                      background: `linear-gradient(135deg, ${getAccentColor()}20 0%, #a855f740 100%)`
                    }}
                  ></div> */}
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{project.name}</h3>
                    <p className="text-sm text-gray-700 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, tidx) => (
                        <span key={tidx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section>
          <SectionTitle title="Education" theme={theme} variant="bold" />
          <div className="grid grid-cols-2 gap-6">
            {data.education.map((edu, idx) => (
              <EducationCard key={idx} education={edu} theme={theme} variant="default" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
