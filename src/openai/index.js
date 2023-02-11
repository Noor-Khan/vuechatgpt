import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-ZG6Lfc20MGBvuSRJSAaKS9Vz",
  apiKey: "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",
});
export const openai = new OpenAIApi(configuration);
