import { ResumeData } from '@/types/resume';

// Template 1: Classic Clean - Software Engineer
export const template1Data: ResumeData = {
  name: 'Marcus Chen',
  title: 'Senior Software Engineer',
  email: 'marcus.chen@email.com',
  phone: '+1 (555) 234-5678',
  location: 'Seattle, WA',
  website: 'marcuschen.dev',
  linkedin: 'linkedin.com/in/marcuschen',
  github: 'github.com/marcuschen',
  portfolio: '',
  summary: 'Results-driven Senior Software Engineer with 9+ years of experience building scalable backend systems and cloud infrastructure. Expert in full-stack development with proven track record of optimizing system performance by 50% and reducing deployment time from hours to minutes. Passionate about clean code, testing, and mentoring junior developers.',
  workExperience: [
    {
      company: 'CloudTech Solutions',
      jobTitle: 'Senior Software Engineer',
      location: 'Seattle, WA',
      startDate: 'May 2020',
      endDate: 'Present',
      description: [
        'Lead development of microservices architecture serving 10M+ daily requests',
        'Implemented automated testing pipeline increasing code coverage from 40% to 92%',
        'Mentored team of 4 engineers on best practices and system design principles',
        'Reduced API latency by 60% through database optimization and caching strategies'
      ]
    },
    {
      company: 'DataFlow Systems',
      jobTitle: 'Software Engineer',
      location: 'San Jose, CA',
      startDate: 'Jun 2017',
      endDate: 'Apr 2020',
      description: [
        'Developed real-time data processing system handling 1M+ events per second',
        'Built RESTful APIs and GraphQL endpoints serving 50+ client applications',
        'Collaborated with DevOps to implement CI/CD pipeline reducing deployment errors by 80%',
        'Designed and implemented distributed caching layer improving response times by 45%'
      ]
    },
    {
      company: 'StartupXYZ',
      jobTitle: 'Junior Developer',
      location: 'San Francisco, CA',
      startDate: 'Aug 2015',
      endDate: 'May 2017',
      description: [
        'Built full-stack features for SaaS platform using Node.js and React',
        'Fixed critical security vulnerabilities and improved application stability',
        'Participated in daily standups and contributed to technical documentation'
      ]
    }
  ],
  education: [
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      graduationDate: 'Jun 2015',
      gpa: '3.9'
    }
  ],
  skills: [
    'Python',
    'Java',
    'JavaScript/TypeScript',
    'AWS',
    'Kubernetes',
    'PostgreSQL',
    'Redis',
    'Docker',
    'React',
    'System Design',
    'Microservices',
    'REST APIs'
  ],
  projects: [
    {
      name: 'Real-time Analytics Engine',
      description: 'Built distributed analytics platform processing 500M+ events daily with <100ms latency',
      technologies: ['Kafka', 'Apache Spark', 'PostgreSQL', 'Grafana'],
      link: 'github.com/marcuschen/analytics-engine'
    },
    {
      name: 'Auto-scaling Infrastructure',
      description: 'Designed Kubernetes-based infrastructure reducing costs by 40% while improving reliability to 99.99%',
      technologies: ['Kubernetes', 'Terraform', 'AWS', 'Prometheus'],
      link: 'github.com/marcuschen/k8s-infrastructure'
    }
  ],
  certificates: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2021',
      id: 'AWS-SA-2021'
    },
    {
      name: 'Kubernetes Application Developer',
      issuer: 'Linux Foundation',
      date: '2022'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Mandarin', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'System Uptime', value: '99.99%' },
    { label: 'Performance Gain', value: '+60%' },
    { label: 'Code Coverage', value: '92%' },
    { label: 'Teams Mentored', value: '4' }
  ]
};

// Template 2: Modern Two Column - Data Scientist
export const template2Data: ResumeData = {
  name: 'Sarah Williams',
  title: 'Senior Data Scientist',
  email: 'sarah.williams@email.com',
  phone: '+1 (555) 345-6789',
  location: 'San Francisco, CA',
  website: 'sarahwilliams.ai',
  linkedin: 'linkedin.com/in/sarahwilliams',
  github: 'github.com/sarahwill',
  portfolio: '',
  summary: 'Data scientist with 7+ years of experience building ML models that drive business impact. Specialized in predictive analytics, computer vision, and NLP with track record of improving model accuracy by 25% and deploying systems handling 100M+ predictions monthly. Expert in Python, TensorFlow, and cloud platforms.',
  workExperience: [
    {
      company: 'AI Innovations Inc.',
      jobTitle: 'Senior Data Scientist',
      location: 'San Francisco, CA',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Lead development of recommendation engine serving 50M+ personalized predictions daily',
        'Built computer vision models for image classification achieving 98.5% accuracy',
        'Mentored 3 junior data scientists and established ML best practices across 5 teams',
        'Reduced model inference time by 70% through optimization and quantization'
      ]
    },
    {
      company: 'BigData Analytics',
      jobTitle: 'Data Scientist',
      location: 'New York, NY',
      startDate: 'Mar 2018',
      endDate: 'Dec 2020',
      description: [
        'Developed churn prediction model reducing customer attrition by 18%',
        'Created NLP pipeline for sentiment analysis processing 1M+ customer reviews monthly',
        'Built time-series forecasting models for inventory optimization',
        'Collaborated with product teams to translate insights into actionable business strategies'
      ]
    },
    {
      company: 'Tech Startup',
      jobTitle: 'Junior Data Analyst',
      location: 'Boston, MA',
      startDate: 'Jul 2016',
      endDate: 'Feb 2018',
      description: [
        'Conducted exploratory data analysis and created dashboards for stakeholders',
        'Built SQL queries to extract and transform large datasets',
        'Assisted senior data scientists with model development and evaluation'
      ]
    }
  ],
  education: [
    {
      institution: 'MIT',
      degree: 'Master of Science',
      field: 'Machine Learning',
      location: 'Cambridge, MA',
      graduationDate: 'May 2016',
      gpa: '3.9'
    },
    {
      institution: 'UC Berkeley',
      degree: 'Bachelor of Science',
      field: 'Statistics',
      location: 'Berkeley, CA',
      graduationDate: 'May 2014',
      gpa: '3.8'
    }
  ],
  skills: [
    'Python',
    'R',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'SQL',
    'AWS SageMaker',
    'Apache Spark',
    'Tableau',
    'Computer Vision',
    'NLP',
    'Statistics'
  ],
  projects: [
    {
      name: 'Customer Churn Prediction',
      description: 'Built XGBoost model predicting customer churn with 91% precision, saving $2M annually',
      technologies: ['XGBoost', 'Python', 'AWS', 'Pandas'],
      link: 'github.com/sarahwill/churn-prediction'
    },
    {
      name: 'Image Classification Pipeline',
      description: 'Deployed production CNN model classifying images with 98.5% accuracy serving 50M+ daily predictions',
      technologies: ['TensorFlow', 'PyTorch', 'Kubernetes', 'AWS'],
      link: 'github.com/sarahwill/image-classifier'
    }
  ],
  certificates: [
    {
      name: 'TensorFlow Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2020'
    },
    {
      name: 'AWS Certified Machine Learning Specialty',
      issuer: 'Amazon Web Services',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Python', proficiency: 'Fluent' }
  ],
  publications: [
    {
      title: 'Efficient Deep Learning for Real-time Applications',
      journal: 'Journal of Machine Learning Research',
      date: 'Mar 2022',
      authors: 'S. Williams, J. Smith'
    }
  ],
  metrics: [
    { label: 'Model Accuracy', value: '98.5%' },
    { label: 'Churn Reduction', value: '-18%' },
    { label: 'Inference Speed', value: '-70%' },
    { label: 'Annual Savings', value: '$2M' }
  ]
};

// Template 3: Creative Color Bar - UX Researcher
export const template3Data: ResumeData = {
  name: 'Emma Rodriguez',
  title: 'Senior UX Researcher',
  email: 'emma.rodriguez@email.com',
  phone: '+1 (555) 456-7890',
  location: 'Austin, TX',
  website: 'emmaresearch.com',
  linkedin: 'linkedin.com/in/emmarod',
  github: '',
  portfolio: 'behance.net/emmaresearch',
  summary: 'Strategic UX researcher with 8+ years of experience uncovering user insights that drive product innovation. Expertise in qualitative and quantitative research methods, with proven ability to influence product strategy and increase user satisfaction by 35%. Passionate about human-centered design and accessible digital experiences.',
  workExperience: [
    {
      company: 'Creative Tech Labs',
      jobTitle: 'Senior UX Researcher',
      location: 'Austin, TX',
      startDate: 'Sep 2019',
      endDate: 'Present',
      description: [
        'Led user research for 12+ product initiatives impacting 5M+ users',
        'Established research program increasing user satisfaction scores by 35%',
        'Conducted 200+ user interviews, usability tests, and surveys across diverse demographics',
        'Mentored 2 junior researchers and built research best practices framework'
      ]
    },
    {
      company: 'Interactive Design Studio',
      jobTitle: 'UX Researcher',
      location: 'Los Angeles, CA',
      startDate: 'Apr 2017',
      endDate: 'Aug 2019',
      description: [
        'Designed and executed comprehensive user research studies for 20+ client projects',
        'Created user personas, journey maps, and experience audits influencing product direction',
        'Presented research findings to C-level executives and product stakeholders',
        'Improved accessibility compliance from 60% to 98% through accessibility research'
      ]
    },
    {
      company: 'Web Agency',
      jobTitle: 'Research Associate',
      location: 'Portland, OR',
      startDate: 'Jun 2015',
      endDate: 'Mar 2017',
      description: [
        'Conducted user testing sessions and analyzed qualitative data',
        'Created documentation and reports on user behavior and pain points',
        'Supported senior researchers on discovery and validation projects'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Texas at Austin',
      degree: 'Master of Science',
      field: 'Human-Computer Interaction',
      location: 'Austin, TX',
      graduationDate: 'May 2015',
      gpa: '3.8'
    },
    {
      institution: 'University of North Carolina',
      degree: 'Bachelor of Arts',
      field: 'Psychology',
      location: 'Chapel Hill, NC',
      graduationDate: 'May 2013',
      gpa: '3.9'
    }
  ],
  skills: [
    'User Interviews',
    'Usability Testing',
    'Survey Design',
    'Data Analysis',
    'Figma',
    'Miro',
    'Qualtrics',
    'SPSS',
    'User Journey Mapping',
    'Accessibility (WCAG)',
    'Qualitative Research',
    'Quantitative Analysis'
  ],
  projects: [
    {
      name: 'Healthcare Platform Research',
      description: 'Led research for healthcare portal redesign through 50+ interviews, increasing task success rate by 40%',
      technologies: ['User Testing', 'Surveys', 'Figma', 'Excel'],
      link: 'emmaresearch.com/case-studies/healthcare'
    },
    {
      name: 'Accessibility Audit & Recommendations',
      description: 'Conducted comprehensive accessibility audit across 15 products, identified 500+ issues and increased WCAG compliance to 98%',
      technologies: ['WCAG Audits', 'Accessibility Testing', 'Documentation'],
      link: 'emmaresearch.com/case-studies/accessibility'
    }
  ],
  certificates: [
    {
      name: 'Certified User Experience Professional',
      issuer: 'User Experience Professionals Association',
      date: '2019'
    },
    {
      name: 'Advanced Accessibility in Digital Design',
      issuer: 'Interaction Design Foundation',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Professional Working' }
  ],
  publications: [
    {
      title: 'Building Inclusive Digital Experiences',
      journal: 'UX Magazine',
      date: 'Sep 2022',
      authors: 'E. Rodriguez'
    }
  ],
  metrics: [
    { label: 'User Satisfaction', value: '+35%' },
    { label: 'Task Success Rate', value: '+40%' },
    { label: 'WCAG Compliance', value: '98%' },
    { label: 'Studies Conducted', value: '200+' }
  ]
};

// Template 4: Executive Minimal - Product Manager
export const template4Data: ResumeData = {
  name: 'James Mitchell',
  title: 'Senior Product Manager',
  email: 'james.mitchell@email.com',
  phone: '+1 (555) 567-8901',
  location: 'New York, NY',
  website: 'jamesmitchell.pm',
  linkedin: 'linkedin.com/in/jamesmitchell',
  github: '',
  portfolio: '',
  summary: 'Strategic Product Manager with 10+ years of experience leading high-impact products from conception to scale. Track record of growing user bases by 300%, increasing revenue by $50M+, and building teams of 20+ cross-functional members. Expert in market analysis, product strategy, and stakeholder management.',
  workExperience: [
    {
      company: 'Global Tech Corporation',
      jobTitle: 'Senior Product Manager',
      location: 'New York, NY',
      startDate: 'Jul 2020',
      endDate: 'Present',
      description: [
        'Lead product strategy and roadmap for mobile app with 20M+ monthly active users',
        'Increased user retention by 28% through data-driven feature prioritization',
        'Managed $5M annual budget and cross-functional team of 12 engineers and designers',
        'Drove expansion into 3 new markets increasing revenue by $15M annually'
      ]
    },
    {
      company: 'FinTech Startup',
      jobTitle: 'Product Manager',
      location: 'San Francisco, CA',
      startDate: 'Feb 2018',
      endDate: 'Jun 2020',
      description: [
        'Built payment platform from zero to $30M ARR in 2 years',
        'Grew user base from 100K to 3M through strategic product launches',
        'Established product processes and mentored team of 4 product managers',
        'Conducted competitive analysis and market research guiding product direction'
      ]
    },
    {
      company: 'Tech Consulting',
      jobTitle: 'Associate Product Manager',
      location: 'Boston, MA',
      startDate: 'Jun 2015',
      endDate: 'Jan 2018',
      description: [
        'Assisted in product development for B2B SaaS platform',
        'Created product requirements documents and user stories',
        'Conducted customer interviews and competitive analysis'
      ]
    }
  ],
  education: [
    {
      institution: 'Harvard Business School',
      degree: 'MBA',
      field: 'General Management',
      location: 'Boston, MA',
      graduationDate: 'May 2015',
      gpa: '3.7'
    },
    {
      institution: 'Yale University',
      degree: 'Bachelor of Arts',
      field: 'Economics',
      location: 'New Haven, CT',
      graduationDate: 'May 2013',
      gpa: '3.9'
    }
  ],
  skills: [
    'Product Strategy',
    'Market Analysis',
    'User Research',
    'Data Analytics',
    'OKRs',
    'SQL',
    'Tableau',
    'Jira',
    'Figma',
    'Roadmap Planning',
    'Stakeholder Management',
    'Go-to-Market'
  ],
  projects: [
    {
      name: 'Payment Platform Launch',
      description: 'Led product strategy for fintech platform achieving $30M ARR within 2 years, 30x user growth',
      technologies: ['Strategy', 'Analytics', 'User Research'],
      link: 'jamesmitchell.pm/case-studies/fintech'
    },
    {
      name: 'Market Expansion',
      description: 'Executed expansion into 3 new geographic markets resulting in $15M additional annual revenue',
      technologies: ['Market Research', 'Go-to-Market', 'Analytics'],
      link: 'jamesmitchell.pm/case-studies/expansion'
    }
  ],
  certificates: [
    {
      name: 'Reforge Product Strategy',
      issuer: 'Reforge',
      date: '2020'
    },
    {
      name: 'Pragmatic Marketing',
      issuer: 'Pragmatic Institute',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'French', proficiency: 'Conversational' }
  ],
  publications: [],
  metrics: [
    { label: 'Revenue Generated', value: '$50M+' },
    { label: 'User Growth', value: '300%' },
    { label: 'Retention Increase', value: '+28%' },
    { label: 'Teams Led', value: '20+' }
  ]
};

// Template 5: Technical CV - DevOps Engineer
export const template5Data: ResumeData = {
  name: 'David Park',
  title: 'Senior DevOps Engineer',
  email: 'david.park@email.com',
  phone: '+1 (555) 678-9012',
  location: 'Portland, OR',
  website: 'davidpark.dev',
  linkedin: 'linkedin.com/in/davidpark',
  github: 'github.com/dpark',
  portfolio: '',
  summary: 'DevOps engineer with 9+ years of experience designing and managing cloud infrastructure at scale. Expert in Kubernetes, infrastructure-as-code, and CI/CD pipeline automation. Proven ability to reduce deployment time by 80%, improve system reliability to 99.99%, and cut cloud costs by 35%.',
  workExperience: [
    {
      company: 'Cloud Infrastructure Co.',
      jobTitle: 'Senior DevOps Engineer',
      location: 'Portland, OR',
      startDate: 'Aug 2020',
      endDate: 'Present',
      description: [
        'Architected Kubernetes infrastructure supporting 50+ microservices handling 100M+ daily requests',
        'Implemented GitOps workflow reducing deployment time from 2 hours to 10 minutes',
        'Led infrastructure cost optimization reducing monthly cloud spend by 35%',
        'Mentored team of 4 engineers on infrastructure best practices and security'
      ]
    },
    {
      company: 'Enterprise Software Inc.',
      jobTitle: 'DevOps Engineer',
      location: 'Seattle, WA',
      startDate: 'Mar 2017',
      endDate: 'Jul 2020',
      description: [
        'Built and maintained CI/CD pipelines processing 1000+ deployments daily',
        'Implemented comprehensive monitoring and alerting reducing incident response time by 60%',
        'Designed disaster recovery and business continuity strategies achieving 99.99% uptime',
        'Automated infrastructure provisioning using Terraform reducing setup time by 90%'
      ]
    },
    {
      company: 'Startup Platform',
      jobTitle: 'Systems Administrator',
      location: 'San Francisco, CA',
      startDate: 'Jun 2015',
      endDate: 'Feb 2017',
      description: [
        'Managed on-premise and cloud infrastructure for growing startup',
        'Implemented monitoring and logging solutions',
        'Supported application teams with deployment and troubleshooting'
      ]
    }
  ],
  education: [
    {
      institution: 'Portland State University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Portland, OR',
      graduationDate: 'May 2015',
      gpa: '3.7'
    }
  ],
  skills: [
    'Kubernetes',
    'Docker',
    'Terraform',
    'Ansible',
    'AWS',
    'GCP',
    'Linux',
    'Jenkins',
    'GitLab CI',
    'Prometheus',
    'ELK Stack',
    'Infrastructure-as-Code'
  ],
  projects: [
    {
      name: 'Kubernetes Migration',
      description: 'Migrated 50+ services to Kubernetes reducing deployment time by 80% and improving reliability to 99.99%',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
      link: 'github.com/dpark/k8s-migration'
    },
    {
      name: 'Cost Optimization Program',
      description: 'Implemented infrastructure optimization strategies reducing monthly cloud costs by 35% while maintaining performance',
      technologies: ['AWS Cost Explorer', 'Terraform', 'Monitoring'],
      link: 'github.com/dpark/cost-optimization'
    }
  ],
  certificates: [
    {
      name: 'Kubernetes Application Developer (CKAD)',
      issuer: 'Linux Foundation',
      date: '2021'
    },
    {
      name: 'AWS Certified Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2022'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Korean', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'System Uptime', value: '99.99%' },
    { label: 'Deployment Time', value: '-80%' },
    { label: 'Cost Reduction', value: '-35%' },
    { label: 'Services Managed', value: '50+' }
  ]
};

// Template 6: Designer Portfolio - Brand Designer
export const template6Data: ResumeData = {
  name: 'Olivia Bennett',
  title: 'Senior Brand Designer',
  email: 'olivia.bennett@email.com',
  phone: '+1 (555) 789-0123',
  location: 'Los Angeles, CA',
  website: 'oliviabennett.design',
  linkedin: 'linkedin.com/in/oliviabennett',
  github: '',
  portfolio: 'behance.net/oliviabennett',
  summary: 'Strategic brand designer with 8+ years of experience creating compelling brand identities for Fortune 500 companies and innovative startups. Expertise in visual identity systems, brand strategy, and creative direction. Proven ability to increase brand recognition by 45% and improve brand equity through cohesive visual communication.',
  workExperience: [
    {
      company: 'Creative Studio NYC',
      jobTitle: 'Senior Brand Designer',
      location: 'New York, NY',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Led brand identity redesigns for 8 Fortune 500 companies resulting in 45% increase in brand recognition',
        'Developed comprehensive brand guidelines and design systems used across 100+ touchpoints',
        'Managed $2M annual budget and creative team of 6 designers and strategists',
        'Directed brand strategy workshops influencing $50M+ in marketing investments'
      ]
    },
    {
      company: 'Innovation Lab',
      jobTitle: 'Brand Designer',
      location: 'San Francisco, CA',
      startDate: 'Apr 2018',
      endDate: 'Dec 2020',
      description: [
        'Created brand identities for 15+ startups and established companies',
        'Designed logos, color systems, typography, and brand guidelines',
        'Conducted brand research and competitive analysis',
        'Delivered brand presentations to C-suite executives and boards'
      ]
    },
    {
      company: 'Design Agency',
      jobTitle: 'Graphic Designer',
      location: 'Chicago, IL',
      startDate: 'Jun 2016',
      endDate: 'Mar 2018',
      description: [
        'Designed marketing collateral and advertising campaigns for 20+ clients',
        'Collaborated with copywriters and creative directors',
        'Managed multiple projects under tight deadlines'
      ]
    }
  ],
  education: [
    {
      institution: 'Rhode Island School of Design',
      degree: 'Bachelor of Fine Arts',
      field: 'Graphic Design',
      location: 'Providence, RI',
      graduationDate: 'May 2016',
      gpa: '3.9'
    }
  ],
  skills: [
    'Brand Strategy',
    'Logo Design',
    'Design Systems',
    'Adobe Creative Suite',
    'Figma',
    'Illustration',
    'Typography',
    'Color Theory',
    'Motion Design',
    'Competitive Analysis',
    'Brand Guidelines',
    'Design Thinking'
  ],
  projects: [
    {
      name: 'Fortune 500 Rebrand',
      description: 'Led comprehensive brand identity redesign for global tech company increasing brand recognition by 45%',
      technologies: ['Adobe Suite', 'Figma', 'Branding', 'Strategy'],
      link: 'oliviabennett.design/case-studies/rebrand'
    },
    {
      name: 'Startup Brand Identity System',
      description: 'Created complete brand identity and design system for fintech startup used across 100+ marketing touchpoints',
      technologies: ['Figma', 'Adobe Suite', 'Branding'],
      link: 'oliviabennett.design/case-studies/fintech-brand'
    }
  ],
  certificates: [
    {
      name: 'Advanced Brand Strategy',
      issuer: 'SVA ICP',
      date: '2021'
    },
    {
      name: 'Design Thinking Master Class',
      issuer: 'IDEO',
      date: '2020'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Italian', proficiency: 'Professional Working' }
  ],
  publications: [
    {
      title: 'The Psychology of Color in Brand Identity',
      journal: 'Design Magazine',
      date: 'Jun 2022',
      authors: 'O. Bennett'
    }
  ],
  metrics: [
    { label: 'Brand Recognition', value: '+45%' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Team Size', value: '6' },
    { label: 'Brand Guidelines', value: '8' }
  ]
};

// Template 7: Academic Research - Research Scientist
export const template7Data: ResumeData = {
  name: 'Dr. Michael Zhang',
  title: 'Research Scientist',
  email: 'michael.zhang@email.com',
  phone: '+1 (555) 890-1234',
  location: 'Cambridge, MA',
  website: 'michaelzhang.research',
  linkedin: 'linkedin.com/in/michaelzhang',
  github: 'github.com/mzhang',
  portfolio: '',
  summary: 'Research Scientist specializing in machine learning and artificial intelligence with 6+ years of experience advancing state-of-the-art technologies. Published 15+ peer-reviewed papers with 1000+ citations, co-authored patent on novel deep learning architecture. Experienced in both academic and industry research environments.',
  workExperience: [
    {
      company: 'AI Research Labs',
      jobTitle: 'Research Scientist',
      location: 'Cambridge, MA',
      startDate: 'Sep 2021',
      endDate: 'Present',
      description: [
        'Leading research initiatives in transformer architectures and large language models',
        'Published 4 papers at top-tier venues (NeurIPS, ICML, ICLR) with 500+ citations',
        'Co-invented deep learning optimization technique covered in 2 patents',
        'Mentored 3 PhD students and supervised 5 research projects'
      ]
    },
    {
      company: 'AI Institute',
      jobTitle: 'Postdoctoral Researcher',
      location: 'Stanford, CA',
      startDate: 'Aug 2018',
      endDate: 'Aug 2021',
      description: [
        'Conducted research on neural architecture search and model compression',
        'Published 8 papers advancing state-of-the-art in efficient deep learning',
        'Collaborated with industry partners on practical ML applications',
        'Presented research at 10+ major conferences internationally'
      ]
    },
    {
      company: 'University Laboratory',
      jobTitle: 'Graduate Research Assistant',
      location: 'Berkeley, CA',
      startDate: 'Aug 2015',
      endDate: 'May 2018',
      description: [
        'Conducted dissertation research on reinforcement learning for robotics',
        'Published 3 papers in top-tier venues',
        'Assisted with teaching machine learning courses'
      ]
    }
  ],
  education: [
    {
      institution: 'UC Berkeley',
      degree: 'PhD',
      field: 'Computer Science (Machine Learning)',
      location: 'Berkeley, CA',
      graduationDate: 'May 2018',
      gpa: '4.0'
    },
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      graduationDate: 'May 2015',
      gpa: '3.95'
    }
  ],
  skills: [
    'Deep Learning',
    'PyTorch',
    'TensorFlow',
    'Reinforcement Learning',
    'Computer Vision',
    'NLP',
    'Python',
    'CUDA',
    'Distributed Training',
    'Research Methodology',
    'Academic Writing',
    'Presentation'
  ],
  projects: [
    {
      name: 'Transformer Architecture Research',
      description: 'Published novel approach to efficient transformer training reducing memory by 40% and published at NeurIPS',
      technologies: ['PyTorch', 'Transformers', 'CUDA'],
      link: 'arxiv.org/abs/2301.xxxxx'
    },
    {
      name: 'Robotic Control via RL',
      description: 'Developed reinforcement learning framework for robotic manipulation achieving human-level performance on 5 tasks',
      technologies: ['Reinforcement Learning', 'PyTorch', 'Robotics Simulation'],
      link: 'github.com/mzhang/rl-robotics'
    }
  ],
  certificates: [
    {
      name: 'Deep Learning Specialization',
      issuer: 'deeplearning.ai',
      date: '2016'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Mandarin', proficiency: 'Fluent' }
  ],
  publications: [
    {
      title: 'Efficient Transformer Training through Novel Architecture',
      journal: 'NeurIPS 2022',
      date: 'Dec 2022',
      authors: 'M. Zhang, A. Smith, J. Lee'
    },
    {
      title: 'Learning Generalizable Robotic Skills via Reinforcement Learning',
      journal: 'ICML 2021',
      date: 'Jul 2021',
      authors: 'M. Zhang, B. Johnson'
    }
  ],
  metrics: [
    { label: 'Papers Published', value: '15+' },
    { label: 'Citations', value: '1000+' },
    { label: 'Patents', value: '2' },
    { label: 'Students Mentored', value: '3' }
  ]
};

// Template 8: Timeline - Project Manager
export const template8Data: ResumeData = {
  name: 'Rachel Thompson',
  title: 'Program Manager',
  email: 'rachel.thompson@email.com',
  phone: '+1 (555) 901-2345',
  location: 'Denver, CO',
  website: 'rachelthompson.pm',
  linkedin: 'linkedin.com/in/rachelthompson',
  github: '',
  portfolio: '',
  summary: 'Strategic Program Manager with 7+ years of experience managing complex, multi-million dollar initiatives from conception through successful delivery. Proven expertise in cross-functional team leadership, stakeholder management, and driving organizational change. Track record of delivering projects 15% under budget and achieving 98% schedule compliance.',
  workExperience: [
    {
      company: 'Enterprise Solutions Corp',
      jobTitle: 'Senior Program Manager',
      location: 'Denver, CO',
      startDate: 'Mar 2021',
      endDate: 'Present',
      description: [
        'Leading 3 concurrent programs with combined budget of $15M and 50+ team members',
        'Achieved 98% on-time delivery rate and 15% cost savings through process optimization',
        'Implemented agile methodologies reducing time-to-market by 40%',
        'Managed stakeholder communications for C-level executives and board members'
      ]
    },
    {
      company: 'Tech Development Co.',
      jobTitle: 'Program Manager',
      location: 'Austin, TX',
      startDate: 'Jun 2018',
      endDate: 'Feb 2021',
      description: [
        'Managed 5-year, $8M digital transformation initiative across 4 business units',
        'Led team of 15 project managers coordinating 40+ concurrent projects',
        'Implemented portfolio management framework improving visibility and decision-making',
        'Delivered all major milestones on schedule while maintaining budget variance <2%'
      ]
    },
    {
      company: 'Consulting Firm',
      jobTitle: 'Project Manager',
      location: 'Chicago, IL',
      startDate: 'Aug 2016',
      endDate: 'May 2018',
      description: [
        'Managed client implementation projects for enterprise software deployments',
        'Coordinated across technical, sales, and customer success teams',
        'Maintained customer satisfaction scores above 4.8/5.0'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Colorado',
      degree: 'Bachelor of Science',
      field: 'Business Administration',
      location: 'Boulder, CO',
      graduationDate: 'May 2016',
      gpa: '3.8'
    }
  ],
  skills: [
    'Program Management',
    'Project Planning',
    'Risk Management',
    'Stakeholder Management',
    'Budget Management',
    'Agile/Scrum',
    'Jira',
    'Microsoft Project',
    'Excel',
    'Leadership',
    'Communication',
    'Process Improvement'
  ],
  projects: [
    {
      name: 'Digital Transformation Initiative',
      description: 'Managed $8M, 5-year program transforming legacy systems across 4 business units impacting 2000+ employees',
      technologies: ['Agile', 'Portfolio Management', 'Stakeholder Management'],
      link: 'rachelthompson.pm/case-studies/transformation'
    },
    {
      name: 'Enterprise System Migration',
      description: 'Led program managing migration of 500K+ users to new platform with zero downtime',
      technologies: ['Program Management', 'Risk Management', 'Change Management'],
      link: 'rachelthompson.pm/case-studies/migration'
    }
  ],
  certificates: [
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: '2019'
    },
    {
      name: 'Certified Scrum Master (CSM)',
      issuer: 'Scrum Alliance',
      date: '2018'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'On-Time Delivery', value: '98%' },
    { label: 'Cost Savings', value: '-15%' },
    { label: 'Budget Managed', value: '$15M' },
    { label: 'Teams Led', value: '50+' }
  ]
};

// Template 9: Functional Skills - Marketing Manager
export const template9Data: ResumeData = {
  name: 'Jessica Lee',
  title: 'Senior Marketing Manager',
  email: 'jessica.lee@email.com',
  phone: '+1 (555) 012-3456',
  location: 'Boston, MA',
  website: 'jessicalee.marketing',
  linkedin: 'linkedin.com/in/jessicalee',
  github: '',
  portfolio: '',
  summary: 'Results-driven Senior Marketing Manager with 8+ years of experience developing and executing integrated marketing strategies that drive revenue growth. Expertise in demand generation, brand marketing, and marketing operations. Track record of generating $20M+ in attributed revenue and scaling marketing team from 3 to 12 people.',
  workExperience: [
    {
      company: 'Growth Marketing Inc.',
      jobTitle: 'Senior Marketing Manager',
      location: 'Boston, MA',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Lead marketing strategy generating $20M+ in attributed annual revenue',
        'Manage $3M marketing budget across digital, content, and events channels',
        'Built and mentored marketing team from 3 to 12 people',
        'Increased lead generation by 120% and improved conversion rate by 35%'
      ]
    },
    {
      company: 'B2B SaaS Company',
      jobTitle: 'Marketing Manager',
      location: 'New York, NY',
      startDate: 'Mar 2018',
      endDate: 'Dec 2020',
      description: [
        'Developed demand generation programs acquiring 500+ qualified leads monthly',
        'Created and executed product launch campaigns achieving 150% of revenue targets',
        'Implemented marketing automation platform increasing efficiency by 50%',
        'Managed SEO and content strategy increasing organic traffic by 200%'
      ]
    },
    {
      company: 'Digital Marketing Agency',
      jobTitle: 'Marketing Specialist',
      location: 'Philadelphia, PA',
      startDate: 'Jun 2016',
      endDate: 'Feb 2018',
      description: [
        'Executed paid advertising campaigns across Google, Facebook, and LinkedIn',
        'Managed social media for 8 client accounts',
        'Created marketing collateral and email campaigns'
      ]
    }
  ],
  education: [
    {
      institution: 'Boston University',
      degree: 'Bachelor of Science',
      field: 'Marketing',
      location: 'Boston, MA',
      graduationDate: 'May 2016',
      gpa: '3.8'
    }
  ],
  skills: [
    'Demand Generation',
    'Content Marketing',
    'SEO/SEM',
    'Marketing Automation',
    'Analytics',
    'HubSpot',
    'Salesforce',
    'Google Analytics',
    'A/B Testing',
    'Email Marketing',
    'Social Media',
    'Brand Management'
  ],
  projects: [
    {
      name: 'Product Launch Campaign',
      description: 'Executed integrated product launch generating $12M revenue in first 6 months',
      technologies: ['Campaign Management', 'Analytics', 'Content Marketing'],
      link: 'jessicalee.marketing/case-studies/launch'
    },
    {
      name: 'Demand Generation Program',
      description: 'Built demand gen program acquiring 500+ qualified leads monthly at 35% lower CAC',
      technologies: ['Marketing Automation', 'Analytics', 'Lead Scoring'],
      link: 'jessicalee.marketing/case-studies/demand-gen'
    }
  ],
  certificates: [
    {
      name: 'HubSpot Inbound Marketing Certification',
      issuer: 'HubSpot Academy',
      date: '2020'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2019'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Mandarin', proficiency: 'Elementary' }
  ],
  publications: [],
  metrics: [
    { label: 'Revenue Attributed', value: '$20M+' },
    { label: 'Lead Generation', value: '+120%' },
    { label: 'Conversion Rate', value: '+35%' },
    { label: 'Team Size', value: '12' }
  ]
};

// Template 10: Infographic Light - Data Analyst
export const template10Data: ResumeData = {
  name: 'Christopher Santos',
  title: 'Senior Data Analyst',
  email: 'christopher.santos@email.com',
  phone: '+1 (555) 123-4567',
  location: 'Miami, FL',
  website: 'csantos.analytics',
  linkedin: 'linkedin.com/in/csantos',
  github: 'github.com/csantos',
  portfolio: '',
  summary: 'Data-driven Senior Data Analyst with 6+ years of experience transforming complex datasets into actionable insights that drive business decisions. Expert in SQL, Python, and business intelligence tools. Proven track record of improving operational efficiency by 30% and identifying revenue opportunities worth $5M+.',
  workExperience: [
    {
      company: 'Digital Analytics Corp',
      jobTitle: 'Senior Data Analyst',
      location: 'Miami, FL',
      startDate: 'Feb 2021',
      endDate: 'Present',
      description: [
        'Lead analytics initiatives supporting 20+ business stakeholders across the organization',
        'Developed dashboards and reports improving decision-making speed by 40%',
        'Built predictive models identifying $5M+ in potential revenue opportunities',
        'Mentored 2 junior analysts and established analytics best practices'
      ]
    },
    {
      company: 'E-commerce Platform',
      jobTitle: 'Data Analyst',
      location: 'Tampa, FL',
      startDate: 'Apr 2018',
      endDate: 'Jan 2021',
      description: [
        'Analyzed customer behavior data for 1M+ active users improving conversion by 28%',
        'Created real-time dashboards tracking 50+ business metrics',
        'Conducted A/B testing and experimentation improving UX metrics by 35%',
        'Optimized inventory and pricing strategies reducing waste by 18%'
      ]
    },
    {
      company: 'Business Intelligence Team',
      jobTitle: 'Junior Data Analyst',
      location: 'Orlando, FL',
      startDate: 'Jun 2017',
      endDate: 'Mar 2018',
      description: [
        'Built SQL queries and reports for business teams',
        'Created visualizations and dashboards in Tableau',
        'Analyzed trends and provided insights to stakeholders'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Florida',
      degree: 'Bachelor of Science',
      field: 'Statistics',
      location: 'Gainesville, FL',
      graduationDate: 'May 2017',
      gpa: '3.8'
    }
  ],
  skills: [
    'SQL',
    'Python',
    'R',
    'Tableau',
    'Power BI',
    'Excel',
    'Google Analytics',
    'Statistical Analysis',
    'Data Visualization',
    'A/B Testing',
    'Business Intelligence',
    'Data Storytelling'
  ],
  projects: [
    {
      name: 'Customer Analytics Dashboard',
      description: 'Built real-time dashboard tracking 50+ metrics for 1M+ users improving decision-making by 40%',
      technologies: ['Tableau', 'SQL', 'Python'],
      link: 'csantos.analytics/case-studies/dashboard'
    },
    {
      name: 'Pricing Optimization Model',
      description: 'Developed predictive model for dynamic pricing improving revenue by 18% while optimizing inventory',
      technologies: ['Python', 'Machine Learning', 'SQL'],
      link: 'csantos.analytics/case-studies/pricing'
    }
  ],
  certificates: [
    {
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2020'
    },
    {
      name: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Native' }
  ],
  publications: [],
  metrics: [
    { label: 'Revenue Identified', value: '$5M+' },
    { label: 'Efficiency Gain', value: '+30%' },
    { label: 'Conversion Lift', value: '+28%' },
    { label: 'Dashboards Built', value: '15+' }
  ]
};

// Template 11: ATS Friendly - Human Resources Manager
export const template11Data: ResumeData = {
  name: 'Amanda Foster',
  title: 'Senior Human Resources Manager',
  email: 'amanda.foster@email.com',
  phone: '+1 (555) 234-5678',
  location: 'Atlanta, GA',
  website: 'amandafoster.hr',
  linkedin: 'linkedin.com/in/amandafoster',
  github: '',
  portfolio: '',
  summary: 'Strategic Human Resources Manager with 9+ years of experience building high-performing teams and driving organizational culture. Expertise in talent acquisition, employee development, and HR operations. Track record of reducing turnover by 25%, improving employee satisfaction to 92%, and scaling organization from 50 to 500 employees.',
  workExperience: [
    {
      company: 'People-First Corporation',
      jobTitle: 'Senior Human Resources Manager',
      location: 'Atlanta, GA',
      startDate: 'Jun 2020',
      endDate: 'Present',
      description: [
        'Lead HR strategy for 500+ employee organization driving culture and engagement initiatives',
        'Reduced voluntary turnover by 25% through enhanced compensation and career development programs',
        'Implemented HR technology platform improving administrative efficiency by 40%',
        'Managed recruitment for 50+ positions maintaining 90% quality of hire metric'
      ]
    },
    {
      company: 'Growth Stage Startup',
      jobTitle: 'Human Resources Manager',
      location: 'Austin, TX',
      startDate: 'Aug 2017',
      endDate: 'May 2020',
      description: [
        'Built HR function from scratch supporting startup growth from 50 to 200 employees',
        'Developed talent acquisition strategy and recruitment process reducing time-to-hire by 35%',
        'Designed and implemented employee development and succession planning programs',
        'Managed compensation and benefits programs achieving 92% employee satisfaction'
      ]
    },
    {
      company: 'HR Services Company',
      jobTitle: 'Human Resources Coordinator',
      location: 'Dallas, TX',
      startDate: 'Jan 2015',
      endDate: 'Jul 2017',
      description: [
        'Supported HR operations for 200+ employees',
        'Managed recruiting, onboarding, and employee relations',
        'Assisted with benefits and compliance administration'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Texas at Austin',
      degree: 'Bachelor of Business Administration',
      field: 'Human Resources',
      location: 'Austin, TX',
      graduationDate: 'May 2015',
      gpa: '3.7'
    }
  ],
  skills: [
    'Talent Acquisition',
    'Employee Relations',
    'Compensation & Benefits',
    'Performance Management',
    'Organizational Development',
    'HR Compliance',
    'Workday',
    'ATS Systems',
    'HRIS',
    'Training & Development',
    'Leadership',
    'Change Management'
  ],
  projects: [
    {
      name: 'Talent Acquisition Program',
      description: 'Built recruitment strategy and process for hypergrowth organization hiring 50+ roles annually reducing time-to-hire by 35%',
      technologies: ['ATS', 'Recruiting', 'Analytics'],
      link: 'amandafoster.hr/case-studies/recruiting'
    },
    {
      name: 'Employee Development Initiative',
      description: 'Designed comprehensive development program improving employee satisfaction from 78% to 92% and reducing turnover by 25%',
      technologies: ['Learning Management', 'Career Planning'],
      link: 'amandafoster.hr/case-studies/development'
    }
  ],
  certificates: [
    {
      name: 'Professional in Human Resources (PHR)',
      issuer: 'HRCI',
      date: '2018'
    },
    {
      name: 'Society for Human Resource Management (SHRM)',
      issuer: 'SHRM',
      date: '2017'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'Turnover Reduction', value: '-25%' },
    { label: 'Employee Satisfaction', value: '92%' },
    { label: 'Time-to-Hire', value: '-35%' },
    { label: 'Team Size', value: '500' }
  ]
};

// Template 12: Creative Left Band - Financial Analyst
export const template12Data: ResumeData = {
  name: 'Kevin Nguyen',
  title: 'Senior Financial Analyst',
  email: 'kevin.nguyen@email.com',
  phone: '+1 (555) 345-6789',
  location: 'New York, NY',
  website: 'kevinnguyen.finance',
  linkedin: 'linkedin.com/in/kevinnguyen',
  github: '',
  portfolio: '',
  summary: 'Financial analyst with 8+ years of experience in financial modeling, valuation, and investment analysis. Expert in DCF modeling, M&A analysis, and corporate finance. Proven track record of identifying $10M+ in cost savings and improving financial forecasting accuracy to 95%.',
  workExperience: [
    {
      company: 'Investment Bank',
      jobTitle: 'Senior Financial Analyst',
      location: 'New York, NY',
      startDate: 'Sep 2020',
      endDate: 'Present',
      description: [
        'Led financial analysis and valuation for 15+ M&A transactions totaling $5B+',
        'Developed complex financial models and investment recommendations',
        'Identified and implemented process improvements saving $2M annually',
        'Mentored 2 junior analysts on valuation methodology and financial analysis'
      ]
    },
    {
      company: 'Fortune 500 Corporation',
      jobTitle: 'Financial Analyst',
      location: 'Chicago, IL',
      startDate: 'Jul 2017',
      endDate: 'Aug 2020',
      description: [
        'Conducted financial analysis supporting strategic planning and capital allocation decisions',
        'Built comprehensive budget and forecast models improving accuracy to 95%',
        'Identified operational inefficiencies and implemented cost reduction initiatives saving $8M',
        'Analyzed investment opportunities and provided recommendations to CFO'
      ]
    },
    {
      company: 'Consulting Firm',
      jobTitle: 'Financial Associate',
      location: 'Boston, MA',
      startDate: 'Jun 2015',
      endDate: 'Jun 2017',
      description: [
        'Performed financial modeling and analysis for client projects',
        'Conducted due diligence for M&A transactions',
        'Analyzed financial statements and industry trends'
      ]
    }
  ],
  education: [
    {
      institution: 'Stanford University',
      degree: 'Master of Business Administration',
      field: 'Finance',
      location: 'Stanford, CA',
      graduationDate: 'May 2015',
      gpa: '3.8'
    },
    {
      institution: 'University of Michigan',
      degree: 'Bachelor of Science',
      field: 'Economics',
      location: 'Ann Arbor, MI',
      graduationDate: 'May 2013',
      gpa: '3.9'
    }
  ],
  skills: [
    'Financial Modeling',
    'Valuation',
    'DCF Analysis',
    'M&A',
    'Excel',
    'PowerPoint',
    'SQL',
    'Corporate Finance',
    'Budget Planning',
    'Investment Analysis',
    'Risk Analysis',
    'Forecasting'
  ],
  projects: [
    {
      name: 'M&A Transaction Analysis',
      description: 'Led financial analysis and DCF valuation for $500M acquisition identifying $15M in synergies',
      technologies: ['Financial Modeling', 'Excel', 'Valuation'],
      link: 'kevinnguyen.finance/case-studies/ma'
    },
    {
      name: 'Cost Reduction Initiative',
      description: 'Identified and implemented operational improvements saving $8M annually through detailed financial analysis',
      technologies: ['Analytics', 'Cost Analysis', 'Process Improvement'],
      link: 'kevinnguyen.finance/case-studies/cost-reduction'
    }
  ],
  certificates: [
    {
      name: 'Chartered Financial Analyst (CFA) Level 3',
      issuer: 'CFA Institute',
      date: '2019'
    },
    {
      name: 'Financial Modeling & Valuation Analyst (FMVA)',
      issuer: 'Corporate Finance Institute',
      date: '2018'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Vietnamese', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'Transactions Analyzed', value: '15+' },
    { label: 'Transaction Value', value: '$5B+' },
    { label: 'Cost Savings', value: '$10M+' },
    { label: 'Forecast Accuracy', value: '95%' }
  ]
};

// Template 13: Modern Three Column - Solutions Architect
export const template13Data: ResumeData = {
  name: 'Patricia Hayes',
  title: 'Solutions Architect',
  email: 'patricia.hayes@email.com',
  phone: '+1 (555) 456-7890',
  location: 'San Francisco, CA',
  website: 'patriciahays.architect',
  linkedin: 'linkedin.com/in/patriciahays',
  github: 'github.com/phays',
  portfolio: '',
  summary: 'Strategic Solutions Architect with 10+ years of experience designing and implementing enterprise technology solutions. Expert in cloud architecture, system design, and digital transformation. Proven track record of delivering $50M+ in customer value and architecting solutions serving 50M+ users.',
  workExperience: [
    {
      company: 'Enterprise Cloud Solutions',
      jobTitle: 'Senior Solutions Architect',
      location: 'San Francisco, CA',
      startDate: 'Mar 2021',
      endDate: 'Present',
      description: [
        'Lead architecture for enterprise cloud migration projects with contracts totaling $30M+',
        'Designed scalable architecture supporting 50M+ users across global regions',
        'Managed 5+ concurrent customer engagements delivering $20M+ annual value',
        'Mentored 3 junior architects on best practices and technology trends'
      ]
    },
    {
      company: 'Global Technology Company',
      jobTitle: 'Solutions Architect',
      location: 'Seattle, WA',
      startDate: 'Jun 2017',
      endDate: 'Feb 2021',
      description: [
        'Architected technology solutions for Fortune 500 customers',
        'Led digital transformation initiatives improving operational efficiency by 35%',
        'Designed microservices-based architecture reducing deployment time by 75%',
        'Presented technical solutions to C-level executives and boards'
      ]
    },
    {
      company: 'Technology Services',
      jobTitle: 'Systems Engineer',
      location: 'Austin, TX',
      startDate: 'Aug 2014',
      endDate: 'May 2017',
      description: [
        'Designed and implemented enterprise infrastructure solutions',
        'Managed technical implementations for 20+ client projects',
        'Documented technical architecture and best practices'
      ]
    }
  ],
  education: [
    {
      institution: 'Carnegie Mellon University',
      degree: 'Master of Science',
      field: 'Information Technology',
      location: 'Pittsburgh, PA',
      graduationDate: 'May 2014',
      gpa: '3.8'
    },
    {
      institution: 'University of Washington',
      degree: 'Bachelor of Science',
      field: 'Computer Engineering',
      location: 'Seattle, WA',
      graduationDate: 'May 2012',
      gpa: '3.9'
    }
  ],
  skills: [
    'Cloud Architecture',
    'AWS',
    'Azure',
    'Microservices',
    'System Design',
    'Kubernetes',
    'Docker',
    'Enterprise Integration',
    'Security Architecture',
    'Scalability Design',
    'Solution Design',
    'Technical Leadership'
  ],
  projects: [
    {
      name: 'Enterprise Cloud Migration',
      description: 'Architected migration of on-premise infrastructure to cloud reducing costs by 40% and improving performance',
      technologies: ['AWS', 'Microservices', 'Kubernetes'],
      link: 'patriciahays.architect/case-studies/migration'
    },
    {
      name: 'Global Scalability Architecture',
      description: 'Designed distributed architecture supporting 50M+ concurrent users across 15 geographic regions with 99.99% uptime',
      technologies: ['AWS', 'Kubernetes', 'Database Sharding'],
      link: 'patriciahays.architect/case-studies/scalability'
    }
  ],
  certificates: [
    {
      name: 'AWS Certified Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2021'
    },
    {
      name: 'Microsoft Certified: Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'German', proficiency: 'Professional Working' }
  ],
  publications: [
    {
      title: 'Designing for Scale: Enterprise Architecture Patterns',
      journal: 'IEEE Software',
      date: 'Jun 2022',
      authors: 'P. Hayes, R. Johnson'
    }
  ],
  metrics: [
    { label: 'Contract Value', value: '$30M+' },
    { label: 'Users Supported', value: '50M+' },
    { label: 'Customer Value', value: '$50M+' },
    { label: 'Uptime', value: '99.99%' }
  ]
};

// Template 14: Minimal Sidebar - Content Strategist
export const template14Data: ResumeData = {
  name: 'Lauren Mitchell',
  title: 'Senior Content Strategist',
  email: 'lauren.mitchell@email.com',
  phone: '+1 (555) 567-8901',
  location: 'Portland, OR',
  website: 'laurenmitchell.content',
  linkedin: 'linkedin.com/in/laurenmitchell',
  github: '',
  portfolio: 'medium.com/@laurenmitchell',
  summary: 'Content strategist with 7+ years of experience developing content strategies that drive engagement and business results. Expertise in SEO, content marketing, and editorial strategy. Track record of growing organic traffic by 300%, increasing user engagement by 45%, and publishing 200+ high-impact articles.',
  workExperience: [
    {
      company: 'Media & Technology Co.',
      jobTitle: 'Senior Content Strategist',
      location: 'Portland, OR',
      startDate: 'May 2021',
      endDate: 'Present',
      description: [
        'Lead content strategy for 3 major content verticals driving 5M+ monthly readers',
        'Increased organic traffic by 150% through strategic SEO and content optimization',
        'Managed editorial team of 6 writers and implemented content workflow system',
        'Grew email subscriber base from 50K to 200K through content-led strategies'
      ]
    },
    {
      company: 'Digital Publishing Platform',
      jobTitle: 'Content Strategist',
      location: 'Seattle, WA',
      startDate: 'Aug 2018',
      endDate: 'Apr 2021',
      description: [
        'Developed and executed content strategy for SaaS product generating 2M+ organic sessions monthly',
        'Created 150+ high-value content pieces optimized for SEO and user engagement',
        'Improved average page ranking from position 15 to position 3 for target keywords',
        'Established content metrics and dashboards increasing team visibility by 80%'
      ]
    },
    {
      company: 'Content Marketing Agency',
      jobTitle: 'Content Specialist',
      location: 'San Francisco, CA',
      startDate: 'Jun 2016',
      endDate: 'Jul 2018',
      description: [
        'Created content for 20+ client projects across diverse industries',
        'Developed content calendars and editorial guidelines',
        'Optimized content for SEO and social media distribution'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Oregon',
      degree: 'Bachelor of Arts',
      field: 'English Literature',
      location: 'Eugene, OR',
      graduationDate: 'May 2016',
      gpa: '3.9'
    }
  ],
  skills: [
    'Content Strategy',
    'SEO',
    'Editorial Management',
    'Analytics',
    'Google Analytics',
    'Keyword Research',
    'Content Marketing',
    'Writing',
    'CMS',
    'WordPress',
    'Social Media',
    'User Engagement'
  ],
  projects: [
    {
      name: 'SEO-Driven Content Program',
      description: 'Built content strategy and execution plan increasing organic traffic by 300% and achieving rank #1 for 50+ target keywords',
      technologies: ['SEO', 'Content Marketing', 'Analytics'],
      link: 'laurenmitchell.content/case-studies/seo'
    },
    {
      name: 'Editorial Team Building',
      description: 'Scaled editorial operations from 1 writer to team of 6 while maintaining quality and increasing output by 400%',
      technologies: ['Project Management', 'Content Operations', 'Workflow'],
      link: 'laurenmitchell.content/case-studies/team'
    }
  ],
  certificates: [
    {
      name: 'HubSpot Content Marketing Certification',
      issuer: 'HubSpot Academy',
      date: '2019'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2018'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'French', proficiency: 'Conversational' }
  ],
  publications: [
    {
      title: 'The Future of SEO in 2023',
      journal: 'Search Engine Journal',
      date: 'Dec 2022',
      authors: 'L. Mitchell'
    },
    {
      title: 'Building a Scalable Content Strategy',
      journal: 'Content Marketing Institute',
      date: 'Jul 2021',
      authors: 'L. Mitchell'
    }
  ],
  metrics: [
    { label: 'Organic Traffic', value: '+300%' },
    { label: 'Monthly Readers', value: '5M+' },
    { label: 'Content Pieces', value: '200+' },
    { label: 'Email Subscribers', value: '200K' }
  ]
};

// Template 15: Corporate - Chief Technology Officer
export const template15Data: ResumeData = {
  name: 'Dr. Robert Williams',
  title: 'Chief Technology Officer',
  email: 'robert.williams@email.com',
  phone: '+1 (555) 678-9012',
  location: 'San Jose, CA',
  website: 'robertwilliams.tech',
  linkedin: 'linkedin.com/in/robertwilliams',
  github: '',
  portfolio: '',
  summary: 'Strategic CTO with 15+ years of experience building world-class technology organizations. Led digital transformation initiatives for Fortune 100 companies. Proven ability to scale engineering teams from 5 to 200+ engineers while maintaining innovation velocity and product quality.',
  workExperience: [
    {
      company: 'Innovative Technology Corp',
      jobTitle: 'Chief Technology Officer',
      location: 'San Jose, CA',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Lead technology strategy and vision for $500M+ company',
        'Scaled engineering organization from 80 to 200+ engineers',
        'Architected modern tech stack reducing deployment time by 85%',
        'Established innovation program delivering 8 new products in 2 years'
      ]
    },
    {
      company: 'Enterprise Software Inc.',
      jobTitle: 'VP of Engineering',
      location: 'Seattle, WA',
      startDate: 'Jun 2017',
      endDate: 'Dec 2020',
      description: [
        'Led engineering organization of 80 engineers across 4 locations',
        'Improved system reliability to 99.99% and reduced incident response time by 70%',
        'Implemented agile practices increasing release frequency from quarterly to weekly',
        'Mentored 5 engineering managers and established technical excellence program'
      ]
    },
    {
      company: 'Tech Solutions',
      jobTitle: 'Engineering Manager',
      location: 'Boston, MA',
      startDate: 'Aug 2014',
      endDate: 'May 2017',
      description: [
        'Managed team of 15 engineers building SaaS platform',
        'Improved code quality through automated testing and CI/CD',
        'Led technical mentoring and career development programs'
      ]
    }
  ],
  education: [
    {
      institution: 'MIT',
      degree: 'PhD',
      field: 'Computer Science',
      location: 'Cambridge, MA',
      graduationDate: 'May 2010',
      gpa: '4.0'
    },
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Stanford, CA',
      graduationDate: 'May 2008',
      gpa: '3.95'
    }
  ],
  skills: [
    'Technology Strategy',
    'Leadership',
    'Organizational Development',
    'Cloud Architecture',
    'Agile',
    'DevOps',
    'System Design',
    'Budgeting',
    'Risk Management',
    'Change Management',
    'Technical Vision',
    'Mentoring'
  ],
  projects: [
    {
      name: 'Technology Modernization',
      description: 'Led $10M technology modernization initiative migrating legacy systems to cloud reducing operational costs by 40%',
      technologies: ['Cloud Migration', 'Architecture', 'Change Management'],
      link: 'robertwilliams.tech/case-studies/modernization'
    },
    {
      name: 'Organization Scaling',
      description: 'Scaled engineering organization from 80 to 200+ engineers while maintaining product velocity and improving quality',
      technologies: ['Leadership', 'Organizational Development', 'Culture'],
      link: 'robertwilliams.tech/case-studies/scaling'
    }
  ],
  certificates: [
    {
      name: 'Executive Leadership Program',
      issuer: 'Stanford GSB',
      date: '2020'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'German', proficiency: 'Professional Working' }
  ],
  publications: [
    {
      title: 'Building High-Performing Engineering Organizations',
      journal: 'Harvard Business Review',
      date: 'Sep 2021',
      authors: 'R. Williams'
    }
  ],
  metrics: [
    { label: 'Engineers Led', value: '200+' },
    { label: 'System Uptime', value: '99.99%' },
    { label: 'Products Launched', value: '8' },
    { label: 'Cost Reduction', value: '-40%' }
  ]
};

// Template 16: Startup Product - Product Designer
export const template16Data: ResumeData = {
  name: 'Jordan Lee',
  title: 'Senior Product Designer',
  email: 'jordan.lee@email.com',
  phone: '+1 (555) 789-0123',
  location: 'San Francisco, CA',
  website: 'jordanlee.design',
  linkedin: 'linkedin.com/in/jordanlee',
  github: '',
  portfolio: 'dribbble.com/jordanlee',
  summary: 'Product designer with 7+ years of experience designing digital products used by millions. Expertise in interaction design, design systems, and user-centered design. Proven track record of shipping products that generated $50M+ revenue and achieving 4.8+ app ratings.',
  workExperience: [
    {
      company: 'Startup Lab',
      jobTitle: 'Senior Product Designer',
      location: 'San Francisco, CA',
      startDate: 'Feb 2021',
      endDate: 'Present',
      description: [
        'Led product design for 3 major features generating $20M+ ARR',
        'Built design system used by 4 product teams improving consistency and speed',
        'Improved user satisfaction scores by 40% through iterative design improvements',
        'Mentored 2 junior designers and established design best practices'
      ]
    },
    {
      company: 'FinTech App',
      jobTitle: 'Product Designer',
      location: 'New York, NY',
      startDate: 'Apr 2018',
      endDate: 'Jan 2021',
      description: [
        'Designed mobile app interface achieving 4.8★ rating and 2M+ downloads',
        'Conducted extensive user research with 100+ participants informing design direction',
        'Collaborated with engineering to implement complex interactions and animations',
        'Established design process and created comprehensive design documentation'
      ]
    },
    {
      company: 'Design Studio',
      jobTitle: 'UI Designer',
      location: 'Los Angeles, CA',
      startDate: 'Jun 2016',
      endDate: 'Mar 2018',
      description: [
        'Designed web and mobile interfaces for 15+ client projects',
        'Created wireframes, prototypes, and high-fidelity mockups',
        'Collaborated with developers for implementation'
      ]
    }
  ],
  education: [
    {
      institution: 'California Institute of the Arts',
      degree: 'Bachelor of Fine Arts',
      field: 'Graphic Design',
      location: 'Valencia, CA',
      graduationDate: 'May 2016',
      gpa: '3.9'
    }
  ],
  skills: [
    'Product Design',
    'UI/UX',
    'Figma',
    'Sketch',
    'Prototyping',
    'Interaction Design',
    'User Research',
    'Design Systems',
    'Adobe XD',
    'HTML/CSS',
    'Accessibility',
    'Design Thinking'
  ],
  projects: [
    {
      name: 'Mobile App Redesign',
      description: 'Redesigned financial app interface improving user satisfaction by 40% and achieving 4.8★ rating',
      technologies: ['Figma', 'Prototyping', 'User Testing'],
      link: 'jordanlee.design/case-studies/app-redesign'
    },
    {
      name: 'Design System Creation',
      description: 'Built comprehensive design system used by 4 product teams reducing design time by 50%',
      technologies: ['Figma', 'Design Systems', 'Documentation'],
      link: 'jordanlee.design/case-studies/design-system'
    }
  ],
  certificates: [
    {
      name: 'Google UX Design Professional Certificate',
      issuer: 'Google / Coursera',
      date: '2017'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Japanese', proficiency: 'Elementary' }
  ],
  publications: [],
  metrics: [
    { label: 'Revenue Designed', value: '$20M+' },
    { label: 'App Rating', value: '4.8★' },
    { label: 'User Satisfaction', value: '+40%' },
    { label: 'Designs Shipped', value: '50+' }
  ]
};

// Template 17: Sales Business - Sales Director
export const template17Data: ResumeData = {
  name: 'Thomas Anderson',
  title: 'Sales Director',
  email: 'thomas.anderson@email.com',
  phone: '+1 (555) 890-1234',
  location: 'Dallas, TX',
  website: 'thomasanderson.sales',
  linkedin: 'linkedin.com/in/thomasanderson',
  github: '',
  portfolio: '',
  summary: 'Sales leader with 10+ years of enterprise sales experience. Track record of building high-performing sales teams and consistently exceeding revenue targets by 20%+. Expert in SaaS sales, complex deal management, and sales strategy. Generated $100M+ in career revenue.',
  workExperience: [
    {
      company: 'Enterprise Software',
      jobTitle: 'Sales Director',
      location: 'Dallas, TX',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Lead sales organization of 15 account executives generating $50M+ ARR',
        'Exceeded revenue targets by 25% for 3 consecutive years',
        'Developed sales strategy and processes improving win rate from 20% to 35%',
        'Mentored and developed 5 sales managers and 15 account executives'
      ]
    },
    {
      company: 'SaaS Company',
      jobTitle: 'Sales Manager',
      location: 'Austin, TX',
      startDate: 'Mar 2018',
      endDate: 'Dec 2020',
      description: [
        'Managed sales team of 8 account executives exceeding quota by 30% annually',
        'Increased average deal size from $50K to $150K through strategic selling',
        'Reduced sales cycle from 6 months to 3 months through process optimization',
        'Built account expansion program generating $5M+ in additional revenue'
      ]
    },
    {
      company: 'Technology Solutions',
      jobTitle: 'Account Executive',
      location: 'Houston, TX',
      startDate: 'Jun 2015',
      endDate: 'Feb 2018',
      description: [
        'Closed $15M+ in enterprise deals as top performer',
        'Developed and maintained relationships with Fortune 500 clients',
        'Exceeded individual quota by 40% for 3 consecutive years'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Texas at Dallas',
      degree: 'Bachelor of Business Administration',
      field: 'Business Administration',
      location: 'Dallas, TX',
      graduationDate: 'May 2015',
      gpa: '3.7'
    }
  ],
  skills: [
    'Enterprise Sales',
    'Sales Management',
    'Negotiation',
    'Deal Closing',
    'Pipeline Management',
    'Forecasting',
    'Team Leadership',
    'Salesforce',
    'Strategic Planning',
    'Account Management',
    'Relationship Building',
    'Quota Achievement'
  ],
  projects: [
    {
      name: 'Sales Organization Build',
      description: 'Built sales team from scratch growing from 0 to 15 account executives generating $50M+ ARR',
      technologies: ['Sales Strategy', 'Team Building', 'Salesforce'],
      link: 'thomasanderson.sales/case-studies/org-build'
    },
    {
      name: 'Win Rate Improvement',
      description: 'Implemented sales process improvements increasing win rate from 20% to 35% and average deal size by 200%',
      technologies: ['Sales Process', 'Training', 'Analytics'],
      link: 'thomasanderson.sales/case-studies/win-rate'
    }
  ],
  certificates: [
    {
      name: 'Sandler Sales Training Certification',
      issuer: 'Sandler Sales Institute',
      date: '2017'
    },
    {
      name: 'Salesforce Advanced User',
      issuer: 'Salesforce',
      date: '2019'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Professional Working' }
  ],
  publications: [],
  metrics: [
    { label: 'Career Revenue', value: '$100M+' },
    { label: 'Team ARR', value: '$50M+' },
    { label: 'Win Rate', value: '35%' },
    { label: 'Average Deal Size', value: '150K' }
  ]
};

// Template 18: Healthcare Clinical - Clinical Operations Director
export const template18Data: ResumeData = {
  name: 'Dr. Emily Chen',
  title: 'Clinical Operations Director',
  email: 'emily.chen@email.com',
  phone: '+1 (555) 901-2345',
  location: 'Boston, MA',
  website: 'emilychen.healthcare',
  linkedin: 'linkedin.com/in/emilychen',
  github: '',
  portfolio: '',
  summary: 'Clinical operations leader with 8+ years of healthcare industry experience. Expertise in patient care improvement, clinical process optimization, and HIPAA compliance. Track record of reducing patient wait times by 35%, improving quality scores to 95%+, and managing $20M+ operations budgets.',
  workExperience: [
    {
      company: 'Boston Medical Center',
      jobTitle: 'Clinical Operations Director',
      location: 'Boston, MA',
      startDate: 'Jun 2021',
      endDate: 'Present',
      description: [
        'Lead clinical operations for 50+ bed facility serving 100K+ annual patients',
        'Reduced patient wait times by 35% through workflow optimization',
        'Improved clinical quality metrics to 95%+ and achieved zero HIPAA violations',
        'Managed $20M+ annual budget and team of 40 clinical staff'
      ]
    },
    {
      company: 'Healthcare Network',
      jobTitle: 'Operations Manager',
      location: 'New York, NY',
      startDate: 'Sep 2017',
      endDate: 'May 2021',
      description: [
        'Managed operations for 8 outpatient clinics across Manhattan',
        'Implemented EMR system improving documentation efficiency by 40%',
        'Developed clinical protocols improving patient satisfaction from 75% to 90%',
        'Trained and supervised 50+ clinical and administrative staff'
      ]
    },
    {
      company: 'Community Health Center',
      jobTitle: 'Clinical Coordinator',
      location: 'Philadelphia, PA',
      startDate: 'Jan 2016',
      endDate: 'Aug 2017',
      description: [
        'Coordinated patient care and clinic operations',
        'Managed patient scheduling and resource allocation',
        'Assisted with quality improvement initiatives'
      ]
    }
  ],
  education: [
    {
      institution: 'Boston University School of Medicine',
      degree: 'MD',
      field: 'Medicine',
      location: 'Boston, MA',
      graduationDate: 'May 2014'
    },
    {
      institution: 'Cornell University',
      degree: 'Bachelor of Science',
      field: 'Biology',
      location: 'Ithaca, NY',
      graduationDate: 'May 2010',
      gpa: '3.9'
    }
  ],
  skills: [
    'Clinical Operations',
    'Patient Care',
    'HIPAA Compliance',
    'Electronic Health Records',
    'Workflow Optimization',
    'Quality Improvement',
    'Staff Management',
    'Budget Management',
    'Healthcare Regulations',
    'Patient Safety',
    'Process Documentation',
    'Leadership'
  ],
  projects: [
    {
      name: 'Patient Flow Optimization',
      description: 'Redesigned clinical workflow reducing patient wait times by 35% and improving throughput by 25%',
      technologies: ['Process Optimization', 'Analytics', 'Workflow Design'],
      link: 'emilychen.healthcare/case-studies/patient-flow'
    },
    {
      name: 'EMR Implementation',
      description: 'Led implementation of electronic health record system across 8 clinics improving documentation efficiency by 40%',
      technologies: ['EMR', 'Change Management', 'Training'],
      link: 'emilychen.healthcare/case-studies/emr'
    }
  ],
  certificates: [
    {
      name: 'Physician Licenser: Board Certified',
      issuer: 'American Board of Internal Medicine',
      date: '2018'
    },
    {
      name: 'HIPAA Compliance Certification',
      issuer: 'HHS',
      date: '2019'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Mandarin', proficiency: 'Fluent' }
  ],
  publications: [
    {
      title: 'Improving Patient Flow in Healthcare Settings',
      journal: 'Healthcare Management Journal',
      date: 'Mar 2022',
      authors: 'E. Chen, R. Johnson'
    }
  ],
  metrics: [
    { label: 'Patient Wait Time', value: '-35%' },
    { label: 'Quality Score', value: '95%+' },
    { label: 'Patient Satisfaction', value: '+90%' },
    { label: 'Budget Managed', value: '$20M+' }
  ]
};

// Template 19: Engineering Technical (Already defined above, keeping for reference)
export const template19Data: ResumeData = {
  name: 'Nathan Price',
  title: 'Principal Engineer',
  email: 'nathan.price@email.com',
  phone: '+1 (555) 012-3456',
  location: 'Seattle, WA',
  website: 'nathanprice.eng',
  linkedin: 'linkedin.com/in/nathanprice',
  github: 'github.com/nprice',
  portfolio: '',
  summary: 'Principal Engineer with 12+ years of experience designing large-scale distributed systems and leading technical innovation. Expert in system architecture, performance optimization, and technical mentorship. Proven track record of architecting systems serving 500M+ users and mentoring 20+ engineers to senior roles.',
  workExperience: [
    {
      company: 'Mega Tech Corporation',
      jobTitle: 'Principal Engineer',
      location: 'Seattle, WA',
      startDate: 'Jul 2020',
      endDate: 'Present',
      description: [
        'Lead technical architecture for platform serving 500M+ users globally',
        'Architected distributed system processing 100M+ transactions daily at 99.99% uptime',
        'Established technical standards and best practices across 10+ teams',
        'Mentored 8 engineers to senior engineer and staff engineer roles'
      ]
    },
    {
      company: 'Infrastructure Labs',
      jobTitle: 'Staff Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2017',
      endDate: 'Jun 2020',
      description: [
        'Led design and implementation of real-time data streaming platform',
        'Improved system performance by 60% through optimization and refactoring',
        'Built internal tooling and frameworks used by 100+ engineers',
        'Established incident response process reducing MTTR by 70%'
      ]
    },
    {
      company: 'Tech Startup',
      jobTitle: 'Senior Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jun 2014',
      endDate: 'Dec 2016',
      description: [
        'Built backend infrastructure for high-growth startup',
        'Designed and implemented scalable API architecture',
        'Implemented monitoring and observability systems'
      ]
    }
  ],
  education: [
    {
      institution: 'University of Washington',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Seattle, WA',
      graduationDate: 'May 2012',
      gpa: '3.9'
    }
  ],
  skills: [
    'System Design',
    'Distributed Systems',
    'Performance Optimization',
    'Java',
    'Python',
    'C++',
    'Kafka',
    'Cassandra',
    'Microservices',
    'Technical Leadership',
    'Mentoring',
    'Architecture'
  ],
  projects: [
    {
      name: 'Real-time Data Platform',
      description: 'Architected and built distributed data streaming platform processing 100M+ events daily serving 500M+ users',
      technologies: ['Kafka', 'Java', 'Cassandra', 'Kubernetes'],
      link: 'github.com/nprice/data-platform'
    },
    {
      name: 'Performance Optimization Program',
      description: 'Led system-wide optimization initiative improving latency by 60% and reducing costs by 40%',
      technologies: ['Profiling', 'System Design', 'Performance Engineering'],
      link: 'github.com/nprice/optimization'
    }
  ],
  certificates: [
    {
      name: 'System Design Course',
      issuer: 'Educative',
      date: '2019'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' }
  ],
  publications: [
    {
      title: 'Designing for Scale: Lessons from 500M User Systems',
      journal: 'ACM Queue',
      date: 'Nov 2022',
      authors: 'N. Price'
    }
  ],
  metrics: [
    { label: 'Users Served', value: '500M+' },
    { label: 'System Uptime', value: '99.99%' },
    { label: 'Performance Gain', value: '+60%' },
    { label: 'Engineers Mentored', value: '20+' }
  ]
};

// Template 20: Personal Brand - Consultant
export const template20Data: ResumeData = {
  name: 'Victoria Torres',
  title: 'Executive Consultant',
  email: 'victoria.torres@email.com',
  phone: '+1 (555) 123-4567',
  location: 'New York, NY',
  website: 'victoriatorres.consulting',
  linkedin: 'linkedin.com/in/victoriatorres',
  github: '',
  portfolio: 'victoriatorres.consulting/portfolio',
  summary: 'Strategic consultant with 12+ years of experience advising Fortune 500 executives on digital transformation, business strategy, and organizational change. Track record of identifying $50M+ in value-creation opportunities and leading successful implementations. Specialized in cloud adoption, AI/ML strategy, and operational excellence.',
  workExperience: [
    {
      company: 'Premier Consulting Group',
      jobTitle: 'Executive Consultant',
      location: 'New York, NY',
      startDate: 'Jan 2021',
      endDate: 'Present',
      description: [
        'Lead strategic consulting engagements for Fortune 100 companies',
        'Identified $50M+ in value-creation opportunities for clients',
        'Advised C-suite executives on digital transformation and AI strategy',
        'Managed team of 5 consultants and delivered 8 major engagements'
      ]
    },
    {
      company: 'Global Strategy Consulting',
      jobTitle: 'Senior Consultant',
      location: 'Boston, MA',
      startDate: 'Jun 2017',
      endDate: 'Dec 2020',
      description: [
        'Conducted strategic analysis for 15+ Fortune 500 clients',
        'Led operational excellence initiatives saving clients $30M+ combined',
        'Facilitated executive workshops and strategy sessions',
        'Delivered findings and recommendations to C-level audiences'
      ]
    },
    {
      company: 'Management Consulting',
      jobTitle: 'Consultant',
      location: 'Chicago, IL',
      startDate: 'Jul 2014',
      endDate: 'May 2017',
      description: [
        'Assisted with client engagements across multiple industries',
        'Conducted market research and competitive analysis',
        'Developed client presentations and reports'
      ]
    }
  ],
  education: [
    {
      institution: 'Harvard Business School',
      degree: 'MBA',
      field: 'Strategic Management',
      location: 'Boston, MA',
      graduationDate: 'May 2014',
      gpa: '3.8'
    },
    {
      institution: 'Yale University',
      degree: 'Bachelor of Science',
      field: 'Economics',
      location: 'New Haven, CT',
      graduationDate: 'May 2012',
      gpa: '3.95'
    }
  ],
  skills: [
    'Strategic Planning',
    'Digital Transformation',
    'Business Analysis',
    'Market Research',
    'Financial Modeling',
    'Organizational Design',
    'Change Management',
    'Data Analytics',
    'Executive Presence',
    'Presentation',
    'Problem Solving',
    'Industry Knowledge'
  ],
  projects: [
    {
      name: 'Digital Transformation Strategy',
      description: 'Developed and led digital transformation roadmap for Fortune 500 retailer identifying $20M+ in value',
      technologies: ['Strategy', 'Business Analysis', 'Change Management'],
      link: 'victoriatorres.consulting/case-studies/digital-transformation'
    },
    {
      name: 'Operational Excellence Program',
      description: 'Led operational excellence initiative across 5 business units identifying and implementing $30M+ in cost reductions',
      technologies: ['Process Optimization', 'Analytics', 'Change Management'],
      link: 'victoriatorres.consulting/case-studies/operational-excellence'
    }
  ],
  certificates: [
    {
      name: 'Reforge Product Strategy',
      issuer: 'Reforge',
      date: '2022'
    },
    {
      name: 'AI Strategy for Business',
      issuer: 'MIT Sloan',
      date: '2021'
    }
  ],
  languages: [
    { name: 'English', proficiency: 'Native' },
    { name: 'Spanish', proficiency: 'Fluent' }
  ],
  publications: [
    {
      title: 'The Future of Digital Transformation in the Enterprise',
      journal: 'Harvard Business Review',
      date: 'Sep 2022',
      authors: 'V. Torres'
    }
  ],
  metrics: [
    { label: 'Value Identified', value: '$50M+' },
    { label: 'Client Engagements', value: '50+' },
    { label: 'Cost Savings', value: '$30M+' },
    { label: 'Fortune 500 Clients', value: '25+' }
  ]
};

// Export a default function to get template data by ID
export function getSampleDataByTemplate(templateId: number): ResumeData {
  const dataMap: Record<number, ResumeData> = {
    1: template1Data,
    2: template2Data,
    3: template3Data,
    4: template4Data,
    5: template5Data,
    6: template6Data,
    7: template7Data,
    8: template8Data,
    9: template9Data,
    10: template10Data,
    11: template11Data,
    12: template12Data,
    13: template13Data,
    14: template14Data,
    15: template15Data,
    16: template16Data,
    17: template17Data,
    18: template18Data,
    19: template19Data,
    20: template20Data
  };

  return dataMap[templateId] || template1Data;
}

// Keep legacy export for backward compatibility
export const sampleResumeData = template1Data;
