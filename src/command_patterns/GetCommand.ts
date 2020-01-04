import { Command } from "./Command";
import { CommandParams } from "./CommandParams";

export class GetCommand implements Command {
  params: CommandParams;
  constructor(params: CommandParams) {
    this.params = params;
  }

  async execute() {
    return await Promise.resolve("ok");
  }
}
