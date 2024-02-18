import ReactLogo from "../../public/image/tools/react.png";
import ReactNativeLogo from "../../public/image/tools/react-native.png";
import NextLogo from "../../public/image/tools/next.png";
import HTMLLogo from "../../public/image/tools/html.png";
import CSSLogo from "../../public/image/tools/css.png";
import JSLogo from "../../public/image/tools/js.png";
import TSLogo from "../../public/image/tools/ts.png";
import ReduxLogo from "../../public/image/tools/redux.png";
import GitLogo from "../../public/image/tools/git.png";
import { StaticImageData } from "next/image";

export type StackType = {
  name: string;
  imageSrc: StaticImageData;
};

export const stackList: StackType[] = [
  { imageSrc: ReactLogo, name: "React.js" },
  { imageSrc: ReactNativeLogo, name: "React-Native" },
  { imageSrc: NextLogo, name: "Next.js" },
  { imageSrc: HTMLLogo, name: "HTML5" },
  { imageSrc: CSSLogo, name: "CSS3" },
  { imageSrc: JSLogo, name: "JavaScript" },
  { imageSrc: TSLogo, name: "TypeScript" },
  { imageSrc: ReduxLogo, name: "Redux-Toolkit" },
  { imageSrc: GitLogo, name: "Git" },
];
