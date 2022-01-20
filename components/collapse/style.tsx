import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};
export const SectionTitle = styled.h5`
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
    {transform: rotate(55deg)}
  }; transform: rotate(-16deg)`
      : ''}
    ${(props) =>
    props.ismode === 2
      ? `
    @media screen and (min-width: 1024px) 
    {
      {transform: rotate(75deg)}
    }; transform: rotate(30deg)`
      : ''}
`;

export const ItemSection = styled.div`
  width: 40px;
  height: 8px;
  border-radius: 80% 80% 40% 40%;

  position: absolute;
  top: -8px;
  @media screen and (min-width: 1024px) {
    left: 50%;
  }
  left: 52%;

  &:after {
    content: url('/icon/elementElipse.svg');
  }
  @media screen and (min-width: 1024px) {
    transform: rotate(-40deg);
  }
  transform: rotate(-35deg);
`;

export const Imgen = styled.img<Props>`
  ${(props) =>
    props.ismode === 0
      ? `
@media screen and (min-width: 1024px) 
{
  {transform: rotate(-45deg)}
}; transform: rotate(-15deg);`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(-65deg)}
  }; transform: rotate(-50deg);`
      : ''}
  ${(props) =>
    props.ismode === 2
      ? `
  @media screen and (min-width: 1024px) 
  {
    {transform: rotate(-85deg)}
  }; transform: rotate(-95deg);`
      : ''}
`;

export const Styles = {
  SectionAtom: tw(Item)``,
  Atom: tw(ItemSection)``,
  Image: tw(Imgen)``,
  BlockTextSelect: tw(
    SectionTitle,
  )`text-2xl cursor-pointer lg:absolute left-0 bottom-2 lg:bottom-2 lg:left-auto lg:top-7 flex lg:block`,
  TextSelect: tw(SectionTitle)<Props>`py-7 opacity-70 hover:opacity-100 px-5
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}`,
  SubSection: tw(SubSection)``,

  // HeroFooter

  SectionHeroFooter: tw.section`h-auto lg:h-96 text-primary lg:rounded-3xl font-Primary lg:border border-primary my-24 bg-gradient-to-b lg:from-gray-900 from-gray-700 border-opacity-10 flex justify-center items-center`,
  TextHeroFooter: tw.h5`text-4xl lg:p-44 p-14 font-light leading-relaxed lg:leading-normal`,
};
