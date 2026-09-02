/**
 * Lead delivery for the RevUp Rent forms.
 *
 * Submissions are e-mailed through FormSubmit's AJAX endpoint — no backend
 * required. The primary recipient must confirm the address once (a one-time
 * activation e-mail arrives after the first submission).
 */
const PRIMARY_RECIPIENT = "dobranowski@icloud.com";
const CC_RECIPIENT = "kontakt@revup-rent.pl";

const ENDPOINT = `https://formsubmit.co/ajax/${PRIMARY_RECIPIENT}`;

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
      _cc: CC_RECIPIENT,
      _template: "table",
      _captcha: "false",
      ...data,
    }),
  });

  if (!response.ok) {
    throw new Error(`Lead submission failed with status ${response.status}`);
  }
}
