import { base64, Md5 } from "./deps.ts";
import { webhook } from "./config.ts";
import { getImage } from "./waifu.im.ts";

async function start() {
  const image = await getImage();

  const imageData = base64.encode(image);

  const md5 = new Md5().update(image).toString();

  const body = {
    msgtype: "image",
    image: {
      base64: imageData,
      md5: md5,
    },
  };

  const rsp = await fetch(webhook, {
    method: "POST",
    body: JSON.stringify(body),
  }).then((rsp) => rsp.json());

  if (rsp?.errcode !== 0) {
    await start();
  }
}

start();
