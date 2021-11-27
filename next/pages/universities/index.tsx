import Layout from "@/components/styled/Layout.styled";
import Algolia from "frontend/configs/algolia.config";
import S from "@/styles/search.styled";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import React from "react";
import AlgoliaFilterBar from "@/components/algolia/AlgoliaFilterBar/AlgoliaFilterBar";
import AlgoliaSearchHeader from "@/components/algolia/AlgoliaSearchHeader/AlgoliaSearchHeader";
import GenerateAlgoliaInfiniteHits from "@/components/algolia/AlgoliaInfiniteHits/AlgoliaInfiniteHits";
import UniversityCard, {
  UniversityCardProps,
} from "@/components/molecules/UniversityCard/UniversityCard";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import AlgoliaUtil from "@/utils/algolia.util";
import DetailsBreadcrumb from "@/components/molecules/DetailsBreadcrumb/DetailsBreadcrumb";
import LinkRoutes from "@/routes/LinkRoutes.route";
import useMeta from "@/hooks/useMeta.hook";

const AlgoliaInfiniteHits = GenerateAlgoliaInfiniteHits<UniversityCardProps>();

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

type UniversitiesPageProps = {};

const UniversitiesPage: React.FC<UniversitiesPageProps> = () => {
  useMeta("Secure My Scholarship | Universities");

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
          <Configure {...AlgoliaUtil.institutesConfig} />

          <DetailsBreadcrumb
            crumbs={[{ text: "Universities", link: LinkRoutes.Universities }]}
          />
          <AlgoliaSearchHeader />
          <AlgoliaFilterBar />

          <main>
            <AlgoliaInfiniteHits Component={UniversityCard} />
          </main>
        </InstantSearch>
      </S.Main>
    </Layout.Wide>
  );
};

export default UniversitiesPage;
