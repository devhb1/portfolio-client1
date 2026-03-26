'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
                                className="w-full h-auto"
                            >
                                <Image
                                    src={image}
                                    alt={`Gallery item ${idx + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
