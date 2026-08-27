import kejaConnectImg from "../assets/KejaConnect.webp";
import kilimoLinkImg from "../assets/KilimoLink.webp";
import liquorChapChapImg from "../assets/LiquorChapChap.webp";
import grwcImg from "../assets/GRWC.webp";
import dentalWebsiteImg from "../assets/DentalWebsite.webp";
import Moriah from "../assets/Moriah.webp";
import primax from "../assets/Primax.webp"
import uga from "../assets/UGA.webp"
import umba from "../assets/Umba-labs.webp"
import turfsKe from "../assets/TurfsKe.webp"
import nuclaw from "../assets/Nuclaw.webp"
// Using a placeholder for Moimporriah since no asset exists based on the instructions

const placeholderImg =
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1000&auto=format&fit=crop";

export const projectsData = [
  {
    slug: "keja_connect",
    route: "/projects/keja_connect",
    heroImage: kejaConnectImg,
    title: "Keja Connect",
    tagline:
      "Find and reserve perfect student accommodation near Kenyan universities — the ultimate platform connecting students with affordable Kenyan hostels and landlords with reliable tenants.",
    team: "Individual",
    industry: "Real Estate / Student Housing",
    domain: "B2C / Web Platform",
    duration: "2 months",
    year: "2024",
    liveUrl: "https://kejaconnect.vercel.app",
    overview:
      "Keja Connect solves the painful and fragmented process of finding student accommodation in Kenya. Students waste days visiting unavailable units or relying on unverified WhatsApp tips. The platform gives landlords a space to list verified properties while giving students a clean, filterable interface to search by location, price, and availability.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Maps API",
      "Cloudinary",
      "JWT Authentication",
      "Responsive Design",
      "REST API",
    ],
    category: "Real Estate",
  },
  {
    slug: "kilimo_link",
    route: "/projects/kilimo_link",
    heroImage: kilimoLinkImg,
    title: "Kilimo Link",
    tagline:
      "Connect Kenyan farmers directly with buyers — sell crops, livestock, and farm produce without middlemen.",
    team: "Individual",
    industry: "Agriculture / AgriTech",
    domain: "B2B / B2C Marketplace",
    duration: "4 months",
    year: "2026",
    liveUrl: "https://kilimo-link.vercel.app",
    overview:
      "Kilimo Link addresses the deep structural inefficiency in Kenya's agricultural supply chain. Smallholder farmers receive as little as 20% of the final consumer price due to broker layers. The platform creates a direct digital marketplace where farmers list produce and buyers — from restaurants to retailers — purchase directly, with pricing transparency on both sides.",
    technologies: [
      "React",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Mpesa Daraja API",
      "Cloudinary",
      "Geolocation API",
      "Responsive Design",
      "RESTful API Design",
    ],
    category: "Agriculture",
  },
  {
    slug: "liquor_chapchap",
    route: "/projects/liquor_chapchap",
    heroImage: liquorChapChapImg,
    title: "Liquor Chapchap",
    tagline:
      "Fast, reliable alcohol delivery in Nairobi — order wines, beers, spirits, and convenience items, delivered to your doorstep across Nairobi and surrounding areas.",
    team: "Individual",
    industry: "E-Commerce / FMCG",
    domain: "B2C / E-Commerce",
    duration: "3 months",
    year: "2025",
    liveUrl: "https://liquorchapchap.vercel.app",
    overview:
      "Liquor Chapchap is a Nairobi-focused drinks delivery platform. The challenge was creating an e-commerce experience fast enough to match the urgency of the use case — people ordering drinks for an event happening now. The UX prioritises speed: minimal clicks from landing to checkout, with a cart that persists across sessions and a streamlined checkout that supports M-Pesa.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Context API",
      "LocalStorage",
      "Mpesa Daraja API",
      "Responsive Design",
      "CSS Animations",
    ],
    category: "E-Commerce",
  },
  {
    slug: "grwc",
    route: "/projects/grwc",
    heroImage: grwcImg,
    title: "Gospel Revival Wave Church",
    tagline:
      "A vibrant church community in Kasarani, Nairobi — powerful worship, transformative sermons, and meaningful fellowship.",
    team: "Individual",
    industry: "Non-Profit / Religious Organisation",
    domain: "B2C / Web Design & CMS",
    duration: "2 months",
    year: "2026",
    liveUrl: "https://grwc.vercel.app",
    overview:
      "GRWC needed a digital home that reflected the energy of a growing contemporary church. The challenge was designing for a non-technical client who needed to update sermons, events, and announcements themselves — without a developer. The solution was a clean, welcoming website backed by a headless CMS so the church team could manage content independently.",
    technologies: [
      "React",
      "Headless CMS",
      "Responsive Design",
      "CSS Animations",
      "Google Maps Embed",
      "Contact Form Integration",
      "SEO Optimisation",
    ],
    category: "Non-Profit",
  },
  {
    slug: "360_dental",
    route: "/projects/360_dental",
    heroImage: dentalWebsiteImg,
    title: "360 Dental",
    tagline:
      "A professional dental practice website designed to convert visitors into booked appointments.",
    team: "Individual",
    industry: "Healthcare / Dental",
    domain: "B2C / Web Design & Development",
    duration: "3 weeks",
    year: "2026",
    liveUrl: "https://360dental.vercel.app",
    overview:
      "360 Dental is a fast-turnaround website for a dental practice. The brief was conversion-focused: get visitors to book an appointment. Every design decision — from the hero layout to the services section — was made to reduce friction and build trust. The result is a clean, professional site that works on any device.",
    technologies: [
      "React",
      "CSS Animations",
      "Responsive Design",
      "Contact Form",
      "Google Maps Embed",
      "SEO Optimisation",
      "Performance Optimisation",
    ],
    category: "Healthcare",
  },
  {
    slug: "moriah",
    route: "/projects/moriah",
    heroImage: Moriah,
    title: "Moriah Chicken Grill",
    tagline:
      "Premium quality chicken dishes — delicious meals made with the freshest ingredients.",
    team: "Individual",
    industry: "Food & Beverage / Hospitality",
    domain: "B2C / Web Design & Development",
    duration: "3 weeks",
    year: "2025",
    liveUrl: "https://moriahchickengrill.vercel.app",
    overview:
      "Moriah Chicken Grill needed a website that made people hungry. The design challenge was translating the warmth and quality of a physical restaurant into pixels — rich food photography, warm colours, and a menu experience that made ordering feel effortless. Built fast, looks great on mobile.",
    technologies: [
      "React",
      "Responsive Design",
      "CSS Animations",
      "Menu Display Component",
      "Google Maps Embed",
      "Performance Optimisation",
    ],
    category: "Restaurant",
  },
  {
    slug: "utumishi_girls_academy",
    route: "/projects/utumishi_girls_academy",
    heroImage: uga,
    title: "Utumishi Girls Academy",
    tagline:
      "A centre of academic excellence and character formation for girls in the heart of the Rift Valley — enrolling Form 1 students in Gilgil, Nakuru County.",
    team: "Individual",
    industry: "Education",
    domain: "B2C / Institutional Website",
    duration: "Not specified",
    year: "2025",
    liveUrl: "https://uga1.vercel.app",
    overview:
      "Utumishi Girls Academy (UGA) is a premier girls boarding secondary school in Gilgil, Nakuru County, established in 2019 as a sister school to Utumishi Boys Academy. The site needed to communicate academic credibility (96% university transition rate, 400+ students enrolled) alongside warmth and character, with dedicated sections for academics, admissions, facilities, and student life, built to support Form 1 enrolment drives and KCSE results announcements.",
    technologies: [
      "Next.js",
      "Image Optimisation (next/image)",
      "Responsive Design",
      "SEO Optimisation",
      "Open Graph / Twitter Meta",
    ],
    category: "Education",
  },
  {
    slug: "nuclaw",
    route: "/projects/nuclaw",
    heroImage: nuclaw,
    title: "NUCLAW",
    tagline:
      "Not yet confirmed — site returned only a bare title with no visible copy at time of check.",
    team: "Individual",
    industry: "Not specified",
    domain: "Not specified",
    duration: "Not specified",
    year: "2026",
    liveUrl: "https://nuclaw.vercel.app",
    overview:
      "Could not confirm project details — nuclaw.vercel.app is client-rendered and returned no descriptive meta content or visible body copy at fetch time. Fill in manually once you have the live copy in front of you.",
    technologies: [],
    category: "Uncategorised",
  },
  {
    slug: "primax_family_dental",
    route: "/projects/primax_family_dental",
    heroImage: primax,
    title: "Primax Family Dental",
    tagline:
      "Not yet confirmed — site returned only a bare title with no visible copy at time of check.",
    team: "Individual",
    industry: "Healthcare / Dental",
    domain: "Not specified",
    duration: "Not specified",
    year: "2026",
    liveUrl: "https://primax-family-dental.vercel.app",
    overview:
      "Could not confirm project details — primax-family-dental.vercel.app is client-rendered and returned no descriptive meta content or visible body copy at fetch time. Fill in manually once you have the live copy in front of you.",
    technologies: [
      "React",
      "Responsive Design",
      "CSS Animations",
      "Contact Form",
      "Google Maps Embed",
      "SEO Optimisation",
      "Performance Optimisation",
    ],
    category: "Healthcare",
  },
  {
    slug: "umba_labs",
    route: "/projects/umba_labs",
    heroImage: umba,
    title: "Umba Labs",
    tagline:
      "Websites & Software, Shaped. A software studio building fast, modern websites and fullstack applications for teams who need to ship without cutting corners.",
    team: "Individual",
    industry: "Software / Web Development Agency",
    domain: "B2B / Agency Website",
    duration: "Not specified",
    year: "2026",
    liveUrl: "https://umba-labs.vercel.app",
    overview:
      "Umba Labs' own studio site — 10+ products shipped, positioned around speed and craft for teams who need to ship without cutting corners. Built with Next.js, includes Home, About, Services, Projects, and Blog sections plus a 'Request Quote' flow and hero video.",
    technologies: ["Next.js", "Responsive Design", "Video Hero"],
    category: "Agency",
  },

  {
    slug: "TurfsKe",
    route: "/projects/TurfsKe",
    heroImage: turfsKe,
    title: "TurfsKe",
    tagline: "TurfsKe is a sports platform that connects football fans with local football pitches.",
    team: "Individual",
    industry: "Sports",
    domain: "B2C",
    duration: "2 months",
    year: "2026",
    liveUrl: "https://turfske.vercel.app",
    overview: "TurfsKe is a platform that connects football fans with local football pitches. The platform allows users to find and book football pitches for recreational games. It also provides information about the pitches, such as the location, availability, and pricing.",
    technologies: [
      "Next.js",
      "CSS Animations",
      "Responsive Design",
      "Google Maps Embed",
      "SEO Optimisation",
      "Performance Optimisation",
    ],
    category: "Sports",
  },
];
