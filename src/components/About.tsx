'use client'

import { motion } from 'framer-motion'

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    }

    return (
        <motion.section
            className="py-16 sm:py-24 md:py-32 bg-[#f0f0e6]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
        >
            <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div variants={itemVariants} className="order-2 md:order-1">
                    <div className="w-full bg-[#252528] p-6 md:p-8 text-white">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/70">Profile</p>
                        <h3 className="mt-3 text-2xl md:text-3xl font-black leading-tight">Kartik Sihag</h3>
                        <p className="mt-3 text-sm md:text-base text-white/85 leading-relaxed">
                            Editor and designer creating sharp, audience-focused visuals that help content and brands
                            perform better across digital platforms.
                        </p>
                        <div className="mt-5 space-y-2 text-sm md:text-base">
                            <p><span className="font-bold">Experience:</span> 6+ years</p>
                            <p><span className="font-bold">Focus:</span> Creator brands and premium visual systems</p>
                            <p><span className="font-bold">Engagement:</span> Freelance and retainers</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.article
                    variants={itemVariants}
                    className="order-1 md:order-2 bg-[#f7f7ee] border-l-4 border-[#1f1f22] p-6 md:p-8 flex flex-col justify-center"
                >
                    <h2 className="heading-md text-accent mb-2">
                        Kartik <span className="italic">Sihag</span>
                    </h2>
                    <p className="text-xs font-bold tracking-[0.44em] uppercase mb-4">
                        Editor / Designer
                    </p>
                    <p className="leading-relaxed mb-4 text-sm md:text-base">
                        I turn coffee into logos and late-night ideas into pixel-perfect designs. With 6+ years
                        of experience and an obsession with detail, I create visuals that look sharp, feel premium,
                        and help brands stand out.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <a
                            href="tel:+919813723737"
                            className="text-sm md:text-base font-bold text-[#1f1f22] hover:text-accent transition-colors"
                        >
                            +91 98137 23737
                        </a>
                        <a
                            href="mailto:kartiksihagarmy@gmail.com"
                            className="text-sm md:text-base font-bold text-[#1f1f22] hover:text-accent transition-colors"
                        >
                            kartiksihagarmy@gmail.com
                        </a>
                    </div>
                </motion.article>
            </div>
        </motion.section>
    )
}
