/**
 * Curated photos for every section.
 * Unsplash (images.unsplash.com) and Pexels (images.pexels.com) — both free to use.
 */
const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const P = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Pexels photo whose filename includes a descriptor slug
const SECURITY =
  `https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const images = {
  // ── Homepage ──────────────────────────────────────────────────────────────
  hero:            U("1586528116311-ad8dd3c8310d"), // Busy Amazon-style warehouse overhead
  grow:            U("1460925895917-afdab827c52f"), // Laptop showing analytics dashboard
  distribute:      P(4481326),                       // Warehouse interior with palletised goods
  brandProtection: SECURITY,                          // "Security" on a computer screen
  about:           P(3182812),                        // Diverse team gathered around a laptop
  features:        U("1551288049-bebda4e38f71"),     // Dark analytics/data dashboard

  // ── Inner page content blocks ─────────────────────────────────────────────
  growPage:        P(3184338),                        // Professionals in meeting with charts
  distributePage:  P(1797428),                        // Workers walking through warehouse
  protectPage:     U("1563013544-824ae1b704d3"),     // Person with credit card at laptop
  optimizationPage: P(669610),                        // Analytics charts on paper + laptop
  missionPage:     P(3184465),                        // Business handshake across desk
  missionOffice:   P(1181396),                        // Large team meeting in conference room

  // ── Page hero backgrounds (full-bleed, dark overlay applied in code) ──────
  heroGrow:        P(590016),                         // Analytics reports and laptop
  heroDistribute:  P(906494),                         // Stacked shipping containers
  heroProtect:     SECURITY,                          // "Security" screen with dark overlay
  heroOptimization: U("1460925895917-afdab827c52f"), // Laptop analytics dashboard
  heroMission:     P(1181396),                        // Conference room team
  heroContact:     P(3182812),                        // Diverse team around laptop
} as const;
