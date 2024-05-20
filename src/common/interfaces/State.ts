export default interface State {
  url: string;
  pip: boolean;
  playing: boolean;
  controls: boolean;
  light: boolean;
  volume: number;
  muted: boolean;
  played: number;
  loaded: number;
  duration: number;
  playbackRate: number;
  finished: boolean;
  hitStopAt: boolean;
  hasShownAfterChoice: boolean;
  playedSound: boolean;
}
