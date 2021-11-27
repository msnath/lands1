import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import S2 from "./DetailsInformation.styled";
import React from "react";
import DetailsAccordian from "./DetailsAccordian";
import { TestIDs } from "@/utils/test.util";

export type DetailsInformationProps = {
  info?: string;
  admission_reqs?: string;
};

const DetailsInformation: React.FC<DetailsInformationProps> = ({
  info,
  admission_reqs,
}) => {
  return info || admission_reqs ? (
    <S.Section data-testid={TestIDs.DetailsInformation} top={48}>
      <S.Title>Things You Should Know</S.Title>
      <S2.Container>
        {info && (
          <DetailsAccordian header="Overview">
            <div dangerouslySetInnerHTML={{ __html: info }} />
          </DetailsAccordian>
        )}
        {admission_reqs && (
          <DetailsAccordian header="Entry Requirements">
            <div dangerouslySetInnerHTML={{ __html: admission_reqs }} />
          </DetailsAccordian>
        )}
        {false && <DetailsAccordian header="Career Pathway"></DetailsAccordian>}
        {false && (
          <DetailsAccordian header="Course Specifications"></DetailsAccordian>
        )}
      </S2.Container>
    </S.Section>
  ) : (
    <S.Section data-testid={TestIDs.DetailsInformation} top={0} />
  );
};

export default DetailsInformation;
