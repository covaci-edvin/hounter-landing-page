export const properties = [
  { name: "House", icon: "house" },
  { name: "Villa", icon: "villa" },
  { name: "Apartment", icon: "apartment" },
];

export const accomplishments = [
  {
    imgs: ["avatar-5.webp", "avatar-4.webp", "avatar-6.webp"],
    heading: "1K+ People",
    subheading: "Successfully Getting Home",
  },
  {
    imgs: ["article-4-sm.webp"],
    heading: "56 Houses",
    subheading: "Sold Monthly",
  },
  {
    imgs: ["avatar-7.webp"],
    heading: "4K+",
    subheading: "People Looking for New Homes",
  },
];

export const recommendations = [
  {
    title: "Roselands House",
    price: "35.000.000",
    img: "featured-house-1.webp",
    label: "danger",
    type: "villa",
    user: {
      name: "Dianne Russell",
      photo: "avatar-1.webp",
      subheading: "Manchester, Kentucky",
    },
  },
  {
    title: "Woodlandside",
    price: "20.000.000",
    img: "featured-house-2.webp",
    label: "info",
    type: "house",
    user: {
      name: "Robert Fox",
      photo: "avatar-2.webp",
      subheading: "Dr. San Jose, South Dakota",
    },
  },
  {
    title: "The Old Lighthouse",
    price: "44.000.000",
    img: "featured-house-3.webp",
    label: "success",
    type: "apartment",
    user: {
      name: "Ronald Richards",
      photo: "avatar-3.webp",
      subheading: "Santa Ana, Illinois",
    },
  },
  {
    title: "Cosmo's House",
    price: "22.000.000",
    img: "featured-house-4.webp",
    label: "danger",
    type: "house",
    user: {
      name: "Jenny Wilson",
      photo: "avatar-4.webp",
      subheading: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

export const labels = {
  danger: {
    type: "danger",
    iconId: "fire",
    message: "Popular",
  },
  info: {
    type: "info",
    iconId: "house",
    message: "New house",
  },
  success: {
    type: "success",
    iconId: "wallet",
    message: "Best deals",
  },
};
