import clsx from "clsx";
import { FunctionComponent, ReactEventHandler } from "react";
import { NoteType } from "../../domain/note";

import "./Key.css";

interface KeyProps {
  type: NoteType;
  label: string;
  disabled?: boolean;
  onUp: ReactEventHandler<HTMLButtonElement>;
  onDown: ReactEventHandler<HTMLButtonElement>;
}

export const Key: FunctionComponent<KeyProps> = (props) => {
  const { type, label, onDown, onUp, ...rest } = props;

  return (
    <button
      className={clsx(`key key--${type}`)}
      type="button"
      {...rest}
      onMouseDown={onDown}
      onMouseUp={onUp}
    >
      {label}
    </button>
  );
};
