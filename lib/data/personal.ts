export const personalInfo = {
  name: "Ray",
  fullName: "Ray Zouku",
  birthDate: "2005-07-09",
  location: "Jakarta - Kelapa Gading",
  email: "zoukuray@gmail.com",
  gpa: 3.68,
  languages: ["Indonesian", "English"],
  social: {
    github: "RayZouku",
    linkedin: "ray-zouku",
    discord: "rayzouku"
  },
  bio: {
    en: "Passionate Technology Information student with expertise in modern web development and software engineering. Currently pursuing my degree while building innovative digital solutions.",
    id: "Mahasiswa Teknologi Informasi yang bersemangat dengan keahlian dalam pengembangan web modern dan rekayasa perangkat lunak. Saat ini sedang menempuh pendidikan sambil membangun solusi digital yang inovatif."
  }
}

export const education = [
  {
    id: "university",
    institution: "Universitas Bina Sarana Informatika",
    degree: "Teknologi Informasi",
    period: "2024 - Present",
    gpa: 3.68,
    status: "current",
    description: {
      en: "Currently pursuing Bachelor's degree in Information Technology with focus on software development and system analysis.",
      id: "Saat ini menempuh gelar Sarjana Teknologi Informasi dengan fokus pada pengembangan perangkat lunak dan analisis sistem."
    }
  },
  {
    id: "vocational",
    institution: "SMKS Dinamika Pembangunan 1 Jakarta",
    degree: "Teknik Instalasi Tenaga Listrik",
    period: "2022 - 2024",
    status: "completed",
    description: {
      en: "Vocational High School specializing in Electrical Power Installation Engineering, providing strong foundation in technical problem-solving.",
      id: "Sekolah Menengah Kejuruan dengan spesialisasi Teknik Instalasi Tenaga Listrik, memberikan dasar yang kuat dalam pemecahan masalah teknis."
    }
  },
  {
    id: "junior",
    institution: "SMPN 123 Jakarta",
    degree: "Junior High School",
    period: "2019 - 2021",
    status: "completed",
    description: {
      en: "Completed junior high school education with strong academic performance.",
      id: "Menyelesaikan pendidikan sekolah menengah pertama dengan prestasi akademik yang baik."
    }
  },
  {
    id: "elementary",
    institution: "SDN KGT 03",
    degree: "Elementary School",
    period: "2011 - 2018",
    status: "completed",
    description: {
      en: "Foundation education with early interest in technology and problem-solving.",
      id: "Pendidikan dasar dengan minat awal pada teknologi dan pemecahan masalah."
    }
  }
]

export const experience = [
  {
    id: "indoprintan",
    company: "PT Indoprintan Adi Perkasa",
    position: "Administration Staff",
    period: "February 2024 - July 2024",
    status: "completed",
    description: {
      en: "Managed administrative tasks, data entry, and document processing. Developed organizational skills and attention to detail while supporting daily operations.",
      id: "Mengelola tugas administratif, entri data, dan pemrosesan dokumen. Mengembangkan keterampilan organisasi dan perhatian terhadap detail sambil mendukung operasi harian."
    },
    achievements: [
      {
        en: "Streamlined document processing workflow",
        id: "Merampingkan alur kerja pemrosesan dokumen"
      },
      {
        en: "Maintained 99% accuracy in data entry tasks",
        id: "Mempertahankan akurasi 99% dalam tugas entri data"
      },
      {
        en: "Collaborated effectively with cross-functional teams",
        id: "Berkolaborasi secara efektif dengan tim lintas fungsi"
      }
    ]
  }
]

export const skills = {
  languages: [
    { name: "Python", level: 85, category: "backend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Java", level: 80, category: "backend" },
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "C#", level: 75, category: "backend" },
    { name: "Rust", level: 70, category: "systems" },
    { name: "Go", level: 75, category: "backend" },
    { name: "Kotlin", level: 80, category: "mobile" }
  ],
  frameworks: [
    { name: "Next.js", level: 90, category: "frontend" },
    { name: "React", level: 88, category: "frontend" },
    { name: "Angular", level: 82, category: "frontend" },
    { name: "Vue", level: 80, category: "frontend" },
    { name: "Vite", level: 85, category: "tooling" },
    { name: "Tauri", level: 75, category: "desktop" },
    { name: "Electron", level: 78, category: "desktop" },
    { name: "Flutter", level: 82, category: "mobile" },
    { name: "React Native", level: 80, category: "mobile" },
    { name: "Lynx.js", level: 70, category: "framework" }
  ],
  categories: {
    frontend: ["Next.js", "React", "Angular", "Vue", "TypeScript", "JavaScript", "HTML", "CSS"],
    backend: ["Python", "Java", "C#", "Go", "Node.js"],
    mobile: ["Flutter", "React Native", "Kotlin"],
    desktop: ["Tauri", "Electron"],
    systems: ["Rust", "Go"],
    tooling: ["Vite", "Webpack", "Git"]
  }
}