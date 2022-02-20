import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations/animations';
import { Styles } from '../../styles/styles';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  section: string;
  subsection: any[];
  collapse: boolean;
}

export default function SubMenu({ section, subsection, collapse }: Props) {
  const [isToggle, SetIsToggle] = useState<boolean>(collapse);
  const [iDx, handleClick] = useState(0);

  return (
    <>
      <div className="w-2/6">
        <div className="pt-2">
          <motion.div variants={stagger} className="inner">
            <motion.div variants={fadeInUp}>
              <button
                type="button"
                className="font-Primary text-xl"
                onClick={() => SetIsToggle(!isToggle)}>
                {section}
              </button>
            </motion.div>
            {isToggle && (
              <motion.div variants={fadeInUp} className="flex flex-wrap ">
                <span className="h-auto w-1 rounded-xl opacity-60 bg-white" />
                <div className="flex flex-col relative pl-5">
                  {subsection.map((tab, i) => (
                    <Styles.SelectSubMenu
                      ismode={i === iDx ? BUTTON_ACTIVE.ON : ''}
                      key={tab.Name}
                      active={i === iDx}
                      onClick={() => handleClick(i)}>
                      {tab.Name}
                    </Styles.SelectSubMenu>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}
