import { FunctionComponent } from "react";
import { SoundfontProvider } from "../../adapters/Soundfont/SoundfontProvider";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";
import "./styles.css";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
