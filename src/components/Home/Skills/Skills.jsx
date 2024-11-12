import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Skills = () => {
    const [project, setProject] = useState("Websites");
    const [technology, setTechnology] = useState("React");

    const projects     = ["Websites", "Experiences", "Websites", "Applications", "Macros", "Robots", "Websites", "ML Models"]
    const technologies = ["React", "Three.js", "Node.js", "Java", "Python", "C++", "MongoDB", "Python"]

    const projectsIndex = useMotionValue(0);
    const baseText = useTransform(projectsIndex, (latest) => projects[latest] || "");

    const updatedThisRound = useMotionValue(true);
    let count = 0;

    useEffect(() => {
        if (count >= 100) {
            
        }
    }, []);

  return (
    <div className='flex flex-row justify-center items-center h-full w-full bg-[#F7F9F9] text-black gap-5 text-7xl font-roboto font-semibold'>
        <motion.span className='text-[#4d4fda]'>
            {baseText.get()}
        </motion.span>
        <span className='text-[#252525]'>
            using
        </span>
        <motion.span className='text-[#4d4fda]'>
            {technology}
        </motion.span>
    </div>
  )
}

export default Skills