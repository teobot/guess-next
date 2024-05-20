export default interface LevelDataClass {
  id: number;
  title: string;
  clipId: string;
  startAt: number;
  stopAt: number;
  continueFor: number;
  choices: {
    id: number;
    text: string;
    colour: string;
  }[];
  answer: number;
}
