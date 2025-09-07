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
/* === Gear Slot Positions (like in-game UI) === */
.necklace { top: 40px; left: 200px; }   /* top center */
.helm     { top: 100px; left: 340px; }  /* top right */
.chest    { top: 200px; left: 360px; }  /* mid right */
.gloves   { top: 300px; left: 320px; }  /* bottom right */
.belt     { top: 320px; left: 120px; }  /* bottom left */
.boots    { top: 200px; left: 40px; }   /* mid left */
.ring     { top: 100px; left: 60px; }   /* top left */
.weapon   { top: 220px; left: 140px; }  /* lower left-mid */
.offhand  { top: 220px; left: 260px; }  /* lower right-mid */
