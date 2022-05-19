import { randomItem } from "./deps.ts";
import { maxSize } from "./config.ts";

const baseUrl = "https://api.waifu.pics/sfw/";

const categorys = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];

export async function getImage() {
  while (true) {
    const { url: imgUrl } = await fetch(
      `${baseUrl}${randomItem(categorys)}`
    ).then((rsp) => rsp.json());

    const img = await fetch(imgUrl).then((rsp) => rsp.arrayBuffer());

    if (img.byteLength <= maxSize) {
      return img;
    }
  }
}
