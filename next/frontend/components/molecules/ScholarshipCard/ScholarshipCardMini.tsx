import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useTooltip from "@/hooks/useTooltip.hook";
import { TestIDs } from "@/utils/test.util";
import React from "react";
import S from "./ScholarshipCardMini.styled";

export type ScholarshipCardMiniProps = {
  text: string;
  description?: string;
  arrow?: boolean;
};

const ScholarshipCardMini: React.FC<ScholarshipCardMiniProps> = ({
  text,
  description,
  arrow,
}) => {
  const [refText, tooltipText] = useTooltip<HTMLParagraphElement>(text);
  const [refDesc, tooltipDesc] = useTooltip<HTMLParagraphElement>(description);

  return (
    <div data-testid={TestIDs.ScholarshipCardMini}>
      <S.Card>
        <S.Icon>
          <SvgElem svg={SvgElems.CardScholarshipMini} />
        </S.Icon>
        <p ref={refText} data-tip={tooltipText}>
          {text}
        </p>
        {arrow && (
          <S.Arrow>
            <SvgElem svg={SvgElems.IconChevronRightBlue} />
          </S.Arrow>
        )}
      </S.Card>

      {description && (
        <S.Description ref={refDesc} data-tip={tooltipDesc}>
          {description}
        </S.Description>
      )}
    </div>
  );
};

export default ScholarshipCardMini;
