import { z } from "zod";

export const scanSchema = z.object({
  url: z
    .string()
    .trim()
    .url("Please provide a valid URL.")
    .refine(
      (url) => {
        const protocol = new URL(url).protocol;
        return protocol === "http:" || protocol === "https:";
      },
      {
        message: "Only HTTP and HTTPS URLs are supported.",
      }
    ),
});

export type ScanInput = z.infer<typeof scanSchema>;