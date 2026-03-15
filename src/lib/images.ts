/**
 * Curated images for each section. Unsplash (images.unsplash.com) — free to use.
 * Format: photo-{id}?w=1200&q=80 for consistent size/quality.
 */
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

export const images = {
  // Home
  hero: U("1586528116311-ad8dd3c8310d"), // Warehouse / fulfillment
  grow: U("1460925895917-afdab827c52f"), // Laptop analytics / ecommerce
  distribute: U("1605745341112-859208b0339b"), // Warehouse boxes / logistics
  brandProtection: U("1614064548232-70b4f3b25739"), // Security / lock / trust
  about: U("1522071820081-009f0129c71c"), // Team collaboration
  features: U("1551288049-bebda4e38f71"), // Analytics dashboard

  // Inner pages — distinct from home where needed
  growPage: U("1556742049-0cfed4f6a45d"), // Growth / strategy
  distributePage: U("1586528116311-ad8dd3c8310d"), // Warehouse / fulfillment
  protectPage: U("1563013544-824ae1b704d3"), // Security / document
  optimizationPage: U("1460925895917-afdab827c52f"), // Content / listing
  missionPage: U("1522071820081-009f0129c71c"), // Team
  missionOffice: U("1497366216548-37526070297c"), // Office workspace
} as const;
