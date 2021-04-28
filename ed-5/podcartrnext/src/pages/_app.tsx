import { Header } from '../components/Header';

import '../styles/global.scss'

import styles from '/styles/app.module.scss';
import { Player } from './components/Header copy';
import { PlayerContext } from '../context/PlayerContext';

function MyApp({Component, pageProps}){

    const [episodeList, setEpisodeList] = useState([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState([0]);
    const [isPlaying, setIsPlaying] = useState(true);
    function play(episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setIsPlaying(true);
    }

    function togglePlay() {
        setIsPlaying(!isPlaying);
    }
    
    return (
        <PlayerContext.Provider value={Pi}>
            <div className="{styles.wrapper}">
                <main>
                <Header />
                <Component {...pageProps} />
                </main>
                <Player />
                
            </div>
        </PlayerContext.Provider>

    )
}


export default MyApp