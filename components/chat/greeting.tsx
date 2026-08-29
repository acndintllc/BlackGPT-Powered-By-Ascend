import { motion } from "framer-motion";
import Image from "next/image";
import { APP_FULL_NAME, LOGO_WORDMARK } from "@/lib/brand";

export const Greeting = () => (
  <div className="flex flex-col items-center px-4" key="overview">
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mb-5"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        alt={APP_FULL_NAME}
        className="h-auto w-44 dark:invert md:w-52"
        height={310}
        priority
        src={LOGO_WORDMARK}
        width={720}
      />
    </motion.div>
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="text-center font-semibold text-2xl tracking-tight text-foreground md:text-3xl"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      What can I help with?
    </motion.div>
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="mt-3 text-center text-muted-foreground/80 text-sm"
      initial={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      Ask a question, write code, or explore ideas.
    </motion.div>
  </div>
);
