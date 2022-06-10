import { webhook } from "./config.ts";
import { getImage } from "./waifu.im.ts";

async function start() {
  const { image, source } = await getImage();

  const body = {
    msgtype: "news",
    news: {
      articles: [
        {
          title: "source",
          description: source,
          url: image,
          picurl: image,
        },
      ],
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
