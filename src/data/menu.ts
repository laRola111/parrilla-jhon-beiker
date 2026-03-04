export type MenuItemData = {
    title: Record<"es" | "en", string>;
    price: string;
    desc?: Record<"es" | "en", string>;
    image?: string;
};

export type MenuCategoryData = {
    id: string;
    title: Record<"es" | "en", string>;
    icon: string;
    note?: Record<"es" | "en", string>;
    image?: string;
    items: MenuItemData[];
};

export const menuData: MenuCategoryData[] = [
    {
        id: "desayunos",
        title: { es: "Desayunos", en: "Breakfast" },
        icon: "sunny",
        image: "/images/calentado-paisa.png",
        items: [
            { title: { es: "Calentado Paisa Sencillo", en: "Simple Calentado Paisa" }, price: "$15" },
            { title: { es: "Calentado Paisa Especial", en: "Special Calentado Paisa" }, price: "$17", image: "/images/calentado-paisa.png" },
            { title: { es: "Arepa con Chicharrón", en: "Arepa with Pork Rind" }, price: "$12" },
            { title: { es: "Arepa con Hígado Encebollado", en: "Arepa with Liver & Onions" }, price: "$14" },
            {
                title: { es: "Huevos Revueltos a tu gusto", en: "Scrambled Eggs" },
                price: "$13",
                desc: { es: "Salchicha, Queso, Chorizo, Estrellados o Rancheros", en: "Sausage, Cheese, Chorizo, Sunny Side Up, or Rancheros" },
            },
            {
                title: { es: "Desayuno Criollo Venezolano", en: "Traditional Venezuelan Breakfast" },
                price: "$17",
                desc: { es: "Frijoles negros, huevo, queso, nata y carne mechada", en: "Black beans, egg, cheese, cream, and shredded beef" },
            },
            {
                title: { es: "Arepas Rellenas", en: "Arepas" },
                price: "$10",
                desc: { es: "Jamón y Queso, Atún o Huevos Pericos", en: "Ham & Cheese, Tuna, or Perico Eggs" },
                image: "/images/arepa-rellena.png",
            },
            {
                title: { es: "Arepas Especiales", en: "Special Arepas" },
                price: "$14",
                desc: { es: "Reina Pepiada, Carne Mechada o Pollo Esmechado", en: "Reina Pepiada, Shredded Beef, or Shredded Chicken" },
            },
        ],
    },
    {
        id: "entradas",
        title: { es: "Entradas", en: "Appetizers" },
        icon: "tapas",
        image: "/images/cruzada.png",
        items: [
            {
                title: { es: "Coctel de Camarones", en: "Shrimp Cocktail" },
                price: "$12",
                desc: { es: "Servido con tajadas o galletas", en: "Served with fried plantain chips or crackers" },
            },
            {
                title: { es: "Bold de Plátano", en: "Plantain Bowl" },
                price: "$10",
                desc: { es: "Con hogao o guacamole y queso costeño", en: 'With "hogao" sauce or guacamole and costeño cheese' },
            },
            { title: { es: "Ceviche de Chicharrón", en: "Pork Rind Ceviche" }, price: "$17" },
            {
                title: { es: "Picada de Morcilla", en: "Blood Sausage Platter" },
                price: "$13",
                desc: { es: "Con tostones y guacamole", en: "With fried green plantains and guacamole" },
            },
            { title: { es: "Tequeños (5 piezas)", en: "Tequeños (5 pieces)" }, price: "$10" },
            {
                title: { es: "Tostones con Chicharrón", en: "Fried Plantains with Pork Rind" },
                price: "$14",
                desc: { es: "Con crema y queso frito", en: "With cream and fried cheese" },
            },
        ],
    },
    {
        id: "menu-diario",
        title: { es: "Menú Diario", en: "Daily Menu" },
        icon: "calendar_today",
        note: { es: "Incluye 2 acompañantes a elección", en: "Includes 2 sides of your choice" },
        items: [
            { title: { es: "Pollo a la Plancha", en: "Grilled Chicken" }, price: "$16" },
            { title: { es: "Bisteck al Caballo", en: "Steak topped with Fried Egg" }, price: "$22", image: "/images/bistec-a-caballo.png" },
            { title: { es: "Costilla en Coco", en: "Ribs in Coconut Sauce" }, price: "$15" },
            { title: { es: "Mojarra Frita", en: "Fried Tilapia" }, price: "$24" },
            { title: { es: "Chuleta Ahumada", en: "Smoked Pork Chop" }, price: "$16" },
            { title: { es: "Bisteck Encebollado", en: "Steak with Onions" }, price: "$18" },
            { title: { es: "Costilla San Luis", en: "San Luis Ribs" }, price: "$18" },
        ],
    },
    {
        id: "fines-semana",
        title: { es: "Especiales Fin de Semana", en: "Weekend Specials" },
        icon: "celebration",
        note: { es: "Viernes, Sábado y Domingo", en: "Friday, Saturday, and Sunday" },
        image: "/images/bandeja-paisa.png",
        items: [
            {
                title: { es: "Bandeja Paisa", en: "Bandeja Paisa" },
                price: "$25",
                desc: { es: "Arroz, frijoles, chicharrón, aguacate, huevo, carne molida, chorizo y morcilla", en: "Rice, beans, pork rind, avocado, egg, ground beef, chorizo, and blood sausage" },
            },
            {
                title: { es: "Pabellón Criollo", en: "Pabellón Criollo" },
                price: "$18",
                desc: { es: "Arroz, maduro, huevo, aguacate, frijoles y carne mechada", en: "Rice, sweet plantain, egg, avocado, beans, and shredded beef" },
            },
            { title: { es: "Mondongo", en: "Tripe Stew" }, price: "$18" },
            { title: { es: "Sopa de Costilla", en: "Beef Rib Soup" }, price: "$18" },
            { title: { es: "Sancocho de Gallina", en: "Stewing Hen" }, price: "$19" },
            { title: { es: "Arroz Paisa", en: "Paisa Style Rice" }, price: "$26" },
            { title: { es: "Arroz Especial", en: "Special Rice" }, price: "$25" },
            { title: { es: "Arroz con Pollo", en: "Chicken Rice" }, price: "$23" },
            { title: { es: "Ajiaco", en: "Potato & Chicken Soup" }, price: "$16" },
            { title: { es: "Mote de Queso", en: "Ajiaco (Traditional Colombian Stew)" }, price: "$18" },
            { title: { es: "Cordon Bleu de Pollo", en: "Chicken Cordon Bleu" }, price: "$17" },
            { title: { es: "Pasticho", en: "Venezuelan Lasagna" }, price: "$17" },
        ],
    },
    {
        id: "parrillas",
        title: { es: "Parrillas", en: "Grills" },
        icon: "local_fire_department",
        note: { es: "Incluye 2 acompañantes a elección", en: "Includes 2 sides of your choice" },
        image: "/images/parrilla-mixta.png",
        items: [
            { title: { es: "Lomito", en: "Steak Tips" }, price: "$24" },
            { title: { es: "Puerco", en: "Pork" }, price: "$18" },
            {
                title: { es: "Cruzada", en: "Cruzada (Crossed)" },
                price: "$26",
                desc: { es: "2 proteínas: lomito, pollo o puerco", en: "2 proteins: steak, chicken, or pork" },
                image: "/images/cruzada.png",
            },
            {
                title: { es: "Mixta (2 personas)", en: "Mixed (2 people)" },
                price: "$33",
                desc: { es: "3 proteínas: lomito, pollo, puerco o chorizo", en: "3 proteins: steak, chicken, pork, or chorizo" },
                image: "/images/parrilla-mixta.png",
            },
            { title: { es: "ParriJhonBeiker", en: "ParriJhonBeiker" }, price: "$50", desc: { es: "Trae las 4 proteínas", en: "Features all 4 proteins" } },
        ],
    },

    {
        id: "patacones",
        title: { es: "Patacones", en: "Fried Plantains" },
        icon: "restaurant",
        image: "/images/patacon-mixto.png",
        items: [
            {
                title: { es: "Patacón Sencillo", en: "Simple Patacón" },
                price: "$18",
                desc: { es: "Verde o maduro, proteína, jamón, queso, lechuga y tomate", en: "Green or sweet plantain, protein, ham, cheese, lettuce, and tomato" },
            },
            {
                title: { es: "Mix Patacón", en: "Mix Patacón" },
                price: "$21",
                desc: { es: "2 proteínas, jamón, queso, lechuga y tomate", en: "2 proteins, ham, cheese, lettuce, and tomato" },
                image: "/images/patacon-mixto.png",
            },
            {
                title: { es: "JhonBeik Patacón", en: "JhonBeik Patacón" },
                price: "$28",
                desc: { es: "3 proteínas, jamón, queso, huevo, lechuga y tomate", en: "3 proteins, ham, cheese, egg, lettuce, and tomato" },
            },
        ],
    },
    {
        id: "salchipapas",
        title: { es: "Salchipapas", en: "Salchipapas" },
        icon: "local_dining",
        note: { es: "Viernes, Sábado y Domingo", en: "Friday, Saturday, and Sunday" },
        image: "/images/salchipapa.png",
        items: [
            {
                title: { es: "Mini Salchi", en: "Mini Salchi" },
                price: "$8",
                desc: { es: "Papa, queso, salchichas, huevos de codorniz y salsas", en: "Fries, cheese, sausages, quail eggs, and sauces" },
            },
            {
                title: { es: "SalchiSensei", en: "SalchiSensei" },
                price: "$13",
                desc: { es: "Papas, queso, salchichas, huevos de codorniz, salsas y panceta", en: "Fries, cheese, sausages, quail eggs, sauces, and pancetta" },
                image: "/images/salchipapa.png",
            },
            {
                title: { es: "ChoriPapa Senci", en: "Simple ChoriPapa" },
                price: "$10",
                desc: { es: "Papas, queso, chorizo, lechuga, huevo de codorniz", en: "Fries, cheese, chorizo, lettuce, quail egg" },
            },
            {
                title: { es: "ChoriPapa Especial", en: "Special ChoriPapa" },
                price: "$15",
                desc: { es: "Papa, queso, chorizo, lechuga, huevo de codorniz y carne asada", en: "Fries, cheese, chorizo, lettuce, quail egg, and grilled beef" },
            },
            {
                title: { es: "La Poderosa", en: "La Poderosa" },
                price: "$25",
                desc: { es: "Papas, salchichas, chicharrón, huevo de codorniz, queso, panceta", en: "Fries, sausages, pork rind, quail egg, cheese, pancetta" },
            },
            {
                title: { es: "Tumba Hogares", en: "Tumba Hogares" },
                price: "$30",
                desc: { es: "Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo y maíz (Pollo o Lomito)", en: "Fries, sausages, pork rind, quail egg, cheese, chorizo, and corn (Chicken or Steak)" },
            },
            {
                title: { es: "SalchiParriJhon", en: "SalchiParriJhon" },
                price: "$55",
                desc: { es: "Papas, salchichas, chicharrón, huevo de codorniz, queso, chorizo, maíz, pollo o lomito y lomo de cerdo", en: "Fries, sausages, pork rind, quail egg, cheese, chorizo, corn, chicken or steak, and pork loin" },
            },
        ],
    },
    {
        id: "hamburguesas",
        title: { es: "Hamburguesas", en: "Burgers" },
        icon: "lunch_dining",
        image: "/images/burger.png",
        items: [
            {
                title: { es: "Sencilla", en: "Simple" },
                price: "$13",
                desc: { es: "Carne de la casa, jamón, queso, lechuga y tomate", en: "House beef, ham, cheese, lettuce, and tomato" },
            },
            {
                title: { es: "Especial", en: "Special" },
                price: "$15",
                desc: { es: "Pollo o lomito, jamón, queso, lechuga y tomate", en: "Chicken or steak, ham, cheese, lettuce, and tomato" },
                image: "/images/burger.png",
            },
            {
                title: { es: "Mix Burguer", en: "Mix Burguer" },
                price: "$21",
                desc: { es: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga", en: "2 proteins of your choice, ham, cheese, egg, lettuce" },
            },
            {
                title: { es: "Chorriada Sencilla", en: "Simple Chorriada" },
                price: "$17",
                desc: { es: "1 proteína a su preferencia, jamón, queso, lechuga y tomate", en: "1 protein of your choice, ham, cheese, lettuce, and tomato" },
            },
            {
                title: { es: "Chorriada Especial", en: "Special Chorriada" },
                price: "$23",
                desc: { es: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate", en: "2 proteins of your choice, ham, cheese, egg, lettuce, and tomato" },
            },
            {
                title: { es: "La JhonBeiker", en: "La JhonBeiker" },
                price: "$29",
                desc: { es: "2 proteínas a su preferencia, jamón, queso, huevo, lechuga y tomate", en: "2 proteins of your choice, ham, cheese, egg, lettuce, and tomato" },
            },
        ],
    },
    {
        id: "fast-food",
        title: { es: "Fast Food", en: "Fast Food" },
        icon: "fastfood",
        image: "/images/arepa-rellena.png",
        items: [
            {
                title: { es: "Arepa", en: "Arepa" },
                price: "$18",
                desc: { es: "1 proteína a su elección, jamón, queso, lechuga y tomate", en: "1 protein of your choice, ham, cheese, lettuce, and tomato" },
            },
            {
                title: { es: "Arepón", en: "Arepón" },
                price: "$20",
                desc: { es: "2 proteínas a su elección, jamón, queso, lechuga y tomate", en: "2 proteins of your choice, ham, cheese, lettuce, and tomato" },
            },
            {
                title: { es: "Cabimera Sencilla", en: "Simple Cabimera" },
                price: "$18",
                desc: { es: "Arepa o plátano, proteína, jamón, queso, repollo, tomate, mayonesa y Ketchup", en: "Arepa or plantain, protein, ham, cheese, cabbage, tomato, mayo, and ketchup" },
            },
            {
                title: { es: "Mix Cabimera", en: "Mix Cabimera" },
                price: "$22",
                desc: { es: "2 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate", en: "2 proteins of your choice, ham, cheese, egg, corn, cabbage, and tomato" },
            },
            {
                title: { es: "CabiJhonBeiker", en: "CabiJhonBeiker" },
                price: "$25",
                desc: { es: "3 proteínas a su elección, jamón, queso, huevo, maíz, repollo y tomate", en: "3 proteins of your choice, ham, cheese, egg, corn, cabbage, and tomato" },
            },
            { title: { es: "Cachapa con Queso", en: "Cachapa with Cheese" }, price: "$14" },
            { title: { es: "Cachapa con Proteína", en: "Cachapa with Protein" }, price: "$17" },
        ],
    },
    {
        id: "perros-locos",
        title: { es: "Perros Locos", en: "Crazy Dogs" },
        icon: "fastfood",
        image: "/images/hotdog.png",
        items: [
            {
                title: { es: "Pan Huevo", en: "Egg Bread" },
                price: "$8",
                desc: { es: "Pan, huevo, ripio, queso, ensalada de repollo", en: "Bread, egg, potato sticks, cheese, coleslaw" },
            },
            {
                title: { es: "Sencillos", en: "Simple" },
                price: "$10",
                desc: { es: "Pan, salchicha, ripio, queso, ensalada de repollo", en: "Bread, sausage, potato sticks, cheese, coleslaw" },
                image: "/images/hotdog.png",
            },
            {
                title: { es: "Especial", en: "Special" },
                price: "$15",
                desc: { es: "3 proteínas, jamón, queso, huevo, lechuga y tomate", en: "3 proteins, ham, cheese, egg, lettuce, and tomato" },
            },
            {
                title: { es: "Mega Mix", en: "Mega Mix" },
                price: "$18",
                desc: { es: "2 proteínas, ripio, queso, ensalada de repollo, tocineta", en: "2 proteins, potato sticks, cheese, coleslaw, bacon" },
            },
            {
                title: { es: "PaJhonbeiker", en: "PaJhonbeiker" },
                price: "$26",
                desc: { es: "3 proteínas, ripio, queso, ensalada de repollo, tocineta, huevo", en: "3 proteins, potato sticks, cheese, coleslaw, bacon, egg" },
            },
        ],
    },
    {
        id: "desgranados",
        title: { es: "Desgranado", en: "Corn Bowls" },
        icon: "rice_bowl",
        items: [
            {
                title: { es: "Sencillo", en: "Simple" },
                price: "$8",
                desc: { es: "Maíz, quesos, salsas y huevos de codorniz", en: "Corn, cheeses, sauces, and quail eggs" },
            },
            {
                title: { es: "Especial", en: "Special" },
                price: "$12",
                desc: { es: "Maíz, quesos, salsas, huevos de codorniz y pollo o lomito", en: "Corn, cheeses, sauces, quail eggs, and chicken or steak" },
            },
            {
                title: { es: "Súper Especial", en: "Super Special" },
                price: "$18",
                desc: { es: "3 proteínas, jamón, queso, huevo, lechuga y tomate", en: "3 proteins, ham, cheese, egg, lettuce, and tomato" },
            },
        ],
    },
    {
        id: "especialidades-bebidas",
        title: { es: "Especialidades", en: "Specialties" },
        icon: "local_cafe",
        items: [
            { title: { es: "Panela con Limón", en: "Sugar Cane Refreshment" }, price: "$3.89" },
            { title: { es: "Chicha", en: "Chicha (Sweet Rice & Milk Drink)" }, price: "$7.80" },
            { title: { es: "Cola & Pola", en: "Cola & Pola (Beer & Soda Mix)" }, price: "$2.80" },
            { title: { es: "Mazamorra", en: "Mazamorra (Sweet Corn and Milk Porridge)" }, price: "$5.80", desc: { es: "Servida con bocadillo", en: "Served with guava paste" } },
        ],
    },
    {
        id: "aguas-y-sodas",
        title: { es: "Aguas y Sodas", en: "Water & Sodas" },
        icon: "water_drop",
        image: "/images/sodas-gaseosas.png",
        items: [
            { title: { es: "Agua Embotellada", en: "Bottled Water" }, price: "$1.50" },
            { title: { es: "Frescolita", en: "Frescolita (Venezuelan Red Soda)" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
            { title: { es: "Coca-Cola", en: "Coca-Cola" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
            { title: { es: "Postobón", en: "Postobón (Colombian Fruit Soda)" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
            { title: { es: "Colombiana", en: "Colombiana (Kola Champagne Soda)" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
            { title: { es: "Pony Malta / Malta", en: "Pony Malta / Malta (Malt Beverage)" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
            { title: { es: "Jugos Hit", en: "Jugos Hit (Bottled Fruit Juices)" }, price: "$2.80", image: "/images/sodas-gaseosas.png" },
        ],
    },
    {
        id: "jugos-naturales",
        title: { es: "Jugos Naturales", en: "Natural Juices" },
        icon: "local_drink",
        image: "/images/jugos-naturales.png",
        items: [
            { title: { es: "Mango", en: "Mango" }, price: "$4.60", image: "/images/jugos-naturales.png" },
            { title: { es: "Guayaba", en: "Guava" }, price: "$4.60", image: "/images/jugos-naturales.png" },
            { title: { es: "Guanábana", en: "Soursop" }, price: "$4.60", image: "/images/jugos-naturales.png" },
            { title: { es: "Maracuyá", en: "Passion Fruit" }, price: "$4.60", image: "/images/jugos-naturales.png" },
        ],
    },
];
