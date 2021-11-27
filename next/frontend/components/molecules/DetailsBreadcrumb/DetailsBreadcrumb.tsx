import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import { TestIDs } from "@/utils/test.util";
import Link from "next/link";
import React from "react";
import S from "./DetailsBreadcrumb.styled";

export type DetailsBreadcrumbProps = {
  crumbs: { text: string; link: string }[];
};

const DetailsBreadcrumb: React.FC<DetailsBreadcrumbProps> = ({ crumbs }) => {
  let i = 0;
  const items: JSX.Element[] = [];

  for (const breadcrumb of crumbs) {
    items.push(<SvgElem key={i++} svg={SvgElems.IconArrowRightGrey} />);
    items.push(
      <Link key={i++} href={breadcrumb.link}>
        {breadcrumb.text}
      </Link>
    );
  }

  return (
    <S.Container data-testid={TestIDs.DetailsBreadcrumb}>
      <S.Crumbs>
        <Link href={LinkRoutes.Home}>Home</Link>
        {items}
      </S.Crumbs>
    </S.Container>
  );
};

export default DetailsBreadcrumb;
