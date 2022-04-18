import { BUTTON_ACTIVE } from '../../const/const';
import { Styles, UsStyles } from './style';

type Props = {
  data: any;
};

export default function OneProject({ data }: Props) {
  return (
    <>
      <Styles.SectionProjects>
        <Styles.BlockSections ismode={BUTTON_ACTIVE.ON}>
          <Styles.BlockSection ismode={BUTTON_ACTIVE.ON}>
            <img src="/team.jpg" width={800} height={600} alt="us" />
          </Styles.BlockSection>
          <Styles.OnlyProjectBlock>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>
              {data.Text}
            </UsStyles.Title>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>
              {data.Subtext}
            </UsStyles.Title>
          </Styles.OnlyProjectBlock>
        </Styles.BlockSections>
      </Styles.SectionProjects>
    </>
  );
}
