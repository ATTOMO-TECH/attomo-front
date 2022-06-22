import Link from 'next/link';
import { handlersExternal } from '../../hook/longPress';

import { Block } from './style';

export default function MapsBlock() {
  return (
    <>
      <Link
        href="https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es"
        passHref>
        <a
          target="_blank"
          href="https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es"
          {...handlersExternal(
            'https://www.google.es/maps/place/ATTOMO+Digital/@40.4271098,-3.694194,17z/data=!3m1!4b1!4m5!3m4!1s0xd42295dc6dbc227:0x9b1607a419f021d0!8m2!3d40.4271098!4d-3.692?hl=es',
          )}
          rel="noreferrer">
          <Block.SectionBlock>
            <img src="./Map_.jpg" alt="maps" />
          </Block.SectionBlock>
        </a>
      </Link>
    </>
  );
}
