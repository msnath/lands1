import React from "react";
import S from "@/styles/contact-us.styled";
import Layout from "@/components/styled/Layout.styled";
import { Colors } from "@/styles/app.styled";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";
import SvgElem, { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import CountriesUtil from "@/utils/countries.util";
import Option from "@/components/atoms/Option/Option";
import List from "react-virtualized/dist/commonjs/List";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import Backdrop, { useBackdrop } from "@/components/atoms/Backdrop/Backdrop";
import useDimensions from "@/hooks/useDimensions.hook";
import ApiRoutes from "@/routes/ApiRoutes.route";
import ContactUsUtil from "@/utils/contact-us.util";
import useMeta from "@/hooks/useMeta.hook";
import useToast from "@/hooks/useToast.hook";
import { scrollToTop } from "@/utils/scroll.util";

type ContactUsPageProps = {};

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  useMeta("Secure My Scholarship | Contact Us");

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [flag, setFlag] = React.useState("");
  const [dialCode, setDialCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [enquiryType, setEnquiryType] = React.useState(
    ContactUsUtil.enquiryTypes[0]
  );
  const [message, setMessage] = React.useState("");

  const { is768 } = useDimensions();
  const { setToast } = useToast();

  const {
    focused: dialFocused,
    setFocused: setDialFocused,
    props: dialBackdropProps,
  } = useBackdrop();
  const {
    focused: enquiryFocused,
    setFocused: setEnquiryFocused,
    props: enquiryBackdropProps,
  } = useBackdrop();

  const onChangeGivenName: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setFirstName(e.target.value || "");

  const onChangeFamilyName: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setLastName(e.target.value || "");

  const onChangeDialCode = (flag: string, code: string) => {
    setFlag(flag);
    setDialCode(code);
  };

  const onChangePhoneNumber: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPhoneNumber(e.target.value || "");

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value || "");

  const onChangeMessage: React.ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setMessage(e.target.value || "");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await ApiRoutes.Next.contactUs(
      firstName,
      lastName,
      dialCode + " " + phoneNumber,
      email,
      enquiryType,
      message
    );

    if (res.json.success) {
      setToast("SUCCESS", "We've received your message!");
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
      scrollToTop();
    } else {
      setToast("FAILURE", "Oh no! An error occurred.");
    }
  };

  React.useEffect(() => {
    const country = CountriesUtil.data.find((c) => c.isoCode === "AE");
    if (country) {
      setFlag(CountriesUtil.flagURL(country.isoCode));
      setDialCode(country.dialCode);
    }
  }, []);

  return (
    <Layout.Wide background={Colors.Black101010}>
      <S.Container>
        <S.Background svg={SvgElems.ContactUsBackground} />

        <Layout.Centered maxWidth={540} padding>
          <S.Title>Contact Us</S.Title>

          <S.Form onSubmit={onSubmit}>
            <S.Label htmlFor="given-name">First Name</S.Label>
            <S.Input
              required
              type="text"
              name="given-name"
              placeholder="What do we call you?"
              value={firstName}
              onChange={onChangeGivenName}
            />

            <S.Label htmlFor="family-name">Last Name</S.Label>
            <S.Input
              required
              type="text"
              name="family-name"
              placeholder="Just so we know it's you"
              value={lastName}
              onChange={onChangeFamilyName}
            />

            <S.Label htmlFor="phone-number">Phone Number</S.Label>
            <S.PhoneNumber>
              <Dropdown
                onReclickCollapse
                focused={dialFocused}
                onChangeFocus={setDialFocused}
              >
                <S.Dropdown width={136}>
                  <Option
                    img={flag}
                    imgWidth={20}
                    imgHeight={15}
                    text={dialCode}
                  />
                  <SvgElem svg={SvgElems.IconTriangleDown} />
                </S.Dropdown>
                <Backdrop
                  use={!is768}
                  onClick={!is768 ? dialBackdropProps.onClick : undefined}
                >
                  <S.Menu>
                    <AutoSizer>
                      {({ height, width }) => (
                        <List
                          rowCount={CountriesUtil.data.length}
                          width={width}
                          height={height}
                          rowHeight={44}
                          rowRenderer={({ index, key, style }) => {
                            const c = CountriesUtil.data[index];
                            return (
                              <S.OptionButton
                                key={key}
                                style={style}
                                onClick={() => {
                                  setDialFocused(false);
                                  onChangeDialCode(
                                    CountriesUtil.flagURL(c.isoCode),
                                    c.dialCode
                                  );
                                }}
                              >
                                <Option
                                  img={CountriesUtil.flagURL(c.isoCode)}
                                  imgWidth={20}
                                  imgHeight={15}
                                  text={c.name + " " + c.dialCode}
                                />
                              </S.OptionButton>
                            );
                          }}
                        />
                      )}
                    </AutoSizer>
                  </S.Menu>
                </Backdrop>
              </Dropdown>
              <S.Input
                required
                type="tel"
                name="phone-number"
                placeholder="Enter contact no."
                value={phoneNumber}
                onChange={onChangePhoneNumber}
              />
            </S.PhoneNumber>

            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              required
              type="email"
              name="email"
              placeholder="We promise no spam"
              value={email}
              onChange={onChangeEmail}
            />

            <S.Label htmlFor="enquiry-type">Enquiry Type</S.Label>
            <Dropdown
              onReclickCollapse
              focused={enquiryFocused}
              onChangeFocus={setEnquiryFocused}
            >
              <S.Dropdown>
                <Option text={enquiryType} />
                <SvgElem svg={SvgElems.IconTriangleDown} />
              </S.Dropdown>
              <Backdrop
                use={!is768}
                onClick={!is768 ? enquiryBackdropProps.onClick : undefined}
              >
                <S.MenuSimple>
                  {ContactUsUtil.enquiryTypes.map((e, i) => (
                    <S.OptionButton
                      key={i}
                      onClick={() => {
                        setEnquiryFocused(false);
                        setEnquiryType(e);
                      }}
                    >
                      <Option text={e} />
                    </S.OptionButton>
                  ))}
                </S.MenuSimple>
              </Backdrop>
            </Dropdown>

            <S.Label htmlFor="message">Message</S.Label>
            <S.TextArea
              required
              name="message"
              placeholder="Tell us a little more"
              value={message}
              onChange={onChangeMessage}
            />

            <S.Submit type="submit">Submit</S.Submit>
          </S.Form>
        </Layout.Centered>
      </S.Container>
    </Layout.Wide>
  );
};

export default ContactUsPage;
