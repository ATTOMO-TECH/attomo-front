import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import { handlersFuntion } from '../../hook/longPress';
import { Styles } from '../../styles/styles';
import { servicesAnimations } from '../animations/animations';

interface Props {
  translate: any;
  shouldShowActions: any;
}

export default function ButtonsKit({ shouldShowActions, translate }: Props) {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section !== null) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Styles.SectionScreen>
        <Styles.Center>
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            transition={{
              type: 'magic',
              stiffness: 100,
              duration: 0.5,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0.1, y: '50%' }}
            className="flex flex-col lg:flex-row justify-center items-center actions my-24 lg:my-0 bottom-0 ">
            <Styles.BtnKit
              mode={BUTTON_ACTIVE.ON}
              onClick={() => scrollTo('section-how-kit')}
              {...handlersFuntion(() => scrollTo('section-how-kit'))}>
              {translate.btnHowConsult}
            </Styles.BtnKit>

            <Styles.BtnKit
              className="mt-5 lg:mt-0"
              onClick={() => scrollTo('form-kit')}
              {...handlersFuntion(() => scrollTo('form-kit'))}>
              {translate.btnFormConsult}
            </Styles.BtnKit>
          </motion.div>
        </Styles.Center>
      </Styles.SectionScreen>
    </>
  );
}
