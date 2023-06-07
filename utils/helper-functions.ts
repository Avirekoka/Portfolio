export const calculateYearAndMonth = (startDate: Date, endDate: Date) => {

    var yearDiff = endDate.getFullYear() - startDate.getFullYear();
    var monthDiff = endDate.getMonth() - startDate.getMonth();

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    return {
        years: yearDiff,
        months: monthDiff
    };
};

export const deviceWidth = () => {
    return (window as any).matchMedia("(max-width: 700px)").matches;
}