import Link from 'next/link';
import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

interface Props {
  children: string;
}

function Privacidad() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const LinkMail = ({ children }: Props) => (
    <Link href={`mailto:${children}`}>
      <a
        href={`mailto:${children}`}
        target="_blank"
        className="mx-1"
        rel="noreferrer">
        {children}
      </a>
    </Link>
  );
  return (
    <>
      <BgComponent />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Link href="../">
            <div className="w-full py-10">
              <IconAnimate text="Volver" mode />
            </div>
          </Link>
          <section className="pb-48">
            <Title size="text-5xl ">Política de privacidad</Title>

            <Subtext size="py-4">
              El objetivo de esta política de privacidad es informar al usuario
              de la página web attomo.com sobre la recogida y tratamiento de sus
              datos personales. El acceso y/o uso del Sitio Web le atribuye la
              condición de Usuario, e implica la aceptación, desde dicho acceso
              y/o uso, de la presente Política de Privacidad.
            </Subtext>
            <Subtext size="text-xl">
              1. ¿Cuál es la empresa responsable del tratamiento de sus datos?
            </Subtext>
            <Subtext size="py-4">
              La organización responsable del tratamiento de sus datos es ALVMAT
              HOLDING SL (en adelante, “ATTOMO DIGITAL”), con N.I.F. B16892838 y
              domicilio social en la Calle del Monte Esquinza, 8, 28010 Madrid.
              Para cualquier cuestión relacionada con la presente Política de
              Privacidad y Protección de Datos o para contactar con
              <LinkMail>equipo@attomo.digital</LinkMail>
            </Subtext>
            <Subtext size="text-xl">
              2. ¿Por qué ATTOMO DIGITAL está legitimada para llevar a cabo el
              tratamiento de datos?
            </Subtext>
            <Subtext size="py-4">
              ATTOMO DIGITAL procesa los datos personales del Usuario con el fin
              de poder llevar a cabo la prestación de los servicios que éste
              haya solicitado a través del Sitio Web, para lo cual el Usuario
              presta su consentimiento mediante la aceptación de la presente
              Política de Privacidad y las casillas facilitadas
              correspondientes. ATTOMO DIGITAL se toma muy en serio la
              protección de su privacidad y de sus datos personales. Por lo
              tanto, su información personal se conserva de forma segura y se
              trata con el máximo cuidado, cumpliendo íntegramente con lo
              dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y
              del Consejo, de 27 de abril de 2016, relativo a la protección de
              las personas físicas en lo que respecta al tratamiento de datos
              personales y a la libre circulación de estos datos (en adelante,
              “RGPD”) y en la Ley Orgánica 3/2018, de 5 de diciembre, de
              Protección de Datos y garantía de los derechos de digitales (en
              adelante, “LOPD-GDD”). La presente Política de Privacidad regula
              el acceso y el uso del sitio web y los servicios que ATTOMO
              DIGITAL pone a disposición del Usuario interesado en los servicios
              y contenidos alojados en el Sitio Web. En este sentido, las bases
              de legitimación utilizadas por ATTOMO DIGITAL para el tratamiento
              de los datos de los Usuarios son: La ejecución de una relación
              contractual. El consentimiento de los Usuarios al tratamiento de
              sus datos personales para las finalidades especificadas en cada
              caso. Por lo que respecta a este último, el Usuario podrá retirar
              el consentimiento en cualquier momento mandando un mensaje a la
              siguiente dirección de correo electrónico:{' '}
              <LinkMail>equipo@attomo.digital</LinkMail>
            </Subtext>
            <Subtext size="text-xl">
              3. ¿Cuáles son las finalidades del tratamiento de sus datos de
              carácter personal?
            </Subtext>
            <Subtext size="py-4">
              La presente Política de Privacidad regula el acceso y el uso a los
              servicios (en adelante, los “Servicios”) que ATTOMO DIGITAL pone a
              disposición de los Usuarios interesados en los Servicios y en los
              contenidos alojados en el Sitio Web. De conformidad con lo
              establecido en el RGPD, le informamos que sus datos personales
              serán tratados con las finalidades que se relacionan a
              continuación: Prestar los servicios solicitados por el Usuario en
              el Sitio Web. Comunicar e informar al Usuario sobre las peticiones
              realizadas. Enviar Newsletters y/o comunicaciones comerciales
              promocionales por correo electrónico o por otros medios de
              comunicación electrónica equivalentes. No obstante, el Usuario
              podrá revocar el consentimiento en cada comunicado comercial y/o
              Newsletter que se le haga llegar y, en cualquier momento, mediante
              notificación en la siguiente dirección de{' '}
              <LinkMail>equipo@attomo.digital</LinkMail>
            </Subtext>
            <Subtext size="text-xl">4. Conservación de los datos</Subtext>
            <Subtext size="py-4">
              Los datos recabados por ATTOMO DIGITAL se conservarán mientras se
              mantenga la relación contractual de prestación de servicios entre
              las partes, siempre y cuando no se solicite la supresión de dichos
              datos por el Usuario. Posteriormente, en caso de ser necesario,
              ATTOMO DIGITAL mantendrá la información bloqueada los plazos
              legalmente establecidos. Se informa al Usuario que sus datos serán
              recogidos únicamente para los fines expuestos en los párrafos
              anteriores y no serán tratados de manera incompatible con dichos
              fines.
            </Subtext>
            <Subtext size="text-xl">
              5. Veracidad de los datos facilitados por los Usuarios
            </Subtext>
            <Subtext size="py-4">
              El Usuario garantiza que los datos personales facilitados son
              veraces y se hace responsable de comunicar a ATTOMO DIGITAL
              cualquier modificación de los mismos. El Usuario responderá, en
              cualquier caso, de la veracidad de los datos facilitados,
              reservándose ATTOMO DIGITAL el derecho a excluir de los servicios
              registrados a todos los Usuarios que hayan facilitado datos
              falsos, sin perjuicio de las demás acciones que procedan en
              Derecho. Se recomienda tener la máxima diligencia en materia de
              Protección de Datos mediante la utilización de herramientas de
              seguridad, no pudiéndose responsabilizar a ATTOMO DIGITAL de
              sustracciones, modificaciones o pérdidas de datos ilícitas.
              Cualquier modificación o actualización de los mismos, deberá ser
              comunicada a ATTOMO DIGITAL a través de los medios de comunicación
              disponibles en la presente Política de Privacidad.
            </Subtext>
            <Subtext size="text-xl">
              6. Derechos del Usuario en relación con sus datos.
            </Subtext>
            <Subtext size="py-4">
              El Usuario tienen derecho a Acceder a sus datos personales.
              Solicitar la rectificación de los datos inexactos. Solicitar su
              supresión. Solicitar la limitación del tratamiento de sus datos.
              Oponerse al tratamiento de sus datos. Solicitar su portabilidad.
              No ser objeto de decisiones individuales automatizadas. Para
              ejercer dichos derechos es necesario que el Usuario acredite su
              identidad frente a ATTOMO DIGITAL mediante el envío de una
              fotocopia de su Documento Nacional de Identidad o cualquier otro
              medio válido en Derecho. Los Usuarios pueden ejercer todos estos
              derechos en la siguiente dirección de email{' '}
              <LinkMail>equipo@attomo.digital</LinkMail>
              El Usuario puede también enviar su petición por correo ordinario a
              la siguiente dirección: ALVMAT HOLDING. Calle del Monte Esquinza
              8, bajo izq, 28010 Madrid. Sin perjuicio de cualquier otro recurso
              administrativo o acción judicial, los Usuarios tendrán derecho a
              presentar una reclamación ante una Autoridad de Control, en
              particular en el Estado Miembro en el que tenga su residencia
              habitual, lugar de trabajo o lugar de la supuesta infracción, en
              caso de que considere que el tratamiento de sus datos personales
              no es adecuado a la normativa, así como en el caso de no ver
              satisfecho el ejercicio de sus derechos. La Autoridad de Control
              ante la que se haya presentado la reclamación informará al
              reclamante sobre el curso y el resultado de la reclamación.
            </Subtext>
            <Subtext size="text-xl">7. Seguridad de los datos.</Subtext>
            <Subtext size="py-4">
              La protección de la privacidad y los datos personales de sus
              clientes y visitantes es muy importante para ATTOMO DIGITAL. Por
              lo tanto, ATTOMO DIGITAL hace todo lo que está en su mano para
              impedir que sus datos se utilicen de forma inadecuada. A sus datos
              sólo puede acceder el personal autorizado. ATTOMO DIGITAL mantiene
              la seguridad adecuada de protección de datos personales conforme a
              la normativa aplicable y ha establecido todos los medios técnicos
              a su alcance para evitar la pérdida, mal uso, alteración, acceso
              no autorizado y robo de los datos que los Usuarios faciliten a
              través del Sitio Web, sin perjuicio de informarle de que las
              medidas de seguridad en Internet no son inexpugnables. ATTOMO
              DIGITAL se compromete a cumplir con el deber de secreto y
              confidencialidad respecto de los datos personales de acuerdo con
              la legislación aplicable.
            </Subtext>
            <Subtext size="text-xl">8. Enlaces</Subtext>
            <Subtext size="py-4">
              El Sitio Web de ATTOMO DIGITAL podría contener links a páginas web
              de compañías y entidades de terceros. ATTOMO DIGITAL no puede
              hacerse responsable de la forma en la que estas compañías tratan
              la protección de la privacidad y de los datos personales, por lo
              que le aconsejamos que lea detenidamente las declaraciones de
              Política de Privacidad de estas páginas web que no son propiedad
              de ATTOMO DIGITAL con relación al uso, procesamiento y protección
              de datos personales. Las condiciones que ofrecen estas páginas web
              pueden no ser las mismas que las que ofrece ATTOMO DIGITAL.
            </Subtext>
            <Subtext size="text-xl">9. Preguntas</Subtext>
            <Subtext size="py-4">
              Si tienen alguna pregunta sobre esta Política de Privacidad o el
              tratamiento de sus datos rogamos que se ponga en contacto con
              ATTOMO DIGITAL mediante correo electrónico dirigido a la siguiente
              dirección de correo electrónico:{' '}
              <LinkMail>equipo@attomo.digital</LinkMail>
            </Subtext>
            <Subtext size="text-xl">
              10. Actualizaciones y cambios en la Política de Privacidad
            </Subtext>
            <Subtext size="py-4">
              ATTOMO DIGITAL se reserva el derecho de revisar su Política de
              Privacidad en el momento que considere oportuno. Por esta razón,
              le rogamos que compruebe de forma regular esta Política de
              Privacidad para leer la versión más reciente de la misma. No
              obstante, cualquier cambio que se produzca en la presente Política
              de Privacidad se comunicará al Usuario.
            </Subtext>
          </section>
        </Styles.Center>

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Privacidad;
