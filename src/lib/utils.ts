import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender?: string) {
  const encodedName = encodeURIComponent(name || "Doctor");
  // Using DiceBear for modern avatars, or you can switch to UI Avatars: https://ui-avatars.com/api/?name=${encodedName}
  const style = gender === "FEMALE" ? "adventurer" : "adventurer";
  return `https://api.dicebear.com/9.x/${style}/svg?seed=${encodedName}`;
}
