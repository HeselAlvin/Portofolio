
import { Project, ExperienceItem, CertificateItem } from '@/types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Attendance Student App",
    type: "Mobile Application",
    desc: "Aplikasi presensi mahasiswa berbasis Android (Kotlin Native) dengan integrasi verifikasi wajah dan pemetaan GPS real-time.",
    image: "/ui2.png",
    screens: {
      left: "/ui1.png",
      center: "/ui2.png",
      right: "/maps.png"
    },
    github: "https://github.com/HeselAlvin/Absensi-KP",
    tech: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
    ]
  },
  {
    id: 2,
    title: "Rumah Nanas E-Commerce App",
    type: "Mobile Application & Admin Panel",
    desc: "Aplikasi e-commerce Android untuk katalog & transaksi produk UMKM Pulosari, terintegrasi dengan web admin panel Laravel Filament.",
    image: "/detail.png",
    screens: {
      left: "/HP.png",
      center: "/detail.png",
      right: "/kris.png"
    },
    github: "https://github.com/HeselAlvin/Android-Rumah-Nanas",
    tech: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ]
  }
];

export const techStackData = [
  {
    category: "Mobile Development",
    items: [
      { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      
    ]
  },
  {
    category: "Web & Backend",
    items: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ]
  },
  {
    category: "Tools & IDE",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: "Mobile Developer Intern",
    company: "PT Teknologi Kartu Indonesia",
    period: "Jan 2026 - Mar 2026",
    desc: "Merancang dan membangun aplikasi presensi mahasiswa berbasis Android Native secara end-to-end dengan penekanan pada akurasi verifikasi data dan performa aplikasi.",
    points: [
      "Mengimplementasikan arsitektur MVVM dan Kotlin Native untuk memastikan struktur kode bersih, teruji, dan mudah dipelihara.",
      "Mengintegrasikan modul verifikasi presensi berbasis kamera (Face Detection) serta validasi lokasi presisi tinggi menggunakan Google Maps API & Location-Based Services (LBS).",
      "Mengembangkan antarmuka pengguna (XML Layout) yang responsif serta mengelola integrasi RESTful API untuk sinkronisasi data presensi secara real-time."
    ]
  },
  {
    role: "Assistant Lecturer",
    company: "Universitas Kristen Satya Wacana",
    period: "1 Tahun (4 Mata Kuliah)",
    desc: "Membimbing dan memfasilitasi kegiatan praktikum pemrosesan kode serta mengevaluasi pemahaman teknis mahasiswa untuk 4 mata kuliah inti rumpun informatika.",
    points: [
      "Mata Kuliah: Web Programming, Design Pattern, Database Programming, dan Mobile Web Service.",
      "Membimbing praktikum perancangan basis data SQL/PostgreSQL, pembuatan RESTful API backend, implementasi software design patterns, dan pengembangan modul web.",
      "Menyusun materi panduan praktikum, menguji tugas pemrograman mingguan, serta mendampingi mahasiswa dalam penyelesaian proyek akhir matakuliah."
    ]
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: 1,
    title: "Basic Mobile Application Development Award of Completion",
    issuer: "Dicoding Academy",
    date: "Juni 2026",
    credentialId: "MRZMW16Q3PYQ",
    link: "https://dicoding.com/certificates/MRZMW16Q3PYQ",
    desc: "Memahami ekosistem mobile development, SDLC aplikasi Android, dan siklus hidup komponen internal aplikasi.",
    image: "/dicoding.jpg",
    file: "https://drive.google.com/drive/folders/1eyFuNGy7qL3ljsfZuu_HciXfoq04jj2X?usp=sharing"
  },
  {
    id: 2,
    title: "Database Programming with SQL Award of Completion",
    issuer: "Oracle Academy",
    date: "Agustus 2026",
    desc: "Sertifikasi kompetensi pemrosesan query SQL tingkat lanjut, manipulasi data (DML/DDL), dan optimasi basis data.",
    image: "/Database_Programming.jpg",
    file: "https://drive.google.com/drive/folders/1eyFuNGy7qL3ljsfZuu_HciXfoq04jj2X?usp=sharing"
  },
  {
    id: 3,
    title: "Database Design Award of Completion",
    issuer: "Oracle Academy",
    date: "Agustus 2026",
    desc: "Sertifikasi pemodelan basis data terstruktur, perancangan ERD, normalisasi tabel, dan arsitektur database relasional.",
    image: "/Database_Design.jpg",
    file: "https://drive.google.com/drive/folders/1eyFuNGy7qL3ljsfZuu_HciXfoq04jj2X?usp=sharing"
  },
  {
    id: 4,
    title: "Mobile Developer Internship Certificate",
    issuer: "PT Teknologi Kartu Indonesia",
    date: "Maret 2026",
    desc: "Sertifikat penghargaan penyelesaian program MAGANG periode Januari - Maret 2026 sebagai Mobile Developer.",
    image: "/magang.jpg",
    file: "https://drive.google.com/drive/folders/1eyFuNGy7qL3ljsfZuu_HciXfoq04jj2X?usp=sharing"
  }
];