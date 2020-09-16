
export const getIndicator = (indicator) => {
  return `/oneindicator/${indicator}`;
};
export const getCountryRecord = (country,indicator) => {
  return `/visualize/${country}/${indicator}`;
};
export const getStates = (country) => {
  return `/states/${country}`;
};



