import Image from "next/image";

const logos = [
    { name: "Capgemini", path: "/images/logos/capgemini.svg" },
    { name: "Adani Electricity", path: "/images/logos/adani.svg" },
    { name: "Susten by Mahindra", path: "/images/logos/susten.svg" },
    { name: "Sterlin & Wilson", path: "/images/logos/sterling-wilson.svg" },
    { name: "Juniper Green Energy", path: "/images/logos/juniper.webp" },
    { name: "MAHA Transco", path: "/images/logos/maha-transco.png" },
    { name: "Essens Renewable", path: "/images/logos/essens.png" },
    { name: "Socomec", path: "/images/logos/socomec.png" },
    { name: "Bharat Bijlee", path: "/images/logos/bharatbijlee.png" },
    { name: "Hindustan Petroleum", path: "/images/logos/hp.png" },
    { name: "Indian Oil", path: "/images/logos/indian-oil.gif" },
    { name: "Inox Air Products", path: "/images/logos/inox.png" },
    { name: "Comacoe", path: "/images/logos/comacoe.gif" },
];

export default function ClientScroll() {
    const duplicateLogos = [...logos, ...logos];
    return (
        <section id="client-logos" className="py-48 bg-gray-300">
            <div className="container">
                <h2 className="text-[clamp(1.875rem,2.5vw,3rem)] font-bold text-center text-balance mb-4 md:mb-8">
                    Our Clients
                </h2>
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {duplicateLogos.map((logo, index) => {
                            const isGif = logo.path.toLowerCase().endsWith(".gif");
                            return (
                                <li key={index} className="mix-blend-hard-light">
                                    <Image
                                        src={logo.path}
                                        alt={logo.name}
                                        width={200}
                                        height={100}
                                        style={{ width: "auto", height: "auto" }}
                                        {...(isGif ? { unoptimized: true } : {})}
                                        className="object-contain object-center"
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
