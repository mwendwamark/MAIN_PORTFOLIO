import kejaConnectImg from "../assets/KejaConnect.webp";
import kilimoLinkImg from "../assets/KilimoLink.webp";
import liquorChapChapImg from "../assets/LiquorChapChap.webp";
import grwcImg from "../assets/GRWC.webp";
import dentalWebsiteImg from "../assets/DentalWebsite.webp";

// Using a placeholder for Moriah since no asset exists based on the instructions
const placeholderImg = "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1000&auto=format&fit=crop";

export const projectsData = [
  {
    slug: "keja_connect",
    route: "/projects/keja_connect",
    heroImage: kejaConnectImg,
    title: "Keja Connect",
    tagline: "A student accommodation discovery platform connecting university students with verified hostels and bedsitters across Kenya.",
    team: "Individual",
    industry: "Real Estate / Student Housing",
    domain: "B2C / Web Platform",
    duration: "2 months",
    year: "2024",
    liveUrl: "https://kejaconnect.vercel.app",
    overview: "Keja Connect solves the painful and fragmented process of finding student accommodation in Kenya. Students waste days visiting unavailable units or relying on unverified WhatsApp tips. The platform gives landlords a space to list verified properties while giving students a clean, filterable interface to search by location, price, and availability.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "Cloudinary", "JWT Authentication", "Responsive Design", "REST API"],
    category: "Real Estate"
  },
  {
    slug: "kilimo_link",
    route: "/projects/kilimo_link",
    heroImage: kilimoLinkImg,
    title: "Kilimo Link",
    tagline: "A farm-to-market platform connecting Kenyan smallholder farmers directly with buyers, eliminating costly middlemen.",
    team: "Individual",
    industry: "Agriculture / AgriTech",
    domain: "B2B / B2C Marketplace",
    duration: "4 months",
    year: "2024",
    liveUrl: "https://kilimo-link.vercel.app",
    overview: "Kilimo Link addresses the deep structural inefficiency in Kenya's agricultural supply chain. Smallholder farmers receive as little as 20% of the final consumer price due to broker layers. The platform creates a direct digital marketplace where farmers list produce and buyers — from restaurants to retailers — purchase directly, with pricing transparency on both sides.",
    technologies: ["React", "Django", "Django REST Framework", "PostgreSQL", "Mpesa Daraja API", "Cloudinary", "Geolocation API", "Responsive Design", "RESTful API Design"],
    category: "Agriculture"
  },
  {
    slug: "liquor_chapchap",
    route: "/projects/liquor_chapchap",
    heroImage: liquorChapChapImg,
    title: "Liquor Chapchap",
    tagline: "A fast alcohol and drinks delivery e-commerce platform serving Nairobi, built for speed and convenience.",
    team: "Individual",
    industry: "E-Commerce / FMCG",
    domain: "B2C / E-Commerce",
    duration: "3 months",
    year: "2024",
    liveUrl: "https://liquorchapchap.vercel.app",
    overview: "Liquor Chapchap is a Nairobi-focused drinks delivery platform. The challenge was creating an e-commerce experience fast enough to match the urgency of the use case — people ordering drinks for an event happening now. The UX prioritises speed: minimal clicks from landing to checkout, with a cart that persists across sessions and a streamlined checkout that supports M-Pesa.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Context API", "LocalStorage", "Mpesa Daraja API", "Responsive Design", "CSS Animations"],
    category: "E-Commerce"
  },
  {
    slug: "grwc",
    route: "/projects/grwc",
    heroImage: grwcImg,
    title: "Gospel Revival Wave Church",
    tagline: "A modern church website with CMS integration for Gospel Revival Wave Church, Kasarani, Nairobi.",
    team: "Individual",
    industry: "Non-Profit / Religious Organisation",
    domain: "B2C / Web Design & CMS",
    duration: "2 months",
    year: "2024",
    liveUrl: "https://grwc.vercel.app",
    overview: "GRWC needed a digital home that reflected the energy of a growing contemporary church. The challenge was designing for a non-technical client who needed to update sermons, events, and announcements themselves — without a developer. The solution was a clean, welcoming website backed by a headless CMS so the church team could manage content independently.",
    technologies: ["React", "Headless CMS", "Responsive Design", "CSS Animations", "Google Maps Embed", "Contact Form Integration", "SEO Optimisation"],
    category: "Non-Profit"
  },
  {
    slug: "360_dental",
    route: "/projects/360_dental",
    heroImage: dentalWebsiteImg,
    title: "360 Dental",
    tagline: "A professional dental practice website designed to convert visitors into booked appointments.",
    team: "Individual",
    industry: "Healthcare / Dental",
    domain: "B2C / Web Design & Development",
    duration: "1 month",
    year: "2024",
    liveUrl: "https://360dental.vercel.app",
    overview: "360 Dental is a fast-turnaround website for a dental practice. The brief was conversion-focused: get visitors to book an appointment. Every design decision — from the hero layout to the services section — was made to reduce friction and build trust. The result is a clean, professional site that works on any device.",
    technologies: ["React", "CSS Animations", "Responsive Design", "Contact Form", "Google Maps Embed", "SEO Optimisation", "Performance Optimisation"],
    category: "Healthcare"
  },
  {
    slug: "moriah",
    route: "/projects/moriah",
    heroImage: placeholderImg,
    title: "Moriah Chicken Grill",
    tagline: "A premium restaurant website for a Nairobi chicken grill, built to showcase the menu and drive dine-in and takeaway orders.",
    team: "Individual",
    industry: "Food & Beverage / Hospitality",
    domain: "B2C / Web Design & Development",
    duration: "1 month",
    year: "2024",
    liveUrl: "https://moriahchickengrill.vercel.app",
    overview: "Moriah Chicken Grill needed a website that made people hungry. The design challenge was translating the warmth and quality of a physical restaurant into pixels — rich food photography, warm colours, and a menu experience that made ordering feel effortless. Built fast, looks great on mobile.",
    technologies: ["React", "Responsive Design", "CSS Animations", "Menu Display Component", "Google Maps Embed", "Performance Optimisation"],
    category: "Hospitality"
  }
];
