import { maxSize } from "./config.ts";

const apiUrl = "https://api.waifu.im/random?is_nsfw=false";

export async function getImage() {
  while (true) {
    const { images } = await fetch(apiUrl).then((rsp) => rsp.json());

    const imgUrl = images?.[0]?.url;

    const img = await fetch(imgUrl).then((rsp) => rsp.arrayBuffer());

    if (img.byteLength <= maxSize) {
      return img;
    }
  }
}
