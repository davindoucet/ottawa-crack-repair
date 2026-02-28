/**
 * Unsplash image URLs for the site. All free to use under Unsplash License.
 * Format: https://images.unsplash.com/photo-{id}?w=1200&q=80
 */

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fit=crop`

export const images = {
  /** Hero: house exterior / home — good for “foundation & driveway” vibe */
  hero: unsplash("1600585154340-24831338b3fa", 1400),
  /** Foundation: concrete / basement wall / structural */
  foundation: unsplash("1558618666-fcd25c85cd64", 1200),
  /** Driveway: asphalt / pavement / road */
  driveway: unsplash("1561214115-f2f134cc4912", 1200),
  /** Concrete crack / repair detail (close-up) */
  concreteCrack: unsplash("1504307651254-35680f356090", 1200),
}
