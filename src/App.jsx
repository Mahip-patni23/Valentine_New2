import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showHowIFell, setShowHowIFell] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
          "No 😤",
          "Anshika… are you sure about that? 👀",
          "First go checkout 2 buttons on bottom right side 👀",
          "Like… REALLY sure? 🤨",
          "Maybe blink twice and think again 😌",
          "Last chance before I deploy emotions 💘",
          "Anshikaaaa, don’t do this to me 😭",
          "This decision will be discussed in the future 😏",
          "Error 404: ‘No’ not accepted ❌",
          "Recalculating… please reconsider 🤖❤️",
          "Are you absolutely, positively, 100% sure? 🤔",
          "This might go down as a historical mistake 📜😂",
          "Have mercy, oh beautiful human 🥺",
          "Wow. Cold. Very cold. 🥶",
          "Change of heart loading… ⏳💓",
          "Anshika, I’ll pretend I didn’t see that 😌",
          "Final answer? Like FINAL final? 😏",
          "Ouch. That hurt a little… okay a lot 💔",
          "Breaking my heart? On purpose?? 😭",
          "Plssss Anshika 🥺👉👈",
          "Okay but imagine saying YES though 😍"
        ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 min-h-screen selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <div className="w-full min-h-screen overflow-y-auto">
          {/* Congratulations Section */}
          <div className="ml-8 md:ml-16 self-start mb-8 pt-8">
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" className="w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg" />
            <div className="text-2xl md:text-4xl font-bold my-4 text-left px-4 text-white">
              🎉 Congratulations! 🎉<br />
              You have officially accepted<br />
              Mr. Mahip Patni's proposal!<br />
              <span className="text-rose-500">You are now his Valentine! 💕</span>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-white text-lg mb-4 animate-bounce">👇 Scroll Down 👇</p>
            <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
          
          {/* Photo Section */}
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              Wanna see how good we look together? 😍
            </h2>
            
            {/* Music Player */}
            <div className="mb-8">
              <iframe 
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                frameBorder="0" 
                height="130" 
                style={{width:'100%', maxWidth:'350px', overflow:'hidden', borderRadius:'12px'}} 
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src="https://embed.music.apple.com/us/song/die-with-a-smile/1762656732"
                className="mx-auto shadow-2xl"
              />
              <p className="text-white text-sm mt-2 text-center font-medium">
                "I want you to first play that song and then click that Yes button!!! <br />Also i know you must have already read how did i fall for you, but read it while playing this music, it will feel more special!! 🥰"
              </p>
            </div>
            
            <button
              onClick={() => setShowPhoto(true)}
              className="bg-gradient-to-br from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 active:translate-y-0 transition-all duration-300 text-xl md:text-2xl"
              style={{
                boxShadow: '0 15px 30px rgba(244,63,94,0.4), 0 8px 16px rgba(244,63,94,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            >
              Yes, I want to see! 💖
            </button>
          </div>
          
          {/* Second Scroll Down Indicator */}
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-white text-lg mb-4 animate-bounce">👇 Keep Scrolling 👇</p>
            <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
          
          {/* Meeting Section */}
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              I wanna meet you as soon as we can 🥰
            </h2>
            <div className="text-white text-xl md:text-2xl text-center max-w-2xl">
              <p className="text-rose-300">
                Can't wait to hold your hand again and see that beautiful smile in person! ✨
              </p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="text-4xl animate-bounce">💞</span>
              <span className="text-4xl animate-pulse">👫</span>
              <span className="text-4xl animate-bounce">💞</span>
            </div>
          </div>
          
          {/* Third Scroll Down Indicator */}
          <div className="flex flex-col items-center justify-center py-8">
            <p className="text-white text-lg mb-4 animate-bounce">👇 One More Thing 👇</p>
            <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent"></div>
          </div>
          
          {/* Blushing Section */}
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              I know you are blushing right now!!! 😊
            </h2>
            <div className="text-white text-xl md:text-2xl text-center max-w-2xl">
              <p className="mb-4">
                That cute little smile spreading across your face... 😌
              </p>
              <p className="text-rose-300">
                Yeah, I can picture it perfectly! You're absolutely adorable when you blush! 🥰
              </p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="text-4xl animate-bounce">😊</span>
              <span className="text-4xl animate-pulse">💕</span>
              <span className="text-4xl animate-bounce">😳</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-5 md:left-24 left-6 md:w-40 w-28"
          />
          <div className="ml-8 md:ml-16 self-start mt-12 md:mt-16">
            <p 
              className="text-2xl md:text-2xl my-4 text-left text-white whitespace-pre-line font-bold"
              style={{
                textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,63,94,0.8), 1px 1px 0px rgba(251,113,133,0.9), -1px -1px 0px rgba(255,255,255,0.3)'
              }}
            >
              {`Anshika Maheshwary!!!
                Will you be my Valentine this year,
                the next one,
                and every year after that—
                all the way through endless smiles and
                shared dreams`}
            </p>
            <div className="flex flex-wrap justify-start gap-2 items-center">
              <button
                className={`bg-gradient-to-br from-white to-gray-100 backdrop-blur-md border border-gray-300 hover:from-gray-50 hover:to-gray-200 text-black font-bold py-3 px-6 rounded-lg mr-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-lg transition-all duration-200`}
                style={{ 
                  boxShadow: '0 10px 25px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button
                onClick={handleNoClick}
                className="bg-gradient-to-br from-red-400 to-red-600 backdrop-blur-md border border-red-300 hover:from-red-500 hover:to-red-700 rounded-lg text-white font-bold py-3 px-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-lg transition-all duration-200"
                style={{
                  boxShadow: '0 10px 25px rgba(239,68,68,0.4), 0 6px 12px rgba(239,68,68,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
                }}
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </div>
        </>
      )}
      <Footer onLetterClick={() => setShowLetter(true)} onHowIFellClick={() => setShowHowIFell(true)} />
      {showPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl shadow-2xl max-w-sm w-full p-3 md:p-4 relative transform transition-all duration-300 border border-rose-200">
            <button
              onClick={() => setShowPhoto(false)}
              className="absolute top-2 right-2 text-rose-400 hover:text-rose-600 text-xl font-bold transition-colors duration-200 z-10"
            >
              ×
            </button>
            <div className="text-center">
              <h2 className="text-base md:text-lg font-bold text-rose-600 mb-3">💕 Perfect Together! 💕</h2>
              <div className="relative mb-3">
                {/* Replace this src with your actual photo */}
                <img 
                  src="/UsTogether.jpeg" 
                  alt="Us Together" 
                  className="w-full max-w-[150px] mx-auto rounded-lg shadow-md"
                />
                <div className="absolute -top-1 -right-1 text-lg animate-pulse">💖</div>
                <div className="absolute -bottom-1 -left-1 text-lg animate-bounce">✨</div>
              </div>
              
              <p className="text-rose-800 text-sm mt-4 font-medium">
                "Look how perfect we are together! 🥰"
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="text-2xl animate-pulse">💝</span>
                <span className="text-2xl animate-bounce">👫</span>
                <span className="text-2xl animate-pulse">💝</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {showLetter && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all duration-300 border border-rose-200">
            <button
              onClick={() => setShowLetter(false)}
              className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 text-2xl font-bold transition-colors duration-200"
            >
              ×
            </button>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-rose-600 mb-4">💌 A Letter 💌</h2>
              <div className="text-rose-800 text-lg leading-relaxed space-y-4">
                <p className="italic">
                  "My Dearest Anshika,"
                </p>
                <p>
                  Every line of code in this app was written with love, every pixel placed with care, and every animation crafted with the hope of seeing your beautiful smile.
                </p>
                <p>
                  You are the sunshine that brightens my darkest days, the melody that makes my heart sing, and the reason I believe in forever.
                </p>
                <p>
                  Will you be my Valentine? Not just today, but for all the tomorrows that await us? 🌹
                </p>
                <p className="italic font-semibold mt-6">
                  "With all my love,<br />Your hopeful Valentine ❤️"
                </p>
              </div>
              <div className="mt-6 flex justify-center">
                <span className="text-4xl animate-pulse">💝</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {showHowIFell && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 border border-purple-200">
            <button
              onClick={() => setShowHowIFell(false)}
              className="absolute top-4 right-4 text-purple-400 hover:text-purple-600 text-2xl font-bold transition-colors duration-200 z-10"
            >
              ×
            </button>
            <div className="text-center pr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">✨ How Did I Fall For You? ✨</h2>
              <div className="text-purple-800 text-sm md:text-base leading-relaxed space-y-3 text-left">
                <p className="italic text-center">
                  "So, Miss Anshika Maheshwary,"
                </p>
                <p>
                  When I first saw you on Hinge, my heart genuinely paused for a moment. There was something about you that instantly caught my attention, something I couldn't quite explain but couldn't ignore either. I found myself wondering who you were, what your story was, and silently wishing that I could match with you just so I could get the chance to know you better. Little did I know that one morning I would wake up, check my phone, and see that we had actually matched. It felt unreal, almost like one of those moments that feel too good to be true — matching with someone I liked right from the very beginning.
                </p>
                <p>
                  As we started talking, I realised that it wasn't just your smile or your presence that drew me towards you, but the person you are. Every conversation with you made me look forward to the next one. And then I heard your voice… so sweet, so calm, so angelic — it had this soothing warmth that made everything around me feel quieter and lighter. I didn't even realise when I started getting so comfortable talking to you, sharing things with you, and slowly finding myself completely lost in you.
                </p>
                <p>
                  And then came the day we finally met. I still remember that moment so clearly. When you walked towards me, it honestly felt like time slowed down. You looked so beautiful, so graceful — it genuinely felt like an angel was walking towards me. I was completely mesmerised, trying to take in the moment, trying to believe that you were actually there with me. When I held your hand, it felt so natural, so right, like something I never wanted to let go of. And when we hugged, it felt safe, warm, and comforting in a way that made me wish that moment could just last a little longer… or maybe forever.
                </p>
                <p>
                  The more I get to know you, the more I admire you — your kindness, your warmth, your smile, and the way you make even ordinary moments feel special. Being around you makes me happy in a way that feels calm and real, not loud or rushed, just something that feels right deep inside.
                </p>
                <p>
                  So yes, Anshika, I really, truly like you. I don't just like you for the moments we've shared so far, but for the many moments I hope we get to create together. I see a future with you — one filled with laughter, comfort, support, silly arguments, late-night talks, and countless memories.
                </p>
                <p>
                  I don't care who your first love was, because what matters to me is what we can build together. I don't want to rush anything, and I don't want to pressure you into anything either. I just want you to know that I'm here, genuinely and patiently. I intend to be your last love, however long it takes, and I'm willing to wait for you, for as long as you need.
                </p>
                <p className="italic font-semibold mt-4 text-center">
                  "With all my heart,<br />MAHIP PATNI 💕"
                </p>
              </div>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="text-2xl md:text-3xl animate-bounce">🦋</span>
                <span className="text-2xl md:text-3xl animate-pulse">💖</span>
                <span className="text-2xl md:text-3xl animate-bounce">🦋</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Footer = ({ onLetterClick, onHowIFellClick }) => {
  return (
    <div className="fixed bottom-2 right-2 flex flex-col gap-2">
      <button
        onClick={onHowIFellClick}
        className="bg-white/90 backdrop-blur-md opacity-90 hover:opacity-100 border border-gray-300 p-2 rounded cursor-pointer transition-all duration-200 hover:scale-105 text-sm text-black font-medium shadow-lg"
      >
        How Did I Fall For You? 💕
      </button>
      <button
        onClick={onLetterClick}
        className="bg-white/90 backdrop-blur-md opacity-90 hover:opacity-100 border border-gray-300 p-1 rounded cursor-pointer transition-all duration-200 hover:scale-105 text-black"
      >
        Letter To You{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
};
