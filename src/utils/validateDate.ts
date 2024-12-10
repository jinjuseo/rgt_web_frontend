export const isDateValid = (date: string) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // yyyy-mm-dd 형식 확인
    if (!regex.test(date)) return false;

    // 날짜 유효성 확인 (예: 2024-02-30 같은 잘못된 날짜 방지)
    const [year, month, day] = date.split('-').map(Number);
    const testDate = new Date(year, month - 1, day);
    return (
      testDate.getFullYear() === year &&
      testDate.getMonth() === month - 1 &&
      testDate.getDate() === day
    );
  };