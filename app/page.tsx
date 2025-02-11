'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaLightbulb, FaRocket, FaChartLine, FaUsers, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white font-sans overflow-hidden relative">
      {/* Spotlight Component */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Spotlight />
      </div>

      {/* Navbar */}
      <nav className="container mx-auto p-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold text-blue-400 flex items-center">
          <FaRobot className="mr-2" />
          AI GenX
        </div>
        <div className="flex space-x-6">
          <a href="#features" className="hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="/dashboard/billing" className="hover:text-blue-400 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">
            Testimonials
          </a>
          <Link
            href="/dashboard"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-20 text-center relative z-10"
      >
        <h1 className="text-6xl font-bold mb-6">
          Revolutionize Content Creation with{" "}
          <span className="text-blue-400">AI GenX</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Generate high-quality content in seconds with our cutting-edge AI technology.
        </p>
        <Link href="/dashboard">
          <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Get Started
          </Button>
        </Link>
      </motion.div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-full rounded-2.5xl border border-gray-800 p-2 md:rounded-3xl md:p-3"
          >
            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-gray-700 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  <FaRocket className="h-4 w-4 text-gray-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                    Fast & Efficient
                  </h3>
                  <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-300">
                    Save time with instant content generation and seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-full rounded-2.5xl border border-gray-800 p-2 md:rounded-3xl md:p-3"
          >
            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-gray-700 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  <FaChartLine className="h-4 w-4 text-gray-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                    Data-Driven Insights
                  </h3>
                  <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-300">
                    Get analytics and recommendations to optimize your content strategy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative h-full rounded-2.5xl border border-gray-800 p-2 md:rounded-3xl md:p-3"
          >
            <GlowingEffect spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 border-gray-700 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
              <div className="relative flex flex-1 flex-col justify-between gap-3">
                <div className="w-fit rounded-lg border border-gray-600 p-2">
                  <FaUsers className="h-4 w-4 text-gray-300" />
                </div>
                <div className="space-y-3">
                  <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-white">
                    Collaborative Tools
                  </h3>
                  <p className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-gray-300">
                    Work seamlessly with your team using our collaborative tools.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    
  );
}
