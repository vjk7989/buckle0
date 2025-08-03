// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Products", url: "/products" },
  { name: "Documentation", url: "/welcome-to-docs/" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "RAWs Protocol", url: "/products" },
      { name: "Staking & Yield", url: "/services" },
      { name: "Confidential Compute", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Partners", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/hyper-protocol",
  discord: "https://discord.gg/hyper",
  telegram: "https://t.me/hyperprotocol",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};