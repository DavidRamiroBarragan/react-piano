import { FunctionComponent } from "react";
import { withInstrumentWithHook } from "../../adapters/Soundfont/withInstrumentBasedOnHooks";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";
import "./styles.css";

//HOC
const WrappedKeyboard = withInstrumentWithHook(Keyboard);

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();

  return (
    <WrappedKeyboard AudioContext={AudioContext} instrument={instrument} />
  );
};
