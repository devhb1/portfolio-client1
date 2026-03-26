'use client'

import { motion } from 'framer-motion'

export default function Footer() {
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
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <motion.footer
            className="bg-[#f4f4eb] border-t-4 border-[#1c1c1f] py-10 md:py-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <motion.div variants={itemVariants}>
                        <h5 className="heading-md text-accent font-black mb-3">WORK WITH ME</h5>
                        <motion.div
                            className="space-y-1 text-base md:text-lg font-bold"
                            variants={containerVariants}
                        >
                            <motion.p variants={itemVariants}>Instagram: @ksgenix</motion.p>
                            <motion.p variants={itemVariants}>
                                E-mail:{' '}
                                <a
                                    href="mailto:kartiksihagarmy@gmail.com"
                                    className="text-accent hover:underline"
                                >
                                    kartiksihagarmy@gmail.com
                                </a>
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Phone:{' '}
                                <a href="tel:+919813723737" className="text-accent hover:underline">
                                    +91 98137 23737
                                </a>
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.button
                        variants={itemVariants}
                        onClick={scrollToTop}
                        className="text-lg md:text-xl font-bold text-[#111] hover:text-accent transition-colors"
                    >
                        Back to top ↑
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    )
}
