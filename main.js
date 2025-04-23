const socket = io("https://kule-savunma-parasor.onrender.com");

socket.on("connect", () => {
  console.log("Bağlandın! ID:", socket.id);
  document.body.innerHTML += `<p>Sen bağlandın: ${socket.id}</p>`;
});

socket.on("move", (data) => {
  console.log("Diğer oyuncudan hamle:", data);
  document.body.innerHTML += `<p>Hamle geldi: ${JSON.stringify(data)}</p>`;
});

// Test amaçlı gönderim (3 saniye sonra)
setTimeout(() => {
  socket.emit("move", { x: 3, y: 2 });
}, 3000);
