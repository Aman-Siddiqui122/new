import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapScroll(
  scopeRef: React.RefObject<HTMLElement | null>,
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!scopeRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Reveal generic sections / containers with 3D depth
      const revealElements = gsap.utils.toArray<HTMLElement>('.gsap-reveal');
      revealElements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Reveal Section Headers & Headlines (Editorial mask + 3D lift)
      const revealHeaders = gsap.utils.toArray<HTMLElement>('.gsap-reveal-header');
      revealHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          {
            opacity: 0,
            y: 45,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1.15,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: header,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Staggered grid cards / items with 3D perspective
      const staggerContainers = gsap.utils.toArray<HTMLElement>('.gsap-reveal-stagger');
      staggerContainers.forEach((container) => {
        const children = container.querySelectorAll('.gsap-stagger-item');
        if (children.length > 0) {
          gsap.fromTo(
            children,
            {
              opacity: 0,
              y: 50,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: container,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 4. Image mask reveal (Awwwards 3D unmask + smooth scale)
      const revealImages = gsap.utils.toArray<HTMLElement>('.gsap-reveal-img');
      revealImages.forEach((imgWrap) => {
        const img = imgWrap.querySelector('img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, filter: 'grayscale(50%)' },
            {
              scale: 1,
              filter: 'grayscale(0%)',
              duration: 1.4,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: imgWrap,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });

      // 5. 3D Floating / Parallax elements on scroll
      const parallaxElements = gsap.utils.toArray<HTMLElement>('.gsap-parallax');
      parallaxElements.forEach((el) => {
        gsap.to(el, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // 6. Metric Counter bounce & pulse
      const counterElements = gsap.utils.toArray<HTMLElement>('.gsap-reveal-metric');
      counterElements.forEach((metric) => {
        gsap.fromTo(
          metric,
          {
            opacity: 0,
            scale: 0.85,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: metric,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Refresh ScrollTrigger after elements paint
      ScrollTrigger.refresh();
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, [scopeRef, ...dependencies]);
}
