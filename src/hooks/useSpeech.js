import { useEffect, useState } from 'react';

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  useEffect(() => {
    if (!window.speechSynthesis) {
      return undefined;
    }

    const updateVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    updateVoices();
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
    };
  }, []);

  const pickVoice = (language) => {
    if (!voices.length) {
      return null;
    }

    const exactMatch = voices.find((voice) => voice.lang?.toLowerCase() === (language === 'hi' ? 'hi-in' : 'en-in'));
    if (exactMatch) {
      return exactMatch;
    }

    const languageMatch = voices.find((voice) => voice.lang?.toLowerCase().startsWith(language === 'hi' ? 'hi' : 'en'));
    return languageMatch || null;
  };

  const speak = (text, language) => {
    if (!window.speechSynthesis || !text) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    utterance.voice = pickVoice(language);
    utterance.rate = language === 'hi' ? 0.78 : 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stop = () => {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  };

  return { speak, stop, speaking };
}
