export interface CurrencyOption {
  code: string;
  symbol: string;
  country: string;
  rateFromBhd: number;
  decimals: number;
}

export interface MegaMenuSubLink {
  id: string;
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  id: string;
  label: string;
  href: string;
  groups?: MegaMenuSubLink[];
}

export interface CategoryItem {
  category_id: number;
  name: string;
  seo_url: string;
  product_count: number;
  image: string;
}

export interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: number;
  priceFormatted: string;
  specialPrice: number;
  specialFormatted: string;
  weight: string;
  quantity: number;
  categoryLabel: string;
  href: string;
}

export interface CtaCardItem {
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface WhyItem {
  icon: string;
  title: string;
  description: string;
}

export const SITE_BASE_URL = 'https://3kgapp.fabric.digital';

export const STORE_INFO = {
  brandName: 'Better Foods Trading | 3kg app',
  shortBrand: '3KG Fresh Market',
  logo: 'https://fabricmedia-ecommerce.s3.eu-central-2.wasabisys.com/tenants/saas_3kg_app/catalog/3kg_logo_small.jpg',
  favicon:
    'https://fabricmedia-ecommerce.s3.eu-central-2.wasabisys.com/tenants/saas_3kg_app/catalog/Picture%201.png',
  footerDescription:
    '3Kg Fresh Market is a premium fruits and vegetables online website and application specialising in supplying fresh and quality fruits and vegetables, and all your daily fresh essentials to the comfort of your doorstep.',
  contactPhone: '97317421224',
  displayPhone: '+973 1742 1224',
  contactEmail: 'hello@3kgapp.com',
  storeLocation: 'Bahrain',
  licenseNumber: '97697-1',
  taxRegistrationNumber: '220012546600002',
  appIosUrl: 'https://apps.apple.com/bh/app/3kg-fresh-market/id1497564827',
  appAndroidUrl: 'https://play.google.com/store/apps/details?id=com.bh.kg&hl=en',
  whatsappHref: 'https://wa.me/97317421224',
  poweredBy: {
    name: 'Fabric',
    url: 'https://fabricit.com/',
  },
};

export const CURRENCIES: CurrencyOption[] = [
  { code: 'BHD', symbol: 'BD', country: 'bh', rateFromBhd: 1, decimals: 3 },
  { code: 'EUR', symbol: '€', country: 'eu', rateFromBhd: 2.45, decimals: 2 },
  { code: 'KWD', symbol: 'KD', country: 'kw', rateFromBhd: 0.81, decimals: 3 },
  { code: 'OMR', symbol: 'RO', country: 'om', rateFromBhd: 1.02, decimals: 3 },
  { code: 'QAR', symbol: 'QR', country: 'qa', rateFromBhd: 9.66, decimals: 2 },
  { code: 'SAR', symbol: 'SAR', country: 'sa', rateFromBhd: 9.95, decimals: 2 },
  { code: 'AED', symbol: 'AED', country: 'ae', rateFromBhd: 9.74, decimals: 2 },
  { code: 'USD', symbol: '$', country: 'us', rateFromBhd: 2.65, decimals: 2 },
];

export const TOP_NAV_LINKS = [
  { href: `${SITE_BASE_URL}/`, label: 'Home' },
  { href: `${SITE_BASE_URL}/categories`, label: 'Categories' },
  { href: `${SITE_BASE_URL}/brands`, label: 'Brands' },
  { href: `${SITE_BASE_URL}/about-us`, label: 'About Us' },
  { href: `${SITE_BASE_URL}/help-and-support`, label: 'Help & Support' },
  { href: `${SITE_BASE_URL}/reviews`, label: 'Reviews' },
];

export const MEGA_MENU_CATEGORIES: MegaMenuCategory[] = [
  {
    id: '863',
    label: 'Vegetables',
    href: `${SITE_BASE_URL}/shop/vegetables`,
    groups: [
      { id: '864', label: 'All Vegetables', href: `${SITE_BASE_URL}/shop/139` },
      { id: '865', label: 'Bulk Vegetables', href: `${SITE_BASE_URL}/shop/124` },
      { id: '866', label: 'Cut & Ready', href: `${SITE_BASE_URL}/shop/118` },
      { id: '867', label: 'Imperfect', href: `${SITE_BASE_URL}/shop/119` },
      { id: '868', label: 'Local', href: `${SITE_BASE_URL}/shop/116` },
      { id: '869', label: 'Roots', href: `${SITE_BASE_URL}/shop/151` },
    ],
  },
  {
    id: '870',
    label: 'Exotic Fruits',
    href: `${SITE_BASE_URL}/shop/exotic-fruits`,
  },
  {
    id: '871',
    label: 'Leaves',
    href: `${SITE_BASE_URL}/shop/greens`,
    groups: [
      { id: '872', label: 'All Leaves', href: `${SITE_BASE_URL}/shop/143` },
      { id: '873', label: 'Chopped', href: `${SITE_BASE_URL}/shop/144` },
      { id: '874', label: 'Lettuce', href: `${SITE_BASE_URL}/shop/145` },
      { id: '875', label: 'Local', href: `${SITE_BASE_URL}/shop/141` },
      { id: '876', label: 'Imported', href: `${SITE_BASE_URL}/shop/142` },
    ],
  },
  {
    id: '877',
    label: 'Bulk Buy',
    href: `${SITE_BASE_URL}/shop/bulk-savings`,
    groups: [
      { id: '878', label: 'All Bulk', href: `${SITE_BASE_URL}/shop/162` },
      { id: '879', label: 'Fruits', href: `${SITE_BASE_URL}/shop/105` },
      { id: '880', label: 'Grocery', href: `${SITE_BASE_URL}/shop/107` },
      { id: '881', label: 'Vegetables', href: `${SITE_BASE_URL}/shop/106` },
    ],
  },
  {
    id: '882',
    label: 'Boxes',
    href: `${SITE_BASE_URL}/shop/boxes`,
  },
  {
    id: '883',
    label: 'Eggs & Dairy',
    href: `${SITE_BASE_URL}/shop/eggs-and-dairy`,
    groups: [
      { id: '884', label: 'All Dairy', href: `${SITE_BASE_URL}/shop/134` },
      { id: '885', label: 'Eggs', href: `${SITE_BASE_URL}/shop/94` },
      { id: '886', label: 'Cheese', href: `${SITE_BASE_URL}/shop/95` },
      { id: '887', label: 'Milk', href: `${SITE_BASE_URL}/shop/96` },
      { id: '888', label: 'Milk Alternatives', href: `${SITE_BASE_URL}/shop/102` },
      { id: '889', label: 'Yoghurt & Spread', href: `${SITE_BASE_URL}/shop/97` },
      { id: '890', label: 'Butter & Ghee', href: `${SITE_BASE_URL}/shop/133` },
      { id: '891', label: 'Laban & Cream', href: `${SITE_BASE_URL}/shop/128` },
    ],
  },
  {
    id: '892',
    label: 'Fresh Chicken',
    href: `${SITE_BASE_URL}/shop/fresh-poultry`,
  },
  {
    id: '893',
    label: 'Dates & Nuts',
    href: `${SITE_BASE_URL}/shop/dried-fruits`,
    groups: [
      { id: '894', label: 'All Dates', href: `${SITE_BASE_URL}/shop/138` },
      { id: '895', label: 'Dates', href: `${SITE_BASE_URL}/shop/135` },
      { id: '896', label: 'Dried Fruits', href: `${SITE_BASE_URL}/shop/137` },
      { id: '897', label: 'Nuts', href: `${SITE_BASE_URL}/shop/136` },
    ],
  },
  {
    id: '898',
    label: 'Water',
    href: `${SITE_BASE_URL}/shop/water`,
    groups: [
      { id: '899', label: 'All Water', href: `${SITE_BASE_URL}/shop/131` },
      { id: '900', label: 'Flavored Water', href: `${SITE_BASE_URL}/shop/101` },
      { id: '901', label: 'Mineral Water', href: `${SITE_BASE_URL}/shop/99` },
      { id: '902', label: 'Sparkling Water', href: `${SITE_BASE_URL}/shop/100` },
    ],
  },
];

// Section 0: Hero Slider (slider-43-0)
export const HERO_BANNERS = [
  {
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh_Offer_Banner-3456x1728-3456x1728-3456x1728.jpg',
    alt: '3KG Fresh Offers Banner',
    link: `${SITE_BASE_URL}/shop`,
  },
];

// Section 1: Shop by Category (featuredcategory-41-1)
export const SHOP_BY_CATEGORIES: CategoryItem[] = [
  {
    category_id: 59,
    name: 'Fruits',
    seo_url: 'fruits',
    product_count: 100,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/5-335x425.png',
  },
  {
    category_id: 60,
    name: 'Exotic Fruits',
    seo_url: 'exotic-fruits',
    product_count: 35,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Pieapple Category-335x425.png',
  },
  {
    category_id: 61,
    name: 'Vegetables',
    seo_url: 'vegetables',
    product_count: 164,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Carrot CAT-335x425.jpg',
  },
  {
    category_id: 63,
    name: 'Leaves',
    seo_url: 'greens',
    product_count: 64,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Kale CAT-335x425.jpg',
  },
  {
    category_id: 64,
    name: 'Boxes',
    seo_url: 'boxes',
    product_count: 12,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Box123-335x425.png',
  },
  {
    category_id: 65,
    name: '3KG Offers',
    seo_url: '3kg-offers',
    product_count: 46,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg_logo_small-335x425.jpg',
  },
  {
    category_id: 72,
    name: 'Bulk Buy',
    seo_url: 'bulk-savings',
    product_count: 41,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Bulk CAT-335x425.jpg',
  },
  {
    category_id: 73,
    name: 'Local',
    seo_url: 'go-local',
    product_count: 39,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/FM CAT-335x425.jpg',
  },
  {
    category_id: 74,
    name: 'Eggs & Dairy',
    seo_url: 'eggs-and-dairy',
    product_count: 67,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Dairy CAT 1-335x425.jpg',
  },
  {
    category_id: 75,
    name: 'Water',
    seo_url: 'water',
    product_count: 27,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Water CAT-335x425.jpg',
  },
  {
    category_id: 76,
    name: 'Dates & Nuts',
    seo_url: 'dried-fruits',
    product_count: 31,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Premium Dates-335x425.png',
  },
  {
    category_id: 77,
    name: 'Fresh Chicken',
    seo_url: 'fresh-poultry',
    product_count: 6,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Poultry CAT-335x425.jpg',
  },
  {
    category_id: 82,
    name: 'Fresh Juices',
    seo_url: '',
    product_count: 28,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Juice-335x425.jpg',
  },
  {
    category_id: 84,
    name: 'Snacks',
    seo_url: '',
    product_count: 35,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Snacks-335x425.jpg',
  },
  {
    category_id: 86,
    name: 'Grocery',
    seo_url: '',
    product_count: 95,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg_logo_small-335x425.jpg',
  },
  {
    category_id: 87,
    name: 'Easy',
    seo_url: '',
    product_count: 65,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg_logo_small-335x425.jpg',
  },
  {
    category_id: 152,
    name: 'Coming Soon',
    seo_url: '',
    product_count: 0,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Coming Soon-335x425.png',
  },
  {
    category_id: 153,
    name: 'Kitchenware',
    seo_url: '',
    product_count: 16,
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/categoryhome/Kitchenware 3-335x425.jpg',
  },
];

function makeProduct(
  id: number,
  name: string,
  price: number,
  priceFormatted: string,
  specialFormatted: string,
  weight: string,
  image: string,
  categoryLabel: string
): ProductItem {
  const spNum = parseFloat(specialFormatted.replace(/[^\d.]/g, '')) || 0;
  return {
    id,
    name,
    image,
    price,
    priceFormatted,
    specialPrice: spNum,
    specialFormatted,
    weight,
    quantity: 50,
    categoryLabel,
    href: `${SITE_BASE_URL}/product/${id}`,
  };
}

// Section 2: Fruits (products-65-2)
export const FRUITS_PRODUCTS: ProductItem[] = [
  makeProduct(50, 'Apple Gala | تفاح جالا', 1.35, 'BD 1.350', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Apple Gala w Flag-1200x1213.png', 'Fruits'),
  makeProduct(65, 'Apple Red | تفاح أحمر', 1.2, 'BD 1.200', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Apple Red wflag-1200x1213.png', 'Fruits'),
  makeProduct(73, 'Apple Granny | تفاح اخضر', 1.3, 'BD 1.300', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Apple Green w Flag-1200x1213.png', 'Fruits'),
  makeProduct(78, 'Orange Valencia | برتقال فالنسيا', 0.7, 'BD 0.700', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Orange Valencia Flag-1200x1213.png', 'Fruits'),
  makeProduct(79, 'Orange Navel | أبو صرة', 0.8, 'BD 0.800', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Orange Navel-1200x1213.png', 'Fruits'),
  makeProduct(92, 'Avocado Kenya * | Unripe', 1.32, 'BD 1.320', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Avocado Kenya Flag-1200x1213.png', 'Fruits'),
  makeProduct(93, 'Avocado Hass * | Unripe', 2.42, 'BD 2.420', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Avocado Hass w Flag-1200x1213.png', 'Fruits'),
  makeProduct(96, 'Banana Philippines * | موز فلبيني', 0.935, 'BD 0.935', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Banana Filipine Flag-1200x1213.png', 'Fruits'),
  makeProduct(124, 'Kiwi | كيوي', 1.2, 'BD 1.200', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Exotic Fruits/Kiwi w flag-1200x1213.png', 'Fruits'),
  makeProduct(160, 'Cherry Argentina | كرز ارجنتيني', 2.3, 'BD 2.300', 'BD 0.000', '250.00g', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Exotic Fruits/Cherry Argentina-1200x1213.jpg', 'Fruits'),
  makeProduct(167, 'Mandarin | سنطرة', 0.8, 'BD 0.800', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Mandarin Free-1200x1213.jpg', 'Fruits'),
  makeProduct(361, 'Blueberry * | 125 gm', 0.99, 'BD 0.990', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Blueberry Free-1200x1213.png', 'Fruits'),
  makeProduct(545, 'Apple Mix | 6 pcs', 1.4, 'BD 1.400', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Apple Mix 3 Colors-1200x1213.png', 'Fruits'),
  makeProduct(546, 'Apple Mix | 3 pcs', 0.7, 'BD 0.700', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Apple Mix 3pcs-1200x1213.png', 'Fruits'),
  makeProduct(597, 'Strawberry * | 250 gm', 0.77, 'BD 0.770', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fruits/Strawberry-1200x1213.png', 'Fruits'),
  makeProduct(650, 'Apple Green | Imperfect', 0.475, 'BD 0.475', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Imperfect/Apple Green Imperfect-1200x1213.png', 'Fruits'),
  makeProduct(654, 'Apple Red | Imperfect', 0.4, 'BD 0.400', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Imperfect/Apple Red  Imperfect-1200x1213.png', 'Fruits'),
  makeProduct(744, 'Carrot Juice * | 500 ml', 1.089, 'BD 1.089', 'BD 0.000', '1.00pcs', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Juice/Carrot Juice 500ml-1200x1213.jpg', 'Fruits'),
  makeProduct(892, 'Beetroot Orange + Carrot Juice', 2.189, 'BD 2.189', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Beetroot + Carrot-1200x1213.jpg', 'Fruits'),
  makeProduct(958, 'Banana Green India * | موز اخضر هندي', 1.21, 'BD 1.210', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Banana Green India Cooking-1200x1213.jpg', 'Fruits'),
];

// Section 3: Vegetables (products-66-3)
export const VEGETABLES_PRODUCTS: ProductItem[] = [
  makeProduct(130, 'Lemon | ليمون', 0.45, 'BD 0.450', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Lemon w Flag-1200x1213.png', 'Vegetables'),
  makeProduct(187, 'Baby Marrow | كوسا صغير', 0.7, 'BD 0.700', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Baby Marrow wflag-1200x1213.png', 'Vegetables'),
  makeProduct(194, 'Carrot Australia | جزر استرالي', 0.5, 'BD 0.500', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Carrot Australia Flag-1200x1213.png', 'Vegetables'),
  makeProduct(196, 'Baby Carrot | 340 gm', 0.95, 'BD 0.950', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Carrot Baby bl Flag-1200x1213.png', 'Vegetables'),
  makeProduct(217, 'Cucumber | خيار', 0.45, 'BD 0.450', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Cucumber Jo KSA-1200x1213.png', 'Vegetables'),
  makeProduct(238, 'Beetroot * | شمندر أحمر', 0.605, 'BD 0.605', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Beetroot KSA-1200x1213.png', 'Vegetables'),
  makeProduct(241, 'Cabbage Red | ~ 0.7 - 0.9 kg', 0.7, 'BD 0.700', 'BD 0.000', '1.00pcs', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Cabbage Red KSA-1200x1213.png', 'Vegetables'),
  makeProduct(242, 'Cabbage White | ملفوف', 0.6, 'BD 0.600', 'BD 0.000', '1.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Cabbage White Jo-1200x1213.png', 'Vegetables'),
  makeProduct(330, 'Butternut | 0.600 -1 kg', 0.85, 'BD 0.850', 'BD 0.000', '1.00pcs', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Pumpkin Butternut-1200x1213.png', 'Vegetables'),
  makeProduct(338, 'Bitter Gourd * | قرع مر', 0.715, 'BD 0.715', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Bitter Gourd Flag-1200x1213.png', 'Vegetables'),
  makeProduct(374, 'Asparagus Baby * | 100 gm', 1.265, 'BD 1.265', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Asparagus Baby Thai-1200x1213.png', 'Vegetables'),
  makeProduct(377, 'Baby Corn * | 100 gm', 1.045, 'BD 1.045', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Vegetables/Baby Corn Thai-1200x1213.png', 'Vegetables'),
  makeProduct(401, 'Banana Leaves * | أوراق الموز', 0.275, 'BD 0.275', 'BD 0.000', '1.00pcs', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Greens/Banana Leaves Thai-1200x1213.png', 'Vegetables'),
  makeProduct(428, 'Bean Sprouts | براعم الفاصوليا', 0.69, 'BD 0.690', 'BD 0.000', '250.00g', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Greens/Beansprouts-1200x1213.png', 'Vegetables'),
  makeProduct(594, 'Brussels Sprouts * | Holland', 1.87, 'BD 1.870', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Greens/Brrussels Sprouts-1200x1213.png', 'Vegetables'),
  makeProduct(667, 'Broccoli Florets * | 200 gm', 1.21, 'BD 1.210', 'BD 0.000', '1.00tray', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Easy/Broccoli Easy-1200x1213.jpg', 'Vegetables'),
  makeProduct(863, 'Baby Marrow Cored | كوسا محفورة', 0.8, 'BD 0.800', 'BD 0.000', '0.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Easy/Baby Marrow Easy-1200x1213.jpg', 'Vegetables'),
  makeProduct(1072, 'Cabbage Red Shredded | 250 gm', 0.95, 'BD 0.950', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Easy/Cabbage Red SH-1200x1213.jpg', 'Vegetables'),
  makeProduct(1107, 'Cabbage White Shredded | 250 gm', 0.6, 'BD 0.600', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Easy/Cabbage Shredded-1200x1213.jpg', 'Vegetables'),
  makeProduct(1141, 'Beetroot Cubes * | 250 gm', 0.55, 'BD 0.550', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Easy/Beetroot Cubes-1200x1213.jpg', 'Vegetables'),
];

// Section 4: 4-Column CTA Cards Grid (home_cta_cards_grid-70-4)
export const CTA_CARDS_GRID: CtaCardItem[] = [
  {
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/categoryhome/5.png',
    title: 'Fresh Fruits',
    description: 'Hand-picked fruits, delivered fresh to your door',
    link: `${SITE_BASE_URL}/shop/fruits`,
  },
  {
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/categoryhome/Carrot CAT.jpg',
    title: 'Farm Vegetables',
    description: 'Fresh vegetables for your family, every day',
    link: `${SITE_BASE_URL}/shop/vegetables`,
  },
  {
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/categoryhome/Dairy CAT 1.jpg',
    title: 'Eggs & Dairy',
    description: 'Milk, cheese, eggs and more',
    link: `${SITE_BASE_URL}/shop/eggs-and-dairy`,
  },
  {
    image:
      'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/categoryhome/Kale CAT.jpg',
    title: 'Leafy Greens',
    description: 'Crisp local and imported greens',
    link: `${SITE_BASE_URL}/shop/greens`,
  },
];

// Section 5: Bulk savings (products-67-5)
export const BULK_SAVINGS_PRODUCTS: ProductItem[] = [
  makeProduct(339, 'Banana Box * | 13kg', 9.9, 'BD 9.900', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Banana Box1-1200x1213.png', 'Bulk savings'),
  makeProduct(340, 'Orange Valencia Box | 13kg', 8.5, 'BD 8.500', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Orange Valencia Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(347, 'Apple Green Box | 18kg', 15.6, 'BD 15.600', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Green Apple Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(348, 'Carrot Box | 10kg', 4.5, 'BD 4.500', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Carrot Bulk-1200x1213.jpg', 'Bulk savings'),
  makeProduct(349, 'Lemon Box | 15kg', 10.2, 'BD 10.200', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Lemon Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(350, 'Onion Red Bag | 18kg', 9.75, 'BD 9.750', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Onion Bag-1200x1213.png', 'Bulk savings'),
  makeProduct(351, 'Onion White Bag | 10kg', 6.5, 'BD 6.500', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/White Onion Bag-1200x1213.png', 'Bulk savings'),
  makeProduct(353, 'Apple Gala Box | 18kg', 13.95, 'BD 13.950', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Apple Gala Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(380, 'Masafi Water | 330ml x 24', 1.9, 'BD 1.900', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Water/Masafi 330x24 flag-1200x1213.png', 'Bulk savings'),
  makeProduct(392, 'Garlic Bag | 2.5 - 3kg', 3.95, 'BD 3.950', 'BD 0.000', '3.50kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Garlic Bag China-1200x1213.png', 'Bulk savings'),
  makeProduct(423, 'Eggs White Box | 12 Trays', 18.75, 'BD 18.750', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Eggs/Egg White Bulk-1200x1213.jpg', 'Bulk savings'),
  makeProduct(626, 'Masafi Water | 1.5ltr x 6', 1.4, 'BD 1.400', 'BD 0.000', '1.00pkt', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Water/Masafi 1.5ltrx6-1200x1213.png', 'Bulk savings'),
  makeProduct(788, 'Tomato Box | 6-7kg', 5.5, 'BD 5.500', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Tomato Box 7kg-1200x1213.jpg', 'Bulk savings'),
  makeProduct(789, 'Cucumber Box | ~7kg', 4.95, 'BD 4.950', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Cucumber Box 5kg-1200x1213.jpg', 'Bulk savings'),
  makeProduct(791, 'Eggplant Box | ~4kg', 3.1, 'BD 3.100', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Eggplant Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(792, 'Mushroom White Box * | 8Pkt', 7.15, 'BD 7.150', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Mushroom Box Holland-1200x1213.jpg', 'Bulk savings'),
  makeProduct(793, 'Cauliflower Box * | 5.5-6kg', 4.895, 'BD 4.895', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Cauliflower Box-1200x1213.jpg', 'Bulk savings'),
  makeProduct(794, 'Potato Bag | ~ 10 kg', 5.25, 'BD 5.250', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Potato Bag-1200x1213.jpg', 'Bulk savings'),
  makeProduct(828, 'Ginger Box * | ~ 3 -3.5kg', 5.39, 'BD 5.390', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Ginger Box 4kg-1200x1213.jpg', 'Bulk savings'),
  makeProduct(897, 'Orange Navel Box | 13kg', 9.2, 'BD 9.200', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Bulk Boxes/Navel Bulk-1200x1213.jpg', 'Bulk savings'),
];

// Section 6: Boxes (products-68-6)
export const BOXES_PRODUCTS: ProductItem[] = [
  makeProduct(287, 'Family Fruit Box | 60 pcs', 12.9, 'BD 12.900', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Family Fruit Box1-1200x1213.png', 'Boxes'),
  makeProduct(289, 'Family Veg Box | 65 pcs', 10.9, 'BD 10.900', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Family Veg Box1-1200x1213.png', 'Boxes'),
  makeProduct(358, 'Immunity Box | 40 pcs', 5.9, 'BD 5.900', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Immunity Box new-1200x1213.png', 'Boxes'),
  makeProduct(386, 'Saver Fruit Box | 27 pcs', 5.5, 'BD 5.500', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Eco Fruit Box-1200x1213.png', 'Boxes'),
  makeProduct(387, 'Saver Veg Box | 30 pcs', 5.0, 'BD 5.000', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Eco Veg Box-1200x1213.png', 'Boxes'),
  makeProduct(633, 'Saver Salad Box | 16 pcs', 5.0, 'BD 5.000', 'BD 0.000', '1.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Saver Salad Box-1200x1213.png', 'Boxes'),
  makeProduct(644, 'Saver Bundle | 3 Boxes', 15.0, 'BD 15.000', 'BD 0.000', '3.00Box', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Product Pics-1200x1213.png', 'Boxes'),
  makeProduct(1171, 'Daily Fruit Platter | صحن الفواكه اليومية', 7.5, 'BD 7.500', 'BD 0.000', '1.00tray', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Fresh Boxes/Daily Fruit Basket-1200x1213.jpg', 'Boxes'),
  makeProduct(1232, 'Dried Fruits Platter * | 1.1kg', 7.975, 'BD 7.975', 'BD 0.000', '1.00tray', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Premium Dates/Dried Fruits Platter 1kg-1200x1213.jpg', 'Boxes'),
  makeProduct(1233, 'Dried Fruits Platter * | 800 gm', 5.39, 'BD 5.390', 'BD 0.000', '1.00tray', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Premium Dates/Dried Fruits Platter 800gm-1200x1213.jpg', 'Boxes'),
  makeProduct(1236, 'Dates Mix Platter | 1.1kg', 6.5, 'BD 6.500', 'BD 0.000', '1.00tray', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Premium Dates/Dates Mix Platter-1200x1213.jpg', 'Boxes'),
];

// Section 7: 3kg Savings (products-69-7)
export const THREE_KG_SAVINGS_PRODUCTS: ProductItem[] = [
  makeProduct(299, 'Lemon | 3kg', 2.7, 'BD 2.700', 'BD 2.400', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Lemon3kg-1200x1213.png', '3kg Savings'),
  makeProduct(300, 'Potato | 3kg', 1.5, 'BD 1.500', 'BD 1.350', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Potato3kg-1200x1213.png', '3kg Savings'),
  makeProduct(302, 'Baby Marrow | 3kg', 4.8, 'BD 4.800', 'BD 4.500', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/BabyMarrow3kg-1200x1213.png', '3kg Savings'),
  makeProduct(303, 'Cucumber | 3kg', 2.7, 'BD 2.700', 'BD 2.400', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Cucumber3kg-1200x1213.png', '3kg Savings'),
  makeProduct(306, 'Eggplant | 3kg', 2.4, 'BD 2.400', 'BD 2.200', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Eggplant3kg-1200x1213.png', '3kg Savings'),
  makeProduct(308, 'Banana Philippines * | 3kg', 2.805, 'BD 2.805', 'BD 2.530', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Banana3kg-1200x1213.png', '3kg Savings'),
  makeProduct(395, 'Capsicum Green | 3kg', 2.95, 'BD 2.950', 'BD 2.700', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Capsi3kg-1200x1213.png', '3kg Savings'),
  makeProduct(478, 'Apple Gala | 3kg', 2.7, 'BD 2.700', 'BD 2.400', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Applegala3kgwm-1200x1213.png', '3kg Savings'),
  makeProduct(479, 'Lime Green | 3kg', 3.0, 'BD 3.000', 'BD 2.700', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Limegreen3kgwm-1200x1213.png', '3kg Savings'),
  makeProduct(580, 'Apple Granny | 3kg', 3.3, 'BD 3.300', 'BD 2.900', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Apple Granny 3kg-1200x1213.png', '3kg Savings'),
  makeProduct(806, 'Capsicum Red | 3kg', 5.7, 'BD 5.700', 'BD 5.100', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/RedCapsicum 3kg-1200x1213.jpg', '3kg Savings'),
  makeProduct(818, 'Capsicum Yellow | 3kg', 5.7, 'BD 5.700', 'BD 5.100', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Capsicum Yellow 3kg-1200x1213.jpg', '3kg Savings'),
  makeProduct(819, 'Beetroot * | 3kg', 1.98, 'BD 1.980', 'BD 1.705', '3.00kg', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Beetroot 3kg-1200x1213.jpg', '3kg Savings'),
  makeProduct(900, 'Lettuce Romaine | 3 pcs', 1.65, 'BD 1.650', 'BD 1.400', '3.00pcs', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/3kg Offers/Lettuce 3pcs-1200x1213.jpg', '3kg Savings'),
  makeProduct(1050, 'Alalali Skipjack Tuna in Sunflower * | 170g x 3', 2.475, 'BD 2.475', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Oil Seasonings/617950373247-1200x1213.jpeg', '3kg Savings'),
  makeProduct(1194, 'Afia Pure Corn Oil * | 1.5 Ltr x 3', 7.92, 'BD 7.920', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Afia Corn 3x-1200x1213.jpg', '3kg Savings'),
  makeProduct(1195, 'Afia Sunflower Oil * | 1.5 Ltr x 3', 6.71, 'BD 6.710', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Afia Sunflower x3-1200x1213.jpg', '3kg Savings'),
  makeProduct(1196, 'CRISPY Kettle Chips Sea Salt * | 150g x3', 2.64, 'BD 2.640', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Crispy Sealt x3-1200x1213.jpg', '3kg Savings'),
  makeProduct(1197, 'CRISPY Kettle Chips Paprika * | 150g x 3', 2.64, 'BD 2.640', 'BD 2.090', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Crispy Paproka x3-1200x1213.jpg', '3kg Savings'),
  makeProduct(1198, 'CRISPY Kettle Chips Sour Cream * | 150g x 3', 2.64, 'BD 2.640', 'BD 0.000', '1.00bndl', 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/cache/catalog/Promotion/Crispy Sourcream x3-1200x1213.jpg', '3kg Savings'),
];

// Section 8: Why 3KG? (featured_grid-71-8)
export const WHY_3KG_ITEMS: WhyItem[] = [
  {
    icon: 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/new-main/star-svgrepo-com-1.svg',
    title: 'Fresh Every Day',
    description: 'Fruits & vegetables sourced fresh daily',
  },
  {
    icon: 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/new-main/workspace-trusted-svgrepo-com.svg',
    title: 'Premium Quality',
    description: 'Hand-picked produce from trusted farms',
  },
  {
    icon: 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/new-main/shipping-truck-svgrepo-com.svg',
    title: 'Same-Day Delivery',
    description: 'Fast & reliable delivery across Bahrain',
  },
  {
    icon: 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/new-main/money-bag-svgrepo-com.svg',
    title: 'Bulk Savings',
    description: 'Save more with bulk buys and 3kg offers',
  },
  {
    icon: 'https://s3.eu-central-2.wasabisys.com/fabricmedia-ecommerce/tenants/saas_3kg_app/catalog/new-main/support-svgrepo-com.svg',
    title: 'Here to Help',
    description: 'Call or WhatsApp us on 1742 1224',
  },
];

export const FOOTER_LINK_COLUMNS = [
  {
    title: 'Information',
    links: [
      { href: `${SITE_BASE_URL}/info/8`, label: 'FAQ' },
      { href: `${SITE_BASE_URL}/about-us`, label: 'About Us' },
      { href: `${SITE_BASE_URL}/delivery-information`, label: 'Delivery Policy' },
      { href: `${SITE_BASE_URL}/privacy-policy`, label: 'Privacy Policy' },
      { href: `${SITE_BASE_URL}/terms-and-conditions`, label: 'Terms & Conditions' },
      { href: `${SITE_BASE_URL}/contact`, label: 'Contact Us' },
    ],
  },
  {
    title: 'Extras',
    links: [
      { href: `${SITE_BASE_URL}/shop?discounted=true`, label: 'Special Offers' },
      { href: `${SITE_BASE_URL}/categories`, label: 'Site Map' },
    ],
  },
  {
    title: 'My Account',
    links: [
      { href: `${SITE_BASE_URL}/account`, label: 'My Account' },
      { href: `${SITE_BASE_URL}/account/orders`, label: 'Order History' },
      { href: `${SITE_BASE_URL}/wishlist`, label: 'Wish List' },
      { href: `${SITE_BASE_URL}/account/edit`, label: 'Newsletter' },
    ],
  },
];

export const PAYMENT_LOGOS = [
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-1.png`, alt: 'Visa' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-7.png`, alt: 'Mastercard' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-3.png`, alt: 'Benefit' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-5.png`, alt: 'KNET' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-6.png`, alt: 'Mada' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-4.png`, alt: 'JCB' },
  { src: `${SITE_BASE_URL}/assets/payment/logos/payment-2.png`, alt: 'Apple Pay' },
];

export const APP_STORE_BADGES = {
  googlePlay: `${SITE_BASE_URL}/assets/stores/google-play.png`,
  appStore: `${SITE_BASE_URL}/assets/stores/app-store.png`,
};

export function formatCurrency(priceInBhd: number, currency: CurrencyOption): string {
  const converted = priceInBhd * currency.rateFromBhd;
  return `${currency.symbol} ${converted.toFixed(currency.decimals)}`;
}
