import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props {
  icon: IconProp;
  label: string;
  to: string;
}

export interface State {
  currentEnthusiasm: number;
}
