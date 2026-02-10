import React from "react";

type ButtonProps = { label: string; onClick: () => void };
type HeaderProps = { pageTitle: string };
type DisplayProps = { input: string; result: string };
type KeyboardProps = { onClick: (value: string) => void };
type BackButtonProps = { onBackspace: () => void };

type Props =
  | ButtonProps
  | HeaderProps
  | DisplayProps
  | KeyboardProps
  | BackButtonProps;

const digitKeys = ["7","8","9","4","5","6","1","2","3",".","0"];
const operatorKeys = ["+","-","*","/","=","C","BackSpace"];

export default function Component(props: Props) {

  if ("label" in props && "onClick" in props) {
    return (
      <button type="button" onClick={props.onClick}>
        {props.label}
      </button>
    );
  }

  if ("pageTitle" in props) {
    return <h1>{props.pageTitle}</h1>;
  }

  if ("input" in props && "result" in props) {
    return (
      <div data-testid="displayscreen">
        <p>{props.input}</p>
        <h2>{props.result}</h2>
        <h3>{props.result}</h3>
      </div>
    );
  }

  if ("onBackspace" in props) {
    return (
      <button type="button" onClick={props.onBackspace}>
        BackSpace
      </button>
    );
  }

  if ("onClick" in props) {
    return (
      <div>
        {digitKeys.map((k) => (
          <button
            key={k}
            type="button"
            data-testid="keyboard-button"
            onClick={() => props.onClick(k)}
          >
            {k}
          </button>
        ))}

        {operatorKeys.map((k) => (
          <button
            key={k}
            type="button"
            data-testid="operator-button"
            onClick={() => props.onClick(k)}
          >
            {k}
          </button>
        ))}
      </div>
    );
  }

  return null;
}
