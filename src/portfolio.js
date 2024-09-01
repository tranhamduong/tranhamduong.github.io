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
        "⚡ Design and implement robust backend architectures using Java Spring, Go, and modern frameworks.",
        "⚡ Develop and optimize APIs to ensure seamless communication between services with a strong focus on performance and security.",
        "⚡ Manage and maintain databases, ensuring efficient data storage and retrieval for high-traffic applications.",
        "⚡ Deploy and manage backend services using Docker, ensuring consistency across environments.",
        "⚡ Implement CI/CD pipelines to automate integration, and deployment processes, enhancing development efficiency and reliability.",
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
        "⚡ Integrated recommendation engines into popular platforms, such as Kenh14 and Pega, enhancing the user experience for millions of active users.",
        "⚡ Developed and deployed NLP models for tasks such, utilizing BERT, LLMs and other state-of-the-art machine learning techniques.",
        "⚡ Integrated NLP-driven features, such as chatbots, into applications to enhance user interaction and automate customer support.",
        "⚡ Designed and implemented pipelines for processing and analyzing large-scale text data from multiple sources, improving data-driven decision-making.",
        "⚡ Optimized recommendation models using machine learning techniques to ensure high accuracy and performance under heavy traffic conditions.",
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
        "⚡ Managed and maintained server infrastructure, ensuring high performance, security, and scalability.",
        "⚡ Configured and monitored servers, automating routine tasks to enhance efficiency and reduce downtime.",
        "⚡ Integrated open-source tools to provide self-hosted solutions, enhancing flexibility and control for my team.",
        ,
        "⚡ Managed the configuration and maintenance of self-hosted systems, leveraging open-source technologies for cost-effective and scalable solutions.",
        "⚡ Provided technical support and training for the team, ensuring smooth implementation and operation of self-hosted open-source solutions.",
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
        "⚡ Focused on Machine Learning, Deep Learning, and Big Data, with a specialization in Natural Language Processing (NLP).",
        "⚡ Conducted extensive research in NLP, leading to the development of a thesis on spell-checking and error correction. ",
        "⚡ Applied advanced techniques in Machine Learning and Deep Learning to address challenges in NLP, particularly in the area of automated error correction.",
        "⚡ Engaged in multiple research projects stemming from the thesis work, contributing to the field of NLP and enhancing the accuracy of language processing systems.",
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
        "⚡ Studied core software engineering skills such as Object-Oriented Programming (OOP), Software Design Patterns, Algorithm Analysis, and Systems Design.",
        "⚡  Completed multiple online courses focusing on Backend, Web, and Mobile App Development.",
        "⚡ Worked on and implemented various projects throughout my studies, applying the knowledge gained from my Software Engineering coursework.",
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
    "My journey includes significant contributions to digital transformation projects, AI-driven solutions, and advanced research in Natural Language Processing (NLP). Whether managing complex infrastructures, leading software development teams, or guiding students in cutting-edge technologies, each role has honed my expertise and reinforced my commitment to innovation and excellence.",
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
          description:
            "I manage and develop the infrastructure for the SIU AI Lab, and I also lead the software development team in executing digital transformation projects for the university. My responsibilities encompass the design, analysis, development, and deployment of software solutions.",
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
          description:
            "As a university lecturer at SIU, I taught specialized courses in software engineering and computer science, with a particular focus on Natural Language Processing (NLP). In addition to teaching, I actively engaged in research and guided students in scientific research projects, fostering their development and encouraging a deeper understanding of cutting-edge technologies.",
          color: "#0071C5",
        },
        {
          title: "Big Data and NLP Engineer",
          company: "Admicro, VCCorp Corporation",
          company_url: "https://vccorp.vn/",
          logo_path: "vccorp.jpg",
          duration: "Jul 2020 - Present",
          location: "HCM city, Vietnam",
          description:
            "At VCCorp, I contributed to key AI-driven projects, including developing a chatbot with the RASA platform, creating an event detection system for Vietnamese news streams, and implementing text correction using BERT and machine learning techniques. I also played a vital role in building a personalized news recommendation system for millions of users on apps like Kenh14 and Pega, enhancing user engagement through tailored content.",
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
          description:
            "While serving as a teaching assistant at the University of Information Technology, I assisted in Object-Oriented Programming courses, helping students understand core concepts and improve their coding skills.",
          color: "#0071C5",
        },
        {
          title: "Talent Acquisition Collaborator",
          company: "Team Recruitment,VNG Corporation",
          company_url: "https://www.vng.com.vn/",
          logo_path: "vng.jpg",
          duration: "Feb 2019 - Apr 2019",
          location: "HCM city, Vietnam",
          description:
            "In my role as a recruiter, I specialized in identifying and attracting top talent in the technology sector, ensuring that the right skills and expertise were matched with the needs of the organization.",
          color: "#ee3c26",
        },
        {
          title: "Junior Software Engineer",
          company: "Recruitment & Training Department, Fujinet System JSC",
          company_url: "https://www.fujinet.net/",
          logo_path: "fujinet.jpg",
          duration: "Jul 2018 - Feb 2019",
          location: "HCM city, Vietnam",
          description:
            "At Fujinet, I worked on software development projects utilizing Java Servlet, Java Struts1, and Java Struts2, focusing on solutions tailored for the Japanese market.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Team leader - The Green Summer Voluntary Campaign",
          company:
            "The University of Information Technology, Vietnam National University, HCM City",
          company_url: "https://tuoitre.uit.edu.vn",
          logo_path: "muahexanh.png",
          duration: "May 2016 - Oct 2016",
          location: "HCM city, Vietnam",
          description:
            "I served as the Team Leader of the Pioneer Team in the Green Summer Voluntary Campaign at the University of Information Technology. Leading a diverse group of 30 members, ranging from freshmen to seniors, we traveled across Saigon and Củ Chi to carry out various volunteer activities. Our initiatives included road construction, environmental improvement, visiting veterans' families, and hosting events aimed at spreading IT knowledge to the local communities.",
          color: "#FBBD18",
        },
        {
          title: "Member - The Spring Voluntary Campaign",
          company:
            "The University of Information Technology, Vietnam National University, HCM City",
          company_url: "https://tuoitre.uit.edu.vn",
          logo_path: "xuantinhnguyen.png",
          duration: "Jan 2016 - Feb 2016",
          location: "HCM city, Vietnam",
          description:
            "I was also a member of the Communication & Media Team and the Jam Making Team. Every day, alongside other members, I went to the university where we manually made jam, a traditional Vietnamese food enjoyed during Tết Holiday, using coconut and various fruits. As IT enthusiasts, making jam was quite a challenge for us, but it was a rewarding experience. Through our efforts, we produced around 300 to 400 bags of jam, which we then sold throughout downtown Saigon. The proceeds were used to buy gifts and make donations to the city's Children's Hospital 2 and the Phú Mỹ Hưng commune in Củ Chi district.",
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
          title: "Chief Commander - UP Voluntary Campaign",
          company:
            "The University of Information Technology, The University of Economics and Law, Vietnam National University, HCM City",
          company_url: "https://tuoitre.uit.edu.vn",
          logo_path: "up.png",
          duration: "Mar 2017",
          location: "HCM city + Tay Ninh province, Vietnam",
          description:
            "As the Chief Commander of the UP Voluntary Campaign, co-organized by the Faculty of Software Engineering at UIT and the Faculty of Business Administration at UEL, I led a campaign that attracted 200 volunteers from 16 universities, primarily from Vietnam National University. We conducted three programs: 'Warm UP' at Bình Triệu Center, caring for the elderly and veterans; 'Grow UP' at S.O.S Village, supporting orphans; and 'Light UP', aiding the homeless on the streets of Saigon. The campaign culminated in a four-day program called 'Hands UP' in Phước Vinh Commune, Tây Ninh province. Funds raised through our activities in Saigon allowed us to carry out meaningful work in the community, including constructing 3 km of street lighting, building 1 km of village roads, donating school supplies to 30 underprivileged students, organizing a mock trial to raise legal awareness, and cleaning the milestone between Vietnam and Cambodia, among other impactful activities.",
          color: "#D83B01",
        },
        // {
        //   title: "Postman Student Expert",
        //   company: "Postman",
        //   company_url: "https://www.postman.com/",
        //   logo_path: "postman.png",
        //   duration: "Feb 2020 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "GitHub Student Developer",
        //   company: "GitHub",
        //   company_url: "https://github.com/",
        //   logo_path: "github.png",
        //   duration: "Nov 2019 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Contribute to Open Source Community and Open Source Project.",
        //   color: "#040f26",
        // },
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "E. F. I. Student Volunteer",
        //   company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
        //   company_url: "https://indiaenvironment.org/",
        //   logo_path: "efi.png",
        //   duration: "Apr 2017 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
        //   color: "#5a900f",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a variety of advanced technologies, including AI integration, data management, and web development. I've worked on initiatives such as building AI solutions, managing data infrastructure, and developing educational content. Below are some of my projects. Note that not all are on GitHub yet.",
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
