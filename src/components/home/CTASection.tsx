"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { DownloadBold } from "@/components/ui/PhosphorIcons";

export function CTASection() {
  return (
    <section>
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {/* CTA card */}
            <BubbleBackground
              interactive
              className="bg-gradient-to-br from-[#1a1428] to-[#2a1f50] rounded-[16px]"
              colors={{
                first: "110,86,207",
                second: "88,66,195",
                third: "130,106,220",
                fourth: "70,50,170",
                fifth: "150,130,235",
                sixth: "100,76,200",
              }}
            >
            <div className="relative z-10 flex flex-col items-center justify-center p-8 gap-8 h-[480px]">
              {/* Logo */}
              <Image
                src="/images/logo.svg"
                alt="Freighter"
                width={64}
                height={64}
                className="size-16"
              />

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-white tracking-[-1.92px] text-center leading-[1.17]">
                Try Freighter today
              </h2>

              {/* Download buttons */}
              <div className="flex flex-col gap-3 w-[280px]">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={LINKS.iosApp}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors whitespace-nowrap"
                  >
                    <DownloadBold size={16} className="shrink-0 opacity-50" />
                    iOS
                  </a>
                  <a
                    href={LINKS.androidApp}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors whitespace-nowrap"
                  >
                    <DownloadBold size={16} className="shrink-0 opacity-50" />
                    Android
                  </a>
                </div>
                <a
                  href={LINKS.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 w-full px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                >
                  <DownloadBold size={16} className="opacity-50" />
                  Browser
                </a>
              </div>
            </div>
            </BubbleBackground>
        </motion.div>
      </div>
    </section>
  );
}
