import Carousel from "@/components/atoms/Carousel/Carousel";
import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import UniversityCard, {
  UniversityCardProps,
} from "@/components/molecules/UniversityCard/UniversityCard";
import Algolia, { AlgoliaIndex } from "@/configs/algolia.config";
import useCarouselSlides from "@/hooks/useCarouselSlides";
import React from "react";
import { useQuery } from "react-query";

type DetailsPopularUniversitiesProps = {
  institute_id: number;
  country_name: string;
};

const DetailsPopularUniversities: React.FC<DetailsPopularUniversitiesProps> = ({
  institute_id,
  country_name,
}) => {
  const { data } = useQuery<UniversityCardProps[]>(
    ["universities", "popular", country_name],
    async () => {
      const res = await Algolia.Client.initIndex(
        AlgoliaIndex.INSTITUTE_POPULARITY
      ).search("", {
        filters: `NOT institute_id=${institute_id}`,
        numericFilters: ["is_active=1"],
        facetFilters: [`country_name:${country_name}`],
        hitsPerPage: 6,
      });
      return res.hits.map(
        (h: any): UniversityCardProps => ({
          country_name: h.country_name,
          city_name: h.city_name,
          courses: h.courses,
          fee_waivers: h.fee_waivers.map((f: any) => ({
            title: f.title,
            level_name: f.level_name,
            promotional_scholarship: f.promotional_scholarship,
          })),
          images: {
            logo_img: h.images.logo_img ?? "",
            banner_img: h.images.banner_img ?? "",
          },
          institute_id: h.institute_id,
          institute_name: h.institute_name,
          objectID: h.institute_id,
          qs_rank: h.qs_rank,
          tuition_fee: {
            currency_code: h.tuition_fee.currency_code,
            tuition_fee: h.tuition_fee.tuition_fee,
          },
        })
      );
    }
  );

  const slides = useCarouselSlides<UniversityCardProps>(
    data ?? [],
    UniversityCard
  );

  return (
    <S.Section top={48}>
      <S.Title>Other Popular Universities</S.Title>
      <Carousel shade="light" slides={slides} />
    </S.Section>
  );
};

export default DetailsPopularUniversities;
