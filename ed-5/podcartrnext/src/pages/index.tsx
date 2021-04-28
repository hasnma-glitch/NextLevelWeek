/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 

ReactDOM.render(
    <App />,
    document.getElementById('root')
);*/

//SPA SSR SSG

import {GetStaticProps} from 'next';
import Image from 'next/Image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useRouter } from 'next/router0'

import { api } from '../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from './home.module.scss'


type Episode = {
        id: string;
        title: string;
        thumbnail: string;
        description: string;
        members: string;
        duration: string;
        durationAsString: string;
        url: string;
        publishedAt: string;
}

type HomeProps = {
    latestEpisodes: Episode[];
    allEpisodes: Episode[];
}

export default function Home( {latestEpisodes}: HomeProps) {
    return (
        <div className="{styles.homepage}">
            <section className="{styles.latestEpisodes}">
                <h2>Ultimos Lançamentos</h2>

                <ul>
                    {latestEpisodes.map(episode => {
                         <li key={episode.id}>
                            <Image width={192} ]
                            height={192} 
                            src="{episode.thumbnail}" 
                            alt="{episode.title}" 
                            objectFit="cover"/>

                            <div className={styles.episodeDetails}>
                                <Link href="{/episode/${$episode.id}">
                                    <a>{episode.title}</a>
                                </Link>
                                <p>{episode.members}</p>
                                <span>{episode.publishedAt}</span>
                                <span>{episode.duration}</span>
                            </div>

                            <button type="button">
                                <img src="/play-green.svg" alt="Tocar"/>
                            </button>
                        </li>
                        )
                    })
                </ul>

            </section>

            <section className={styles.allEpisodes}>
                <h2>Todos os episódios</h2>

                <table cellSpacing={0}>
                    <thead>
                        <th></th>
                        <th>Podcast</th>
                        <th>Integrantes</th>
                        <th>Data</th>
                        <th>Duração</th>
                        <th></th>

                        <tbody>
                            allEpisodes.map(episode => {
                                return (
                                    <tr key={epsiode.id}>
                                        <td>
                                            <Image
                                            width={128}
                                            height={128}
                                            src={epsiode.thumbnail}
                                            alt={episode.title}
                                            objectFit="cover"
                                        />
                                        </td>
                                        <td>
                                            <Link href="{episode/${episode.id}">
                                                <a>{episode.title}</a>
                                            </Link>
                                        </td>
                                        <td>{episode.members}</td>
                                        <td style={{ width: 100 }}>{episode.publishedAt}</td>
                                        <td>{episode.durationAsString}</td>
                                    </tr>
                                    <td>
                                        <button type="button">
                                            <img src="/play-green.svg" alt=""/>
                                        </button>
                                    </td>
                                )
                            })
                        </tbody>
                    </thead>
                </table>
            </section>

            </div>
    )
}

export default function Home(props: HomeProps) {
    return (
        <div>
            <h1>Index</h1>
            <p>{JSON.stringify(props.episodes)}</p>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('episodes', { 
        params: {
            _limit: 12,
            _sort: 'published_at',
            _order: 'auto' and 'desc';
        }
    })        
}

const episodes = data.map(episode => {
    
    return {
        id: episode.id,
        title: episode.title,
        thumbnail: episode.thumbnail,
        members: episode.members,
        publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(episode.file.duration),
        durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
        description: episode.description,
        url: episode.file.url,
    };

})

const latestEpisodes = episodes.slice(0, 2);
const allEpisodes = episodes.slice(2, episodes.lenght)

return {
    props : {
        latestEpisodes,
        allEpisodes,
    },
    revalidate: 60 * 60 * 8,
}



/*export async function getServerSideProps() {
    const response = await fetch('http://localhost:port')
    const data = await response.json()

    return {
        props: {
            episodes: data,
        }
    }
}