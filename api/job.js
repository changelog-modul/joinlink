import { latestJob } from "./update";

export default function handler(req, res) {
    if (!latestJob.jobId) {
        return res.status(200).json({ jobId: null });
    }

    // optional: expire setelah 30 detik
    if (Date.now() - latestJob.updatedAt > 30000) {
        return res.status(200).json({ jobId: null });
    }

    res.status(200).json({
        jobId: latestJob.jobId,
        placeId: latestJob.placeId
    });
}
