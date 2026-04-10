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

export function HeroSection() {
  return (
    <section>
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="flex flex-col gap-16">
          {/* Heading + CTA */}
          <div className="flex flex-col gap-8 max-w-[624px]">
            <motion.h1
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              className="shimmer-text text-3xl sm:text-4xl lg:text-[48px] font-medium text-white tracking-[-1.92px] leading-[1.17]"
            >
              Browse, connect, and use Stellar apps —all in one place
            </motion.h1>
            <motion.div
              variants={fadeSlideUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
            >
              <a
                href={LINKS.chromeExtension}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-200"
              >
                <DownloadBold size={16} className="shrink-0 opacity-50" />
                Download Freighter
              </a>
            </motion.div>
          </div>

          {/* Purple gradient container with phone mockups */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.25 }}
            className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-[16px] overflow-hidden"
          >
            {/* LiquidChrome background */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.4, 0.2, 0.9]}
                speed={0.8}
                amplitude={0.1}
                mouseReact
              />
            </div>

            {/* Two overlapping phone mockups */}
            <div className="absolute inset-0 z-10 flex items-start justify-center pt-[48px] sm:pt-[60px] lg:pt-[72px]">
              <div className="inline-grid">
                <motion.div
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="col-start-1 row-start-1 mt-12 w-[220px] sm:w-[280px] lg:w-[330px] h-[480px] sm:h-[600px] lg:h-[717px] rounded-[24px] bg-zinc-800 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] overflow-hidden mockup-hover"
                >
                  <Image
                    src="/images/discover-phone.png"
                    alt="Freighter wallet"
                    width={330}
                    height={717}
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 330px"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 0.65, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                  className="col-start-1 row-start-1 ml-[120px] sm:ml-[230px] lg:ml-[282px] w-[220px] sm:w-[280px] lg:w-[330px] h-[480px] sm:h-[600px] lg:h-[717px] rounded-[24px] bg-zinc-800 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] overflow-hidden mockup-hover"
                >
                  <Image
                    src="/images/discover.png"
                    alt="Freighter discover"
                    width={330}
                    height={717}
                    priority
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 330px"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
