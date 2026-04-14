export default function handler(req, res) {
  const { placeId, jobId } = req.query;

  if (!placeId || !jobId) {
    return res.status(400).send("Missing placeId or jobId");
  }

  const deepLink = `roblox://placeId=${placeId}&gameInstanceId=${jobId}`;
  const webFallback = `https://www.roblox.com/games/${placeId}`;

  res.setHeader("Content-Type", "text/html");
  res.send(`
    <html>
      <head>
        <title>Joining Server...</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="background:#0f172a;color:white;text-align:center;padding-top:50%;">
        <h2>Joining server...</h2>

        <script>
          // coba buka Roblox langsung
          window.location.href = "${deepLink}";

          // fallback kalau gagal
          setTimeout(function(){
            window.location.href = "${webFallback}";
          }, 2000);
        </script>
      </body>
    </html>
  `);
}
