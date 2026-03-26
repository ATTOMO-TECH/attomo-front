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
  toggle?: () => void;
}

export default function SubMenu({
  section,
  subsection,
  isOpen,
  setIsToggle,
  toggle,
}: Props) {
  const router = useRouter();

  return (
    <>
      <Styles.SubMenuBlock>
        <motion.div variants={stagger} className="inner">
          <motion.div variants={fadeInUp}>
            <Styles.ButtonSubMenu
              type="button"
              onTouchStart={() => setIsToggle(subsection.id)}
              onClick={() => setIsToggle(subsection.id)}>
              {section}
            </Styles.ButtonSubMenu>
          </motion.div>
          {isOpen && (
            <motion.div variants={fadeInUp} className="flex flex-wrap w-full ">
              <Styles.BlockSubSection>
                {subsection.attributes.subservices.data.map((subTask: any) => (
                  <Link
                    passHref
                    href={subTask.attributes.URLSlug}
                    // .replaceAll(' ', '_')
                    // .toLowerCase()}
                    key={subTask.attributes.URLSlug}>
                    <div
                      onTouchStart={() =>
                        router.push(
                          subTask.attributes.URLSlug,
                          // .replaceAll(' ', '_')
                          // .toLowerCase(),
                        )
                      }>
                      <Styles.SelectSubMenu
                        href={subTask.attributes.URLSlug}
                        onClick={toggle}
                        onTouchStart={toggle}
                        mode={
                          subTask.attributes.URLSlug === router.query.slug
                            ? //  .replaceAll(' ', '_')
                              //  .toLowerCase() === router.query.slug
                              BUTTON_ACTIVE.ON
                            : BUTTON_ACTIVE.OFF
                        }>
                        {subTask.attributes.name}
                      </Styles.SelectSubMenu>
                    </div>
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
