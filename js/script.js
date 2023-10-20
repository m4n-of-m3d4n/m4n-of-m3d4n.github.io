// Codice effetto testo

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll("li").forEach(element => {
  let interval = null;
  let originalText = element.innerText;

  element.onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  element.onmouseout = event => {
    clearInterval(interval);
    event.target.innerText = originalText;
  };
});

// Codice effetto "Matrix" sfondo

const animatedSection = document.querySelector('.animated-area');

function createCool(){
    const cool = document.createElement('span');
    cool.style.left = Math.random() * innerWidth + 'px';
    animatedSection.append(cool);

    setTimeout(()=>{
        cool.remove();
    },2000);
}

setInterval(createCool,100);

// Codice per collegamento elementi

document.querySelectorAll("li").forEach(element => {
  element.addEventListener("click", () => {
    const value = element.getAttribute("data-value");
    let url;

        switch (value) {
      case "YOUTUBE":
        url = "https://www.youtube.com/@emanuelemaruti";
        break;
      case "TWITCH":
        url = "https://www.twitch.tv/emanuelemaruti";
        break;
      case "INSTAGRAM":
        url = "https://instagram.com/emanuelemaruti";
        break;
      case "TIKTOK":
        url = "https://www.tiktok.com/@emanuelemaruti";
        break;
      case "TWITTER":
        url = "https://twitter.com/emanuelemaruti";
        break;
      case "SPIDER SOCIETY":
        url = "https://discord.gg/MfsqsntQyu";
        break;
      case "TUTTI I MIEI CANALI":
        url = "https://www.youtube.com/@EmanueleMaruti/channels?view=49&flow=grid&shelf_id=1";
        break;
      case "ABBONATI":
        url = "https://www.youtube.com/@EmanueleMaruti/join";
        break;
      case "DONAZIONI":
        url = "https://www.paypal.com/paypalme/EmanueleMaruti";
        break;
      default:
        return;
    }

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
  });
});