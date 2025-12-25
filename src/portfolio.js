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
      title: "Infrastructure Management",
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

// Reading Journey Page
const readingJourney = {
  title: "My Reading Journey 📚",
  description:
    "Welcome to my collection of books. I try to use the exact cover of each book I own, as part of a personal timeline. Each book here marks a moment, a memory, or a thought worth keeping.",
  books: [
    {
      id: 1,
      title: "Harry Potter và Hòn đá Phù thủy",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/5/51/Harry_Potter_v%C3%A0_H%C3%B2n_%C4%91%C3%A1_ph%C3%B9_th%E1%BB%A7y_b%C3%ACa_2003.jpeg",
    },
    {
      id: 2,
      title: "Harry Potter và Phòng chứa Bí mật",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/6/62/Harry_Potter_v%C3%A0_Ph%C3%B2ng_ch%E1%BB%A9a_b%C3%AD_m%E1%BA%ADt.jpg",
    },
    {
      id: 3,
      title: "Harry Potter và tên tù nhân ngục Azkaban",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/9/9f/Harry_Potter_v%C3%A0_t%C3%AAn_t%C3%B9_nh%C3%A2n_ng%E1%BB%A5c_Azkaban_b%C3%ACa.jpg",
    },
    {
      id: 4,
      title: "Harry Potter và chiếc cốc lửa",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/8/88/Harry_Potter_v%C3%A0_Chi%E1%BA%BFc_c%E1%BB%91c_l%E1%BB%ADa_b%C3%ACa.jpg",
    },
    {
      id: 5,
      title: "Harry Potter và hội Phượng hoàng",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/7/74/Harry_Potter_v%C3%A0_H%E1%BB%99i_ph%C6%B0%E1%BB%A3ng_ho%C3%A0ng.jpg",
    },
    {
      id: 6,
      title: "Harry Potter và Hoàng tử lai",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a5/HBP.JPG/330px-HBP.JPG",
    },
    {
      id: 7,
      title: "Harry Potter và Bảo bối tử thần",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/4/4d/HARRY-7.jpg",
    },
    {
      id: 8,
      title: "Những chuyện kể của Beedle Người Hát Rong",
      author: "J. K. Rowling",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/a/aa/Beedle_vi.jpg/300px-Beedle_vi.jpg",
    },
    {
      id: 9,
      title: "Harry Potter Và Những Lý Giải Khoa Học",
      author: "Roger Highfield",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_02552011_095521.jpg",
    },
    {
      id: 10,
      title: "Kẻ cắp tia chớp",
      author: "Rick Riordan",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c1/Bia_Ke_cap_tia_chop.jpg/330px-Bia_Ke_cap_tia_chop.jpg",
    },
    {
      id: 11,
      title: "Biển quái vật",
      author: "Rick Riordan",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/eb/Bia_Bien_Quai_Vat_VN.jpg/330px-Bia_Bien_Quai_Vat_VN.jpg",
    },
    {
      id: 12,
      title: "Lời nguyền của thần Titan",
      author: "Rick Riordan",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/18/Loi_nguyen_cua_than_Titan_VN.jpg/330px-Loi_nguyen_cua_than_Titan_VN.jpg",
    },
    {
      id: 13,
      title: "Cuộc chiến chốn Mê cung",
      author: "Rick Riordan",
      cover: "https://upload.wikimedia.org/wikipedia/vi/7/7a/Cuoc_chien_chon_Me_cung_VN.jpg",
    },
    {
      id: 14,
      title: "Vị thần cuối cùng",
      author: "Rick Riordan",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/6/6e/Percy_Jackson_v%C3%A0_V%E1%BB%8B_th%E1%BA%A7n_cu%E1%BB%91i_c%C3%B9ng.jpg/330px-Percy_Jackson_v%C3%A0_V%E1%BB%8B_th%E1%BA%A7n_cu%E1%BB%91i_c%C3%B9ng.jpg",
    },
    {
      id: 15,
      title: "Con trai thần Neptune",
      author: "Rick Riordan",
      cover: "https://isach.info/images/story/cover/nhung_anh_hung_dinh_olympus_2_con_trai_than_neptune__rick_riordan.jpg",
    },
    {
      id: 16,
      title: "Dấu hiệu Athena",
      author: "Rick Riordan",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/d/a/dau-hieu-athena-tai-ban.jpg",
    },
    {
      id: 17,
      title: "Ngôi nhà của thần Hades",
      author: "Rick Riordan",
      cover: "https://salt.tikicdn.com/cache/w300/media/catalog/product/i/m/img377.u2377.d20170118.t131205.525197.jpg",
    },
    {
      id: 18,
      title: "Dòng máu Olympus",
      author: "Rick Riordan",
      cover: "https://salt.tikicdn.com/ts/product/40/ef/bf/2962c48dc3555dd8dd45247798f404c4.jpg",
    },
    {
      id: 19,
      title: "Hồ Sơ Á Thần",
      author: "Rick Riordan",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/h/o/ho_so_a_than_bia_1_.jpg",
    },
    {
      id: 20,
      title: "Eragon",
      author: "Christopher Paolini",
      cover: "https://www.hoangcuong.online/images/detailed/21/12676674844b8f121c62cf3.512x742.w.b.jpg?t=1512476789",
    },
    {
      id: 21,
      title: "Eldest (Đại ca)",
      author: "Christopher Paolini",
      cover: "https://salt.tikicdn.com/cache/w300/media/catalog/product/e/l/eldest-1_1.jpg",
    },
    {
      id: 22,
      title: "Brisingr (Hỏa kiếm)",
      author: "Christopher Paolini",
      cover: "https://docsach24.co/filemanager/data-images/Phi%C3%AAu%20L%C6%B0u%20-%20M%E1%BA%A1o%20Hi%E1%BB%83m/eragon-3-brisingr-hoa-kiem.jpg",
    },
    {
      id: 23,
      title: "Inheritance (Di sản thừa kế)",
      author: "Christopher Paolini",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_20152012_111516.jpg",
    },
    {
      id: 24,
      title: "Truy Tìm Akhenaten",
      author: "P. B. Kerr",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdU6rmbH50Htok-TL5WsB2InGSKNKBnTiwSR0IVee2M7kU6qLxbzXzsryJlBD5t2c_iLM&usqp=CAU",
    }, {
      id: 25,
      title: "Djinn Xanh Babylon",
      author: "P. B. Kerr",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_516237.jpg",
    }, {
      id: 26,
      title: "Hổ Mang Chúa Kathmandu",
      author: "P. B. Kerr",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryThumb_16442010_104427.jpg",
    }, {
      id: 27,
      title: "Ngày Tái Sinh Những Chiến Binh Đất Nung",
      author: "P. B. Kerr",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_13072011_030718.jpg",
    }, {
      id: 28,
      title: "Mắt Rừng",
      author: "P. B. Kerr",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_04072013_110738.jpg",
    }, {
      id: 29,
      title: "Năm Tu Sĩ Khổ Hạnh Xứ Faizabad",
      author: "P. B. Kerr",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_27152016_091550.jpg",
    }, {
      id: 30,
      title: "Pháp sư xứ Hải Địa",
      author: "Ursula K. Le Guin",
      cover: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_90462.jpg",
    }, {
      id: 31,
      title: "Mê cung xứ Hải Địa",
      author: "Ursula K. Le Guin",
      cover: "https://image.phunuonline.com.vn/news/2018/20180124/fckimage/121312_6899877703-9f00a38f30-b-241658339.jpg",
    },
    {
      id: 32,
      title: "Pháp Thuật",
      author: "Angie Sage",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/p/h/phap-thuat-1-a.jpg",
    },
    {
      id: 33,
      title: "Khinh Công",
      author: "Angie Sage",
      cover: "https://dtv-ebook.com.vn/images/truyen-online/ebook-septimusheap-2-khinh-cong-prc-pdf-epub.jpg",
    }, {
      id: 34,
      title: "Y Thuật",
      author: "Angie Sage",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/y/_/y_thuat_1.jpg",
    }, {
      id: 35,
      title: "Charlie Bone Lúc nửa đêm",
      author: "Jenny Nimmo",
      cover: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_62477.jpg",
    }, {
      id: 36,
      title: "Charlie Bone & Quả cầu xoắn thời gian",
      author: "Jenny Nimmo",
      cover: "https://docsach24.co/filemanager/data-images/Huy%E1%BB%81n%20b%C3%AD%20-%20Gi%E1%BA%A3%20T%C6%B0%E1%BB%9Fng/charlie-bone-2-charlie-bone-va-qua-cau-xoan-thoi-gian.jpg",
    }, {
      id: 37,
      title: "Charlie Bone & Cậu bé vô hình",
      author: "Jenny Nimmo",
      cover: "https://isach.info/images/story/cover/charlie_bone_va_cau_be_vo_hinh__jenny_nimmo.jpg",
    }, {
      id: 38,
      title: "Charlie Bone & Lâu đài gương",
      author: "Jenny Nimmo",
      cover: "https://bookio.edu.vn/wp-content/uploads/2024/06/33182763106_5a24962eb9_o.jpg",
    }, {
      id: 39,
      title: "Charlie Bone & Nhà vua ẩn mình",
      author: "Jenny Nimmo",
      cover: "https://salt.tikicdn.com/cache/w300/media/catalog/product/f/u/full-img-1401326849607_1.jpg",
    }, {
      id: 40,
      title: "Charlie Bone & Sói hoang",
      author: "Jenny Nimmo",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_10382009_013807.jpg",
    }, {
      id: 41,
      title: "Charlie Bone & Cái bóng xứ Badlock",
      author: "Jenny Nimmo",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_07282010_032826.jpg",
    }, {
      id: 42,
      title: "Charlie Bone & Hiệp sĩ đỏ",
      author: "Jenny Nimmo",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_07562010_035647.jpg",
    }, {
      id: 43,
      title: "Nhà Giả Kim",
      author: "Michael Scott",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697655770i/144760713.jpg",
    }, {
      id: 44,
      title: "Pháp Sư",
      author: "Michael Scott",
      cover: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_14432018_034346.jpg",
    }, {
      id: 45,
      title: "Nữ Phù Thủy",
      author: "Michael Scott",
      cover: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_180164_1_43_1_57_1_4_1_2_1_210_1_29_1_98_1_25_1_21_1_5_1_3_1_18_1_18_1_45_1_26_1_32_1_14_1_413.jpg",
    }, {
      id: 46,
      title: "Kẻ Chiêu Hồn",
      author: "Michael Scott",
      cover: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_14402018_034037.jpg",
    }, {
      id: 47,
      title: "Ảo Thuật Gia",
      author: "Michael Scott",
      cover: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/ao_thuat_gia___bi_mat_cua_nicholas_flamel_bat_tu_tai_ban_2018/2021_06_22_11_54_31_1-390x510.jpg",
    }, {
      id: 48,
      title: "Yêu Nữ",
      author: "Michael Scott",
      cover: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_25562018_105608.jpg",
    }, {
      id: 49,
      title: "Hải Tặc Ma Cà Rồng 01: Quỷ Dữ Đại Dương",
      author: "Justin Somper",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_28502009_115016.jpg",
    }, {
      id: 50,
      title: "Hải Tặc Ma Cà Rồng 02: Thủy Triều Kinh Hoàng",
      author: "Justin Somper",
      cover: "https://www.nxbtre.com.vn/Images/News/NXBTreNews_Full_10162010_111644.jpg",
    }, {
      id: 51,
      title: "Hải Tặc Ma Cà Rồng 03: Thuyền Trưởng Máu",
      author: "Justin Somper",
      cover: "https://www.nxbtre.com.vn/Images/Book/NXBTreStoryFull_05082011_100812.jpg",
    }, {
      id: 52,
      title: "Mật mã Da Vinci",
      author: "Dan Brown",
      cover: "https://upload.wikimedia.org/wikipedia/vi/8/84/M%E1%BA%ADt_m%C3%A3_davinci.jpg",
    }, {
      id: 53,
      title: "Thiên Thần Và Ác Quỷ",
      author: "Dan Brown",
      cover: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-thien-than-va-ac-quy.jpg",
    }, {
      id: 54,
      title: "Biểu tượng thất truyền",
      author: "Dan Brown",
      cover: "https://upload.wikimedia.org/wikipedia/vi/6/6a/Bi%E1%BB%83u_t%C6%B0%E1%BB%A3ng_th%E1%BA%A5t_truy%E1%BB%81n.jpg",
    }, {
      id: 55,
      title: "Hỏa ngục",
      author: "Dan Brown",
      cover: "https://upload.wikimedia.org/wikipedia/vi/4/4e/Bia_Hoa_nguc.jpg",
    }, {
      id: 56,
      title: "Nguồn Cội",
      author: "Dan Brown",
      cover: "https://bizweb.dktcdn.net/100/180/408/products/nguon-coi-447x696-jpeg.jpg?v=1659255805770",
    }, {
      id: 57,
      title: "Điểm dối lừa",
      author: "Dan Brown",
      cover: "https://upload.wikimedia.org/wikipedia/vi/4/46/Diem_doi_lua.jpg",
    }, {
      id: 58,
      title: "Pháo đài số",
      author: "Dan Brown",
      cover: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-phao-dai-so.jpg",
    }, {
      id: 59,
      title: "Kẻ Tầm Xương",
      author: "Jeffery Deaver",
      cover: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/ke_tam_xuong_tai_ban_2018/2020_10_05_14_38_14_1-390x510.jpg",
    },
    {
      id: 60,
      title: "Đấu trường sinh tử",
      author: "Suzanne Collins",
      cover: "https://upload.wikimedia.org/wikipedia/vi/a/ab/Hunger_games.jpg",
    },
    {
      id: 61,
      title: "Bắt lửa",
      author: "Suzanne Collins",
      cover: "https://cdn1.fahasa.com/media/catalog/product/b/a/bat_lua_1_2018_08_07_10_37_55.JPG",
    },
    {
      id: 62,
      title: "Húng nhại",
      author: "Suzanne Collins",
      cover: "https://cdn1.fahasa.com/media/catalog/product/h/u/hung_nhai_1_2018_08_07_10_38_08.JPG",
    }, {
      id: 63,
      title: "Cháu trai Pháp sư",
      author: "C. S. Lewis",
      cover: "https://sachnoiviet.net/wp-content/uploads/2022/06/bien-nien-su-narnia-1-chau-trai-phap-su.jpg",
    },
    {
      id: 64,
      title: "Biên Niên Sử Narnia",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img016_1.jpg",
    },
    {
      id: 65,
      title: "Con ngựa và Cậu bé",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w300/media/catalog/product/i/m/img017.jpg",
    },
    {
      id: 66,
      title: "Hoàng tử Caspian",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img018_1.jpg",
    },
    {
      id: 67,
      title: "Trên con tàu Hướng tới Bình minh",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img019_2.jpg",
    },
    {
      id: 68,
      title: "Chiếc ghế Bạc",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img021.jpg",
    },
    {
      id: 69,
      title: "Trận chiến Cuối cùng",
      author: "C. S. Lewis",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img020_1.jpg",
    }, {
      id: 70,
      title: "Pendragon",
      author: "D. J. MacHale",
      cover: "https://bookbuy.vn/Res/Images/Product/pendragon-tap-1-con-buon-tu-than_38442_1.gif",
    }, {
      id: 71,
      title: "Tứ quái TKKG",
      author: "Stefan Wolf",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHt0AInavWejjaN15Y1uI1EGC_STu14FnTQ&s",
    }, {
      id: 72,
      title: "Hiệp Sĩ Sainte Hermine",
      author: "Alexandre Dumas",
      cover: "https://nhasachmienphi.com/images/thumbnail/nhasachmienphi-hiep-si-sainte-hermine.jpg",
    }, {
      id: 73,
      title: "Ba người lính ngự lâm",
      author: "Alexandre Dumas",
      cover: "https://product.hstatic.net/200000017360/product/banguoilinhngulam_16_1_bia-moi-01_37899981f22b48ffaf0551a59561f71d.jpg",
    }, {
      id: 74,
      title: "Bá Tước Monte Cristo",
      author: "Alexandre Dumas",
      cover: "https://www.netabooks.vn/Data/Sites/1/Product/6606/1.jpg",
    }, {
      id: 75,
      title: "Chiến Tranh Và Hòa Bình",
      author: "Lev Tolstoy",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNvqq2P7PNtdjpinkH7Tz3YgKeHE4VlxhFA&s",
    }, {
      id: 76,
      title: "Không gia đình",
      author: "Hector Malot",
      cover: "https://bookish.vn/wp-content/uploads/2019/04/khong-gia-dinh-tb-2019.jpg",
    }, {
      id: 77,
      title: "Trong Gia Đình",
      author: "Hector Malot",
      cover: "https://bizweb.dktcdn.net/thumb/grande/100/418/570/products/8935210228864.jpg?v=1622522665417",
    }, {
      id: 78,
      title: "Thám Tử Sherlock Holmes",
      author: "Arthur Conan Doyle",
      cover: "https://s3.cloud.cmctelecom.vn/tinhte1/2017/06/4070659_cover.jpg",
    }, {
      id: 79,
      title: "Papillon Người Tù Khổ Sai",
      author: "Henri Charrière",
      cover: "https://xemsachhay.com/wp-content/uploads/2018/04/15599_p21995.jpg",
    }, {
      id: 80,
      title: "Những Người Khốn Khổ",
      author: "Victor Hugo",
      cover: "https://newshop.vn/public/uploads/products/9291/nhung-nhuoi-khon-kho-bia.jpg",
    }, {
      id: 81,
      title: "Nhà Thờ Đức Bà Paris",
      author: "Victor Hugo",
      cover: "https://cdn1.fahasa.com/media/catalog/product/n/h/nh_-th_-_c-b_-paris---b_a-ngo_i.jpg",
    }, {
      id: 82,
      title: "Đồi gió hú",
      author: "Emily Brontë",
      cover: "https://product.hstatic.net/200000017360/product/doigiohu_02_d836545a3f624f6591304a612bdea14d.jpg",
    }, {
      id: 83,
      title: "Miếng Da Lừa",
      author: "Honoré de Balzac",
      cover: "https://product.hstatic.net/200000122283/product/mi-e1-ba-bfng-da-l-e1-bb-aba_c6fa98a3a1c840f499e01793c05c451c_master.jpg",
    }, {
      id: 84,
      title: "Trận Đấu Mùa Đông",
      author: "Jean Claude Mourlevat",
      cover: "https://salt.tikicdn.com/cache/w300/media/catalog/product/t/r/tran_dau_mua_dong.jpg",
    }, {
      id: 85,
      title: "Cuộc Chiến Khuy Cúc",
      author: "Louis Pergaud",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/u/cuoc_chien_khuy_cuc-nn9348394.jpg",
    }, {
      id: 86,
      title: "Những tấm lòng cao cả",
      author: "Edmondo De Amicis",
      cover: "https://hnm.1cdn.vn/2015/07/27/hanoimoi.com.vn-uploads-tuandiep-2015-7-27-_s1.jpg",
    }, {
      id: 87,
      title: "Gió qua rặng liễu",
      author: "Kenneth Grahame",
      cover: "https://salt.tikicdn.com/cache/200x280/media/catalog/product/g/i/gio_qua_rang_lieu-1234394434.jpg",
    }, {
      id: 88,
      title: "Túp lều bác Tom",
      author: "Harriet Beecher Stowe",
      cover: "https://product.hstatic.net/200000343865/product/tup-leu-bac-tom_bia_file-in_ad9997a0247f40b68d63c2db42a8923b_e09af0e1cca148fb9e3c9684789bc926_master.jpg",
    }, {
      id: 89,
      title: "Những cuộc Phiêu lưu của Huckleberry Finn",
      author: "Mark Twain",
      cover: "https://sachcuatui.net/wp-content/uploads/2020/09/nhung-cuoc-phieu-luu-cua-huckleberry-finn-mark-twain.jpg",
    }, {
      id: 90,
      title: "Cuộc phiêu lưu của Tom Sawyer",
      author: "Mark Twain",
      cover: "https://bizweb.dktcdn.net/thumb/1024x1024/100/413/485/products/cuoc-phieu-luu-cua-tom-sawyer-bia.jpg?v=1628932193770",
    }, {
      id: 91,
      title: "Trên Sa Mạc Và Trong Rừng Thẳm",
      author: "Henryk Sienkiewicz",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/t/r/tren_sa_mac_va_trong_rung_tham_3.jpg",
    }, {
      id: 92,
      title: "Bim trắng tai đen",
      author: "Gavriil Troyepolsky",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/c/o/conbimtrang.jpg",
    }, {
      id: 93,
      title: "Hai vạn dặm dưới biển",
      author: "Jules Verne",
      cover: "https://product.hstatic.net/200000343865/product/hai-van-dam-duoi-bien---tb-2022_5a19e0cf6a0a4e2fa4af35cf1400cddd_c51c8b730dbd4ffaa3c8049aef635d99.jpg",
    }, {
      id: 94,
      title: "Sống mòn",
      author: "Nam Cao",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630330804i/12405088.jpg",
    }, {
      id: 95,
      title: "Đất Rừng Phương Nam",
      author: "Đoàn Giỏi",
      cover: "https://salt.tikicdn.com/cache/w1200/media/catalog/product/i/m/img405_5.jpg",
    }, {
      id: 96,
      title: "Hòn Đất",
      author: "Anh Đức",
      cover: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_91386.jpg",
    }, {
      id: 97,
      title: "Tấm ván phóng dao",
      author: "Mạc Can",
      cover: "https://upload.wikimedia.org/wikipedia/vi/6/69/Tam-van-phong-dao.jpg",
    }, {
      id: 98,
      title: "Tôi là Bêtô",
      author: "Nguyễn Nhật Ánh",
      cover: "https://koiskami.wordpress.com/wp-content/uploads/2012/05/ap_20090426055158414.jpg",
    }, {
      id: 99,
      title: "Đảo mộng mơ",
      author: "Nguyễn Nhật Ánh",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1497205396i/10925338.jpg",
    }, {
      id: 100,
      title: "Có Hai Con Mèo Ngồi Bên Cửa Sổ",
      author: "Nguyễn Nhật Ánh",
      cover: "https://static.tuoitre.vn/tto/i/s626/2013/12/28/8LdJHzfb.jpg",
    }, {
      id: 101,
      title: "Cho tôi xin một vé đi tuổi thơ",
      author: "Nguyễn Nhật Ánh",
      cover: "https://upload.wikimedia.org/wikipedia/vi/c/c9/Cho_t%C3%B4i_xin_m%E1%BB%99t_v%C3%A9_%C4%91i_tu%E1%BB%95i_th%C6%A1.jpg",
    }, {
      id: 102,
      title: "Nhật ký chú bé nhút nhát",
      author: "Jeff Kinney",
      cover: "https://upload.wikimedia.org/wikipedia/vi/thumb/0/09/Diary_of_a_wimpy_kid.jpg/330px-Diary_of_a_wimpy_kid.jpg",
    },
    {
      id: 103,
      title: "Hoàng Lê Nhất Thống Chí",
      author: "Ngô gia văn phái",
      cover: "https://xemsachhay.com/wp-content/uploads/2018/04/7882_p13950.jpg",
    }, {
      id: 104,
      title: "Đại Việt Sử Ký Toàn Thư",
      author: "",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDtlEJai8-2samqOw9_liKA9d0BzjZkaj1g&s",
    }, {
      id: 105,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      cover: "https://www.netabooks.vn/Data/Sites/1/Product/27713/de-men-phieu-luu-ky.jpg",
    }, {
      id: 106,
      title: "Người bị CIA cưa chân 6 lần",
      author: "Mã Thiện Đồng",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBnMEUsSbPsLFYll2V_hOvgm3FEz4OzKk8g&s",
    }, {
      id: 107,
      title: "Số đỏ",
      author: "Vũ Trọng Phụng",
      cover: "https://down-vn.img.susercontent.com/file/923a128a105332523dd17e2ebdf01f18",
    },
    {
      id: 108,
      title: "Giông tố",
      author: "Vũ Trọng Phụng",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630482102i/13548424.jpg",
    },
    {
      id: 109,
      title: "Truyện Cổ Andersen ",
      author: "Hans Christian Andersen",
      cover: "https://cdn1.fahasa.com/media/catalog/product/t/r/truyen-co-andersen_bia_tap-2_tb-2024.jpg",
    },
    {
      id: 110,
      title: "Truyện Cổ Grimm",
      author: "Jacob & Wilhelm Grimm",
      cover: "https://minhkhai.com.vn/hinhlon/127199.jpg",
    },
    {
      id: 111,
      title: "Truyện Ngụ Ngôn La Fontaine",
      author: "Jean de La Fontaine",
      cover: "https://product.hstatic.net/200000343865/product/ngu-ngon-la-fontaine_bia_5e5f5cab31ae47b8b0134c682dc156f7_0024959159a949f8845210a0026d0df3_master.jpg",
    }, {
      id: 112,
      title: "Ngụ Ngôn Êdốp",
      author: "Aesop",
      cover: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/ngu_ngon_edop/2020_05_26_10_44_52_1-390x510.jpg",
    }, {
      id: 113,
      title: "Nghìn lẻ một đêm",
      author: "Antoine Galland",
      cover: "https://cdn1.fahasa.com/media/catalog/product/n/g/nghinle1dem.jpg",
    },
    {
      id: 114,
      title: "Lĩnh Nam chích quái",
      author: "Trần Thế Pháp",
      cover: "https://product.hstatic.net/200000343865/product/linh-nam-trich-quai_bia-tb2019_a19c0da062854e67b316001601f638cd_a111a47103f54208afac099a3d2fca9e_master.jpg",
    },
    {
      id: 115,
      title: "Truyền kỳ mạn lục",
      author: "Nguyễn Dữ",
      cover: "https://product.hstatic.net/200000343865/product/truyen-ki-man-luc_bia-24x32-final_cd672be95a8c4e50b7693938abba62b0.jpg",
    },
    {
      id: 116,
      title: "Nam Hải dị nhân liệt truyện",
      author: "Phan Kế Bính",
      cover: "https://giangvien.net/uploads/shops/2024_08/263_1.jpg",
    },
    {
      id: 117,
      title: "Các Nền Văn Minh Vĩ Đại Trên Thế Giới",
      author: "Nguyễn Văn Khang, Đặng Thị Hạnh",
      cover: "https://vietbooks.info/attachments/upload_2024-8-15_16-20-40-png.39826/",
    }, {
      id: 118,
      title: "Thần Thoại Hy Lạp",
      author: "Nguyễn Văn Khỏa",
      cover: "https://salt.tikicdn.com/cache/w300/ts/product/5a/46/6f/0a1489952146de56d313e10fcd3cba5e.jpg",
    },
    {
      id: 119,
      title: "Tiếng Gọi Nơi Hoang Dã",
      author: "Jack London",
      cover: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936037697093.jpg",
    },
    {
      id: 120,
      title: "Những Câu Chuyện Kỳ Bí Vùng Biển Bắc",
      author: "Jonas Lie",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIMfOW7y1d5-ahnK5vUxzvxFNiP_DS8FATg&s",
    },
    {
      id: 121,
      title: "Ông già và biển cả",
      author: "Ernest Hemingway",
      cover: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935236434249.jpg",
    },
    {
      id: 122,
      title: "Gulliver du kí",
      author: "Jonathan Swift",
      cover: "https://product.hstatic.net/1000328521/product/0_17ece6a6b22941209492e4e9183a74d0_grande.jpg",
    }, {
      id: 123,
      title: "Tuyển tập truyện ngắn",
      author: "Lỗ Tấn",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SHTJX51hvQQkiuLHFxPROWeDFoP__WNDQw&s",
    },
    {
      id: 124,
      title: "Tào Lao Xịt Bộp",
      author: "Lê Văn Nghĩa",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5R4ZQ6mzh8j8-H8R5Tx9CwciL6Ng_qwmwbg&s",
    },
    {
      id: 125,
      title: "Tâm Lý Người An Nam",
      author: "Paul Giran",
      cover: "https://cdn1.fahasa.com/media/catalog/product/t/a/tam-ly-nguoi-an-nam-01.jpg",
    },
    {
      id: 126,
      title: "Quê nội",
      author: "Võ Quảng",
      cover: "https://upload.wikimedia.org/wikipedia/vi/c/c5/Que_Noi.jpg",
    },
    {
      id: 127,
      title: "Đại Nam dị truyện",
      author: "Phan Cuồng",
      cover: "https://bizweb.dktcdn.net/thumb/1024x1024/100/363/455/products/dai-nam-di-truyen-01.jpg?v=1727066864590",
    },

    {
      id: 128,
      title: "Gạc Ma: vòng tròn bất tử",
      author: "Mã Lương Lê",
      cover: "https://static.tuoitre.vn/tto/i/s626/2016/03/16/gac-ma-1458096561-1458121040.jpg",
    },
    {
      id: 129,
      title: "Một Chiến Dịch Ở Bắc Kỳ",
      author: "Charles-Édouard Hocquard",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1587523712i/53241944.jpg",
    }, {
      id: 130,
      title: "Lịch sử Việt Nam bằng hình",
      author: "",
      cover: "https://pos.nvncdn.com/d8267c-94460/ps/20240927_7GXvQGKQYz.jpeg",
    }, {
      id: 131,
      title: "Dệt nên triều đại",
      author: "Vietnam Centre",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630414478i/55552635.jpg",
    }, {
      id: 132,
      title: "Lịch sử Việt Nam bằng tranh",
      author: "Trần Bạch Đằng",
      cover: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/lich_su_viet_nam_bang_tranh___ly_thuong_kiet_ban_mau_tai_ban_2023/2023_04_07_16_50_01_1-390x510.jpg",
    }, {
      id: 133,
      title: "Việt Sử Nhân Vật",
      author: "Kaovjets Ngujens",
      cover: "https://images2.thanhnien.vn/528068263637045248/2024/11/9/2-bia-sach-viet-su-17311660184271797489782.jpg",
    },
    {
      id: 134,
      title: "Sapiens: Lược sử loài người",
      author: "Yuval Noah Harari",
      cover: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935270703554.jpg",
      year: 2025,
    },
    {
      id: 135,
      title: "Mưa đỏ",
      author: "Chu Lai",
      cover: "https://cdn1.fahasa.com/media/catalog/product/c/6/c6809e4dab12d992c46e439d4f72b99e.jpg",
      year: 2025,
    },
    {
      id: 136,
      title: "Tuổi thơ dữ dội",
      author: "Phùng Quán",
      cover: "https://product.hstatic.net/200000343865/product/tuoi-tho-du-doi_tap-1---tb-2023_37610d8b4cd0453aa96ab4f7873defee.png",
      year: 2025,
    },
    {
      id: 137,
      title: "Linh Điểu",
      author: "Nguyễn Văn Học",
      cover: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/linh_dieu/2021_06_19_10_47_06_1-390x510.jpg",
      year: 2025,
    }, {
      id: 138,
      title: "Tây Du ký",
      author: "Ngô Thừa Ân",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7OJsVLj7rNCBBB_xI7Q70eovJs4bH_b-GVw&s",
      year: 2025,
    }
  ],
};

// Games Journey Page
const gamesJourney = {
  title: "Game I Played 🎮",
  description:
    "My gaming journey archive. Each game here represents hours of adventure, challenge, and unforgettable moments.",
  games: [
    {
      id: 1,
      title: "Clair Obscur: Expedition 33",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1903340/eccd7fa054e32bed3213fb92f6089bebd9978215/capsule_616x353.jpg?t=1750245564"
    },
    {
      id: 2,
      title: "Atomfall",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: 3,
      title: "War Thunder",
      image: "https://warthunder.com/i/opengraph-wt.jpg"
    },
    {
      id: 4,
      title: "Warhammer 40,000: Space Marine II",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2183900/b218028e3a2901985b54ea27e4627209bb78039c/header_alt_assets_6.jpg?t=1747932217"
    },
    {
      id: 5,
      title: "Indiana Jones and the Great Circle",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2677660/header.jpg?t=1750081518"
    },
    {
      id: 6,
      title: "The Witcher 3: Wild Hunt",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/ad9240e088f953a84aee814034c50a6a92bf4516/header.jpg?t=1749199563"
    },
    {
      id: 7,
      title: "Ghost of Tsushima: Director’s Cut",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215430/capsule_616x353.jpg?t=1737495883"
    },
    {
      id: 8,
      title: "Horizon Forbidden West",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/capsule_616x353.jpg?t=1737564719"
    },
    {
      id: 9,
      title: "Black Myth: Wukong",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1749182199"
    },
    {
      id: 10,
      title: "House Flipper 2",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQng4Dom9P8J8pXH1UoC504ol61Lg-jrGpxQ&s"
    },
    {
      id: 11,
      title: "Black Mesa",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/362890/c06bc3afe2c10bb77bfb8d41198101b8a3990fd7/capsule_616x353.jpg?t=1747193649"
    },
    {
      id: 12,
      title: "Red Dead Redemption 2",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg?t=1720558643"
    },
    {
      id: 13,
      title: "Atomic Heart: Enchantment Under the Sea",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/668580/header.jpg?t=1749247374"
    },
    {
      id: 14,
      title: "Dead Island 2",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/934700/header.jpg?t=1740480586"
    },
    {
      id: 15,
      title: "Call of Duty: Modern Warfare II",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962660/header.jpg?t=1710969334"
    },
    {
      id: 16,
      title: "Lies of P: Vignette",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_616x353.jpg?t=1749445998"
    },
    {
      id: 17,
      title: "Elden Ring: Shadow of the Erdtree",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2622380/800a6d64a1685c303bf985f084fbf5c08ac2ae5c/capsule_616x353.jpg?t=1749150157"
    },
    {
      id: 18,
      title: "Ready or Not",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1144200/header.jpg?t=1733935197"
    },
    {
      id: 19,
      title: "Cyberpunk 2077",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1749198613"
    },
    {
      id: 20,
      title: "Mount & Blade II: Bannerlord",
      image: "https://gaming-cdn.com/images/products/761/orig/mount-and-blade-ii-bannerlord-pc-game-steam-cover.jpg?v=1729667464"
    },
    {
      id: 21,
      title: "The Wandering Village",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1121640/header.jpg?t=1749742921"
    },
    {
      id: 22,
      title: "Sid Meier's Civilization® VI",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289070/capsule_616x353.jpg?t=1740607040"
    },
    {
      id: 23,
      title: "The Last of Us Part I",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg"
    },
    {
      id: 24,
      title: "Hogwarts Legacy",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/990080/capsule_616x353.jpg?t=1738007476"
    },
    {
      id: 25,
      title: "Total War: Three Kingdoms",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/779340/capsule_616x353.jpg?t=1740720569"
    },
    {
      id: 26,
      title: "Spider-Man Remastered",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg?t=1725652915"
    },
    {
      id: 27,
      title: "Karate Survivor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpH_JKxvgr9SVkpbCSGXYD-IQUOzKlMvPkOg&s"
    },
    {
      id: 28,
      title: "Crime Scene Cleaner",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1040200/header.jpg?t=1747124481"
    },
    {
      id: 29,
      title: "Victoria 3",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/529340/5d2299303d12bf1266714fbebf6feaa2ddf4afeb/capsule_616x353.jpg?t=1747731985"
    },
    {
      id: 30,
      title: "God of Weapons",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2342950/capsule_616x353.jpg?t=1738941602"
    },
    {
      id: 31,
      title: "Sniper Elite 4",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/312660/header.jpg?t=1681207252"
    },
    {
      id: 32,
      title: "Sniper Elite 5",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1029690/header.jpg?t=1734452721"
    },
    {
      id: 33,
      title: "Sniper Elite: Resistance",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2169200/8c443833339f3c54943b40679c90b95912be36cc/capsule_616x353.jpg?t=1745931650"
    },
    {
      id: 34,
      title: "Death Stranding",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg?t=1728989088"
    },
    {
      id: 35,
      title: "Contraband Police",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/756800/header.jpg?t=1740579624"
    },
    {
      id: 36,
      title: "",
      image: ""
    },
    {
      id: 37,
      title: "Celeste",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg?t=1714089525"
    },
    {
      id: 38,
      title: "Dave the Diver",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1868140/header.jpg?t=1744457365"
    },
    {
      id: 39,
      title: "Anno 1800",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/916440/capsule_616x353.jpg?t=1739894341"
    },
    {
      id: 40,
      title: "Cult of the Lamb",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2331540/capsule_616x353.jpg?t=1705597016"
    }, {
      id: 41,
      title: "Doraemon Story of Seasons",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/965230/capsule_616x353.jpg?t=1701307445"
    },
    {
      id: 42,
      title: "Foxhole",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/505460/header.jpg?t=1725021826"
    },
    {
      id: 43,
      title: "Please Fix the Road",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1383250/capsule_616x353.jpg?t=1737461972"
    },
    {
      id: 44,
      title: "Unpacking",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1135690/capsule_616x353.jpg?t=1745453778"
    },
    {
      id: 45,
      title: "Planet Crafter",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1284190/0cb237d6b6c54c8a571a13dfbd5837398571084d/capsule_616x353.jpg?t=1736781400"
    },
    {
      id: 46,
      title: "Stardew Valley",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1711128146"
    },
    {
      id: 47,
      title: "Dead Cells: Return to Castlevania",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/588650/header.jpg?t=1747319767"
    },
    {
      id: 48,
      title: "Cuphead",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852"
    },
    {
      id: 49,
      title: "Project Zomboid",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg?t=1739309087"
    },
    {
      id: 50,
      title: "Age of Empires IV: Anniversary Edition",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1466860/header.jpg?t=1744749573"
    },
    {
      id: 51,
      title: "Age of Empires II: Definitive Edition",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/813780/header.jpg?t=1746638753"
    },
    {
      id: 52,
      title: "Kena: Bridge of Spirits",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1954200/capsule_616x353.jpg?t=1664298117"
    },
    {
      id: 53,
      title: "Assassin's Creed Valhalla: Dawn of Ragnarok",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2210140/capsule_616x353.jpg?t=1670350026"
    },
    {
      id: 54,
      title: "Horizon Zero Dawn: Complete Edition",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1151640/header.jpg?t=1736534555"
    },
    {
      id: 55,
      title: "Dishonored 2",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/403640/capsule_616x353.jpg?t=1726161101"
    },
    {
      id: 56,
      title: "Astroneer",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3042220/header.jpg?t=1731719676"
    },
    {
      id: 57,
      title: "Assassin's Creed II",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/33230/capsule_616x353.jpg?t=1682004272"
    },
    {
      id: 58,
      title: "Assassin's Creed III",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/911400/header.jpg?t=1692034844"
    },
    {
      id: 59,
      title: "Assassin’s Creed Liberation",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/260210/capsule_616x353.jpg?t=1747655342"
    },
    {
      id: 60,
      title: "Assassin's Creed IV Black Flag",
      image: "https://gamelade.vn/wp-content/uploads/2025/03/download-Assassins-Creed-IV-Black-Flag-hadoan-tv-1024x576.jpg"
    },
    {
      id: 61,
      title: "Assassin's Creed Rogue",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/311560/capsule_467x181.jpg"
    },
    {
      id: 62,
      title: "Assassin's Creed Freedom Cry",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/277590/header.jpg?t=1747656414"
    },
    {
      id: 63,
      title: "Assassin's Creed Unity",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/289650/capsule_616x353.jpg?t=1734511984"
    },
    {
      id: 64,
      title: "Assassin's Creed Syndicate",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/368500/header.jpg?t=1739176365"
    },
    {
      id: 65,
      title: "Assassin's Creed Origins",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582160/capsule_616x353.jpg?t=1736247595"
    },
    {
      id: 66,
      title: "Assassin's Creed Odyssey",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/812140/header.jpg?t=1736257794"
    },
    {
      id: 67,
      title: "Assassin's Creed Valhalla: Dawn of Ragnarok",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2210140/capsule_616x353.jpg?t=1670350026"
    },
    {
      id: 68,
      title: "Assassin's Creed Mirage",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3035570/15583e1c0a34e5858cffed256ef8d3b372374d9d/capsule_616x353.jpg?t=1737593508"
    },
    {
      id: 69,
      title: "Assassin’s Creed Shadows",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3159330/header.jpg?t=1749753653"
    },
    {
      id: 70,
      title: "Far Cry 3",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/220240/capsule_616x353.jpg?t=1738250672"
    },
    {
      id: 71,
      title: "Far Cry 4",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/298110/header.jpg?t=1739176495"
    },
    {
      id: 72,
      title: "Far Cry Primal",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/371660/capsule_616x353.jpg?t=1694554883"
    },
    {
      id: 73,
      title: "Far Cry 5",
      image: "https://gaming-cdn.com/images/products/1842/616x353/far-cry-5-pc-game-ubisoft-connect-europe-cover.jpg?v=1701270032"
    },
    {
      id: 74,
      title: "Far Cry New Dawn",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/939960/capsule_616x353.jpg?t=1725613807"
    },
    {
      id: 75,
      title: "Far Cry 6",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2369390/capsule_616x353.jpg?t=1738249424"
    },
    {
      id: 76,
      title: "Fallout 3",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/22370/capsule_616x353.jpg?t=1732208097"
    },
    {
      id: 77,
      title: "Fallout: New Vegas",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22380/header.jpg?t=1665072891"
    },
    {
      id: 78,
      title: "Fallout 4",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/377160/capsule_616x353.jpg?t=1726758475"
    },
    {
      id: 79,
      title: "Fallout Shelter",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588430/2fe8bacaff2c834a41df99d62e5a3eaa0f4e973d/capsule_616x353.jpg?t=1749757126"
    },
    {
      id: 80,
      title: "Grand Theft Auto: Vice City",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1546990/header.jpg?t=1741117543"
    },
    {
      id: 81,
      title: "Grand Theft Auto: San Andreas",
      image: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/grand-theft-auto-san-andreas-file-51754b60.jpeg.webp"
    },
    {
      id: 82,
      title: "Grand Theft Auto V",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg?t=1741017936"
    },
    {
      id: 83,
      title: "Call of Duty: World at War",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10090/capsule_616x353.jpg?t=1654830025"
    },
    {
      id: 84,
      title: "Call of Duty: Modern Warfare 2",
      image: "https://preview.redd.it/does-this-game-ever-go-on-sale-i-know-its-only-20-but-id-v0-7spdxnvj49zc1.jpeg?width=1080&crop=smart&auto=webp&s=3db4d2b243fc2cc9b3ed4019c4cb568f77299774"
    },
    {
      id: 85,
      title: "Call of Duty: Black Ops",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/42700/header.jpg?t=1748040520"
    },
    {
      id: 86,
      title: "Call of Duty: Modern Warfare 3",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/115300/header.jpg?t=1692032509"
    },
    {
      id: 87,
      title: "Call of Duty: Black Ops II",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/202970/header.jpg?t=1748037715"
    },
    {
      id: 88,
      title: "Call of Duty: Ghosts",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/209160/header.jpg?t=1748043672"
    },
    {
      id: 89,
      title: "Call of Duty: Advanced Warfare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqHzOBTI5k5DVRLxfQEcosbATnclJWyKyIg&s"
    },
    {
      id: 90,
      title: "Call of Duty: Black Ops III",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/311210/header.jpg?t=1748022663"
    },
    {
      id: 91,
      title: "Call of Duty: Infinite Warfare",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292730/capsule_616x353.jpg?t=1646764561"
    },
    {
      id: 92,
      title: "Call of Duty: WWII",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/476600/capsule_616x353.jpg?t=1646764749"
    },
    {
      id: 93,
      title: "Call of Duty: Black Ops 4",
      image: "https://img.gg.deals/5f/b0/948ac1bd31f9dba30147fa791728263e2ef0_1232xr706_Q100.png"
    },
    {
      id: 94,
      title: "Call of Duty: Modern Warfare",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2000950/capsule_616x353.jpg?t=1678294805"
    },
    {
      id: 95,
      title: "Call of Duty: Black Ops Cold War",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1985810/capsule_616x353.jpg?t=1731607699"
    },
    {
      id: 96,
      title: "Call of Duty: Vanguard",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1985820/header.jpg?t=1731607702"
    },
    {
      id: 97,
      title: "Call of Duty: Modern Warfare II",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962660/capsule_616x353.jpg?t=1710969334"
    },
    {
      id: 98,
      title: "Call of Duty: Modern Warfare III",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2519060/header.jpg?t=1731633494"
    },
    {
      id: 99,
      title: "Call of Duty: Black Ops 6",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg?t=1748536585"
    },
    {
      id: 100,
      title: "Kingdom Come: Deliverance",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/379430/capsule_616x353.jpg?t=1741619061"
    },
    {
      id: 101,
      title: "Kingdom Come: Deliverance 2",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/bcad55593058f54e54aee8b6714220e216cf9b0c/capsule_616x353.jpg?t=1743170749"
    },
    {
      id: 102,
      title: "Minecraft",
      image: "https://images.steamusercontent.com/ugc/1626318952226442227/517B7B737476E06B3CFA897E2D386A60CE092B3F/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
    },
    {
      id: 103,
      title: "Sekiro: Shadows Die Twice",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1726158438"
    },
    {
      id: 104,
      title: "Cities: Skylines",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg?t=1746722581"
    },
    {
      id: 105,
      title: "World War Z",
      image: "https://cdn1.epicgames.com/wombat/offer/WWZ-GOTY-Edition_EpicGames_Desktop-Horizontal-1360x766-updatev1-1360x766-3addca3f7160d1cc98bcd9abe2221e6d.jpg"
    },
    {
      id: 106,
      title: "Farming Simulator",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1248130/capsule_616x353.jpg?t=1715068241"
    },
    {
      id: 107,
      title: "Detroit: Become Human",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/capsule_616x353.jpg?t=1667468479"
    },
    {
      id: 108,
      title: "Control",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/870780/capsule_616x353.jpg?t=1743425935"
    },
    {
      id: 109,
      title: "Left 4 Dead 2",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1731457037"
    },
    {
      id: 110,
      title: "Don't Starve Together",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2711510/capsule_616x353.jpg?t=1703008970"
    },
    {
      id: 111,
      title: "Among Us",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg?t=1746224720"
    },
    {
      id: 112,
      title: "Raft",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/648800/header.jpg?t=1727184011"
    },
    {
      id: 113,
      title: "Sleeping Dogs",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/307690/header.jpg?t=1602800785"
    },
    {
      id: 114,
      title: "Subnautica",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg?t=1747368935"
    },
    {
      id: 115,
      title: "Metro Exodus",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/412020/capsule_616x353.jpg?t=1725363713"
    },
    {
      id: 116,
      title: "NARUTO SHIPPUDEN: Ultimate Ninja STORM 4",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/349040/header.jpg?t=1703080866"
    },
    {
      id: 117,
      title: "No Man's Sky",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/275850/a98cb49e7544cfe93ddb259fa7cd44859fb79913/header_alt_assets_15.jpg?t=1742997746"
    },
    {
      id: 118,
      title: "ARK: Survival Evolved",
      image: "https://thanhnien.mediacdn.vn/Uploaded/phongdt/2022_09_24/ark-338.jpg"
    },
    {
      id: 119,
      title: "Green Hell",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/815370/header.jpg?t=1748953427"
    },
    {
      id: 120,
      title: "Prison Architect",
      image: "https://cdn1.epicgames.com/offer/3ffb410dab2d409aacd39a1abc6fcbba/EGS_PrisonArchitectFutureTechPack_DoubleEleven_DLC_S1_2560x1440-c4b0e4f005a7a994a292427cbf4954aa?resize=1&w=480&h=270&quality=medium"
    },
    {
      id: 121,
      title: "Counter-Strike: Source",
      image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/240/capsule_616x353.jpg?t=1745368575"
    },
    {
      id: 122,
      title: "Middle-earth: Shadow of War",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/356190/capsule_616x353.jpg?t=1747346596"
    },
    { id: 123, title: "Battlefield Vietnam", image: "https://i.ytimg.com/vi/f1i9S83bLzU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXb71__jk8QfYjA3bjtFr6AqRLRw" },
    { id: 124, title: "Battlefield: Bad Company 2", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/24960/header.jpg?t=1682701509" },
    { id: 125, title: "Battlefield 3", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238820/capsule_616x353.jpg?t=1734373919" },
    { id: 126, title: "Battlefield 4", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1238860/header.jpg?t=1734376923" },
    { id: 127, title: "Battlefield 1", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1238840/header.jpg?t=1747168268" },
    { id: 128, title: "Stranded Deep", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313120/capsule_616x353.jpg?t=1727731485" },
    { id: 129, title: "Poly Bridge", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367450/capsule_616x353.jpg?t=1567634023" },
    { id: 130, title: "Internet Cafe Simulator", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1136160/capsule_616x353.jpg?t=1745101867" },
    { id: 131, title: "Call of Juarez Gunslinger", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/204450/header.jpg?t=1728907994" },
    { id: 132, title: "Plague Inc: Evolved", image: "data:image/jpeg;base64,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" },
    { id: 133, title: "Sherlock Holmes: The Devil's Daughter", image: "https://images.gog-statics.com/1f844722c8b4ccf5bde04dbf16878d541af311b702d27f4616a8af3f54bb0d23.jpg" },
    { id: 134, title: "Layers of Fear", image: "https://cdn1.epicgames.com/spt-assets/d269ca53264246ea8144cba5b2168abc/layers-of-fears-lmpsj.jpg?resize=1&w=480&h=270&quality=medium" },
    { id: 135, title: "A Plague Tale: Innocence", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZ_Ogn-XkUFbg6xBxSQKG9FKSq9YJJwRrTg&s" },
    { id: 136, title: "Attack on Titan / AOT Wings of Freedom", image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/449800/header.jpg?t=1748478864" },
    // { id: 137, title: "", image: "" },
    // { id: 138, title: "", image: "" },
    // { id: 139, title: "", image: "" },
    // { id: 140, title: "", image: "" }

  ],
};




// Travel Journey Page
const travelJourney = {
  title: "My Travels 🌍",
  description: "Exploring the world, one place at a time. Here are the countries and places I've visited.",
  worldMap: {
    visited: [
      {
        id: "JP",
        name: "Japan",
        photos: ["/img/singapore1.jpg", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
      },
      {
        id: "TH",
        name: "Thailand",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
      },
      {
        id: "SG",
        name: "Singapore",
        photos: ["/img/singapore1.jpg", "/img/singapore2.jpg", "/placeholder.svg?height=200&width=300"]
      },
      {
        id: "KR",
        name: "South Korea",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
      },
      {
        id: "MY",
        name: "Malaysia",
        photos: ["/img/singapore1.jpg", "/img/singapore2.jpg"]
      },
      {
        id: "NL",
        name: "Netherlands",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"]
      },
      {
        id: "DE",
        name: "Germany",
        photos: ["/placeholder.svg?height=200&width=300"]
      },
      {
        id: "FR",
        name: "France",
        photos: ["/placeholder.svg?height=200&width=300"]
      },
      {
        id: "BE",
        name: "Belgium",
        photos: ["/placeholder.svg?height=200&width=300"]
      },
      {
        id: "LU",
        name: "Luxembourg",
        photos: ["/placeholder.svg?height=200&width=300"]
      },
      {
        id: "VN",
        name: "Vietnam",
        photos: ["/placeholder.svg?height=200&width=300"]
      }
    ]
  },
  vietnamMap: {
    visited: [
      {
        id: "01",
        name: "Hà Nội",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "10",
        name: "Tỉnh Lào Cai",
        photos: ["/img/sapa1.jpg"],
      },
      {
        id: "02",
        name: "Tỉnh Hà Giang",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "04",
        name: "Tỉnh Cao Bằng",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "08",
        name: "Tỉnh Tuyên Quang",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "20",
        name: "Tỉnh Lạng Sơn",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "22",
        name: "Tỉnh Quảng Ninh",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "38",
        name: "Tỉnh Thanh Hóa",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "40",
        name: "Tỉnh Nghệ An",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "42",
        name: "Tỉnh Hà Tĩnh",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "56",
        name: "Tỉnh Khánh Hòa",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "68",
        name: "Tỉnh Lâm Đồng",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "60",
        name: "Tỉnh Bình Thuận",
        photos: ["/img/muine1.jpg", "/img/muine2.jpg", "/img/muine3.jpg"],
      },
      {
        id: "70",
        name: "Tỉnh Bình Phước",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "75",
        name: "Tỉnh Đồng Nai",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "74",
        name: "Tỉnh Bình Dương",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "72",
        name: "Tỉnh Tây Ninh",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "77",
        name: "Tỉnh Bà Rịa - Vũng Tàu",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "79",
        name: "Thành phố Hồ Chí Minh",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "80",
        name: "Tỉnh Long An",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "82",
        name: "Tỉnh Tiền Giang",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "92",
        name: "Thành phố Cần Thơ",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      },
      {
        id: "83",
        name: "Tỉnh Bến Tre",
        photos: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
      }
    ]
  }
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
  readingJourney,
  gamesJourney,
  travelJourney
};

