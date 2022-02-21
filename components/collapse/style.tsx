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
export const SubSection = styled.p`
@media screen and (min-width: 1024px) {
   {
    &:nth-child(1) {
      padding-right: 75%;
    }
    &:nth-child(2) {
      padding-right: 74%;
    }
    &:nth-child(3) {
      padding-right: 73%;
    }
    &:nth-child(4) {
      padding-right: 72%;
    }
    &:nth-child(5) {
      padding-right: 71%;
    }
    &:nth-child(6) {
      padding-right: 70%;
    }
  }
`;

export const Item = styled.div<Props>`
  ${(props) =>
    props.ismode === 0
      ? `
@media screen and (min-width: 1024px) 
{
  {transform: rotate(35deg)}
}; transform: rotate(-50deg)`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(50deg)}
  }; transform: rotate(-14deg)`
      : ''}
    ${(props) =>
    props.ismode === 2
      ? `
    @media screen and (min-width: 1024px) 
    {
      {transform: rotate(65deg)}
    }; transform: rotate(22deg)`
      : ''}
`;

export const ItemSection = styled.div`
  width: 40px;
  height: 8px;
  border-radius: 80% 80% 40% 40%;
  position: absolute;
  top: -12px;
  left: 48%;
  transition: all 3s;

  &:after {
    content: url('/icon/elementElipse.svg');
  }
  @media screen and (min-width: 1024px) {
    transform: rotate(-40deg);
    left: 50%;
  }
  transform: rotate(-37deg);
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
export const Styles = {
  SectionCollapse: tw.section`h-screen lg:h-auto font-PrimarySerif overflow-hidden max-w-100 flex flex-col-reverse justify-center items-center text-primary m-auto lg:relative my-24 font-light leading-loose`,
  BlockDescription: tw.div`lg:text-right text-xl lg:absolute bottom-12 lg:-right-4 w-full text-center `,
  SubSection: tw(SubSection)`font-regular py-0.5 text-base cursor-pointer z-80`,
  BlockImg: tw.div`relative p-1`,
  SectionAtom: tw(Item)`animate-pulse transition ease-in-out delay-150 `,
  BlockAtom: tw.div`absolute`,
  Atom: tw(ItemSection)``,
  Image: tw(Imgen)``,
  BlockTextSelect: tw(
    SectionTitle,
  )`text-2xl  lg:absolute left-0 bottom-2 lg:bottom-2 lg:left-auto lg:top-7 flex lg:block w-1/3 h-1/3`,
  BlockSectionTitle: tw.div`w-auto`,
  TextSelect: tw(
    SectionTitle,
  )<Props>`py-7 opacity-40 hover:opacity-100 px-5 order-last block transition ease-in duration-300 cursor-pointer z-70
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}`,
  TextCentral: tw(
    TextTitle,
  )`absolute   lg:top-52 top-40 left-16 lg:left-24 w-4/6 lg:w-4/6 text-center lg:text-2xl text-xl `,
};
