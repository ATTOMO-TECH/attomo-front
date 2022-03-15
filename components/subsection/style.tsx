import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextHero = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 26.04%,
    #ffffff 69.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubSections = {
  TextHead: tw(TextHero)`lg:py-48 lg:pr-72 text-4xl font-thin`,
  Subsection: tw.section`h-full flex justify-center flex-col-reverse lg:flex-row`,
  BlockCounter: tw.div`lg:w-3/6 w-full flex justify-center`,
  TextSubsection: tw.div`text-primary lg:w-6/12 w-10/12 m-auto`,
  Paragraph: tw(
    TextHero,
  )`lg:text-sm sm:text-lg text-xs lg:font-thin font-regular lg:font-PrimarySerif font-Secundary pt-5 tracking-wide leadi ng-loose`,
  SectionCounter: tw.div`lg:w-64 p-12 lg:p-0`,
};
