# bomboclaat-the-app

A Discord bot. Written using [discord.js](https://discord.js.org/).

## Running the Bot

### Prerequisites

- Node.js (v16.6.0 or later, as required by discord.js)
- Yarn (recommended over npm)

### Setting up

```sh
git clone https://github.com/Colocasian/bomboclaat-the-app.git
cd bomboclaat-the-app

# Install node dependencies and setup git hooks
yarn install
```

### Starting the Server

To run a development server, run `yarn start:dev`. Note, that this runs
the application with `ts-node`, thus this should not be done for
production deployment. In production environment, first a JavaScript
bundle should be created by doing `yarn build` (bundle will be placed in
the folder `dist/`). Then, the server can be run using `yarn start`. To
perform both the steps together, one can simply do
`yarn build && yarn start`.

## Adding a command.

To add a slash command, two things must be done.

1. A module should be added in the `src/commands/` directory, with the
   appropriate export (described below).
2. The newly written module should be added to the `commandList` array
   in `src/commands/index.ts`.

The exported value of the module should have the following form:

```typescript
export {
  // data field with the slash command, with name, description, params, etc.
  data: new SlashCommandBuilder()
    .setName("commandname")
    .setDescription("A suitable description for the command"),
  async execute(interaction: CommandInteraction): Promise<void> {
    // Anything you want to do within the function ...
  }
}
```

---

Licensed under the GNU Affero General Public License v3.0 or later.
