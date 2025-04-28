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
