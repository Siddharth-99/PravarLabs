"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

interface LogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

export function Logo({ className, width = 45, height = 50, alt = "PravarAi Labs" }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const src = resolvedTheme === "light" ? "/images/light logo.png" : "/images/light logo.png"

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}
