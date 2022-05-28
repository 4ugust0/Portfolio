import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --margin-center: 56.25rem;
        --section-one-height: 15.625rem;
        --section-two-card-news-height: 12.188rem;
        --section-two-card-news-top: 21.875rem;
        --section-two-card-news-radius: 0.313rem;
    }

`;
