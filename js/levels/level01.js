import music from "../music.js";
import patterns from "./patterns.js";


const LEVEL_DATA = patterns.utils.series(patterns.ready(25), [
    ["80 80}80 80 80 80 80 80 80 80 80 80 80 80 80 80{80 ", 1],
    ["80 80 80}80 80 80 80 80 80 80 80 80 80 80 80{80 80 ", 1],
    ["80 80 80 80}80 80 80 80 80 80 80 80 80 80{80 80 80 ", 1],
    ["80 80 80 80 80}80 80 80 80 80 80 80 80{80 80 80 80 ", 1],
    ["80 80 80 80 80 80}80 80 80 80 80 80{80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80}80 80 80 80{80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80}80 80{80 80 80 80 80 80 80 ", 1],
    ["80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 80 ", 1],
    ["801802803804805806807808809808807806805804803802801", 1],
    ["801802803804805806807808809808807806805804803802801", 1],
    ["80 80}80 80 80 80 80 80 80 80 80 80 80 80 80 80{80 ", 1],
    ["80 80 80}80 80 80 80 80 80 80 80 80 80 80 80{80 80 ", 1],
    [".. 80!80 80}80 80 80 80 80 80 80 80 80 80{80 80!.. ", 1],
    [".. .. 80!80 80}80 80 80 80 80 80 80 80{80 80!.. .. ", 1],
    [".. .. .. 80!80 80}80 80 80 80 80 80{80 80!.. .. 00 ", 1],
    [".. .. .. .. 80!80 80}80 80 80 80{80 80!.. .. .. 00 ", 1],
    [".. .. .. .. .. 80!80 80}80 80{80 80!80 .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 1],
    [".. .. .. .. .. FFXFFX802802802FFXFFX.. .. .. .. 00 ", 5],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. 00 ", 4],
    [".. .. .. .. .. .. .. 80#80#80#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80#80#80#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 84#84#84#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 8C#8C#8C#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4], /*
    [".. .. .. .. .. .. .. 90#90#90#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 3],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 84#84#84#.. .. .. .. .. .. .. ", 3], */
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 5],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80>80>80>.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80^80^80^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80<80<80<.. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80>80>80>.. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. .. 80!80!80!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. 80<80<80<.. .. .. .. .. .. .. ", 20],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 12],
    [".. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. 80 80{80 .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. .. ", 6],
    [".. .. .. 40 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. 40 80 80}80 .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. 40 .. 80 80 80 .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. 80 80 80 .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 88#88#88#.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. .. .. .. 80 80 80 .. .. .. .. .. ", 2],
    [".. .. .. 40 .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. ", 6],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. 50 .. .. .. .. .. .. .. 80 80 80 .. .. .. ", 1],
    [".. .. .. 50 .. .. .. .. .. .. .. 80 80{80 .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. 60 .. .. .. .. .. .. 80 80 80 .. .. .. .. .. ", 2],
    [".. .. 60 .. .. .. .. .. 80 80 80 .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. 70 .. .. .. .. 7F 7F 7F .. .. .. .. .. .. .. ", 2],
    [".. .. 70 .. .. .. .. 7E 7E 7E .. .. .. .. .. .. .. ", 2],
    [".. 70 70 70 .. .. .. 7D 7D 7D .. .. .. .. .. .. .. ", 2],
    [".. 70 70 70 .. .. .. 7C 7C 7C .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 7B 7B 7B .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 7A 7A 7A .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 79 79 79 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 78 78 78 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 78!78!78!.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 76 76 76 .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 7B 7B 7B .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 7],
    [".. .. .. .. .. .. .. 80+80+80+.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90X90X90X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 6],
    [".. .. .. .. .. .. .. 90+90+90+.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0XA0XA0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0 A0 .. .. .. .. .. .. .. ", 6],
    [".. .. .. .. .. .. .. A0-A0-A0-.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 70 70 70 .. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. 80X80X80X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90X90X90X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0XA0XA0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0 A0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. B0XB0XB0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. B0 B0 B0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. C0XC0XC0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. C0 C0 C0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. D0XD0XD0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. D0 D0 D0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. E0XE0XE0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. E0 E0 E0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. F0XF0XF0X.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. F0 F0 F0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FFXFFXFFX.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FFXFFXFFX.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. FF2FF2FF2.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. EF4EF4EF4.. .. .. .. .. .. .. ", 8],
    [".. .. .. .. .. .. .. EF6EF6EF6.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. FF2FF2FF2.. .. .. .. .. .. .. ", 4],
    [".. .. .. .. .. .. .. FF FF FF .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. FF FF FF .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. F0 F0 F0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. E0 E0 E0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. D0 D0 D0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. C0^C0^C0^.. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. B0 B0 B0 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. A0^A0 A0^.. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. A0 A0^A0 .. .. .. .. .. .. .. ", 1],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 90 90 90 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. 80 80 80 .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. 80 80 80 .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. 80 80 80 .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. 80 80 80 .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ", 2],
    [".. .. .. .. .. .. .. 80 80 80 .. .. .. .. .. .. .. ", 100],
]);

export default {
    level: LEVEL_DATA,
    options: {
        name: "Doddle in the Park",
        bpm: music.roccow01.bpm,
        //colors: [0xC0A090, 0xA090C0, 0x90A0C0, 0xA0C090, 0xC090A0, 0x90A0C0],
        bgColor: 0x204080,
        colors: [0xFF8040, 0x8040FF, 0x40FF80, 0x80FF40, 0xFF4080, 0x4080FF],
        //colors: [0xFFFFFF, 0x404040, 0x804040, 0x408040],
        music: music.roccow01
    }
};