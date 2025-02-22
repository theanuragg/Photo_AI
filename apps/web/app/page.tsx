"use client";
import { RainbowButton } from "@/Components/ui/raindow";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AuroraText } from "@/Components/ui/Tittle";
import FAQ from "@/Components/ui/Faq";
import   ImageSlider   from "@/Components/ui/ImageSlider";
import YourComponent from "@/Components/ui/YourComponent";
import Card from "@/Components/ui/Card";
import {MarqueeDemo} from "@/Components/Testimonialcard";
export default function Home() {
  const router = useRouter();
  return (
    <div>
    <div className="flex flex-col items-center justify-start min-h-screen ">
      <div className=" text-white flex flex-col items-center justify-start min-h-screen pt-56">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AuroraText className="text-6xl font-sigmar-regular font-extrabold">
              Vras AI
            </AuroraText>
            <p className="mt-6 text-lg md:text-xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 dark:from-blue-100 dark:via-purple-100 dark:to-indigo-200 font-light tracking-wide">
              Create stunning AI-powered images with just a few clicks.
            </p>
          </motion.div>

          <motion.div
            className="pt-12 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* <SignedIn> */}
            <RainbowButton onClick={() => router.push("/train")}>
              Get Started
            </RainbowButton>

            {/* </SignedIn>
          <SignedOut> */}

            <span className="relative z-10 text-white font-medium">
              {/* <SignInButton /> */}
            </span>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/*   </SignedOut> */}
          </motion.div>
        </div>
      </div>
      
    </div>
    <div className="bg-gray-900"> 
      <ImageSlider />
    </div>
    <div className=" hover:cursor-pointer pt-20">
      <YourComponent />
    </div>
    <div className="pt-20">
      <MarqueeDemo />
    </div>
    <div className="pt-20">
      <FAQ />
    </div>
    </div>
  );
}
