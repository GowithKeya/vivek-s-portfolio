import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'motion/react';
import { config } from '@/data/config';
import { SiWhatsapp } from 'react-icons/si';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href="https://wa.me/917678532861"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
          >
            <SiWhatsapp size={16} />
            <span>WhatsApp</span>
          </a>
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail size={16} />
            <span>Email</span>
          </a>
        </motion.li>
      </ul>
    </div>
  );
}
