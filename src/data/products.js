import writingIcon from '../assets/products/writing.png';
import designIcon from '../assets/products/design-tool.png';
import stockIcon from '../assets/products/shopping-cart.png';
import automationIcon from '../assets/products/operation.png';
import resumeIcon from '../assets/products/portfolio.png';
import socialIcon from '../assets/products/social-media.png';

const products = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Supercharge your content creation with GPT-powered writing assistance. Generate engaging blogs, professional emails, and marketing copy instantly. Perfect for copywriters and content creators.",
    price: 29,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    icon: writingIcon,
    features: [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker"
    ],
    inCart: false
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "one-time",
    tag: "Popular",
    tagType: "popular",
    icon: designIcon,
    features: [
      "2000+ templates",
      "Monthly updates",
      "Commercial license"
    ],
    inCart: false
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "monthly",
    tag: "New",
    tagType: "new",
    icon: stockIcon,
    features: [
      "10M+ assets",
      "Commercial use",
      "No attribution"
    ],
    inCart: false
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "monthly",
    tag: "Popular",
    tagType: "popular",
    icon: automationIcon,
    features: [
      "50+ automations",
      "API access",
      "Custom workflows"
    ],
    inCart: false
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "one-time",
    tag: "New",
    tagType: "new",
    icon: resumeIcon,
    features: [
      "100+ templates",
      "ATS optimization",
      "Export to PDF"
    ],
    inCart: false
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "monthly",
    tag: "Best Seller",
    tagType: "best-seller",
    icon: socialIcon,
    features: [
      "5000+ assets",
      "Scheduler included",
      "Analytics dashboard"
    ],
    inCart: false
  }
];

export default products;