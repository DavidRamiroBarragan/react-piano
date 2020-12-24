import { FunctionComponent } from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useMount } from "../../utils/useMounted/useMounted";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";

import "./styles.css";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });

  useMount(load);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
