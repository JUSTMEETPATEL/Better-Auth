import { authClient } from "@/lib/auth-client";

export async function handler() {
    await authClient.passkey.addPasskey()
}