console.log("Gear Optimizer loaded");
document.addEventListener("DOMContentLoaded", () => {
  const statTotals = {
    Attack: 0,
    "Attack Speed": 0,
    "Crit Chance": 0,
    Evasion: 0,
    "Critical Damage": 0,
    Defence: 0,
    HP: 0,
  };

  const statElements = {};
  Object.keys(statTotals).forEach(stat => {
    statElements[stat] = document.getElementById(stat.replace(" ", "") + "-total");
  });

  function updateTotals() {
    // reset totals
    for (let stat in statTotals) {
      statTotals[stat] = 0;
    }

    // loop through all selects
    document.querySelectorAll(".gear-slot select").forEach(select => {
      const value = select.value;
      if (value !== "-- Select Stat --") {
        const [stat, num] = value.split(" +");
        if (statTotals[stat] !== undefined) {
          statTotals[stat] += parseInt(num);
        }
      }
    });

    // update UI
    for (let stat in statTotals) {
      statElements[stat].textContent = statTotals[stat] + "%";
    }
  }

  // attach event listener
  document.querySelectorAll(".gear-slot select").forEach(select => {
    select.addEventListener("change", updateTotals);
  });
});
