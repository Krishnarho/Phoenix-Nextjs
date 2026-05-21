import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

// const logos = [
//     { name: "Capgemini", path: "/images/logos/capgemini.svg" },
//     { name: "Adani Electricity", path: "/images/logos/adani.png" },
//     { name: "Susten by Mahindra", path: "/images/logos/susten.svg" },
//     { name: "TATA Projects", path: "/images/logos/tata.webp" },
//     { name: "Sterlin & Wilson", path: "/images/logos/sterling-wilson.svg" },
//     { name: "Juniper Green Energy", path: "/images/logos/juniper.webp" },
//     { name: "MAHA Transco", path: "/images/logos/maha-transco.png" },
//     { name: "Essens Renewable", path: "/images/logos/essens.png" },
//     { name: "Socomec", path: "/images/logos/socomec.png" },
//     { name: "Jinko Solar", path: "/images/logos/jinko.png" },
//     { name: "Bharat Petroleum", path: "/images/logos/bp.png" },
//     { name: "Bharat Bijlee", path: "/images/logos/bharatbijlee.png" },
//     { name: "Hindustan Petroleum", path: "/images/logos/hp.png" },
//     { name: "Indian Oil", path: "/images/logos/indian-oil.gif" },
//     { name: "Inox Air Products", path: "/images/logos/inox.png" },
//     { name: "Comacoe", path: "/images/logos/comacoe.gif" },
// ];

const brands = [
    "ABREL SPV 2 Limited (Aditya Birla Renewables)",
    "Bloom Energy Corporation",
    "Bajel Projects Limited",
    "CtrlS Datacenters Ltd.",
    "Elex India Pvt. Ltd.",
    "Enrich Rd Infraprojects Pvt Ltd. (Abnco)",
    "Finolex J-Power Systems Ltd",
    "Sterling & Wilson Pvt. Ltd.",
    "Sunidhi Trade & Logistics Pvt. Ltd.",
    "S D Harpale",
    "SAEE Power Electrical Company",
    "Tungsten Rail and Infra",
    "Techno Power (TechnoHerambha LLP)",
    "Mahalaxmi InfraProjects Pvt. Ltd.",
    "MR Suqare Infra Projects",
    "Essential Industrial Services",
    "KPG Rockwell",
    "Essens Renewable Pvt. Ltd.",
    "Oriano Clean Energy Pvt. Ltd.",
    "Yogiraj Powertech Pvt. Ltd.",
    "Geniusbos Technology India Pvt. Ltd.",
    "Nhava Sheva International Container Terminal Pvt. Ltd.",
    "Dogus - Soma",
    "Enrich Energy Pvt. Ltd.",
    "AMP Energy India Pvt. Ltd.",
    "Chemtrols Solar Pvt. Ltd.",
    "Green En Solutions Pvt. Ltd.",
    "Solzen Urja Pvt. Ltd.",
    "Nidec Industrail Aotomation India Pvt. Ltd.",
    "Mumbai Port Authority",
    "Replus Engitech Pvt. Ltd.",
];

export default function ClientScroll() {
    //const duplicateLogos = [...logos, ...logos];
    return (
        <section id="clients" className="py-16 md:py-24 lg:py-48 bg-gray-300">
            <div className="container">
                <h2 className="text-[clamp(1.875rem,2.5vw,3rem)] font-bold text-center text-balance mb-4 md:mb-8">
                    Our Clients
                </h2>
                <div className="w-full overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    {/* <ul className="flex items-center justify-center md:justify-start animate-marquee space-x-8 md:space-x-16">
                        {duplicateLogos.map(({ path: src, name: alt }, index) => {
                            const isGifOrSvg = /\.(gif|svg)$/i.test(src);
                            return (
                                <li key={index} className="relative h-[100px] w-[200px] flex-shrink-0">
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        sizes="(max-width: 768px) 100px, 200px"
                                        {...(isGifOrSvg ? { unoptimized: true } : {})}
                                        className="object-contain object-center"
                                    />
                                </li>
                            );
                        })}
                    </ul> */}
                    {/* Marquee */}
                    <div className="flex whitespace-nowrap">
                        <div className="animate-marquee flex items-center">
                            {[...brands, ...brands].map((brand, index) => (
                                <div
                                    key={index}
                                    className={`${spaceGrotesk.className} mx-10 text-4xl font-semibold text-stone-600 transition-opacity duration-300 hover:text-stone-800 border-4 border-orange-600 rounded-2xl p-2 hover:border-orange-400`}
                                >
                                    {brand}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
