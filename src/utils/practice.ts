export const getStatus = (rate: number) => {
  if (rate >= 20) return { label: "High Performer", color: "green" };
  if (rate < 10) return { label: "At Risk", color: "red" };
  return { label: "Stable", color: "gray" };
};
