import ImgElem, { ImgElems } from "@/components/atoms/ImgElem/ImgElem";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import useToast from "@/hooks/useToast.hook";
import ApiRoutes from "@/routes/ApiRoutes.route";
import LinkRoutes from "@/routes/LinkRoutes.route";
import ExternalLinkUtil from "@/utils/external-link.util";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const { setToast } = useToast();

  const [email, setEmail] = React.useState("");

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value ?? "");
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await ApiRoutes.Next.subscribe(email);
    console.log(res);

    if (res.json.success) {
      setToast("SUCCESS", res.json.response);
      setEmail("");
    } else {
      setToast("FAILURE", res.json.response);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_main}>
        <div className={styles.subscribe}>
          <SvgElem
            className={styles.subscribe_logo}
            svg={SvgElems.LogoSecureMyScholarship}
          />
          <p>
            Our mission is to make education more accessible and affordable for
            all by helping students reduce their tuition burden.
          </p>
          <div className={styles.subscribe_text}>
            <p>Subscribe</p>
            <p>
              Stay up to date with our latest deals and offers when subscribed
              to our newsletter.
            </p>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={onChangeEmail}
              />
              <button type="submit" aria-label="Subscribe">
                <SvgElem svg={SvgElems.IconArrowRightWhite} />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.links}>
          <ul>
            <li>
              <Link href={LinkRoutes.Universities}>Universities</Link>
            </li>
            <li>
              <Link href={LinkRoutes.Courses}>Courses</Link>
            </li>
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

          <ul>
            <li>
              <Link href={LinkRoutes.Facebook}>
                <a
                  {...ExternalLinkUtil.anchorProps}
                  aria-label="Visit our Facebook page"
                >
                  <SvgElem svg={SvgElems.LogoFacebook} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={LinkRoutes.Twitter}>
                <a
                  {...ExternalLinkUtil.anchorProps}
                  aria-label="Visit our Twitter page"
                >
                  <SvgElem svg={SvgElems.LogoTwitter} />
                </a>
              </Link>
            </li>
            <li>
              <Link href={LinkRoutes.Instagram}>
                <a
                  {...ExternalLinkUtil.anchorProps}
                  aria-label="Visit our Instagram page"
                >
                  <SvgElem svg={SvgElems.LogoInstagram} />
                </a>
              </Link>
            </li>
          </ul>

          <div></div>
        </div>

        <ul className={styles.sources}>
          <li>
            <p className={styles.source_text}>Authorized Representative</p>
            <ImgElem
              className={styles.source_logo}
              img={ImgElems.SourceApplyBoard}
            />
          </li>
          <li>
            <p className={styles.source_text}>Authorized Representative</p>
            <ImgElem
              className={styles.source_logo}
              img={ImgElems.SourceShorelight}
            />
          </li>
          <li>
            <p className={styles.source_text}>Certified Agent</p>
            <ImgElem
              className={styles.source_logo}
              img={ImgElems.SourceAdventus}
            />
          </li>
          <li>
            <p className={styles.source_text}>Authorized Representative</p>
            <ImgElem
              className={styles.source_logo}
              img={ImgElems.SourceGlobalUniversitySystems}
            />
          </li>
          <li>
            <p className={styles.source_text}>Authorized Representative</p>
            <ImgElem
              className={styles.source_logo}
              img={ImgElems.SourceNavitas}
            />
          </li>
        </ul>
      </div>

      <div className={styles.tail}>
        <SvgElem svg={SvgElems.FooterBackground} />
        <div>
          <ul>
            <li>
              <Link href={LinkRoutes.Terms} passHref>
                <a {...ExternalLinkUtil.anchorProps}>Terms</a>
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link href={LinkRoutes.Privacy} passHref>
                <a {...ExternalLinkUtil.anchorProps}>Privacy</a>
              </Link>
            </li>
            {/* <li>•</li>
            <li>
              <Link href={LinkRoutes.Cookies} passHref>
                <a {...ExternalLinkUtil.anchorProps}>Cookies</a>
              </Link>
            </li> */}
          </ul>

          <div className={styles.powered_by}>
            <p>Powered by</p>
            <ImgElem img={ImgElems.LogoLockAndStock} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
