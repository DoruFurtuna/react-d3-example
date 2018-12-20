// react-kawaii.d.ts
declare module "react-kawaii" {
  export interface Props {
    color?: string;
    size?: number;
    mood?:
      | "sad"
      | "shocked"
      | "happy"
      | "blissful"
      | "lovestruck"
      | "excited"
      | "ko";
  }

  export function Backpack(props: Props): JSX.Element;
  export function Browser(props: Props): JSX.Element;
  export function CreditCard(props: Props): JSX.Element;
  export function Ghost(props: Props): JSX.Element;
  export function IceCream(props: Props): JSX.Element;
  export function Mug(props: Props): JSX.Element;
  export function SpeechBubble(props: Props): JSX.Element;
  export function Planet(props: Props): JSX.Element;
}
