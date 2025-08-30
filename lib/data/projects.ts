export interface Project {
  id: string
  title: string
  description: {
    en: string
    id: string
  }
  longDescription: {
    en: string
    id: string
  }
  technologies: string[]
  category: string
  status: 'completed' | 'in-progress' | 'planned'
  featured: boolean
  images: string[]
  links: {
    github?: string
    live?: string
    demo?: string
  }
  startDate: string
  endDate?: string
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Professional Portfolio Website",
    description: {
      en: "Modern, responsive portfolio website built with Next.js 15 and advanced animations",
      id: "Website portofolio modern dan responsif yang dibangun dengan Next.js 15 dan animasi canggih"
    },
    longDescription: {
      en: "A premium portfolio website showcasing modern web development skills with smooth animations, dark/light mode, multilingual support, and optimal SEO. Features include scroll effects, hover animations, and a responsive design that works seamlessly across all devices.",
      id: "Website portofolio premium yang menampilkan keterampilan pengembangan web modern dengan animasi halus, mode gelap/terang, dukungan multibahasa, dan SEO optimal. Fitur termasuk efek scroll, animasi hover, dan desain responsif yang bekerja dengan mulus di semua perangkat."
    },
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Next-intl"],
    category: "Web Development",
    status: "in-progress",
    featured: true,
    images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg"],
    links: {
      github: "https://github.com/RayZouku/portfolio",
      live: "https://rayzouku.dev"
    },
    startDate: "2024-12"
  },
  {
    id: "task-management-app",
    title: "Advanced Task Management System",
    description: {
      en: "Full-stack task management application with real-time collaboration features",
      id: "Aplikasi manajemen tugas full-stack dengan fitur kolaborasi real-time"
    },
    longDescription: {
      en: "A comprehensive task management system built with modern technologies, featuring real-time updates, team collaboration, project tracking, and advanced filtering. Includes user authentication, role-based permissions, and responsive design.",
      id: "Sistem manajemen tugas komprehensif yang dibangun dengan teknologi modern, menampilkan pembaruan real-time, kolaborasi tim, pelacakan proyek, dan penyaringan canggih. Termasuk autentikasi pengguna, izin berbasis peran, dan desain responsif."
    },
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    category: "Full Stack",
    status: "completed",
    featured: true,
    images: ["/projects/task-app-1.jpg", "/projects/task-app-2.jpg"],
    links: {
      github: "https://github.com/RayZouku/task-manager",
      demo: "https://task-manager-demo.vercel.app"
    },
    startDate: "2024-08",
    endDate: "2024-11"
  },
  {
    id: "mobile-weather-app",
    title: "Weather Forecast Mobile App",
    description: {
      en: "Cross-platform weather application with beautiful UI and accurate forecasts",
      id: "Aplikasi cuaca lintas platform dengan UI yang indah dan prakiraan yang akurat"
    },
    longDescription: {
      en: "A beautiful weather application built with Flutter, featuring accurate weather forecasts, location-based services, interactive maps, and customizable widgets. Supports multiple cities, weather alerts, and offline functionality.",
      id: "Aplikasi cuaca yang indah dibangun dengan Flutter, menampilkan prakiraan cuaca yang akurat, layanan berbasis lokasi, peta interaktif, dan widget yang dapat disesuaikan. Mendukung beberapa kota, peringatan cuaca, dan fungsi offline."
    },
    technologies: ["Flutter", "Dart", "Weather API", "Google Maps"],
    category: "Mobile Development",
    status: "completed",
    featured: false,
    images: ["/projects/weather-app-1.jpg", "/projects/weather-app-2.jpg"],
    links: {
      github: "https://github.com/RayZouku/weather-app"
    },
    startDate: "2024-06",
    endDate: "2024-07"
  },
  {
    id: "desktop-file-manager",
    title: "Modern Desktop File Manager",
    description: {
      en: "Cross-platform desktop file manager built with Tauri and modern web technologies",
      id: "Manajer file desktop lintas platform yang dibangun dengan Tauri dan teknologi web modern"
    },
    longDescription: {
      en: "A modern, fast, and secure desktop file manager application built with Tauri, React, and Rust. Features include advanced search, file preview, batch operations, and customizable interface with themes support.",
      id: "Aplikasi manajer file desktop yang modern, cepat, dan aman yang dibangun dengan Tauri, React, dan Rust. Fitur termasuk pencarian canggih, pratinjau file, operasi batch, dan antarmuka yang dapat disesuaikan dengan dukungan tema."
    },
    technologies: ["Tauri", "React", "Rust", "TypeScript"],
    category: "Desktop Application",
    status: "in-progress",
    featured: true,
    images: ["/projects/file-manager-1.jpg", "/projects/file-manager-2.jpg"],
    links: {
      github: "https://github.com/RayZouku/file-manager"
    },
    startDate: "2024-10"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: {
      en: "Full-featured e-commerce platform with admin dashboard and payment integration",
      id: "Platform e-commerce lengkap dengan dashboard admin dan integrasi pembayaran"
    },
    longDescription: {
      en: "A comprehensive e-commerce solution featuring product management, user authentication, shopping cart, payment processing, order tracking, and admin dashboard. Built with scalability and security in mind.",
      id: "Solusi e-commerce komprehensif yang menampilkan manajemen produk, autentikasi pengguna, keranjang belanja, pemrosesan pembayaran, pelacakan pesanan, dan dashboard admin. Dibangun dengan mempertimbangkan skalabilitas dan keamanan."
    },
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "NextAuth"],
    category: "Full Stack",
    status: "planned",
    featured: false,
    images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg"],
    links: {
      github: "https://github.com/RayZouku/ecommerce-platform"
    },
    startDate: "2025-01"
  }
]

export const projectCategories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Desktop Application",
  "Full Stack"
]