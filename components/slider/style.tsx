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
export const titleText = styled.h4`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const Image = styled.img`
  height: 300px;
  width: 600px;
  object-fit: cover;
`;
export const Styles = {
  Body: tw.body`bg-secundary`,
  Center: tw.section`w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
};

export const StylesArticle = {
  BlockImg: tw.div`w-full h-96 object-cover `,
  Img: tw(Image)`max-w-full max-h-full object-cover`,
  BlockText: tw(SectionColor)``,
  TextBlog: tw(
    titleText,
  )<Props>`text-xl lg:text-lg  pt-2 lg:pt-2 font-Primary font-thin
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? `textDegrade  ` : 'bg-black '}
      `,

  TopicText: tw.h6<Props>`
  opacity-50 font-PrimarySerif font-light text-xs py-2 text-primary
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'block' : 'hidden')}
  `,
  BlockArrow: tw.div`flex w-full text-xl  justify-center lg:justify-end lg:pr-32 `,
  ArrowPrev: tw.div`cursor-pointer  lg:py-20 py-10 mr-5 `,
  ArrowNext: tw.div`cursor-pointer lg:py-20 py-10`,
  Slide: tw(SelectedSlide)<Props>`
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'w-4/6 ' : 'w-4/6 ')}`,
  // ESPACIO
};
