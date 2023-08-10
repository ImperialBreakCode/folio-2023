'use client'

import { Variants, motion } from "framer-motion";
import FolioMenu from "./FolioMenu";
import { useAppSelector } from "@/state/hooks";

const MenuWrapper = () => {

    const menuIsOpen = useAppSelector((state) => state.menuToggle);

    const mainVariants : Variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.01,
                delayChildren: 0.1
            }
        }
    }

    const blocksVariants : Variants = {
        open: {
            y: '100%',
            transition: {
                type: 'tween',
                duration: 0.5
            }
        },
        closed: {
            y: '0%',
            transition: {
                type: 'tween',
                duration: 0.5,
            }
        }
    };

    const menuVariants : Variants = {
        open: {
            y: '0%',
            transition: {
                delay: 0.1,
                duration: 1,
                ease: 'easeInOut'
            }
        },
        closed: {
            y: '-100%',
            transition: {
                type: 'tween',
                duration: 0.5
            }
        }
    }

    return (
        <div>
            <motion.div
                style={{transform: 'translate(0, -100%)'}}
                initial={'closed'}
                animate={menuIsOpen ? 'open' : 'closed'}
                variants={mainVariants}
                className="flex flex-row fixed top-0 left-0 z-[1999] w-full menu-curtain"
            >

                <motion.div variants={blocksVariants} className="w-[25%] h-[100vh]"></motion.div>
                <motion.div variants={blocksVariants} className="w-[25%] h-[100vh]"></motion.div>
                <motion.div variants={blocksVariants} className="w-[25%] h-[100vh]"></motion.div>
                <motion.div variants={blocksVariants} className="w-[25%] h-[100vh]"></motion.div>

            </motion.div>

            <motion.div
                initial={'closed'}
                animate={menuIsOpen ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed top-0 left-0 w-[100vw] min-h-[100vh] z-[2000]"
            >
                <FolioMenu/>
            </motion.div>
        </div>

    );

}

export default MenuWrapper;