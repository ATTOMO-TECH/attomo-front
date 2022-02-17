import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeadSection } from './style';

type Props = {
  text: string;
  text2: string;
  button: string;
  link: string;
};

export default function Hero({ text, text2, button, link }: Props) {
  const line1 = text;
  const line2 = text2;
  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.025,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  };
  const letter = {
    hidden: {
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
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
      height: 100,
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
        <HeadSection.TextHead>
          <motion.div
            className="load-screen--message "
            variants={sentence}
            initial="hidden"
            animate="visible">
            {line1.split('').map((char) => (
              <motion.span
                variants={sentence}
                style={{ margin: 0 }}
                key={`value+${char}`}>
                {char}
              </motion.span>
            ))}
            <br />
            {line2.split('').map((char) => (
              <motion.span
                variants={letter}
                style={{ margin: 0 }}
                key={`value+${char}`}>
                {char}
              </motion.span>
            ))}
          </motion.div>
        </HeadSection.TextHead>
        <HeadSection.Blockbutton className={button === '' ? 'hidden' : ''}>
          <Link href={`#${link}`}>
            <HeadSection.TextButton>{button}</HeadSection.TextButton>
          </Link>

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
                stroke-linecap="round"
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
        </HeadSection.Blockbutton>
      </HeadSection.SectionHero>
    </>
  );
}
