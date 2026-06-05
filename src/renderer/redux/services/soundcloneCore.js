import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'a4756ed4b0mshb8c388d01d83e4cp11f6bcjsn8eb47c6d76e7',
    'x-rapidapi-host': 'shazam-core7.p.rapidapi.com',
  },
};

fetch(
  'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_country_by_genre',
  options,
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const soundcloneApi = createApi({
  reducerPath: 'soundcloneApi',
});

export default soundcloneApi;
