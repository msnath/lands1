import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import Divider from "@/components/styled/Divider.styled";
import { useReduxDispatch } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import LinkRoutes from "@/routes/LinkRoutes.route";
import NavUtil, { TSuggestions } from "@/utils/nav.util";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import S from "./NavPage.styled";
import NavPageSlide from "./NavPageSlide";

type TPage = "MAIN" | "UNIVERSITIES" | "COURSES" | TSuggestions;

type NavPageProps = {};

const NavPage: React.FC<NavPageProps> = () => {
  const router = useRouter();
  const [position, setPosition] = React.useState<0 | 1 | 2>(0);
  const [page, setPage] = React.useState<TPage>("MAIN");

  const dispatch = useReduxDispatch();

  const setPagePosition = (page: TPage, position: 0 | 1 | 2) => {
    setPage(page);
    setPosition(position);
  };

  return (
    <S.Container>
      <S.Body position={position}>
        {/* Main */}
        <NavPageSlide offset={0} current={page === "MAIN"}>
          <Divider height={3} />
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("UNIVERSITIES", 1)}
          >
            Universities
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("COURSES", 1)}
          >
            Courses
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem grey>
            <Link href={LinkRoutes.FAQs}>FAQs</Link>
          </S.ListItem>
          <S.ListItem grey>
            <Link href={LinkRoutes.Blog}>Blog</Link>
          </S.ListItem>
          <S.ListItem grey>
            <Link href={LinkRoutes.AboutUs}>Who We Are</Link>
          </S.ListItem>
          <S.ListItem grey>
            <Link href={LinkRoutes.ContactUs}>Contact Us</Link>
          </S.ListItem>
        </NavPageSlide>

        {/* Universities */}
        <NavPageSlide
          offset={1}
          current={page === "UNIVERSITIES"}
          onBack={() => setPagePosition("MAIN", 0)}
        >
          <S.ListItem white>
            <Link href={LinkRoutes.Universities}>Universities</Link>
            <Link href={LinkRoutes.Universities} aria-label="Universities">
              <a>
                <SvgElem svg={SvgElems.IconArrowRightBlueLong} />
              </a>
            </Link>
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("UNIVERSITY_LEVELS", 2)}
          >
            Education Level
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("UNIVERSITY_COUNTRIES", 2)}
          >
            Top Countries
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("UNIVERSITY_SEARCHES", 2)}
          >
            Popular Searches
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
        </NavPageSlide>

        {/* Courses */}
        <NavPageSlide
          offset={1}
          current={page === "COURSES"}
          onBack={() => setPagePosition("MAIN", 0)}
        >
          <S.ListItem white>
            <Link href={LinkRoutes.Courses}>Courses</Link>
            <Link href={LinkRoutes.Courses}>
              <a aria-label="Learn more about this Course">
                <SvgElem svg={SvgElems.IconArrowRightBlueLong} />
              </a>
            </Link>
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("COURSE_LEVELS", 2)}
          >
            Education Level
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("COURSE_CATEGORIES", 2)}
          >
            Top Categories
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
          <S.ListItem
            grey
            clickable
            onClick={() => setPagePosition("COURSE_SEARCHES", 2)}
          >
            Popular Searches
            <SvgElem svg={SvgElems.IconChevronRight} />
          </S.ListItem>
        </NavPageSlide>

        {/* Suggestions */}
        {Object.keys(NavUtil.Suggestions).map((key) => {
          const suggestion = NavUtil.Suggestions[key];
          return (
            <NavPageSlide
              key={key}
              offset={2}
              current={page === key}
              onBack={() =>
                key.includes("UNIVERSITY")
                  ? setPagePosition("UNIVERSITIES", 1)
                  : key.includes("COURSE")
                  ? setPagePosition("COURSES", 1)
                  : setPagePosition("MAIN", 0)
              }
            >
              <S.ListItem white>{suggestion.title}</S.ListItem>

              {suggestion.items.map((item, i) => (
                <S.ListItem
                  key={i}
                  grey
                  clickable
                  onClick={async () => {
                    await router.push(suggestion.route);
                    if (item.instituteSort)
                      dispatch(AlgoliaAction.instituteSort(item.instituteSort));
                    if (item.courseSort)
                      dispatch(AlgoliaAction.courseSort(item.courseSort));
                    dispatch(AlgoliaAction.searchState(item.searchState));
                  }}
                >
                  {item.text}
                </S.ListItem>
              ))}
            </NavPageSlide>
          );
        })}
      </S.Body>
    </S.Container>
  );
};

export default NavPage;
