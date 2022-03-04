import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
  active?: boolean;
};
export const SelectedSlide = styled.div<Props>`
  ${({ active }) =>
    active
      ? 'transform: translatex(25%) scale(1.5); transition: all 0.3s ease; '
      : 'transform: scale(1); transition: all 0.3s ease; &:nth-child(1){ opacity:0.5} '}
`;
export const TextTitle = styled.h2`
  @media screen and (max-width: 1024px) {
    background: linear-gradient(
      to right,
      #cccfe8 26.04%,
      #ffffff 69.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const lightTheme = {
  headings: TextTitle,
};
export const darkTheme = {
  headings: 'white',
};

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
`;
export const Styles = {
  Body: tw.body`bg-secundary`,
  Center: tw.section`w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
};

export const StylesArticle = {
  BlockImg: tw.div`w-11/12 h-auto `,
  BlockText: tw(SectionColor)``,
  TextBlog: tw.h4`lg:w-4/6 text-xl lg:text-lg w-5/6 pt-5 lg:pt-2 font-Primary font-thin`,
  TopicText: tw.h6<Props>`
  opacity-50 font-PrimarySerif font-thin text-xs py-2
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'block' : 'hidden')}
  `,
  BlockArrow: tw.div`flex w-full text-xl justify-end lg:pr-44 pr-10`,
  ArrowPrev: tw.div`cursor-pointer py-20 pr-5 hidden lg:block `,
  ArrowNext: tw.div`cursor-pointer lg:py-20 py-10`,
  Slide: tw(SelectedSlide)<Props>`
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'w-4/6 ' : 'w-4/6 ')}`,
};
