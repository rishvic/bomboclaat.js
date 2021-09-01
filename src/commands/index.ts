import ping from "./ping";
import hello from "./hello";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export type CommandExecFn = (interaction: CommandInteraction) => Promise<void>;
export type CommandExportType = {
  data: SlashCommandBuilder;
  execute: CommandExecFn;
};

const commandList: CommandExportType[] = [ping, hello];

export default commandList;
