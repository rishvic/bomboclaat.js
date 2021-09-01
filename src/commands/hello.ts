import { SlashCommandBuilder, userMention } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Greets the user back!"),
  async execute(interaction: CommandInteraction): Promise<void> {
    const userId = interaction.user.id;
    await interaction.reply(`Hello there, ${userMention(userId)}`);
  },
};
