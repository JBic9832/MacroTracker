export const isToday = (documentDate: Date): boolean => {
    const today = new Date();

    if (today.getDay() == documentDate.getDay() && today.getMonth() == documentDate.getMonth() && today.getFullYear() == documentDate.getFullYear()) {
        return true;
    }

    return false;

}