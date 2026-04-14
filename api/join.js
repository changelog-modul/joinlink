export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  const deepLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;

  res.writeHead(302, {
    Location: deepLink,
  });

  res.end();
}
