import Link from 'next/link';
import useLongPressHook from '../../hook/longPress';

import { Block } from './style';

export default function MapsBlock() {
  const [bind] = useLongPressHook(
    'https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es',
  );

  return (
    <>
      <Link
        href="https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es"
        passHref>
        <a
          target="_blank"
          href="https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es"
          {...bind()}
          rel="noreferrer">
          <Block.SectionBlock>
            <Block.Maps />
          </Block.SectionBlock>
        </a>
      </Link>
    </>
  );
}
