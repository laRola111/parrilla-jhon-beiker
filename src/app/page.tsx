/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { menuData } from "@/data/menu";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Splash Screen Animation */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-100 bg-black flex items-center justify-center"
          >
            <motion.div
              layoutId="main-logo"
              className="w-64 h-64 md:w-96 md:h-96"
            >
              <Image
                src="/logo_parrilla_jhonbaiker.png"
                alt="Logo Parrillas JhonBeiker Splash"
                width={384}
                height={384}
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(245,159,10,0.5)]"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/logo_parrilla_jhonbaiker.png"
                alt="Logo Parrillas JhonBeiker"
                width={48}
                height={48}
                className="object-contain"
              />
              <h1 className="text-white text-xl font-heading uppercase tracking-wider hidden sm:block">
                Parrillas JhonBeiker
              </h1>
            </div>
            <nav className="hidden md:flex gap-8 items-center">
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#"
              >
                {t.nav.home}
              </a>
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#reviews"
              >
                {t.nav.story}
              </a>
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#footer"
              >
                {t.nav.contact}
              </a>
              <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${language === "es" ? "bg-amber-600 text-white shadow-md font-bold" : "text-gray-300 hover:text-white"
                    }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 text-sm rounded-full transition-all ${language === "en" ? "bg-amber-600 text-white shadow-md font-bold" : "text-gray-300 hover:text-white"
                    }`}
                >
                  EN
                </button>
              </div>
            </nav>
            <a
              href="https://wa.me/15129677169?text=Hola,%20quiero%20reservar%20una%20mesa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 hidden lg:inline-block"
            >
              {t.nav.reserve}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark/90 via-transparent to-background-dark/90 z-10"></div>
          <img
            alt="Sizzling steak on a grill with flames"
            className="w-full h-full object-cover opacity-60"
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2565&auto=format&fit=crop"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-700/30 bg-amber-900/20 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm text-sm font-bold tracking-widest uppercase mb-4 animate-pulse">
            <span className="material-symbols-outlined text-sm">
              local_fire_department
            </span>
            {t.hero.tag}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            {!showSplash && (
              <motion.div
                layoutId="main-logo"
                className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(245,159,10,0.4)]"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src="/logo_parrilla_jhonbaiker.png"
                  alt="Logo Parrillas JhonBeiker"
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                  priority
                />
              </motion.div>
            )}
            <h1 className="text-6xl md:text-8xl font-stencil text-white leading-tight tracking-tight text-distressed text-glow text-center md:text-left">
              PARRILLAS
              <br />
              JHONBEIKER
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mt-2">
            {t.hero.subtitle}{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm font-semibold">{t.hero.highlight}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
              href="#menu"
            >
              <span className="material-symbols-outlined">restaurant_menu</span>
              {t.hero.menuBtn}
            </a>
            <a
              href="#reviews"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:bg-white/5"
            >
              <span className="material-symbols-outlined">star</span>
              {t.hero.reviewsBtn}
            </a>
          </div>
        </div>
      </section>


      {/* Reviews Marquee Section */}
      <section
        id="reviews"
        className="py-16 bg-black overflow-hidden relative flex items-center border-y border-white/10 mb-20 shadow-[0_0_30px_rgba(245,159,10,0.1)]"
      >
        <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex gap-8 items-center shrink-0">
              {/* Map Reviews */}
              {t.reviews.map((review: { text: string }, i: number) => (
                <div key={i} className="flex gap-8 items-center shrink-0">
                  <div className="bg-background-dark/90 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4">
                    <div className="flex bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">
                      <span className="material-symbols-outlined !text-xl">star</span>
                      <span className="material-symbols-outlined !text-xl">star</span>
                      <span className="material-symbols-outlined !text-xl">star</span>
                      <span className="material-symbols-outlined !text-xl">star</span>
                      <span className="material-symbols-outlined !text-xl">star</span>
                    </div>
                    <p className="text-white font-medium text-lg italic" dangerouslySetInnerHTML={{ __html: review.text }}></p>
                  </div>
                  <span className="material-symbols-outlined text-background-dark !text-3xl mx-4 opacity-50">
                    local_fire_department
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Layout */}
      <div
        className="flex flex-col lg:flex-row min-h-screen bg-background-dark relative"
        id="menu"
      >
        {/* Menu Section (Left) */}
        <main className="flex-1 pb-20">
          {/* Clean Wrap Navigation for Categories */}
          <div className="sticky top-20 z-40 bg-background-dark/95 backdrop-blur border-b border-primary/20 py-4 px-4 sm:px-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="max-w-5xl mx-auto flex overflow-x-auto sm:flex-wrap gap-3 sm:justify-center pb-2 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {menuData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    const el = document.getElementById(cat.id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 150;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 bg-surface-highlight text-gray-300 hover:text-white hover:bg-surface-dark border border-white/5 hover:border-primary/50 group hover:shadow-[0_0_15px_rgba(255,184,0,0.2)] whitespace-nowrap snap-center shrink-0"
                >
                  <span className="material-symbols-outlined text-xl text-primary/70 group-hover:text-primary transition-colors">{cat.icon}</span>
                  <span className="text-sm font-bold">{cat.title[language as "es" | "en"]}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
            {menuData.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-40">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                  <h2 className="text-4xl font-heading uppercase text-white drop-shadow-md flex items-center gap-3 text-glow-hover transition-all">
                    {cat.title[language as "es" | "en"]}
                  </h2>
                  {cat.note && <span className="text-sm text-amber-500 max-w-sm text-right">{cat.note[language as "es" | "en"]}</span>}
                </div>

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 pb-4">
                  {cat.image && (
                    <div className="w-full lg:w-1/3 shrink-0">
                      <div className="top-40 sticky rounded-2xl overflow-hidden border border-white/10 shadow-lg group h-48 lg:h-auto">
                        <img
                          src={cat.image}
                          alt={cat.title[language as "es" | "en"]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 lg:aspect-[4/5]"
                        />
                      </div>
                    </div>
                  )}

                  <div className={`flex flex-col w-full ${cat.image ? 'lg:w-2/3' : ''}`}>
                    {cat.items.map((item, idx) => (
                      <MenuItem
                        key={idx}
                        title={item.title[language as "es" | "en"]}
                        price={item.price}
                        desc={item.desc ? item.desc[language as "es" | "en"] : undefined}
                      />
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/5 my-8"></div>
              </div>
            ))}
          </div>
        </main>

        {/* Sticky Cart Sidebar (Desktop) */}
        <aside className="hidden lg:flex w-96 flex-col bg-surface-dark border-l border-white/5 sticky top-20 h-[calc(100vh-5rem)] z-30 shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-surface-highlight">
            <div className="flex items-center gap-3 text-white mb-1">
              <span className="material-symbols-outlined bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                shopping_bag
              </span>
              <h2 className="text-xl font-heading">{language === "es" ? "Tu Pedido" : "Your Order"}</h2>
            </div>
            <p className="text-sm text-gray-500">Mesa 12 • Dine-in</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <p className="text-gray-500 text-sm text-center italic mt-10">
              {language === "es" ? "El carrito está vacío" : "Cart is empty"}
            </p>
          </div>
          <div className="p-6 bg-surface-highlight border-t border-white/5 mt-auto">
            <div className="flex justify-between mb-2 text-sm text-gray-400">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-4 text-sm text-gray-400">
              <span>{language === "es" ? "Impuestos (10%)" : "Tax (10%)"}</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-6 text-xl font-black text-white">
              <span>Total</span>
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">$0.00</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-surface-highlight border border-white/10 text-gray-500 font-bold text-lg cursor-not-allowed">
              {language === "es" ? "Confirmar Pedido" : "Checkout"}
            </button>
          </div>
        </aside>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 mt-16" id="galeria">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm font-bold tracking-widest uppercase mb-2">
            {t.gallery.tag}
          </h2>
          <h3 className="text-4xl font-display text-white mb-6 drop-shadow-lg">
            {t.gallery.title}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t.gallery.desc}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Replace these placeholder images with the actual files later */}
          <div className="rounded-xl overflow-hidden md:col-span-2 md:row-span-2 relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="/images/bandeja-paisa.png"
              alt="Bandeja Paisa"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="/images/calentado-paisa.png"
              alt="Desayuno Paisa"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="/images/arepa-rellena.png"
              alt="Arepas Rellenas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden md:col-span-2 relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="/images/parrilla-mixta.png"
              alt="Parrilla Mixta Grill"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-black/50"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-black text-white py-16 border-t border-white/10 mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-stencil text-distressed uppercase mb-4 tracking-wider">
              Parrillas JhonBeiker
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              {language === "es"
                ? "Fusión gastronómica que une corazones. El verdadero sabor del grill colombo-venezolano en tu mesa."
                : "A gastronomic fusion that unites hearts. The true flavor of Colombian-Venezuelan grill on your table."}
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  photo_camera
                </span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">{language === "es" ? "Horarios" : "Hours"}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Lun - Jue:</span> <span>11:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Vie - Sab:</span> <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Dom:</span> <span>11:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">{language === "es" ? "Contacto" : "Contact"}</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm text-sm mt-0.5">
                  location_on
                </span>
                <span>907 Kramer Ln Austin TX 78758</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm text-sm">
                  call
                </span>
                <span>(512) 967-7169</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm text-sm">
                  mail
                </span>
                <span>reservas@jhonbeiker.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
          {language === "es" ? "© 2026 Parrillas JhonBeiker. Todos los derechos reservados." : "© 2026 Parrillas JhonBeiker. All rights reserved."}
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
        href="https://wa.me/15129677169"
        title="Contactar por WhatsApp"
      >
        <svg
          fill="white"
          height="32"
          viewBox="0 0 256 256"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M211.3,44.7a118,118,0,0,0-166.7,0A117.5,117.5,0,0,0,9,128a117.3,117.3,0,0,0,15.7,59.2L10.3,237.9a15.8,15.8,0,0,0,19.8,19.8l50.7-14.4A117.5,117.5,0,0,0,247,128,117.5,117.5,0,0,0,211.3,44.7ZM128,222.9a94.7,94.7,0,0,1-48.4-13.3l-3.5-2-42.8,12.2,12.2-42.8-2-3.5A94.8,94.8,0,0,1,195,58,94.8,94.8,0,0,1,128,222.9Zm54-70.6c-2.9-1.5-17.4-8.6-20.1-9.6s-4.6-1.5-6.6,1.5-7.5,9.5-9.2,11.5-3.4,2.2-6.3.8a79.2,79.2,0,0,1-23.4-14.4,87.6,87.6,0,0,1-16.1-20c-1.7-2.9-.2-4.4,1.3-5.8s2.9-3.4,4.4-5.1a19.7,19.7,0,0,0,2.9-4.8c.8-1.5.4-2.8-.2-3.9s-6.6-15.8-9-21.7c-2.4-5.7-4.8-4.9-6.6-5H83.8a12.8,12.8,0,0,0-9.2,4.3c-3.2,3.5-12.1,11.8-12.1,28.8s12.4,33.4,14.1,35.8,24.4,37.3,59.1,52.3c34.7,15,34.7,10,41,9.4s14.1-5.7,16.1-11.3,2-10.4,1.4-11.3S184.9,153.8,182,152.3Z"></path>
        </svg>
      </a>
    </>
  );
}

// Helper Component for Menu Items
function MenuItem({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc?: string;
}) {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded-lg group">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-card-title font-bold text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          {desc && <p className="text-gray-400 text-sm font-body mt-1 leading-relaxed pr-4">{desc}</p>}
        </div>
        <div className="flex flex-col items-end shrink-0 gap-2">
          <span className="text-xl font-heading text-gold-gradient drop-shadow-sm">{price}</span>
          <button className="text-xs font-bold text-gray-400 hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider bg-white/5 px-3 py-1.5 rounded-md border border-white/10 group-hover:border-primary/30">
            <span className="material-symbols-outlined text-[14px]">add</span>
            {language === "es" ? "Agregar" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
