import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};
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
        padding-left: 20%;
      }
      &:nth-child(2) {
        padding-left: 45%;
      }
      &:nth-child(3) {
        padding-left: 55%;
      }
    }
  }
`;
export const SubSection = styled.div`
@media screen and (min-width: 1024px) {

   {
    &:nth-child(1) {
      padding-right: 74%;
    
    }
    &:nth-child(2) {
      padding-right: 73%;
    }
    &:nth-child(3) {
      padding-right: 72%;
    }
    &:nth-child(4) {
      padding-right: 71%;
    }
    &:nth-child(5) {
      padding-right: 70%;
    }
    &:nth-child(6) {
      padding-right: 69%;
    }
  }
`;

export const Item = styled.div<Props>`
  transition-duration: 0.4s;
  transition-property: transform;
  ${(props) =>
    props.ismode === 0
      ? `
@media screen and (min-width: 1024px) 
{
  {transform: rotate(30deg)}
}; transform: rotate(-50deg)`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(45deg)}
  }; transform: rotate(-12deg)`
      : ''}
    ${(props) =>
    props.ismode === 2
      ? `
    @media screen and (min-width: 1024px) 
    {
      {transform: rotate(60deg)}
    }; transform: rotate(26deg)`
      : ''}
`;

export const ItemSection = styled.div`
  z-index: 10;
  width: 40px;
  height: 8px;
  border-radius: 80% 80% 40% 40%;
  position: absolute;
  top: -15px;
  left: 44%;

  -webkit-animation-duration: 4000ms;
  &:after {
    content: url('/icon/elementElipse.svg');
  }
  @media screen and (min-width: 768px) {
    top: -17px;
    left: 52%;
  }
  @media screen and (min-width: 1024px) {
    left: 52%;
    top: -8px;
  }
  transform: rotate(-38deg);
`;

export const Imgen = styled.img<Props>`
  ${(props) =>
    props.ismode === 0
      ? `
@media screen and (min-width: 1024px) 
{
  {transform: rotate(-30deg)}
}; transform: rotate(-15deg);`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(-60deg)}
  }; transform: rotate(-50deg);`
      : ''}
  ${(props) =>
    props.ismode === 2
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(-75deg)}
  }; transform: rotate(-80deg);`
      : ''}
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
   {
    width: 98%;
    height: 100%;
    transform: rotate(-70deg);
  }

  @media screen and (min-width: 1024px) {
     {
      transform: rotate(0);
    }
  }
`;

export const Styles = {
  SectionCollapse: tw.section`h-screen w-full relative z-80 lg:h-auto font-PrimarySerif flex flex-col-reverse justify-center items-center text-primary m-auto lg:relative my-24 px-1 font-light leading-loose`,
  BlockDescription: tw.div`lg:text-right text-xl lg:absolute bottom-24 lg:-right-4 w-full text-center z-10`,
  SubSection: tw(SubSection)`font-regular text-base cursor-pointer z-80`,
  BlockImg: tw.div`relative lg:overflow-hidden `,
  SectionAtom: tw(
    Item,
  )`lg:animate-pulse transition ease-in-out delay-150 relative z-0 z-100 lg:p-0`,
  BlockAtom: tw.div`absolute z-10`,
  Atom: tw(ItemSection)``,
  Image: tw(Imgen)``,
  BlockTextSelect: tw(
    SectionTitle,
  )`lg:text-2xl  block z-100 lg:absolute  bottom-2 lg:bottom-2  lg:top-7 flex lg:block lg:w-1/3 w-full h-1/3`,
  BlockSectionTitle: tw.div`w-auto z-0 `,
  TextSelect: tw(
    SectionTitle,
  )<Props>`py-7 mb-6 sm:mb-0 w-full opacity-40 hover:opacity-100 px-5 order-last block transition ease-in duration-300 cursor-pointer z-70
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}`,
  TextCentral: tw(TextTitle)` w-4/6 text-center lg:text-sm `,
  Circle: tw(
    Circle,
  )` bg-backCollaplse bg-circle bg-no-repeat absolute bg-center bg-contain -top-2 lg:top-0 right-1 rounded-full lg:-right-0 md:right-0 z-0`,
  BlockTextCenter: tw.div`z-10 border-4 border-white w-5/6 h-5/6 absolute md:top-20 md:right-20 right-6 top-6 rounded-full flex justify-center items-center animate-pulse `,
};
