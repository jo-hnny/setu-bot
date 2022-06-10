const webhookKey = Deno?.env?.get("WEBHOOK_KEY") ?? "";

export const webhook = `https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${webhookKey}`;
