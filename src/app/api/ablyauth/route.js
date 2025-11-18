import Ably from "ably";
export async function GET(request) {
  const client = new Ably.Realtime(process.env.ABLY_APIKEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: "portfolio-client",
  });
  return Response.json(tokenRequestData);
}
