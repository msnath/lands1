import S from "@/components/molecules/DetailsSection/DetailsSection.styled";
import S2 from "./DetailsFindCourse.styled";
import Algolia, { AlgoliaIndex } from "@/configs/algolia.config";
import React from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import useDimensions from "@/hooks/useDimensions.hook";
import GenerateAlgoliaHits from "@/components/algolia/AlgoliaHits/AlgoliaHits";
import CourseCardMini, {
  CourseCardMiniProps,
} from "@/components/molecules/CourseCard/CourseCardMini";
import AlgoliaFilterDropdown from "@/components/algolia/AlgoliaFilterDropdown/AlgoliaFilterDropdown";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import AlgoliaFilterCheckbox from "@/components/algolia/AlgoliaFilterCheckbox/AlgoliaFilterCheckbox";
import AlgoliaFilterRadio from "@/components/algolia/AlgoliaFilterRadio/AlgoliaFilterRadio";
import useShowMore from "@/hooks/useShowMore.hook";
import AlgoliaSearchBox from "@/components/algolia/AlgoliaSearchBox/AlgoliaSearchBox";
import AlgoliaResults from "@/components/algolia/AlgoliaResults/AlgoliaResults";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import { useRouter } from "next/dist/client/router";
import AlgoliaUtil from "@/utils/algolia.util";
import { TestIDs } from "@/utils/test.util";

const AlgoliaHits = GenerateAlgoliaHits<CourseCardMiniProps>();

const useReduxAlgolia = () => {
  const state = useReduxSelector((state) => ({
    sort: state.Algolia.instituteSort,
    searchState: state.Algolia.searchState,
  }));

  const dispatch = useReduxDispatch();
  const onSearchStateChange = (state: any) =>
    dispatch(AlgoliaAction.searchState(state));

  return { ...state, onSearchStateChange };
};

export type DetailsFindCourseProps = { institute_name: string };

const DetailsFindCourse: React.FC<DetailsFindCourseProps> = ({
  institute_name,
}) => {
  const router = useRouter();
  const { searchState, onSearchStateChange } = useReduxAlgolia();

  const { is768 } = useDimensions();
  const moreCat = useShowMore(20);

  const description = is768
    ? "We have many courses to choose from whether you’re starting out, looking to improve your career prospects, or looking for a scholarship. Search for your course below."
    : "We have many courses to choose from. Search for your course below.";

  const onClickViewAll = () => {
    const copy = JSON.parse(JSON.stringify(searchState));

    const refinementList = searchState.refinementList ?? {};
    refinementList.institute_name = [institute_name];

    copy.refinementList = refinementList;

    onSearchStateChange(copy);
    router.push(LinkRoutes.Courses);
  };

  return (
    <S.Section top={48} data-testid={TestIDs.DetailsFindCourse}>
      <S.Title>Find a Course</S.Title>
      <S2.Container>
        <S2.Card>
          <p>{description}</p>
          <InstantSearch
            refresh
            searchClient={Algolia.Client}
            searchState={searchState}
            onSearchStateChange={onSearchStateChange}
            indexName={AlgoliaIndex.COURSE_TUITION_FEE}
          >
            <Configure {...AlgoliaUtil.findCourseConfig(institute_name)} />

            <S2.Filters>
              <AlgoliaFilterDropdown
                title={"Education Level"}
                attribute="level_name"
                svg={SvgElems.IconFilterLevel}
              >
                <AlgoliaFilterRadio
                  title="Education Level"
                  attribute="level_name"
                />
              </AlgoliaFilterDropdown>

              <AlgoliaFilterDropdown
                title="Category"
                attribute="category_name"
                svg={SvgElems.IconFilterCategory}
              >
                <AlgoliaFilterCheckbox
                  title="Category"
                  attribute="category_name"
                  {...moreCat}
                />
              </AlgoliaFilterDropdown>

              <S2.Search>
                <AlgoliaSearchBox simple />
              </S2.Search>
            </S2.Filters>

            <AlgoliaResults />

            <S2.Results>
              <AlgoliaHits Component={CourseCardMini} />
              <S2.ViewAll onClick={onClickViewAll}>
                View All <SvgElem svg={SvgElems.IconChevronRightBlue} />
              </S2.ViewAll>
            </S2.Results>
          </InstantSearch>
        </S2.Card>
      </S2.Container>
    </S.Section>
  );
};

export default DetailsFindCourse;
