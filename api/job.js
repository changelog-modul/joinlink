let currentJobId = "";

export default function handler(req, res) {
    if (req.method === "POST") {
        currentJobId = req.body.jobId;
        return res.json({ success: true });
    }

    res.json({ jobId: currentJobId });
}
