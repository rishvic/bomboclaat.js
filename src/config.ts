import dotenv from "dotenv";

dotenv.config();

const errs = [];

export const TOKEN = process.env.BOMBO_BOT_TOKEN ?? "";
if (!TOKEN) errs.push("'BOMBO_BOT_TOKEN' environment variable not set");

export const CLIENT_ID = process.env.BOMBO_CLIENT_ID ?? "";
if (!CLIENT_ID) errs.push("'BOMBO_CLIENT_ID' environment variable not set");

export const GUILD_ID = process.env.BOMBO_GUILD_ID ?? "";
if (!GUILD_ID) errs.push("'BOMBO_GUILD_ID' environment variable not set");

if (errs.length > 0) {
  throw new Error(errs.join(", "));
}
