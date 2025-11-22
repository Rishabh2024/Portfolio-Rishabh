import {
  FaCode,
  FaServer,
  FaGithub,
  FaComments,
  FaUserTie,
  FaAws, // ✅ AWS icon import added
} from "react-icons/fa";

export const projectData = [
  {
    name: "Password Generator Using JavaScript",
    description:
      "A simple password generator built with JavaScript that allows users to customize their passwords based on length and character types.Generate random passwords with customizable options.Include uppercase letters, lowercase letters, numbers, and symbols",
    img: "/images/pass-gen.png",
    demoLink: "https://rishabh2024.github.io/PasswordGenerator/",
    githubLink: "https://github.com/Rishabh2024/PasswordGenerator",
  },
  {
    name: "E-Commerce Website",
    description:
      "E-Commerce Website, a user-friendly platform offering a seamless shopping experience. Browse through a wide range of products, enjoy intuitive navigation, and find everything you need at your fingertips. Built with modern design and functionality to ensure customer satisfaction.",
    img: "/images/Ecommerce.png",
    demoLink: "https://rishabh2024.github.io/E-CommerceSite/project1/",
    githubLink: "https://github.com/Rishabh2024/E-CommerceSite",
  },
  {
    name: "Pokemon Dex",
    description:
      "Developed a Pokedex application using React, focusing on state management and custom hooks. Integrated the Pokémon API to fetch and display data dynamically, ensuring a responsive and interactive user experience while adhering to modern React best practices.",
    img: "/images/pokemon.png",
    demoLink: "https://pokedex-mu-rose-41.vercel.app/",
    githubLink: "https://github.com/Rishabh2024/Pokedex",
  },

  {
    name: "Quiz App",
    description:
      "Mini project built with HTML, CSS (Tailwind CSS), and JavaScript. It features a user-friendly interface for taking quizzes, dynamic question rendering, interactive options, and real-time score tracking.",
    img: "/images/quiz-app.png",
    demoLink: "https://rishabh2024.github.io/Quiz-app/",
    githubLink: "https://github.com/Rishabh2024/Quiz-app",
  },
  {
    name: "GitHub UserSearch",
    description:
      "This project allows users to find GitHub account details by simply entering a username. It fetches and displays profile details, repositories, and activity using the GitHub API.",
    img: "/images/githubuser.png",
    demoLink: "https://github-user-search-eosin-eight.vercel.app/",
    githubLink: "https://github.com/Rishabh2024/Github-UserSearch",
  },

  {
    name: "Dashboard Task Management",
    description:
      "A responsive dashboard for managing tasks with add, edit, filter, and delete features. Built with React, Material-UI, and localStorage for smooth interaction.",
    img: "/images/dashboard.png",
    demoLink: "https://merry-pixie-243c08.netlify.app/",
    githubLink: "https://github.com/Rishabh2024/Dashboard-Task",
  },
  {
    name: "Twitter-Post-Box",
    description:
      "A responsive Twitter Post component with features like add/edit posts, likes, retweets, and comments. Built using React, HTML, CSS, and JavaScript.",
    img: "/images/twitter.png",
    demoLink: "https://twit-post.netlify.app/",
    githubLink: "https://github.com/Rishabh2024/Twitter",
  },
];

export const skillData = [
  {
    skillName: "Frontend Development",
    skillDescription:
      "Building visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and React.",
    icon: FaCode,
  },
  {
    skillName: "Backend Development",
    skillDescription:
      "Developing server-side logic, databases, GoLang, Next.js and APIs to support web applications.",
    icon: FaServer,
  },
 {
  skillName: "Git, GitHub, Vercel & Netlify",
  skillDescription:
    "Managing version control using Git and GitHub, and deploying modern web applications efficiently on Vercel and Netlify.",
  icon: FaGithub,
},

  {
    skillName: "AWS Deployment (ECS & S3)",
    skillDescription:
      "Deploying scalable applications on AWS ECS (Fargate/EC2) and hosting static websites or assets efficiently on Amazon S3 .",
    icon: FaAws,
  },
];
