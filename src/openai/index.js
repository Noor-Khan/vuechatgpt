import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-ZG6Lfc20MGBvuSRJSAaKS9Vz",
  apiKey: "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",
});
export const openai = new OpenAIApi(configuration);
