import Link from 'next/link';
import { motion } from 'framer-motion';
import { Styles } from './style';
import { handlers } from '../../hook/longPress';
import { VALUESNAV } from '../../const/constGlobal';

interface Props {
  tab: any;
  item: any;
}
export default function LinkCollapse({ tab, item }: Props) {
  return (
    <>
      <Link href={`${VALUESNAV[0].Url}/${tab.attributes.URLSlug}`}>
        <Styles.SubSection
          {...handlers(`${VALUESNAV[0].Url}/${tab.attributes.URLSlug}`)}>
          <motion.a
            href={`${VALUESNAV[0].Url}/${tab.attributes.URLSlug}`}
            variants={item}>
            {tab.attributes.name}
          </motion.a>
        </Styles.SubSection>
      </Link>
    </>
  );
}
