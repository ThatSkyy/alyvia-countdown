const endDate = new Date("2025-05-22T00:00:00");

    function updateCountdown() {
      const now = new Date();
      const diff = endDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      document.getElementById("countdown").textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s left until May 22`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    const dailyContent = {
  "2025-05-01": {
    msg: "🎉 Welcome to Alyvia’s Birthday Countdown! 21 days of love and surprises 💖",
    img: "images/may1.jpg"
  },
  "2025-05-02": {
    msg: "✨ You light up every room, Alyvia. Let’s make this countdown magical.",
    img: "images/may2.jpg"
  },
  "2025-05-03": {
    msg: "📖 'You do not yield' — Fourth Wing. Neither do we. 💪",
    img: "images/may3.jpg"
  },
  "2025-05-04": {
    msg: "🌷 Sunday reset: Take a deep breath. This month is for *you*.",
    img: "images/may4.jpg"
  },
  "2025-05-05": {
    msg: "💌 You make the ordinary extraordinary. Happy May 5, beautiful.",
    img: "images/may5.jpg"
  },
  "2025-05-06": {
    msg: "📖 'I would burn the world to protect you.' — Fourth Wing 🔥",
    img: "images/may6.jpg"
  },
  "2025-05-07": {
    msg: "🌞 Midweek reminder: You are loved beyond measure.",
    img: "images/may7.jpg"
  },
  "2025-05-08": {
    msg: "🦋 You are my favorite part of every day.",
    img: "images/may8.jpg"
  },
  "2025-05-09": {
    msg: "📖 'Power is not given. It's taken.' — Fourth Wing. And you, babe, are powerful. 💥",
    img: "images/may9.jpg"
  },
  "2025-05-10": {
    msg: "💡 Saturday Date: Candlelit backyard picnic — just us, stars, and your favorite snacks.",
    img: "images/may10.jpg"
  },
  "2025-05-11": {
    msg: "🌼 You deserve flowers every day, not just today. But here’s a mental bouquet anyway 💐",
    img: "images/may11.jpg"
  },
  "2025-05-12": {
    msg: "✨ Every love story is beautiful, but ours is my favorite.",
    img: "images/may12.jpg"
  },
  "2025-05-13": {
    msg: "📖 'Love isn't weakness. It's strength.' — Fourth Wing. And you make me stronger every day.",
    img: "images/may13.jpg"
  },
  "2025-05-14": {
    msg: "🎁 Surprise! You're halfway to your big day. Are you ready for more?",
    img: "images/may14.jpg"
  },
  "2025-05-15": {
    msg: "💖 You’re my safe place, my wild adventure, and everything in between.",
    img: "images/may15.jpg"
  },
  "2025-05-16": {
    msg: "📖 'The ones worth loving are the ones who will burn with you.' — Fourth Wing ❤️‍🔥",
    img: "images/may16.jpg"
  },
  "2025-05-17": {
    msg: "💡 Saturday Date: Let's go to a bookstore and buy a romance novel for each other. 📚",
    img: "images/may17.jpg"
  },
  "2025-05-18": {
    msg: "☕ Cozy Sunday morning, your favorite drink, and me thinking about how lucky I am.",
    img: "images/may18.jpg"
  },
  "2025-05-19": {
    msg: "💌 If I could give you one thing today, it would be the ability to see yourself through my eyes.",
    img: "images/may19.jpg"
  },
  "2025-05-20": {
    msg: "📖 'You are not alone. Not ever again.' — Fourth Wing. I'm with you always.",
    img: "images/may20.jpg"
  },
  "2025-05-21": {
    msg: "🎂 It’s the eve of your birthday, and I can barely hold in the excitement!",
    img: "images/may21.jpg"
  },
  "2025-05-22": {
    msg: "🎉 Happy Birthday, Alyvia!!! 💖 You are cherished, adored, and celebrated today and always. I LOVE YOU!!!",
    img: "images/may22.jpg"
  }
};


    function showDailyContent() {
      const today = new Date().toISOString().split("T")[0];
      const contentDiv = document.getElementById("dailyContent");
      if (dailyContent[today]) {
        const { msg, img } = dailyContent[today];
        contentDiv.innerHTML = `<h2>${msg}</h2><img src="${img}" alt="Daily image">`;
      } else {
        contentDiv.innerHTML = `<p class="locked">Today's content is not available yet. Come back later!</p>`;
      }
    }

// Generate sparkles
const sparkleContainer = document.querySelector('.sparkles');

for (let i = 0; i < 40; i++) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;
  sparkle.style.animationDelay = `${Math.random() * 5}s`;
  sparkleContainer.appendChild(sparkle);
}


    showDailyContent();