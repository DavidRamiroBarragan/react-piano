import { FunctionComponent } from "react";
import { InstrumentContextProvider } from "../../state/Instrument/Provider";
import { InstrumentSelector } from "../InstrumentSelector/InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard/KeyboardWithInstrument";

export const Playground: FunctionComponent = () => {
  return (
    <InstrumentContextProvider>
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>
    </InstrumentContextProvider>
  );
};
