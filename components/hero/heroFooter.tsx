import { HeadSection } from './style';

type Props = {
  text: string;
};
export default function HeroFooter({ text }: Props) {
  return (
    <>
      <HeadSection.SectionHeroFooter>
        <HeadSection.TextHeroFooter>{text}</HeadSection.TextHeroFooter>
      </HeadSection.SectionHeroFooter>
    </>
  );
}
