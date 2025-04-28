import { color } from "framer-motion";
import {
  Figma,
  python,
  java,
  Php,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  SQL,
  JavaProj,
  Formation,
  payloadmaster,
  threejs,
  portfolio,
  cobian,
  Sloom,
  CompileVortex,
  fourNK,
  logotiss,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos ",
  },
  {
    id: "work",
    title: "Expériences",
  },
  {
    id: "veille",
    title: "Veille ",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Figma", icon: Figma },
  { title: "php", icon: Php },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "SQL", icon: SQL },
];

export const experiences = [
  {
    title: "Stage AI",
    company_name: "4NK",
    icon: fourNK,
    iconBg: "#161329",
    date: "Mai 2024 - Juillet 2024",
    points: [
      "Dans ce stage j'ai acquis de l'expérience sur les IA et notamment les API. ",
      "J'ai aussi commencé à m'intéresser au Rust,Javascript,Typescript",
    ],
  },
  {
    title: "Stage intégration",
    company_name: "4NK",
    icon: fourNK,
    iconBg: "#161329",
    date: "Janvier 2025 - Février 2025",
    points: [
      "Ce stage m'a permis d'approfondir mes connaissances en typescript, notamment en intégrant la stack de 4nk dans celle de Lecoffre.io",
    ],
  },
];
export const veilles = [
  {
    title: "Will Low Code Solve Developer Shortages?",
    company_name: "App developper magasin",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "L’article explore comment les plateformes low-code répondent à la pénurie mondiale de développeurs. Il met en lumière leur capacité à accélérer le développement d’applications d’entreprise tout en démocratisant l’accès aux outils de création logicielle pour les employés non techniques.",
    ],
  },
  {
    title: "Low-Code Development: Revolutionizing Enterprise Software",
    company_name: "Techtarget",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Présentation des plateformes comme OutSystems et Mendix, qui permettent aux entreprises de réduire considérablement les délais de mise sur le marché des applications critiques, tout en favorisant l’innovation interne.",
    ],
  },{
    title: "Low-Code/No-Code Adoption Trends in Enterprises",
    company_name: "Zdnet",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "L’article détaille comment les grandes entreprises utilisent des plateformes comme Microsoft Power Apps et Appian pour automatiser leurs processus internes et réduire les coûts associés au développement traditionnel.",
    ],
  },{
    title: "Low-Code Platforms Driving Digital Transformation in 2023",
    company_name: "Forbes",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Exploration des perspectives de croissance pour 2023, avec un accent sur les intégrations IA et automatisations de processus métier grâce à des plateformes comme Salesforce et ServiceNow.",
    ],
  },{
    title: "The Rise of Citizen Developers",
    company_name: "Techcrunch",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Cet article montre comment les outils low-code/no-code favorisent l’émergence des « citizen developers », des employés non techniques qui développent des applications métier, réduisant ainsi la pression sur les équipes IT.",
    ],
  },{
    title: "Low-Code Development in Action: Real-World Use Cases",
    company_name: "Gartner",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Étude de cas d’entreprises ayant utilisé des plateformes low-code pour moderniser des applications héritées et développer des outils personnalisés pour leurs équipes.",
    ],
  },{
    title: "Low-Code in 2023: AI-Powered Automation Takes Over",
    company_name: "Opensourceforu",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Focus sur les nouvelles fonctionnalités intégrées aux plateformes LCNC, comme l’automatisation basée sur l’IA et la gestion avancée des données en temps réel.",
    ],
  },{
    title: "Building Enterprise-Grade Applications with No-Code",
    company_name: "Bubble",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "L’article analyse les limites des plateformes no-code lorsqu’il s’agit de développer des applications complexes, tout en soulignant leur efficacité pour des solutions d’entreprise rapides.",
    ],
  },{
    title: "10 Key Low-Code Platforms to Watch in 2023",
    company_name: "Appdevelopermagazine",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Comparaison détaillée de 10 plateformes majeures, comme OutSystems, Mendix, et Microsoft Power Apps, en mettant l’accent sur leurs avantages respectifs pour les entreprises.",
    ],
  },{
    title: "Securing Low-Code/No-Code Platforms in Enterprises",
    company_name: "Zdnet",
    icon: logotiss,
    iconBg: "#161329",
    points: [
      "Discussion des enjeux de sécurité dans l’adoption des plateformes LCNC, notamment la protection des données sensibles et les risques liés au « shadow IT ».",
    ],
  },
];
export const projects = [
  {
    name: "TD Cobian",
    description:
      "C'est un travail dirigé fait en cours qui à pour but de mettre en place un systeme de sauvegarde automatique",
    tags: [
      { name: "Cobian", color: "blue-text-gradient" },
      { name: "Sauvegarde", color: "green-text-gradient" },
    ],
    image: cobian,
    source_code_link: "https://github.com/Fearoxeuh/Cobian",
  },
  {
    name: "EasyBee Stock",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Java", color: "blue-text-gradient" },
      { name: "Windows builder", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    image: JavaProj,
    source_code_link: "https://github.com/Fearoxeuh/EasybeeJava",
  },
  {
    name: "EasyBee Formation",
    description:
      "Easybee se spécialise dans la vente d'équipements apicoles. Notre mission est de concevoir un site web pour réserver des formations.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
    ],
    image: Formation,
    source_code_link: "https://github.com/LeoC76/Projet3Web",
  },
  {
    name: "Portfolio",
    description:
      "Le site sur lequel vous vous trouvez actuellement",
    tags: [
      { name: "Portfolio", color: "blue-text-gradient" },
      { name: "Identité", color: "green-text-gradient" },
      { name: "CV", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/Fearoxeuh/portfolio-enzo",
  },
  {
    name: "Intégration 4nk",
    description:
      "Intégration d'une solution logiciel dans un autre logiciel",
    tags: [
      { name: "Typescript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: fourNK,
    source_code_link: "",
  },
  {
    name: "GEN IA",
    description:
      "Outils pour la création de contrat au format 4nk",
    tags: [
      { name: "OpenIA", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" },
    ],
    image: fourNK,
    source_code_link: "https://drive.google.com/file/d/1eqwlX72TSukRmxMVZ0FisRC0cDkaMMUg/view?usp=sharing",
  },
  {
    name: "Retranscription IA",
    description:
      "Outils pour la conversion de contrat normaux en contrat 4NK",
    tags: [
      { name: "OpenIA", color: "blue-text-gradient" },
      { name: "JSON", color: "green-text-gradient" },
    ],
    image: fourNK,
    source_code_link: "https://drive.google.com/file/d/1_XR8CquUDOTmhp--6akn_9GRMH9WwuTI/view?usp=sharing",
  },
  {
    name: "Site Vitrine Sloom",
    description:
      "Ceci est mon tout premier projet réalisé en informatique.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],

    image: Sloom,
    source_code_link: "https://github.com/Fearoxeuh/SLOOM",
  },
];
