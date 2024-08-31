/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Xin chào 👋",
  title2: "DT Dương Trần",
  logo_name: "tranhamduong()",
  nickname: "dt / tranhamduong",
  full_name: "Trần Hàm Dương",
  subTitle:
    "Backend Developer, NLP Engineer 🔥. Driven by curiosity, fueled by code.",
  resumeLink:
    "https://drive.google.com/file/d/1C2IAXD4pbe037fUcKCcRXYmjJYZnoMRv/view?usp=sharing",
  mail: "mailto:tranhamduong@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/tranhamduong",
  linkedin: "https://linkedin.com/in/tranhamduong/",
  gmail: "tranhamduong@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/tranhamduong/",
  // twitter: "https://twitter.com/Harikrushn9",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Sprint Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: {
            color: "#FFD21E",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Fast API",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#FF4438",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Natural Language Processing",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Kong",
          fontAwesomeClassname: "simple-icons:kong",
          style: {
            color: "#003459",
          },
        },
        {
          skillName: "Keycloak",
          fontAwesomeClassname: "simple-icons:keycloak",
          style: {
            color: "#4D4D4D",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Kong",
          fontAwesomeClassname: "simple-icons:kong",
          style: {
            color: "#003459",
          },
        },
        {
          skillName: "Keycloak",
          fontAwesomeClassname: "simple-icons:keycloak",
          style: {
            color: "#4D4D4D",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Master Degree in Computer Science",
      subtitle:
        "The University of Information Technology, Vietnam National University, HCM City",
      logo_path: "logo_uit.png",
      alt_name:
        "The University of Information Technology, Vietnam National University, HCM City",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Machine Learning, Computer Vision, Advanced Web Development.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://uit.edu.vn/",
    },
    {
      title: "Engineer Degree in Software Engineering",
      subtitle:
        "The University of Information Technology, Vietnam National University, HCM City",
      logo_path: "logo_uit.png",
      alt_name:
        "The University of Information Technology, Vietnam National University, HCM City",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ I have secured 9.82 CGPA.",
      ],
      website_link: "https://uit.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TOEIC 900",
      subtitle: "IIG Vietnam",
      logo_path: "toeic.png",
      certificate_link: "#",
      alt_name: "IIG Vietnam",
      // color_code: "#2AAFED",
      color_code: "#C5E2EE",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/3eb4b0e9-41a6-4cb9-a18b-d8626069a00c",
      alt_name: "AWS Cloud Practitioner",
      color_code: "#8C151599",
    },
    {
      title: "Big Data Specialization",
      subtitle: "University of California San Diego & Coursera",
      logo_path: "ucsandiego.png",
      certificate_link:
        "https://coursera.org/verify/specialization/3XM9P98TSMNC",
      alt_name: "Big Data Specialization",
      color_code: "#7A7A7A",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI & Coursera",
      logo_path: "deeplearning.png",
      certificate_link:
        "https://coursera.org/verify/specialization/DDV573S23T9V",
      alt_name: "Deep Learning Specialization",
      color_code: "#0C9D5899",
    },
    {
      title: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      subtitle: "DeepLearning.AI & Coursera",
      logo_path: "deeplearning.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/83RHTVD87YWD",
      alt_name: "DeepLearning.AI TensorFlow Developer Professional Certificate",
      color_code: "#C5E2EE",
    },
    {
      title: "IBM Data Science Professional Certificate",
      subtitle: "IBM & Coursera",
      logo_path: "ibm.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/Q9V6PU532Y2D",
      alt_name: "IBM & Coursera",
      color_code: "#ffc475",
    },
    {
      title: "Google Project Management: Professional Certificate",
      subtitle: "Google & Coursera",
      logo_path: "google.png",
      certificate_link:
        "https://coursera.org/verify/professional-cert/FGQ92UTJMR2P",
      alt_name: "Google & Coursera",
      color_code: "#ffbfae",
    },
    {
      title: "Kong Gateway Foundations + Operations",
      subtitle: "Kong Academy",
      logo_path: "kong.png",
      certificate_link:
        "https://www.credly.com/badges/cd67e5f7-4dfe-4455-af7a-3b4a442ae0ff/public_url",
      alt_name: "Kong Gateway Foundations + Operations",
      color_code: "#b190b0",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Vice Director",
          company:
            "SIU Artificial Intelligence Lab, The Saigon International University",
          company_url: "https://ailab.siu.edu.vn/",
          logo_path: "siuailab.jpg",
          duration: "Mar 2024 - Present",
          location: "HCM city, Vietnam",
          description: `As an SDE intern, my priorities include learning opportunities and professional development. Aiming for Backend Development proficiency.`,
          color: "#0071C5",
        },
        {
          title: "University Lecturer",
          company:
            "The School of Technology and Computer Science, The Saigon International University",
          company_url: "https://siu.edu.vn",
          logo_path: "siu.jpg",
          duration: "Oct 2021 - Present",
          location: "HCM city, Vietnam",
          description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
          Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Big Data and NLP Engineer",
          company: "Admicro, VCCorp Corporation",
          company_url: "https://vccorp.vn/",
          logo_path: "vccorp.jpg",
          duration: "Jul 2020 - Present",
          location: "HCM city, Vietnam",
          description: `Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          color: "#0071C5",
        },
        {
          title: "Teaching Assistant",
          company:
            "Falcuty of Software Engineering, The University of Information Technology, Vietnam National University, HCM City",
          company_url: "https://uit.edu.vn/",
          logo_path: "logo_uit.png",
          duration: "Late 2019 - Jul 2020",
          location: "HCM city, Vietnam",
          description: `Focus on change request functions in close collaboration with the project manager and team leads.
          Developed new and maintained existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          color: "#0071C5",
        },
        {
          title: "Talent Acquisition Collaborator",
          company: "Team Recruitment,VNG Corporation",
          company_url: "https://www.vng.com.vn/",
          logo_path: "vng.jpg",
          duration: "Feb 2019 - Apr 2019",
          location: "HCM city, Vietnam",
          description: `Maintain close contact with the client and team when handling change requests.
          LAMP Stack was mostly utilised. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          color: "#ee3c26",
        },
        {
          title: "Junior Software Engineer",
          company: "Recruitment & Training Department, Fujinet System JSC",
          company_url: "https://www.fujinet.net/",
          logo_path: "fujinet.jpg",
          duration: "Jul 2018 - Feb 2019",
          location: "HCM city, Vietnam",
          description: `Maintain close contact with the client and team when handling change requests.
          LAMP Stack was mostly utilised. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Lead",
          company: "Bauddhik-Geeks",
          company_url: "https://bauddhikgeeks.tech/",
          logo_path: "bauddhikgeeks.png",
          duration: "Sep 2021 - Present",
          location: "Work From Home",
          description:
            "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
          color: "#FBBD18",
        },
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "Postman Student Expert",
          company: "Postman",
          company_url: "https://www.postman.com/",
          logo_path: "postman.png",
          duration: "Feb 2020 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact-tranhamduong.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://twitter.com/Harikrushn9",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Personalized News Recommendation System",
      url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
      description:
        "As part of a high-impact project, I developed a personalized news recommendation system for leading Vietnamese news apps like Kenh14, CafeBiz, Pega, CafeF and aFamily. My contributions spanned from data pipeline architecture and big data processing to researching and implementing advanced recommendation techniques. The system was optimized to handle millions of daily users with minimal runtime.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos:pytorch-icon",
        },
        {
          name: "Redis",
          iconifyClass: "logos:redis",
        },
        {
          name: "Apache Spark",
          iconifyClass: "logos:apache-spark",
        },
        {
          name: "Apache Kafka",
          iconifyClass: "logos:kafka",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "Apache Airflow",
          iconifyClass: "logos:airflow",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/keep-calm-and-carry-on",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
        // {
        //   name: "Live Demo",
        //   url:
        //     "https://akshitagupta15june.github.io/Keep-Calm-and-Carry-On.github.io/",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "1",
      name: "Vietnamese Spelling Correction",
      url: "#",
      description:
        "I developed a highly effective spell-checking tool for the Vietnamese language, which has been integrated to help journalists and editors avoid errors and improve efficiency. This project deepened my understanding of Vietnamese language nuances, and I also published a related research paper.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos:pytorch-icon",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos:logos:tensorflow",
        },
      ],
      links: [
        //   {
        //     name: "Github",
        //     url: "https://github.com/kevalvavaliya/Yog4Life",
        //     iconifyClass: "ri:github-fill",
        //   },
        //   {
        //     name: "Devfolio",
        //     url: "https://devfolio.co/projects/yoglife-b20d",
        //     iconifyClass: "fluent:window-dev-edit-20-filled",
        //   },
      ],
    },
    {
      id: "2",
      name: "SIU Digital Transformation",
      url: "#",
      description:
        "As the lead for digital transformation projects at Saigon International University, I spearhead initiatives to digitize operations and implement AI-driven solutions, significantly enhancing and automating various complex processes.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring",
        },
        {
          name: "Go",
          iconifyClass: "logos:go",
        },
        {
          name: "NextJs",
          iconifyClass: "logos:nextjs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "Consul",
          iconifyClass: "logos:consul",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker",
        },
        {
          name: "Gitlab CI/CD",
          iconifyClass: "logos:gitlab",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/harikanani/Adoptisity",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/adoptisity",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
        // {
        //   name: "Live Demo",
        //   url: "https://rajmahadevwala1.wixsite.com/adoptisity",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "3",
      name: "SIU Attendance Management System",
      url: "#",
      description:
        "Contributed to the creation of an integrated system combining AI facial recognition, attendance management software, and end-point timekeeping devices. This initiative resulted in a streamlined and effective attendance system, supporting efficient HR management.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring",
        },
        {
          name: "Go",
          iconifyClass: "logos:go",
        },
        {
          name: "NextJs",
          iconifyClass: "logos:nextjs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "MQTT",
          iconifyClass: "simple-icons:mqtt",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/rajmahadev8/Fin-Split",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/finsplit",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
      ],
    },
    {
      id: "4",
      name: "SIU Social Listening",
      url: "#",
      description:
        "Led the development of a social listening system, which included the processes of data collection, data processing, and information extraction. This project delivered key insights into customer and student analysis, enhancing SIU’s communication and marketing efforts.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring",
        },
        {
          name: "Go",
          iconifyClass: "logos:go",
        },
        {
          name: "Apache Kafka",
          iconifyClass: "logos:kafka",
        },
        {
          name: "NextJs",
          iconifyClass: "logos:nextjs",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "Playwright",
          iconifyClass: "logos:playwright",
        },
        {
          name: "Selenium",
          iconifyClass: "logos:selenium",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/kevalvavaliya/Emosic",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/emosic",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
      ],
    },
    {
      id: "5",
      name: "Write the AI Textbook",
      url: "#",
      description:
        "Participated in the development of a high school textbook on AI, aimed at fostering curiosity and understanding among students. This collaborative effort ensures that the knowledge shared will continue to influence and inspire for years to come.",
      languages: [
        {
          name: "KNIME",
          iconifyClass: "simple-icons:knime",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos:pytorch-icon",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/harikanani/Fileblok",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Devpost",
        //   url: "https://devpost.com/software/fileblok",
        //   iconifyClass: "fluent:window-dev-edit-20-filled",
        // },
      ],
    },
    {
      id: "6",
      name: "SIUBOT AI Integration ",
      url: "#",
      description:
        "Involved in the development of AI-driven features for the humanoid robot SIUBOT, with a focus on constructing dialogue pipelines and embedding smart chatbot capabilities.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "logos-flask",
        },
        {
          name: "ROS",
          iconifyClass: "logos:ros",
        },
        {
          name: "Google Cloud",
          iconifyClass: "logos:google-cloud",
        },
        {
          name: "OpenAI/GPT",
          iconifyClass: "logos:openai",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
        //   iconifyClass: "ri:github-fill",
        // },
        // {
        //   name: "Live Demo",
        //   url: "https://bauddhikgeeks.co/",
        //   iconifyClass: "mdi:web",
        // },
      ],
    },
    {
      id: "7",
      name: "Establish the SIU Infrastructure",
      url: "https://github.com/abhigoyani/votechain",
      description:
        "Responsible for operating and setting up the data center at SIU, managing hardware, network, and software administration. Also developed and integrated open-source solutions to enhance team efficiency and cost-effectiveness.",
      languages: [
        {
          name: "Linux",
          iconifyClass: "devicon:linux",
        },
        {
          name: "Nginx",
          iconifyClass: "logos:nginx",
        },
        {
          name: "Keycloak",
          iconifyClass: "simple-icons:keycloak",
        },
        {
          name: "Docker",
          iconifyClass: "logos:docker",
        },
        {
          name: "Gitlab",
          iconifyClass: "logos:gitlab",
        },
        {
          name: "Kong API Gateway",
          iconifyClass: "logos:kong",
        },
        {
          name: "MkDocs",
          iconifyClass: "simple-icons:materialformkdocs",
        },
        {
          name: "Redmine",
          iconifyClass: "simple-icons:redmine",
        },
        {
          name: "Grafana",
          iconifyClass: "logos:grafana",
        },
        {
          name: "Prometheus",
          iconifyClass: "logos:prometheus",
        },
        {
          name: "Seafile",
          iconifyClass: "arcticons:seafile",
        },
        {
          name: "OpenLDAP, PrivateBin,",
          iconifyClass: "logos:opensource",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/abhigoyani/votechain",
        //   iconifyClass: "ri:github-fill",
        // },
      ],
    },
    // {
    //   id: "8",
    //   name: "Swag Store",
    //   url: "https://github.com/harikanani/e-commerce-frontend",
    //   description:
    //     "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "MedusaJS",
    //       iconifyClass: "logos-medusa-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/e-commerce-frontend",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "node-blockchain",
    //   url: "https://github.com/harikanani/node-blockchain",
    //   description:
    //     "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "TypeScript",
    //       iconifyClass: "skill-icons:typescript",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/node-blockchain",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "10",
    //   name: "Know Me Well",
    //   url: "https://github.com/harikanani/personal-portfolio",
    //   description:
    //     "A simple command line interface based quiz app to know more about me :).",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //     {
    //       name: "Repl.it",
    //       iconifyClass: "logos-replit-icon",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/personal-portfolio",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Bloggify",
    //   url: "https://github.com/harikanani/Bloggify",
    //   description: "A Simple REST API for Blog Application.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/Bloggify",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "Stargazzers",
    //   url: "https://github.com/harikanani/stargazers",
    //   description: "An Unofficial API for GitHub Repo Stars Count",
    //   languages: [
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/stargazers",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "13",
    //   name: "GitHub Theme Portfolio",
    //   url: "https://github.com/harikanani/harikanani.github.io",
    //   description:
    //     "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "SCSS",
    //       iconifyClass: "vscode-icons:file-type-scss2",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/harikanani.github.io",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Live Demo",
    //       url: "https://harikanani.github.io/",
    //       iconifyClass: "mdi:web",
    //     },
    //   ],
    // },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    {
      id: "10",
      name: "News Website",
      url: "https://doanhnhandoisong.vn",
      description:
        "Built an electronic news website that has been successfully operational since 2020, providing continuous service to its users.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Django",
          iconifyClass: "logos:django",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "Jinja",
          iconifyClass: "simple-icons:jinja",
        },
      ],
      links: [
        // {
        //   name: "Github",
        //   url: "https://github.com/harikanani/Covid19TrackerReact",
        //   iconifyClass: "ri:github-fill",
        // },
      ],
    },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
