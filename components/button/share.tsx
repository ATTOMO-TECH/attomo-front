import Image from 'next/image';
import Link from 'next/link';
import { ICONNAV } from '../../const/constGlobal';

interface Props {
  valueUrl: any;
  isOpen: boolean;
  toggle: () => void;
}
export default function BtnShare({ valueUrl, isOpen, toggle }: Props) {
  // const [canShare, setCanShare] = useState<any | undefined>(undefined);

  // setCanShare(
  //   navigator.share({
  //     title: 'Attomo ',
  //     text: 'Attomo Estudio',
  //     url: 'https://www.google.com/',
  //   }),
  // );

  return (
    <>
      <button
        type="button"
        className={
          isOpen
            ? 'w-4/6 hidden lg:block h-auto delay-300 duration-300 ease-in-out opacity-100 fixed bottom-96 left-0 z-90'
            : 'w-0 overflow-hidden opacity-0 fixed -left-10  delay-300 duration-300 ease-in-out '
        }
        onChange={() => toggle()}>
        <ul className="absolute w-auto z-90 top-6 bg-primary p-5 shadow-lg shadow-indigo-500/50 ">
          {ICONNAV.map((values) => (
            <Link href={`${valueUrl}`}>
              <li className="w-auto px-1 cursor-pointer hover:opacity-50 py-2">
                <a target="_blank" href={values.Url} rel="noreferrer">
                  <Image
                    src={values.Pic2}
                    width={25}
                    height={25}
                    alt={values.Name}
                    className="shadow-lg shadow-cyan-500/50"
                  />
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </button>
    </>
  );
}
