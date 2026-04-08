import { useCallback, useEffect, useRef, useState } from 'react';

export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const [pendingTimeout, setPendingTimeout] = useState(null);
  const [supported, setSupported] = useState(typeof window !== 'undefined' && 'speechSynthesis' in window);
  const utteranceRef = useRef(null);
  const resumeIntervalRef = useRef(null);

  useEffect(() => {
    if (!window.speechSynthesis) {
      setSupported(false);
      return undefined;
    }

    const updateVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;
    if (window.speechSynthesis.addEventListener) {
      window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    }

    return () => {
      if (pendingTimeout) {
        window.clearTimeout(pendingTimeout);
      }
      if (resumeIntervalRef.current) {
        window.clearInterval(resumeIntervalRef.current);
      }
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
      if (window.speechSynthesis.removeEventListener) {
        window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
      }
    };
  }, [pendingTimeout]);

  const pickVoice = useCallback((language) => {
    if (!voices.length) {
      return null;
    }

    const exactMatch = voices.find((voice) => voice.lang?.toLowerCase() === (language === 'hi' ? 'hi-in' : 'en-in'));
    if (exactMatch) {
      return exactMatch;
    }

    const languageMatch = voices.find((voice) => voice.lang?.toLowerCase().startsWith(language === 'hi' ? 'hi' : 'en'));
    return languageMatch || null;
  }, [voices]);

  const speak = useCallback((text, language, delayMs = 0) => {
    if (!window.speechSynthesis || !text) {
      setSupported(false);
      return;
    }

    if (pendingTimeout) {
      window.clearTimeout(pendingTimeout);
      setPendingTimeout(null);
    }
    if (resumeIntervalRef.current) {
      window.clearInterval(resumeIntervalRef.current);
      resumeIntervalRef.current = null;
    }

    window.speechSynthesis.cancel();

    // Warm the engine before speaking. Some mobile browsers need this.
    try {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.resume();
    } catch {
      setSupported(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-IN';
    const selectedVoice = pickVoice(language);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.rate = language === 'hi' ? 0.78 : 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.onstart = () => {
      setSupported(true);
      setSpeaking(true);
      resumeIntervalRef.current = window.setInterval(() => {
        window.speechSynthesis.resume();
      }, 250);
    };
    utterance.onend = () => {
      setSpeaking(false);
      if (resumeIntervalRef.current) {
        window.clearInterval(resumeIntervalRef.current);
        resumeIntervalRef.current = null;
      }
    };
    utterance.onerror = () => {
      setSpeaking(false);
      if (resumeIntervalRef.current) {
        window.clearInterval(resumeIntervalRef.current);
        resumeIntervalRef.current = null;
      }
    };

    const startSpeaking = () => {
      try {
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utterance);
      } catch {
        setSupported(false);
      }
    };

    if (delayMs > 0) {
      const timeoutId = window.setTimeout(() => {
        startSpeaking();
        setPendingTimeout(null);
      }, delayMs);
      setPendingTimeout(timeoutId);
      return;
    }

    startSpeaking();
  }, [pendingTimeout, pickVoice]);

  const stop = useCallback(() => {
    if (pendingTimeout) {
      window.clearTimeout(pendingTimeout);
      setPendingTimeout(null);
    }
    if (resumeIntervalRef.current) {
      window.clearInterval(resumeIntervalRef.current);
      resumeIntervalRef.current = null;
    }
    window.speechSynthesis?.cancel();
    utteranceRef.current = null;
    setSpeaking(false);
  }, [pendingTimeout]);

  return { speak, stop, speaking, supported, voiceCount: voices.length };
}
