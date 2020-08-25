const LOCALE_MAP = {
  af: 'Afrikaans',
  ar: 'Arabic',
  az: 'Azerbaijani',
  ca: 'Catalan',
  ckb: 'Central Kurdish',
  cs: 'Czech',
  de: 'German',
  es: 'Spanish',
  en: 'English',
  et: 'Estonian',
  fa: 'Farsi',
  fi: 'Finnish',
  gr: 'Greek',
  fr: 'French',
  hr: 'Croatian',
  he: 'Hebrew',
  hu: 'Hungary',
  it: 'Italy',
  id: 'Indonesian',
  ja: 'Japanese',
  ko: 'Korean',
  lv: 'Latvian',
  lt: 'Lithuanian',
  nl: 'Dutch',
  no: 'Norwegian',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  ro: 'Romanian',
  sl: 'Slovenian',
  sk: 'Slovak',
  'sr-Cyrl': 'Serbian (cyrillic)',
  sv: 'Swedish',
  th: 'Thai',
  tr: 'Turkish',
  uk: 'Ukrainian',
  'zh-Hans': 'Chinese (simplified)',
  'zh-Hant': 'Chinese (traditional)',
}

module.exports = Object.keys(LOCALE_MAP).map(key => {
  return {
    name: LOCALE_MAP[key],
    value: key,
  }
}).sort()
