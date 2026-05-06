export default function handler(req, res) {
    const { placeId, jobId } = req.query;

    if (!placeId || !jobId) {
        return res.status(400).send("Missing params");
    }

    res.redirect(`roblox://placeId=${placeId}&gameInstanceId=${jobId}`);
}
