'use client'

import React, { FC, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  // {
  //   label: 'Skills',
  //   href: '#skills',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const Menu: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
  const menuRef = useRef<HTMLUListElement>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const headerHeightRef = useRef<number>(0);
  const isClickingRef = useRef<boolean>(false);

  const handleMenuItemClick = (href: string, index: number) => {
    const section = document.querySelector(href);
    const headerHeight = document.querySelector('#header')?.clientHeight || 0;

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      isClickingRef.current = true;

      // Set the active index immediately for instant visual feedback
      setActiveIndex(index);

      // Scroll to the section with smooth behavior
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });

      // Temporarily disable scroll events until smooth scroll finishes
      setTimeout(() => {
        isClickingRef.current = false;
        handleScroll(); // Manually trigger scroll check after the scroll completes
      }, 600); // Estimate scroll duration (can be adjusted)
    }
  };

  useEffect(() => {
    // Store references to the sections
    sectionsRef.current = menuItems.map((item) => document.querySelector(item.href) as HTMLElement);

    // Get the sticky header height
    headerHeightRef.current = document.querySelector('#header')?.clientHeight || 0;
  }, []);

  const handleScroll = () => {
    if (isClickingRef.current) return; // Ignore scroll events during clicking

    const centerY = window.innerHeight / 2 + headerHeightRef.current / 2; // Adjust for sticky header
    let closestIndex = -1;
    let closestDistance = Infinity;

    // Special case for "About" when near the top of the page
    if (window.pageYOffset < 100) { // If close to the top, select "About"
      setActiveIndex(0);
      return;
    }

    sectionsRef.current.forEach((section, index) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionCenterY = rect.top + rect.height / 2 - headerHeightRef.current;
        const distance = Math.abs(centerY - sectionCenterY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    if (closestIndex !== -1 && closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Initialize the active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex !== null && menuRef.current) {
      const activeItem = menuRef.current.children[activeIndex] as HTMLElement;
      const { left, width } = activeItem.getBoundingClientRect();

      const menuLeft = menuRef.current.getBoundingClientRect().left;
      setUnderlineProps({
        left: left - menuLeft,
        width,
      });
    }
  }, [activeIndex]);

  return (
    <nav aria-label="Main menu" className="relative">
      <ul ref={menuRef} className="flex space-x-8 text-lg text-foreground-secondary">
        {menuItems.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleMenuItemClick(item.href, index);
              }}
              className={`hover:text-foreground transition-colors duration-300 ease-in-out ${
                activeIndex === index ? 'text-foreground' : ''
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Underline Animation */}
      {activeIndex !== null && (
        <motion.div
          className="absolute bottom-0 h-[2px] bg-foreground"
          initial={false}
          animate={{
            left: underlineProps.left,
            width: underlineProps.width,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </nav>
  );
};

export default Menu;