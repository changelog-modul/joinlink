let latest = {
    jobId: "",
    updatedAt: 0
};

export default function handler(req, res) {
    // 🔥 POST = update JobId
    if (req.method === "POST") {
        const { jobId } = req.body;

        if (!jobId) {
            return res.status(400).json({ error: "no jobId" });
        }

        latest.jobId = jobId;
        latest.updatedAt = Date.now();

        return res.status(200).json({ status: "updated" });
    }

    // 🔥 GET = ambil JobId terbaru
    res.status(200).json(latest);
}
