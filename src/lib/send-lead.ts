/**
 * Lead delivery for the RevUp Rent forms.
 *
 * Submissions are sent through Formspree — no backend required.
 * Notifications are delivered to the addresses configured on the form.
 */
const ENDPOINT = "https://formspree.io/f/xbgjywng";

export type LeadPayload = Record<string, string>;

export async function sendLead(subject: string, data: LeadPayload): Promise<void> {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: subject,
      ...data,
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }
}
