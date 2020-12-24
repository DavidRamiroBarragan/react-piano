import { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage";
import { Playground } from "../PlayGround/Playground";
export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();

  return !!AudioContext ? <Playground /> : <NoAudioMessage />;
};
