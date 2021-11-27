export const roundTo100 = (value: number | null) => {
  if (value === undefined || value === null || isNaN(value)) return null;
  return value > 1000 ? Math.round(value / 100) * 100 : value;
};

export const capitalize = (str: string) =>
  str.length > 0
    ? str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
    : "";

export const formatTuitionFee = (
  currency_code: string | null,
  tuition_fee: number | null
) =>
  roundTo100(tuition_fee)
    ? `${currency_code || ""} ${roundTo100(tuition_fee)}`.trim()
    : "—";

export const formatDurationTag = (duration_tag: string | null) =>
  duration_tag ? duration_tag.trim() : "—";

export const formatFeeWaiverCount = (count: number) =>
  count ? count + (count === 1 ? " scholarship" : " scholarships") : "—";

export const formatCourseCount = (count: number) =>
  count ? count + (count === 1 ? " course" : " courses") : "—";
