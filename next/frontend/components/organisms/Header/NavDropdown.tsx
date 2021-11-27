import LinkRoutes from "@/routes/LinkRoutes.route";
import Link from "next/link";
import React from "react";
import S from "./NavDropdown.styled";

type NavDropdownProps = {};

const NavDropdown: React.FC<NavDropdownProps> = () => {
  return (
    <S.Dropdown>
      <ul>
        <li>
          <Link href={LinkRoutes.FAQs}>FAQs</Link>
        </li>
        <li>
          <Link href={LinkRoutes.Blog}>Blog</Link>
        </li>
        <li>
          <Link href={LinkRoutes.AboutUs}>Who We Are</Link>
        </li>
        <li>
          <Link href={LinkRoutes.ContactUs}>Contact Us</Link>
        </li>
      </ul>
    </S.Dropdown>
  );
};

export default NavDropdown;
