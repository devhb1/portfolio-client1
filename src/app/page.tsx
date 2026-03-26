'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import BrandLogo from '@/components/BrandLogo'

const services = [
    {
        id: '01',
        title: 'Video Editing',
        desc: 'Retention-first edits for podcasts, fitness, and content brands.',
    },
    {
        id: '02',
        title: 'Thumbnail Design',
        desc: 'Scroll-stopping visual hooks built to improve CTR.',
    },
    {
        id: '03',
        title: 'Banner / Flyers',
        desc: 'Promotional creatives with bold hierarchy and clean composition.',
    },
    {
        id: '04',
        title: 'Package Design',
        desc: 'Shelf-ready packaging systems that feel premium and clear.',
    },
    {
        id: '05',
        title: 'T-Shirt Design',
        desc: 'Streetwear-style visuals that merge identity and attitude.',
    },
    {
        id: '06',
        title: 'Logo & Identity',
        desc: 'Distinct brand marks and identity kits built for recognition.',
    },
]

const featuredProjects = [
    {
        title: 'Thumbnail Systems',
        category: 'YouTube Growth Design',
        image: '/assets/shot-05.png',
        points: ['High-contrast faces + typography', 'CTR-focused concept direction'],
    },
    {
        title: 'Brand Banner Kits',
        category: 'Social Media Presence',
        image: '/assets/shot-10.png',
        points: ['Unified header + channel visuals', 'Cross-platform adaptable assets'],
    },
    {
        title: 'Packaging Concepts',
        category: 'Product Storytelling',
        image: '/assets/shot-12.png',
        points: ['Mood-led identity language', 'Print-ready presentation scenes'],
    },
    {
        title: 'Logo Identity Boards',
        category: 'Brand Identity',
        image: '/assets/shot-16.png',
        points: ['Logo applications in real contexts', 'Color/typography consistency'],
    },
]

const processSteps = [
    {
        title: 'Research & Direction',
        description: 'I study audience, competitors, and the platform context to define a visual direction that performs.',
    },
    {
        title: 'Design & Iteration',
        description: 'I craft multiple concepts, refine hierarchy, and tune typography/color for a premium final output.',
    },
    {
        title: 'Delivery & System',
        description: 'You get production-ready assets plus reusable rules to keep all future visuals consistent.',
    },
]

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const savedMode = window.localStorage.getItem('ks-theme')
        if (savedMode === 'dark') setDarkMode(true)
    }, [])

    const toggleMode = () => {
        const nextMode = !darkMode
        setDarkMode(nextMode)
        window.localStorage.setItem('ks-theme', nextMode ? 'dark' : 'light')
    }

    const baseBg = darkMode ? 'bg-[#0e1014] text-[#e8e8e8]' : 'bg-[#f0f0e6] text-[#111]'
    const headerBg = darkMode
        ? 'bg-[#101319]/85 border-white/10'
        : 'bg-[#f0f0e6]/90 border-black/10'
    const cardBg = darkMode ? 'bg-white/5 border-white/15' : 'bg-white border-black/10'
    const mutedText = darkMode ? 'text-white/70' : 'text-black/60'

    return (
        <main className={`${baseBg} transition-colors duration-300`}>
            <header className={`sticky top-0 z-40 border-b backdrop-blur transition-colors duration-300 ${headerBg}`}>
                <div className="mx-auto w-[92%] max-w-4xl py-2.5 md:py-3 flex items-center justify-between gap-3 md:gap-5">
                    <BrandLogo dark={!darkMode} header />
                    <nav className="hidden md:flex items-center gap-5 text-sm font-semibold">
                        <a href="#services" className="hover:text-[#e31a1c] transition">Services</a>
                        <a href="#work" className="hover:text-[#e31a1c] transition">Work</a>
                        <a href="#process" className="hover:text-[#e31a1c] transition">Process</a>
                        <a href="#contact" className="hover:text-[#e31a1c] transition">Contact</a>
                    </nav>
                    <button
                        onClick={toggleMode}
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={darkMode ? 'Light mode' : 'Dark mode'}
                        className={`h-9 w-9 inline-flex items-center justify-center border transition ${darkMode ? 'border-white/30 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
                    >
                        {darkMode ? (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M2 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M19 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4.93 4.93L7.05 7.05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16.95 16.95L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16.95 7.05L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M4.93 19.07L7.05 16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path
                                    d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            <section className="relative overflow-hidden bg-[#1f1f22] text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

                <div className="section-container relative z-10 py-14 md:py-20 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
                    <div>
                        <BrandLogo />
                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 text-xs md:text-sm tracking-[0.22em] uppercase font-semibold"
                        >
                            Graphic Designer & Video Editor
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[2.6rem] leading-[0.9] md:text-[6.2rem] font-black text-[#e31a1c] mt-4"
                        >
                            VISUALS
                            <br />
                            THAT SELL
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 max-w-2xl text-sm md:text-lg text-zinc-100/90"
                        >
                            I help creators and brands look premium online with bold design systems, click-focused
                            thumbnails, high-retention edits, and identity assets that people remember.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28 }}
                            className="mt-8 flex flex-wrap gap-3"
                        >
                            <a href="#work" className="px-6 py-3 bg-[#e31a1c] font-bold hover:bg-red-700 transition">
                                Explore Work
                            </a>
                            <a
                                href="/Kartik%20Sihag%20Portfolio%20.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-white font-bold hover:bg-white hover:text-black transition"
                            >
                                View PDF Portfolio
                            </a>
                        </motion.div>
                    </div>

                    <motion.aside
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="bg-white/10 border border-white/20 p-5"
                    >
                        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Quick Snapshot</p>
                        <div className="mt-4 space-y-3 text-sm">
                            <p><span className="text-[#ff5f61] font-bold">6+ Years</span> in editing + design</p>
                            <p><span className="text-[#ff5f61] font-bold">6 Core Services</span> for creator brands</p>
                            <p><span className="text-[#ff5f61] font-bold">Fast Turnaround</span> with quality control</p>
                            <p><span className="text-[#ff5f61] font-bold">Freelance / Retainer</span> availability</p>
                        </div>
                        <div className="mt-5 border border-white/15 p-4 bg-black/20">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/65">Primary Focus</p>
                            <p className="mt-2 text-sm text-white/90 leading-relaxed">
                                Premium visuals for creators and brands: thumbnails, edits, identity systems,
                                and launch-ready design assets.
                            </p>
                        </div>
                    </motion.aside>
                </div>
            </section>

            <section className="section-container py-14 md:py-20 grid md:grid-cols-[1fr_1.4fr] gap-8 items-start">
                <div className={`rounded-sm border p-6 md:p-8 ${darkMode ? 'border-white/15 bg-white/5' : 'border-black/10 bg-white'}`}>
                    <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${mutedText}`}>Profile</p>
                    <h3 className="mt-3 text-2xl md:text-3xl font-black leading-tight">
                        Kartik Sihag
                    </h3>
                    <p className={`mt-3 text-sm md:text-base leading-relaxed ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                        Editor & designer focused on building clean, high-performing visual systems for digital brands.
                    </p>
                    <div className="mt-5 space-y-2 text-sm md:text-base">
                        <p><span className="font-bold">Experience:</span> 6+ years</p>
                        <p><span className="font-bold">Speciality:</span> Content-first brand visuals</p>
                        <p><span className="font-bold">Mode:</span> Freelance / Retainer</p>
                    </div>
                </div>
                <div>
                    <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${mutedText}`}>About</p>
                    <h2 className="text-4xl md:text-6xl font-black leading-[0.92] mt-2">
                        Design That Feels
                        <span className="text-[#e31a1c]"> Premium</span>
                    </h2>
                    <p className={`mt-5 text-base md:text-lg leading-relaxed ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                        With 6+ years of experience, I blend strategy and design to create visuals that look sharp and
                        perform. From YouTube thumbnails to full brand identity systems, every piece is built with
                        intent, clarity, and audience impact.
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm md:text-base font-semibold">
                        <a href="mailto:kartiksihagarmy@gmail.com" className="hover:text-[#e31a1c]">kartiksihagarmy@gmail.com</a>
                        <a href="tel:+919813723737" className="hover:text-[#e31a1c]">+91 98137 23737</a>
                        <p>@ksgenix</p>
                        <p>Available for freelance / retainers</p>
                    </div>
                </div>
            </section>

            <section id="services" className="bg-[#1f1f22] text-white py-14 md:py-20">
                <div className="section-container">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">What I Do</p>
                    <h3 className="text-4xl md:text-6xl font-black mt-3 text-[#e31a1c]">Core Services</h3>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((item) => (
                            <motion.article
                                key={item.id}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -3 }}
                                className="border border-white/20 bg-white/5 p-5"
                            >
                                <p className="text-sm text-white/60 font-semibold">{item.id}</p>
                                <h4 className="text-2xl font-bold mt-1">{item.title}</h4>
                                <p className="mt-3 text-sm text-white/80 leading-relaxed">{item.desc}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="work" className="section-container py-14 md:py-20">
                <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${mutedText}`}>Selected Work</p>
                <h3 className="text-4xl md:text-6xl font-black mt-3">Case Study Style Portfolio</h3>
                <div className="mt-10 grid md:grid-cols-2 gap-6">
                    {featuredProjects.map((project) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`${cardBg} overflow-hidden group transition-colors duration-300`}
                        >
                            <div className={`p-5 md:p-6 ${darkMode ? 'group-hover:bg-white/10' : 'group-hover:bg-[#faf9f3]'} transition`}>
                                <p className={`text-xs uppercase tracking-[0.2em] ${darkMode ? 'text-white/55' : 'text-black/55'}`}>{project.category}</p>
                                <h4 className="text-2xl font-extrabold mt-2">{project.title}</h4>
                                <ul className={`mt-4 space-y-2 text-sm ${darkMode ? 'text-white/75' : 'text-black/75'}`}>
                                    {project.points.map((point) => (
                                        <li key={point} className="flex gap-2">
                                            <span className="text-[#e31a1c] font-black">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="process" className="section-container py-6 md:py-8 pb-16 md:pb-20">
                <p className={`text-xs uppercase tracking-[0.22em] font-semibold ${mutedText}`}>How I Work</p>
                <h3 className="text-4xl md:text-6xl font-black mt-3">Simple, Clear Process</h3>
                <div className="mt-8 grid md:grid-cols-3 gap-5">
                    {processSteps.map((step, index) => (
                        <motion.article
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="bg-[#111] text-white p-5 border-t-4 border-[#e31a1c]"
                        >
                            <p className="text-xs text-white/60 uppercase tracking-[0.2em]">Step {index + 1}</p>
                            <h4 className="mt-2 text-2xl font-bold text-[#ff5f61]">{step.title}</h4>
                            <p className="mt-3 text-sm text-white/80 leading-relaxed">{step.description}</p>
                        </motion.article>
                    ))}
                </div>
            </section>

            <section id="contact" className="bg-[#1f1f22] text-white py-14 md:py-20">
                <div className="section-container grid lg:grid-cols-[1.15fr_1fr] gap-10 items-start">
                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/70 font-semibold">Clients</p>
                        <h3 className="text-4xl md:text-6xl font-black mt-3 text-[#e31a1c]">Brands I Work With</h3>
                        <div className="mt-6 space-y-4 text-sm md:text-base text-white/85 leading-relaxed">
                            <p>
                                <span className="font-bold text-white">@snarkbaitpod</span> — Long-form podcast editing
                                with structured cuts, grading, and retention optimization.
                            </p>
                            <p>
                                <span className="font-bold text-white">@chrisryanfitness</span> — High-energy long +
                                short form fitness content with motion-enhanced storytelling.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/20 p-6">
                        <h4 className="text-2xl font-bold">Let’s Build Your Visual Identity</h4>
                        <p className="mt-3 text-sm text-white/80 leading-relaxed">
                            Need a consistent brand look across content, social, and marketing creatives? I can help you
                            design and execute a complete visual system.
                        </p>
                        <div className="mt-6 flex flex-col gap-2 text-sm font-semibold">
                            <a href="mailto:kartiksihagarmy@gmail.com" className="hover:text-[#ff4a4c]">kartiksihagarmy@gmail.com</a>
                            <a href="tel:+919813723737" className="hover:text-[#ff4a4c]">+91 98137 23737</a>
                            <a href="https://instagram.com/ksgenix" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4a4c]">
                                Instagram: @ksgenix
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
