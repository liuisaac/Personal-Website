import { motion, useScroll } from "framer-motion"


const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
    style={{ scaleX: scrollYProgress }}
     className="fixed bottom-0 bg-opacity-100 h-2 text-white z-10 backdrop-blur-sm mb-1">
        {/* Bar */}
        <div className="h-full w-full bg-white z-20 opacity-40 rounded-r-full" ></div>
    </motion.div>
  )
}

export default ProgressBar