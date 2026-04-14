export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing placeId or jobId");
  }

  const joinUrl = `https://www.roblox.com/games/start?placeId=${placeId}&gameInstanceId=${jobId}`;

  // 🔥 langsung redirect ke Roblox
  res.writeHead(302, {
    Location: joinUrl
  });

  res.end();
}
