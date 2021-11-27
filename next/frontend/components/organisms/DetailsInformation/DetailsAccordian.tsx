import useAccordian from "@/hooks/useAccordian.hook";
import { TestIDs } from "@/utils/test.util";
import S2 from "./DetailsAccordian.styled";

export type DetailsAccordianProps = { header: string };

const DetailsAccordian: React.FC<DetailsAccordianProps> = ({
  header,
  children,
}) => {
  const { refContent, refHeader, open, height, onToggle } = useAccordian();

  return (
    <S2.Accordian data-testid={TestIDs.DetailsAccordian}>
      <S2.Icon
        open={open}
        onClick={onToggle}
        aria-label="Expand for more info"
      />
      <S2.Header ref={refHeader} open={open}>
        {header}
      </S2.Header>
      <S2.Content ref={refContent} open={open} height={height}>
        {children}
      </S2.Content>
    </S2.Accordian>
  );
};

export default DetailsAccordian;
