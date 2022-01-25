import Link from 'next/link';
import { useState } from 'react';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Conditions() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo />
        <Styles.Margin>
          <Nav toggle={toggle} logo />
        </Styles.Margin>
        <Styles.Center>
          <Link href="../">
            <div className="w-full py-10">
              <IconAnimate text="Volver" />
            </div>
          </Link>
          <Styles.Screen>
            <Title size="text-5xl ">Términos y Condicciones</Title>

            <Subtext size="">
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque tincidunt ornare est non laoreet. Praesent vel
              dignissim eros. In porta nec urna sit amet congue. Phasellus
              venenatis quam non aliquet tristique. Integer id justo at metus
              interdum imperdiet. Aenean sit amet orci ex. Ut eleifend hendrerit
              gravida.
              <br /> <br />
              Fusce sagittis pretium dolor ut suscipit. Duis a viverra orci, eu
              aliquet lectus. Sed sed ipsum vel ex iaculis auctor nec at lectus.
              Morbi accumsan lectus sed imperdiet ultrices. Nullam laoreet sit
              amet ante eget porttitor. Vivamus suscipit, urna sed scelerisque
              ultricies, orci est lobortis neque, eu ultrices nunc nulla vitae
              nisi. Mauris placerat maximus hendrerit. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Praesent non libero vulputate, fringilla eros pellentesque,
              elementum leo. Morbi et condimentum libero. Ut id rutrum odio, sit
              amet rhoncus nunc. Aliquam vehicula libero vel augue iaculis, vel
              rutrum magna fermentum. Donec viverra iaculis justo in blandit.
              Mauris maximus erat sit amet vestibulum consequat. Etiam vitae
              neque consectetur, tempor dolor ac, vehicula urna. Sed dignissim
              tempus urna.
              <br /> <br />
              Donec eu facilisis velit, ut posuere dolor. Duis aliquam eros non
              mauris vulputate volutpat. Praesent maximus tellus pulvinar eros
              ornare laoreet. Etiam sodales commodo nisl sit amet hendrerit. Ut
              mattis odio vitae augue posuere consectetur at vel dui. Integer a
              velit egestas, lobortis mauris et, imperdiet lorem. Nullam non
              fermentum odio. Proin tristique porta elit porta tincidunt. Duis
              eget velit purus. Donec et mollis mauris, eu dictum elit. Etiam
              rutrum sapien at orci dictum, non pulvinar mi blandit. Nullam
              auctor et nulla ut molestie.
              <br /> <br />
              Proin facilisis vehicula posuere. Nam pretium lobortis nibh ac
              pellentesque. Curabitur lectus mauris, placerat porta neque
              sollicitudin, euismod imperdiet tellus. Nunc consequat efficitur
              diam, non tempus lectus dignissim et. Mauris consectetur mollis
              elit sed iaculis. Curabitur ut ex ligula. Etiam eu malesuada quam,
              in aliquam dolor. Phasellus hendrerit elit et auctor mollis.
              Suspendisse ut sagittis massa. In quis suscipit magna, in
              porttitor est. Mauris mattis interdum diam at mollis. Pellentesque
              tincidunt lacinia convallis. Ut nec interdum urna, in cursus dui.
              Nullam egestas dapibus porttitor. Etiam vel vestibulum metus.
              Nulla sit amet nisi rutrum, tempor urna at, imperdiet ante.
              Vivamus consectetur non tortor a tincidunt. Duis viverra libero
              sed elit feugiat, eu consequat lacus malesuada.
              <br /> <br />
              Nulla in metus non urna blandit fermentum in id elit. Nam vehicula
              vestibulum placerat. Maecenas non est in sem maximus pharetra eget
              in risus. Nullam sodales massa felis, sed aliquam mi ullamcorper
              sit amet. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Morbi eleifend efficitur
              placerat. Aliquam at est sed odio maximus ornare et et ligula.
              Donec placerat lacinia dolor, id pellentesque mauris. Cras
              tincidunt sem at egestas pulvinar. Maecenas mattis, lectus sed
              tempus accumsan, felis ipsum blandit ipsum, ut convallis nisl sem
              non mauris. Etiam blandit mattis lacus, sit amet faucibus sem.
              Maecenas nec porta ipsum. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Phasellus faucibus
              nisl in massa malesuada vehicula. Proin enim nisi, tristique eu
              viverra eu, imperdiet.
            </Subtext>
          </Styles.Screen>
        </Styles.Center>

        <Footer />
      </Styles.Body>
    </>
  );
}
export default Conditions;
