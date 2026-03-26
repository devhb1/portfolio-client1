'use client'

import { motion } from 'framer-motion'

interface SectionHeadProps {
    index: string
    title: string
    description: string
    isDark?: boolean
}

export default function SectionHead({
    index,
    title,
    description,
    isDark = false,
}: SectionHeadProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <motion.section
            className={`py-12 sm:py-20 md:py-32 ${isDark ? 'bg-[#1f1f22] text-white border-t-4 border-[#111]' : 'bg-[#f0f0e6]'}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.div className="section-container" variants={containerVariants}>
                <motion.p
                    variants={itemVariants}
                    className="text-5xl sm:text-6xl md:text-7xl font-black mb-2"
                >
                    {index}
                </motion.p>

                <motion.h3
                    variants={itemVariants}
                    className="heading-lg text-accent font-black mb-4"
                >
                    {title}
                </motion.h3>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed max-w-2xl"
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.section>
    )
}
