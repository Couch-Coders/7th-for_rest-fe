import { client } from './clients';
/*
export const searchByTag = ({ category, region_1, region_2 }) => {
  return client.get(`/places?category=${category}&region_1=${region_1}`);
};
*/

export const searchByTag = ({ category, region_1, region_2 }) => {
  const StringRegion_2 = region_2.length === 0 ? '' : region_2.join('-');
  return client.get(`/places`, {
    params: {
      category: category,
      region_1: region_1,
      region_2: StringRegion_2,
    },
  });
};

/*
export const searchByTag2 = (category) => {
    console.log(category);
    const { data, status } = axios.get(`/user/places`, {
      params: { category },
    });
    console.log(data);
  
    const { code } = data;
    console.log(code);
    return code;
  };
  */
