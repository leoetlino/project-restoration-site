const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
  await imagemin(["img/*.{jpg,png}"], {
    destination: "img/",
    plugins: [
      imageminWebp({
        quality: 80,
      }),
    ]
  });

  await imagemin(["img/*.{jpg,png}"], {
    destination: "img/",
    plugins: [
      imageminMozjpeg({
        quality: 85,
      }),
      imageminPngquant({
        quality: [0.6, 0.8],
        strip: true,
      }),
    ]
  });
})();
