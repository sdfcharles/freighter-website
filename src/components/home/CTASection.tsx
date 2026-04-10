"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { DownloadBold } from "@/components/ui/PhosphorIcons";

const Iridescence = dynamic(
  () => import("@/components/ui/Iridescence/Iridescence"),
  { ssr: false }
);

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
          <div className="relative rounded-[16px] overflow-hidden">
            {/* LiquidChrome background */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.4, 0.2, 0.9]}
                speed={0.8}
                amplitude={0.1}
                mouseReact
              />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center p-8 gap-8 h-[360px] sm:h-[420px] lg:h-[480px]">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              >
                <Image
                  src="/images/logo.svg"
                  alt="Freighter"
                  width={64}
                  height={64}
                  className="size-16"
                />
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-white tracking-[-1.92px] text-center leading-[1.17]"
              >
                Try Freighter today
              </motion.h2>

              {/* Download buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="flex gap-3"
              >
                <a
                  href={LINKS.iosApp}
                  className="inline-flex items-center justify-center gap-1 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors whitespace-nowrap"
                >
                  <DownloadBold size={16} className="shrink-0 opacity-50" />
                  iOS
                </a>
                <a
                  href={LINKS.androidApp}
                  className="inline-flex items-center justify-center gap-1 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors whitespace-nowrap"
                >
                  <DownloadBold size={16} className="shrink-0 opacity-50" />
                  Android
                </a>
                <a
                  href={LINKS.chromeExtension}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-6 py-3 text-sm font-medium text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors whitespace-nowrap"
                >
                  <DownloadBold size={16} className="shrink-0 opacity-50" />
                  Browser
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
