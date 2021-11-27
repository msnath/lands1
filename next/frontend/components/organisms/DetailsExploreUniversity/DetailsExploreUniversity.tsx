import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import S2 from "./DetailsExploreUniversity.styled";
import UniversityCardMini, {
  UniversityCardMiniProps,
} from "@/components/molecules/UniversityCard/UniversityCardMini";
import React from "react";
import { TestIDs } from "@/utils/test.util";

export type DetailsExploreUniversityProps = {
  university: UniversityCardMiniProps;
};

const DetailsExploreUniversity: React.FC<DetailsExploreUniversityProps> = ({
  university,
}) => {
  return (
    <S.Section data-testid={TestIDs.DetailsExploreUniversity} top={48}>
      <S.Title>Explore University</S.Title>

      <S2.Container>
        <UniversityCardMini {...university} />
      </S2.Container>
    </S.Section>
  );
};

export default DetailsExploreUniversity;
