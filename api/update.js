let latestJob = {
    jobId: null,
    placeId: null,
    updatedAt: 0
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        let body = req.body;

        // 🔥 FIX kalau body kosong
        if (!body || typeof body === "string") {
            try {
                body = JSON.parse(body);
            } catch (e) {
                body = {};
            }
        }

        if (!body.jobId) {
            return res.status(400).json({ error: "No jobId" });
        }

        latestJob = {
            jobId: body.jobId,
            placeId: body.placeId,
            updatedAt: Date.now()
        };

        return res.status(200).json({ status: "updated", jobId: body.jobId });
    }

    res.status(405).end();
}

export { latestJob };
