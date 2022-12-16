import Link from 'next/link';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { handlers } from '../../hook/longPress';

interface Props {
  tab: any;
  item: any;
}
export default function LinkCollapse({ tab, item }: Props) {
  return (
    <>
      <Link href={`/servicios/${tab.attributes.URLSlug}`}>
        <Styles.SubSection
          {...handlers(`/servicios/${tab.attributes.URLSlug}`)}>
          <motion.p variants={item}>{tab.attributes.name}</motion.p>
        </Styles.SubSection>
      </Link>
    </>
  );
}
