"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/animations";
import { LINKS } from "@/lib/constants";
import { DownloadBold } from "@/components/ui/PhosphorIcons";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

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
              className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-white tracking-[-1.92px] leading-[1.17]"
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
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-[#171717] rounded-full hover:bg-[#222222] transition-all duration-200"
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
            className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-[32px] overflow-hidden"
          >
            <BubbleBackground
              interactive
              className="absolute inset-0 bg-gradient-to-br from-[#352872] to-[#4d3aa5]"
              colors={{
                first: "110,86,207",
                second: "88,66,195",
                third: "130,106,220",
                fourth: "70,50,170",
                fifth: "150,130,235",
                sixth: "100,76,200",
              }}
            >
              {/* Noise grain overlay */}
              <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "512px 512px",
                }}
              />

              {/* Radial light spot */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(179,168,255,0.15) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 70%, rgba(110,86,207,0.1) 0%, transparent 60%)",
                }}
              />

              {/* Two overlapping phone mockups */}
              <div className="absolute inset-0 flex items-start justify-center pt-[48px] sm:pt-[60px] lg:pt-[72px]">
                <div className="inline-grid">
                  <div className="col-start-1 row-start-1 mt-12 w-[220px] sm:w-[280px] lg:w-[330px] h-[480px] sm:h-[600px] lg:h-[717px] rounded-[24px] sm:rounded-[32px] bg-zinc-800 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] overflow-hidden">
                    <Image
                      src="/images/discover-phone.png"
                      alt="Freighter wallet"
                      width={330}
                      height={717}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-start-1 row-start-1 ml-[180px] sm:ml-[230px] lg:ml-[282px] w-[220px] sm:w-[280px] lg:w-[330px] h-[480px] sm:h-[600px] lg:h-[717px] rounded-[24px] sm:rounded-[32px] bg-zinc-800 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] overflow-hidden">
                    <Image
                      src="/images/discover-phone.png"
                      alt="Freighter wallet"
                      width={330}
                      height={717}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </BubbleBackground>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
