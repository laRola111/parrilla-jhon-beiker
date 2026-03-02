/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
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
              <h1 className="text-white text-xl font-display uppercase tracking-wider hidden sm:block">
                Parrillas JhonBeiker
              </h1>
            </div>
            <nav className="hidden md:flex gap-8">
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#"
              >
                Inicio
              </a>
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#reviews"
              >
                Nuestra Historia
              </a>
              <a
                className="text-gray-300 hover:text-amber-500 font-medium transition-colors"
                href="#footer"
              >
                Contacto
              </a>
            </nav>
            <a
              href="https://wa.me/15129677169?text=Hola,%20quiero%20reservar%20una%20mesa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200 inline-block"
            >
              Reservar Mesa
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
            Auténtico Sabor
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
            <h1 className="text-6xl md:text-8xl font-display text-white leading-tight tracking-tight text-distressed text-glow text-center md:text-left">
              PARRILLAS
              <br />
              JHONBEIKER
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mt-2">
            El corazón de nuestra tierra{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm font-semibold">en cada bocado</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-700 hover:brightness-110 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-amber-900/40"
              href="#menu"
            >
              <span className="material-symbols-outlined">restaurant_menu</span>
              Ver Menú
            </a>
            <a
              href="#reviews"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/20 hover:border-white text-white font-bold text-lg py-4 px-8 rounded-xl transition-all hover:bg-white/5"
            >
              <span className="material-symbols-outlined">star</span>
              Reviews
            </a>
          </div>
        </div>
      </section>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20">
        <div className="text-center mb-16">
          <h2 className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm font-bold tracking-widest uppercase mb-2">
            Galería
          </h2>
          <h3 className="text-4xl font-display text-white mb-6 drop-shadow-lg">
            Nuestros Platos
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Una mirada a la auténtica gastronomía Colombo-Venezolana.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Replace these placeholder images with the actual files later */}
          <div className="rounded-xl overflow-hidden md:col-span-2 md:row-span-2 relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1544025162-8360d0938ff5?q=80&w=2669&auto=format&fit=crop"
              alt="Bandeja Paisa"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2670&auto=format&fit=crop"
              alt="Chicharron"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1611599537845-1c7ce0005449?q=80&w=2574&auto=format&fit=crop"
              alt="Arepas"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-xl overflow-hidden md:col-span-2 relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2574&auto=format&fit=crop"
              alt="Grill Meat"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      {/* Reviews Marquee Section */}
      <section
        id="reviews"
        className="py-16 bg-black overflow-hidden relative flex items-center border-y border-white/10 mb-20 shadow-[0_0_30px_rgba(245,159,10,0.1)]"
      >
        <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
          {[1, 2, 3].map((set) => (
            <div key={set} className="flex gap-8 items-center shrink-0">
              {/* Review 1 */}
              <div className="bg-background-dark/90 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4">
                <div className="flex bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm drop-shadow-md">
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                </div>
                <p className="text-white font-medium text-lg italic">
                  &quot;La mejor bandeja paisa de la ciudad.&quot; - Carlos M.
                </p>
              </div>

              {/* Separator */}
              <span className="material-symbols-outlined text-background-dark !text-3xl mx-4 opacity-50">
                local_fire_department
              </span>

              {/* Review 2 */}
              <div className="bg-background-dark/90 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4">
                <div className="flex bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm drop-shadow-md">
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                </div>
                <p className="text-white font-medium text-lg italic">
                  &quot;Auténtico sabor venezolano, las arepas son increíbles.&quot; - Ana
                  V.
                </p>
              </div>

              {/* Separator */}
              <span className="material-symbols-outlined text-background-dark !text-3xl mx-4 opacity-50">
                local_fire_department
              </span>

              {/* Review 3 */}
              <div className="bg-background-dark/90 backdrop-blur-sm px-8 py-5 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4">
                <div className="flex bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm drop-shadow-md">
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                  <span className="material-symbols-outlined !text-xl">
                    star
                  </span>
                </div>
                <p className="text-white font-medium text-lg italic">
                  &quot;Atención de primera y parrillas espectaculares.&quot; - Juan P.
                </p>
              </div>

              {/* Separator */}
              <span className="material-symbols-outlined text-background-dark !text-3xl mx-4 opacity-50">
                local_fire_department
              </span>
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
          {/* Sticky Category Nav */}
          <div className="sticky top-20 z-40 bg-background-dark/95 backdrop-blur border-b border-white/5 py-4 px-4 sm:px-8 shadow-2xl">
            <div className="max-w-5xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex gap-4 min-w-max">

                <button 
                  onClick={() => document.getElementById('desayunos')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold shadow-lg shadow-amber-900/40 transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">sunny</span>
                  Desayunos
                </button>
                <button 
                  onClick={() => document.getElementById('entradas')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">tapas</span>
                  Entradas
                </button>
                <button 
                  onClick={() => document.getElementById('menu-diario')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">calendar_today</span>
                  Menú Diario
                </button>
                <button 
                  onClick={() => document.getElementById('especiales')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">stars</span>
                  Platos Especiales
                </button>
                <button 
                  onClick={() => document.getElementById('fines-semana')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">celebration</span>
                  Especiales Fin de Semana
                </button>
                <button 
                  onClick={() => document.getElementById('parrillas')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">local_fire_department</span>
                  Parrillas
                </button>
                <button 
                  onClick={() => document.getElementById('hamburguesas')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">lunch_dining</span>
                  Hamburguesas
                </button>
                <button 
                  onClick={() => document.getElementById('patacones')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">restaurant</span>
                  Patacones
                </button>
                <button 
                  onClick={() => document.getElementById('fast-food')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">fastfood</span>
                  Comida Rápida (Fast Food)
                </button>
                <button 
                  onClick={() => document.getElementById('salchipapas')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">french_fries</span>
                  Salchipapas
                </button>
                <button 
                  onClick={() => document.getElementById('perros-locos')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">hotdog</span>
                  Perros Locos
                </button>
                <button 
                  onClick={() => document.getElementById('desgranados')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">rice_bowl</span>
                  Desgranados
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">
            
            <div id="desayunos" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Desayunos
                </h2>
                <span className="text-sm text-amber-500 max-w-sm text-right">Servidos hasta las 11:30 AM</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Calentado Paisa Sencillo"
                  price="$15"
                  
                />
                
                <MenuItem
                  title="Calentado Paisa Especial"
                  price="$17"
                  
                />
                
                <MenuItem
                  title="Arepa con Chicharrón"
                  price="$12"
                  
                />
                
                <MenuItem
                  title="Arepa con Hígado Encebollado"
                  price="$14"
                  
                />
                
                <MenuItem
                  title="Huevos Revueltos a tu gusto"
                  price="$13"
                  desc="Salchicha, Queso, Chorizo, Estrellados o Rancheros"
                />
                
                <MenuItem
                  title="Desayuno Criollo Venezolano"
                  price="$17"
                  desc="Frijoles negros, huevo, queso, nata y carne mechada"
                />
                
                <MenuItem
                  title="Arepas Rellenas"
                  price="$10"
                  desc="Jamón y Queso, Atún o Huevos Pericos"
                />
                
                <MenuItem
                  title="Arepas Especiales"
                  price="$14"
                  desc="Reina Pepiada, Carne Mechada o Pollo Esmechado"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="entradas" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Entradas
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Coctel de Camarones"
                  price="$12"
                  desc="Servido con tajadas o galletas"
                />
                
                <MenuItem
                  title="Bold de Plátano"
                  price="$10"
                  desc="Con hogao o guacamole y queso costeño"
                />
                
                <MenuItem
                  title="Ceviche de Chicharrón"
                  price="$17"
                  
                />
                
                <MenuItem
                  title="Picada de Morcilla"
                  price="$13"
                  desc="Con tostones y guacamole"
                />
                
                <MenuItem
                  title="Tequeños (5 piezas)"
                  price="$10"
                  
                />
                
                <MenuItem
                  title="Tostones con Chicharrón"
                  price="$14"
                  desc="Con crema y queso frito"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="menu-diario" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Menú Diario
                </h2>
                <span className="text-sm text-amber-500 max-w-sm text-right">Incluye 2 acompañantes a elección (Arroz, Tajadas, Tostones, Ensalada Cruda, Ensalada Cocida)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Pollo a la Plancha"
                  price="$16"
                  
                />
                
                <MenuItem
                  title="Bistec al Caballo"
                  price="$22"
                  
                />
                
                <MenuItem
                  title="Costilla en Coco"
                  price="$15"
                  
                />
                
                <MenuItem
                  title="Mojarra Frita"
                  price="$24"
                  
                />
                
                <MenuItem
                  title="Chuleta Ahumada"
                  price="$16"
                  
                />
                
                <MenuItem
                  title="Bistec Encebollado"
                  price="$18"
                  
                />
                
                <MenuItem
                  title="Costilla San Luis"
                  price="$18"
                  
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="especiales" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Platos Especiales
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Bandeja Paisa"
                  price="$25"
                  desc="Arroz, frijoles, chicharrón, aguacate, huevo, carne molida, chorizo y morcilla"
                />
                
                <MenuItem
                  title="Pabellón Criollo"
                  price="$18"
                  desc="Arroz, maduro, huevo, aguacate, frijoles y carne mechada"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="fines-semana" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Especiales Fin de Semana
                </h2>
                <span className="text-sm text-amber-500 max-w-sm text-right">Viernes, Sábado y Domingo</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Mondongo"
                  price="$18"
                  
                />
                
                <MenuItem
                  title="Sopa de Costilla"
                  price="$18"
                  
                />
                
                <MenuItem
                  title="Sancocho de Gallina"
                  price="$19"
                  
                />
                
                <MenuItem
                  title="Arroz Paisa"
                  price="$26"
                  
                />
                
                <MenuItem
                  title="Arroz Especial"
                  price="$25"
                  
                />
                
                <MenuItem
                  title="Arroz de Pollo"
                  price="$23"
                  
                />
                
                <MenuItem
                  title="Ajiaco"
                  price="$16"
                  
                />
                
                <MenuItem
                  title="Mote de Queso"
                  price="$18"
                  
                />
                
                <MenuItem
                  title="Cordon Bleu de Pollo"
                  price="$17"
                  
                />
                
                <MenuItem
                  title="Pasticho"
                  price="$17"
                  
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="parrillas" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Parrillas
                </h2>
                <span className="text-sm text-amber-500 max-w-sm text-right">Incluyen 2 acompañantes (Ensalada, Papa criolla/francesa, Arepitas, Yuca, Tostones)</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Lomito"
                  price="$24"
                  
                />
                
                <MenuItem
                  title="Puerco"
                  price="$18"
                  
                />
                
                <MenuItem
                  title="Cruzada"
                  price="$23"
                  desc="2 proteínas: lomito, pollo o puerco"
                />
                
                <MenuItem
                  title="Mixta (2 personas)"
                  price="$33"
                  desc="3 proteínas: lomito, pollo, puerco o chorizo"
                />
                
                <MenuItem
                  title="ParriJhonBeiker"
                  price="$45"
                  desc="Trae las 4 proteínas"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="hamburguesas" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Hamburguesas
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Sencilla"
                  price="$13"
                  desc="Carne de la casa, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Especial"
                  price="$15"
                  desc="Pollo o lomito, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Mix Burger"
                  price="$21"
                  desc="2 proteínas a su preferencia, jamón, queso, huevo, lechuga"
                />
                
                <MenuItem
                  title="Chorreada Sencilla"
                  price="$17"
                  desc="1 proteína a su preferencia, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Chorreada Especial"
                  price="$23"
                  desc="2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate"
                />
                
                <MenuItem
                  title="La JhonBeiker"
                  price="$29"
                  desc="2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="patacones" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Patacones
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Patacón Sencillo"
                  price="$18"
                  desc="Verde o maduro, proteína, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Mix Patacón"
                  price="$21"
                  desc="2 proteínas, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="JhonBeik Patacón"
                  price="$28"
                  desc="3 proteínas, jamón, queso, huevo, lechuga y tomate"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="fast-food" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Comida Rápida (Fast Food)
                </h2>
                <span className="text-sm text-amber-500 max-w-sm text-right">Arepas, Cabimeras y Cachapas</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Arepa"
                  price="$18"
                  desc="1 proteína a su elección, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Arepón"
                  price="$20"
                  desc="2 proteínas a su elección, jamón, queso, lechuga y tomate"
                />
                
                <MenuItem
                  title="Cabimera Sencilla"
                  price="$18"
                  desc="Arepa o plátano, proteína, jamón, queso, repollo, tomate, mayonesa y kétchup"
                />
                
                <MenuItem
                  title="Mix Cabimera"
                  price="$22"
                  desc="2 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate"
                />
                
                <MenuItem
                  title="CabiJhonBeiker"
                  price="$29"
                  desc="3 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate"
                />
                
                <MenuItem
                  title="Cachapa con Queso"
                  price="$13"
                  
                />
                
                <MenuItem
                  title="Cachapa con Proteína"
                  price="$17"
                  
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="salchipapas" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Salchipapas
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Mini Salchi"
                  price="$8"
                  desc="Papa, queso, salchichas, huevos de codorniz y salsas"
                />
                
                <MenuItem
                  title="SalchiSensei"
                  price="$13"
                  desc="Papas, queso, salchichas, huevos de codorniz, salsas y panceta"
                />
                
                <MenuItem
                  title="Choripapa Sencilla"
                  price="$10"
                  desc="Papas, queso, chorizo, lechuga, huevo de codorniz"
                />
                
                <MenuItem
                  title="Choripapa Especial"
                  price="$15"
                  desc="Papa, queso, chorizo, lechuga, huevo de codorniz y carne asada"
                />
                
                <MenuItem
                  title="La Poderosa"
                  price="$25"
                  desc="Papas, salchichas, chicharrón, huevo de codorniz, queso, panceta"
                />
                
                <MenuItem
                  title="Tumba Hogares"
                  price="$30"
                  desc="Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo y maíz - Pollo o Lomito"
                />
                
                <MenuItem
                  title="SalchiParriJhon"
                  price="$55"
                  desc="Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo, maíz, pollo o lomito y lomo de cerdo"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="perros-locos" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Perros Locos
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Pan Huevo"
                  price="$8"
                  desc="Pan, huevo, ripio, queso, ensalada de repollo"
                />
                
                <MenuItem
                  title="Sencillos"
                  price="$10"
                  desc="Pan, salchicha, ripio, queso, ensalada de repollo"
                />
                
                <MenuItem
                  title="Especial"
                  price="$15"
                  desc="1 proteína, ripio, queso, ensalada de repollo"
                />
                
                <MenuItem
                  title="Mega Mix"
                  price="$18"
                  desc="2 proteínas, ripio, queso, ensalada de repollo, tocineta"
                />
                
                <MenuItem
                  title="PaJhonBeiker"
                  price="$26"
                  desc="3 proteínas, ripio, queso, ensalada de repollo, tocineta, huevo"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>

            <div id="desgranados" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  Desgranados
                </h2>
                
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                
                <MenuItem
                  title="Sencillo"
                  price="$8"
                  desc="Maíz, quesos, salsas y huevos de codorniz"
                />
                
                <MenuItem
                  title="Especial"
                  price="$12"
                  desc="Maíz, quesos, salsas, huevos de codorniz y pollo o lomito"
                />
                
                <MenuItem
                  title="Súper Especial"
                  price="$18"
                  desc="Maíz, quesos, salsas, huevos de codorniz, pollo y lomito"
                />
                
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>
</div>
        </main>

        {/* Sticky Cart Sidebar (Desktop) */}
        <aside className="hidden lg:flex w-96 flex-col bg-surface-dark border-l border-white/5 sticky top-20 h-[calc(100vh-5rem)] z-30 shadow-2xl">
          <div className="p-6 border-b border-white/5 bg-surface-highlight">
            <div className="flex items-center gap-3 text-white mb-1">
              <span className="material-symbols-outlined bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
                shopping_bag
              </span>
              <h2 className="text-xl font-display">Tu Pedido</h2>
            </div>
            <p className="text-sm text-gray-500">Mesa 12 • Dine-in</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <p className="text-gray-500 text-sm text-center italic mt-10">
              El carrito está vacío
            </p>
          </div>
          <div className="p-6 bg-surface-highlight border-t border-white/5 mt-auto">
            <div className="flex justify-between mb-2 text-sm text-gray-400">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-4 text-sm text-gray-400">
              <span>Impuestos (10%)</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-6 text-xl font-black text-white">
              <span>Total</span>
              <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">$0.00</span>
            </div>
            <button className="w-full py-4 rounded-xl bg-surface-highlight border border-white/10 text-gray-500 font-bold text-lg cursor-not-allowed">
              Confirmar Pedido
            </button>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-black text-white py-16 border-t border-white/10 mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-display uppercase mb-4 tracking-wider">
              Parrillas JhonBeiker
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Fusión gastronómica que une corazones. El verdadero sabor del
              grill colombo-venezolano en tu mesa.
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
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">Horarios</h3>
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
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">Contacto</h3>
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
          © 2026 Parrillas JhonBeiker. Todos los derechos reservados.
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
  return (
    <div className="bg-surface-dark rounded-xl p-5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2 border-b border-white/10 pb-2 border-dashed">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-500 transition-colors flex-1 pr-4">
            {title}
          </h3>
          <span className="text-xl font-display bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">{price}</span>
        </div>
        {desc && <p className="text-gray-400 text-sm mb-4">{desc}</p>}
      </div>
      <button className="w-full mt-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors flex items-center justify-center gap-2 border border-white/5">
        <span className="material-symbols-outlined text-sm">add_circle</span>
        Agregar
      </button>
    </div>
  );
}
