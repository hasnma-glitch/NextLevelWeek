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

function MyApp ({ Component, pageProps }) {
    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
}

function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
}

function togglePlay() {
    setIsPlaying(!isPlaying);
}

return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex }}>
        <div className={styles.wrapper}>
            <main>
                <Header />
                <Component {...pageProps} />
            </main>
            <Player />
        </div>
    </PlayerContext.Provider>
)