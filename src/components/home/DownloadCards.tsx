"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/animations";
import { RoundedQR } from "@/components/ui/RoundedQR";
import { LINKS } from "@/lib/constants";
import Image from "next/image";
import { AppleLogoBold, AndroidLogoBold } from "@/components/ui/PhosphorIcons";

const Iridescence = dynamic(
  () => import("@/components/ui/Iridescence/Iridescence"),
  { ssr: false }
);

export function DownloadCards() {
  return (
    <section>
      <div className="max-w-[1024px] mx-auto px-6">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* For mobile */}
          <div className="card-hover relative h-[400px] md:h-[480px] rounded-[32px] bg-bg-elevated overflow-hidden p-8 flex flex-col">
            {/* Dither background */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.4, 0.2, 0.9]}
                speed={0.8}
                amplitude={0.1}
                mouseReact
              />
            </div>

            <div className="flex items-center justify-between relative z-10">
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.96px]">
                For mobile
              </h3>
              <div className="flex gap-2">
                <a
                  href={LINKS.iosApp}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-white bg-bg-tertiary rounded-full hover:bg-bg-hover transition-colors"
                >
                  <AppleLogoBold size={14} className="opacity-70" />
                  Get iOS
                </a>
                <a
                  href={LINKS.androidApp}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 text-sm font-medium text-white bg-bg-tertiary rounded-full hover:bg-bg-hover transition-colors"
                >
                  <AndroidLogoBold size={14} className="opacity-70" />
                  Get Android
                </a>
              </div>
            </div>

            {/* Phone mockup placeholder */}
            <div className="absolute bottom-0 right-8 w-[220px] md:w-[330px] h-[500px] md:h-[717px] rounded-[4px] bg-zinc-300/10 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] z-[1]" />
            {/* QR code linking to freighter.app */}
            <div className="absolute bottom-8 left-8 z-10 size-[120px] rounded-[16px] bg-white p-2.5 shadow-lg">
              <RoundedQR value="https://www.freighter.app" size={100} />
            </div>
          </div>

          {/* For extension */}
          <div className="card-hover relative h-[400px] md:h-[480px] rounded-[32px] bg-bg-elevated overflow-hidden p-8 flex flex-col">
            {/* Dither background */}
            <div className="absolute inset-0 z-0">
              <Iridescence
                color={[0.4, 0.2, 0.9]}
                speed={0.8}
                amplitude={0.1}
                mouseReact
              />
            </div>

            <div className="flex items-center justify-between relative z-10">
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-[-0.96px]">
                For browser
              </h3>
              <a
                href={LINKS.chromeExtension}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-white bg-bg-tertiary rounded-full hover:bg-bg-hover transition-colors"
              >
                <span className="flex items-center -space-x-1.5">
                  <Image src="/images/browser-chrome.png" alt="Chrome" width={18} height={18} className="size-[18px] rounded-full ring-1 ring-bg-tertiary" />
                  <Image src="/images/browser-firefox.png" alt="Firefox" width={18} height={18} className="size-[18px] rounded-full ring-1 ring-bg-tertiary" />
                  <Image src="/images/browser-brave.png" alt="Brave" width={18} height={18} className="size-[18px] rounded-full ring-1 ring-bg-tertiary" />
                </span>
                Get extension
              </a>
            </div>

            {/* Browser mockup placeholder */}
            <div className="absolute bottom-0 right-8 w-[450px] md:w-[677px] h-[500px] md:h-[717px] overflow-hidden rounded-[32px] bg-zinc-300/10 shadow-[0px_24px_24px_4px_rgba(0,0,0,0.25)] z-[1]">
              <div className="absolute left-[292px] top-[27px] w-[360px] h-[480px] rounded-[32px] bg-bg-elevated" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
