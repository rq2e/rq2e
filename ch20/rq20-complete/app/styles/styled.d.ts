// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      melon: string;
      vodka: string;
      crayola: string;
      quartz: string;
      palatinate: string;
    };
  }
}
