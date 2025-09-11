export type FeaturedProductsTypes = {
    id: number;
    title: string;
    para: string;
    link: string;
    image: string;
    category: string;
};

export const featuredProducts: FeaturedProductsTypes[] = [
    {
        id: 1,
        title: "Jointing & Termination Kits",
        para: "We hav a complete system of heat shrink & cold applied cable jointing and terminations kits up to 245 kV.",
        link: "#",
        image: "/images/products/raychem-kits.jpg",
        category: "products",
    },
    {
        id: 2,
        title: "Insulating Rubber Gloves",
        para: "Provides electrical protection from 500V AC to 36000V AC working voltage.",
        link: "#",
        image: "/images/products/raychem-gloves.jpg",
        category: "products",
    },
    {
        id: 3,
        title: "Lightning / Surge Arresters",
        para: "Polymeric surge arrester upto 400kv. Surge arresters pass rigorous tests as per IEC 60099-4 Standard.",
        link: "#",
        image: "/images/products/raychem-arresters.jpg",
        category: "products",
    },
    {
        id: 4,
        title: "Conductors",
        para: "Aluminium conductor with steel reinforced & aluminium conductor alloy reinforced for power transmission and distribution.",
        link: "#",
        image: "/images/products/galaxy-conductors.jpg",
        category: "products",
    },
    {
        id: 5,
        title: "Energy",
        para: "Power plays a vital role in our daily lives, powering homes, industries, and transportation. Efficient power generation and consumption are essential for sustainable development and reducing environmental impact.",
        link: "#",
        image: "/images/products/energy.jpg",
        category: "industries & applications",
    },
    {
        id: 6,
        title: "Oil & Gas",
        para: "Major sources of energy, widely used for electricity generation, heating, transportation, and as raw materials in industries. Oil is refined into fuels like gasoline and diesel, while natural gas is often used for cooking, heating, and electricity. Despite their importance, oil and gas contribute significantly to greenhouse gas emissions, prompting a global push toward cleaner, renewable energy sources.",
        link: "#",
        image: "/images/products/oil-gas.jpg",
        category: "industries & applications",
    },
    {
        id: 7,
        title: "Industry",
        para: "Industrial manufacturing is a major growth sector for the Indian economy, driving development and job creation across multiple industries. It encompasses a wide range of companies involved in producing machinery and equipment, electrical and metal products, cement, construction materials, rubber and plastic products, as well as automation technology. This sector plays a crucial role in supporting infrastructure, enhancing industrial output, and positioning India as a global manufacturing hub through initiatives like 'Make in India'.",
        link: "#",
        image: "/images/products/industry.jpg",
        category: "industries & applications",
    },
];
