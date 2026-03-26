import Image from 'next/image'

interface BrandLogoProps {
    dark?: boolean
    compact?: boolean
    header?: boolean
}

export default function BrandLogo({ dark = false, compact = false, header = false }: BrandLogoProps) {
    const fullWidth = header ? 138 : compact ? 188 : 230
    const fullHeight = header ? 38 : compact ? 52 : 64
    const logoSrc = dark ? '/logo-ks.svg' : '/logo-ks.svg'
    const sizeClass = header
        ? 'h-auto w-[138px] md:w-[152px]'
        : compact
            ? 'h-auto w-[188px] md:w-[210px]'
            : 'h-auto w-[210px] md:w-[230px]'

    return (
        <div className="inline-flex items-center">
            <Image
                src={logoSrc}
                alt="Kartik Sihag Studio"
                width={fullWidth}
                height={fullHeight}
                className={sizeClass}
                priority={compact}
            />
        </div>
    )
}
