const PORTAL_ID = "556151";

interface HubSpotField {
  objectTypeId: string;
  name: string;
  value: string;
}

interface LegitimateInterestConsent {
  value: boolean;
  subscriptionTypeId: number;
  legalBasis: string;
  text: string;
}

interface SubmitOptions {
  formId: string;
  fields: HubSpotField[];
  legitimateInterest?: LegitimateInterestConsent;
  pageName?: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

function getHubSpotCookie(): string {
  const match = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : "";
}

export async function submitHubSpotForm({ formId, fields, legitimateInterest, pageName }: SubmitOptions): Promise<SubmitResult> {
  const hutk = getHubSpotCookie();

  const body: Record<string, unknown> = {
    fields,
    context: {
      hutk: hutk || undefined,
      pageUri: window.location.href,
      pageName: pageName || document.title,
    },
  };

  if (legitimateInterest) {
    body.legalConsentOptions = {
      legitimateInterest: {
        value: legitimateInterest.value,
        subscriptionTypeId: legitimateInterest.subscriptionTypeId,
        legalBasis: legitimateInterest.legalBasis,
        text: legitimateInterest.text,
      },
    };
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      return {
        success: false,
        error: data?.message || `Submission failed (${res.status})`,
      };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
