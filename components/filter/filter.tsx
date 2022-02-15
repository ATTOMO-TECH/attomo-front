import Image from 'next/image';
import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import InputSelect from '../form/select';
import { DEPARTMENT } from '../../const/constGlobal';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function FilterMenu({ isOpen, toggle }: Props) {
  return (
    <>
      <Filter.BlockFilter
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Filter.AlinItems ismode={BUTTON_ACTIVE.OFF}>
          <Filter.ItemsMenu>
            <Link href="/">
              <Image
                src="/icon/isoAttomo.svg"
                width={30}
                height={30}
                alt="Attomo"
              />
            </Link>
          </Filter.ItemsMenu>
          <Filter.ItemsMenu onClick={toggle}>
            <Image src="/icon/close.svg" width={30} height={30} alt="close" />
          </Filter.ItemsMenu>
        </Filter.AlinItems>
        <div className="pt-48 flex justify-center flex-wrap text-primary">
          <input
            type="text"
            placeholder="Buscar"
            className="border-b border-primary bg-secundary text-primary w-4/6 font-Primary text-2xl outline-none focus:opacity-100 opacity-50 ease-in-out duration-300 font-light"
          />
          <div className="w-full ">
            <div className="w-4/6 flex justify-center m-auto pt-40 items-baseline">
              <div className="w-full flex justify-between">
                <h6 className="text-xl">Tématica</h6>
                <div className="w-2/5">
                  <InputSelect options={DEPARTMENT} valueLabel="Tématica" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full ">
            <div className="w-4/6 flex justify-center m-auto pt-40 items-baseline">
              <div className="w-full flex justify-between">
                <h6 className="text-xl">Fecha</h6>
                <div className="w-2/5">
                  <InputSelect options={DEPARTMENT} valueLabel="Tématica" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Filter.BlockFilter>
    </>
  );
}
