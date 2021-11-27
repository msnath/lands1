import React from "react";
import S from "@/styles/about-us.styled";
import Layout from "@/components/styled/Layout.styled";
import { ImgElems } from "@/components/atoms/ImgElem/ImgElem";
import LinkRoutes from "@/routes/LinkRoutes.route";
import ArticleCard from "@/components/atoms/ArticleCard/ArticleCard";
import { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useDimensions from "@/hooks/useDimensions.hook";
import { useWindowEventListener } from "@/hooks/useEventListener.hook";
import useMeta from "@/hooks/useMeta.hook";

type TitleProps = { text: string };

const Title: React.FC<TitleProps> = ({ text, children }) => {
  return (
    <S.Title>
      <span>
        {text}
        {children}
      </span>
      <S.TitleBar />
    </S.Title>
  );
};

type AboutUsPageProps = {};

const AboutUsPage: React.FC<AboutUsPageProps> = () => {
  useMeta("Secure My Scholarship | About Us");

  const refHeader = React.useRef<HTMLHeadingElement>(null);
  const [height, setHeight] = React.useState(0);

  const updateHeight = () => setHeight(refHeader.current?.clientHeight ?? 0);

  useWindowEventListener("resize", updateHeight);

  React.useEffect(() => updateHeight(), []);

  const { is1280 } = useDimensions();

  return (
    <Layout.Wide>
      <S.Background
        height={height}
        svg={SvgElems.AboutUsBackground}
        preserveAspectRatio={is1280 ? "none" : "xMidYMid slice"}
      />

      <Layout.Centered maxWidth={1168}>
        <S.Header ref={refHeader}>
          <S.Texts>
            <h1>
              <S.TextHeyThere svg={SvgElems.TextHeyThere} />
              We&apos;re SecureMyScholarship
            </h1>
            <S.Description>
              <div />
              <p>
                Our mission is to make education more accessible and affordable
                for all by helping students reduce their tuition burden.
              </p>
            </S.Description>
          </S.Texts>
          <S.Illustration img={ImgElems.AboutUsIllustration} />
        </S.Header>

        <S.Container>
          <Title text="Our Journey">
            <S.TextSoFar svg={SvgElems.TextSoFar} />
          </Title>

          <S.Journey>
            <S.Milestone>
              <S.Year>2017</S.Year>
              <S.Month>
                <p>SEPTEMBER</p>
                <p>
                  Lock&Stock launched as a mobile app that helps students fight
                  digital addiction
                </p>
              </S.Month>
            </S.Milestone>

            <S.Milestone>
              <S.Year>2019</S.Year>
              <S.Month>
                <p>APRIL</p>
                <p>
                  SecureMyScholarship launched as a platform on Lock&Stock
                  to connect students with guaranteed scholarships
                </p>
              </S.Month>

              <S.Month>
                <p>DECEMBER</p>
                <p>
                  SecureMyScholarship crosses $10 million in scholarships
                  disbursed
                </p>
              </S.Month>
            </S.Milestone>

            <S.Milestone>
              <S.Year>2020</S.Year>
              <S.Month>
                <p>SEPTEMBER</p>
                <p>
                  SecureMyScholarship crosses 500 partner universities in
                  September 2020
                </p>
              </S.Month>

              <S.Month>
                <p>DECEMBER</p>
                <p>
                  Lock&Stock wins Disruption of the Year at the Gulf Capital
                  Awards
                </p>
              </S.Month>
            </S.Milestone>
          </S.Journey>
        </S.Container>

        <S.Container>
          <Title text="Who said what?">
            <S.TextSsshhhh svg={SvgElems.TextSsshhhh} />
          </Title>

          <S.Articles>
            <ArticleCard
              border
              href={LinkRoutes.Articles.CNN}
              img={ImgElems.ArticleCNN}
            />
            <ArticleCard
              border
              href={LinkRoutes.Articles.TechRadar}
              img={ImgElems.ArticleTechRadar}
            />
            <ArticleCard
              border
              href={LinkRoutes.Articles.Mashable}
              img={ImgElems.ArticleMashable}
            />
            <ArticleCard
              border
              href={LinkRoutes.Articles.TheNational}
              img={ImgElems.ArticleTheNational}
            />
            <ArticleCard
              border
              href={LinkRoutes.Articles.ArabianBusiness}
              img={ImgElems.ArticleArabianBusiness}
            />
            <ArticleCard
              border
              href={LinkRoutes.Articles.Entrepreneur}
              img={ImgElems.ArticleEntrepreneur}
            />
          </S.Articles>
        </S.Container>
      </Layout.Centered>
    </Layout.Wide>
  );
};

export default AboutUsPage;
