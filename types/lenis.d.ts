declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    wrapper?: HTMLElement | null;
    content?: HTMLElement | null;
    duration?: number;
    easing?: (t: number) => number;
    orientation?: 'vertical' | 'horizontal';
    gestureOrientation?: 'vertical' | 'horizontal';
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    gestureOrientationHandler?: boolean;
    normalizeWheel?: boolean;
    touchInertiaMultiplier?: number;
    lerp?: number;
    syncTouch?: boolean;
    syncTouchLerp?: number;
    touchInertia?: number;
  }

  export interface ScrollToOptions {
    offset?: number;
    duration?: number;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    scrollTo(target: string | HTMLElement, options?: ScrollToOptions): void;
    on(event: string, callback: (e: any) => void): void;
    destroy(): void;
  }
}

