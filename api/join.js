export default function handler(req, res) {
  const Params = req.query;

  const placeId = Params.placeId;
  const gameInstanceId = Params.gameInstanceId;

  // samain behavior: tetap redirect walaupun null
  const redirectUrl = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;

  res.writeHead(302, {
    Location: redirectUrl,
  });

  res.end();
}
