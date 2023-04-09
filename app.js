import { createServer } from "http";

const server = createServer((req, res) => {
  const url = req.url;

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("  <h2>Index sayfasına hoşgeldiniz</h2>");
  } else if (req.url === "/hakkimda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>");
  } else if (req.url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>İletişim sayfasına hoşgeldiniz</h2>");
  }

  console.log("Server created");
  res.write("Merhaba" + url);
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Listening on ${port}`);
});
