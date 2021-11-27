import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import Backdrop, { useBackdrop } from "@/components/atoms/Backdrop/Backdrop";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import NavContext from "@/contexts/Nav.context";
import useDimensions from "@/hooks/useDimensions.hook";
import React from "react";
import AlgoliaFilter from "../AlgoliaFilter/AlgoliaFilter";
import S from "./AlgoliaFilterDropdown.styled";

type AlgoliaFilterDropdownProps = {
  title: string;
  attribute: TAlgoliaRefinementAttribute;
  svg: SvgElems;
};

const AlgoliaFilterDropdown: React.FC<AlgoliaFilterDropdownProps> = ({
  title,
  attribute,
  svg,
  children,
}) => {
  const { is1280 } = useDimensions();
  const { navHeight } = React.useContext(NavContext);
  const { focused, setFocused, props } = useBackdrop(!is1280);

  return (
    <Dropdown focused={focused} onChangeFocus={setFocused} onReclickCollapse>
      <AlgoliaFilter
        title={title}
        attribute={attribute}
        svg={svg}
        focused={focused}
      />
      <Backdrop {...props}>
        <S.FilterDropdownModal
          top={navHeight}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </S.FilterDropdownModal>
      </Backdrop>
    </Dropdown>
  );
};

export default AlgoliaFilterDropdown;
