import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Saya Yudha Bayu Prastyo, lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi web dan dukungan sistem TI. Saya menikmati proses mengubah kebutuhan bisnis menjadi solusi digital yang efisien, mudah digunakan, dan terukur.`;

export const ABOUT_TEXT = `Saya adalah lulusan Universitas Dian Nuswantoro dengan pengalaman praktik pada dukungan infrastruktur TI, troubleshooting teknis, serta pengembangan aplikasi berbasis web. Saya terbiasa bekerja dengan JavaScript, PHP, MySQL, dan layanan cloud, serta memiliki semangat belajar yang tinggi untuk terus meningkatkan kualitas solusi yang saya bangun.`;

export const EXPERIENCES = [
  {
    year: "2022 - 2023",
    role: "IT Support",
    company: "Dian Nuswantoro University",
    description:
      "Menangani pemeliharaan perangkat keras dan perangkat lunak, dukungan teknis untuk staf dan mahasiswa, serta membantu stabilitas operasional jaringan kampus. Terlibat dalam instalasi sistem baru dan edukasi pengguna untuk meningkatkan adopsi teknologi.",
    technologies: ["MySQL", "Windows", "Linux", "Networking", "Hardware"],
  },
];

export const EDUCATION = [
  {
    place: "Dian Nuswantoro University",
    year: "2020 - 2024",
    description:
      "Mempelajari fondasi ilmu komputer dan teknologi informasi, termasuk pemrograman, struktur data, algoritma, serta pengembangan web. Berpartisipasi dalam berbagai proyek praktik untuk menerapkan teori ke kebutuhan nyata.",
    technologies: ["JavaScript", "PHP", "HTML", "Node.js", "CSS", "MySQL", "Python"],
  },
  {
    place: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    year: "2023 - 2024",
    description:
      "Mengikuti pelatihan intensif dengan fokus software engineering, cloud computing, dan kolaborasi tim. Mengembangkan kompetensi teknis sekaligus kemampuan komunikasi, manajemen waktu, dan problem solving.",
    technologies: ["Google Cloud Platform", "JavaScript", "Python", "Firebase", "Cloud SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Cafe X",
    image: project1,
    description:
      "Aplikasi manajemen operasional kafe untuk pengelolaan pesanan, inventaris, staf, dan pelaporan penjualan agar proses bisnis lebih efisien.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Poliklinik",
    image: project2,
    description:
      "Aplikasi manajemen klinik untuk alur janji temu, rekam medis, penjadwalan staf, dan proses administrasi layanan pasien.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    title: "Loviso Bangkit Capstone Project",
    image: project3,
    description:
      "Aplikasi mobile Location Advisor untuk mendukung eksposur UMKM dan komoditas regional agar lebih mudah diakses oleh masyarakat luas.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Automatic License Plate Recognition",
    image: project4,
    description:
      "Aplikasi Android berbasis ALPR untuk mendukung pemantauan lalu lintas, manajemen parkir, dan kebutuhan pelacakan kendaraan secara otomatis.",
    technologies: ["Java", "Python", "Android Studio", "Jupyter Notebook", "Firebase"],
  },
];

export const CONTACT = {
  address: "Tegal, Jawa Tengah, Indonesia",
  phoneNo: "+62 857-3164-3104",
  email: "prastyodx2@gmail.com",
};