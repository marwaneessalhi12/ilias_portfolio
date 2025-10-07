export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  videoUrl?: string;
  imageUrl?: string;
  link?: string;
  category: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Chatbot Platform',
    description: 'Advanced conversational AI platform with natural language understanding',
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'OpenAI'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    category: 'Web',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Computer Vision System',
    description: 'Real-time object detection and tracking system',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    technologies: ['React', 'TypeScript', 'Firebase', 'Framer Motion'],
    category: 'Web',
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'NLP Text Analytics',
    description: 'Advanced text analysis and sentiment detection system',
    technologies: ['Python', 'spaCy', 'BERT', 'FastAPI', 'Redis'],
    category: 'AI/ML',
    imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT'],
    category: 'Mobile',
    imageUrl: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
