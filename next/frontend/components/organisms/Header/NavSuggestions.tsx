import { useReduxDispatch } from "@/hooks/useRedux.hook";
import AlgoliaAction from "@/redux/actions/algolia.action";
import NavUtil, { NavData } from "@/utils/nav.util";
import { useRouter } from "next/dist/client/router";
import React from "react";
import S from "./NavSuggestions.styled";

type ListItemsProps = {
  suggestion: { title: string; route: string; items: NavData[] };
};

const ListItems: React.FC<ListItemsProps> = ({ suggestion }) => {
  const router = useRouter();
  const dispatch = useReduxDispatch();

  return (
    <S.List>
      {suggestion.items.map((item, i) => (
        <li
          key={i}
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
        </li>
      ))}
    </S.List>
  );
};

type NavSuggestionsProps = {
  universities?: boolean;
  courses?: boolean;
};

const NavSuggestions = React.forwardRef<HTMLDivElement, NavSuggestionsProps>(
  ({ universities, courses }, ref) => {
    if (universities)
      return (
        <S.Suggestions ref={ref}>
          <S.LeftTop>
            <S.Title>{NavUtil.Suggestions.UNIVERSITY_LEVELS.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.UNIVERSITY_LEVELS} />
          </S.LeftTop>

          <S.LeftBot>
            <S.Title>{NavUtil.Suggestions.UNIVERSITY_COUNTRIES.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.UNIVERSITY_COUNTRIES} />
          </S.LeftBot>

          <S.Right>
            <S.Title>{NavUtil.Suggestions.UNIVERSITY_SEARCHES.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.UNIVERSITY_SEARCHES} />
          </S.Right>
        </S.Suggestions>
      );

    if (courses)
      return (
        <S.Suggestions ref={ref}>
          <S.LeftTop>
            <S.Title>{NavUtil.Suggestions.COURSE_LEVELS.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.COURSE_LEVELS} />
          </S.LeftTop>

          <S.LeftBot>
            <S.Title>{NavUtil.Suggestions.COURSE_CATEGORIES.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.COURSE_CATEGORIES} />
          </S.LeftBot>

          <S.Right>
            <S.Title>{NavUtil.Suggestions.COURSE_SEARCHES.title}</S.Title>
            <ListItems suggestion={NavUtil.Suggestions.COURSE_SEARCHES} />
          </S.Right>
        </S.Suggestions>
      );

    return null;
  }
);

NavSuggestions.displayName = "NavSuggestions";

export default NavSuggestions;
