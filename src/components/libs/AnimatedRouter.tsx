import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedRouterProps = {
  children: ReactNode;
};

export default function AnimatedRouter({
  children,
  ...props
}: AnimatedRouterProps) {
  const routeVariants = {
    initial: {
      x: "-100vw",
    },
    final: {
      x: "0vw",
    },
  };
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="final"
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
