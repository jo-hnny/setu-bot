const apiUrl = "https://api.waifu.im/random?is_nsfw=false";

export async function getImage() {
  const { images } = await fetch(apiUrl).then((rsp) => rsp.json());

  const { url, source } = images?.[0];

  return {
    image: url,
    source,
  };
}
