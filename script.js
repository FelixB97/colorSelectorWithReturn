"use strict";
window.addEventListener("DOMContentLoaded", init);

const colorImput = document.querySelector("#colorSelector"); 
let hexColorValue = colorImput.value; //global variable for color updating
let dropDown = document.querySelector("#colorDropDown").value; //global variable for dropdown choice;



function init() {
    console.log("init(); window has loaded");
    getColorValue(hexColorValue);
    colorChanger(); // calls color changer once for initial color correction

    colorImput.addEventListener("input", colorChanger); //lets all inputs trigger color change
    let dropDown = document.querySelector("#colorDropDown").value;

}

function getColorValue() {
    return hexColorValue;
}

function colorChanger() {
    hexColorValue = colorImput.value; //updates colorValue for everytime this function recieves a call from input

    dropDown = document.querySelector("#colorDropDown").value; //Updates dropDown selection
    
    const hexCode = getColorValue(); // gets initial hex color value from imput

    displayHex(hexCode);

    hexToRGB(hexCode);

    const RGBCode = hexToRGB(hexCode); // gets RGB value

    displayRGBValue(RGBCode);

    RGBtoHSL(RGBCode);

    const HSLCode = RGBtoHSL(RGBCode); // gets HSL Value

    displayHSLValue(HSLCode);

    displayColorDiv(RGBCode); //displays color in the div by rgb value

    if (dropDown == "analogous") {

        console.log("analogues");

        const aHSL = RGBtoHSL(RGBCode);

        analogousGetHSLValues(aHSL);

        const allHSL = analogousGetHSLValues(aHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayAnalogous(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "monochromatic") {

        console.log("monochromatic");

        const mHSL = RGBtoHSL(RGBCode);

        const allHSL = monochromaticGetHSLValues(mHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayMonochromatic(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "triad") {
        console.log("triad");

        const tHSL = RGBtoHSL(RGBCode);

        triadGetHSLValues(tHSL);

        const allHSL = triadGetHSLValues(tHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayTriad(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "complementary") {
        console.log("complementary");

        const cHSL = RGBtoHSL(RGBCode);

        complementaryGetHSLValues(cHSL);

        const allHSL = complementaryGetHSLValues(cHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayComplementary(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "compound") {
        console.log("compound");

        const cHSL = RGBtoHSL(RGBCode);

        compoundGetHSLValues(cHSL);

        const allHSL = compoundGetHSLValues(cHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayCompound(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "shades") {
        console.log("shades");

        const sHSL = RGBtoHSL(RGBCode);

        shadesGetHSLValues(sHSL);

        const allHSL = shadesGetHSLValues(sHSL);

        HSLToRGB(allHSL.HSL1);
        const RGB1 = HSLToRGB(allHSL.HSL1);
        HSLToRGB(allHSL.HSL2);
        const RGB2 = HSLToRGB(allHSL.HSL2);
        HSLToRGB(allHSL.HSL3);
        const RGB3 = HSLToRGB(allHSL.HSL3);
        HSLToRGB(allHSL.HSL4);
        const RGB4 = HSLToRGB(allHSL.HSL4);
        HSLToRGB(allHSL.HSL5);
        const RGB5 = HSLToRGB(allHSL.HSL5);

        displayShades(RGB1,RGB2,RGB3,RGB4,RGB5);
        displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5);
    }
    if (dropDown == "nothing") {
        console.log("nothing");
    }

    
    
}

function displayHex(hex) {
    document.querySelector("#hexValue").innerHTML = hex;
}

function hexToRGB(hex) {

    const toR = hex.substring(1,3);
    const toG = hex.substring(3,5);
    const toB = hex.substring(5,7);

    const r = Number.parseInt(toR,16);
    const g = Number.parseInt(toG,16);
    const b = Number.parseInt(toB,16);

    return {r,g,b};

}

function displayRGBValue(RGB) {
    document.querySelector("#rgbValue").innerHTML = `(${RGB.r}, ${RGB.g}, ${RGB.b})`;
}

function RGBtoHSL(RGB) {
    
    let r = RGB.r;
    let g = RGB.g;
    let b = RGB.b;

    
    r /= 255;
    g /= 255;
    b /= 255;
    
    let h, s, l;
    
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
    
    if( max === min ) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min) );
    }
    
    if (h < 0) {h = h + 360; }
    
    l = (min + max) / 2;
    
    if (max === 0 || min === 1 ) {
        s = 0;
    } else {
        s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    

    return {h,s,l};
    
}

function displayHSLValue(HSL) {
    document.querySelector("#hslValue").innerHTML = `${Math.round(HSL.h)} ${Math.round(HSL.s)}% ${Math.round(HSL.l)}%`;
}

function displayColorDiv(RGB) {
    document.querySelector("#colorOutput").style.backgroundColor = `rgb(${RGB.r}, ${RGB.g}, ${RGB.b})`;
}

function HSLToRGB(HSL) {
    
    let h = HSL.h;
    let s = HSL.s;
    let l = HSL.l;
    
    if (h > 360) {//fixes values going above max h value
        h = HSL.h-360;
    }
    if (h < 0) {//fixes values going under minimum h value
        h = HSL.h+360;
    }
    // if (s > 100) {
    //     s = 100;
    // }
    // if (s < 0) {
    //     s = 0;
    // }
    // if (l > 100) {
    //     l = 100;
    // }
    // if (l < 0) {
    //     l = 0;
    // }

    h = h;
    s = s / 100;
    l = l / 100;
    
    let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
    if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
    } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
    } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
    } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
    } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
    } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    

    return {r,g,b};

}

function RGBToHex(RGB) {

    let first = RGB.r.toString(16);
    let second = RGB.g.toString(16);
    let third = RGB.b.toString(16);

    if (first.length == 1) {
        first = "0" + first;
    }
    if (second.length == 1) {
        second = "0" + second;
    }
    if (third.length == 1) {
        third = "0" + third;
    }

    return `#${first}${second}${third}`
}

function analogousGetHSLValues(aHSL) {
    
    const h1 = aHSL.h;
    const h2 = aHSL.h+20;
    const h3 = aHSL.h-20;
    const h4 = aHSL.h+40;
    const h5 = aHSL.h-40;
    const s = aHSL.s;
    const l = aHSL.l;

    const HSL1 = {h:h1, s:s, l:l};
    const HSL2 = {h:h2, s:s, l:l};
    const HSL3 = {h:h3, s:s, l:l};
    const HSL4 = {h:h4, s:s, l:l};
    const HSL5 = {h:h5, s:s, l:l};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayAnalogous(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function monochromaticGetHSLValues(mHSL) {
    
    const h = mHSL.h;
    
    const s1 = mHSL.s;
    const s2 = mHSL.s*1.5;
    const s3 = mHSL.s*0.5;
    const s4 = mHSL.s*2;
    const s5 = mHSL.s*0.1;
    const l = mHSL.l;

    const HSL1 = {h:h, s:s1, l:l};
    const HSL2 = {h:h, s:s2, l:l};
    const HSL3 = {h:h, s:s3, l:l};
    const HSL4 = {h:h, s:s4, l:l};
    const HSL5 = {h:h, s:s5, l:l};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayMonochromatic(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function triadGetHSLValues(aHSL) {
    
    const h1 = aHSL.h;
    const h2 = aHSL.h+60;
    const h3 = aHSL.h-60;
    const h4 = aHSL.h;
    const h5 = aHSL.h;
    const s = aHSL.s;
    const l = aHSL.l;

    const HSL1 = {h:h1, s:s, l:l};
    const HSL2 = {h:h2, s:s, l:l};
    const HSL3 = {h:h3, s:s, l:l};
    const HSL4 = {h:h4, s:s, l:l*2};
    const HSL5 = {h:h5, s:s, l:l*0.5};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayTriad(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function complementaryGetHSLValues(aHSL) {
    
    const h1 = aHSL.h;
    const h2 = aHSL.h+180;
    const h3 = aHSL.h+20;
    const h4 = aHSL.h-20;
    const h5 = aHSL.h;
    const s = aHSL.s;
    const l = aHSL.l;

    const HSL1 = {h:h1, s:s, l:l};
    const HSL2 = {h:h2, s:s, l:l};
    const HSL3 = {h:h3, s:s, l:l};
    const HSL4 = {h:h4, s:s, l:l};
    const HSL5 = {h:h5, s:s*0.5, l:l*1.5};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayComplementary(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function compoundGetHSLValues(aHSL) {
    
    const h1 = aHSL.h;
    const h2 = aHSL.h+120;
    const h3 = aHSL.h-120;
    const h4 = aHSL.h-25;
    const h5 = aHSL.h+25;
    const s = aHSL.s;
    const l = aHSL.l;

    const HSL1 = {h:h1, s:s, l:l};
    const HSL2 = {h:h2, s:s, l:l};
    const HSL3 = {h:h3, s:s, l:l};
    const HSL4 = {h:h4, s:s, l:l};
    const HSL5 = {h:h5, s:s*0.5, l:l*1.5};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayCompound(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function shadesGetHSLValues(aHSL) {
    
    const h1 = aHSL.h;
    const h2 = aHSL.h;
    const h3 = aHSL.h;
    const h4 = aHSL.h;
    const h5 = aHSL.h;
    const s = aHSL.s;
    const l = aHSL.l;

    const HSL1 = {h:h1, s:s, l:l};
    const HSL2 = {h:h2, s:s, l:l+50};
    const HSL3 = {h:h3, s:s, l:l*0.5};
    const HSL4 = {h:h4, s:s, l:l*3};
    const HSL5 = {h:h5, s:s, l:l*1.5};

    return {HSL1,HSL2,HSL3,HSL4,HSL5};
}

function displayShades(RGB1,RGB2,RGB3,RGB4,RGB5) {
    document.querySelector("#color_4").style.backgroundColor = `rgb(${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2").style.backgroundColor = `rgb(${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1").style.backgroundColor = `rgb(${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3").style.backgroundColor = `rgb(${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5").style.backgroundColor = `rgb(${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;
}

function displayAllColorInfo(RGB1,RGB2,RGB3,RGB4,RGB5) {

    //displays all hex Values
    document.querySelector("#color_4 .hex").innerHTML = `HEX: ${RGBToHex(RGB3)}`;
    document.querySelector("#color_2 .hex").innerHTML = `HEX: ${RGBToHex(RGB2)}`;
    document.querySelector("#color_1 .hex").innerHTML = `HEX: ${RGBToHex(RGB4)}`;
    document.querySelector("#color_3 .hex").innerHTML = `HEX: ${RGBToHex(RGB1)}`;
    document.querySelector("#color_5 .hex").innerHTML = `HEX: ${RGBToHex(RGB5)}`;

    //displays all rgb values
    document.querySelector("#color_4 .rgb").innerHTML = `RGB; (${RGB3.r}, ${RGB3.g}, ${RGB3.b})`;
    document.querySelector("#color_2 .rgb").innerHTML = `RGB: (${RGB2.r}, ${RGB2.g}, ${RGB2.b})`;
    document.querySelector("#color_1 .rgb").innerHTML = `RGB: (${RGB4.r}, ${RGB4.g}, ${RGB4.b})`;
    document.querySelector("#color_3 .rgb").innerHTML = `RGB: (${RGB1.r}, ${RGB1.g}, ${RGB1.b})`;
    document.querySelector("#color_5 .rgb").innerHTML = `RGB: (${RGB5.r}, ${RGB5.g}, ${RGB5.b})`;


    //gets all HSL values
    let HSL1 = RGBtoHSL(RGB1);
    let HSL2 = RGBtoHSL(RGB2);
    let HSL3 = RGBtoHSL(RGB3);
    let HSL4 = RGBtoHSL(RGB4);
    let HSL5 = RGBtoHSL(RGB5);
    //displays all hsl values 
    document.querySelector("#color_4 .hsl").innerHTML = `HSL: ${Math.round(HSL3.h)} ${Math.round(HSL3.s)}% ${Math.round(HSL3.l)}%`;
    document.querySelector("#color_2 .hsl").innerHTML = `HSL: ${Math.round(HSL2.h)} ${Math.round(HSL2.h)}% ${Math.round(HSL2.h)}%`;
    document.querySelector("#color_1 .hsl").innerHTML = `HSL: ${Math.round(HSL4.h)} ${Math.round(HSL4.h)}% ${Math.round(HSL4.h)}%`;
    document.querySelector("#color_3 .hsl").innerHTML = `HSL: ${Math.round(HSL1.h)} ${Math.round(HSL1.h)}% ${Math.round(HSL1.h)}%`;
    document.querySelector("#color_5 .hsl").innerHTML = `HSL: ${Math.round(HSL5.h)} ${Math.round(HSL5.h)}% ${Math.round(HSL5.h)}%`;
}

