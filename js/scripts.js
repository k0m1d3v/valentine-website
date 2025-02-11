const content = document.getElementById("content");
let counter = 1;
let messageState = 0;
const debugMode = false; // Variabile di debug

function createItem() {
  const item = document.createElement("div");
  item.className = "item";
  if (messageState === 0) {
    item.textContent = "Scorri!";
  } else if (messageState === 1) {
    item.textContent = "Più veloce";
  } else if (messageState === 2) {
    item.textContent = "Ci sei quasi!";
  } else if (messageState === 3) {
    item.textContent = "Ce l'hai fatta!";
  }
  content.appendChild(item);
}

function loadMoreItems() {
  for (let i = 0; i < 80; i++) {
    createItem();
  }
}

if (!debugMode) {
  loadMoreItems();

  let canLoadMore = true;
  const disableLoadingAfterTimeout = () => {
    canLoadMore = false;
    messageState = 3;
    content.innerHTML = ""; // Rimuove tutti gli elementi creati

    // Crea e aggiungi il messaggio di San Valentino
    const valentineMessage = document.createElement("div");
    valentineMessage.className = "valentine-message";
    valentineMessage.textContent = "Buon San Valentino Stordita ❤️";
    content.appendChild(valentineMessage);

    // gif appears
    setTimeout(() => {
      const valentineGif = document.createElement("img");
      valentineGif.src =
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ5dG1tM3I4YmR5c3B2MTF5M3EwMjV5dDZmc3cwM3NuOXd6YTNyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QbwUh40Hl96yMgvOx/giphy.gif";
      valentineGif.alt = "Valentine's Day";
      valentineGif.className = "valentine-gif";
      content.appendChild(valentineGif);

      // Cambia l'opacità per far apparire gradualmente la GIF
      setTimeout(() => {
        valentineGif.style.opacity = 1;
      }, 100); // Piccolo ritardo per assicurarsi che l'elemento sia aggiunto al DOM

      // Aggiungi un altro messaggio dopo il caricamento della GIF
      setTimeout(() => {
        const finalMessage = document.createElement("div");
        finalMessage.className = "valentine-message";
        finalMessage.textContent = "Sofi ha un regalino per te 👀";
        content.appendChild(finalMessage);

        // Aggiungi l'ultimo messaggio con le emoji
        setTimeout(() => {
          const lastMessage = document.createElement("div");
          lastMessage.className = "valentine-message";
          lastMessage.textContent = "💝🍫";
          content.appendChild(lastMessage);
        }, 3000); // 3 secondi dopo il messaggio precedente
      }, 3000); // 3 secondi dopo che la GIF è completamente visibile
    }, 7000); // 4s for typing animation + 3s delay
  };

  setTimeout(disableLoadingAfterTimeout, 20000); // 20 seconds

  setTimeout(() => {
    messageState = 1;
  }, 5000); // Cambia il messaggio dopo 5 secondi

  setTimeout(() => {
    messageState = 2;
  }, 12000); // Cambia il messaggio dopo 12 secondi

  window.addEventListener("scroll", () => {
    if (
      canLoadMore &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      loadMoreItems();
    }
  });
} else {
  // Modalità debug: mostra direttamente il messaggio di San Valentino
  const valentineMessage = document.createElement("div");
  valentineMessage.className = "valentine-message";
  valentineMessage.textContent = "Buon San Valentino Stordita ❤️";
  content.appendChild(valentineMessage);

  // gif appears
  setTimeout(() => {
    const valentineGif = document.createElement("img");
    valentineGif.src =
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ5dG1tM3I4YmR5c3B2MTF5M3EwMjV5dDZmc3cwM3NuOXd6YTNyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QbwUh40Hl96yMgvOx/giphy.gif";
    valentineGif.alt = "Valentine's Day";
    valentineGif.className = "valentine-gif";
    content.appendChild(valentineGif);

    // Cambia l'opacità per far apparire gradualmente la GIF
    setTimeout(() => {
      valentineGif.style.opacity = 1;
    }, 100); // Piccolo ritardo per assicurarsi che l'elemento sia aggiunto al DOM

    // Aggiungi un altro messaggio dopo il caricamento della GIF
    setTimeout(() => {
      const finalMessage = document.createElement("div");
      finalMessage.className = "valentine-message";
      finalMessage.textContent = "Sofi ha un regalino per te 👀";
      content.appendChild(finalMessage);

      // Aggiungi l'ultimo messaggio con le emoji
      setTimeout(() => {
        const lastMessage = document.createElement("div");
        lastMessage.className = "valentine-message";
        lastMessage.textContent = "💝🍫";
        content.appendChild(lastMessage);
      }, 3000); // 3 secondi dopo il messaggio precedente
    }, 3000); // 3 secondi dopo che la GIF è completamente visibile
  }, 7000); // 4s for typing animation + 3s delay
}