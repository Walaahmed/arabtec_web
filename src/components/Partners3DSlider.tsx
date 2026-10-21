import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@/lib/router";
import { useI18n } from "@/lib/i18n";

// ======================================================
// Partner Logos
// ======================================================

const partnerLogos = Object.values(
  import.meta.glob("@/assets/partners/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
) as string[];

// ======================================================
// Partners 3D / Infinite Slider
// ======================================================

export default function Partners3DSlider() {
  const { lang } = useI18n();
  const isAr = lang === "ar";

  const trackRef = useRef<HTMLDivElement>(null);

  const animationRef = useRef<number | null>(null);

  const positionRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const dragStartPosition = useRef(0);

  // ====================================================
  // Repeat logos multiple times
  // This prevents any empty space during the loop.
  // ====================================================

  const repeatedLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  // ====================================================
  // Infinite automatic animation
  // ====================================================

  useEffect(() => {
    const track = trackRef.current;

    if (!track || partnerLogos.length === 0) {
      return;
    }

    const speed = 45;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused && !isDragging) {
        const movement = (speed * delta) / 1000;

        // Arabic = right direction
        // English = left direction
        if (isAr) {
          positionRef.current += movement;
        } else {
          positionRef.current -= movement;
        }

        // ------------------------------------------------
        // Width of ONE complete logo set
        // ------------------------------------------------

        const firstSetWidth =
          track.scrollWidth / 4;

        // ------------------------------------------------
        // Seamless infinite loop
        // ------------------------------------------------

        if (isAr) {
          if (
            positionRef.current >= firstSetWidth
          ) {
            positionRef.current -= firstSetWidth;
          }
        } else {
          if (
            positionRef.current <= -firstSetWidth
          ) {
            positionRef.current += firstSetWidth;
          }
        }

        track.style.transform =
          `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      lastTimeRef.current = null;
    };
  }, [isAr, isPaused, isDragging]);

  // ====================================================
  // Arrow navigation
  // ====================================================

  const moveSlider = (
    direction: "left" | "right"
  ) => {
    const amount = 280;

    if (isAr) {
      if (direction === "left") {
        positionRef.current += amount;
      } else {
        positionRef.current -= amount;
      }
    } else {
      if (direction === "left") {
        positionRef.current -= amount;
      } else {
        positionRef.current += amount;
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transform =
        `translate3d(${positionRef.current}px, 0, 0)`;
    }

    lastTimeRef.current = null;
  };

  // ====================================================
  // Drag / Touch
  // ====================================================

  const handlePointerDown = (
    clientX: number
  ) => {
    setIsDragging(true);

    dragStartX.current = clientX;
    dragStartPosition.current =
      positionRef.current;
  };

  const handlePointerMove = (
    clientX: number
  ) => {
    if (
      !isDragging ||
      !trackRef.current
    ) {
      return;
    }

    const difference =
      clientX - dragStartX.current;

    positionRef.current =
      dragStartPosition.current +
      difference;

    trackRef.current.style.transform =
      `translate3d(${positionRef.current}px, 0, 0)`;
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    lastTimeRef.current = null;
  };

  // ====================================================
  // Empty state
  // ====================================================

  if (!partnerLogos.length) {
    return null;
  }

  // ====================================================
  // Render
  // ====================================================

  return (
    <section
      dir={isAr ? "rtl" : "ltr"}
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
        md:py-24
      "
    >
      {/* ==================================================
          Header
      ================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className={`mb-12 ${
            isAr
              ? "text-right"
              : "text-left"
          }`}
        >
          {/* Small heading */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#D4AF37]
            "
          >
            <span
              className="
                h-[2px]
                w-10
                bg-[#D4AF37]
              "
            />

            <span>
              {isAr
                ? "شراكاتنا التقنية"
                : "Our partnerships"}
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              max-w-3xl
              text-3xl
              font-extrabold
              leading-tight
              text-[#0B3D2E]
              sm:text-4xl
              md:text-5xl
            "
          >
            {isAr
              ? "شركاؤنا وعملاؤنا"
              : "Our customers and partners"}
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-base
              leading-8
              text-gray-500
              md:text-lg
            "
          >
            {isAr
              ? "نفخر بالتعاون مع مجموعة من الجهات والمؤسسات الرائدة في مختلف القطاعات."
              : "We are proud to work with leading organisations across a wide range of industries."}
          </p>
        </div>
      </div>

      {/* ==================================================
          Slider Area
      ================================================== */}

      <div
        className="relative w-full"
        onMouseEnter={() =>
          setIsPaused(true)
        }
        onMouseLeave={() => {
          setIsPaused(false);
          handlePointerUp();
        }}
      >
        {/* ==================================================
            Left Fade
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            start-0
            z-20
            w-20
            bg-gradient-to-r
            from-white
            via-white/80
            to-transparent
            md:w-36
          "
        />

        {/* ==================================================
            Right Fade
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            end-0
            z-20
            w-20
            bg-gradient-to-l
            from-white
            via-white/80
            to-transparent
            md:w-36
          "
        />

        {/* ==================================================
            Left Arrow
        ================================================== */}

        <button
          type="button"
          aria-label={
            isAr
              ? "التالي"
              : "Next"
          }
          onClick={() =>
            moveSlider(
              isAr
                ? "right"
                : "left"
            )
          }
          className="
            absolute
            start-4
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            text-gray-700
            shadow-md
            transition-all
            duration-300
            hover:scale-105
            hover:border-[#D4AF37]
            hover:text-[#0B3D2E]
            md:start-8
          "
        >
          <ArrowLeft
            className={`h-5 w-5 ${
              isAr
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {/* ==================================================
            Right Arrow
        ================================================== */}

        <button
          type="button"
          aria-label={
            isAr
              ? "السابق"
              : "Previous"
          }
          onClick={() =>
            moveSlider(
              isAr
                ? "left"
                : "right"
            )
          }
          className="
            absolute
            end-4
            top-1/2
            z-30
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-gray-200
            bg-white
            text-gray-700
            shadow-md
            transition-all
            duration-300
            hover:scale-105
            hover:border-[#D4AF37]
            hover:text-[#0B3D2E]
            md:end-8
          "
        >
          <ArrowRight
            className={`h-5 w-5 ${
              isAr
                ? "rotate-180"
                : ""
            }`}
          />
        </button>

        {/* ==================================================
            Slider Viewport
        ================================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            cursor-grab
            select-none
            active:cursor-grabbing
          "
          onMouseDown={(e) =>
            handlePointerDown(
              e.clientX
            )
          }
          onMouseMove={(e) =>
            handlePointerMove(
              e.clientX
            )
          }
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={(e) =>
            handlePointerDown(
              e.touches[0].clientX
            )
          }
          onTouchMove={(e) =>
            handlePointerMove(
              e.touches[0].clientX
            )
          }
          onTouchEnd={handlePointerUp}
        >
          {/* ==================================================
              Infinite Track
          ================================================== */}

          <div
            ref={trackRef}
            className="
              flex
              w-max
              items-center
              gap-10
              py-6
              will-change-transform
              md:gap-14
              lg:gap-16
            "
          >
            {repeatedLogos.map(
              (logo, index) => (
                <div
                  key={`${logo}-${index}`}
                  className="
                    group
                    flex
                    h-[90px]
                    w-[150px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    px-6
                    shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-gray-200
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                    sm:h-[100px]
                    sm:w-[175px]
                    md:h-[110px]
                    md:w-[200px]
                  "
                >
                  <img
                    src={logo}
                    alt={`Partner ${
                      index + 1
                    }`}
                    draggable={false}
                    className="
                      max-h-[58px]
                      max-w-[135px]
                      object-contain
                      opacity-70
                      grayscale
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:opacity-100
                      group-hover:grayscale-0
                      sm:max-h-[65px]
                      sm:max-w-[155px]
                      md:max-h-[70px]
                      md:max-w-[175px]
                    "
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ==================================================
          View All Button
      ================================================== */}

      <div
        className="
          mx-auto
          mt-12
          flex
          w-full
          max-w-[1400px]
          justify-center
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <Link
          to="/partners-clients"
          className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-gray-200
            bg-white
            px-7
            py-3
            text-sm
            font-semibold
            text-[#0B3D2E]
            shadow-sm
            transition-all
            duration-300
            hover:border-[#D4AF37]
            hover:bg-[#0B3D2E]
            hover:text-white
            hover:shadow-md
          "
        >
          <span>
            {isAr
              ? "عرض جميع الشركاء"
              : "View all partners"}
          </span>

          {isAr ? (
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />
          ) : (
            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          )}
        </Link>
      </div>
    </section>
  );
}