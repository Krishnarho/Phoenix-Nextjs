import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SendIcon } from "lucide-react";

function Footer() {
    return (
        <section id="footer">
            <footer className="relative w-full text-white">
                <div className="absolute inset-0 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-orange-800/40 z-10" />

                <div className="container relative z-20 p-8">
                    <h3 className="text-center text-lg md:text-2xl font-semibold text-white mb-8">
                        Stay in touch for updates
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4">
                        <form className="grid gap-4">
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="email">Sign Up for Newsletter </Label>
                                <div className="flex gap-2">
                                    <Input type="email" id="email" placeholder="Enter you email address" />
                                    <Button type="submit" variant="outline">
                                        <SendIcon />
                                    </Button>
                                </div>
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-2">
                                <Label htmlFor="phone">Sign Up for Subscription</Label>
                                <div className="flex gap-2">
                                    <Input type="tel" id="phone" placeholder="Enter you mobile number" />
                                    <Button type="submit" variant="outline">
                                        <SendIcon />
                                    </Button>
                                </div>
                            </div>
                            <p className="">
                                By submitting this form, you agree to receiving communications via SMS/Messages from us.
                            </p>
                        </form>
                        <div className="border-t lg:border-t-0 lg:border-l border-ring flex flex-col lg:items-end gap-4">
                            <h4 className="font-semibold text-white pt-4 lg:pt-0">Follow us on</h4>
                            <ul className="flex gap-4 items-center">
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="icon icon-tabler icons-tabler-filled icon-tabler-brand-twitter"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"></a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-4 border-t border-ring z-20 relative">
                    <p className="text-center ">@ 2025 Phoenix Global Private Limited. All Rights Reserved</p>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
