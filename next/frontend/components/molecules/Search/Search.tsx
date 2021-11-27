import GenerateAlgoliaHits from "@/components/algolia/AlgoliaHits/AlgoliaHits";
import AlgoliaSearchBox from "@/components/algolia/AlgoliaSearchBox/AlgoliaSearchBox";
import Backdrop, { useBackdrop } from "@/components/atoms/Backdrop/Backdrop";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import Algolia, { AlgoliaIndex } from "@/configs/algolia.config";
import useDimensions from "@/hooks/useDimensions.hook";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux.hook";
import useSearch from "@/hooks/useSearch.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import TabAction from "@/redux/actions/tab.action";
import LinkRoutes from "@/routes/LinkRoutes.route";
import AlgoliaUtil from "@/utils/algolia.util";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import { useClickAway } from "react-use";
import CourseTile, { CourseTileProps } from "../CourseCard/CourseTile";
import UniversityTile, {
  UniversityTileProps,
} from "../UniversityCard/UniversityTile";
import S from "./Search.styled";
import AlgoliaFilterRadio from "@/components/algolia/AlgoliaFilterRadio/AlgoliaFilterRadio";
import { TestIDs } from "@/utils/test.util";

const useOnClickSearch = () => {
  const router = useRouter();
  const tab = useReduxSelector((state) => state.Tab.tab);

  const onClickSearch: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    if (tab === "UNIVERSITIES") router.push(LinkRoutes.Universities);
    else if (tab === "COURSES") router.push(LinkRoutes.Courses);
  };

  return onClickSearch;
};

const useReduxAlgolia = () => {
  const router = useRouter();
  const { sort, searchState } = useReduxSelector((state) => {
    if (router && router.pathname.includes(LinkRoutes.Universities)) {
      return {
        sort: state.Algolia.instituteSort,
        searchState: state.Algolia.searchState,
      };
    } else if (router && router.pathname.includes(LinkRoutes.Courses)) {
      return {
        sort: state.Algolia.courseSort,
        searchState: state.Algolia.searchState,
      };
    } else {
      return {
        sort: AlgoliaIndex.INSTITUTE_POPULARITY,
        searchState: state.Algolia.searchState,
      };
    }
  });

  const dispatch = useReduxDispatch();
  const onSearchStateChange = (state: any) =>
    dispatch(AlgoliaAction.searchState(state));

  return { sort, searchState, onSearchStateChange };
};

export type SearchLevelProps = {};

const SearchLevel: React.FC<SearchLevelProps> = () => {
  const { is768, is1280 } = useDimensions();
  const { focused, setFocused, props } = useBackdrop(!is768);
  const { sort, searchState, onSearchStateChange } = useReduxAlgolia();

  const edLevel = searchState.menu?.level_name || null;

  return (
    <InstantSearch
      refresh
      searchClient={Algolia.Client}
      indexName={sort}
      searchState={searchState}
      onSearchStateChange={onSearchStateChange}
    >
      <Dropdown focused={focused} onChangeFocus={setFocused} onReclickCollapse>
        <S.Level>
          <p>{edLevel ?? (is1280 ? `Education Level` : `Ed. Level`)}</p>
          <SvgElem svg={SvgElems.IconTriangleDown} />
        </S.Level>
        <Backdrop {...props}>
          <S.LevelDropdown onClick={(e) => e.stopPropagation()}>
            <AlgoliaFilterRadio
              title="Education Level"
              attribute="level_name"
            />
          </S.LevelDropdown>
        </Backdrop>
      </Dropdown>
    </InstantSearch>
  );
};

export type SearchSimpleProps = {
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const SearchSimple = React.forwardRef<HTMLInputElement, SearchSimpleProps>(
  ({ input }, ref) => {
    const { value, onChange } = useSearch();

    return (
      <S.SimpleSearch data-testid={TestIDs.SearchSimple}>
        <S.SimpleInput
          value={value}
          onChange={onChange}
          {...input}
          type="search"
          aria-label="Search"
          placeholder={input?.placeholder || "Start your search"}
          ref={ref}
        />
        <S.SimpleButton aria-label="Search Button">
          <SvgElem svg={SvgElems.IconSearch} />
        </S.SimpleButton>
      </S.SimpleSearch>
    );
  }
);

SearchSimple.displayName = "SearchSimple";

export type SearchMinimizedProps = {
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const SearchMinimized = React.forwardRef<
  HTMLInputElement,
  SearchMinimizedProps
>(({ input }, ref) => {
  const { value, onChange } = useSearch();
  const onClickSearch = useOnClickSearch();

  return (
    <S.Search data-testid={TestIDs.SearchMinimized}>
      <SearchLevel />
      <S.Separator />
      <S.Input
        value={value}
        onChange={onChange}
        {...input}
        type="search"
        aria-label="Search"
        placeholder={input?.placeholder || "Start your search"}
        ref={ref}
      />
      <S.Button aria-label="Search Button" onClick={onClickSearch}>
        <SvgElem svg={SvgElems.IconSearch} />
      </S.Button>
    </S.Search>
  );
});

SearchMinimized.displayName = "SearchMinimized";

export type SearchMaximizedProps = {
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const SearchMaximized = React.forwardRef<
  HTMLInputElement,
  SearchMaximizedProps
>(({ input }, ref) => {
  const { is768 } = useDimensions();
  const { value, onChange } = useSearch();

  const onClickSearch = useOnClickSearch();

  return (
    <S.SearchMaximized data-testid={TestIDs.SearchMaximized}>
      {is768 ? (
        <S.Search maximized>
          <SearchLevel />
          <S.Separator />
          <S.Input
            value={value}
            onChange={onChange}
            {...input}
            type="search"
            aria-label="Search"
            placeholder={input?.placeholder || "Start your search"}
            ref={ref}
          />
          <S.Button padding aria-label="Search Button" onClick={onClickSearch}>
            <SvgElem svg={SvgElems.IconSearch} />
            <p>Search</p>
          </S.Button>
        </S.Search>
      ) : (
        <SearchMinimized input={input} ref={ref} />
      )}
    </S.SearchMaximized>
  );
});

SearchMaximized.displayName = "SearchMaximized";

export type SearchComplexProps = {
  input?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const UniversitiesHits = GenerateAlgoliaHits<UniversityTileProps>();
const CoursesHits = GenerateAlgoliaHits<CourseTileProps>();

const SearchComplex: React.FC<SearchComplexProps> = ({ input }) => {
  const router = useRouter();
  const { tab, instituteSort, courseSort, searchState } = useReduxSelector(
    (state) => ({
      tab: state.Tab.tab,
      instituteSort: state.Algolia.instituteSort,
      courseSort: state.Algolia.courseSort,
      searchState: state.Algolia.searchState,
    })
  );
  const dispatch = useReduxDispatch();

  const [focused, setFocused] = React.useState(false);

  const refContainer = React.useRef<HTMLDivElement>(null);
  const refInput = React.useRef<HTMLInputElement>(null);

  useClickAway(refContainer, () => setFocused(false));

  if (refContainer.current) {
    refContainer.current.onclick = () => {
      setFocused(true);
      if (refInput.current) refInput.current.focus();
    };
  }
  if (refInput.current) {
    refInput.current.onfocus = () => setFocused(true);
  }

  React.useEffect(() => {
    if (refInput.current) refInput.current.blur();
  }, [router.pathname]);

  const sort =
    (tab === "UNIVERSITIES" && instituteSort) ||
    (tab === "COURSES" && courseSort) ||
    "";

  const onSearchStateChange = (state: any) =>
    dispatch(AlgoliaAction.searchState(state));

  const onClickUniversities = () => {
    if (refContainer.current) refContainer.current.focus();
    dispatch(TabAction.setTab("UNIVERSITIES"));
  };

  const onClickCourses = () => {
    if (refContainer.current) refContainer.current.focus();
    dispatch(TabAction.setTab("COURSES"));
  };

  return (
    <S.SearchMaximized data-testid={TestIDs.SearchComplex} ref={refContainer}>
      <S.Tabs>
        <S.Tab selected={tab === "UNIVERSITIES"} onClick={onClickUniversities}>
          <p>Universities</p>
        </S.Tab>
        <S.Tab selected={tab === "COURSES"} onClick={onClickCourses}>
          <p>Courses</p>
        </S.Tab>
      </S.Tabs>

      <S.SearchContainer>
        <InstantSearch
          refresh
          searchClient={Algolia.Client}
          indexName={sort}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <Configure {...AlgoliaUtil.searchConfig(tab)} />
          <AlgoliaSearchBox inputRef={refInput} input={input} />
          {searchState.query && focused && (
            <S.ResultsContainer>
              <p>Suggested Searches</p>
              <S.Results>
                {tab === "UNIVERSITIES" && (
                  <UniversitiesHits Component={UniversityTile} />
                )}
                {tab === "COURSES" && <CoursesHits Component={CourseTile} />}
              </S.Results>
            </S.ResultsContainer>
          )}
        </InstantSearch>
      </S.SearchContainer>

      <S.Suggestions>
        <ul>
          <li>Suggested:</li>
          <li>Computer Science</li>
          <li>Heriot-Watt</li>
          <li>Birmingham</li>
          <li>Finance</li>
          <li>Postgraduate</li>
        </ul>
      </S.Suggestions>
    </S.SearchMaximized>
  );
};

SearchComplex.displayName = "SearchComplex";

const Search = {
  Simple: SearchSimple,
  Minimized: SearchMinimized,
  Maximized: SearchMaximized,
  Complex: SearchComplex,
};

export default Search;
