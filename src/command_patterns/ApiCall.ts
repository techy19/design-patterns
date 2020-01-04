import { Command } from "./Command";

export class ApiCall {
  fireCommand(command: Command) {
      command.execute();
  }
}
