import Styles from "./Button.module.scss";

type ButtonProps = {
  children: JSX.Element;
};

export function Button(props: ButtonProps) {
  return <div className={Styles.Button}>{props.children}</div>;
}
