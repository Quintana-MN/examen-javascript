const humanizeDate = () => {
    let argentinaChampion = new Date(`2022-12-18 00:00:00`);
    let options = {
      weekday: `long`,
      month: `long`,
      year: `numeric`,
      day: `numeric`,
    };
    const weekDay = argentinaChampion.toLocaleDateString(`es-AR`, {weekday: `long`});
    const dayNumber = argentinaChampion.toLocaleDateString(`es-AR`, {day:`numeric`})
    const month = argentinaChampion.toLocaleDateString(`es-AR`, {month:`long`})
    const yearNumber = argentinaChampion.toLocaleDateString(`es-AR`, {year: `numeric`})
    return `${weekDay[0].toUpperCase()}${weekDay.slice(1)}, ${dayNumber} de ${month} de ${yearNumber}`
  };
  
  humanizeDate()