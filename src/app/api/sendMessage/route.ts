import { RateLimiterMemory } from "rate-limiter-flexible";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const rateLimitError = "Rate limit";

const rateLimiter = new RateLimiterMemory({
  points: 1,
  duration: 300,
});

const rateLimitHandler = async (req: NextRequest) => {
  try {
    const ip = req.headers.get("X-Forwarded-For");
    if (!ip) throw new Error("Error get ip");
    await rateLimiter.consume(ip);
  } catch (error) {
    throw new Error(rateLimitError);
  }
};

const responseHandler = (status: number, message: string) => {
  return NextResponse.json(
    {
      message,
    },
    {
      status,
    }
  );
};

export async function POST(req: NextRequest) {
  try {
    const { name, contact, message } = await req.json();
    if (!name || !contact || !message)
      return responseHandler(400, "Invalid request");

    await rateLimitHandler(req);

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    const text = `*Portfolio Web App:*\n*Name* - _${name}_\n*Contact* - _${contact}_\n*Message* - _${message}_`;

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }
    );
    return responseHandler(200, "Success");
  } catch (error) {
    if (error instanceof Error && error.message === rateLimitError) {
      return responseHandler(429, "Too many requests");
    }
    return responseHandler(500, "Server Error");
  }
}
