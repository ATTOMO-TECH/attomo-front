import { SubSections } from './style';
import Counter from './counter';
import Btn from '../button/button';
import Title from '../Text/title';

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
          <Btn>Nuestros servicios</Btn>
        </SubSections.TextSubsection>
      </SubSections.Subsection>
    </>
  );
}
