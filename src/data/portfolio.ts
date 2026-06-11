export const profile = {
  name: "Dipeeka Paste",
  title: "WordPress Developer | Frontend Developer | Web Designer",
  tagline:
    "Experienced Web Developer with expertise in WordPress development, custom theme customization, plugin development, frontend development, eCommerce solutions, and website optimization. Passionate about building high-performance, user-friendly websites and delivering quality solutions for clients worldwide.",
  email: "pastdeepika56@gmail.com",
  phone: "+91 8600762043",
  location: "Kolhapur, Maharashtra, India",
  links: {
    wordpress: "https://profiles.wordpress.org/dipeeka138/",
    linkedin: "https://www.linkedin.com/in/dipeeka-paste-151638227/",
    github: "https://github.com/deepa138",
  },
  bio: "I'm a passionate Web Developer specializing in WordPress, custom theme & plugin development, WooCommerce, Elementor, React, and modern frontend stacks. With hands-on experience delivering 60+ websites for clients across the US, Europe, and Asia, I focus on building fast, accessible, SEO-optimized sites that solve real business problems. I take pride in clean code, performance budgets (95+ PageSpeed), and crisp client communication.",
  education: "BE Computer Engineering, Shivaji University Kolhapur (2022)",
  languages: ["English", "Marathi", "Hindi"],
  focus: [
    "WordPress Development",
    "Custom Theme & Plugin Development",
    "eCommerce (WooCommerce, Shopify)",
    "Performance Optimization & Core Web Vitals",
    "Frontend Development (React, JS, Sass)",
    "Client Communication & Problem Solving",
  ],
};

export const skills = [
  {
    category: "Frontend Development",
    items: ["HTML5", "CSS3", "Sass", "Less", "Bootstrap 4", "JavaScript", "jQuery", "PSD to HTML"],
  },
  {
    category: "CMS & Website Builders",
    items: ["WordPress", "Elementor", "Webflow", "Wix", "Squarespace", "ClickFunnels"],
  },
  {
    category: "eCommerce",
    items: ["WooCommerce", "Shopify", "BigCommerce"],
  },
  {
    category: "Development",
    items: ["PHP", "WordPress Theme Customization", "Plugin Development", "Website Maintenance", "React"],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    category: "Performance & SEO",
    items: ["Technical SEO", "Site Optimization", "Core Web Vitals", "Google PageSpeed Optimization"],
  },
];

export const experience = [
  {
    role: "Team Leader",
    company: "Walstar Technology",
    period: "Nov 2024 – Present",
    highlights: [
      "Promoted from Junior Developer to Team Leader within 2 years based on performance and leadership.",
      "Lead and mentor a team of 5+ frontend developers — task delegation, code reviews, and enforcing best practices.",
      "Architect and deliver WordPress, WooCommerce, Webflow, Shopify, and Squarespace solutions for international clients.",
      "Achieved 95+ PageSpeed scores on multiple production sites through performance auditing and Core Web Vitals optimisation.",
      "Oversaw client communications from requirement gathering to delivery; conducted training on Git workflow, frontend frameworks, and CMS tools.",
      "Managed project timelines, prepared reports, and ensured on-time delivery within budget.",
      "Developed custom plugins, including the Walstar AI Image Alt Generator (wordpress.org)"
    ],
  },
  {
    role: "Senior WordPress & Frontend Developer",
    company: "Walstar Technology",
    period: "Apr 2023 – Nov 2024",
    highlights: [
      "Delivered 20+ client projects including Elementor-based sites, custom WooCommerce stores, landing pages, React websites, and Squarespace builds.",
      "Developed custom WooCommerce solutions (monarchflowers.nl, gestures.co.nz, climatec.com.lb) with advanced product management, dynamic collections, and checkout customisation.",
      "Built high-converting landing pages and sales funnels (ClickFunnels, HTML/CSS) for US and European clients.",
      "Integrated third-party services: Mailchimp, Constant Contact, booking tools, and performance tracking.",
      "Worked with Webflow and Wix to design and deploy CMS-driven marketing sites.",
      "Collaborated across design (Figma, XD, Photoshop) and development lifecycles: analysis, build, testing, and deployment.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Walstar Technology",
    period: "Aug 2022 – Apr 2023",
    highlights: [
      "Delivered 20+ responsive landing pages and PSD-to-HTML conversions",
      "Built responsive websites using WordPress, Bootstrap, HTML, CSS, and JavaScript from Figma/XD/PSD mockups.",
      "Contributed to WordPress theme and plugin development, landing pages, and sales funnel projects.",
      "Ensured cross-browser compatibility, performance optimisation, and seamless user experience across all deliverables.",
      "Collaborated with designers, backend developers, and clients to translate requirements into scalable solutions.",
    ],
  },
];

export type Project = {
  title: string;
  url: string;
  category: string;
  description: string;
  tech: string[];
  featured?: boolean;
};

const host = (u: string) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return u;
  }
};

export const shot = (url: string, w = 1000) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}`;

export const projects: Project[] = [
  // WordPress / Elementor
  {
    title: "My Restaurant",
    url: "https://my-restaurant.rf.gd/",
    category: "WordPress / Elementor",
    description: "Full-featured restaurant website with menu showcase, operating hours, reservation flow, and brand storytelling built on WordPress.",
    tech: ["WordPress", "Elementor", "PHP", "CSS3"],
    featured: true,
  },
  {
    title: "Mortgage Loans",
    url: "https://mortgage-loans.byethost22.com/wp/",
    category: "WordPress / Elementor",
    description: "Mortgage lending portal with home-buying and refinancing programs, rate calculators, and streamlined application workflows.",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript"],
  },
  {
    title: "Play Sprout Academy",
    url: "https://playsproutacadem.byethost31.com/wp/",
    category: "WordPress / Elementor",
    description: "Childcare and early-learning academy site with playful design, program details, and parent registration flow.",
    tech: ["WordPress", "Elementor", "PHP", "Responsive Design"],
    featured: true,
  },

  // WooCommerce
  {
    title: "Monarch Flowers",
    url: "https://monarchflowers.nl/",
    category: "WooCommerce",
    description: "Floral eCommerce storefront with WooCommerce, custom product flows, and Dutch payment gateways.",
    tech: ["WordPress", "WooCommerce", "PHP"],
    featured: true,
  },
  {
    title: "Gestures",
    url: "https://gestures.co.nz/",
    category: "WooCommerce",
    description: "WooCommerce gift store with custom catalog filtering and checkout optimization.",
    tech: ["WordPress", "WooCommerce", "jQuery"],
  },

  // Custom WooCommerce
  {
    title: "Climatec",
    url: "https://climatec.com.lb/",
    category: "Custom WooCommerce",
    description: "Custom-built WooCommerce platform with bespoke product configurators and B2B flows.",
    tech: ["WordPress", "WooCommerce", "PHP", "Custom Plugin"],
    featured: true,
  },

  // React
  {
    title: "Gorge Cleaners",
    url: "https://www.gorgecleaners.com/",
    category: "React",
    description: "React-based marketing site with smooth animations and serverless booking flow.",
    tech: ["React", "JavaScript", "CSS3"],
  },
  {
    title: "On The Go GC",
    url: "https://www.onthegogc.com/",
    category: "React",
    description: "Modern React single-page site for a mobile service business.",
    tech: ["React", "JavaScript", "Responsive"],
  },

  // Squarespace
  {
    title: "K-M Interiors",
    url: "https://www.k-m-interiors.com/",
    category: "Squarespace",
    description: "Squarespace interior-design portfolio with custom CSS and editorial layout.",
    tech: ["Squarespace", "CSS3"],
  },

  // Shopify
  {
    title: "Avojoy",
    url: "https://avojoy.org/",
    category: "Shopify",
    description: "Shopify storefront with custom Liquid theme tweaks and conversion-focused PDP.",
    tech: ["Shopify", "Liquid", "CSS3"],
  },

  // Landing pages
  {
    title: "L'Authentic France — Lagrasse Wine Tour",
    url: "https://www.lauthenticfrance.com/lagrasse-wine-tasting-tour/",
    category: "Landing Page",
    description: "Conversion-focused tour landing page with high-impact visuals and booking CTA.",
    tech: ["WordPress", "Elementor", "CRO"],
  },
  {
    title: "L'Authentic France — Dalí Museum",
    url: "https://www.lauthenticfrance.com/lp-dali-museum/",
    category: "Landing Page",
    description: "Editorial landing page for a Dalí museum experience with rich media storytelling.",
    tech: ["WordPress", "Elementor"],
  },
];

export const performanceWins = [
  {
    url: "https://xchangeauto.com/",
    title: "Xchange Auto",
    score: 96,
    summary: "Lifted PageSpeed to 96 and CLS to <0.05 via image pipeline, font subsetting, and critical CSS.",
  },
  {
    url: "https://exportusautos.com/",
    title: "Export US Autos",
    score: 97,
    summary: "Audit + optimization pass — 97 mobile PageSpeed and green Core Web Vitals.",
  },
  {
    url: "https://nationalfleetadvisor.com/",
    title: "National Fleet Advisor",
    score: 95,
    summary: "Reduced LCP by 58% with deferred third-party scripts and lazy-loaded hero media.",
  },
  {
    url: "https://reggiebuyscars.com/",
    title: "Reggie Buys Cars",
    score: 98,
    summary: "WordPress hardening + WebP + caching — 98 desktop, 95 mobile PageSpeed.",
  },
  {
    url: "https://simplyalwaysawake.com/",
    title: "Simply Always Awake",
    score: 95,
    summary: "Theme refactor and render-blocking elimination — 95+ PageSpeed across templates.",
  },
];

export { host };

export const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "+", label: "Avg PageSpeed Score" },
  { value: 5, suffix: "+", label: "Team Members Led" },
];
