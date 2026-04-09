let latestJob = {
    jobId: null,
    placeId: null,
    updatedAt: 0
};

export default function handler(req, res) {
    if (req.method === "POST") {
        latestJob = {
            jobId: req.body.jobId,
            placeId: req.body.placeId,
            updatedAt: Date.now()
        };

        return res.status(200).json({ status: "updated" });
    }

    res.status(405).end();
}

export { latestJob };
