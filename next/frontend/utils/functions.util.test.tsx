import {
  capitalize,
  formatDurationTag,
  formatTuitionFee,
  roundTo100,
} from "./functions.util";

describe("roundTo100", () => {
  it("returns null, if null or NaN", () => {
    expect(roundTo100(null)).toEqual(null);
    expect(roundTo100(NaN)).toEqual(null);
  });

  it("returns original value, if less than 1000", () => {
    expect(roundTo100(-12345)).toEqual(-12345);
    expect(roundTo100(-321)).toEqual(-321);
    expect(roundTo100(0)).toEqual(0);
    expect(roundTo100(12)).toEqual(12);
    expect(roundTo100(123)).toEqual(123);
    expect(roundTo100(123)).toEqual(123);
    expect(roundTo100(999)).toEqual(999);
    expect(roundTo100(1000)).toEqual(1000);
  });

  it("rounds to 100th place, if more than 1000", () => {
    expect(roundTo100(1000)).toEqual(1000);
    expect(roundTo100(1100)).toEqual(1100);
    expect(roundTo100(1140)).toEqual(1100);
    expect(roundTo100(1149)).toEqual(1100);
    expect(roundTo100(1150)).toEqual(1200);
    expect(roundTo100(1175)).toEqual(1200);

    expect(roundTo100(12345)).toEqual(12300);
    expect(roundTo100(54321)).toEqual(54300);
  });
});

describe("capitalize", () => {
  it("capitalizes first character, the rest will be lowercase", () => {
    expect(capitalize("")).toEqual("");
    expect(capitalize("a")).toEqual("A");
    expect(capitalize("A")).toEqual("A");
    expect(capitalize("aaa")).toEqual("Aaa");
    expect(capitalize("AAA")).toEqual("Aaa");

    expect(capitalize("aBcDeF")).toEqual("Abcdef");
    expect(capitalize("AbCdEf")).toEqual("Abcdef");
  });
});

describe("formatTuitionFee", () => {
  it("returns - if tuition_fee = null", () => {
    expect(formatTuitionFee(null, null)).toEqual("—");
    expect(formatTuitionFee("", null)).toEqual("—");
    expect(formatTuitionFee("USD", null)).toEqual("—");

    expect(formatTuitionFee(null, 0)).toEqual("—");
    expect(formatTuitionFee("", 0)).toEqual("—");
    expect(formatTuitionFee("USD", 0)).toEqual("—");
  });

  it("returns currency_code + tuition_fee rounded to 100", () => {
    expect(formatTuitionFee(null, 1234)).toEqual("1200");
    expect(formatTuitionFee("", 1234)).toEqual("1200");
    expect(formatTuitionFee("USD", 1234)).toEqual("USD 1200");
  });
});

describe("formatDurationTag", () => {
  it("returns - if duration_tag = '' or null", () => {
    expect(formatDurationTag(null)).toEqual("—");
    expect(formatDurationTag("")).toEqual("—");
  });

  it("returns trimmed duration_tag", () => {
    expect(formatDurationTag("1 Year")).toEqual("1 Year");
    expect(formatDurationTag(" 2 Years ")).toEqual("2 Years");
  });
});
