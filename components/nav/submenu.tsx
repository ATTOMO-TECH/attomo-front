import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fadeInUp, stagger } from '../animations/animations';
import { Styles } from '../../styles/styles';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  section: string;
  subsection: any;
  setIsToggle: any;
  isOpen: boolean;
}

export default function SubMenu({
  section,
  subsection,
  isOpen,
  setIsToggle,
}: Props) {
  const router = useRouter();

  return (
    <>
      <Styles.SubMenuBlock>
        <motion.div variants={stagger} className="inner">
          <motion.div variants={fadeInUp}>
            <Styles.ButtonSubMenu
              type="button"
              onClick={() => setIsToggle(subsection.id)}>
              {section}
            </Styles.ButtonSubMenu>
          </motion.div>
          {isOpen && (
            <motion.div variants={fadeInUp} className="flex flex-wrap ">
              <Styles.BlockSubSection>
                {subsection.attributes.subservices.data.map((subTask: any) => (
                  <Link
                    href={subTask.attributes.name
                      .replaceAll(' ', '_')
                      .toLowerCase()}>
                    <Styles.SelectSubMenu
                      mode={
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
              </Styles.BlockSubSection>
            </motion.div>
          )}
        </motion.div>
      </Styles.SubMenuBlock>
    </>
  );
}
