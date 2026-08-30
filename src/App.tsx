/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { PageTransition } from './components/PageTransition';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pendingPage, setPendingPage] = useState<PageId | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Global Consultation Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialService, setConsultationInitialService] = useState<string | undefined>(undefined);

  // Handle Page Navigation with Cinematic Transition
  const handleNavigate = (targetPage: PageId) => {
    if (targetPage === currentPage || isTransitioning) return;
    setPendingPage(targetPage);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (pendingPage) {
      setCurrentPage(pendingPage);
      setPendingPage(null);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    setIsTransitioning(false);
  };

  const handleOpenConsultation = (service?: string) => {
    setConsultationInitialService(service);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FA] text-[#0D1631] font-sans relative selection:bg-[#4D99D3] selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Cinematic Page Transition Curtain */}
      <PageTransition
        isTransitioning={isTransitioning}
        targetPage={pendingPage}
        onTransitionEnd={handleTransitionEnd}
      />

      {/* Floating Global Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
      </main>

      {/* Global Brand Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialService={consultationInitialService}
      />
    </div>
  );
}
