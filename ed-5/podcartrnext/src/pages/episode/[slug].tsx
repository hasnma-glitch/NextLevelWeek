import { useRouter } from 'next/router'
import { api } from '../../services/api';

import {GetStaticProps} from 'next';
import Image from 'next/Image';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useRouter } from 'next/router0'

import { api } from '../services/api';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import styles from './home.module.scss';

import styles from 'pages/episode/episode.module.scss';


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

type EpisodeProps = {
    episode: Episode;
}

/*type HomeProps = {
    latestEpisodes: Episode[];
    allEpisodes: Episode[];
}*/

export default function Episode ({ episode }: EpisodeProps) {
    return (
        <div className="{styles.episode}">
            <div className="{styles.thumbnailContainer}">
                <Link>
                <button type="button">
                    <img src="/arrow-left.svg" alt="Voltar"/>
                </button>
                </Link>
                <Image width={700} height={160} src={episode.thumbnail} objectFit="cover" />
            </div>
        </div>

        <header>
            <h1>{episode.title}</h1>
            <span>{episode.members}</span>
            <span>{episode.publishedAt</span>
            <span>{episode.durationAsString</span>
        </header>

        <div className="{styles.description}" dangerouslySetInnerHTML= {{__html: episode;description}} /></div>
    )
}

export default function Episode(){
    const router = useRouter();


    return (
        <h1>{router.query.slug}</h1>
    )
}

export const GetStaticPaths = GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true
            /*{ params: {
                slug: 'a-importancia-da-contribuicao-em-open-source'
            }
        }
        ],
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    const {slug} = ctx.params;

    const {data} = await api.get('/episode/${slug}')

    const episode = {
        id: data.id,
        title: data.title,
        thumbnail: data.thumbnail,
        publishedAt:  format(parseISO(data.publishedAt), 'd MMM yyy'
        duration: Number(data.file.duration),
        durationAsString: convertDurationToTimeString(Number(data.file.duration)),
        url: data.file.url,
    };

    return {
        props: {},
        revalidate: 60 * 60 * 24,
    }
}
