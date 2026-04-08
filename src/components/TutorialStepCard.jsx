import { useEffect, useRef } from 'react';

export default function TutorialStepCard({
  mediaSrc,
  mediaType = 'image',
  text,
  stepLabel,
  totalLabel,
  headerAction = null,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaType !== 'video' || !videoRef.current) {
      return;
    }

    videoRef.current.muted = true;
    const playPromise = videoRef.current.play();
    if (playPromise?.catch) {
      playPromise.catch(() => {});
    }
  }, [mediaSrc, mediaType]);

  return (
    <section className="space-y-3">
      <div className="rounded-xl bg-surface-container-low p-4 md:p-6">
        <div className="flex items-start gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-primary">{totalLabel}</p>
            <p className="text-[1.18rem] font-medium leading-snug text-on-surface md:text-[1.65rem]">{text}</p>
          </div>
          {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
        </div>
      </div>

      <div className="surface-card overflow-hidden rounded-xl p-3 md:p-4">
        <div className="overflow-hidden rounded-[1.75rem] bg-surface-container-high">
          {mediaType === 'video' ? (
            <video
              ref={videoRef}
              key={mediaSrc}
              src={mediaSrc}
              className="aspect-[9/12] w-full bg-black object-contain md:aspect-[9/14]"
              autoPlay
              loop
              muted
              defaultMuted
              playsInline
              preload="metadata"
              disablePictureInPicture
            />
          ) : (
            <img
              src={mediaSrc}
              alt={stepLabel}
              className="aspect-[9/12] w-full bg-surface-container-high object-contain md:aspect-[9/14]"
            />
          )}
        </div>
      </div>
    </section>
  );
}
