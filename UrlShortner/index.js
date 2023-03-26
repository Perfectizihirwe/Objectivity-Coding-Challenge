const urls = [];

const shortenUrl = (url) => {
  const shortUrl = `https://short.obj/${Math.random()
    .toString(36)
    .substring(2, 7)}`;
  urls.push({ originalUrl: url, shortUrl });
  console.log(
    shortUrl,
    "This is your short url, copy it to visit the original url"
  );
  return shortUrl;
};

shortenUrl(
  "https://joinus.objectivity.co.uk/job-offers/net-developer-with-react-rwanda/"
);

const visitUrl = (shortUrl) => {
  const url = urls.find((url) => url.shortUrl === shortUrl);
  if (!url) {
    return "Url not found";
  }
  return url.originalUrl;
};

console.log(
  "This is what you'll get when you enter short url",
  visitUrl(urls[urls.length - 1].shortUrl)
);
