import Link from 'next/link';
import { SubSections } from './style';
import Counter from './counter';
import Title from '../Text/title';
import IconAnimate from '../button/icon';

export default function SubSection() {
  return (
    <>
      <SubSections.Subsection>
        <Counter />
        <SubSections.TextSubsection>
          <Title size="text-4xl">
            Acompañamos a nuestros clientes en todo el proceso de transformación
            digital
          </Title>
          <SubSections.Paragraph>
            Desarrollamos e implantamos tecnologías, productos y servicios a
            medida de nuestros clientes.
          </SubSections.Paragraph>
          <Link href="/servicios">
            <div>
              <IconAnimate text="Nuestros servicios" mode />
            </div>
          </Link>
        </SubSections.TextSubsection>
      </SubSections.Subsection>
    </>
  );
}
