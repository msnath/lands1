import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import React from "react";
import { AlgoliaFilterCombined } from "../AlgoliaFilter/AlgoliaFilter";
import AlgoliaSort from "../AlgoliaSort/AlgoliaSort";
import useDimensions from "@/hooks/useDimensions.hook";
import { setScrollable } from "@/utils/scroll.util";
import dynamic from "next/dynamic";
import NavContext from "@/contexts/Nav.context";
import S from "./AlgoliaFilterBar.styled";
import useShowMore from "@/hooks/useShowMore.hook";
import AlgoliaFilterDropdown from "../AlgoliaFilterDropdown/AlgoliaFilterDropdown";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import { AlgoliaIndex } from "@/configs/algolia.config";
import { useRouter } from "next/dist/client/router";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { useWindowEventListener } from "@/hooks/useEventListener.hook";

const AlgoliaFilterCheckbox = dynamic(
  () => import("../AlgoliaFilterCheckbox/AlgoliaFilterCheckbox")
);
const AlgoliaFilterRadio = dynamic(
  () => import("../AlgoliaFilterRadio/AlgoliaFilterRadio")
);
const AlgoliaFilterRange = dynamic(
  () => import("../AlgoliaFilterRange/AlgoliaFilterRange")
);

type AlgoliaFilterBarProps = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

const useReduxAlgolia = () => {
  const router = useRouter();
  const { filters, sort, sorts } = useReduxSelector((state) => {
    let filters = 0;

    if (state.Algolia.searchState.menu?.level_name) filters++;
    if (state.Algolia.searchState.refinementList?.category_name) filters++;
    if (state.Algolia.searchState.refinementList?.country_name) filters++;
    if (state.Algolia.searchState.refinementList?.institute_name) filters++;

    const tuition_fee_in_usd =
      state.Algolia.searchState.range?.["tuition_fee.tuition_fee_in_usd"];
    if (tuition_fee_in_usd?.min || tuition_fee_in_usd?.max) filters++;

    if (router && router.pathname.includes(LinkRoutes.Universities)) {
      return {
        filters,
        sort: state.Algolia.instituteSort,
        sorts: state.Algolia.instituteSorts,
      };
    } else if (router && router.pathname.includes(LinkRoutes.Courses)) {
      return {
        filters,
        sort: state.Algolia.courseSort,
        sorts: state.Algolia.courseSorts,
      };
    } else {
      return { filters, sort: AlgoliaIndex.INSTITUTE_POPULARITY, sorts: [] };
    }
  });

  const dispatch = useReduxDispatch();
  const setSort = (sort: AlgoliaIndex) =>
    router && router.pathname.includes(LinkRoutes.Universities)
      ? dispatch(AlgoliaAction.instituteSort(sort))
      : router && router.pathname.includes(LinkRoutes.Courses)
      ? dispatch(AlgoliaAction.courseSort(sort))
      : null;

  return { filters, sort, sorts, setSort };
};

const AlgoliaFilterBar: React.FC<AlgoliaFilterBarProps> = () => {
  const { is768 } = useDimensions();
  const { navHeight } = React.useContext(NavContext);
  const { filters, sort, sorts, setSort } = useReduxAlgolia();
  const [stuck, setStuck] = React.useState(false);
  const [openFacetMobile, setOpenFacetMobile] = React.useState(false);

  const moreCat = useShowMore(20);
  const moreCtr = useShowMore(20);
  const moreUni = useShowMore(20);

  const ref = React.useRef<HTMLDivElement>(null);

  useWindowEventListener("scroll", () => {
    if (ref.current) {
      const offset = ref.current.getBoundingClientRect().top;
      if (offset <= navHeight !== stuck) setStuck(offset <= navHeight);
    }
  });

  React.useEffect(() => {
    setScrollable(!openFacetMobile);
    return () => {
      setScrollable(true);
    };
  }, [openFacetMobile]);

  return (
    <S.FilterBar ref={ref} sticking={stuck} top={navHeight}>
      {!is768 && (
        <S.MobileBar>
          <AlgoliaFilterCombined
            filters={filters}
            svg={SvgElems.IconFilter}
            onClick={() => setOpenFacetMobile(true)}
          />
          <AlgoliaSort sort={sort} sorts={sorts} onClick={setSort} />
        </S.MobileBar>
      )}

      <S.FacetsContainer
        top={navHeight}
        opacity={openFacetMobile ? 1 : 0}
        hasPointerEvents={openFacetMobile}
      >
        {!is768 && (
          <S.MobileCloseButton
            onClick={() => setOpenFacetMobile(false)}
            aria-label="Close"
          >
            <SvgElem svg={SvgElems.IconClose} />
          </S.MobileCloseButton>
        )}

        <S.Facets>
          <AlgoliaFilterDropdown
            title="Education Level"
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

          <AlgoliaFilterDropdown
            title="Country"
            attribute="country_name"
            svg={SvgElems.IconFilterCountry}
          >
            <AlgoliaFilterCheckbox
              title="Country"
              attribute="country_name"
              {...moreCtr}
            />
          </AlgoliaFilterDropdown>

          <AlgoliaFilterDropdown
            title="Budget"
            attribute="tuition_fee.tuition_fee_in_usd"
            svg={SvgElems.IconFilterBudget}
          >
            <AlgoliaFilterRange
              title="Budget"
              attribute="tuition_fee.tuition_fee_in_usd"
            />
          </AlgoliaFilterDropdown>

          <AlgoliaFilterDropdown
            title="University"
            attribute="institute_name"
            svg={SvgElems.IconFilterUniversity}
          >
            <AlgoliaFilterCheckbox
              title="University"
              attribute="institute_name"
              {...moreUni}
              hideCount
            />
          </AlgoliaFilterDropdown>

          {is768 && <AlgoliaSort sort={sort} sorts={sorts} onClick={setSort} />}
        </S.Facets>
      </S.FacetsContainer>
    </S.FilterBar>
  );
};

export default AlgoliaFilterBar;
