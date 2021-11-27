import Carousel from "@/components/atoms/Carousel/Carousel";
import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import ScholarshipCard, {
  ScholarshipCardProps,
} from "@/components/molecules/ScholarshipCard/ScholarshipCard";
import useCarouselSlides from "@/hooks/useCarouselSlides";
import React from "react";

type DetailsScholarshipsProps = { fee_waivers: ScholarshipCardProps[] };

const DetailsScholarships: React.FC<DetailsScholarshipsProps> = ({
  fee_waivers,
}) => {
  const slides = useCarouselSlides<ScholarshipCardProps>(
    fee_waivers,
    ScholarshipCard
  );

  return fee_waivers && fee_waivers.length > 0 ? (
    <S.Section top={48} id="scholarships-available">
      <S.Title>Scholarships Available</S.Title>
      <Carousel shade="light" slides={slides} />
    </S.Section>
  ) : (
    <S.Section top={0} id="scholarships-available" />
  );
};

export default DetailsScholarships;
