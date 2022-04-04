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
  border-radius: 100%;
  transition-duration: 0.4s;
  transition-property: transform;
  &:before {
    content: url('/icon/elips.svg');
    position: fixed;
    z-index: 100 !important;
    -webkit-animation-duration: 4000ms;
    top: -2.3%;
    left: 43%;
    transform: scale(0.6) rotate(22deg);
    @media screen and (min-width: 468px) {
      top: -2.5%;
      left: 42%;
      transform: scale(0.9) rotate(10deg);
    }
    @media screen and (min-width: 640px) {
      top: -2.5%;
      left: 43%;
      transform: scale(0.9) rotate(8deg);
    }
    @media screen and (min-width: 1024px) {
      top: -1%;
      left: 43%;
      transform: scale(0.9) rotate(8deg);
    }
  }
  ${(props) =>
    props.ismode === 0
      ? `
      &:before {

        transform: scale(0.6) rotate(22deg);
      };
      transform:rotate(-65deg);
    @media screen and (min-width: 468px) 
    {      
      &:before {

        transform: scale(0.9) rotate(10deg);
      };
      transform: rotate(-55deg);
    
    };
    @media screen and (min-width: 640px) 
    {
      &:before {
        transform: scale(0.9) rotate(8deg);
      };
      transform: rotate(-55deg);
    
    };
    @media screen and (min-width: 1024px) 
    {
      &:before {

        transform: scale(0.9) rotate(8deg);
      };
      transform: rotate(40deg);

    };
`
      : ''}
  ${(props) =>
    props.ismode === 1
      ? `
      &:before {

        transform: scale(0.6) rotate(24deg);
      };
      transform:rotate(-24deg);
      @media screen and (min-width: 468px) 
      {      
        &:before {
  
          transform: scale(0.9) rotate(10deg);
        };
        transform: rotate(-11deg);
      
      };
      @media screen and (min-width: 640px) {
        @media screen and (min-width: 640px) 
        {
          &:before {
            transform: scale(0.9) rotate(8deg);
          };
        transform: rotate(-8deg);
        
      };
      @media screen and (min-width: 1024px) 
      {
        {
          &:before {
    
            transform: scale(0.9) rotate(8deg);
          };
        transform: rotate(55deg)
      };
`
      : ''}
    ${(props) =>
    props.ismode === 2
      ? `
      &:before {

        transform: scale(0.6) rotate(24deg);
      };
      transform:scale(.99) rotate(22deg);
      @media screen and (min-width: 468px) 
      {
        &:before {
          transform: scale(0.9) rotate(10deg);
        };
        {transform: rotate(30deg)}
      };
      @media screen and (min-width: 640px) {
        @media screen and (min-width: 640px) 
        {
          &:before {
            transform: scale(0.9) rotate(8deg);
          };
        transform: rotate(45deg);
        
      };
      @media screen and (min-width: 1024px) 
      {
        
          &:before {
    
            transform: scale(0.9) rotate(8deg);
          };
        transform: rotate(70deg)
      }`
      : ''}
`;

export const TextTitle = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 32px;
  background: linear-gradient(
    to right,
    #cccfe8 26.04%,
    #ffffff 69.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (min-width: 468px) {
    font-size: 16px;
  }
  @media screen and (min-width: 640px) {
    font-size: 16px;
  }
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
  border: 5px solid white;
  width: 85%;
  height: 85%;
  @media screen and (min-width: 1024px) {
    transform: rotate(0);
    width: 70%;
    height: 70%;
  }
  transform: rotate(70deg);
`;
export const AlingBlock = styled.div`
  bottom: 0%;
  @media screen and (max-width: 468px) {
    bottom: -3.3%;
  }
  @media screen and (min-width: 768px) {
    bottom: -3%;
  }
  @media screen and (min-width: 1024px) {
    bottom: 18%;
  }
`;
export const Styles = {
  SectionCollapse: tw.section`h-screen w-full relative z-80 lg:h-auto font-PrimarySerif flex flex-col-reverse justify-center items-center text-primary m-auto lg:relative md:my-24 mb-24  font-light leading-loose`,
  BlockDescription: tw(
    AlingBlock,
  )`lg:text-right text-xl absolute sm:bottom-12 bottom-0 lg:bottom-24 lg:-right-4 w-full text-center z-10`,
  SubSection: tw(SubSection)`font-light text-base cursor-pointer z-80`,
  BlockImg: tw.div`relative flex justify-center items-center m-0.5 `,
  SectionAtom: tw(
    Item,
  )` transition ease-in-out delay-150  flex justify-center items-center`,
  BlockAtom: tw.div`absolute `,

  BlockTextSelect: tw(
    SectionTitle,
  )`lg:text-2xl text-sm block z-100 lg:absolute  bottom-2 lg:bottom-2 lg:top-7 flex lg:block lg:w-1/3 w-full h-1/3`,
  BlockSectionTitle: tw.div`w-full lg:w-auto z-0 `,
  TextSelect: tw(
    SectionTitle,
  )<Props>`py-7 md:mb-6 sm:mb-0 w-full opacity-40 hover:opacity-100 sm:px-5 px-3 order-last block text-center transition ease-in duration-300 cursor-pointer z-70 md:text-xl  font-Primary
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}`,
  TextCentral: tw(TextTitle)` w-4/6 text-center `,
  Circle: tw(
    Circle,
  )`  absolute  m-auto  -top-2 md:-top-2 lg:top-0 right-0 rounded-full lg:-right-0 md:right-0 flex items-center justify-center`,
  BlockTextCenter: tw(
    CircleInter,
  )`z-10 rounded-full flex items-center justify-center items-center animate-pulse `,
};
