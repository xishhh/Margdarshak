export function getLocalizedText(language, entry) {
  return language === 'hi' ? entry.hi : entry.en;
}
