import { FunctionComponent, useEffect } from "react";
import { useSoundfont } from "../../adapters/Soundfont/useSoundfont";
import { useInstrument } from "../../state/Instrument/Context";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { Keyboard } from "./Keyboard";
import "./styles.css";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { instrument } = useInstrument();
  const { loading, play, stop, load, current } = useSoundfont({ AudioContext });

  useEffect(() => {
    if (!loading && instrument !== current) load(instrument);
  }, [current, instrument, load, loading]);

  return <Keyboard loading={loading} play={play} stop={stop} />;
};
