import { OpenTelemetry } from "@ai-sdk/otel";
import { registerOTel } from "@vercel/otel";
import { registerTelemetry } from "ai";
import { APP_SLUG } from "@/lib/brand";

export function register() {
  registerOTel({ serviceName: APP_SLUG });
  registerTelemetry(new OpenTelemetry());
}
