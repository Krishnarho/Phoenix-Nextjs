import Image from "next/image";
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const About = () => {
    return (
        <>
            <section id="about-banner" className="grid [&>*]:[grid-area:1/1] place-items-center w-full h-[50vh]">
                <Image
                    src="/images/about-bg.jpg"
                    alt="about banner"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover w-full max-h-[50vh] object-right z-0"
                />
                <div className="w-full h-full bg-black/30 z-10"></div>
                <div className="container z-20 pt-16 px-4 grid gap-4 mt-16 text-white">
                    <h1 className="text-3xl lg:text-5xl">Discover the World of Phoenix Global</h1>
                    <p>
                        The company leads innovation in smart products and technologies, serving a wide range of
                        industries.
                    </p>
                    <Breadcrumb>
                        <BreadcrumbList className="text-white">
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link
                                        href="/"
                                        className="hover:underline hover:text-white hover:underline-offset-2"
                                    >
                                        Home
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-white">About Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </section>
            <section id="about-content" className="px-2 py-8 lg:py-16">
                <div className="container flex gap-4 flex-col lg:flex-row [&>*]:w-full lg:[&>*]:w-1/2">
                    <div className="flex justify-center items-start">
                        <Image
                            src="/images/about.jpg"
                            alt="About Phoenix Global"
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                            className="object-cover max-h-96 object-ceter"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[clamp(1.875rem,2.5vw,3rem)] mt-8 lg:mt-0 text-balance">
                            Welcome to Phoenix Global
                        </h1>
                        <p className="max-w-[65ch] text-pretty">
                            The zest for entrepreneurship led to the formation of Phoenix Global. With a strong interest
                            in the energy sector, we recognized a growing demand for electrical products across key
                            domains such as Utilities, Renewable Energy, Industrial Infrastructure, Railways, Metro
                            Projects, and Ports. This insight paved a clear and promising path for us to establish our
                            presence in the industry.
                        </p>
                        <p className="max-w-[65ch] text-pretty">
                            Since its inception, Phoenix Global has emerged as a trusted name in the electrical trading
                            and contracting sector, consistently expanding and achieving new milestones. As part of our
                            growth journey, we became an authorized channel partner for{" "}
                            <strong className="text-lg">Raychem RPG Pvt. Ltd.</strong> and also traders for Secure
                            Meters Ltd. and Galaxy Transmissions.
                        </p>
                        <p className="max-w-[65ch] text-pretty">
                            Our core expertise lies in managing turnkey projects, delivering end-to-end solutions that
                            include supply, installation, and commissioning of advanced electrical systems. With an
                            unwavering commitment to quality, reliability, and customer satisfaction, Phoenix Global
                            continues to be a name that clients trust for excellence and long-term value.
                        </p>
                    </div>
                </div>
            </section>
            <section id="about-vision-mission" className="px-2">
                <div className="container [&>p]:max-w-[80ch] text-pretty pb-8">
                    <h2 className="text-2xl md:text-3xl mb-4">About the company</h2>
                    <p>
                        Founded by a second-generation entrepreneur with extensive sales experience in the Indian
                        electrical market, having previously worked with industry leaders such as L&T and Raychem RPG.
                    </p>
                    <p className="my-2">Strong Legacy in India’s Energy Sector.</p>
                    <p>
                        Headquartered in Maharashtra, rapidly expanding across India. Committed to Quality,
                        Sustainability, and Innovation.
                    </p>
                </div>
                <div className="container flex flex-col md:flex-row [&>*]:w-full md:[&>*]:w-1/2">
                    <Image
                        src="/images/vision.jpg"
                        alt="About Phoenix Global"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                        className="object-cover max-h-96 object-ceter"
                    />
                    <div className="shadow-2xl md:shadow-[4px_-4px_10px_rgba(0,0,0,0.25)] dark:shadow-[-4px_-4px_10px_rgba(255,255,255,0.25)] p-4 self-end md:-ml-[10%] bg-background">
                        <h3 className="text-2xl md:text-3xl mb-4">Our Vision</h3>
                        <ul className="space-y-4">
                            <li>Expand across under-penetrated regions.</li>
                            <li>Diversify into Data Centers and Robotics</li>
                            <li>Enhance digital capabilities and warehousing</li>
                        </ul>
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row [&>*]:w-full md:[&>*]:w-1/2 pt-4 md:pt-0 justify-end">
                    <div className="shadow-2xl md:shadow-[-4px_-4px_10px_rgba(0,0,0,0.25)] dark:shadow-[-4px_-4px_10px_rgba(255,255,255,0.25)] p-4 self-end md:-mr-[10%] z-10 bg-background md:text-right">
                        <h3 className="text-2xl md:text-3xl mb-4">Our Mission</h3>
                        <ul className="space-y-4">
                            <li>Enhance customer satisfaction to the highest level in all businesses.</li>
                            <li>Achieve business excellence through a process of continual improvement.</li>
                            <li>Accelerate growth with focus on new products and services introduction.</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/mission.jpg"
                        alt="About Phoenix Global"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                        className="object-cover max-h-96 object-ceter"
                    />
                </div>
                <div className="container flex flex-col md:flex-row [&>*]:w-full md:[&>*]:w-1/2">
                    <Image
                        src="/images/capabilities.jpg"
                        alt="About Phoenix Global"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                        className="object-cover max-h-96 object-ceter"
                    />
                    <div className="shadow-2xl md:shadow-[4px_-4px_10px_rgba(0,0,0,0.25)] dark:shadow-[-4px_-4px_10px_rgba(255,255,255,0.25)] p-4 self-end md:-ml-[10%] bg-background">
                        <h3 className="text-2xl md:text-3xl mb-4">Our Capabilities</h3>
                        <ul className="space-y-4">
                            <li>Technical Consultation.</li>
                            <li>Installation & Maintenance Team</li>
                            <li>Liasioning with B2G Partners</li>
                            <li>Expertise in India's Electrical Value Chain</li>
                            <li>Deep Understanding of Government Approval Cycles</li>
                            <li>Approved by 50+ top EPC consultants</li>
                            <li>Reliable Inventory via Large Warehouses</li>
                        </ul>
                    </div>
                </div>
                <div className="container flex flex-col md:flex-row [&>*]:w-full md:[&>*]:w-1/2 pt-4 md:pt-0 justify-end">
                    <div className="shadow-2xl md:shadow-[-4px_-4px_10px_rgba(0,0,0,0.25)] dark:shadow-[-4px_-4px_10px_rgba(255,255,255,0.25)] p-4 self-end md:-mr-[10%] z-10 bg-background md:text-right">
                        <h3 className="text-2xl md:text-3xl mb-4">Infrastructure & Team</h3>
                        <ul className="space-y-4">
                            <li>Offices: Thane (MH) , Deoria (UP)</li>
                            <li>Warehouses: Bhiwandi (MH), Deoria (UP)</li>
                            <li>Digital Tools: GEM Portal, Govt E-Procurement, Ecom Enabled</li>
                            <li>Team: 5 Account Managers with OEM Liaison Experience</li>
                        </ul>
                    </div>
                    <Image
                        src="/images/infrastructure.png"
                        alt="About Phoenix Global"
                        width={800}
                        height={600}
                        sizes="(max-width: 768px) 100vw, (min-width: 1280px) 640px, 50vw"
                        className="object-cover max-h-96 object-ceter"
                    />
                </div>
            </section>
        </>
    );
};

export default About;
