/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      textColor: {
        colorBlue: "#084CA5",
      },
      backgroundColor: {
        colorBlue: "#084CA5",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(52deg, rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%,rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%,rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%), linear-gradient(258deg, rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%,rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%,rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%), linear-gradient(129deg, rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%,rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%,rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%), linear-gradient(280deg, rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%,rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%,rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%), linear-gradient(85deg, rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%,rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%,rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%), linear-gradient(128deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%,rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%,rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.89999999999999%), linear-gradient(323deg, rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%,rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%,rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.89999999999999%), linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%,rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%,rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%), linear-gradient(0deg, #2625e3,#0bbaef)",
        "custom-blue-gradient":
          "linear-gradient(330deg, rgba(225, 225, 225, 0.05) 0%, rgba(225, 225, 225, 0.05) 33.333%,rgba(114, 114, 114, 0.05) 33.333%, rgba(114, 114, 114, 0.05) 66.666%,rgba(52, 52, 52, 0.05) 66.666%, rgba(52, 52, 52, 0.05) 99.999%),linear-gradient(66deg, rgba(181, 181, 181, 0.05) 0%, rgba(181, 181, 181, 0.05) 33.333%,rgba(27, 27, 27, 0.05) 33.333%, rgba(27, 27, 27, 0.05) 66.666%,rgba(251, 251, 251, 0.05) 66.666%, rgba(251, 251, 251, 0.05) 99.999%),linear-gradient(225deg, rgba(98, 98, 98, 0.05) 0%, rgba(98, 98, 98, 0.05) 33.333%,rgba(222, 222, 222, 0.05) 33.333%, rgba(222, 222, 222, 0.05) 66.666%,rgba(228, 228, 228, 0.05) 66.666%, rgba(228, 228, 228, 0.05) 99.999%),linear-gradient(90deg, rgb(28, 20, 63),rgb(40, 160, 253))",
        "custom-blue2-gradient":
          "linear-gradient(135deg, rgba(19, 176, 223, 0.26) 0%, rgba(19, 176, 223, 0.26) 23%,rgba(16, 160, 197, 0.26) 23%, rgba(16, 160, 197, 0.26) 65%,rgba(13, 144, 172, 0.26) 65%, rgba(13, 144, 172, 0.26) 70%,rgba(9, 129, 146, 0.26) 70%, rgba(9, 129, 146, 0.26) 74%,rgba(6, 113, 121, 0.26) 74%, rgba(6, 113, 121, 0.26) 90%,rgba(3, 97, 95, 0.26) 90%, rgba(3, 97, 95, 0.26) 100%),linear-gradient(45deg, rgba(65, 234, 230, 0.26) 0%, rgba(65, 234, 230, 0.26) 28%,rgba(88, 192, 215, 0.26) 28%, rgba(88, 192, 215, 0.26) 55%,rgba(110, 150, 201, 0.26) 55%, rgba(110, 150, 201, 0.26) 66%,rgba(133, 107, 186, 0.26) 66%, rgba(133, 107, 186, 0.26) 80%,rgba(155, 65, 172, 0.26) 80%, rgba(155, 65, 172, 0.26) 85%,rgba(178, 23, 157, 0.26) 85%, rgba(178, 23, 157, 0.26) 100%),linear-gradient(90deg, rgb(27, 194, 246) 0%, rgb(27, 194, 246) 6%,rgb(39, 174, 237) 6%, rgb(39, 174, 237) 32%,rgb(50, 155, 229) 32%, rgb(50, 155, 229) 40%,rgb(62, 135, 220) 40%, rgb(62, 135, 220) 66%,rgb(74, 116, 211) 66%, rgb(74, 116, 211) 72%,rgb(86, 96, 202) 72%, rgb(86, 96, 202) 86%,rgb(97, 77, 194) 86%, rgb(97, 77, 194) 96%,rgb(109, 57, 185) 96%, rgb(109, 57, 185) 100%)",
        "custom-blue": "radial-gradient(circle at 53% 25%, rgba(203, 203, 203,0.04) 0%, rgba(203, 203, 203,0.04) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 48% 27%, rgba(22, 22, 22,0.04) 0%, rgba(22, 22, 22,0.04) 45%,transparent 45%, transparent 100%),radial-gradient(circle at 65% 50%, rgba(219, 219, 219,0.04) 0%, rgba(219, 219, 219,0.04) 61%,transparent 61%, transparent 100%),radial-gradient(circle at 78% 82%, rgba(229, 229, 229,0.04) 0%, rgba(229, 229, 229,0.04) 26%,transparent 26%, transparent 100%),radial-gradient(circle at 99% 75%, rgba(96, 96, 96,0.04) 0%, rgba(96, 96, 96,0.04) 31%,transparent 31%, transparent 100%),radial-gradient(circle at 17% 28%, rgba(188, 188, 188,0.04) 0%, rgba(188, 188, 188,0.04) 15%,transparent 15%, transparent 100%),radial-gradient(circle at 19% 19%, rgba(25, 25, 25,0.04) 0%, rgba(25, 25, 25,0.04) 68%,transparent 68%, transparent 100%),radial-gradient(circle at 35% 23%, rgba(31, 31, 31,0.04) 0%, rgba(31, 31, 31,0.04) 18%,transparent 18%, transparent 100%),linear-gradient(90deg, rgb(138, 193, 238),rgb(20, 21, 171))"
      },
      screens: {
        custom: "1555px",
      },
      boxShadow: {
        "box-black": "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },
      rotate: {
        195: "210deg",
      },
      borderRadius: {
        "left": "6px 0px 0px 6px",
        "rigth": "0px 6px 6px 0px",
        "round-image1": "22% 78% 49% 51% / 73% 30% 70% 27%",
        "round-image2": "33% 67% 14% 86% / 65% 35% 65% 35%",
        "round-image3": "80% 20% 55% 45% / 27% 35% 65% 73%"
      }
    },
  },
  plugins: [],
};
