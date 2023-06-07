export const getLastWeek = () => {
  const result = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const prevDate = new Date(today);
    prevDate.setDate(today.getDate() - i);
    const day = prevDate.getDate().toString().padStart(2, '0');
    const month = (prevDate.getMonth() + 1).toString().padStart(2, '0'); // +1, потому что getMonth() возвращает месяцы начиная с 0
    const year = prevDate.getFullYear().toString();
    const dateString = `${day}.${month}.${year}`;
    result.push(dateString);
  }

  return result;
}