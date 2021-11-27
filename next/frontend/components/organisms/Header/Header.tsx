import useDimensions from "@/hooks/useDimensions.hook";
import Link from "next/link";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import Search from "@/components/molecules/Search/Search";
import { useClickAway } from "react-use";
import React from "react";
import Head from "next/head";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import { scrollToTop } from "@/utils/scroll.util";
import NavContext from "@/contexts/Nav.context";
import S from "./Header.styled";
import NavDropdown from "./NavDropdown";
import NavPage from "./NavPage";
import { useRouter } from "next/dist/client/router";
import NavSuggestions from "./NavSuggestions";
import useEventListener, {
  useWindowEventListener,
} from "@/hooks/useEventListener.hook";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { is768, is1280 } = useDimensions();
  const { title, description, trigger, setNavHeight } =
    React.useContext(NavContext);

  const [isOpenNav, setIsOpenNav] = React.useState(false);
  const [searchComplex, setSearchComplex] = React.useState(false);
  const [searchable, setSearchable] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState<
    "UNIVERSITIES" | "COURSES" | null
  >(null);
  const [suggestionTimeout, setSuggestionTimeout] =
    React.useState<NodeJS.Timeout>();
  const [hovering, setHovering] = React.useState(false);

  const refUniversities = React.useRef<HTMLAnchorElement>(null);
  const refUniversitySuggestions = React.useRef<HTMLDivElement>(null);
  const refCourses = React.useRef<HTMLAnchorElement>(null);
  const refCourseSuggestions = React.useRef<HTMLDivElement>(null);
  const refHeader = React.useRef<HTMLElement>(null);
  const refSearchComplex = React.useRef<HTMLDivElement>(null);
  useClickAway(refSearchComplex, () => setSearchComplex(false));

  const onClickNav = () => setIsOpenNav(!isOpenNav);

  const onSearchComplex = () => {
    setSearchComplex(true);
    if (refSearchComplex.current) {
      const input = refSearchComplex.current.querySelector("input");
      if (input) input.focus();
    }
  };

  const navIcon = isOpenNav ? SvgElems.IconCloseWhite : SvgElems.IconNav;

  const router = useRouter();

  React.useEffect(() => setIsOpenNav(false), [router]);

  React.useEffect(() => {
    if (hovering && suggestionTimeout) clearTimeout(suggestionTimeout);
  }, [hovering, suggestionTimeout]);

  React.useEffect(() => {
    if (!hovering)
      setSuggestionTimeout(setTimeout(() => setSuggestions(null), 500));
  }, [hovering]);

  const setIsHovering = () => setHovering(true);
  const setNotHovering = () => setHovering(false);

  useEventListener(refUniversities, "mouseover", () => {
    setIsHovering();
    setSuggestions("UNIVERSITIES");
  });
  useEventListener(refCourses, "mouseover", () => {
    setIsHovering();
    setSuggestions("COURSES");
  });
  useEventListener(refUniversities, "mouseout", setNotHovering);
  useEventListener(refCourses, "mouseout", setNotHovering);
  useEventListener(refUniversitySuggestions, "mouseover", setIsHovering);
  useEventListener(refCourseSuggestions, "mouseover", setIsHovering);
  useEventListener(refUniversitySuggestions, "mouseout", setNotHovering);
  useEventListener(refCourseSuggestions, "mouseout", setNotHovering);
  useClickAway(refUniversitySuggestions, () => setSuggestions(null));
  useClickAway(refCourseSuggestions, () => setSuggestions(null));

  React.useEffect(() => {
    const height = refHeader.current?.clientHeight || 0;
    setNavHeight(height);
  }, [setNavHeight]);

  React.useEffect(() => {
    if (!trigger?.current) setSearchable(true);
  }, [trigger]);

  const onScroll = () => {
    if (trigger?.current && refHeader.current) {
      const height = refHeader.current.clientHeight;
      const offset = trigger.current.getBoundingClientRect().top;
      setNavHeight(height);
      setSearchable(offset < height);
    }
  };

  useWindowEventListener("scroll", onScroll);

  return (
    <S.Header ref={refHeader}>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>

      <S.HeaderMain>
        <S.Logo>
          <Link href={LinkRoutes.Home}>
            <a aria-label="Home Page">
              <SvgElem
                svg={
                  is768
                    ? SvgElems.LogoSecureMyScholarship
                    : SvgElems.LogoSecureMyScholarshipMobile
                }
                onClick={scrollToTop}
              />
            </a>
          </Link>
        </S.Logo>

        {is768 ? (
          <S.Search
            visible={searchable && !searchComplex}
            onClick={onSearchComplex}
          >
            <Search.Minimized />
          </S.Search>
        ) : (
          <div></div>
        )}

        <S.Nav>
          {is1280 && !searchComplex && (
            <Link href={LinkRoutes.Universities} passHref>
              <S.Link
                hovering={suggestions === "UNIVERSITIES"}
                ref={refUniversities}
              >
                <p>Universities</p>
                <NavSuggestions
                  ref={refUniversitySuggestions}
                  universities={suggestions === "UNIVERSITIES"}
                />
              </S.Link>
            </Link>
          )}
          {is1280 && !searchComplex && (
            <Link href={LinkRoutes.Courses} passHref>
              <S.Link hovering={suggestions === "COURSES"} ref={refCourses}>
                <p>Courses</p>
                <NavSuggestions
                  ref={refCourseSuggestions}
                  courses={suggestions === "COURSES"}
                />
              </S.Link>
            </Link>
          )}

          {/* <button aria-label="Globe">
            <SvgElem svg={SvgElems.IconGlobe} />
          </button> */}

          {is1280 ? (
            <Dropdown
              onReclickCollapse
              focused={isOpenNav}
              onChangeFocus={setIsOpenNav}
            >
              <button aria-label="Navigation Menu">
                <SvgElem svg={navIcon} />
              </button>
              <NavDropdown />
            </Dropdown>
          ) : (
            <button onClick={onClickNav} aria-label="Navigation Menu">
              <SvgElem
                svg={isOpenNav ? SvgElems.IconCloseWhite : SvgElems.IconNav}
              />
            </button>
          )}
        </S.Nav>

        {!is1280 && isOpenNav && <NavPage />}
      </S.HeaderMain>

      {!is768 ? (
        <S.Search
          visible={searchable && !searchComplex}
          onClick={onSearchComplex}
        >
          <Search.Minimized />
        </S.Search>
      ) : (
        <div></div>
      )}

      <S.SearchComplex ref={refSearchComplex} visible={searchComplex}>
        <Search.Complex />
      </S.SearchComplex>
    </S.Header>
  );
};

Header.displayName = "Header";

export default Header;
