import { Command } from "./Command";
import { CommandParams } from "./CommandParams";

export class PostCommand implements Command {
  private commandParams: CommandParams;

  setCommandParams(params: CommandParams) {
    this.commandParams = params;
  }
  async execute() {
    console.log("Executing post command", this.commandParams);
  }
}
