import Layout from "@/components/styled/Layout.styled";
import Algolia from "frontend/configs/algolia.config";
import S from "@/styles/search.styled";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import React from "react";
import AlgoliaFilterBar from "@/components/algolia/AlgoliaFilterBar/AlgoliaFilterBar";
import AlgoliaSearchHeader from "@/components/algolia/AlgoliaSearchHeader/AlgoliaSearchHeader";
import GenerateAlgoliaInfiniteHits from "@/components/algolia/AlgoliaInfiniteHits/AlgoliaInfiniteHits";
import CourseCard, {
  CourseCardProps,
} from "@/components/molecules/CourseCard/CourseCard";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import AlgoliaUtil from "@/utils/algolia.util";
import LinkRoutes from "@/routes/LinkRoutes.route";
import DetailsBreadcrumb from "@/components/molecules/DetailsBreadcrumb/DetailsBreadcrumb";
import useMeta from "@/hooks/useMeta.hook";

const AlgoliaInfiniteHits = GenerateAlgoliaInfiniteHits<CourseCardProps>();

const useReduxAlgolia = () => {
  const state = useReduxSelector((state) => ({
    sort: state.Algolia.courseSort,
    searchState: state.Algolia.searchState,
  }));

  const dispatch = useReduxDispatch();
  const onSearchStateChange = (state: any) =>
    dispatch(AlgoliaAction.searchState(state));

  return { ...state, onSearchStateChange };
};

type CoursesPageProps = {};

const CoursesPage: React.FC<CoursesPageProps> = () => {
  useMeta("Secure My Scholarship | Courses");

  const { sort, searchState, onSearchStateChange } = useReduxAlgolia();

  return (
    <Layout.Wide>
      <S.Main>
        <InstantSearch
          refresh
          searchClient={Algolia.Client}
          indexName={sort}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <Configure {...AlgoliaUtil.coursesConfig} />

          <DetailsBreadcrumb
            crumbs={[{ text: "Courses", link: LinkRoutes.Courses }]}
          />
          <AlgoliaSearchHeader />
          <AlgoliaFilterBar />

          <main>
            <AlgoliaInfiniteHits Component={CourseCard} />
          </main>
        </InstantSearch>
      </S.Main>
    </Layout.Wide>
  );
};

export default CoursesPage;
