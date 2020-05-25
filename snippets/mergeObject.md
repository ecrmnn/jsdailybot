---
description: "🔥 Hot tip! You can merge objects using only the spread operator! No more Object.assign! #E6"
---
const player = {
  name: 'Mohamed Salah',
  nationality: 'Egyptian',
};

const club = {
  club: 'Liverpool FC',
};

const merged = { ...player, ...club };
