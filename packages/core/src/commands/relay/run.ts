import { app } from "@arkecosystem/core-container";
import { flags } from "@oclif/command";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the relay (without pm2)";

    public static examples: string[] = [
        `Run a relay
$ teton relay:run
`,
        `Run a genesis relay
$ teton relay:run --networkStart
`,
        `Disable any discovery by other peers
$ teton relay:run --disableDiscovery
`,
        `Skip the initial discovery
$ teton relay:run --skipDiscovery
`,
        `Ignore the minimum network reach
$ teton relay:run --ignoreMinimumNetworkReach
`,
        `Start a seed
$ teton relay:run --launchMode=seed
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        suffix: flags.string({
            hidden: true,
            default: "relay",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await super.buildApplication(app, flags, {
            exclude: ["@arkecosystem/core-forger"],
            options: {
                "@arkecosystem/core-p2p": this.buildPeerOptions(flags),
                "@arkecosystem/core-blockchain": {
                    networkStart: flags.networkStart,
                },
            },
        });
    }
}
