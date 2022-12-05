import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeadSection } from './style';
import { handlers } from '../../hook/longPress';

type Props = {
  text: string;
  text2: string;
  button: string;
  link: string;
};

export default function Hero({ text, text2, button, link }: Props) {
  const line1 = text;
  const line2 = text2;
  const duration = 0.5;
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: { duration },
    },
  };

  const pathVariant = {
    hidden: {
      opacity: 1,
      pathLength: 1,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: 60,
      pathLength: 100,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <HeadSection.SectionHero>
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit">
          <HeadSection.TextHead>
            {line1} <br /> {line2}
          </HeadSection.TextHead>
          {/* <HeadSection.TextHead>
            {line2}
          </HeadSection.TextHead> */}
        </motion.div>
        <HeadSection.Blockbutton className={button === '' ? 'hidden' : ''}>
          <Link href={`#${link}`}>
            <a href={`#${link}`} {...handlers(`#${link}`)}>
              <HeadSection.TextButton>{button}</HeadSection.TextButton>
              <HeadSection.BlockArrow>
                <motion.svg
                  variants={pathVariant}
                  initial="hidden"
                  animate="visible"
                  width="6"
                  height="91"
                  viewBox="0 0 6 91"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M3 87.0007L3 44.0003L3.00001 0.99989"
                    stroke="white"
                    strokeLinecap="round"
                  />
                  <motion.circle
                    cx="3"
                    cy="88.0007"
                    r="3"
                    transform="rotate(90 3 88.0007)"
                    fill="white"
                  />
                </motion.svg>
              </HeadSection.BlockArrow>
            </a>
          </Link>
        </HeadSection.Blockbutton>
      </HeadSection.SectionHero>
    </>
  );
}
