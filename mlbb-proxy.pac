function FindProxyForURL(url, host) {
    // Daftar domain penting Mobile Legends
    if (
        shExpMatch(host, "*.mobilelegends.com") ||
        shExpMatch(host, "*.ml.youngjoygame.com") ||
        shExpMatch(host, "*.moba.vivo.com") ||
        shExpMatch(host, "api.mobilelegends.com") ||
        shExpMatch(host, "dl.mobilelegends.com")
    ) {
        return "PROXY 192.168.1.4:8080"; // Ganti IP:port proxy kamu
    }

    // Sisanya konek langsung tanpa proxy
    return "DIRECT";
}
