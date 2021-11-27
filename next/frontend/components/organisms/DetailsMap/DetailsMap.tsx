import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import S2 from "./DetailsMap.styled";
import Env from "@/configs/env.config";
import React from "react";

type DetailsMapProps = {
  address: string;
  institute_name: string;
  country_name: string;
};

const DetailsMap: React.FC<DetailsMapProps> = ({
  address,
  institute_name,
  country_name,
}) => {
  return (
    <S.Section top={48}>
      <S.Title>Where we are</S.Title>
      <S2.Container>
        <S2.Card>
          <S2.Address>{address}</S2.Address>
          {address && (
            <S2.Map
              title="Google Maps"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${
                Env.MAPS_KEY
              }&q=${encodeURIComponent(institute_name + ", " + country_name)}`}
            />
          )}
        </S2.Card>
      </S2.Container>
    </S.Section>
  );
};

export default DetailsMap;
