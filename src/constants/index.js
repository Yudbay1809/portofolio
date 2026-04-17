import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const CONTENT = {
  id: {
    navbar: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Hubungi",
      resume: "Resume",
      github: "GitHub",
      close: "Tutup"
    },
    hero: {
      title: "Yudha Bayu ",
      titleHighlight: "Prastyo",
      subtitle: "Digital Architect",
      description: "Saya Yudha Bayu Prastyo, lulusan Teknik Informatika yang berfokus pada pengembangan aplikasi web dan dukungan sistem TI. Saya menikmati proses mengubah kebutuhan bisnis menjadi solusi digital yang efisien, mudah digunakan, dan terukur.",
      btnProjects: "Lihat Proyek",
      btnContact: "Hubungi Saya"
    },
    about: {
      sectionLabel: "Mengenal Saya",
      title: "Merancang Sesuatu yang",
      titleHighlight: "Bermakna",
      description: "Saya adalah lulusan Universitas Dian Nuswantoro dengan pengalaman praktik pada dukungan infrastruktur TI, troubleshooting teknis, serta pengembangan aplikasi berbasis web. Saya terbiasa bekerja dengan JavaScript, PHP, MySQL, dan layanan cloud, serta memiliki semangat belajar yang tinggi untuk terus meningkatkan kualitas solusi yang saya bangun.",
      quote: "\"Saya percaya bahwa setiap baris kode adalah fondasi dari sebuah arsitektur digital yang bermakna.\"",
      alumniLabel: "Alumni",
      specLabel: "Spesialisasi",
      specValue: "Informatics",
      aspLabel: "Aspirasi",
      aspValue: "Full-Stack"
    },
    education: {
      sectionLabel: "Jalur Akademik",
      title: "Edukasi",
      titleHighlight: "Sertifikasi",
      items: [
        {
          place: "Dian Nuswantoro University",
          year: "2020 - 2024",
          description: "Mempelajari fondasi ilmu komputer dan teknologi informasi, termasuk pemrograman, struktur data, algoritma, serta pengembangan web. Berpartisipasi dalam berbagai proyek praktik untuk menerapkan teori ke kebutuhan nyata.",
          technologies: ["JavaScript", "PHP", "HTML", "Node.js", "CSS", "MySQL", "Python"],
        },
        {
          place: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
          year: "2023 - 2024",
          description: "Mengikuti pelatihan intensif dengan fokus software engineering, cloud computing, dan kolaborasi tim. Mengembangkan kompetensi teknis sekaligus kemampuan komunikasi, manajemen waktu, dan problem solving.",
          technologies: ["Google Cloud Platform", "JavaScript", "Python", "Firebase", "Cloud SQL"],
        },
      ]
    },
    technologies: {
      sectionLabel: "Tech Stack",
      title: "Mendorong",
      titleHighlight: "Inovasi"
    },
    experience: {
      sectionLabel: "Perjalanan Karir",
      title: "Pengalaman",
      titleHighlight: "Peran",
      professionalRole: "Peran Profesional",
      items: [
        {
          year: "2022 - 2023",
          role: "IT Support",
          company: "Dian Nuswantoro University",
          description: "Menangani pemeliharaan perangkat keras dan perangkat lunak, dukungan teknis untuk staf dan mahasiswa, serta membantu stabilitas operasional jaringan kampus. Terlibat dalam instalasi sistem baru dan edukasi pengguna untuk meningkatkan adopsi teknologi.",
          technologies: ["MySQL", "Windows", "Linux", "Networking", "Hardware"],
        },
      ]
    },
    projects: {
      sectionLabel: "Sorotan Portofolio",
      title: "Solusi",
      titleHighlight: "Arsitektural",
      items: [
        {
          title: "Cafe X",
          image: project1,
          description: "Aplikasi manajemen operasional kafe untuk pengelolaan pesanan, inventaris, staf, dan pelaporan penjualan agar proses bisnis lebih efisien.",
          technologies: ["HTML", "CSS", "PHP", "MySQL"],
          github: "https://github.com/Yudbay1809/cafe-x",
          external: "#",
        },
        {
          title: "Poliklinik",
          image: project2,
          description: "Aplikasi manajemen klinik untuk alur janji temu, rekam medis, penjadwalan staf, dan proses administrasi layanan pasien.",
          technologies: ["HTML", "CSS", "PHP", "MySQL"],
          github: "https://github.com/Yudbay1809/BK-poli",
          external: "#",
        },
        {
          title: "Loviso Bangkit Capstone Project",
          image: project3,
          description: "Aplikasi mobile Location Advisor untuk mendukung eksposur UMKM dan komoditas regional agar lebih mudah diakses oleh masyarakat luas.",
          technologies: ["HTML", "CSS", "React", "Bootstrap"],
          github: "https://github.com/MFaishalRamadhan/Capstone",
          external: "#",
        },
        {
          title: "Automatic License Plate Recognition",
          image: project4,
          description: "Aplikasi Android berbasis ALPR untuk mendukung pemantauan lalu lintas, manajemen parkir, dan kebutuhan pelacakan kendaraan secara otomatis.",
          technologies: ["Java", "Python", "Android Studio", "Jupyter Notebook", "Firebase"],
          github: "https://github.com/Yudbay1809/ALPR",
          external: "#",
        },
      ]
    },
    contact: {
      sectionLabel: "Kontak",
      title: "Mari Bangun Fondasi",
      titleHighlight: "Selanjutnya",
      description: "Tertarik untuk berkolaborasi atau sekadar ingin berdiskusi tentang arsitektur TI? Pintu saya selalu terbuka untuk peluang baru.",
      labels: {
        email: "Email",
        phone: "WhatsApp",
        location: "Lokasi",
        subjectInput: "Subjek",
        subjectPlaceholder: "Tujuan pesan Anda",
        nameInput: "Nama",
        namePlaceholder: "Nama Anda",
        emailInput: "Email",
        emailPlaceholder: "email@contoh.com",
        msgInput: "Pesan",
        msgPlaceholder: "Ada yang bisa saya bantu?",
        sendBtn: "Kirim Pesan",
        successTitle: "Terkirim!",
        successMsg: "Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda."
      }
    }
  },
  en: {
    navbar: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
      github: "GitHub",
      close: "Close"
    },
    hero: {
      title: "Yudha Bayu ",
      titleHighlight: "Prastyo",
      subtitle: "Digital Architect",
      description: "I am Yudha Bayu Prastyo, an Informatics Engineering graduate focusing on web development and IT system support. I enjoy the process of turning business requirements into efficient, scalable, and user-friendly digital solutions.",
      btnProjects: "View Projects",
      btnContact: "Get in Touch"
    },
    about: {
      sectionLabel: "Get to Know Me",
      title: "Crafting Meaningful",
      titleHighlight: "Experiences",
      description: "I am a graduate of Dian Nuswantoro University with practical experience in IT infrastructure support, technical troubleshooting, and web-based application development. I am accustomed to working with JavaScript, PHP, MySQL, and cloud services, accompanied by a strong willingness to learn and continuously improve the quality of the solutions I build.",
      quote: "\"I believe that every line of code is the foundation of a meaningful digital architecture.\"",
      alumniLabel: "Alumnus",
      specLabel: "Specialization",
      specValue: "Informatics",
      aspLabel: "Aspiration",
      aspValue: "Full-Stack"
    },
    education: {
      sectionLabel: "Academic Path",
      title: "Education",
      titleHighlight: "Certifications",
      items: [
        {
          place: "Dian Nuswantoro University",
          year: "2020 - 2024",
          description: "Studied the foundations of computer science and information technology, including programming, data structures, algorithms, and web development. Participated in various practical projects to apply theories to real-world requirements.",
          technologies: ["JavaScript", "PHP", "HTML", "Node.js", "CSS", "MySQL", "Python"],
        },
        {
          place: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
          year: "2023 - 2024",
          description: "Participated in an intensive training program focusing on software engineering, cloud computing, and team collaboration. Developed technical competencies alongside communication, time management, and problem-solving skills.",
          technologies: ["Google Cloud Platform", "JavaScript", "Python", "Firebase", "Cloud SQL"],
        },
      ]
    },
    technologies: {
      sectionLabel: "Tech Stack",
      title: "Powering",
      titleHighlight: "Innovation"
    },
    experience: {
      sectionLabel: "Career Journey",
      title: "Experience",
      titleHighlight: "Roles",
      professionalRole: "Professional Role",
      items: [
        {
          year: "2022 - 2023",
          role: "IT Support",
          company: "Dian Nuswantoro University",
          description: "Handled hardware and software maintenance, technical support for staff and students, and assisted in the operational stability of the campus network. Involved in the installation of new systems and user education to increase technology adoption.",
          technologies: ["MySQL", "Windows", "Linux", "Networking", "Hardware"],
        },
      ]
    },
    projects: {
      sectionLabel: "Portfolio Highlights",
      title: "Architectural",
      titleHighlight: "Solutions",
      items: [
        {
          title: "Cafe X",
          image: project1,
          description: "A cafe operational management application for handling orders, inventory, staff, and sales reporting to make business processes more efficient.",
          technologies: ["HTML", "CSS", "PHP", "MySQL"],
          github: "https://github.com/Yudbay1809/cafe-x",
          external: "#",
        },
        {
          title: "Poliklinik",
          image: project2,
          description: "A clinic management application for appointment flows, medical records, staff scheduling, and patient service administration processes.",
          technologies: ["HTML", "CSS", "PHP", "MySQL"],
          github: "https://github.com/Yudbay1809/poliklinik",
          external: "#",
        },
        {
          title: "Loviso Bangkit Capstone Project",
          image: project3,
          description: "A Location Advisor mobile application to support the exposure of MSMEs and regional commodities to make them more accessible to the wider community.",
          technologies: ["HTML", "CSS", "React", "Bootstrap"],
          github: "https://github.com/Yudbay1809/loviso",
          external: "#",
        },
        {
          title: "Automatic License Plate Recognition",
          image: project4,
          description: "An ALPR-based Android application to support traffic monitoring, parking management, and automatic vehicle tracking requirements.",
          technologies: ["Java", "Python", "Android Studio", "Jupyter Notebook", "Firebase"],
          github: "https://github.com/Yudbay1809/alpr-android",
          external: "#",
        },
      ]
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Build the",
      titleHighlight: "Next Foundation",
      description: "Interested in collaborating or just want to chat about IT architecture? My door is always open for new opportunities.",
      labels: {
        email: "Email",
        phone: "WhatsApp",
        location: "Location",
        subjectInput: "Subject",
        subjectPlaceholder: "The purpose of your message",
        nameInput: "Name",
        namePlaceholder: "Your Name",
        emailInput: "Email",
        emailPlaceholder: "email@example.com",
        msgInput: "Message",
        msgPlaceholder: "How can I help you?",
        sendBtn: "Send Message",
        successTitle: "Sent!",
        successMsg: "Your message has been successfully sent. I will get back to you soon."
      }
    }
  }
};

export const CONTACT = {
  address: "Tegal, Jawa Tengah, Indonesia",
  phoneNo: "+62 857-3164-3104",
  email: "prastyodx2@gmail.com",
  github: "https://github.com/Yudbay1809",
};