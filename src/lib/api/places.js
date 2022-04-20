import { client } from './clients';

export const getPlaces = ({ page, category, region_1, region_2 }) => {
  const StringRegion_2 = region_2.length === 0 ? '' : region_2.join('-');
  return client.get(`/places/list`, {
    params: {
      page: page,
      size: 12,
      category: category,
      region_1: region_1,
      region_2: StringRegion_2,
    },
  });
};
