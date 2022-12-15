
import React from 'react';
import ArtistCard from '../components/ArtistCard'
import Metallica from './../assets/img/metallica.png'
import Mayer from './../assets/img/mayer.png'
import Wooten from './../assets/img/wooten.png'
import Link from 'next/link';
import * as S from './../../styles/home.style';
import { getSecrets, NetlifySecrets } from '@netlify/functions';


export default function Home() {



  return (
    <div>
      <S.ArtistWrapper className="artist-container">
        <Link href={"/"}>
          <ArtistCard title='metallica' photo={Metallica} />

        </Link>
        <ArtistCard title='John Mayer' photo={Mayer} />
        <ArtistCard title='wooten' photo={Wooten} />
        <ArtistCard title='metallica' photo={Metallica} />
        <ArtistCard title='metallica' photo={Metallica} />

      </S.ArtistWrapper>

      <button></button>

      </div>
  )
}
