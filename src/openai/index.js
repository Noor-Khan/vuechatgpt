import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-ZG6Lfc20MGBvuSRJSAaKS9Vz",
  apiKey: "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",
});
export const openai = new OpenAIApi(configuration);
