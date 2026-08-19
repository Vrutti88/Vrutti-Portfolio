const skillCategories = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "C++", usage: "Data structures, memory allocation, competitive problem solving", icon: "cpp" },
      { name: "Java", usage: "Object-oriented architectures, multithreading, enterprise backend logic", icon: "java" },
      { name: "Python", usage: "Automation scripts, backend prototyping, data handling", icon: "python" },
      { name: "JavaScript", usage: "Asynchronous runtime, full-stack microservices, modern ES6+", icon: "javascript" }
    ]
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", usage: "Event-driven asynchronous backend runtime for high-throughput APIs", icon: "nodejs" },
      { name: "Express.js", usage: "REST routing, middleware pipelines, rate-limiting, error handling", icon: "express" },
      { name: "REST APIs", usage: "Stateless endpoint design, JSON schemas, status codes, query pagination", icon: "api" },
      { name: "GraphQL", usage: "Schema querying, mutations, resolver patterns, reduced over-fetching", icon: "graphql" }
    ]
  },
  {
    category: "DATABASES",
    skills: [
      { name: "MySQL", usage: "Relational schema design, normalization, ACID transactions, complex joins", icon: "mysql" },
      { name: "MongoDB", usage: "Document schema modeling, aggregation pipelines, Mongoose ODM", icon: "mongodb" },
      { name: "Firebase", usage: "Cloud Firestore, real-time sync, security rules, serverless auth", icon: "firebase" },
      { name: "MariaDB", usage: "High-performance relational storage, RDS instances, indexing", icon: "mariadb" }
    ]
  },
  {
    category: "CLOUD",
    skills: [
      { name: "AWS", usage: "Cloud architecture provisioning, IAM security, scalable hosting", icon: "aws" },
      { name: "EC2", usage: "Virtual compute instances, SSH configurations, security groups", icon: "ec2" },
      { name: "S3", usage: "Object storage buckets, IAM policies, pre-signed upload URLs", icon: "s3" },
      { name: "RDS", usage: "Managed relational database instances, backups, connection pooling", icon: "rds" },
      { name: "IAM", usage: "Principle of least privilege, roles, policies, service credentials", icon: "iam" },
      { name: "CloudWatch", usage: "Server telemetry metrics, log aggregation, threshold alarms", icon: "cloudwatch" },
      { name: "VPC", usage: "Virtual private clouds, subnets, route tables, network isolation", icon: "vpc" }
    ]
  },
  {
    category: "DEVOPS",
    skills: [
      { name: "Docker", usage: "Containerization, multi-stage Dockerfiles, Compose orchestration", icon: "docker" },
      { name: "Jenkins", usage: "Automated CI/CD build pipelines, test runners, deployment hooks", icon: "jenkins" },
      { name: "Git", usage: "Branching strategies, commit history, rebase, merge conflict resolution", icon: "git" },
      { name: "GitHub", usage: "Remote repositories, GitHub Actions workflows, code reviews", icon: "github" },
      { name: "Terraform", usage: "Infrastructure as Code (IaC), declarative cloud provisioning", icon: "terraform" },
      { name: "Kubernetes", usage: "Container orchestration, Pods, Deployments, Services, Ingress", icon: "kubernetes" },
      { name: "EKS", usage: "AWS Elastic Kubernetes Service cluster deployment and management", icon: "eks" },
      { name: "CI/CD", usage: "Continuous integration & deployment pipelines for zero downtime", icon: "cicd" },
      { name: "Linux", usage: "Ubuntu/Debian server administration, permissions, systemd, process logs", icon: "linux" },
      { name: "Shell Scripting", usage: "Bash/Zsh automation scripts, server maintenance, build automation", icon: "terminal" }
    ]
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    ok: true,
    count: skillCategories.length,
    data: skillCategories
  });
}
