import {Box} from "@mui/material";
import React from "react";

export const ContactsContainer: React.FC = () => (
    <Box>
        <style>
            {`
            /* From Uiverse.io by roajuan93 */
            .card {
            width: fit-content;
            height: fit-content;
            background-color: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 5px 5px;
            gap: 20px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
        }

            /* for all social containers*/
            .socialContainer {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            background-color: rgb(44, 44, 44);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            transition-duration: 0.3s;
        }
            /* instagram*/
            .containerOne:hover {
            background-color: #d62976;
            transition-duration: 0.3s;
        }
            /* Tiktok*/
            .containerTwo:hover {
            background-color: #25f4ee;
            transition-duration: 0.3s;
        }
            /* Facebook*/
            .containerThree:hover {
            background-color: #1877f2;
            transition-duration: 0.3s;
        }
            /* Whatsapp*/
            .containerFour:hover {
            background-color: green;
            transition-duration: 0.3s;
        }

            .socialContainer:active {
            transform: scale(0.9);
            transition-duration: 0.3s;
        }

            .socialSvg {
            width: 19px;
        }
            .largeIcon {
            width: 27px; /* Ancho específico solo para el icono de TikTok */
        }
            .socialSvg path {
            fill: rgb(255, 255, 255);
        }

            .socialContainer:hover .socialSvg {
            animation: slide-in-top 0.3s both;
        }

            @keyframes slide-in-top {
            0% {
                transform: translateY(-50px);
            opacity: 0;
        }

            100% {
            transform: translateY(0);
            opacity: 1;
            `
        }

        </style>
        <div className="card">
            <a href="mailto:lastechdev@protonmail.com" className="socialContainer containerOne">
                <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <path d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

                </svg>
            </a>

            <a href="https://github.com/MichalLastovka" target="_blank" rel="noopener noreferrer" className="socialContainer containerTwo">
                <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" xmlns="http://www.w3.org/2000/svg" fill="#fff">

                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                    <g id="SVGRepo_iconCarrier"> <title>github</title> <rect width="24" height="24" fill="none"/> <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/> </g>

                </svg>
            </a>

            {/*<a href="#" className="socialContainer containerThree">*/}
            {/*    <div>*/}
            {/*        <svg*/}
            {/*            className="socialSvg tiktokSvg largeIcon"*/}
            {/*            width="44px"*/}
            {/*            height="44px"*/}
            {/*            viewBox="0 0 45 35"*/}
            {/*            version="1.1"*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*        >*/}
            {/*            <title>Facebook</title>*/}
            {/*            <g*/}
            {/*                id="Icon/Social/facebook-black"*/}
            {/*                stroke="none"*/}
            {/*                stroke-width="1"*/}
            {/*                fill="none"*/}
            {/*                fill-rule="evenodd"*/}
            {/*            >*/}
            {/*                <path*/}
            {/*                    d="M30.0793333,40 L30.0793333,27.608 L34.239,27.608 L34.8616667,22.7783333 L30.0793333,22.7783333 L30.0793333,19.695 C30.0793333,18.2966667 30.4676667,17.344 32.4726667,17.344 L35.0303333,17.3426667 L35.0303333,13.0233333 C34.5876667,12.9646667 33.0696667,12.833 31.3036667,12.833 C27.6163333,12.833 25.0923333,15.0836667 25.0923333,19.2166667 L25.0923333,22.7783333 L20.922,22.7783333 L20.922,27.608 L25.0923333,27.608 L25.0923333,40 L30.0793333,40 Z M9.766,40 C8.79033333,40 8,39.209 8,38.234 L8,9.766 C8,8.79033333 8.79033333,8 9.766,8 L38.2336667,8 C39.209,8 40,8.79033333 40,9.766 L40,38.234 C40,39.209 39.209,40 38.2336667,40 L9.766,40 Z"*/}
            {/*                    id="Shape"*/}
            {/*                    fill="#FFFFFF"*/}
            {/*                ></path>*/}
            {/*            </g>*/}
            {/*        </svg>*/}
            {/*    </div>*/}
            {/*</a>*/}

            {/*<a href="#" className="socialContainer containerFour">*/}
            {/*    <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">*/}
            {/*        <path*/}
            {/*            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"*/}
            {/*        ></path>*/}
            {/*    </svg>*/}
            {/*</a>*/}
        </div>
    </Box>
);