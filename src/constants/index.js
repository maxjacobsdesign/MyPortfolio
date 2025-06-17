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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import SkiMateCaseStudy from "../components/CaseStudies/SkiMateCaseStudy"; // ✅ Import your case study component

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UX/UI Designer",
    icon: web,
  },
  {
    title: "Wireframing & Prototyping",
    icon: mobile,
  },
  {
    title: "Interaction Design",
    icon: backend,
  },
  {
    title: "Usability Testing",
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
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Account Executive",
    company_name: "Konica Minolta Business Solutions INC",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "January 2024 - Present",
    points: [
      "Generated $21,000 in revenue in a single month by identifying client needs and delivering tailored business solutions across Konica Minolta's product portfolio.",
      "Strategically prospected and developed strategic relationships with both net new and existing named accounts.",
      "Tailored Konica Minolta's business solutions to address specific pain points while maintaining high retention rates through consistent value delivery.",
    ],
  },
  {
    title: "Strategic Marketing Intern",
    company_name: "Colorado Rockies & Leeds Business Program",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Researched and prospected best fit brand partners for the Colorado Rockies offering exclusivity.",
      "Formulated exclusive tailored marketing activations for best fit prospect partners in the Colorado Rockies Stadium.",
      "Analyzed current industry trends to develop marketing strategies for targeted prospects and Colorado Rockies customer personas and engagement patterns.",
    ],
  },
  {
    title: "Hospitality Staff",
    company_name: "My Neighbor Felix",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2024",
    points: [
      "Delivered exceptional customer service in high-volume, customer-centric dining environment",
      "Consistently maintained positive team dynamics and enhanced overall operational efficiency.",
      "Coordinated logistics and cross-departmental communication for multiple events including weddings, special events, and private gatherings",
    ],
  },
  {
    title: "University of Colorado Boulder",
    company_name: "Bachelor of Arts, College of Media",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2020 - May 2024",
    points: [
      "Specialized Concentrations: Immersive Media and Business of Sports Certificate.",
      "Relevant Course Work: Extended Realities, Computational Media, Media Aesthetics, Virtual Reality",
      "Academic Performance: 3.3 GPA | Dean's List Recipient",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
    name: "UX Laws",
    designation: "Jakobs Law",
    company: "",
    image: "max.png",
  },
  {
    testimonial:
      "The time it takes to make a decision increases with the number and complexity of choices.",
    name: "UX Laws",
    designation: "Hick's Law",
    company: "",
    image: "max.png",
  },
  {
    testimonial:
      "The time to acquire a target is a function of the distance to and size of the target.",
    name: "UX Laws",
    designation: "Fitt's Law",
    company: "",
    image: "max.png",
  },
];

const projects = [
  {
    name: "SkiMate",
    description:
      "This front-end developed application connects skiers to a community focused on improving the weekend ski experience. Users can access real-time resort information, share crowd and traffic updates, and collaborate to choose the best locations for optimal conditions. By leveraging community-driven insights, the app helps reduce uncertainty, ease planning, and create a more enjoyable and efficient ski day for recreational skiers.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "case-study",
        color: "green-text-gradient",
      },
      {
        name: "prototyping",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://www.figma.com/proto/GMVB6n4otHXQKeupYWREHY/Skimate?node-id=330-517",
    caseStudyComponent: SkiMateCaseStudy, //  Case study reference
  },
  {
    name: "Getting Gooder",
    description:
      "The Gettin Good beverage collection features a vibrant, playful packaging design that perfectly captures the brand’s energetic spirit. Each can bursts with bold, nostalgic colors and textured details, enhanced by a refreshing dew effect that adds a tactile, thirst-quenching appeal",
    tags: [
      {
        name: "adobe",
        color: "blue-text-gradient",
      },
      {
        name: "mock-up",
        color: "green-text-gradient",
      },
      {
        name: "advertising",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };