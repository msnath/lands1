import React from "react";
import S from "@/styles/faqs.styled";
import Layout from "@/components/styled/Layout.styled";
import FAQs from "@/utils/faqs.util";
import useDimensions from "@/hooks/useDimensions.hook";
import useAccordian from "@/hooks/useAccordian.hook";
import { SvgElems } from "@/components/atoms/SvgElem/SvgElem";
import { Colors } from "@/styles/app.styled";
import useMeta from "@/hooks/useMeta.hook";

type FAQProps = { header: string };

const FAQ: React.FC<FAQProps> = ({ header, children }) => {
  const { refHeader, refContent, open, height } = useAccordian();

  return (
    <S.Accordian open={open}>
      <S.Header ref={refHeader}>
        {header}
        <S.Icon svg={open ? SvgElems.IconMinus : SvgElems.IconPlus} />
      </S.Header>
      <S.Content ref={refContent} open={open} height={height}>
        {children}
      </S.Content>
    </S.Accordian>
  );
};

type FAQsPageProps = {};

const FAQsPage: React.FC<FAQsPageProps> = () => {
  useMeta("Secure My Scholarship | FAQs");
  const { is768 } = useDimensions();

  const numOfColumns = is768 ? 2 : 1;

  const columns: { question: string; answers: string[]; protips: never[] }[][] =
    [];

  const columnLength = Math.ceil(FAQs.general.length / numOfColumns);
  for (let i = 0; i < numOfColumns; i++) {
    columns.push(FAQs.general.slice(i * columnLength, (i + 1) * columnLength));
  }

  return (
    <Layout.Wide background={Colors.Black101010}>
      <Layout.Centered maxWidth={1280} padding>
        <S.Title>FAQs</S.Title>

        <S.FAQs>
          {columns.map((c, i) => (
            <S.Column key={i}>
              {c.map((faq, j) => (
                <FAQ key={i * columnLength + j} header={faq.question}>
                  {faq.answers.map((a) => (
                    <S.Answer key={a}>{a}</S.Answer>
                  ))}
                  {faq.protips.map((p, k) => (
                    <S.Protip key={p}>
                      PRO TIP {k}: {p}
                    </S.Protip>
                  ))}
                </FAQ>
              ))}
            </S.Column>
          ))}
        </S.FAQs>
      </Layout.Centered>
    </Layout.Wide>
  );
};

export default FAQsPage;
