import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const textTitle = styled.div`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const SubSections = {
  TextHead: tw(textTitle)`lg:py-48 lg:pr-72 text-4xl font-thin`,
  Subsection: tw.section`h-full flex justify-around flex-col-reverse lg:flex-row`,
  BlockCounter: tw.div`lg:w-3/6 w-full flex lg:justify-center itemx-center`,
  TextSubsection: tw.div`text-primary lg:w-6/12 w-10/12 m-auto`,
  TextSubsectionSelected: tw.div`text-primary lg:w-6/12 w-10/12 lg:m-auto`,
  Title: tw(
    textTitle,
  )`lg:text-sm sm:text-lg textDegrade  text-sm lg:font-thin font-regular lg:font-PrimarySerif font-Secundary pt-5 tracking-wide leading-relaxed`,

  SectionCounter: tw.div`lg:w-64 p-12 lg:p-0  font-Secundary flex justify-center items-center`,
};
