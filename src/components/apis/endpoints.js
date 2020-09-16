
export const getIndicator = (indicator) => {
  return `/oneindicator/${indicator}`;
};
export const getCountryRecord = (country,indicator) => {
  return `/visualize/${country}/${indicator}`;
};
export const getStates = (country) => {
  return `/states/${country}`;
};
export const getAllCountries = () => {
  return `allcountries/u`;
};
export const getReport = () => {
  return `report/u`;
};


