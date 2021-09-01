import { Client, Collection, Intents } from "discord.js";
import _ from "lodash";
import commandList, { CommandExportType } from "./commands";
import { TOKEN } from "./config";
import deployCommands from "./deployCommands";
import logger from "./logger";

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Create a collection of commands
const commands = new Collection<string, CommandExportType>();

// Set the command for the client
_.forEach(commandList, (command) => {
  commands.set(command.data.name, command);
});

// When the client is ready, run this code (only once)
client.once("ready", (readyClient) => {
  logger.warn(`Logged in as ${readyClient.user.tag}`);
});

// Run through the list of commands on interaction
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    logger.error(err);
    return interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});

deployCommands().catch((err) => logger.error(err));
client.login(TOKEN).catch((err) => logger.error(err));
