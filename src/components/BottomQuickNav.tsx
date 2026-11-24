import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Home,
  LayoutGrid,
  Award,
  Users,
  LifeBuoy,
  ShoppingBag,
} from 'lucide-react';
import { SITE_BASE_URL, STORE_INFO } from '../data/homepageData';
import { SafeImage } from './SafeImage';

export type BottomNavId = 'home' | 'categories' | 'brands' | 'about' | 'support';

interface BottomNavItem {
  id: BottomNavId;
  label: string;
  targetId: string;
  href: string;
  icon: typeof Home;
}

const BOTTOM_NAV_ITEMS: BottomNavItem[] = [
  {
    id: 'home',
    label: 'Home',
    targetId: 'hero-home',
    href: `${SITE_BASE_URL}/`,
    icon: Home,
  },
  {
    id: 'categories',
    label: 'Categories',
    targetId: 'shop-by-category',
    href: `${SITE_BASE_URL}/categories`,
    icon: LayoutGrid,
  },
  {
    id: 'brands',
    label: 'Brands',
    targetId: 'featured-collections',
    href: `${SITE_BASE_URL}/brands`,
    icon: Award,
  },
  {
    id: 'about',
    label: 'About Us',
    targetId: 'why-3kg',
    href: `${SITE_BASE_URL}/about-us`,
    icon: Users,
  },
  {
    id: 'support',
    label: 'Help & Support',
    targetId: 'footer',
    href: `${SITE_BASE_URL}/help-and-support`,
    icon: LifeBuoy,
  },
];

const SECTION_ZONES: { id: string; navId: BottomNavId }[] = [
  { id: 'hero-home', navId: 'home' },
  { id: 'shop-by-category', navId: 'categories' },
  { id: 'fruits', navId: 'categories' },
  { id: 'vegetables', navId: 'categories' },
  { id: 'featured-collections', navId: 'brands' },
  { id: 'bulk-savings', navId: 'brands' },
  { id: 'boxes', navId: 'brands' },
  { id: '3kg-savings', navId: 'brands' },
  { id: 'why-3kg', navId: 'about' },
  { id: 'footer', navId: 'support' },
];

interface BottomQuickNavProps {
  layoutKey?: string;
}

export function BottomQuickNav({ layoutKey = 'default' }: BottomQuickNavProps) {
  const [activeNav, setActiveNav] = useState<BottomNavId>('home');

  const navContainerRef = useRef<HTMLElement | null>(null);
  const navItemRefs = useRef<Record<BottomNavId, HTMLAnchorElement | null>>({
    home: null,
    categories: null,
    brands: null,
    about: null,
    support: null,
  });
  const scrollLockRef = useRef<{
    targetNav: BottomNavId;
    targetY: number;
    expiresAt: number;
  } | null>(null);

  const getHeaderOffset = useCallback(() => {
    const header = document.querySelector('header');
    if (!header) return 80;
    const rect = header.getBoundingClientRect();
    return Math.max(0, rect.height) + 12;
  }, []);

  const syncActiveSection = useCallback(() => {
    const lock = scrollLockRef.current;
    if (lock) {
      const arrived = Math.abs(window.scrollY - lock.targetY) <= 24;
      const expired = Date.now() >= lock.expiresAt;
      if (!arrived && !expired) {
        return;
      }
      scrollLockRef.current = null;
    }

    if (window.scrollY <= 36) {
      setActiveNav((prev) => (prev === 'home' ? prev : 'home'));
      return;
    }

    const docBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 48;
    if (docBottom) {
      setActiveNav((prev) => (prev === 'support' ? prev : 'support'));
      return;
    }

    const headerOffset = getHeaderOffset();
    const activationLine = headerOffset + Math.min(220, window.innerHeight * 0.28);

    let resolvedNav: BottomNavId = 'home';
    for (const zone of SECTION_ZONES) {
      const el = document.getElementById(zone.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= activationLine) {
        resolvedNav = zone.navId;
      }
    }

    setActiveNav((prev) => (prev === resolvedNav ? prev : resolvedNav));
  }, [getHeaderOffset]);

  useEffect(() => {
    let rafId: number | null = null;

    const scheduleSync = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        syncActiveSection();
      });
    };

    const observer = new IntersectionObserver(
      () => {
        scheduleSync();
      },
      {
        rootMargin: '-12% 0px -35% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    SECTION_ZONES.forEach((zone) => {
      const el = document.getElementById(zone.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', scheduleSync, { passive: true });
    window.addEventListener('resize', scheduleSync, { passive: true });

    const handleScrollEnd = () => {
      if (scrollLockRef.current) {
        scrollLockRef.current = null;
      }
      scheduleSync();
    };
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });

    syncActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleSync);
      window.removeEventListener('resize', scheduleSync);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [syncActiveSection, layoutKey]);

  useEffect(() => {
    const navEl = navContainerRef.current;
    const activeBtn = navItemRefs.current[activeNav];
    if (!navEl || !activeBtn) return;

    if (navEl.scrollWidth > navEl.clientWidth) {
      const targetLeft =
        activeBtn.offsetLeft - navEl.clientWidth / 2 + activeBtn.clientWidth / 2;
      navEl.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth',
      });
    }
  }, [activeNav]);

  const scrollToSection = useCallback(
    (targetId: string, nextNav: BottomNavId) => {
      if (targetId === 'hero-home') {
        scrollLockRef.current = {
          targetNav: 'home',
          targetY: 0,
          expiresAt: Date.now() + 950,
        };
        setActiveNav('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const headerOffset = getHeaderOffset();
      const rawTop =
        targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const clampedTop = Math.min(Math.max(0, rawTop), maxScrollY);

      scrollLockRef.current = {
        targetNav: nextNav,
        targetY: clampedTop,
        expiresAt: Date.now() + 950,
      };
      setActiveNav(nextNav);
      window.scrollTo({ top: clampedTop, behavior: 'smooth' });
    },
    [getHeaderOffset]
  );

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-5 sm:px-6">
      <nav
        ref={navContainerRef}
        aria-label="Footer quick navigation"
        className="no-scrollbar pointer-events-auto inline-flex max-w-full flex-nowrap items-center gap-1 overflow-x-auto rounded-full border border-black/15 bg-white/95 px-2.5 py-2 font-sans shadow-[0_12px_32px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md sm:gap-1.5 sm:px-3"
      >
        {/* Left Circular 3KG Brand Avatar */}
        <a
          href="#hero-home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero-home', 'home');
          }}
          aria-label={`${STORE_INFO.shortBrand} Home`}
          className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/15 bg-white p-1 transition-transform duration-150 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A]"
        >
          <SafeImage
            src={STORE_INFO.favicon}
            alt={STORE_INFO.shortBrand}
            className="h-full w-full rounded-full object-contain"
          />
        </a>

        {/* Scroll-Synced Navigation Items */}
        {BOTTOM_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <a
              key={item.id}
              ref={(el) => {
                navItemRefs.current[item.id] = el;
              }}
              href={`#${item.targetId}`}
              aria-current={isActive ? 'location' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.targetId, item.id);
              }}
              className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6CC04A] lg:px-3.5 ${
                isActive
                  ? 'bg-[#6CC04A]/15 text-black ring-1 ring-[#6CC04A]/45'
                  : 'text-black hover:bg-black/5 hover:text-[#6CC04A]'
              }`}
            >
              <Icon
                className="h-4 w-4 shrink-0 text-[#6CC04A]"
                strokeWidth={isActive ? 2.3 : 2}
                aria-hidden="true"
              />
              <span>{item.label}</span>
            </a>
          );
        })}

        {/* Highlighted 3KG Brand Green CTA Button */}
        <a
          href="#fruits"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('fruits', 'categories');
          }}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#6CC04A] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#569A3B] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:ml-1 sm:px-5"
        >
          <ShoppingBag className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
          <span>Shop Now</span>
        </a>
      </nav>
    </div>
  );
}
