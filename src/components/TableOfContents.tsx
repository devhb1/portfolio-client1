'use client'

import { motion } from 'framer-motion'

export default function TableOfContents() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    }

    const sections = [
        { num: '01', title: 'VIDEO EDITING' },
        { num: '05', title: 'T-SHIRT DESIGN' },
        { num: '02', title: 'THUMBNAIL DESIGN' },
        { num: '06', title: 'LOGO & IDENTITY' },
        { num: '03', title: 'BANNER / FLYERS' },
        { num: '04', title: 'PACKAGE DESIGN' },
    ]

    return (
        <motion.section
            className="py-12 sm:py-16 md:py-24 bg-[#f0f0e6]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="section-container">
                <motion.h2
                    variants={itemVariants}
                    className="heading-lg text-accent font-black mb-8 md:mb-12"
                >
                    TABLE OF CONTENTS
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
                    variants={containerVariants}
                >
                    {sections.map((section) => (
                        <motion.div
                            key={section.num}
                            variants={itemVariants}
                            className="border-t-2 border-[#373737] pt-3 md:pt-4 font-bold text-lg md:text-xl"
                        >
                            <span className="min-w-[3rem] inline-block text-accent font-black text-2xl md:text-3xl">
                                {section.num}
                            </span>
                            <span className="text-[#121212]">{section.title}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
