import { Api } from "./command_patterns/api";

let api: Api = new Api();

api.placeGetCommand({ baseUrl: "something", options: {}, method: "GET" });
api.placePostCommand({ baseUrl: "something", options: {}, method: "GET" });
