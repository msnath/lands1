import styles from "@/styles/index.module.scss";
import ImgElem, { ImgElems } from "@/components/atoms/ImgElem/ImgElem";
import Layout from "@/components/styled/Layout.styled";
import LinkRoutes from "@/routes/LinkRoutes.route";
import Carousel from "@/components/atoms/Carousel/Carousel";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useIntersect from "@/hooks/useIntersect.hook";
import Search from "@/components/molecules/Search/Search";
import React from "react";
import HomePageUtil from "@/utils/index.util";
import Image from "next/image";
import {
  PlaceholderBanner,
  PlaceholderLogo,
} from "@/components/atoms/ImgElem/ImgElem";
import NavContext from "@/contexts/Nav.context";
import Link from "next/link";
import useCarouselSlides from "@/hooks/useCarouselSlides";
import ArticleCard from "@/components/atoms/ArticleCard/ArticleCard";
import gsap, { Power1 } from "gsap";
import useDimensions from "@/hooks/useDimensions.hook";
import { scrollSmooth } from "@/utils/scroll.util";
import useMeta from "@/hooks/useMeta.hook";

type StatisticsCardProps = {
  text: string;
  subtext: string;
  extraText: SvgElems;
  extraTextClassName: string;
};

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  text,
  subtext,
  extraText,
  extraTextClassName,
}) => {
  return (
    <li className={styles.statistics_list_card}>
      <p>{text}</p>
      <p>{subtext}</p>
      <SvgElem svg={extraText} className={extraTextClassName} />
    </li>
  );
};

type StepsCardProps = { number: number; title: string; text: string };

const StepsCard: React.FC<StepsCardProps> = ({ number, title, text }) => {
  return (
    <li className={styles.steps_list_card}>
      <div className={styles.steps_list_card_step}>
        <SvgElem svg={SvgElems.HomePageStepTrapezium} />
        <p>STEP 0{number}</p>
      </div>
      <div className={styles.steps_list_card_body}>
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </li>
  );
};

export type SuggestionCardProps = {
  id: number;
  logo: string;
  banner: string;
  course: string;
  university: string;
  country: string;
};

const SuggestionCard: React.FC<SuggestionCardProps> = ({
  id,
  logo,
  banner,
  course,
  university,
  country,
}) => {
  return (
    <li className={styles.suggestions_list_card}>
      <Link href={LinkRoutes.Course(id)}>
        <a>
          <div className={styles.suggestions_list_card_images}>
            <div className={styles.suggestions_list_card_images_banner}>
              <Image
                layout="intrinsic"
                src={decodeURIComponent(banner ?? "") || PlaceholderBanner}
                alt={university}
                width={400}
                height={100}
                placeholder="blur"
                blurDataURL={
                  decodeURIComponent(banner ?? "") || PlaceholderBanner.src
                }
              />
            </div>
            <div className={styles.suggestions_list_card_images_logo}>
              <Image
                layout="intrinsic"
                src={decodeURIComponent(logo ?? "") || PlaceholderLogo}
                alt={university}
                width={60}
                height={60}
                placeholder="blur"
                blurDataURL={
                  decodeURIComponent(logo ?? "") || PlaceholderLogo.src
                }
              />
            </div>
          </div>
          <SvgElem
            svg={SvgElems.CardWave}
            className={styles.suggestions_list_card_wave}
          />
          <div className={styles.suggestions_list_card_body}>
            <p>{course}</p>
            <p>{university}</p>
            <p>{country}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export type TestimonialCardProps = {
  img: string;
  name: string;
  university: string;
  text: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  img,
  name: person,
  university,
  text,
}) => {
  return (
    <li className={styles.testimonials_list_card}>
      <div className={styles.testimonials_list_card_image}>
        <Image
          layout="intrinsic"
          src={decodeURIComponent(img ?? "") || PlaceholderLogo}
          alt="Profile Picture"
          width={85}
          height={85}
          placeholder="blur"
          blurDataURL={decodeURIComponent(img ?? "") || PlaceholderLogo.src}
        />
      </div>
      <p>{person}</p>
      <p>{university}</p>
      <p>{text}</p>
    </li>
  );
};

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  useMeta("Secure My Scholarship | Home");

  const { trigger } = React.useContext(NavContext);

  const [stats, setStats] = React.useState<[number, number, number]>([0, 0, 0]);
  const [statsOffset, setStatsOffset] = React.useState(0);

  const refStatisticsSection = React.useRef<HTMLElement>(null);
  const refStatistics = React.useRef<HTMLUListElement>(null);
  const refSteps = React.useRef<HTMLUListElement>(null);
  const refAccomodation = React.useRef<HTMLElement>(null);
  const refSuggestions = React.useRef<HTMLDivElement>(null);
  const refTestimonials = React.useRef<HTMLDivElement>(null);
  const refArticles = React.useRef<HTMLDivElement>(null);

  const fadeIn = (elem: HTMLElement | null) =>
    gsap.to(elem, { duration: 0.7, opacity: 1, y: 0, ease: Power1.easeOut });

  const itxStatistics = useIntersect(refStatistics);
  const itxSteps = useIntersect(refSteps);
  const itxAccomodation = useIntersect(refAccomodation);
  const itxSuggestions = useIntersect(refSuggestions);
  const itxTestimonials = useIntersect(refTestimonials);
  const itxArticles = useIntersect(refArticles);

  itxStatistics && fadeIn(refStatistics.current);
  itxSteps && fadeIn(refSteps.current);
  itxAccomodation && fadeIn(refAccomodation.current);
  itxSuggestions && fadeIn(refSuggestions.current);
  itxTestimonials && fadeIn(refTestimonials.current);
  itxArticles && fadeIn(refArticles.current);

  const { is1280 } = useDimensions();
  const { navHeight } = React.useContext(NavContext);

  React.useEffect(() => {
    const section = refStatisticsSection.current;
    if (section)
      setStatsOffset(section.getBoundingClientRect().top + navHeight);
  }, [navHeight]);

  React.useEffect(() => {
    const S1 = 16500;
    const S2 = 91.4;
    const S3 = 84700;
    if (itxStatistics) {
      if (is1280) {
        const repeat = 40;
        let counter = 0;
        const id = setInterval(() => {
          counter++;
          if (counter > repeat) clearInterval(id);
          setStats((prev) => {
            let [s1, s2, s3] = prev;
            s1 = Math.trunc(Math.min(s1 + S1 / repeat));
            s2 = Math.round(Math.min(s2 + S2 / repeat) * 10) / 10;
            s3 = Math.trunc(Math.min(s3 + S3 / repeat));
            return [s1 > S1 ? S1 : s1, s2 > S2 ? S2 : s2, s3 > S3 ? S3 : s3];
          });
        }, 2000 / repeat);
      } else {
        setStats([S1, S2, S3]);
      }
    }
  }, [is1280, itxStatistics]);

  const commafyNumber = (str: number) =>
    str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const stat1 = `${commafyNumber(stats[0])}+`;
  const stat2 = `USD ${stats[1]}M+`;
  const stat3 = `${commafyNumber(stats[2])}+`;

  const suggestions = useCarouselSlides<SuggestionCardProps>(
    HomePageUtil.suggestions,
    SuggestionCard
  );
  const testimonials = useCarouselSlides<TestimonialCardProps>(
    HomePageUtil.testimonials,
    TestimonialCard
  );

  return (
    <Layout.Wide>
      <div className={styles.main}>
        <section className={styles.landing}>
          <ImgElem className={styles.banner} img={ImgElems.HomePageBanner} />

          <h1>Find your Dream University</h1>
          <h2>
            Secure end to end admissions support, with a guaranteed scholarship
          </h2>

          <div ref={trigger} className={styles.landing_search}>
            <Search.Complex />
          </div>
        </section>

        <section className={styles.scroll_container}>
          <div className={styles.scroll}>
            <SvgElem
              svg={SvgElems.HomePageScroll}
              className={styles.scroll_img}
            />
            <button
              className={styles.scroll_button}
              aria-label="Scroll down"
              onClick={() => scrollSmooth(statsOffset)}
            >
              <SvgElem svg={SvgElems.IconArrowDown} />
            </button>
            <p>Scroll to explore</p>
          </div>
        </section>

        <section ref={refStatisticsSection} className={styles.statistics}>
          <ImgElem
            img={ImgElems.HomePageMap}
            className={styles.statistics_map}
          />
          <div className={styles.statistics_title}>
            <h2>We are making education more accessible for everyone</h2>
            <p>Here is how we are doing so far ...</p>
          </div>
          <ul ref={refStatistics} className={styles.statistics_list}>
            <StatisticsCard
              text={stat1}
              subtext="Applications Received"
              extraText={SvgElems.TextSignMeUp}
              extraTextClassName={styles.statistics_list_card_text_1}
            />
            <StatisticsCard
              text={stat2}
              subtext="Scholarships Applied For"
              extraText={SvgElems.TextWaitReally}
              extraTextClassName={styles.statistics_list_card_text_2}
            />
            <StatisticsCard
              text={stat3}
              subtext="Courses Available"
              extraText={SvgElems.TextAhGimmeASec}
              extraTextClassName={styles.statistics_list_card_text_3}
            />
          </ul>
        </section>

        <section className={styles.steps}>
          <div className={styles.steps_title}>
            <h2>
              <span>Secure your </span>
              <span>
                scholarship
                <SvgElem
                  svg={SvgElems.TextFuture}
                  className={styles.steps_title_future}
                />
              </span>
              <span> today!</span>
            </h2>
          </div>
          <ul className={styles.steps_list} ref={refSteps}>
            <StepsCard
              number={1}
              title="Search"
              text="Browse through hundreds of universities from Canada, USA, UK, UAE and other countries."
            />
            <StepsCard
              number={2}
              title="Apply"
              text="Select your dream university and course. Apply in just a few clicks."
            />
            <StepsCard
              number={3}
              title="Secure"
              text="We will assist you in completing your application, comparing offer letters, and securing your enrolment with your guaranteed scholarship."
            />
          </ul>
        </section>

        <section ref={refAccomodation} className={styles.accomodation}>
          <SvgElem svg={SvgElems.IconAirplane} />
          <p>
            Taking off soon? Let our experts help you with your
            <span> Visa & Accomodation</span>
          </p>
        </section>

        <section className={styles.suggestions}>
          <div className={styles.suggestions_title}>
            <h2>Our students just applied for these courses...</h2>
          </div>
          <div ref={refSuggestions} className={styles.suggestions_carousel}>
            <Carousel shade="dark" slides={suggestions} />
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.testimonials_title}>
            <h2>We are on a mission to change the education industry</h2>
            <p>One student at a time</p>
          </div>

          <div ref={refTestimonials} className={styles.testimonials_carousel}>
            <Carousel shade="dark" slides={testimonials} />
          </div>
        </section>

        <section className={styles.articles}>
          <div className={styles.articles_title}>
            <h2>Our impact is already going viral</h2>
            <SvgElem
              svg={SvgElems.TextLookMom}
              className={styles.articles_title_look_mom}
            />
          </div>

          <div ref={refArticles} className={styles.articles_list}>
            <ArticleCard
              href={LinkRoutes.Articles.CNN}
              img={ImgElems.ArticleCNNBorder}
            />
            <ArticleCard
              href={LinkRoutes.Articles.TechRadar}
              img={ImgElems.ArticleTechRadarBorder}
            />
            <ArticleCard
              href={LinkRoutes.Articles.Mashable}
              img={ImgElems.ArticleMashableBorder}
            />
            <ArticleCard
              href={LinkRoutes.Articles.TheNational}
              img={ImgElems.ArticleTheNationalBorder}
            />
            <ArticleCard
              href={LinkRoutes.Articles.ArabianBusiness}
              img={ImgElems.ArticleArabianBusinessBorder}
            />
            <ArticleCard
              href={LinkRoutes.Articles.Entrepreneur}
              img={ImgElems.ArticleEntrepreneurBorder}
            />
          </div>
        </section>
      </div>
    </Layout.Wide>
  );
};

export default HomePage;
