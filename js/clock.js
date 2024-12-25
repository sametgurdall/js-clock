const userName = prompt("Adınızı giriniz: ");
document.getElementById("myName").textContent = userName;


function showTime() {
    const clockElement = document.getElementById("myClock");

    
    const now = new Date();

    // Saat, dakika ve saniye bilgisi
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    // Gün bilgisi
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const day = days[now.getDay()];

    // Saat ve gün bilgisini birleştir
    const timeString = `Saat: ${hours}:${minutes}:${seconds} - Gün: ${day}`;

    // HTML'e yazdır
    clockElement.textContent = timeString;

    // Her saniyede bir güncelle
    setTimeout(showTime, 1000);
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
showTime();