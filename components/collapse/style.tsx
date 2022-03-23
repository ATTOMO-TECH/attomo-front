import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};
// TITLE TEXT
export const SectionTitle = styled.div`
  &:nth-child(1) {
    padding-top: 0%;
  }
  &:nth-child(2) {
    padding-top: 0%;
  }
  &:nth-child(3) {
    padding-top: 0%;
  }
  @media screen and (min-width: 1024px) {
     {
      &:nth-child(1) {
        padding-left: 25%;
      }
      &:nth-child(2) {
        padding-left: 55%;
      }
      &:nth-child(3) {
        padding-left: 75%;
      }
    }
  }
`;
// SUBTEXT
export const SubSection = styled.div`
background-color:black; 
@media screen and (min-width: 1024px) {

   {
    &:nth-child(1) {
      padding:3px;
      margin-right: 74%;
    
    }
    &:nth-child(2) {
      padding:3px;
      margin-right: 73%;
    }
    &:nth-child(3) {
      padding:3px;
      margin-right: 72%;
    }
    &:nth-child(4) {
      padding:3px;
      margin-right: 71%;
    }
    &:nth-child(5) {
      padding:3px;
      margin-right: 70%;
    }
    &:nth-child(6) {
      padding:3px;
      margin-right: 69%;
    }
  }
`;
// ATTOMO MOVE
export const Item = styled.div<Props>`
  &:after {
    content: url('/icon/elips.svg');
    transform: scale(1) rotate(8deg);
    position: fixed;
    top: -2%;
    left: 42%;
    z-index: 100 !important;
    -webkit-animation-duration: 4000ms;

    @media screen and (max-width: 420px) {
      top: -4%;
      left: 36%;
      transform: scale(0.6) rotate(16deg);
    }
    @media screen and (min-width: 780px) {
      top: -1%;
      left: 50%;
      transform: scale(0.8) rotate(18deg);
    }
    @media screen and (min-width: 1024px) {
      left: 51%;
      top: -16%;
    }
  }

  border-radius: 100%;
  background-color: black;
  transition-duration: 0.4s;
  transition-property: transform;
  ${(props) =>
    props.ismode === 0
      ? `
@media screen and (min-width: 1024px) 
{
  {transform: rotate(40deg)}
};
@media screen and (min-width: 468px) 
{
  transform: rotate(-55deg);
  top: -0%;
    left: %;

};
transform: rotate(-56deg)`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `

  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(55deg)}
  };
  @media screen and (min-width: 468px) 
  {
    {transform: rotate(-12deg)}
  };
  transform: rotate(-15deg)`
      : ''}
    ${(props) =>
    props.ismode === 2
      ? `
    @media screen and (min-width: 1024px) 
    {
      
    }
      @media screen and (min-width: 468px) 
  {
    {transform: rotate(30deg)}
  }; transform: rotate(26deg)`
      : ''}
`;

export const ItemSection = styled.div`
  width: 4px;
  height: 8px;
  border-radius: 80% 80% 40% 40%;
  position: absolute;
  top: 0px;
  left: 48%;
  z-index: 100 !important;
  -webkit-animation-duration: 4000ms;
  &:before {
    content: url('/icon/elementElipse.svg');
  }
  @media screen and (max-width: 468px) {
    top: -4px;
    left: 48%;
    width: 20px;
    height: 8px;
    transform: scale(1) rotate(-38deg);
  }
  @media screen and (max-width: 768px) {
    top: -14px;
    left: 52%;
    transform: scale(0.6) rotate(-38deg);
  }
  @media screen and (min-width: 1024px) {
    left: 50%;
    top: -8px;
  }
  transform: rotate(-39deg);
`;

export const TextTitle = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 26.04%,
    #ffffff 69.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (min-width: 1024px) {
    &:nth-child(2) {
      margin-bottom: 5%;
    }
  } ;
`;
export const Circle = styled.div`
  &:before {
    content: '';
    border: 2px solid rgba(255, 255, 255, 0.2);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 100%;

  }
   {
    z-index: 0 !important;
    width: 100%;
    height: 100%;
    transform: rotate(-70deg);
    background
  }

  @media screen and (min-width: 1024px) {
     {
      transform: rotate(0);
    }
  }
`;
export const CircleInter = styled.div`
  border: 6px solid white;
  width: 70%;
  height: 70%;
  @media screen and (min-width: 1024px) {
    transform: rotate(0);
  }
  transform: rotate(70deg);
`;
export const AlingBlock = styled.div`
  @media screen and (max-width: 320px) {
    bottom: -2%;
  }
`;
export const Styles = {
  SectionCollapse: tw.section`h-screen w-full relative z-80 lg:h-auto font-PrimarySerif flex flex-col-reverse justify-center items-center text-primary m-auto lg:relative md:my-24 mb-24  font-light leading-loose`,
  BlockDescription: tw(
    AlingBlock,
  )`lg:text-right text-xl absolute bottom-20 lg:bottom-24 lg:-right-4 w-full text-center z-10`,
  SubSection: tw(SubSection)`font-regular text-base cursor-pointer z-80`,
  BlockImg: tw.div`relative flex justify-center items-center `,
  SectionAtom: tw(Item)` transition ease-in-out delay-150 relative `,
  BlockAtom: tw.div`absolute `,
  Atom: tw(ItemSection)``,
  BlockTextSelect: tw(
    SectionTitle,
  )`lg:text-2xl text-sm block z-100 lg:absolute  bottom-2 lg:bottom-2 lg:top-7 flex lg:block lg:w-1/3 w-full h-1/3`,
  BlockSectionTitle: tw.div`w-full lg:w-auto z-0 `,
  TextSelect: tw(
    SectionTitle,
  )<Props>`py-7 md:mb-6 sm:mb-0 w-full opacity-40 hover:opacity-100 sm:px-5 px-3 order-last block text-center transition ease-in duration-300 cursor-pointer z-70  font-Primary
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}`,
  TextCentral: tw(TextTitle)` w-4/6 text-center lg:text-lg text-xs `,
  Circle: tw(
    Circle,
  )`  absolute  m-auto  -top-2 md:-top-2 lg:top-0 right-0 rounded-full lg:-right-0 md:right-0 flex items-center justify-center`,
  BlockTextCenter: tw(
    CircleInter,
  )`z-10 rounded-full flex items-center justify-center items-center animate-pulse `,
};
