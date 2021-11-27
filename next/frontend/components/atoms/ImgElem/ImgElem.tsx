import React from "react";
import Image, { ImageProps } from "next/image";

import LogoLockAndStock from "$/assets/img/png/logo-lock-and-stock.png";

import HomePageBanner from "$/assets/img/jpg/home-page-banner.jpg";
import HomePageMap from "$/assets/img/png/home-page-world-map.png";

import SpeakToCounsellor from "$/assets/img/png/speak-to-counsellor.png";

import Mock from "$/assets/img/png/mock.png";
import _PlaceholderBanner from "$/assets/img/png/placeholder-banner.png";
import _PlaceholderLogo from "$/assets/img/png/placeholder-logo.png";

import ArticleCNN from "$/assets/img/png/article-cnn.png";
import ArticleCNNBorder from "$/assets/img/png/article-cnn-border.png";
import ArticleTechRadar from "$/assets/img/png/article-tech-radar.png";
import ArticleTechRadarBorder from "$/assets/img/png/article-tech-radar-border.png";
import ArticleMashable from "$/assets/img/png/article-mashable.png";
import ArticleMashableBorder from "$/assets/img/png/article-mashable-border.png";
import ArticleTheNational from "$/assets/img/png/article-the-national.png";
import ArticleTheNationalBorder from "$/assets/img/png/article-the-national-border.png";
import ArticleArabianBusiness from "$/assets/img/png/article-arabian-business.png";
import ArticleArabianBusinessBorder from "$/assets/img/png/article-arabian-business-border.png";
import ArticleEntrepreneur from "$/assets/img/png/article-entrepreneur.png";
import ArticleEntrepreneurBorder from "$/assets/img/png/article-entrepreneur-border.png";

import SourceAdventus from "$/assets/img/png/source-adventus.png";
import SourceApplyBoard from "$/assets/img/png/source-applyboard.png";
import SourceGlobalUniversitySystems from "$/assets/img/png/source-global-university-systems.png";
import SourceShorelight from "$/assets/img/png/source-shorelight.png";
import SourceNavitas from "$/assets/img/png/source-navitas.png";
import AboutUsIllustration from "$/assets/img/png/about-us-illustration.png";

import Error404 from "$/assets/img/png/error-404.png";
import { TestIDs } from "@/utils/test.util";

export const MockImage = Mock;
export const PlaceholderBanner = _PlaceholderBanner;
export const PlaceholderLogo = _PlaceholderLogo;

export enum ImgElems {
  Mock,

  LogoLockAndStock,

  HomePageBanner,
  HomePageMap,

  SpeakToCounsellor,

  ArticleCNN,
  ArticleCNNBorder,
  ArticleTechRadar,
  ArticleTechRadarBorder,
  ArticleMashable,
  ArticleMashableBorder,
  ArticleTheNational,
  ArticleTheNationalBorder,
  ArticleArabianBusiness,
  ArticleArabianBusinessBorder,
  ArticleEntrepreneur,
  ArticleEntrepreneurBorder,

  SourceAdventus,
  SourceApplyBoard,
  SourceGlobalUniversitySystems,
  SourceShorelight,
  SourceNavitas,

  AboutUsIllustration,

  Error404,
}

export type ImgElemProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  img: ImgElems;
};

const ImgElem: React.FC<ImgElemProps> = ({ img, ...props }) => {
  let IMG = (() => {
    switch (img) {
      case ImgElems.Mock:
        return <Image layout="intrinsic" src={Mock} alt="Mock" />;

      case ImgElems.LogoLockAndStock:
        return (
          <Image
            layout="intrinsic"
            src={LogoLockAndStock}
            alt="Lock And Stock"
          />
        );
      // --------------------------------------------------------------------------------
      // Home Page
      // --------------------------------------------------------------------------------
      case ImgElems.HomePageBanner:
        return (
          <Image
            layout="fill"
            objectFit="cover"
            src={HomePageBanner}
            priority
            alt="Home Page Banner"
            placeholder="blur"
          />
        );

      case ImgElems.HomePageMap:
        return (
          <Image
            layout="fill"
            objectFit="cover"
            src={HomePageMap}
            alt="World Map"
          />
        );

      case ImgElems.SpeakToCounsellor:
        return (
          <Image
            layout="intrinsic"
            src={SpeakToCounsellor}
            alt="Speak to a Counsellor"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleCNN:
        return (
          <Image
            layout="intrinsic"
            src={ArticleCNN}
            alt="Lovin Dubai"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleCNNBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleCNNBorder}
            alt="Lovin Dubai"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleTechRadar:
        return (
          <Image
            layout="intrinsic"
            src={ArticleTechRadar}
            alt="Tech Radar"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleTechRadarBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleTechRadarBorder}
            alt="Tech Radar"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleMashable:
        return (
          <Image
            layout="intrinsic"
            src={ArticleMashable}
            alt="Mashable"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleMashableBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleMashableBorder}
            alt="Mashable"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleTheNational:
        return (
          <Image
            layout="intrinsic"
            src={ArticleTheNational}
            alt="The National"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleTheNationalBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleTheNationalBorder}
            alt="The National"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleArabianBusiness:
        return (
          <Image
            layout="intrinsic"
            src={ArticleArabianBusiness}
            alt="Arabian Business"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleArabianBusinessBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleArabianBusinessBorder}
            alt="Arabian Business"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleEntrepreneur:
        return (
          <Image
            layout="intrinsic"
            src={ArticleEntrepreneur}
            alt="Entrepreneur"
            placeholder="blur"
          />
        );

      case ImgElems.ArticleEntrepreneurBorder:
        return (
          <Image
            layout="intrinsic"
            src={ArticleEntrepreneurBorder}
            alt="Entrepreneur"
            placeholder="blur"
          />
        );

      // --------------------------------------------------------------------------------
      // Footer
      // --------------------------------------------------------------------------------
      case ImgElems.SourceAdventus:
        return (
          <Image
            layout="intrinsic"
            objectFit="cover"
            src={SourceAdventus}
            alt="Adventus"
          />
        );

      case ImgElems.SourceApplyBoard:
        return (
          <Image
            layout="intrinsic"
            objectFit="cover"
            src={SourceApplyBoard}
            alt="Apply Board"
          />
        );

      case ImgElems.SourceGlobalUniversitySystems:
        return (
          <Image
            layout="intrinsic"
            objectFit="cover"
            src={SourceGlobalUniversitySystems}
            alt="Global University Systems"
          />
        );

      case ImgElems.SourceShorelight:
        return (
          <Image
            layout="intrinsic"
            objectFit="cover"
            src={SourceShorelight}
            alt="Shore Light"
          />
        );

      case ImgElems.SourceNavitas:
        return (
          <Image
            layout="intrinsic"
            objectFit="cover"
            src={SourceNavitas}
            alt="Navitas"
          />
        );

      // --------------------------------------------------------------------------------
      // About Us
      // --------------------------------------------------------------------------------
      case ImgElems.AboutUsIllustration:
        return (
          <Image
            layout="intrinsic"
            src={AboutUsIllustration}
            alt="About Us Illustration"
            placeholder="blur"
          />
        );

      // --------------------------------------------------------------------------------
      // Error 404
      // --------------------------------------------------------------------------------
      case ImgElems.Error404:
        return <Image layout="intrinsic" src={Error404} alt="Error 404" />;

      default:
        return null;
    }
  })();

  if (IMG) {
    const IMGprops: ImageProps = IMG.props;

    const props: { [key in keyof ImageProps]: any } = {
      ...IMGprops,
    };

    IMG = React.cloneElement<ImageProps>(IMG, props);
  }

  return (
    <div data-testid={TestIDs.ImgElem} {...props}>
      {IMG}
    </div>
  );
};

export default ImgElem;
