interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: any;
  song: any;
  handlePause: () => void;
  handlePlay: () => void;
}

export const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}: PlayPauseProps) => <div>Loader</div>;

export default PlayPause;
