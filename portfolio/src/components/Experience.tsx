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
      date: 'Jul 2023 – Jun 2025',
      tech: ['R', 'Shiny', 'Python', 'Machine Learning', 'Big Data'],
      bullets: [
        'Completed core courses in Foundations of Data Science and Statistical Data Modelling, mastering the mathematics and Python implementations of linear models, regularization, and inference.',
        'Built interactive R Shiny dashboards and D3.js visualizations for hydrological and socioeconomic data, reinforcing skills in Data Exploration & Visualization.',
        'Designed and implemented scalable data pipelines using Apache Spark (RDDs & DataFrames) and Spark SQL for the “Data Processing for Big Data” module, processing >10M records.',
        'Applied advanced Data Wrangling techniques in Python (pandas, NumPy) to clean, transform, and integrate disparate datasets for coursework and research projects.',
        'Conducted time-series analysis using ARIMA and Prophet in the “Machine Learning” and “Data Exploration and Visualisation” modules, forecasting climate and economic indicators.',
        'Developed and tuned supervised and unsupervised models—including clustering, tree-based methods, and neural networks—through hands-on assignments in Machine Learning 2.',
        'Completed practical projects in Industry Experience Studio and Professional Practice, collaborating with multidisciplinary teams to deliver data-driven solutions under Agile workflows.',
        'Leveraged Tableau and Power BI to create interactive dashboards for “Applied Data Analysis” and “Data Exploration and Visualisation”, communicating insights to stakeholders.',
        'Studied Mathematical Foundations for Data Science & AI, deepening understanding of optimization, probability, and numerical methods underpinning modern algorithms.'
      ],
      skillsUsed: [
        'R', 'Shiny', 'ggplot2', 'D3.js',
        'Python', 'pandas', 'NumPy', 'SciPy',
        'Apache Spark (RDD/DataFrame)', 'Spark SQL',
        'ARIMA', 'Prophet', 'Tableau', 'Power BI',
        'Machine Learning (scikit-learn, TensorFlow)'
      ]
    },
    {
      company: 'Deloitte Consulting',
      title: 'Consultant',
      date: 'Aug 2020 – Jul 2023',
      tech: [
        'React.js',
        'TypeScript',
        'Java',
        'Spring Boot',
        'Python',
        'Docker',
        'Azure',
        'Power BI'
      ],
      bullets: [
        'Led application modernization initiatives using React.js/TypeScript and Java Spring Boot, designing and implementing high-performance RESTful APIs that supported 500,000 concurrent users—preventing revenue losses exceeding $200 million and enabling seamless data interaction for high-traffic applications.',
        'Developed and deployed scalable microservices in Python (OOP), leveraging NLTK, PyMongo, NumPy, Pandas, SciPy, Matplotlib, Seaborn, TensorFlow, and BeautifulSoup—achieving a 30% improvement in overall service performance.',
        'Designed and implemented automated data workflows and analytics pipelines using Python scripts, Docker containers, and Azure Cloud; orchestrated jobs with Argo Workflows and RabbitMQ, and managed data persistence via SQLAlchemy—improving data accessibility by 40%, reducing system downtime by 25%, and enhancing operational reliability.',
        'Built interactive Power BI dashboards to surface key business metrics; presented data-driven insights to senior management, which accelerated decision-making by 20% and drove a 15% boost in operational efficiency through optimized process revisions.',
        'Earned “Excellence” and “Applause” awards for leading cross-functional teams to deliver strategic projects 10% ahead of schedule, consistently exceeding both technical and client expectations.'
      ],
      skillsUsed: [
        'React.js',
        'TypeScript',
        'Java',
        'Spring Boot',
        'Python',
        'NLTK',
        'PyMongo',
        'NumPy',
        'Pandas',
        'SciPy',
        'Matplotlib',
        'Seaborn',
        'TensorFlow',
        'BeautifulSoup',
        'Docker',
        'Azure',
        'Argo Workflows',
        'RabbitMQ',
        'SQLAlchemy',
        'Power BI'
      ]
    },
    {
      company: 'Intentico.ai (Movius Corp)',
      title: 'Data Science Intern',
      date: 'Jan 2020 – Jul 2020',
      tech: [
        'Python',
        'NLP',
        'Machine Learning',
        'SQL',
        'Chatbots'
      ],
      bullets: [
        'Engineered advanced AI-driven customer service chatbots using NLP and machine learning techniques for clients like Clovia and SAP Ariba, directly contributing to securing new contracts worth $500,000.',
        'Systematically evaluated the performance of predictive models using precision, recall, and F1-score metrics to align with strategic goals, enhancing stakeholder satisfaction and project deliverables.',
        'Collaborated with the Principal Data Scientist to develop and refine key proof-of-concepts for an in-house AI platform, boosting product capabilities and accelerating market readiness.',
        'Optimized data workflows by implementing automated collection and preprocessing pipelines in Python and SQL, reducing processing time by 40% and increasing data accuracy for downstream analytics.'
      ],
      skillsUsed: [
        'Python',
        'NLTK',
        'scikit-learn',
        'SQL',
        'SpaCy',
        'Pandas'
      ]
    },
    {
      company: 'CMR Institute of Technology',
      title: 'Bachelor of Engineering, Information Science',
      date: 'Graduated Jul 2020',
      tech: ['Python', 'Cloud Computing', 'Machine Learning', 'Steganography', 'Internet of Things'],
      bullets: [
        'Designed SLAM LIDAR mapping system for autonomous rover project',
        'Developed ROS-based navigation modules using Python on Raspberry Pi',
        'Implemented Hadoop and Spark pipelines for 2D map data processing',
        'Created Flask backend and React frontend for rover control dashboard',
        'Received merit scholarship for academic excellence in engineering courses'
      ],
      skillsUsed: ['Python', 'Cloud Computing', 'Flask', 'React', 'JAVA', 'Data Structures and Algorithms']
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
