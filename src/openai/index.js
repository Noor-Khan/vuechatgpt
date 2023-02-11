import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-ZG6Lfc20MGBvuSRJSAaKS9Vz",
    apiKey: "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",
});
export const openai = new OpenAIApi(configuration);

