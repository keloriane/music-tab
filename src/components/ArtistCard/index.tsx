import React from 'react';
import Image, { StaticImageData } from 'next/image';
import * as S from './artist.style'
import motion from 'framer-motion';



type ArtistProps = {
    title:string;
    photo:StaticImageData;
}

const ArtistCard:React.FC<ArtistProps> = ({title , photo}) => {
    return (
     
                <S.ArtistCard className="card">
                    <S.ImageWrapper
                    
                    >
                        <Image src={photo} alt={title} height={400}/>
                    </S.ImageWrapper>
                    <h2>{title}</h2>
                </S.ArtistCard>
       
    )

}

export default ArtistCard;