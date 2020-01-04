import { ApiCall } from "./ApiCall";
import { GetCommand } from "./GetCommand";
import { CommandParams } from "./CommandParams";
import { PostCommand } from "./PostCommand";

export class Api {
  private apiCall: ApiCall = new ApiCall();

  private getCommand: GetCommand;
  private postCommand: PostCommand;

  placeGetCommand(params: CommandParams) {
    if (!this.getCommand) {
      this.getCommand = new GetCommand(params);
    }
    this.getCommand.params = params;
    this.apiCall.fireCommand(this.getCommand);
  }

  placePostCommand(params: CommandParams) {
    if (!this.postCommand) {
      this.postCommand = new PostCommand();
    }
    this.postCommand.setCommandParams(params);
    this.apiCall.fireCommand(this.postCommand);
  }
}
