const metaData = {
    home: {
      title: "Home - My Website",
      description: "Selamat datang di homepage kami. Kami menawarkan layanan terbaik untuk Anda.",
      keywords: ["home", "website", "services", "best services"],
      image: "https://example.com/images/home-banner.jpg",
      url: "https://example.com",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Home - My Website",
        "url": "https://example.com",
        "description": "Selamat datang di homepage kami, tempat di mana Anda dapat menemukan layanan terbaik."
      }
    },
    about: {
      title: "About Us - My Website",
      description: "Pelajari lebih lanjut tentang tim kami, visi, dan misi kami.",
      keywords: ["about", "team", "company vision", "our story"],
      image: "https://example.com/images/about-us.jpg",
      url: "https://example.com/about",
      schema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "My Website",
        "url": "https://example.com/about",
        "description": "Kami adalah perusahaan yang berfokus pada memberikan solusi terbaik bagi pelanggan kami.",
        "logo": "https://example.com/images/logo.png"
      }
    },
    services: {
      title: "Our Services - My Website",
      description: "Jelajahi layanan yang kami tawarkan untuk membantu Anda mencapai tujuan Anda.",
      keywords: ["services", "consulting", "web development", "marketing"],
      image: "https://example.com/images/services-banner.jpg",
      url: "https://example.com/our-services",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development and Marketing Services",
        "url": "https://example.com/our-services",
        "description": "Kami menyediakan layanan web development dan digital marketing untuk bisnis Anda.",
        "serviceType": "Web Development, Digital Marketing"
      }
    },
    blog: {
      title: "Blog - My Website",
      description: "Baca artikel terbaru kami tentang berbagai topik terkait industri dan teknologi.",
      keywords: ["blog", "articles", "technology", "news"],
      image: "https://example.com/images/blog-banner.jpg",
      url: "https://example.com/blog",
      schema: {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "My Website Blog",
        "url": "https://example.com/blog",
        "description": "Temukan berbagai artikel menarik tentang teknologi, bisnis, dan lainnya di blog kami.",
        "author": {
          "@type": "Person",
          "name": "John Doe"
        }
      }
    },
    portfolio: {
      title: "Portfolio - My Website",
      description: "Lihat berbagai proyek yang telah kami kerjakan di masa lalu dan temukan inspirasi.",
      keywords: ["portfolio", "projects", "web design", "case studies"],
      image: "https://example.com/images/portfolio-banner.jpg",
      url: "https://example.com/portfolio",
      schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Portfolio - My Website",
        "url": "https://example.com/portfolio",
        "description": "Lihat proyek-proyek yang telah kami kerjakan untuk berbagai klien kami."
      }
    },
    contact: {
      title: "Contact Us - My Website",
      description: "Hubungi kami untuk pertanyaan atau konsultasi. Kami siap membantu Anda.",
      keywords: ["contact", "customer service", "support", "consultation"],
      image: "https://example.com/images/contact-banner.jpg",
      url: "https://example.com/contact",
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - My Website",
        "url": "https://example.com/contact",
        "description": "Hubungi kami untuk informasi lebih lanjut atau pertanyaan seputar layanan kami.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-123-4567",
          "contactType": "Customer Service"
        }
      }
    }
  };
export default metaData;