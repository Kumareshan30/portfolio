import { useState } from 'react';

interface ExperienceEntry {
  company: string;
  title: string;
  date: string;
  tech: string[];
  details: string;
}

export function Experience() {
  const timeline: ({ company: string; title: string; date: string; tech: string[]; bullets: string[]; skillsUsed: string[]; })[] = [
    {
      company: 'Monash University',
      title: 'Master of Science in Data Science',
      date: '2023 - Present',
      tech: ['R', 'Shiny', 'Python', 'Machine Learning'],
      bullets: [
        'Completed coursework in Big Data Analytics, Statistical Modelling, and Machine Learning',
        'Built interactive R Shiny dashboards for hydrological data visualization',
        'Conducted time-series analysis using ARIMA and Prophet on climate datasets',
        'Collaborated on research project applying clustering algorithms to socioeconomic data',
        'Authored papers on model interpretability and reproducibility in ML research'
      ],
      skillsUsed: ['R', 'Shiny', 'ARIMA', 'Prophet']
    },
    {
      company: 'Deloitte Consulting',
      title: 'Consultant',
      date: 'Aug 2020 - Jul 2023',
      tech: ['React', 'TypeScript', 'Java', 'Spring Boot', 'REST APIs'],
      bullets: [
        'Led modernization of legacy applications to React/TypeScript, improving UI performance by 40%',
        'Designed and implemented microservices with Spring Boot to support 500K+ concurrent users',
        'Optimized CI/CD pipelines reducing deployment times by 60%',
        'Collaborated with cross-functional teams to define system architecture and REST API contracts',
        'Conducted code reviews and mentoring, boosting team productivity by 25%'
      ],
      skillsUsed: ['React', 'TypeScript', 'Java', 'Spring Boot', 'CI/CD']
    },
    {
      company: 'Intentico.ai (Movius Corp)',
      title: 'Data Science Intern',
      date: 'Jan 2020 - Jul 2020',
      tech: ['Python', 'NLP', 'SQL', 'Chatbots'],
      bullets: [
        'Developed NLP-driven chatbots achieving 85%+ F1-score in intent classification',
        'Implemented data ingestion pipelines with Python and SQL, handling 1M+ messages/week',
        'Performed EDA and feature engineering for conversational datasets',
        'Automated evaluation scripts to track model performance over time',
        'Presented findings and dashboards to stakeholders, influencing product roadmap'
      ],
      skillsUsed: ['Python', 'NLTK', 'scikit-learn', 'SQL']
    },
    {
      company: 'CMR Institute of Technology',
      title: 'Bachelor of Engineering, Information Science',
      date: 'Graduated Jul 2020',
      tech: ['Python', 'Cloud Computing', 'Machine Learning'],
      bullets: [
        'Designed SLAM LIDAR mapping system for autonomous rover project',
        'Developed ROS-based navigation modules using Python on Raspberry Pi',
        'Implemented Hadoop and Spark pipelines for 2D map data processing',
        'Created Flask backend and React frontend for rover control dashboard',
        'Received merit scholarship for academic excellence in engineering courses'
      ],
      skillsUsed: ['Python', 'ROS', 'Hadoop', 'Spark', 'Flask', 'React']
    }
  ];

  const [activeExp, setActiveExp] = useState<typeof timeline[0] | null>(null);

 return (
  <section id="experience" className="py-20 px-8 max-w-7xl mx-auto scroll-mt-20">
  <h3 className="text-4xl font-semibold text-primary mb-8">Experience & Education</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {timeline.map((item) => (
      <button
        key={item.company}
        onClick={() => setActiveExp(item)}
        className="w-full text-left p-6 bg-surface rounded-lg shadow hover:bg-surface/80 transition"
      >
        <h4 className="text-xl font-medium text-primary">{item.company}</h4>
        <p className="text-accent">{item.title} · {item.date}</p>
        <ul className="flex flex-wrap gap-2 mt-2">
          {item.tech.map((t) => (
            <li key={t} className="text-xs bg-surface/50 px-2 py-1 rounded">{t}</li>
          ))}
        </ul>
      </button>
    ))}
  </div>
  {activeExp && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-background text-accent p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto overflow-auto max-h-[90vh]">
        <h4 className="text-2xl font-bold text-primary mb-4">{activeExp.company}</h4>
        <p className="text-accent mb-2">{activeExp.title} · {activeExp.date}</p>
        <div className="mb-4">
          <h5 className="font-medium text-primary mb-2">Highlights:</h5>
          <ul className="list-disc list-inside text-accent space-y-1">
            {activeExp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
        <h5 className="font-medium text-primary mb-2">Technologies Used:</h5>
        <ul className="flex flex-wrap gap-2 mb-6">
          {activeExp.skillsUsed.map((s) => (
            <li key={s} className="text-sm bg-surface/50 px-2 py-1 rounded">{s}</li>
          ))}
        </ul>
        <button
          onClick={() => setActiveExp(null)}
          className="px-5 py-2 bg-primary text-background rounded hover:bg-primary/90 transition"
        >
          Close
        </button>
      </div>
    </div>
  )}
</section>
 )
}
