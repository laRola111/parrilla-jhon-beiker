/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");

const file = "src/app/page.tsx";
let content = fs.readFileSync(file, "utf8");

// 1. FIX THE BROKEN GRADIENTS
content = content.replace(
  /bg-linear-to-br from-\[#c59327\] via-\[#a27211\] to-\[#765107\]/g,
  "bg-gradient-to-r from-amber-500 to-amber-700",
);
content = content.replace(
  /bg-linear-to-br from-\[#dfa831\] via-\[#b8860b\] to-\[#8b6508\] bg-clip-text text-transparent/g,
  "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm",
);
content = content.replace(/hover:text-\[#dfa831\]/g, "hover:text-amber-500");

// 2. BUILD THE HUGE MENU REPLACEMENT
const menuData = [
  {
    id: "desayunos",
    title: "Desayunos",
    icon: "sunny",
    note: "Servidos hasta las 11:30 AM",
    items: [
      { title: "Calentado Paisa Sencillo", price: "$15" },
      { title: "Calentado Paisa Especial", price: "$17" },
      { title: "Arepa con Chicharrón", price: "$12" },
      { title: "Arepa con Hígado Encebollado", price: "$14" },
      {
        title: "Huevos Revueltos a tu gusto",
        price: "$13",
        desc: "Salchicha, Queso, Chorizo, Estrellados o Rancheros",
      },
      {
        title: "Desayuno Criollo Venezolano",
        price: "$17",
        desc: "Frijoles negros, huevo, queso, nata y carne mechada",
      },
      {
        title: "Arepas Rellenas",
        price: "$10",
        desc: "Jamón y Queso, Atún o Huevos Pericos",
      },
      {
        title: "Arepas Especiales",
        price: "$14",
        desc: "Reina Pepiada, Carne Mechada o Pollo Esmechado",
      },
    ],
  },
  {
    id: "entradas",
    title: "Entradas",
    icon: "tapas",
    items: [
      {
        title: "Coctel de Camarones",
        price: "$12",
        desc: "Servido con tajadas o galletas",
      },
      {
        title: "Bold de Plátano",
        price: "$10",
        desc: "Con hogao o guacamole y queso costeño",
      },
      { title: "Ceviche de Chicharrón", price: "$17" },
      {
        title: "Picada de Morcilla",
        price: "$13",
        desc: "Con tostones y guacamole",
      },
      { title: "Tequeños (5 piezas)", price: "$10" },
      {
        title: "Tostones con Chicharrón",
        price: "$14",
        desc: "Con crema y queso frito",
      },
    ],
  },
  {
    id: "menu-diario",
    title: "Menú Diario",
    icon: "calendar_today",
    note: "Incluye 2 acompañantes a elección (Arroz, Tajadas, Tostones, Ensalada Cruda, Ensalada Cocida)",
    items: [
      { title: "Pollo a la Plancha", price: "$16" },
      { title: "Bistec al Caballo", price: "$22" },
      { title: "Costilla en Coco", price: "$15" },
      { title: "Mojarra Frita", price: "$24" },
      { title: "Chuleta Ahumada", price: "$16" },
      { title: "Bistec Encebollado", price: "$18" },
      { title: "Costilla San Luis", price: "$18" },
    ],
  },
  {
    id: "especiales",
    title: "Platos Especiales",
    icon: "stars",
    items: [
      {
        title: "Bandeja Paisa",
        price: "$25",
        desc: "Arroz, frijoles, chicharrón, aguacate, huevo, carne molida, chorizo y morcilla",
      },
      {
        title: "Pabellón Criollo",
        price: "$18",
        desc: "Arroz, maduro, huevo, aguacate, frijoles y carne mechada",
      },
    ],
  },
  {
    id: "fines-semana",
    title: "Especiales Fin de Semana",
    icon: "celebration",
    note: "Viernes, Sábado y Domingo",
    items: [
      { title: "Mondongo", price: "$18" },
      { title: "Sopa de Costilla", price: "$18" },
      { title: "Sancocho de Gallina", price: "$19" },
      { title: "Arroz Paisa", price: "$26" },
      { title: "Arroz Especial", price: "$25" },
      { title: "Arroz de Pollo", price: "$23" },
      { title: "Ajiaco", price: "$16" },
      { title: "Mote de Queso", price: "$18" },
      { title: "Cordon Bleu de Pollo", price: "$17" },
      { title: "Pasticho", price: "$17" },
    ],
  },
  {
    id: "parrillas",
    title: "Parrillas",
    icon: "local_fire_department",
    note: "Incluyen 2 acompañantes (Ensalada, Papa criolla/francesa, Arepitas, Yuca, Tostones)",
    items: [
      { title: "Lomito", price: "$24" },
      { title: "Puerco", price: "$18" },
      {
        title: "Cruzada",
        price: "$23",
        desc: "2 proteínas: lomito, pollo o puerco",
      },
      {
        title: "Mixta (2 personas)",
        price: "$33",
        desc: "3 proteínas: lomito, pollo, puerco o chorizo",
      },
      { title: "ParriJhonBeiker", price: "$45", desc: "Trae las 4 proteínas" },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    icon: "lunch_dining",
    items: [
      {
        title: "Sencilla",
        price: "$13",
        desc: "Carne de la casa, jamón, queso, lechuga y tomate",
      },
      {
        title: "Especial",
        price: "$15",
        desc: "Pollo o lomito, jamón, queso, lechuga y tomate",
      },
      {
        title: "Mix Burger",
        price: "$21",
        desc: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga",
      },
      {
        title: "Chorreada Sencilla",
        price: "$17",
        desc: "1 proteína a su preferencia, jamón, queso, lechuga y tomate",
      },
      {
        title: "Chorreada Especial",
        price: "$23",
        desc: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate",
      },
      {
        title: "La JhonBeiker",
        price: "$29",
        desc: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate",
      },
    ],
  },
  {
    id: "patacones",
    title: "Patacones",
    icon: "restaurant",
    items: [
      {
        title: "Patacón Sencillo",
        price: "$18",
        desc: "Verde o maduro, proteína, jamón, queso, lechuga y tomate",
      },
      {
        title: "Mix Patacón",
        price: "$21",
        desc: "2 proteínas, jamón, queso, lechuga y tomate",
      },
      {
        title: "JhonBeik Patacón",
        price: "$28",
        desc: "3 proteínas, jamón, queso, huevo, lechuga y tomate",
      },
    ],
  },
  {
    id: "fast-food",
    title: "Comida Rápida (Fast Food)",
    icon: "fastfood",
    note: "Arepas, Cabimeras y Cachapas",
    items: [
      {
        title: "Arepa",
        price: "$18",
        desc: "1 proteína a su elección, jamón, queso, lechuga y tomate",
      },
      {
        title: "Arepón",
        price: "$20",
        desc: "2 proteínas a su elección, jamón, queso, lechuga y tomate",
      },
      {
        title: "Cabimera Sencilla",
        price: "$18",
        desc: "Arepa o plátano, proteína, jamón, queso, repollo, tomate, mayonesa y kétchup",
      },
      {
        title: "Mix Cabimera",
        price: "$22",
        desc: "2 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate",
      },
      {
        title: "CabiJhonBeiker",
        price: "$29",
        desc: "3 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate",
      },
      { title: "Cachapa con Queso", price: "$13" },
      { title: "Cachapa con Proteína", price: "$17" },
    ],
  },
  {
    id: "salchipapas",
    title: "Salchipapas",
    icon: "french_fries",
    items: [
      {
        title: "Mini Salchi",
        price: "$8",
        desc: "Papa, queso, salchichas, huevos de codorniz y salsas",
      },
      {
        title: "SalchiSensei",
        price: "$13",
        desc: "Papas, queso, salchichas, huevos de codorniz, salsas y panceta",
      },
      {
        title: "Choripapa Sencilla",
        price: "$10",
        desc: "Papas, queso, chorizo, lechuga, huevo de codorniz",
      },
      {
        title: "Choripapa Especial",
        price: "$15",
        desc: "Papa, queso, chorizo, lechuga, huevo de codorniz y carne asada",
      },
      {
        title: "La Poderosa",
        price: "$25",
        desc: "Papas, salchichas, chicharrón, huevo de codorniz, queso, panceta",
      },
      {
        title: "Tumba Hogares",
        price: "$30",
        desc: "Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo y maíz - Pollo o Lomito",
      },
      {
        title: "SalchiParriJhon",
        price: "$55",
        desc: "Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo, maíz, pollo o lomito y lomo de cerdo",
      },
    ],
  },
  {
    id: "perros-locos",
    title: "Perros Locos",
    icon: "hotdog",
    items: [
      {
        title: "Pan Huevo",
        price: "$8",
        desc: "Pan, huevo, ripio, queso, ensalada de repollo",
      },
      {
        title: "Sencillos",
        price: "$10",
        desc: "Pan, salchicha, ripio, queso, ensalada de repollo",
      },
      {
        title: "Especial",
        price: "$15",
        desc: "1 proteína, ripio, queso, ensalada de repollo",
      },
      {
        title: "Mega Mix",
        price: "$18",
        desc: "2 proteínas, ripio, queso, ensalada de repollo, tocineta",
      },
      {
        title: "PaJhonBeiker",
        price: "$26",
        desc: "3 proteínas, ripio, queso, ensalada de repollo, tocineta, huevo",
      },
    ],
  },
  {
    id: "desgranados",
    title: "Desgranados",
    icon: "rice_bowl",
    items: [
      {
        title: "Sencillo",
        price: "$8",
        desc: "Maíz, quesos, salsas y huevos de codorniz",
      },
      {
        title: "Especial",
        price: "$12",
        desc: "Maíz, quesos, salsas, huevos de codorniz y pollo o lomito",
      },
      {
        title: "Súper Especial",
        price: "$18",
        desc: "Maíz, quesos, salsas, huevos de codorniz, pollo y lomito",
      },
    ],
  },
];

let navHtml = '<div className="flex gap-4 min-w-max">\n';
menuData.forEach((cat, index) => {
  const isFirst = index === 0;
  navHtml += `
                <button 
                  onClick={() => document.getElementById('${cat.id}')?.scrollIntoView({behavior: 'smooth'})}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full ${isFirst ? "bg-gradient-to-r from-amber-500 to-amber-700 text-white font-bold shadow-lg shadow-amber-900/40" : "bg-surface-highlight text-gray-300 hover:text-amber-500 border border-white/5 font-medium"} transition-all hover:scale-105"
                >
                  <span className="material-symbols-outlined text-lg">${cat.icon}</span>
                  ${cat.title}
                </button>`;
});
navHtml += "\n              </div>";

let sectionsHtml = "";
menuData.forEach((cat) => {
  sectionsHtml += `
            <div id="${cat.id}" className="scroll-mt-40">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 mt-12 gap-2">
                <h2 className="text-4xl font-display text-white drop-shadow-md flex items-center gap-3">
                  ${cat.title}
                </h2>
                ${cat.note ? `<span className="text-sm text-amber-500 max-w-sm text-right">${cat.note}</span>` : ""}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                ${cat.items
      .map(
        (item) => `
                <MenuItem
                  title="${item.title}"
                  price="${item.price}"
                  ${item.desc ? `desc="${item.desc}"` : ""}
                />
                `,
      )
      .join("")}
              </div>
              <div className="border-t border-white/5 my-8"></div>
            </div>
`;
});

// Regex to replace the sticky nav
const navRegex =
  /<div className="flex gap-4 min-w-max">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">/;
content = content.replace(
  navRegex,
  navHtml +
  '\n            </div>\n          </div>\n          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10">',
);

// Regex to replace menu content
const contentRegex =
  /\{\/\* --- DESAYUNOS --- \*\/\}[\s\S]*?(?=<\/div>\s*<\/main>)/;
content = content.replace(contentRegex, sectionsHtml);

fs.writeFileSync(file, content);
console.log("Menu generated and injected, colors fixed.");
