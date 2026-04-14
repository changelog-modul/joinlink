export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing params");
  }

  const url = `https://www.roblox.com/games/start?placeId=${placeId}&gameInstanceId=${jobId}`;

  return res.redirect(302, url);
}
