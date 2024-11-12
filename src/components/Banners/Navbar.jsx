import React, { useState, useEffect } from "react";
import logo from "../../assets/Banner/blogo.svg";
import hamburger from "../../assets/Banner/hamburger.svg";
import { navLinks } from "./navLinks";
import { Link, useLocation } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
    const [transition, setTransition] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menu, setMenu] = useState(false);
    const [textWhite, setTextWhite] = useState(false);

    const location = useLocation()
    const [active, setActive] = useState(String(location.pathname));
  
    useEffect(() => {
      setActive(`/${String(location.pathname).split("/")[1]}`)
    })

    const { scrollY } = useScroll();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 10);

        return () => clearTimeout(timeout);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 300) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            {/* <nav className="z-50 bg-black flex justify-between items-center fixed top-0 left-0 lg:hidden h-20 w-3/4">
                <div className="overflow-hidden pt-4 flex justify-start font-poppins my-auto h-20">
                    <Link
                        className={`transition duration-[2000ms] ${
                            transition
                                ? `opacity-100 -translate-y-3`
                                : `opacity-0 translate-y-8`
                        } transition ease-in-out`}
                        to="/"
                    >
                        {" "}
                        <img
                            className="object-contain h-full sm:ml-8 ml-2"
                            src={logo}
                            alt="CBX Partners Logo"
                        />{" "}
                    </Link>
                </div>
                <div>
                    <img
                        className="object-contain mr-12 h-8 hover:cursor-pointer opacity-80"
                        src={hamburger}
                        alt="CBX Partners Logo"
                        onClick={() => setMenu(!menu)}
                    />
                </div>
            </nav> */}
            {/* <div
                className={`fixed top-0 left-0 w-3/4 h-screen bg-[#161616] z-40 ${
                    menu ? "bg-opacity-70 backdrop-blur-sm pointer pointer-events-auto" : "bg-opacity-0 pointer-events-none"
                } transition duration-700 ease-in-out`}
            >
                <ul className="list-none flex flex-col justify-end items-left ml-5 mt-32 gap-10">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins px-4 transition ${
                                menu ? `opacity-100 translate-y-0` : `opacity-0`
                            } transition duration-700 ease-in-out`}
                            style={{
                                transitionDelay: menu
                                    ? `${String(166 * index)}ms`
                                    : `100ms`,
                            }}
                        >
                            <Link
                                className={`text-4xl tracking-widest font-thin ${
                                    textWhite ? "text-white" : "text-[#bababa]"
                                }`}
                                onClick={()=>setMenu(!menu)}
                                to={`/${nav.id}`}
                            >
                                {nav.title.toLocaleUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div> */}
            <nav className="flex flex-row items-center justify-center w-screen">
                <motion.nav
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: "-100%" },
                    }}
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="z-50 lg:flex justify-between items-center navbar fixed top-0 hidden mt-4 rounded-xl border-2 border-white border-opacity-20 backdrop-blur-sm h-14 bg-black bg-opacity-40"
                >
                    <div className="overflow-hidden pt-4 flex justify-start font-poppins my-auto h-16">
                        <Link
                            className={`transition duration-[2000ms] ${
                                transition
                                    ? `opacity-100`
                                    : `opacity-0`
                            } transition ease-in-out -translate-y-3`}
                            to=""
                        >
                            {" "}
                            <img
                                className="object-contain h-full sm:ml-8 mx-2 mr-16"
                                src={logo}
                                alt="Personal Logo"
                            />{" "}
                        </Link>
                    </div>
                    <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-5 -mt-4">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins px-6 transition ${
                                    transition
                                        ? `opacity-100 translate-y-0`
                                        : `opacity-0 translate-y-7`
                                } transition duration-1000 ease-in-out`}
                                style={{
                                    transitionDelay: `${String(166 * index)}ms`,
                                }}
                            >
                                <Link
                                    className={`hover:opacity-100 ${(active == nav.id)?"opacity-100":"opacity-60"} transition-opacity duration-300 ease-in-out text-white font-bold font-inconsolata text-3xl drop-shadow-[0_2px_5px_rgba(255,255,255,0.4)]  `}
                                    to={`${nav.id}`}
                                >
                                    {nav.title}
                                    
                                </Link>
                                <div className={`-mt-4 h-1 ${(active == nav.id)?"w-full":"w-0"} bg-[#3EFFDC] opacity-100 z-50`}/>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            </nav>
        </>
    );
};

export default Navbar;
