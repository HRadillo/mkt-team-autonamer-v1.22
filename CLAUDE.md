# CLAUDE.md — Marketing Auto Namer

## What This Project Is
A Marketing Autonaming Tool used to generate standardized naming conventions for static and video ad assets across campaign structures (Ad Set level and Ad level).

This tool enforces marketing naming discipline at scale. It should reduce ambiguity, prevent naming inconsistencies, and act as a system of record for campaign structure.

---

## Core Objective
Generate structured naming outputs for:
- **Ad Set level**
- **Ad level**

Based on predefined business logic, campaign variables, and creative inputs.

---

## Non-Negotiables
- Deterministic output
- No hidden transformations except defined rules
- Real-time naming updates
- Maintain consistency across Ad Set level and Ad level
- Inputs sanitized but not over-modified — preserve user intent

---

## Naming System Structure
Naming follows a fixed hierarchical structure combining:
1. Account
2. Product/Geo
3. Trial Type
4. Test Number
5. Concept
6. Creative variables

Each element must follow strict formatting rules.

---

## Critical Formatting Rules

### Static Ads — Concept # Handling
**Input behavior:**
- User inputs ONLY numeric value (e.g., `1.01`, `21.03`, `111.01`)
- Allow only digits and a single `.`
- Reject letters or special characters
- Do NOT allow user to manually input `stat` — sanitize if pasted

**Output behavior:**
- System MUST automatically prepend: `statS`
- Final format: `statS{number}`
- Examples:
  - `1.01` → `statS1.01`
  - `21.03` → `statS21.03`
  - `111.01` → `statS111.01`

**Constraints:**
- Do NOT auto-pad numbers (no forced `001`)
- Do NOT modify decimals

---

## Concept Themes

### Static Ads (ONLY these values, in alphabetical order)
- BRAND (Branded)
- CEL (Celebrity)
- PERF (Performance)
- TSTMN (Testimonial)

### Video Ads (ONLY these values)
- BRAND
- CEL
- PERF
- TSTMN
- VIRAL

---

## Lexicon System
The tool includes a Lexicon modal with two pages:

**Page 1 — Naming Reference**
- Definitions of codes
- Naming examples

**Page 2 — Concept Themes**
Each theme MUST include: Goal, Description, Use case, Structure, and a "What Is" breakdown.

### BRAND (Branded)
- Goal: Build brand awareness and recognition
- Structure: Brand identity → Value proposition → CTA

### CEL (Celebrity)
- Goal: Leverage authority and social proof via known figures
- Structure: Celebrity intro → Endorsement → Product → CTA

### PERF (Performance)
- Goal: Drive direct response and conversions
- "What Is" breakdown:
  1. Hook
  2. Problem
  3. Solution
  4. Proof
  5. CTA

### TSTMN (Testimonial)
- Goal: Build trust through real user experience
- Structure: User intro → Problem → Experience → Result → CTA

### VIRAL (Video only)
- Goal: Maximize organic reach and shareability
- Structure: Hook → Entertaining/relatable content → Soft CTA

---

## UI/UX Rules

### Dropdowns
- Must render above all elements — no clipping
- Must remain clickable (portal-based rendering)

### Sticky Header (Lexicon)
- Must remain fixed during scroll
- Must NOT show background gaps
- Must have solid background with blur

---

## Edge Cases to Always Handle
- Switching between Video and Static modes
- Previously entered invalid concept values
- Partial inputs
- Empty optional fields

---

## Data Integrity
- Sanitize inputs without over-modifying
- Preserve user intent
- Prevent invalid states
