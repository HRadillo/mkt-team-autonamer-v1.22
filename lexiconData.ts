export type LexiconItem = { code: string; title: string; desc?: string };

export const INTRO_THEME: LexiconItem[] = [
  { code: 'AI', title: 'AI-Generated content', desc: 'Hook features AI-generated visuals, voiceovers, or avatars.' },
  { code: 'UGC', title: 'User Generated Content', desc: 'Raw, handheld, selfie-style opening, often testimonial or influencer POV.' },
  { code: 'PH', title: 'Product Hero', desc: 'Product shown as the main hero in the first second. Focus on pack, texture, or macro detail.' },
  { code: 'AUTH', title: 'Authority', desc: 'Hook shows expert or authority figure to build credibility: doctor, derm, scientist, or MUA.' },
  { code: 'APPLY', title: 'Apply', desc: 'Moment when the model applies the product to their face to show texture, coverage, and blendability.' },
  { code: 'STUD', title: 'Studio', desc: 'High-end, brand-level production. Polished lighting, studio setting, scripted actors, or models.' },
  { code: 'TXT', title: 'Text', desc: 'Intro or overlay featuring written elements like text supers.' },
  { code: 'SPLT', title: 'Split-screen', desc: 'Frame divided into two parts, showing different visuals or comparisons side by side.' },
  { code: 'BEF', title: 'Before', desc: 'Model shown prior to using the product, highlighting the skin concern or problem area.' },
  { code: 'BA', title: 'Before/After', desc: 'Side-by-side of how a product or service impacts someone or something.' },
  { code: 'AFT', title: 'After', desc: 'Aspirational final look of the model after using treatments.' },
  { code: 'BROLL', title: 'B-roll', desc: 'Supporting footage that adds context or visual interest (textures, routines, lifestyle shots).' },
  { code: 'LAB', title: 'Lab footage', desc: 'Lab setting showing scientists, formulations, or product testing to convey credibility.' },
  { code: 'TS', title: 'Thumbstopper', desc: 'Visually striking moment designed to instantly capture attention while scrolling.' },
  { code: 'PRE', title: 'Press', desc: 'Articles, headlines, research, etc.' },
  { code: 'SMD', title: 'Social Media', desc: 'Twitter / Reddit / ChatGPT-style layouts.' },
  { code: 'TXTR', title: 'Texture', desc: 'Swatches, formula, product textures.' },
  { code: 'GS', title: 'Greenscreen' },
  { code: 'UI', title: 'UI', desc: 'Website, quiz, or app interface.' },
  { code: 'CHT', title: 'Chat', desc: 'Notes, text, chat-style visuals.' },
  { code: 'MEME', title: 'Meme' },
  { code: 'UVT', title: 'Us vs Them', desc: 'Comparison visuals.' },
  { code: 'INT', title: 'Interview', desc: 'Interview-style intro.' },
];

export const HOOK_THEME: LexiconItem[] = [
  { code: 'POS', title: 'Positive', desc: 'Uplifting, aspirational message focused on benefits or outcomes.' },
  { code: 'NEG', title: 'Negative', desc: 'Highlights a problem, pain point, or frustration.' },  { code: 'COMP', title: 'Comparison', desc: 'Contrasts product against competitors or common mistakes.' },
  { code: 'RSN', title: 'Reasons Why', desc: 'Example: “3 reasons you need this foundation.”' },
  { code: 'FUN', title: 'Funny / Humor', desc: 'Jokes, playful language, witty phrasing.' },
  { code: 'QST', title: 'Question', desc: 'Poses a question to spark curiosity.' },
  { code: 'EMO', title: 'Emotional', desc: 'Evokes empathy or personal connection.' },
  { code: 'PB', title: 'Product Benefits' },
  { code: 'INGR', title: 'Ingredients' },
  { code: 'RVW', title: 'Review' },
  { code: 'OFFR', title: 'Offer / Promo' },
  { code: 'EDUC', title: 'Educational' },
  { code: 'SOL', title: 'Problem / Solution', desc: 'Clearly shows the issue and the fix.' },
  { code: 'TRANSF', title: 'Transformation', desc: 'Highlights visible change after using the product.' },
  { code: 'SZN', title: 'Seasonal', desc: 'Example: “#1 makeup tip for 2026?”' },
];

export const AUDIO: LexiconItem[] = [
  { code: 'SPE', title: 'Speaking', desc: 'Creator speaking directly on camera.' },
  { code: 'VO', title: 'Voiceover', desc: 'Recorded narration over visuals.' },
  { code: 'TRND', title: 'Trending audio', desc: 'Popular TikTok audio synced to visuals.' },
  { code: 'ASMR', title: 'ASMR', desc: 'Sound-focused, soothing or satisfying audio.' },
  { code: 'FX', title: 'Sound effect', desc: 'Swishes, sparkles, UI sounds, etc.' },
];

export const VIDEO_CONCEPT_THEME: LexiconItem[] = [
  { code: 'BRAND', title: 'Brand', desc: 'Brand-forward concept focused on identity, positioning, or polished brand storytelling.' },
  { code: 'VIRAL', title: 'Viral', desc: 'Concept built to feel highly shareable, trend-aware, or thumb-stopping.' },
  { code: 'PERF', title: 'Performance', desc: 'Conversion-oriented concept designed to drive measurable marketing results.' },
  { code: 'TSTMN', title: 'Testimonial', desc: 'Concept led by a personal endorsement, review, or experience-based proof.' },
  { code: 'CEL', title: 'Celebrity', desc: 'Concept anchored by a recognizable celebrity or public figure to borrow trust, attention, and cultural relevance.' },
];

export const STATIC_CONCEPT_THEME: LexiconItem[] = [
  { code: 'BRAND', title: 'Branded', desc: 'Beautiful, art-directed, feed-safe. Minimal copy, lots of breathing room. Should feel like a magazine page.' },
  { code: 'CEL', title: 'Celebrity', desc: 'Celebrity-led static: talent-first creative with clear product connection and compliant usage.' },
  { code: 'PERF', title: 'Performance', desc: 'Conversion-oriented static designed to drive measurable results. Clear problem → solution → proof → CTA.' },
  { code: 'TSTMN', title: 'Testimonial', desc: 'Review-led static: quote, rating, UGC screenshot, or results-based proof with a simple CTA.' },
];

export const CONCEPT_CLUSTER: LexiconItem[] = [
  { code: 'ADLT', title: 'Adult' },
  { code: 'COMP', title: 'Comparison' },
  { code: 'CONG', title: 'Congestion' },
  { code: 'CONV', title: 'Convenience' },
  { code: 'CVRG', title: 'Coverage' },
  { code: 'CYST', title: 'Cystic' },
  { code: 'DGST', title: 'Digestion' },
  { code: 'EFCY', title: 'Efficacy' },
  { code: 'EMTN', title: 'Emotion' },
  { code: 'FRML', title: 'Formula' },
  { code: 'HAIR', title: 'Hair' },
  { code: 'HRMN', title: 'Hormonal' },
  { code: 'INFL', title: 'Inflammation' },
  { code: 'MATR', title: 'Mature' },
  { code: 'MLSM', title: 'Melasma' },
  { code: 'PRNT', title: 'Parent' },
  { code: 'PERS', title: 'Personalization' },
  { code: 'PGMT', title: 'Pigmentation' },
  { code: 'PIH', title: 'PIH' },
  { code: 'RTN', title: 'Routine' },
  { code: 'SAG', title: 'Saggy' },
  { code: 'SHD', title: 'Shade' },
  { code: 'SKNC', title: 'Skincare' },
  { code: 'SUND', title: 'Sun-damage' },
  { code: 'TRANSF', title: 'Skin transformation' },
  { code: 'TXTR', title: 'Texture' },
  { code: 'UNCMPL', title: 'Uncomplicated' },
  { code: 'USG', title: 'Usage' },
  { code: 'WRNKL', title: 'Wrinkles' },
];
