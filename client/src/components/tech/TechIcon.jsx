import React, { useState } from 'react';

// Mapping of skill names to local original SVG icon assets and remote official CDN URLs
const ICON_MAP = {
  // Languages
  'javascript': { local: '/icons/javascript.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  'js': { local: '/icons/javascript.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  'c++': { local: '/icons/cpp.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  'cpp': { local: '/icons/cpp.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
  'java': { local: '/icons/java.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', alt: 'Java' },
  'python': { local: '/icons/python.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python' },

  // Backend & APIs
  'node.js': { local: '/icons/nodejs.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  'nodejs': { local: '/icons/nodejs.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  'express.js': { local: '/icons/express.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', alt: 'Express.js' },
  'express': { local: '/icons/express.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', alt: 'Express.js' },
  'rest apis': { local: '/icons/api.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', alt: 'REST APIs' },
  'rest api': { local: '/icons/api.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', alt: 'REST APIs' },
  'rest api design': { local: '/icons/api.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg', alt: 'REST API Design' },
  'graphql': { local: '/icons/graphql.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },

  // Databases
  'mongodb': { local: '/icons/mongodb.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  'mysql': { local: '/icons/mysql.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  'mariadb': { local: '/icons/mariadb.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg', alt: 'MariaDB' },
  'firebase': { local: '/icons/firebase.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', alt: 'Firebase' },

  // Cloud (AWS)
  'aws': { local: '/icons/aws.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
  'ec2': { local: '/icons/ec2.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS EC2' },
  's3': { local: '/icons/s3.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS S3' },
  'rds': { local: '/icons/rds.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS RDS' },
  'iam': { local: '/icons/iam.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS IAM' },
  'cloudwatch': { local: '/icons/cloudwatch.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS CloudWatch' },
  'vpc': { local: '/icons/vpc.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS VPC' },

  // DevOps & Tooling
  'docker': { local: '/icons/docker.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  'jenkins': { local: '/icons/jenkins.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', alt: 'Jenkins' },
  'git': { local: '/icons/git.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  'github': { local: '/icons/github.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', alt: 'GitHub' },
  'terraform': { local: '/icons/terraform.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg', alt: 'Terraform' },
  'kubernetes': { local: '/icons/kubernetes.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' },
  'eks': { local: '/icons/eks.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', alt: 'AWS EKS' },
  'linux': { local: '/icons/linux.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', alt: 'Linux' },
  'shell scripting': { local: '/icons/bash.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', alt: 'Shell Scripting' },
  'bash': { local: '/icons/bash.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', alt: 'Bash' },
  'ci/cd': { local: '/icons/cicd.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', alt: 'CI/CD' },
  'cicd': { local: '/icons/cicd.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', alt: 'CI/CD' },

  // System Design
  'microservices': { local: '/icons/microservices.svg', alt: 'Microservices' },
  'scalability': { local: '/icons/scalability.svg', alt: 'Scalability' },
  'caching': { local: '/icons/caching.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', alt: 'Caching' },
  'load balancing': { local: '/icons/load-balancing.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', alt: 'Load Balancing' },
  'database design': { local: '/icons/database.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', alt: 'Database Design' },

  // Design
  'figma': { local: '/icons/figma.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Figma' },
  'canva': { local: '/icons/canva.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', alt: 'Canva' },
  'wireframing': { local: '/icons/wireframing.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Wireframing' },
  'prototyping': { local: '/icons/wireframing.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Prototyping' },
  'responsive design': { local: '/icons/responsive.svg', alt: 'Responsive Design' },

  // Extra popular stacks
  'react': { local: '/icons/react.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React' },
  'nginx': { local: '/icons/nginx.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', alt: 'Nginx' },
  'redis': { local: '/icons/redis.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', alt: 'Redis' },
  'postman': { local: '/icons/postman.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', alt: 'Postman' },
  'html5': { local: '/icons/html5.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', alt: 'HTML5' },
  'css3': { local: '/icons/css3.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', alt: 'CSS3' },
  'tailwindcss': { local: '/icons/tailwindcss.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS' },
};

export const TechIcon = ({ name, className = "w-6 h-6", size = 24 }) => {
  const [useFallback, setUseFallback] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const norm = name ? name.toLowerCase().trim() : '';
  const iconData = ICON_MAP[norm];

  if (!iconData || loadError) {
    // Default high-contrast fallback terminal icon
    return (
      <svg 
        className={className} 
        viewBox="0 0 24 24" 
        width={size} 
        height={size} 
        fill="none" 
        stroke="#00FF66" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  const imageSrc = useFallback && iconData.cdn ? iconData.cdn : iconData.local;

  return (
    <img
      src={imageSrc}
      alt={iconData.alt || name}
      width={size}
      height={size}
      className={`${className} object-contain select-none pointer-events-none transition-transform duration-300 drop-shadow-sm`}
      loading="lazy"
      onError={() => {
        if (!useFallback && iconData.cdn) {
          setUseFallback(true);
        } else {
          setLoadError(true);
        }
      }}
    />
  );
};
