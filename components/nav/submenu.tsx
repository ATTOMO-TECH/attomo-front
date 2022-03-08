import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fadeInUp, stagger } from '../animations/animations';
import { Styles } from '../../styles/styles';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  section: string;
  subsection: any;

  isOpen: boolean;
}

export default function SubMenu({ section, subsection, isOpen }: Props) {
  const router = useRouter();

  return (
    <>
      <div className="w-2/6">
        <motion.div variants={stagger} className="inner">
          <motion.div variants={fadeInUp}>
            <button
              type="button"
              className="font-Primary text-xl"
              onClick={() => subsection.id}>
              {section}
            </button>
          </motion.div>
          {isOpen && (
            <motion.div variants={fadeInUp} className="flex flex-wrap ">
              <div className="flex flex-col relative pl-1">
                {subsection.attributes.subservices.data.map((subTask: any) => (
                  <Link
                    href={subTask.attributes.name
                      .replaceAll(' ', '_')
                      .toLowerCase()}>
                    <Styles.SelectSubMenu
                      ismode={
                        subTask.attributes.name
                          .replaceAll(' ', '_')
                          .toLowerCase() === router.query.slug
                          ? BUTTON_ACTIVE.ON
                          : BUTTON_ACTIVE.OFF
                      }>
                      {subTask.attributes.name}
                    </Styles.SelectSubMenu>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
