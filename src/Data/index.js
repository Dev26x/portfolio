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
    mongodb,
    git,
    figma,
    briefcase,
    graduation,
    gericht,
    dasher,
    shop,
    summariser,
    threejs,
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
      id: 1,
      title: "Web Developer",
      icon: web,
    },
    {
      id: 2,
      title: "React js Developer",
      icon: mobile,
    },
    {
      id: 3,
      title: "Frontend Developer",
      icon: backend,
    },
    {
      id: 4,
      title: "Community Manager",
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
  ];
  
  const experiences = [
    {
      title: "Customer Support Specialist",
      company_name: "Avada",
      icon: briefcase,
      iconBg: "#383E56",
      date: "February 2022 - June 2023",
      points: [
        "Helped over 1,500 businesses resolve bugs and issues regarding Avada Shopify and Magento apps.",
        "Helped over 300 businesses with custom requests by editing CSS and Liquid code on Shopify stores. ",
        "Helped create help videos and guides on Avada products for businesses.",
        "Contributed to in-house documentation/knowledge-base.",
      ],
    },
    {
      title: "frontend Developer (reactjs)",
      company_name: "Sponsorlytix",
      icon: briefcase,
      iconBg: "#383E56",
      date: "February 2022 - Aug 2022",
      points: [
        "Built and tested reusable components to display Big Data Analytics fetched via APIs for brands, using React, Typescript & Storybook.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Community Manager (Fifa, Nba2k & Apex Legends)",
      company_name: "Naija Sports Gaming ",
      icon: briefcase,
      iconBg: "#383E56",
      date: "March 2020 - Present",
      points: [
        "Organised gaming events.",
        "Ensured members complied with the community's rules and regulations.",
        "Resolved issues amongst members",
      ],
    },
    {
      title: "Electrical & Electronics Engineering (B.ENG)",
      company_name: "Federal University of Technology, Minna",
      icon: graduation,
      iconBg: "#383E56",
      date: "2010 - 2015",
      points: [
        "Developed critical thinking, analysis and complex problem-solving skills",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Gericht-lux",
      description:
        "Web application for a luxurious restaurant",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gericht,
      source_code_link: "https://github.com/Dev26x/gerich-restaurant",
      live_link: "https://gericht-lux.netlify.app/",
    },
    {
      name: "Shop-e",
      description:
        "Responsive E-commerce web application",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "fetchapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shop,
      source_code_link: "https://github.com/Dev26x/shop-e",
      live_link: "https://shop-e-v1.netlify.app/",
    },
    {
      name: "Dasher",
      description:
        "Admin dashboard for desktop devices.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "material ui",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dasher,
      source_code_link: "https://github.com/Dev26x/dasher",
      live_link: "https://dasher-v1.netlify.app/",
    },
    {
      name: "Article summariser",
      description:
        "Condenses articles into concise summaries",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: summariser,
      source_code_link: "https://github.com/Dev26x/article-summarizer",
      live_link: "https://article-summarizer-v1.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };