import { useState } from "react";
import { motion } from "motion/react";
import styles from "./style.module.scss";
import { height } from "../anim";
import Body from "./body/body";
import MotionToggle from "@/components/motion-toggle";

import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={() => setIsActive(false)}
      data-no-custom-cursor="true"
      className={cn(styles.nav, "relative z-10")}
    >
      <div className={cn(styles.wrapper, "flex justify-start")}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
        </div>
      </div>
      {/* Subtle reduced-motion control, tucked into the bottom-right of the menu.
          Stop propagation so toggling motion doesn't also close the menu. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="fixed bottom-6 right-6 z-50"
      >
        <MotionToggle />
      </motion.div>
    </motion.div>
  );
};

export default Index;
