export const formatDate = (rawDate: Date): string => {
    if (!rawDate) return "유효하지 않은 날짜";

    const date = rawDate instanceof Date ? rawDate : new Date(rawDate);
    if (isNaN(date.getTime())) return "유효하지 않은 날짜";

    return date.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
} 