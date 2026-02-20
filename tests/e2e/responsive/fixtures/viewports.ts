/**
 * Viewport configurations for responsive testing
 * Based on actual breakpoint usage analysis:
 * - lg (1024px): 88.7% of responsive classes
 * - md (768px): 9.3%
 * - sm (640px): 1.9%
 */

export interface Viewport {
  name: string;
  width: number;
  height: number;
  isMobile?: boolean;
  description: string;
}

/**
 * Strategic breakpoints for testing
 * Eliminated: 320px (too small), 1366px (redundant), 1920px (container maxes at 1400px)
 */
export const viewports: Viewport[] = [
  {
    name: 'mobile-small',
    width: 375,
    height: 667,
    isMobile: true,
    description: 'iPhone SE, smallest common device',
  },
  {
    name: 'mobile-large',
    width: 428,
    height: 926,
    isMobile: true,
    description: 'iPhone 14 Pro Max',
  },
  {
    name: 'tablet',
    width: 768,
    height: 1024,
    isMobile: false,
    description: 'iPad portrait, tests md breakpoint',
  },
  {
    name: 'desktop-edge',
    width: 1023,
    height: 800,
    isMobile: false,
    description: 'Just BELOW lg - critical for mobile visibility',
  },
  {
    name: 'desktop',
    width: 1024,
    height: 800,
    isMobile: false,
    description: 'THE lg breakpoint - 88.7% of patterns',
  },
  {
    name: 'desktop-wide',
    width: 1440,
    height: 900,
    isMobile: false,
    description: 'Just beyond container max (1400px)',
  },
];

/**
 * Tailwind CSS breakpoints for reference
 */
export const tailwindBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Get viewports for mobile testing (below lg)
 */
export const mobileViewports = viewports.filter(
  (v) => v.width < tailwindBreakpoints.lg
);

/**
 * Get viewports for desktop testing (at or above lg)
 */
export const desktopViewports = viewports.filter(
  (v) => v.width >= tailwindBreakpoints.lg
);

/**
 * Critical viewports for P0 tests
 * Tests the exact lg breakpoint transition
 */
export const criticalViewports = viewports.filter(
  (v) => v.name === 'desktop-edge' || v.name === 'desktop'
);

/**
 * Get viewport by name
 */
export function getViewport(name: string): Viewport | undefined {
  return viewports.find((v) => v.name === name);
}

/**
 * Get viewports within a width range
 */
export function getViewportsInRange(minWidth: number, maxWidth: number): Viewport[] {
  return viewports.filter((v) => v.width >= minWidth && v.width <= maxWidth);
}
