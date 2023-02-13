import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "ORGANIZATION_ID",
  apiKey: "YOUR_API_KEY",
});
export const openai = new OpenAIApi(configuration);
