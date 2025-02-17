
import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 10, 
  duration: 1, 
});


export const checkRateLimit = async (remoteAddress: string): Promise<void> => {
  try {
    await rateLimiter.consume(remoteAddress, 2); 
  } catch {
    throw new Error("Too many requests");
  }
};




