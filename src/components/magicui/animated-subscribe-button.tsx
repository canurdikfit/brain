"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: string;
  changeText: React.ReactElement | string;
  className?: string
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus,
  buttonTextColor,
  changeText,
  initialText,
  className
}) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    return (
      <AnimatePresence mode="wait">
        {isSubscribed ? (
          <motion.button
            className={`relative flex items-center justify-center overflow-hidden bg-white p-[10px] ${className}`}
            onClick={() => setIsSubscribed(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="action"
              className="relative block h-full w-full font-black lg:text-3xl md:text-2xl text-xl text-center"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              style={{ color: buttonColor }}
            >
              {changeText}
            </motion.span>
          </motion.button>
        ) : (
          <motion.button
            className={`relative flex cursor-pointer items-center justify-center p-[10px] ${className}`}
            style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            onClick={() => {
              setIsSubscribed(true)
              navigator.clipboard.writeText(initialText)
              setTimeout(() => {
                setIsSubscribed(false)
              }, 1500)
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.span
              key="reaction"
              className="relative block font-black lg:text-3xl md:text-2xl text-xl text-center"
              initial={{ x: 0 }}
              exit={{ x: 50, transition: { duration: 0.1 } }}
            >
              {initialText}
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    );
  };