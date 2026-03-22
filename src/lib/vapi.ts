import Vapi from "@vapi-ai/web";

console.log("Initializing Vapi with Key:", process.env.NEXT_PUBLIC_VAPI_API_KEY ? "Key Present (starts with " + process.env.NEXT_PUBLIC_VAPI_API_KEY.slice(0, 4) + "...)" : "Key Missing");
export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY as string);