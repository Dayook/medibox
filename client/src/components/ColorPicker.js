import React, { useEffect } from "react";
import medicineInfo from "./medicineInfo.json";
function ColorPicker() {
  useEffect(() => {
    medicineInfo.map((medicine, index) => {
      const imgSrc =
        "https://www.pharm.or.kr:442/images/sb_photo/big3/" +
        medicine.INSERT_FILE.substr(-20, 13) +
        "01.jpg";
      document.write("<img className='i' src='" + imgSrc + "'>");
    });
    // var rgb = getAverageRGB(document.getElementsByClassName("i"));
    // console.log(rgb);
  });
  function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height =
      imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */ alert("x");
      return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }

  return (
    <div>
      <button
        onClick={() => {
          console.log(getAverageRGB(document.getElementsByClassName("i")));
        }}
      >
        get avarage color
      </button>
    </div>
  );
}

export default ColorPicker;