export const dateFormatting = (date: string | Date): string => {
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
        .format(new Date(date))
        .replace(/\//g, '.')
}
