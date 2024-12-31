// https://vike.dev/Head

// TODO replace a normal logo
import logoUrl from "../assets/logo.svg";

import { injectThemeScript } from "../utils/theme";

export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />
      {/* this assures FOUC is avoided */}
      <script>{injectThemeScript}</script>
    </>
  );
}
