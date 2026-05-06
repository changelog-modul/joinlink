export default function handler(req, res) {
    const { placeId, jobId } = req.query;

    if (!placeId || !jobId) {
        return res.status(400).json({
            success: false,
            error: "Missing placeId or jobId"
        });
    }

    const deepLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;
    const webLink = `https://www.roblox.com/games/${placeId}`;

    // 🔥 RETURN JSON (buat logger / debug)
    if (req.query.json === "true") {
        return res.status(200).json({
            success: true,
            placeId,
            jobId,
            join: deepLink,
            web: webLink
        });
    }

    // 🔥 DEFAULT: REDIRECT KE ROBLOX
    res.writeHead(302, {
        Location: deepLink
    });
    res.end();
}
