import { ReactElement } from "react";
import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";

export interface ProviderPropsWithRender {
  instrument?: InstrumentName;
  AudioContext: AudioContextType;
  render(props: ProvidedProps): ReactElement;
}

export interface ProvidedProps {
  loading: boolean;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export interface InjectedProps {
  loading: boolean;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export interface ProviderProps {
  AudioContext: AudioContextType;
  instrument?: InstrumentName;
}

export interface ProviderState {
  loading: boolean;
  current: Optional<InstrumentName>;
}
