const NavigationItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Contact",
    href: "contact",
  },
  {
    name: "Testimonials",
    href: "testimonials",
  },
  {
    name: "Projects",
    href: "projects",
  }
]

const LinkItems = [
  {
    name: "Github",
    href: "https://github.com/Kaushalendra-Marcus?tab=repositories",
    icon: "/images/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/recent-activity/all/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "X",
    href: "https://x.com/Kaushal__marcus",
    icon: "images/x.svg"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kaushalendra_marcus/?hl=en",
    icon: "/images/insta.svg",
  },

];
const iconsListOne = [
  { name: "html", realName: "HTML5", image: "/images/html.svg" },
  { name: "css", realName: "CSS3", image: "/images/css.svg" },
  { name: "javascript", realName: "JavaScript", image: "/images/js.svg" },
  { name: "typescript", realName: "TypeScript", image: "/images/ts.svg" },
  { name: "react", realName: "React.js", image: "/images/react.svg" },
  { name: "nextjs", realName: "Next.js", image: "/images/nextjs.svg" },
  { name: "tailwindcss", realName: "Tailwind CSS", image: "/images/tailwindcss.svg" },
  { name: "redux", realName: "Redux", image: "/images/redux.svg" },
  { name: "nodejs", realName: "Node.js", image: "/images/nodejs.svg" },
  { name: "expressjs", realName: "Express.js", image: "/images/expressjs.svg" },
  { name: "mongodb", realName: "MongoDB", image: "/images/mongodb.svg" },
  { name: "mysql", realName: "MySQL", image: "/images/mysql.svg" },
];
const iconsListTwo = [
  { name: "docker", realName: "Docker", image: "/images/docker.svg" },
  { name: "aws", realName: "AWS", image: "/images/aws.svg" },
  { name: "googlecloud", realName: "Google Cloud", image: "/images/googlecloud.svg" },
  { name: "github", realName: "GitHub", image: "/images/github.svg" },
  { name: "gsap", realName: "GSAP", image: "/images/gsap.svg" },
  { name: "threejs", realName: "Three.js", image: "/images/threejs.svg" },
  { name: "wordpress", realName: "WordPress", image: "/images/wordpress.svg" },
  { name: "python", realName: "Python", image: "/images/python.svg" },
  { name: "seo", realName: "SEO", image: "/images/seo.svg" },
  { name: "c", realName: "C Language", image: "/images/c.svg" },
  { name: "c++", realName: "C++ Language", image: "/images/c++.svg" },
];



const slides = [
  {
    id: 1,
    title: "Postly-Social Media Application",
    img: "/images/postly_img.jpg",
    github: "https://github.com/Kaushalendra-Marcus/Postly",
    live: "https://postly-lake.vercel.app/"
  },
  {
    id: 2,
    title: "Chat Application",
    img: "/images/chat.jpg",
    github: "https://github.com/Kaushalendra-Marcus/chat-application/tree/main/Backend",
    live: "https://cokkie-chat.onrender.com/"
  },
  {
    id: 3,
    title: "Find GitHub User",
    img: "/images/findgithubuser.jpg",
    github: "https://github.com/Kaushalendra-Marcus/GITHUB_USER_FINDER_USERNAME",
    live: "https://github-user-finder-username.vercel.app/"
  },
  {
    id: 4,
    title: "Pay-Sphere",
    img: "/images/paysphere.jpg",
    github: "https://github.com/Kaushalendra-Marcus/Techathon_2",
    live: null
  }
];

// const testimonials = [
//   {
//     name: "John Miller",
//     pos: "Founder of ModernEdge Solutions",
//     review:
//       "David Jhon turned our vision into a stunning, functional platform that our customers love. Their creativity and technical expertise truly set them apart.",
//     imgPath: "/images/client1.png",
//   },
//   {
//     name: "Emily Carter",
//     pos: "UX Designer at PixelWorks Studio",
//     review:
//       "David Jhon consistently brings fresh ideas and innovative solutions. Their passion for creativity and attention to detail elevate every project.",
//     imgPath: "/images/client2.png",
//   },
//   {
//     name: "Sarah Lopez",
//     pos: "Entrepreneur and Small Business Owner",
//     review:
//       "Exceeded my expectations with a unique and beautifully designed product that works flawlessly. Their creative touch is outstanding.",
//     imgPath: "/images/client3.png",
//   },
//   {
//     name: "David Chen",
//     pos: "Project Manager at CreativeSphere Agency",
//     review:
//       "Blends technical skills with bold creativity to deliver exceptional results. They push boundaries and elevate every project they work on.",
//     imgPath: "/images/client4.png",
//   },
// ];

const footerIconsList = [
  {
    name: "X",
    href: "https://x.com/Kaushal__marcus",
    icon: "images/x.svg"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kaushalendra-singh-45b933272/recent-activity/all/",
    icon: "/images/linkedin.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Kaushalendra-Marcus?tab=repositories",
    icon: "/images/github.svg",
  },
  {
    name: "Email",
    mailto: "yadavkausha4a5@gmail.com",
    icon: "/images/email.svg",
  },
];

export {
  NavigationItems,
  LinkItems,
  iconsListOne,
  iconsListTwo,
  slides,
  footerIconsList
}