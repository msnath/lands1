import { connectMenu } from "react-instantsearch-dom";
import { MenuProvided, MenuExposed } from "react-instantsearch-core";
import { TAlgoliaRefinementAttribute } from "$/types/algolia.type";
import S from "./AlgoliaFilterRadio.styled";
import Radio from "@/components/atoms/Radio/Radio";

type AlgoliaFilterRadioProps = {
  title: string;
  attribute: TAlgoliaRefinementAttribute;
} & MenuProvided &
  MenuExposed;

const AlgoliaFilterRadio: React.FC<AlgoliaFilterRadioProps> = ({
  title,
  items,
  refine,
  createURL,
}) => {
  const onClick =
    (value: string): React.MouseEventHandler<HTMLAnchorElement> =>
    (e) => {
      e.preventDefault();
      refine(value);
    };

  return (
    <S.Radio>
      <S.Title>{title}</S.Title>

      <S.Options>
        {items.map((option) => (
          <li key={option.label}>
            <a href={createURL(option.value)} onClick={onClick(option.value)}>
              <Radio
                text={`${option.label} (${option.count})`}
                checked={option.isRefined}
                onClick={() => {}}
              />
            </a>
          </li>
        ))}
      </S.Options>
    </S.Radio>
  );
};

export default connectMenu(AlgoliaFilterRadio);
