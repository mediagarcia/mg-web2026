#!/bin/bash
# Batch generate all 21 guide image slots (3 variants each = 63 images)
# Run from project root: bash scripts/generate-guide-images.sh

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

echo "Starting batch generation of 21 guide image slots..."
echo ""

# ==========================================
# LISTING PAGE CARD IMAGES
# ==========================================

generate "guides/zendesk-card" \
  "Fine art photograph of two elegant vessels connected by a stream of flowing liquid, representing data migrating seamlessly between platforms. Abstract, clean composition. Soft directional light, teal-cyan color tones. Gallery-quality, high contrast. No text, no logos, no people, no technology." \
  "16:9"

generate "guides/opshub-card" \
  "Fine art photograph of interconnected precision gears and mechanical components forming a harmonious system, representing unified revenue operations. Abstract, elegant composition. Soft directional light, purple-violet color tones. Gallery-quality, high contrast. No text, no logos, no people." \
  "4:3"

generate "guides/sfdc-card" \
  "Fine art photograph of a grand stone bridge spanning between two cliff faces, representing safe passage between CRM platforms. Atmospheric fog, dramatic golden-warm light. Orange-amber accent tones. Gallery-quality, high contrast. No text, no logos, no people, no technology." \
  "16:9"

# ==========================================
# ZENDESK TO HUBSPOT GUIDE SECTION IMAGES
# ==========================================

generate "guides/zendesk/why-migrate" \
  "Fine art photograph of a single ornate key fitting perfectly into an elaborate lock mechanism. Soft directional light illuminating the moment of connection. Metaphor for unified access and seamless integration. Muted teal-gray color palette. Gallery-quality, high contrast, editorial aesthetic. No people, no technology, no text."

generate "guides/zendesk/self-service" \
  "Fine art photograph of a beautifully organized library with warm natural light streaming through tall windows. Clear pathways between shelves, open books inviting exploration. Metaphor for customer self-service and accessible knowledge. Warm amber tones with hints of teal. Gallery-quality, editorial aesthetic. No people, no text."

generate "guides/zendesk/feedback" \
  "Fine art photograph of concentric ripples expanding outward from where a smooth stone has been dropped into perfectly still water. Soft diffused light, contemplative mood. Metaphor for listening, feedback loops, and the impact of voice of customer. Soft teal-blue palette. Gallery-quality, high contrast. No people, no text."

generate "guides/zendesk/reporting" \
  "Fine art photograph of antique nautical navigation instruments arranged on a detailed maritime chart. Brass compass, parallel ruler, dividers catching warm side light. Metaphor for finding clear direction through data and analytics. Rich warm amber tones. Gallery-quality, editorial aesthetic. No people, no text, no technology."

generate "guides/zendesk/data-migration" \
  "Fine art photograph of carefully wrapped archival materials being precisely arranged in labeled storage boxes. Clean workspace, overhead soft light. Metaphor for organized, methodical, careful data transfer. Neutral warm palette with teal accents. Gallery-quality, editorial aesthetic. No people, no text."

generate "guides/zendesk/go-live" \
  "Fine art photograph of a sailing vessel leaving harbor at golden dawn, sails catching the first light. Calm water, dramatic sky. Metaphor for launch, new beginnings, and confident departure. Golden amber tones with atmospheric haze. Gallery-quality, high contrast, editorial aesthetic. No people visible, no text."

# ==========================================
# OPERATIONS HUB PLAYBOOK SECTION IMAGES
# ==========================================

generate "guides/opshub/foundation" \
  "Fine art photograph of a master control panel with perfectly organized rows of switches, dials, and indicator lights. Clean industrial design, precise alignment. Soft overhead light. Metaphor for centralized operational command and control. Cool teal-gray palette. Gallery-quality, high contrast, editorial aesthetic. No people, no text."

generate "guides/opshub/data-architecture" \
  "Fine art photograph of a large architectural blueprint spread across a drafting table, with precision instruments nearby. Detailed structural lines and measurements visible. Metaphor for intentional data schema design and planning. Blue-gray tones with warm highlights. Gallery-quality, editorial aesthetic. No people, no text."

generate "guides/opshub/integrations" \
  "Fine art photograph taken from above showing multiple clear streams of water naturally merging into a single flowing river through a rocky landscape. Metaphor for direct data connections without middleware. Aerial perspective, natural beauty. Green-teal color palette. Gallery-quality, high contrast. No people, no text, no technology."

generate "guides/opshub/automation" \
  "Fine art photograph of an exposed mechanical clockwork with interlocking brass gears turning in perfect harmony. Macro perspective showing intricate detail. Warm golden side light. Metaphor for sophisticated automation working seamlessly together. Golden-warm tones. Gallery-quality, high contrast, editorial aesthetic. No people, no text."

generate "guides/opshub/routing" \
  "Fine art photograph of a railway switching yard with steel tracks diverging in organized geometric patterns, captured from an elevated perspective. Morning mist, industrial beauty. Metaphor for intelligent data routing and assignment decisions. Muted steel-gray and teal tones. Gallery-quality, high contrast. No people, no text."

generate "guides/opshub/custom-objects" \
  "Fine art photograph of modular wooden building blocks and architectural model pieces arranged in a creative, intentional structure on a clean surface. Warm natural light from the side. Metaphor for extensible, customizable systems. Warm neutral tones with hints of amber. Gallery-quality, editorial aesthetic. No people, no text."

# ==========================================
# SALESFORCE TO HUBSPOT GUIDE SECTION IMAGES
# ==========================================

generate "guides/sfdc/why-hubspot" \
  "Fine art photograph of a cluttered antique desk being cleared to reveal a beautiful clean wooden surface underneath. Items being carefully organized and simplified. Warm directional light capturing the transformation moment. Metaphor for simplification and clarity. Warm amber-orange tones. Gallery-quality, editorial aesthetic. No people, no text."

generate "guides/sfdc/pre-migration" \
  "Fine art photograph of a mountaineer's hands holding open a detailed topographic map against a dramatic mountain landscape backdrop. Golden-hour light illuminating the map. Metaphor for careful preparation before a major undertaking. Warm atmospheric tones with orange accents. Gallery-quality, high contrast. No faces visible, no text."

generate "guides/sfdc/data-cleanup" \
  "Fine art photograph of hands carefully sorting through precious gemstones on a velvet surface, separating quality stones from rough ones. Dramatic focused light on the gems. Metaphor for data cleanup and quality filtering. Warm amber tones with sparkling highlights. Gallery-quality, editorial aesthetic. No faces visible, no text."

generate "guides/sfdc/migration" \
  "Fine art photograph of a watchmaker's precision tools arranged on a clean workbench next to an open timepiece. Magnifying loupe, tweezers, and tiny components in perfect order. Warm focused light, shallow depth of field. Metaphor for the technical precision of data migration. Warm golden tones. Gallery-quality, editorial aesthetic. No faces, no text."

generate "guides/sfdc/qa-testing" \
  "Fine art photograph of a magnifying glass held over a surface of small objects being carefully inspected. Clean clinical light from above, sharp focus through the lens. Metaphor for thorough quality validation and attention to detail. Cool neutral tones with teal accents. Gallery-quality, high contrast, editorial aesthetic. No faces, no text."

generate "guides/sfdc/post-migration" \
  "Fine art photograph of young green sprouts breaking through rich dark soil in a newly planted garden bed. Morning golden light catching dewdrops on the leaves. Metaphor for nurturing growth after launch. Fresh green and warm golden tones. Gallery-quality, high contrast, editorial aesthetic. No people, no text."

echo ""
echo "========================================"
echo "All 21 guide image slots generated!"
echo "Review and select images at: http://localhost:3500/__image-staging"
echo "========================================"
