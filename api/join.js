export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing placeId or jobId");
  }

  const deepLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;

  res.writeHead(302, {
    Location: deepLink,
  });

  res.end();
}
