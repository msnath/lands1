import Carousel from "@/components/atoms/Carousel/Carousel";
import CourseCard, {
  CourseCardProps,
} from "@/components/molecules/CourseCard/CourseCard";
import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import Algolia, { AlgoliaIndex } from "@/configs/algolia.config";
import useCarouselSlides from "@/hooks/useCarouselSlides";
import React from "react";
import { useQuery } from "react-query";

type DetailsSimilarCoursesProps = {
  course_id: number;
  country_name: string;
  category_name: string;
  level_name: string;
  tuition_fee_in_usd: number;
};

const DetailsSimilarCourses: React.FC<DetailsSimilarCoursesProps> = ({
  course_id,
  country_name,
  category_name,
  level_name,
  tuition_fee_in_usd,
}) => {
  const { data } = useQuery<CourseCardProps[]>(
    ["courses", "similar", country_name, category_name],
    async () => {
      const numericFilters = [`is_active=1`, `institute_is_active=1`];
      if (tuition_fee_in_usd) {
        numericFilters.push(
          `tuition_fee.tuition_fee_in_usd>=${tuition_fee_in_usd * 0.8}`,
          `tuition_fee.tuition_fee_in_usd<=${tuition_fee_in_usd * 1.2}`
        );
      }

      const res = await Algolia.Client.initIndex(
        AlgoliaIndex.COURSE_TUITION_FEE
      ).search("", {
        filters: `NOT course_id=${course_id}`,
        numericFilters,
        facetFilters: [
          `country_name:${country_name}`,
          `category_name:${category_name}`,
          `level_name:${level_name}`,
        ],
        hitsPerPage: 6,
      });
      return res.hits.map(
        (h: any): CourseCardProps => ({
          country_name: h.country_name,
          city_name: h.city_name,
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
          institute_qs_rank: h.institute_qs_rank,
          objectID: h.institute_id,
          tuition_fee: {
            currency_code: h.tuition_fee.currency_code,
            tuition_fee: h.tuition_fee.tuition_fee,
          },
          course_id: h.course_id,
          course_name: h.course_name,
          duration: h.duration.tag,
        })
      );
    }
  );

  const slides = useCarouselSlides<CourseCardProps>(data ?? [], CourseCard);

  return (
    <S.Section top={48}>
      <S.Title>Similar Courses</S.Title>
      <Carousel shade="light" slides={slides} />
    </S.Section>
  );
};

export default DetailsSimilarCourses;
