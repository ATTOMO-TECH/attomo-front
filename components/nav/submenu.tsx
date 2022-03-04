import { useState } from 'react';
import { motion } from 'framer-motion';
import router from 'next/router';
import { fadeInUp, stagger } from '../animations/animations';
import { Styles } from '../../styles/styles';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  section: string;
  subsection: any;
  SetIsToggle: any;
  isOpen: boolean;
}

export default function SubMenu({
  section,
  subsection,
  isOpen,
  SetIsToggle,
}: Props) {
  const [iDx, handleClick] = useState(0);
  //   const [menuCollapse, setMenuCollapse] = useState<any>();

  return (
    <>
      <div className="w-2/6">
        <motion.div variants={stagger} className="inner">
          <motion.div variants={fadeInUp}>
            <button
              type="button"
              className="font-Primary text-xl"
              onClick={() => SetIsToggle(subsection.id)}>
              {section}
            </button>
          </motion.div>
          {isOpen && (
            <motion.div variants={fadeInUp} className="flex flex-wrap ">
              <div className="flex flex-col relative pl-1">
                {subsection.attributes.subservices.data.map(
                  (tab: any, i: number) => (
                    <Styles.SelectSubMenu
                      ismode={i === iDx ? BUTTON_ACTIVE.ON : ''}
                      key={tab.attributes.name}
                      active={i === iDx}
                      onClick={() => {
                        handleClick(i);
                        router.push(tab.attributes.name);
                      }}>
                      {tab.attributes.name}
                    </Styles.SelectSubMenu>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
