'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroProps {
    onViewWork: () => void
}

export default function Hero({ onViewWork }: HeroProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#1f1f22] flex items-center justify-center">
            {/* Background image with overlay */}
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/assets/shot-01.png"
                    alt="Hero background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,31,67,0.72)] to-[rgba(0,21,67,0.76)]" />

            {/* Content */}
            <motion.div
                className="relative z-10 section-container text-center text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
                >
                    Graphic Designer &amp; Video Editor
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="heading-xl text-[#e31a1c] font-black mb-2"
                >
                    PORTFOLIO
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider mb-8"
                >
                    KARTIK SIHAG
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <button
                        onClick={onViewWork}
                        className="btn-outline"
                    >
                        View Work
                    </button>
                    <a
                        href="/Kartik Sihag Portfolio (1).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        Open PDF
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}
