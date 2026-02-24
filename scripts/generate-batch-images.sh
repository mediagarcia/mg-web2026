#!/bin/bash
# Batch generate all 27 new image slots (3 variants each = 81 images)
# Run from project root: bash scripts/generate-batch-images.sh

set -e

generate() {
  local slot="$1"
  local prompt="$2"
  local aspect="${3:-16:9}"
  echo ""
  echo "========================================"
  echo "Generating: $slot"
  echo "========================================"
  npx tsx scripts/generate-images.ts --slot "$slot" --prompt "$prompt" --count 3 --aspect "$aspect"
  # Brief pause to avoid rate limits
  sleep 2
}

echo "Starting batch generation of 27 image slots..."
echo ""

# ==========================================
# SERVICE PAIN POINT IMAGES (Conceptual/Metaphorical)
# ==========================================

generate "services/crm-onboarding-pain" \
  "Fine art photograph of a compass lying on a blank, unmarked map. The compass needle spins uncertainly. Soft directional light, vast empty space around it. Metaphor for starting a journey without guidance or direction. Minimal, contemplative. Gallery-quality, high contrast, muted tones. No technology, no people."

generate "services/crm-migration-pain" \
  "Fine art photograph of an old weathered bridge with missing planks, spanning between two cliff edges. Fog below obscuring the gap. Metaphor for the risky, uncertain gap between old and new systems. Dramatic atmospheric light, moody and tense. Gallery-quality, high contrast, muted earth tones. No technology, no people."

generate "services/marketing-automation-pain" \
  "Fine art photograph of hundreds of handwritten letters scattered across a desk, each one slightly different. An exhausted hand rests among them. Metaphor for the overwhelming burden of manual, repetitive work. Warm overhead light, shallow depth of field. Gallery-quality, high contrast, muted warm tones. No technology."

generate "services/sales-enablement-pain" \
  "Fine art photograph of a blindfolded chess player reaching uncertainly toward the board. Pieces arranged mid-game. Dramatic side lighting creating strong shadows. Metaphor for sales teams making moves without the information they need. Elegant, tense, contemplative. Gallery-quality, high contrast, muted tones."

generate "services/reporting-pain" \
  "Fine art photograph of a dense forest where all the trees look identical, creating a disorienting maze. Flat overcast light, no clear path visible. Metaphor for being lost in data without meaningful insight or direction. Atmospheric, claustrophobic beauty. Gallery-quality, high contrast, muted green-gray tones. No people, no technology."

generate "services/ai-automation-pain" \
  "Fine art photograph of an expensive, beautiful toolbox sitting untouched and dusty on a pristine workbench. Tools visible but never used. Golden dust particles in a shaft of light. Metaphor for paying for powerful capabilities that go unused. Still life, contemplative. Gallery-quality, high contrast, warm muted tones. No technology, no people."

generate "services/integrations-pain" \
  "Fine art photograph of several isolated islands in calm water, each with a single tree. No bridges between them. Aerial perspective, morning mist. Metaphor for disconnected systems operating as islands. Serene but lonely. Gallery-quality, high contrast, muted blue-gray tones. No technology, no people."

generate "services/development-pain" \
  "Fine art photograph of a beautiful storefront with an elegant door, but the handle is placed too high to reach. Metaphor for a website that looks good but doesn't let visitors convert. Soft natural light, architectural photography. Gallery-quality, high contrast, muted neutral tones. No technology."

generate "services/marketing-pain" \
  "Fine art photograph of seeds scattered across rich soil, some sprouting and some not, with no way to tell which is which. Overhead golden hour light. Metaphor for investing in marketing but unable to see which efforts bear fruit. Beautiful, uncertain, natural. Gallery-quality, high contrast, rich earth tones. No technology."

# ==========================================
# SERVICE CASE STUDY IMAGES (People/Scenario)
# ==========================================

generate "services/crm-onboarding-case" \
  "Professional editorial photograph of a small team in a bright modern office, gathered around a screen showing a clean dashboard. Expressions of focus and confidence. Natural window light, warm tones. Over-shoulder perspective or faces at angle for natural anonymity. Premium corporate photography, shallow depth of field." \
  "4:3"

generate "services/crm-migration-case" \
  "Professional editorial photograph of a team celebrating a milestone in a modern workspace. High-fives or fist bumps, genuine energy. Large monitor in background showing completed progress. Natural light, candid moment. Faces at angle or motion blur for anonymity. Premium corporate photography, warm tones." \
  "4:3"

generate "services/marketing-automation-case" \
  "Professional editorial photograph of a marketing professional reviewing campaign analytics on a laptop in a bright, plant-filled office. Coffee nearby, relaxed and confident posture. Person viewed from behind or profile. Natural light streaming in. Premium lifestyle-corporate photography, warm tones, shallow depth of field." \
  "4:3"

generate "services/sales-enablement-case" \
  "Professional editorial photograph of a sales professional confidently presenting to a client across a modern conference table. Laptop and documents visible. Warm natural light. Person viewed from side or over-shoulder. Premium corporate photography, strong composition, shallow depth of field, warm tones." \
  "4:3"

generate "services/reporting-case" \
  "Professional editorial photograph of a team of three gathered around a large wall-mounted display showing clear, beautiful data visualizations. Pointing and discussing insights together. Modern office, natural light. Faces at angle or turned away. Premium corporate photography, warm tones, collaborative energy." \
  "4:3"

generate "services/ai-automation-case" \
  "Professional editorial photograph of a professional reviewing AI-powered insights on a tablet, with a modern workspace in the background. Expressions of discovery and confidence. Person in profile view. Natural light, premium tech-corporate aesthetic. Shallow depth of field, warm tones." \
  "4:3"

generate "services/integrations-case" \
  "Professional editorial photograph of an IT professional at a standing desk with multiple monitors showing connected system dashboards. Calm, organized environment. Person viewed from behind. Natural light, premium tech workspace aesthetic. Shallow depth of field, cool-warm balanced tones." \
  "4:3"

generate "services/development-case" \
  "Professional editorial photograph of a marketing team member easily updating content on a laptop, looking satisfied and empowered. Modern bright office with whiteboard nearby. Person in profile or three-quarter view. Natural window light. Premium lifestyle-corporate photography, warm tones." \
  "4:3"

generate "services/marketing-case" \
  "Professional editorial photograph of a marketing leader presenting quarterly results to executives in a modern boardroom. Large screen showing growth charts. Confident posture, engaged audience. Person viewed from side. Natural light, premium corporate photography, warm tones, shallow depth of field." \
  "4:3"

# ==========================================
# INDUSTRY HERO IMAGES (People/Scenario)
# ==========================================

generate "industries/healthcare-hero" \
  "Professional editorial photograph of a healthcare administrator at a modern clinic workstation, reviewing patient engagement data on a clean display. White coat, modern clinic environment with natural light. Person in profile view. Premium medical-corporate photography, warm tones, shallow depth of field. Trustworthy and human."

generate "industries/it-hero" \
  "Professional editorial photograph of IT professionals collaborating around a standing table in a modern tech office. Laptops and large screen visible. Dynamic, innovative energy. People viewed from side or over-shoulder. Premium tech-corporate photography, cool-warm balanced lighting, shallow depth of field."

generate "industries/saas-hero" \
  "Professional editorial photograph of a SaaS founder in a modern open office, gesturing toward a whiteboard showing growth metrics and product roadmap. Energetic, startup atmosphere with natural light. Person in profile view. Premium startup photography, warm tones, shallow depth of field."

# ==========================================
# INDUSTRY CHALLENGES IMAGES (Conceptual/Metaphorical)
# ==========================================

generate "industries/healthcare-challenges" \
  "Fine art photograph of tangled medical tubing or thread arranged artistically on a clean white surface. Complex knots suggesting bureaucratic complexity and interconnected challenges. Soft overhead light, clinical precision meets organic chaos. Metaphor for healthcare complexity. Gallery-quality, high contrast, muted clinical tones. No people." \
  "4:3"

generate "industries/it-challenges" \
  "Fine art photograph of a large jigsaw puzzle nearly complete, but with several missing pieces scattered nearby. Each piece has a different texture or pattern. Metaphor for IT ecosystem fragmentation and the challenge of making everything fit. Clean surface, soft directional light. Gallery-quality, high contrast, muted tones. No people." \
  "4:3"

generate "industries/saas-challenges" \
  "Fine art photograph of an hourglass with sand flowing, but with a crack in the glass causing sand to leak out the side. Metaphor for customer churn and time-to-value pressure. Dramatic side lighting, close-up detail. Gallery-quality, high contrast, warm amber-muted tones. No people, no technology." \
  "4:3"

# ==========================================
# INDUSTRY SOLUTIONS IMAGES (People/Scenario)
# ==========================================

generate "industries/healthcare-solutions" \
  "Professional editorial photograph of a healthcare team reviewing unified patient data on a modern display in a bright clinic conference room. Collaborative, organized, confident. People viewed from behind or profile. Natural light, premium medical-corporate photography, warm tones, shallow depth of field." \
  "4:3"

generate "industries/it-solutions" \
  "Professional editorial photograph of an IT team in a modern workspace, with multiple monitors showing connected dashboards and clean data flows. Collaborative energy, organized workspace. People viewed from side. Natural light balanced with screen glow. Premium tech-corporate photography, cool-warm tones." \
  "4:3"

generate "industries/saas-solutions" \
  "Professional editorial photograph of a SaaS customer success team celebrating strong retention metrics on a large display. High-energy, positive moment in a modern startup office. People with motion blur or at angle for anonymity. Natural light, premium startup photography, warm vibrant tones." \
  "4:3"

echo ""
echo "========================================"
echo "Batch generation complete!"
echo "Visit http://localhost:3500/image-staging to review and select images."
echo "========================================"
