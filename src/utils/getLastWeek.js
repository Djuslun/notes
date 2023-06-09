export const getLastWeek = () => {
  const result = [];
  const today = new Date();
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };

  for (let i = 6; i >= 0; i--) {
    const prevDate = new Date(today);
    prevDate.setDate(today.getDate() - i);
    result.push(prevDate.toLocaleDateString('ru-RU', options));
  }

  return result;
}