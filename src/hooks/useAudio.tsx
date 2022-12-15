import React from 'react';

 const useAudio = (url:string) => {
    const [audio] = React.useState( new Audio(url));
    const [playing , setPlaying] = React.useState(false);

    const toggle = () => setPlaying(!playing);
    React.useEffect(() => {
        playing ? audio.play() : audio.pause();
    },[playing, audio])

    React.useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, [audio]);

      return [playing , toggle];
};

type Audio = {
    url: string
}


const Player:React.FC<Audio> = ({url}) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div className="player">
            <button >{playing ? "Pause" : "Play"}</button>
        </div>
    )

}

export default Player;