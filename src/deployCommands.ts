import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import _ from "lodash";
import { CLIENT_ID, GUILD_ID, TOKEN } from "./config";
import logger from "./logger";
import commandList from "./commands";

const commands = _.map(commandList, (command) => command.data.toJSON());

const rest = new REST({ version: "9" }).setToken(TOKEN);

export default async (): Promise<void> => {
  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });

    logger.info("Successfully registered application commands.");
  } catch (err) {
    logger.error(err);
  }
};
