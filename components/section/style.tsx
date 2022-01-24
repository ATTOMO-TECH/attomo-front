import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};

export const Styles = {
  SectionProjects: tw.div`py-14  overflow-hidden`,
  BlockSections: tw.div<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'flex items-center relative flex-col lg:flex-row lg:pt-48 '
      : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'sm:flex flex-row-reverse items-center relative lg:pt-48 '
      : ''}`,
  BlockSection: tw.div<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'lg:w-3/6 w-11/12 -ml-12 ' : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'lg:w-3/6 w-11/12 ml-10 lg:ml-0 lg:-mr-12  '
      : ''}`,
  BlockText: tw.div<Props>`
${(props) =>
  props.ismode === BUTTON_ACTIVE.ON
    ? 'md:px-24 sm:px-5 lg:w-3/6 px-12 py-16 lg:py-0 lg:absolute lg:-bottom-32 lg:right-0 '
    : ''}
${(props) =>
  props.ismode === BUTTON_ACTIVE.OFF
    ? 'md:px-24 sm:px-5 lg:w-3/6 px-12 py-16 lg:absolute lg:-bottom-32 lg:left-0 '
    : ''}`,
};
