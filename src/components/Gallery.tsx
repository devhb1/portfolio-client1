'use client'

import { motion } from 'framer-motion'

interface GalleryProps {
    images: string[]
    cols?: 1 | 2 | 3
    title?: string
    subtitle?: string
}

export default function Gallery({ images, cols = 2, title, subtitle }: GalleryProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const colsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    }

    return (
        <motion.section
            className="py-10 sm:py-14 md:py-20 bg-[#f0f0e6]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="section-container">
                {title && (
                    <motion.div variants={itemVariants} className="mb-8 md:mb-12">
                        <h4 className="text-2xl md:text-3xl font-bold text-accent mb-2">{title}</h4>
                        {subtitle && <p className="text-base md:text-lg leading-relaxed">{subtitle}</p>}
                    </motion.div>
                )}

                <motion.div
                    className={`grid ${colsClass[cols]} gap-4 md:gap-6`}
                    variants={containerVariants}
                >
                    {images.map((image, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="overflow-hidden bg-white border border-[#b3b3b3] hover:shadow-lg transition-shadow duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                                className="w-full p-5 md:p-6"
                            >
                                <p className="text-xs uppercase tracking-[0.2em] text-black/55">Project {idx + 1}</p>
                                <h5 className="mt-2 text-xl md:text-2xl font-extrabold text-[#1f1f22]">Creative Showcase</h5>
                                <p className="mt-3 text-sm md:text-base leading-relaxed text-black/75">
                                    This section is now content-first to keep the page clean and avoid irregular
                                    background/image rendering issues.
                                </p>
                                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#e31a1c] font-semibold break-all">
                                    Asset Reference: {image}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
