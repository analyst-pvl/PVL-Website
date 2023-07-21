import axios from "axios";
import cheerio from "cheerio";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const mediumUrl = "https://medium.com/your-medium-article-url"; // Replace this with the desired Medium article URL

    const response = await axios.get(mediumUrl);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract the data you want from the Medium page using Cheerio selectors
    const title = $("h1").text();
    const author = $(".postMetaLockup .ds-link").text();
    const publicationDate = $(".postMetaLockup time").attr("datetime");
    const content = $(".postArticle-content").html();

    // Return the scraped data as JSON
    return NextResponse.json({
      title,
      author,
      publicationDate,
      content,
    });
  } catch (error) {
    console.error("Error scraping Medium page:", error);
    res.status(500).json({ error: "Failed to scrape the Medium page" });
  }
}
