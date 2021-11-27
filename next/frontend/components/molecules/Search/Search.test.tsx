import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestIDs } from "@/utils/test.util";
import Search, {
  SearchComplexProps,
  SearchMaximizedProps,
  SearchMinimizedProps,
  SearchSimpleProps,
} from "./Search";
import ReduxMock from "@/__mocks__/redux.mock";

// mock NextJS router
jest.mock("next/dist/client/router", () => ({
  useRouter: jest.fn().mockReturnValue({ pathname: "/" }),
}));

const value = "mock input value";
const onChange = jest.fn();

const props: {
  simple: SearchSimpleProps;
  minimized: SearchMinimizedProps;
  maximized: SearchMaximizedProps;
  complex: SearchComplexProps;
} = {
  simple: { input: { placeholder: "simple placeholder" } },
  minimized: { input: { placeholder: "minimized placeholder" } },
  maximized: { input: { placeholder: "maximized placeholder" } },
  complex: { input: { placeholder: "complex placeholder" } },
};

const SearchComponents = [
  {
    type: "Search.Simple",
    Component: Search.Simple,
    props: props.simple,
    testID: TestIDs.SearchSimple,
  },
  {
    type: "Search.Minimized",
    Component: Search.Minimized,
    props: props.minimized,
    testID: TestIDs.SearchMinimized,
  },
  {
    type: "Search.Maximized",
    Component: Search.Maximized,
    props: props.maximized,
    testID: TestIDs.SearchMaximized,
  },
  {
    type: "Search.Complex",
    Component: Search.Complex,
    props: props.complex,
    testID: TestIDs.SearchComplex,
  },
];

for (const search of SearchComponents) {
  describe(search.type, () => {
    afterEach(() => {
      onChange.mockReset();
    });

    it("renders to the DOM", () => {
      render(
        <ReduxMock>
          <search.Component />
        </ReduxMock>
      );

      const elem = screen.getByTestId(search.testID);
      const input = screen.getByPlaceholderText(/start your search/i);

      expect(elem).toBeInTheDocument();
      expect(input).toBeInTheDocument();

      const userInput = `type into ${search.type}`;
      userEvent.type(input, userInput);
      expect(input).toHaveValue(userInput);
    });

    it("renders to the DOM, with custom placeholder text", () => {
      render(
        <ReduxMock>
          <search.Component {...search.props} />
        </ReduxMock>
      );

      const elem = screen.getByTestId(search.testID);
      const input = screen.getByPlaceholderText(
        search.props.input?.placeholder || ""
      );

      expect(elem).toBeInTheDocument();
      expect(input).toBeInTheDocument();

      const userInput = `type into ${search.type}`;
      userEvent.type(input, userInput);
      expect(input).toHaveValue(userInput);
    });

    it("renders to the DOM, with custom value and onChange", () => {
      render(
        <ReduxMock>
          <search.Component input={{ value, onChange }} />
        </ReduxMock>
      );

      const input = screen.getByDisplayValue(value);

      expect(input).toBeInTheDocument();
      expect(input).toHaveValue(value);

      const userInput = `type into ${search.type}`;
      userEvent.type(input, userInput);
      expect(input).not.toHaveValue(userInput);
      expect(input).toHaveValue(value);
      expect(onChange).toHaveBeenCalledTimes(userInput.length);
    });
  });
}

it("Search.Complex additional tests", () => {
  render(
    <ReduxMock>
      <Search.Complex />
    </ReduxMock>
  );

  const elem = screen.getByTestId(TestIDs.SearchComplex);
  const universitiesTab = screen.getByText(/universities/i);
  const coursesTab = screen.getByText(/courses/i);

  expect(elem).toBeInTheDocument();
  expect(universitiesTab).toBeInTheDocument();
  expect(coursesTab).toBeInTheDocument();
});
