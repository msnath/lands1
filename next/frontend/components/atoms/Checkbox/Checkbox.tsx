import { TestIDs } from "@/utils/test.util";
import S from "./Checkbox.styled";

export type CheckboxProps = {
  text: string;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Checkbox: React.FC<CheckboxProps> = ({ text, checked, onClick }) => {
  return (
    <S.Button
      data-testid={TestIDs.Checkbox}
      checked={checked ? 1 : 0}
      onClick={onClick}
    >
      <S.Checkmark />
      {text}
    </S.Button>
  );
};

export default Checkbox;
