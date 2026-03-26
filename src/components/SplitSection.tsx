'use client'

import { motion } from 'framer-motion'

export default function SplitSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0,
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
            className="py-12 sm:py-20 md:py-28 bg-[#f0f0e6]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <motion.article
                    variants={itemVariants}
                    className="border-t-3 border-[#2f2f2f] pt-4 md:pt-6"
                >
                    <h4 className="text-2xl md:text-3xl font-bold text-accent uppercase mb-4">
                        LINK TO FEW OF MY WORKS
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed mb-6">
                        It&apos;s not really possible to include all videos directly in this page, so here&apos;s a direct
                        portfolio link where you can check out more work.
                    </p>
                    <a
                        href="https://drive.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-2xl md:text-3xl font-black text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        VIDEO PORTFOLIO
                    </a>
                </motion.article>

                <motion.article
                    variants={itemVariants}
                    className="border-t-3 border-[#2f2f2f] pt-4 md:pt-6"
                >
                    <h4 className="text-2xl md:text-3xl font-bold text-accent uppercase mb-4">
                        CLIENTS I&apos;M WORKING FOR
                    </h4>
                    <ul className="space-y-4 text-base md:text-lg leading-relaxed">
                        <li>
                            <strong className="text-accent">@snarkbaitpod</strong> — Long-form podcast edits with
                            structure, color work, and retention-focused pacing.
                        </li>
                        <li>
                            <strong className="text-accent">@chrisryanfitness</strong> — Long + short form edits,
                            motion graphics, and high-impact fitness cuts.
                        </li>
                    </ul>
                </motion.article>
            </div>
        </motion.section>
    )
}
