import { createGlobalStyle } from "styled-components";
import { Themes } from "../helpers/theme";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lexend Deca", sans-serif;
    }

    html,body {
        background-color: ${Themes.Palette.body};
    }

    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

`;
