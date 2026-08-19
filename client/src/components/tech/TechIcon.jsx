import React from 'react';

export const TechIcon = ({ name, className = "w-6 h-6", size = 24 }) => {
  const norm = name ? name.toLowerCase().trim() : '';

  switch (norm) {
    // ==========================================
    // 1. LANGUAGES
    // ==========================================
    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#F7DF1E" />
          <path fill="#000000" d="m67.312 103.56c3.248 5.6 7.728 9.8 15.68 9.8 8.064 0 13.16-4.032 13.16-19.488V49.072h15.232v44.912c0 23.968-14.056 34.048-31.584 34.048-14.784 0-23.744-7.28-28.448-17.808l15.96-6.664zm-37.072-1.904c4.144 6.72 9.744 11.76 18.032 11.76 7.728 0 12.656-3.808 12.656-9.184 0-6.384-5.04-8.736-13.44-12.32l-4.704-1.96c-13.552-5.712-22.512-12.88-22.512-27.44 0-13.664 10.416-24.192 26.656-24.192 11.648 0 20.048 4.704 25.76 15.008l-12.768 8.176c-2.912-5.152-6.272-7.616-12.992-7.616-5.824 0-9.632 3.696-9.632 8.288 0 5.712 3.808 7.84 11.76 11.312l4.704 2.016c15.904 6.832 24.528 14.112 24.528 28.56 0 16.352-12.768 25.424-29.344 25.424-16.464 0-26.656-8.288-32.032-19.376l17.376-8.288z" />
        </svg>
      );

    case 'c++':
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#00599C" />
          <path fill="#FFFFFF" d="M64 24.8l39.2 39.2L64 103.2 24.8 64z" />
          <path fill="#004482" d="M64 36.8l27.2 27.2L64 91.2 36.8 64z" />
          <text x="36" y="74" fill="#FFFFFF" fontSize="26" fontFamily="monospace" fontWeight="bold">C++</text>
        </svg>
      );

    case 'java':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#1B252E" />
          <path fill="#EA2D2E" d="M45.5 86.8c12.5 1.5 24.6 1.7 36.9-.3 0 0-4.3 4.2-18.4 5-13.6.7-18.5-4.7-18.5-4.7z" />
          <path fill="#007396" d="M40.2 97.4c17.5 2.1 35.8 2.2 53.6-.4 0 0-6.1 5.9-26.7 7.1-19.8 1.1-26.9-6.7-26.9-6.7zm-2.4 12.3c22.3 2.7 45.4 2.8 67.8-.5 0 0-7.8 7.5-33.8 9-25.1 1.4-34-8.5-34-8.5zm43.1-41.2s8.5-9.8-8.1-18.7c-20.2-10.8-4.5-17.5-4.5-17.5s-12.7 4.1-8.6 14.6c4.6 11.9 21.2 12.4 21.2 21.6z" />
          <path fill="#5382A1" d="M54.8 55.9s-10.4 2.4-17.9 12.6c0 0 6.6-4.6 16.4-5.3 10.3-.7 1.5-7.3 1.5-7.3z" />
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#1F2937" />
          <path fill="#3776AB" d="M63.5 16c-28.5 0-26.7 12.3-26.7 12.3l.03 12.8h27.2v3.9H25.8S10 43.2 10 71.7c0 28.5 13.8 27.5 13.8 27.5h8.2v-11.6s-.4-13.8 13.6-13.8h27.1s13.2.2 13.2-12.9V29.3S88.6 16 63.5 16zm-14.7 8.3c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z" />
          <path fill="#FFD43B" d="M64.5 112c28.5 0 26.7-12.3 26.7-12.3l-.03-12.8H64v-3.9h38.2s15.8 1.8 15.8-26.7c0-28.5-13.8-27.5-13.8-27.5h-8.2v11.6s.4 13.8-13.6 13.8H57.3s-13.2-.2-13.2 12.9v31.6s-2.9 13.3 20.4 13.3zm14.7-8.3c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z" />
        </svg>
      );

    // ==========================================
    // 2. BACKEND & APIS
    // ==========================================
    case 'node.js':
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#1B2B1B" />
          <path fill="#5FA04E" d="M64 12.5L18.7 39v50L64 115.5l45.3-26.5V39L64 12.5z" />
          <path fill="#FFFFFF" d="M64 25.5l34.8 20v40L64 105.5 29.2 85.5V45.5L64 25.5zm0 14L42 52v24l22 12.5 22-12.5V52L64 39.5z" />
        </svg>
      );

    case 'express.js':
    case 'express':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#252525" />
          <text x="32" y="82" fill="#00FF66" fontSize="56" fontFamily="monospace" fontWeight="bold">ex</text>
        </svg>
      );

    case 'rest apis':
    case 'rest api':
    case 'rest api design':
    case 'api':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#062817" />
          <rect x="20" y="24" width="88" height="34" rx="8" fill="#00FF66" opacity="0.2" stroke="#00FF66" strokeWidth="6" />
          <rect x="20" y="70" width="88" height="34" rx="8" fill="#00FF66" opacity="0.2" stroke="#00FF66" strokeWidth="6" />
          <circle cx="38" cy="41" r="6" fill="#00FF66" />
          <circle cx="38" cy="87" r="6" fill="#00FF66" />
          <line x1="56" y1="41" x2="94" y2="41" stroke="#00FF66" strokeWidth="6" strokeLinecap="round" />
          <line x1="56" y1="87" x2="94" y2="87" stroke="#00FF66" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    case 'graphql':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#29071E" />
          <path fill="none" stroke="#E10098" strokeWidth="6" d="M64 16l45 26v52L64 120 19 94V42L64 16z" />
          <circle cx="64" cy="16" r="10" fill="#E10098" />
          <circle cx="109" cy="42" r="10" fill="#E10098" />
          <circle cx="109" cy="94" r="10" fill="#E10098" />
          <circle cx="64" cy="120" r="10" fill="#E10098" />
          <circle cx="19" cy="94" r="10" fill="#E10098" />
          <circle cx="19" cy="42" r="10" fill="#E10098" />
        </svg>
      );

    // ==========================================
    // 3. DATABASES
    // ==========================================
    case 'mongodb':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#0A2411" />
          <path fill="#47A248" d="M64 12c0 0-4.5 13.5-9.8 26.5-8.4 20.6-23.7 41.5-12.7 63.7 11 22.2 22.5 21.6 22.5 21.6s11.5.6 22.5-21.6c11-22.2-4.3-43.1-12.7-63.7C68.5 25.5 64 12 64 12z" />
          <path fill="#499D4A" d="M64 12v112s11.5.6 22.5-21.6c11-22.2-4.3-43.1-12.7-63.7C68.5 25.5 64 12 64 12z" />
          <path fill="#FFFFFF" opacity="0.4" d="M64 28c-1.3 17-8.8 42-6.6 61 1.5 12.8 6.6 19.6 6.6 19.6V28z" />
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#0B2B38" />
          <path fill="#00758F" d="M96.3 75.3c-2.4-1.2-5.1-1.9-7.9-2.1-3.6-7.8-8.2-15.1-13.8-21.7-1.7-2-3.5-3.9-5.4-5.7 1.8-.7 3.5-1.5 5.2-2.4 2.8 1.4 5.9 2.1 9.1 2 5.8-.2 11.2-2.7 15.1-6.9 1.1-1.2 2-2.5 2.7-3.9.6-.1 1.2-.1 1.8 0 3.7.8 6.4 3.7 7 7.4.8 5.1-1.6 10.3-6.1 13-2.3 1.4-4.9 2.2-7.7 2.3z" />
          <path fill="#F29111" d="M62.5 51.5c-4.8 5.7-8.7 12.1-11.8 18.9-3.7-.3-7.3.5-10.4 2.3-4.5 2.7-6.9 7.9-6.1 13 .6 3.7 3.3 6.6 7 7.4 5.8 1.2 11.7-.8 15.6-5.2 2.3-2.6 3.7-5.8 4.1-9.3 3.6-6.1 7.9-11.8 12.9-17.1-3.8-3.4-7.6-6.7-11.3-10z" />
        </svg>
      );

    case 'mariadb':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#003545" />
          <ellipse cx="64" cy="48" rx="36" ry="16" fill="#00758F" />
          <path d="M28 48v32c0 8.8 16.1 16 36 16s36-7.2 36-16V48" fill="none" stroke="#FFFFFF" strokeWidth="6" />
          <text x="24" y="112" fill="#FFFFFF" fontSize="18" fontFamily="monospace" fontWeight="bold">MARIADB</text>
        </svg>
      );

    case 'firebase':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#2E1B05" />
          <path fill="#FFA000" d="M21.2 96.5l26.4-49.8-19.8-37.4c-.9-1.8-3.4-1.9-4.5-.2L.8 86.2l20.4 10.3z" />
          <path fill="#F57C00" d="M66.6 51.9l-19-35.8c-1.1-2-4.1-1.9-5 .2L21.2 96.5l45.4-44.6z" />
          <path fill="#FFCA28" d="M81.7 118.7l45.5-25.5-12.8-79.6c-.3-2-2.8-2.9-4.3-1.6L66.6 51.9l15.1 66.8z" />
          <path fill="#FFA000" d="M21.2 96.5l60.5 22.2L66.6 51.9 21.2 96.5z" />
        </svg>
      );

    // ==========================================
    // 4. CLOUD (AWS SUITE FULL-COLOR BADGES)
    // ==========================================
    case 'aws':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#232F3E" />
          <path fill="#FF9900" d="M42.4 72.3c-7.9 0-14.1-2.1-18.4-6.4-4.4-4.3-6.6-10.3-6.6-18 0-7.8 2.2-13.8 6.6-18.1 4.4-4.3 10.5-6.5 18.4-6.5 7.8 0 13.9 2.2 18.3 6.5 4.4 4.3 6.6 10.3 6.6 18.1 0 7.7-2.2 13.7-6.6 18-4.4 4.3-10.5 6.4-18.3 6.4zm0-9.2c4.8 0 8.5-1.5 11-4.6 2.5-3.1 3.8-7.3 3.8-12.7 0-5.3-1.3-9.5-3.8-12.6-2.5-3.1-6.2-4.6-11-4.6-4.9 0-8.6 1.5-11.1 4.6-2.5 3.1-3.7 7.3-3.7 12.6 0 5.4 1.2 9.6 3.7 12.7 2.5 3.1 6.2 4.6 11.1 4.6zm69.9 8.2l-9.1-38h9.6l5.7 27.6 5.8-27.6h9.3l-9.2 38h-12.1zm-44.5 1.5L84 45.9h8.7l16.2 26.9-1.2.9-10.4-17.7-6.2 10.5 8.7 14.8-12-.4-1.2-1.3z" />
          <path fill="#FF9900" d="M18.8 88.8c23.6 17.4 55.4 17.5 79.5 3.5 2.5-1.5 5.5.9 4.2 3.5-14.2 14.5-40 21.2-64.8 15.3-10.5-2.5-20.2-7.8-28.1-15.1-2.5-2.3.2-5.4 3.2-3.7l6-3.5z" />
        </svg>
      );

    case 'ec2':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#FF9900" />
          <rect x="28" y="28" width="72" height="72" rx="14" fill="#232F3E" />
          <rect x="46" y="46" width="36" height="36" rx="8" fill="#FF9900" />
          <text x="49" y="71" fill="#232F3E" fontSize="18" fontFamily="monospace" fontWeight="bold">EC2</text>
          {/* Chip connectors */}
          <line x1="46" y1="18" x2="46" y2="28" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="82" y1="18" x2="82" y2="28" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="46" y1="100" x2="46" y2="110" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="82" y1="100" x2="82" y2="110" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="18" y1="46" x2="28" y2="46" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="18" y1="82" x2="28" y2="82" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="100" y1="46" x2="110" y2="46" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
          <line x1="100" y1="82" x2="110" y2="82" stroke="#232F3E" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );

    case 's3':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#E05243" />
          <path fill="#232F3E" d="M64 22l44 24v40l-44 24-44-24V46l44-24z" />
          <path fill="#E05243" d="M64 36l30 16-30 16-30-16 30-16z" />
          <text x="48" y="86" fill="#FFFFFF" fontSize="22" fontFamily="monospace" fontWeight="bold">S3</text>
        </svg>
      );

    case 'rds':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#3B48CC" />
          <ellipse cx="64" cy="38" rx="34" ry="14" fill="#232F3E" />
          <path d="M30 38v48c0 7.7 15.2 14 34 14s34-6.3 34-14V38" fill="none" stroke="#232F3E" strokeWidth="8" />
          <text x="44" y="74" fill="#FFFFFF" fontSize="22" fontFamily="monospace" fontWeight="bold">RDS</text>
        </svg>
      );

    case 'iam':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#E7157B" />
          <path fill="#232F3E" d="M64 20s36 10 36 34c0 30-36 50-36 50S28 84 28 54c0-24 36-34 36-34z" />
          <circle cx="64" cy="52" r="12" fill="#E7157B" />
          <rect x="60" y="60" width="8" height="20" rx="3" fill="#E7157B" />
          <rect x="64" y="68" width="10" height="5" fill="#E7157B" />
        </svg>
      );

    case 'cloudwatch':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#FF4F8B" />
          <rect x="22" y="22" width="84" height="84" rx="16" fill="#232F3E" />
          <polyline points="32 74 50 48 68 84 86 38 100 66" fill="none" stroke="#FF4F8B" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'vpc':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#8C4FFF" />
          <rect x="24" y="24" width="80" height="80" rx="16" fill="#232F3E" />
          <circle cx="44" cy="44" r="8" fill="#8C4FFF" />
          <circle cx="84" cy="44" r="8" fill="#8C4FFF" />
          <circle cx="44" cy="84" r="8" fill="#8C4FFF" />
          <circle cx="84" cy="84" r="8" fill="#8C4FFF" />
          <line x1="44" y1="44" x2="84" y2="44" stroke="#8C4FFF" strokeWidth="4" />
          <line x1="44" y1="84" x2="84" y2="84" stroke="#8C4FFF" strokeWidth="4" />
          <line x1="44" y1="44" x2="44" y2="84" stroke="#8C4FFF" strokeWidth="4" />
          <line x1="84" y1="44" x2="84" y2="84" stroke="#8C4FFF" strokeWidth="4" />
        </svg>
      );

    // ==========================================
    // 5. DEVOPS & INFRASTRUCTURE FULL-COLOR
    // ==========================================
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#2496ED" />
          <path fill="#FFFFFF" d="M118.8 55.5c-2.4-16.7-15.6-21.4-15.6-21.4s-8.1-4.2-22.1 3.5c-4.4-1.3-9.5-2-15-2-5.4 0-10.4.7-14.8 2C40.6 30 32.5 34.2 32.5 34.2s-13.3 4.6-15.6 21.4c-1.3 9.4 1.3 20.3 8.3 28.5C37 97.8 55.4 101 69.1 101c27.1 0 50.1-13.7 54.4-36.8 1.4-7.5.3-14.9-1.7-8.7zm-69.3-5.2h12v11.9h-12V50.3zm0-15.5h12v11.9h-12V34.8zm15.6 15.5h12v11.9h-12V50.3zm0-15.5h12v11.9h-12V34.8zm15.6 15.5h12v11.9h-12V50.3zm0-15.5h12v11.9h-12V34.8zM36.9 50.3h12v11.9h-12V50.3z" />
        </svg>
      );

    case 'jenkins':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#D24939" />
          <circle cx="64" cy="46" r="22" fill="#FFFFFF" />
          <rect x="42" y="70" width="44" height="38" rx="8" fill="#232F3E" />
          <circle cx="56" cy="44" r="4" fill="#D24939" />
          <circle cx="72" cy="44" r="4" fill="#D24939" />
          <path d="M56 54 Q64 62 72 54" stroke="#D24939" strokeWidth="3" fill="none" />
        </svg>
      );

    case 'git':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#F05032" />
          <path fill="#FFFFFF" d="M108.6 55.4L68.6 15.4c-3.5-3.5-9.8-3.5-13.3 0L15.4 55.3c-3.5 3.5-3.5 9.8 0 13.3l40 40c3.5 3.5 9.8 3.5 13.3 0l39.9-39.9c3.5-3.5 3.5-9.8 0-13.3zm-36 7c-1.8-1.1-4-1.4-6-1V43.8c1.7-.8 3-2.3 3.6-4.2 1.2-3.8-.8-7.9-4.6-9.1-3.8-1.2-7.9.8-9.1 4.6-.9 2.8-.1 5.8 2 7.7v18.7c-2.1 1-3.6 2.8-4.1 5.1-1 4.3 1.4 8.7 5.6 10.1 3.5 1.2 7.3.1 9.6-2.5l14.7 8.5c-.2.8-.2 1.6 0 2.4.9 3.9 4.8 6.3 8.7 5.4 3.9-.9 6.3-4.8 5.4-8.7-.8-3.5-3.8-6-7.4-6-1.5 0-3 .4-4.2 1.3L72.6 62.4z" />
        </svg>
      );

    case 'github':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#181717" />
          <path fill="#FFFFFF" fillRule="evenodd" clipRule="evenodd" d="M64 16c-26.6 0-48 21.4-48 48 0 21.2 13.8 39.2 32.9 45.6 2.4.4 3.3-1 3.3-2.3 0-1.2-.1-5-.1-8.9-13.4 2.9-16.2-5.7-16.2-5.7-2.2-5.5-5.4-7-5.4-7-4.4-3 .3-2.9.3-2.9 4.8.3 7.4 5 7.4 5 4.3 7.3 11.3 5.2 14 4 0.4-3.1 1.7-5.2 3-6.4-10.7-1.2-21.9-5.3-21.9-23.8 0-5.3 1.9-9.6 5-13-.5-1.2-2.2-6.1.5-12.8 0 0 4.1-1.3 13.3 5 3.9-1.1 8-1.6 12.1-1.6s8.2.5 12.1 1.6c9.2-6.3 13.3-5 13.3-5 2.6 6.7 1 11.6.5 12.8 3.1 3.4 5 7.7 5 13 0 18.6-11.3 22.5-22 23.7 1.7 1.5 3.3 4.4 3.3 8.9 0 6.4-.1 11.6-.1 13.2 0 1.3 0.9 2.8 3.3 2.3C98.2 103.2 112 85.2 112 64c0-26.6-21.4-48-48-48z" />
        </svg>
      );

    case 'terraform':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#7B42BC" />
          <path fill="#FFFFFF" d="M48.8 43.6L12.5 64.4V22.8L48.8 2v41.6zm4.8 2.8L90 25.6v41.6L53.6 88V46.4zm0 47.2L90 72.8v41.6L53.6 135V93.6zm35.8-47.2l36.3-20.8v41.6L89.4 88V46.4z" />
        </svg>
      );

    case 'kubernetes':
    case 'eks':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#326CE5" />
          <path fill="#FFFFFF" d="M64 16l42 24v48L64 112 22 88V40L64 16z" />
          <circle cx="64" cy="64" r="16" fill="#326CE5" />
          <line x1="64" y1="28" x2="64" y2="48" stroke="#326CE5" strokeWidth="6" />
          <line x1="64" y1="80" x2="64" y2="100" stroke="#326CE5" strokeWidth="6" />
          <line x1="32" y1="46" x2="50" y2="56" stroke="#326CE5" strokeWidth="6" />
          <line x1="78" y1="72" x2="96" y2="82" stroke="#326CE5" strokeWidth="6" />
          <line x1="96" y1="46" x2="78" y2="56" stroke="#326CE5" strokeWidth="6" />
          <line x1="50" y1="72" x2="32" y2="82" stroke="#326CE5" strokeWidth="6" />
        </svg>
      );

    case 'linux':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#FCC624" />
          <path fill="#000000" d="M64 16c-17.7 0-32 14.3-32 32v24c0 17.7 14.3 32 32 32s32-14.3 32-32V48c0-17.7-14.3-32-32-32z" />
          <circle cx="50" cy="44" r="5" fill="#FFFFFF" />
          <circle cx="78" cy="44" r="5" fill="#FFFFFF" />
          <circle cx="51" cy="45" r="2.5" fill="#000000" />
          <circle cx="77" cy="45" r="2.5" fill="#000000" />
          <path fill="#FFA500" d="M64 54c-6 0-10 5-10 9s4 9 10 9 10-5 10-9-4-9-10-9z" />
          <path fill="#FFFFFF" d="M64 68c-12 0-20 8-20 18 0 8 8 14 20 14s20-6 20-14c0-10-8-18-20-18z" />
        </svg>
      );

    case 'shell scripting':
    case 'cicd':
    case 'ci/cd':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#0A331E" />
          <polyline points="28 92 64 56 28 20" fill="none" stroke="#00FF66" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="72" y1="96" x2="108" y2="96" stroke="#00FF66" strokeWidth="12" strokeLinecap="round" />
        </svg>
      );

    // ==========================================
    // 6. SYSTEM DESIGN FULL-COLOR BADGES
    // ==========================================
    case 'microservices':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#A855F7" />
          <rect x="20" y="20" width="34" height="34" rx="8" fill="#232F3E" />
          <rect x="74" y="20" width="34" height="34" rx="8" fill="#232F3E" />
          <rect x="47" y="74" width="34" height="34" rx="8" fill="#232F3E" />
          <line x1="37" y1="54" x2="37" y2="91" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="4 4" />
          <line x1="91" y1="54" x2="91" y2="91" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="4 4" />
          <line x1="37" y1="91" x2="91" y2="91" stroke="#FFFFFF" strokeWidth="6" />
        </svg>
      );

    case 'scalability':
    case 'load balancing':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#00D8FF" />
          <rect x="20" y="20" width="88" height="88" rx="16" fill="#0B1E2E" />
          <polyline points="32 86 54 60 74 72 96 36" fill="none" stroke="#00D8FF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="76 36 96 36 96 56" fill="none" stroke="#00D8FF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'caching':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#F59E0B" />
          <rect x="20" y="20" width="88" height="88" rx="16" fill="#241B08" />
          <polygon points="70 24 34 70 64 70 58 104 94 58 64 58 70 24" fill="#F59E0B" />
        </svg>
      );

    case 'database design':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#3B48CC" />
          <rect x="20" y="24" width="88" height="24" rx="6" fill="#FFFFFF" />
          <rect x="20" y="52" width="88" height="24" rx="6" fill="#FFFFFF" opacity="0.8" />
          <rect x="20" y="80" width="88" height="24" rx="6" fill="#FFFFFF" opacity="0.8" />
          <circle cx="32" cy="36" r="4" fill="#3B48CC" />
          <circle cx="32" cy="64" r="4" fill="#3B48CC" />
          <circle cx="32" cy="92" r="4" fill="#3B48CC" />
        </svg>
      );

    // ==========================================
    // 7. DESIGN
    // ==========================================
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#1E1E1E" />
          <path fill="#F24E1E" d="M42 45c0-10 8-18 18-18h18v36H60c-10 0-18-8-18-18z" />
          <path fill="#A259FF" d="M42 81c0-10 8-18 18-18h18v36H60c-10 0-18-8-18-18z" />
          <path fill="#0ACF83" d="M42 99c0 10 8 18 18 18s18-8 18-18V81H60c-10 0-18 8-18 18z" />
          <path fill="#FF7262" d="M60 27h18c10 0 18 8 18 18s-8 18-18 18H60V27z" />
          <path fill="#1ABCFE" d="M78 63c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18z" />
        </svg>
      );

    case 'canva':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <defs>
            <linearGradient id="canvaLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="50%" stopColor="#2E7CF6" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <rect width="128" height="128" rx="20" fill="url(#canvaLogoGrad)" />
          <path
            fill="#FFFFFF"
            d="M87.5 48.5c-2.8-6.2-8-10.2-14.8-11.4-10.2-1.9-20.2 1.5-27.2 8.9-9.5 10-12.8 25.1-8.1 37.8 4.1 11.2 13.8 18.8 25.9 19.6 11.7.8 21.9-5.2 27.1-15.8 1.2-2.4.2-5.3-2.2-6.5-2.4-1.2-5.3-.2-6.5 2.2-3.7 7.4-10.9 11.6-19.2 11-8.6-.6-15.6-6.3-18.5-14.5-3.2-9.3-.9-20.4 6-27.7 5.1-5.4 12.3-8 19.6-6.6 4.9 1 8.5 3.9 10.4 8.3 1.5 3.7 1.1 7.3-.8 10.8-1.9 3.7-5.2 6.1-9.2 7-4.4 1-8.7-.1-11.9-3.1-2-1.9-5.3-1.8-7.2.2-1.9 2-1.8 5.3.2 7.2 4.9 4.6 11.7 6.4 18.5 4.9 6.3-1.4 11.5-5.3 14.5-11 2.9-5.4 3.6-11.5 1.2-17.6z"
          />
        </svg>
      );

    case 'wireframing':
    case 'prototyping':
    case 'responsive design':
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#2E184D" />
          <rect x="20" y="24" width="88" height="60" rx="10" fill="none" stroke="#A855F7" strokeWidth="8" />
          <line x1="44" y1="104" x2="84" y2="104" stroke="#A855F7" strokeWidth="8" strokeLinecap="round" />
          <line x1="64" y1="84" x2="64" y2="104" stroke="#A855F7" strokeWidth="8" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 128 128" width={size} height={size}>
          <rect width="128" height="128" rx="20" fill="#0A331E" />
          <polyline points="36 84 64 56 36 28" fill="none" stroke="#00FF66" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="72" y1="84" x2="100" y2="84" stroke="#00FF66" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );
  }
};
