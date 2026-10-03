import { createServerFn } from "@tanstack/react-start";

// Web3Forms' free plan only allows submissions sent from the visitor's
// browser (server-side posts get a 403), so the form fetches this key
// client-side and posts directly to api.web3forms.com. The access key is
// designed to be public — it can only deliver mail to the owner's inbox.
export const getWeb3FormsAccessKey = createServerFn({ method: "GET" }).handler(
  async () => {
    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    return { configured: Boolean(accessKey), accessKey: accessKey ?? null };
  },
);
