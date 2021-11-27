import { TestIDs } from "@/utils/test.util";
import Image from "next/image";
import S from "./Option.styled";

export type OptionProps = {
  img?: string;
  imgWidth?: number;
  imgHeight?: number;
  text: string;
};

const Option: React.FC<OptionProps> = ({ img, imgWidth, imgHeight, text }) => {
  return (
    <S.Option data-testid={TestIDs.Option}>
      {img && (
        <Image
          layout="fixed"
          src={decodeURIComponent(img ?? "")}
          width={imgWidth ?? 20}
          height={imgHeight ?? 20}
          alt="Option icon"
        />
      )}
      {text}
    </S.Option>
  );
};

export default Option;
