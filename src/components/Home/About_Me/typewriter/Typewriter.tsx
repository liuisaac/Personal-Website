import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./CursorBlinker";

export default function Typewriter() {
    const textIndex = useMotionValue(0);
    const texts = [
        " /software developer/ with a foothold in mathematics.",
        " undergrad student at the /University of British Columbia/.",
        " /tech enthusiast, builder, and maker/.",
    ];

    const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().split("/")[0].slice(0, latest)
    );
    const highText = useTransform(rounded, (latest) =>
        baseText
            .get()
            .split("/")[1]
            .slice(0, Math.max(0, latest - baseText.get().split("/")[0].length))
    );
    const displayText2 = useTransform(rounded, (latest) =>
        baseText
            .get()
            .split("/")[2]
            .slice(
                0,
                Math.max(
                    0,
                    latest -
                        (baseText.get().split("/")[0].length +
                            baseText.get().split("/")[1].length)
                )
            )
    );
    const updatedThisRound = useMotionValue(true);

    useEffect(() => {
        animate(count, 100, {
            type: "tween",
            duration: 2,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            },
        });
    }, []);

    return (
        <>
            <motion.span className="inline text-[#3EFFDC]">
                {`I'm a`}
            </motion.span>
            <motion.span className="inline text-[#3EFFDC]">
                {displayText}
            </motion.span>
            <motion.span className="inline text-white bg-[#C348EE]">
                {highText}
            </motion.span>
            <motion.span className="inline text-[#3EFFDC]">
                {displayText2}
            </motion.span>
            <CursorBlinker />
        </>
    );
}
