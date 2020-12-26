import { ComponentType, useEffect } from "react";
import { InjectedProps, ProviderProps } from "./soundfont.type";
import { useSoundfont } from "./useSoundfont";

export const withInstrumentWithHook = (
  WrappedComponent: ComponentType<InjectedProps>
) => {
  return function WithInstrumentComponent(props: ProviderProps) {
    const { AudioContext, instrument } = props;
    const fromHook = useSoundfont({ AudioContext });
    const { loading, current, play, stop, load } = fromHook;

    useEffect(() => {
      if (!loading && instrument !== current) load(instrument);
    }, [current, instrument, load, loading]);

    return <WrappedComponent loading={loading} play={play} stop={stop} />;
  };
};
