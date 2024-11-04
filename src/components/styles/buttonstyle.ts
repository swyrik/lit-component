import { css } from "lit";

const fontSize = 24;
export const buttonStyle = css`
    .button {
        color: white;
        background-color: blue;
        border: none;
        padding: 10px 20px;
        font-size: ${fontSize}px;
        cursor: pointer;
    }

    .button:focus-visible {
        outline: 1px solid rgba(0,0,0,0.1);
        outline-offset: 5px;
    }
`;