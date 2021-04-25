import { createContext } from 'react';

/*export const PlayerContext = createContext('');*/

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: string;
    url: string;
};

type PlayerContextData = {
    //episodeList: Array<>
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

export default MyApp