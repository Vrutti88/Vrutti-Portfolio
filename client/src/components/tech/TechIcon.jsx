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
  'express.js': { local: '/icons/express.svg', alt: 'Express.js' },
  'express': { local: '/icons/express.svg', alt: 'Express.js' },
  'rest apis': { local: '/icons/api.svg', alt: 'REST APIs' },
  'rest api': { local: '/icons/api.svg', alt: 'REST APIs' },
  'rest api design': { local: '/icons/api.svg', alt: 'REST API Design' },
  'graphql': { local: '/icons/graphql.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg', alt: 'GraphQL' },

  // Databases
  'mongodb': { local: '/icons/mongodb.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  'mysql': { local: '/icons/mysql.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', alt: 'MySQL' },
  'mariadb': { local: '/icons/mariadb.svg', alt: 'MariaDB' },
  'firebase': { local: '/icons/firebase.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', alt: 'Firebase' },

  // Cloud (AWS)
  'aws': { local: '/icons/aws.svg', alt: 'AWS' },
  'ec2': { local: '/icons/ec2.svg', alt: 'AWS EC2' },
  's3': { local: '/icons/s3.svg', alt: 'AWS S3' },
  'rds': { local: '/icons/rds.svg', alt: 'AWS RDS' },
  'iam': { local: '/icons/iam.svg', alt: 'AWS IAM' },
  'cloudwatch': { local: '/icons/cloudwatch.svg', alt: 'AWS CloudWatch' },
  'vpc': { local: '/icons/vpc.svg', alt: 'AWS VPC' },

  // DevOps & Tooling
  'docker': { local: '/icons/docker.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  'jenkins': { local: '/icons/jenkins.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', alt: 'Jenkins' },
  'git': { local: '/icons/git.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  'github': { local: '/icons/github.svg', alt: 'GitHub' },
  'terraform': { local: '/icons/terraform.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg', alt: 'Terraform' },
  'kubernetes': { local: '/icons/kubernetes.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' },
  'eks': { local: '/icons/eks.svg', alt: 'AWS EKS' },
  'linux': { local: '/icons/linux.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', alt: 'Linux' },
  'shell scripting': { local: '/icons/bash.svg', alt: 'Shell Scripting' },
  'bash': { local: '/icons/bash.svg', alt: 'Bash' },
  'ci/cd': { local: '/icons/cicd.svg', alt: 'CI/CD' },
  'cicd': { local: '/icons/cicd.svg', alt: 'CI/CD' },

  // System Design
  'microservices': { local: '/icons/microservices.svg', alt: 'Microservices' },
  'scalability': { local: '/icons/scalability.svg', alt: 'Scalability' },
  'caching': { local: '/icons/caching.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', alt: 'Caching' },
  'load balancing': { local: '/icons/load-balancing.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', alt: 'Load Balancing' },
  'database design': { local: '/icons/database.svg', alt: 'Database Design' },

  // Design
  'figma': { local: '/icons/figma.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', alt: 'Figma' },
  'canva': { local: '/icons/canva.svg', cdn: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', alt: 'Canva' },
  'wireframing': { local: '/icons/wireframing.svg', alt: 'Wireframing' },
  'prototyping': { local: '/icons/wireframing.svg', alt: 'Prototyping' },
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

  // Special direct high-res inline SVG render for GitHub to guarantee 100% white Octocat visibility
  if (norm === 'github') {
    return (
      <svg 
        className={`${className} select-none pointer-events-none transition-transform duration-300 drop-shadow-md`} 
        viewBox="0 0 128 128" 
        width={size} 
        height={size}
      >
        <path 
          fill="#FFFFFF" 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
        />
      </svg>
    );
  }

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
