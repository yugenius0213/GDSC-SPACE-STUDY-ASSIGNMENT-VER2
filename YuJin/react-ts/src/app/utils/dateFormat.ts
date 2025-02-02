export const dateFormatting = (date: string | Date, dateStyle?: Intl.DateTimeFormatOptions['dateStyle']): string => {
    const parsedDate = typeof date === 'string' ? new Date(date) : date
    const formattedDate = Intl.DateTimeFormat('ko-KR', {
        dateStyle,
    }).format(parsedDate)
    return formattedDate
}
