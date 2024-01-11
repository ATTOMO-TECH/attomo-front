import { Navegation } from './styles';
import { FORMVALUES } from '../../hook/types';
import { handleFocus } from '../../hook/eventListener';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  idInput: string;
  toggleClass: (value: boolean) => void;
  isActive: boolean;
  translate: any;
  handleInput: (mail: string) => void;
  setFieldValue: (field: string, value: any) => void;
}

export default function InputForNews({
  idInput,
  toggleClass,
  isActive,
  translate,
  handleInput,
  setFieldValue,
}: Props) {
  const handleActive = () => {
    toggleClass(isActive);
    handleFocus(idInput);
  };

  return (
    <div className="w-80" {...handlersFuntion(handleActive)}>
      <p className="text-primary">{isActive}</p>
      <Navegation.Input
        type="email"
        placeholder={translate.sendEmail}
        id={idInput}
        name={FORMVALUES.EMAIL}
        onChange={(e: any) => {
          handleInput(e.currentTarget.value);
          setFieldValue(FORMVALUES.EMAIL, e.currentTarget.value);
        }}
      />
    </div>
  );
}
