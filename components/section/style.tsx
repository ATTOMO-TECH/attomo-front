import tw from 'tailwind-styled-components';

export const Styles = {
  SectionProjects: tw.div`py-12`,
  BlockSections: tw.div`flex items-center relative flex-col lg:flex-row`,
  BlockSection: tw.div`lg:w-3/6 w-11/12 -ml-12`,
  BlockText: tw.div`md:px-24 sm:px-5 lg:w-3/6 px-12 py-16 lg:py-0 lg:absolute lg:-bottom-32 lg:right-0`,
  BlockSectionReverses: tw.div`lg:w-3/6 w-11/12 ml-10 overflow-hidden`,
  BlockSectionsReverse: tw.div`sm:flex flex-row-reverse items-center relative lg:pt-48`,
  BlockSectionReverse: tw.div`md:px-24 sm:px-5 lg:w-3/6 px-12 py-16 lg:absolute lg:-bottom-24 lg:left-0 `,
};
