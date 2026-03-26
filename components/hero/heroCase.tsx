import { BUTTON_ACTIVE } from '../../const/const';
import useDeviceSize from '../../hook/size';
import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string;
  isOpen: boolean;
  scroll: boolean;
  handleChangeReset: () => void;
  OpenMenu: boolean;
}

export default function HeroCase({
  toggle,
  date,
  endDate,
  topic,
  isOpen,
  scroll,
  OpenMenu,
  handleChangeReset,
}: Props) {
  const [width] = useDeviceSize();
  const change: boolean = !!date || !!endDate || !!topic;

  return (
    <>
      <HeadSection.SectionCase mode={BUTTON_ACTIVE.ON}>
        <HeadSection.SectionHeroCases />
        {!isOpen && scroll ? (
          <>
            {!OpenMenu ? (
              <>
                {width > 768 ? (
                  <>
                    <Filter
                      change={change}
                      toggle={toggle}
                      date={date}
                      topic={topic}
                      endDate={endDate}
                      width={width}
                      scroll={scroll}
                      handleChangeReset={handleChangeReset}
                    />
                  </>
                ) : null}
              </>
            ) : null}
          </>
        ) : null}
      </HeadSection.SectionCase>
    </>
  );
}
