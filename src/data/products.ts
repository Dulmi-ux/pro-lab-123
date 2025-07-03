export type Product = {
  id: string;
  name: string;
  category: 'Laptop' | 'Desktop' | 'Accessory';
  price: number;
  image: string;
  description: string;
  specs: Record<string, string>;
  data_ai_hint: string;
};

export const products: Product[] = [
  {
    id: 'ultra-x1',
    name: 'UltraBook X1',
    category: 'Laptop',
    price: 1299.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'sleek laptop',
    description: 'The UltraBook X1 combines sleek design with powerful performance, making it the perfect companion for professionals on the go.',
    specs: {
      Processor: '13th Gen Intel Core i7',
      RAM: '16GB LPDDR5',
      Storage: '1TB NVMe SSD',
      Display: '14" 2.8K OLED Touchscreen',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.5 lbs',
    },
  },
  {
    id: 'gamer-pro-x',
    name: 'Gamer Pro X',
    category: 'Desktop',
    price: 2499.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'gaming computer',
    description: 'Unleash your gaming potential with the Gamer Pro X. Built with the latest components for an unparalleled gaming experience.',
    specs: {
      Processor: 'AMD Ryzen 9 7950X',
      RAM: '32GB DDR5 6000MHz',
      Storage: '2TB NVMe Gen4 SSD',
      'Graphics': 'NVIDIA GeForce RTX 4080',
      'Cooling': '360mm AIO Liquid Cooler',
      'Case': 'Mid-Tower RGB Case',
    },
  },
  {
    id: 'mech-keyboard-pro',
    name: 'Mech-Keyboard Pro',
    category: 'Accessory',
    price: 149.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'mechanical keyboard',
    description: 'Experience tactile precision with the Mech-Keyboard Pro, featuring customizable RGB lighting and hot-swappable switches.',
    specs: {
      'Switch Type': 'Tactile Brown Switches',
      'Layout': 'Tenkeyless (87 keys)',
      'Connectivity': 'USB-C, Bluetooth 5.1',
      'Backlighting': 'Per-key RGB',
      'Features': 'Programmable Macros, Aluminum Body',
    },
  },
   {
    id: 'aero-book-air',
    name: 'AeroBook Air',
    category: 'Laptop',
    price: 999.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'thin laptop',
    description: 'Light as air, powerful as a storm. The AeroBook Air is designed for ultimate portability without compromising on speed.',
    specs: {
      Processor: '13th Gen Intel Core i5',
      RAM: '16GB LPDDR5',
      Storage: '512GB NVMe SSD',
      Display: '13.3" QHD IPS Display',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.2 lbs',
    },
  },
  {
    id: 'studio-station-z',
    name: 'Studio Station Z',
    category: 'Desktop',
    price: 3999.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'powerful workstation',
    description: 'The ultimate workstation for creative professionals. Renders, edits, and compiles at breathtaking speeds.',
    specs: {
      Processor: 'Intel Core i9-13900K',
      RAM: '64GB DDR5 5600MHz',
      Storage: '4TB NVMe Gen4 RAID 0',
      'Graphics': 'NVIDIA GeForce RTX 4090',
      'Cooling': 'Custom Liquid Cooling Loop',
      'Case': 'Full-Tower Workstation Case',
    },
  },
  {
    id: 'ergomouse-wave',
    name: 'ErgoMouse Wave',
    category: 'Accessory',
    price: 89.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'ergonomic mouse',
    description: 'Work in comfort for hours with the ErgoMouse Wave, designed to fit the natural contour of your hand.',
    specs: {
      'Sensor': 'High-Precision Optical',
      'DPI': 'Up to 8000 DPI',
      'Connectivity': '2.4GHz Wireless, Bluetooth',
      'Buttons': '6 Programmable Buttons',
      'Features': 'Vertical Ergonomic Design, USB-C Charging',
    },
  },
  {
    id: '4k-pro-monitor',
    name: '4K ProArt Monitor',
    category: 'Accessory',
    price: 699.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'computer monitor',
    description: 'See every detail in stunning clarity. The 4K ProArt Monitor is factory-calibrated for exceptional color accuracy.',
     specs: {
      'Panel Size': '27-inch',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Panel Type': 'IPS with Mini-LED',
      'Color Gamut': '99% Adobe RGB, 97% DCI-P3',
      'Connectivity': 'HDMI 2.1, DisplayPort 1.4, USB-C Hub',
    },
  },
  {
    id: 'powerstation-max',
    name: 'PowerStation Max',
    category: 'Desktop',
    price: 1899.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'desktop computer',
    description: 'A reliable and powerful desktop for home and office use, capable of handling demanding applications with ease.',
     specs: {
      Processor: 'AMD Ryzen 7 7700X',
      RAM: '32GB DDR5 5200MHz',
      Storage: '1TB NVMe Gen4 SSD',
      'Graphics': 'NVIDIA GeForce RTX 3060 Ti',
      'Cooling': 'Air Tower Cooler',
      'Case': 'Sleek Mid-Tower Case',
    },
  },
  {
    id: 'titan-pro-16',
    name: 'Titan Pro 16',
    category: 'Laptop',
    price: 2199.99,
    image: 'https://placehold.co/600x400.png',
    data_ai_hint: 'powerful laptop',
    description: 'A mobile powerhouse for gaming and content creation, featuring a stunning 16-inch display and top-of-the-line graphics.',
    specs: {
      Processor: 'Intel Core i9-13980HX',
      RAM: '32GB DDR5',
      Storage: '2TB NVMe SSD',
      Display: '16" QHD+ 240Hz Mini-LED',
      'Graphics': 'NVIDIA GeForce RTX 4070 Laptop GPU',
      'Weight': '5.5 lbs',
    },
  }
];

export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category.toLowerCase() === category.toLowerCase());

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
