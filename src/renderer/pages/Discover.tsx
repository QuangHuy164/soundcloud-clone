/* eslint-disable prettier/prettier */
import { Error, Loader, SongCard } from '../components';
import { genres } from '../../../assets/constants';

const Discover = () => {
  const genreTitle = 'Pop';
  return (
    <div className="flex flex-col">
      <div className="w-full flex flex-col justify-center items-center mt-8 mb-10 gap-5">
        <h2 className="font-bold text-3xl text-white text-center">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="text-white flex flex-wrap justify-center sm:justify-start mt-8 mb-10 gap-5">
        <SongCard />
      </div>
    </div>
  );
};

export default Discover;
