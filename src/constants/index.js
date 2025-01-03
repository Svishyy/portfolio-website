import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mysql,
    python,
    cplusplus,
    rust,
    meta,
    nrc,
    astera,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cmpt_419,
    prison_escape,
    ufc,
    housing,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Embedded Systems",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Rust",
      icon: rust,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Developer",
      company_name: "Astera Labs",
      icon: astera,
      iconBg: "#383E56",
      date: "May 2022 - Aug 2022",
      points: [
        "Developed a Python SDK for the Taurus product line, enabling efficient manipulation of register lists using object-oriented programming principles.",
        "Introduced hierarchical functionality for bank-wise, page-wise, byte-wise, and bit-wise operations, ensuring ease of access at each level.",
        "Improved register access speed by 40% through the organization of curated Python methods tailored to each operational level.",
        "Implemented comprehensive read and write capabilities for individual bytes and bits.",
        "Collaborated with an experienced team, following an agile scrum development process with two-week sprints.",
        "Actively engaged in continuous development of the SDK, incorporating feedback from senior teams to enhance testing capabilities.",
        "Enhanced the SDK's accessibility and readability, making it more user-friendly.",
      ],
    },
    {
      title: "Junior Software Intern",
      company_name: "Astera Labs",
      icon: astera,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - April 2023",
      points: [
        "Optimized regression testing for Leo CXL™ Memory Connectivity Platform boards, reducing testing time and enhancing reliability, through the implementation ofstreamlined scripts and a Jenkins pipeline.",
        "Created Python test scripts capable of simultaneously executing predefined regression tests on multiple boards, presenting results in a user-friendly format for efficient bugdetection and resolution.",
        "Focused on assessing the compatibility of Leo CXL™ Memory Connectivity Platform boards with DDR5-5600 RDIMMs from leading manufacturers, including Micron,Samsung, and SK hynix.",
        "Automated testing processes by integrating scripts with Jenkins, allowing for seamless testing upon pull request creation on Bitbucket.",
        "Gained hands-on experience in upgrading Supermicro systems from Intel Sapphire Rapids to Intel Emerald Rapids processors.",
        "Demonstrated effective cross-functional communication between engineering and product apps teams.",
        "Embraced a commitment to meeting deliverable requirements and actively incorporated feedback into project deliverables.",
        "Maintained comprehensive, up-to-date documentation of software issues, solutions, setup instructions, and test script execution on the company's Confluence page.",
      ],
    },
    {
      title: "Lab Intern - Data Science",
      company_name: "National Research Council Canada",
      icon: nrc,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Working with polymer electrolyte membrane fuel cell (PEMFC) research data by extracting, cleaning and visualizing from test logs.",
        "Developing an interactive visualization module that can visualize chosen data in a chosen format (scatterplot, bar plot, line plot, overlapping plot), written in Python.",
        "Automating data extraction from test logs and implemented necessary pre-processing for machine learning.",
        "Developing and integrating a user-friendly front-end web application using React, with the data visualization process and improving user engagement.",
        "Utilizing Docker for cross-platform development as well as R and Python for statistical analysis.",
        "Backing up extracted and cleaned data onto a MySQL database for long term retention of data to facilitate cross-comparison over the next few years.",
      ],
    },
    {
      title: "Lab Intern - Machine Learning",
      company_name: "National Research Council Canada",
      icon: nrc,
      iconBg: "#E6DEDD",
      date: "May 2024 - Aug 2024",
      points: [
        "Led a collaboration with Dalhousie University to build a 'Data-finder-extractor' pipeline using LLMs, automating the retrieval, and relevancy assessment of chemical research articles.",
        "Resulting product enabled researchers to input a list of scientific keywords and obtain a curated collection of experimental findings sourced from papers relevant to input search queries.",
        "Leveraged APIs from various renowned scientific publishing authorities such as Elsevier, arXiv, ACM, Nature and others, along with scraping Google Scholar's and Semantic Scholar's results.",
        "Enabled customizability for scientists to specify the exact scientific measurements to collect across relevant papers in the form of a tabular template, given as input to the system.",
        "Enabled standardizability for scientists to specify the exact units of the scientific measurements they are looking to collect.",
        "Applied prompt engineering and selected optimal model weights using Google Gemini 1.5 Flash to enhance chemical information extraction from collected results,achieving 82% accuracy and reducing manual processing time from weeks to 52 minutes per query."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Detecting cringe, pain and disgust in facial expressions",
      description:
        "Created a model that recognizes and distinguishes between facial expressions of cringe, pain and disgust from a custom made data-set of youtube video reactions.",
      tags: [
        {
          name: "OpenFace",
          color: "blue-text-gradient",
        },
        {
          name: "sci-kit learn",
          color: "green-text-gradient",
        },
        {
          name: "seaborn",
          color: "pink-text-gradient",
        },
      ],
      image: cmpt_419,
      source_code_link: "https://github.com/Svishyy/Detecting-Cringe-vs-Pain-vs-Disgust",
    },
    {
      name: "Prison Escape 2D Game",
      description:
        "Java-based 2D game including fully implemented enemy-movement, player controls, map progression, reward trinkets and player health bar. Incorporated JUnit testing as well. Escape from the prison to get your freedom! Won Best Game in CMPT 276 (Introduction to Software Engineering).",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Maven",
          color: "green-text-gradient",
        },
        {
          name: "JUnit",
          color: "pink-text-gradient",
        },
      ],
      image: prison_escape,
      source_code_link: "https://github.com/Svishyy/Prison-Escape-Game",
    },
    {
      name: "UFC Dataset Comprehensive Analysis",
      description:
        "A comprehensive analysis on a UFC fight statistics dataset that answers 10 most-asked questions such as best grappler/wrestler/striker and pound for pound champion. Also implemented a KNN based ML model to predict the winner for new fight matchups!",
      tags: [
        {
          name: "Seaborn",
          color: "blue-text-gradient",
        },
        {
          name: "data-preprocessing",
          color: "green-text-gradient",
        },
        {
          name: "sci-kit learn",
          color: "pink-text-gradient",
        },
      ],
      image: ufc,
      source_code_link: "https://github.com/xgill15x/UFC-Dataset-Analysis",
    },
    {
      name: "Vancouver Housing Prices Predictor",
      description:
        "A Random Forest Regressor based approach in predicting housing prices in Vancouver obtained from a kaggle based dataset.",
      tags: [
        {
          name: "Seaborn",
          color: "blue-text-gradient",
        },
        {
          name: "Kaggle",
          color: "green-text-gradient",
        },
        {
          name: "sci-kit learn",
          color: "pink-text-gradient",
        },
      ],
      image: housing,
      source_code_link: "https://github.com/Svishyy/Housing-Prices-Predictor",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };