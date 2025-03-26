const mockData = {
  cards: [
    {
      id: 1000031,
      name: "Goku",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1000041,
      name: "Vegeta",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1000051,
      name: "Frieza (1st Form)",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1000061,
      name: "Frieza (1st Form)",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of all enemies' ATK & DEF 30%{passiveImg:down_y}"
    },
    {
      id: 1000071,
      name: "Cell (1st Form)",
      element: 20,
      rarity: 3,
      itemized_description: "*At the end of the turn in which a final blow is delivered*\n- {passiveImg:forever}ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1000081,
      name: "Cell (1st Form)",
      element: 21,
      rarity: 3,
      itemized_description: "*After attacking with 8 or more Ki*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1000091,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 10% or less*\n- {passiveImg:once}Ki +5"
    },
    {
      id: 1000101,
      name: "Trunks (Teen)",
      element: 10,
      rarity: 3,
      itemized_description: "*After delivering a final blow*\n- ATK 25%{passiveImg:up_g} for 3 turn(s) after the end of the turn"
    },
    {
      id: 1000111,
      name: "Krillin",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- All allies' DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1000121,
      name: "Piccolo",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL & PHY Type allies' Ki +1"
    },
    {
      id: 1000131,
      name: "Tien",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of sealing all enemies' Super Attacks"
    },
    {
      id: 1000141,
      name: "Chiaotzu",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Stuns all enemies"
    },
    {
      id: 1000151,
      name: "Yamcha",
      element: 10,
      rarity: 3,
      itemized_description: "*When attacking*\n- Enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1000161,
      name: "Raditz",
      element: 21,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- All enemies' and all allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1000171,
      name: "Nappa",
      element: 23,
      rarity: 3,
      itemized_description: "*When facing 3 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1000181,
      name: "Zarbon",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1000191,
      name: "Captain Ginyu",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1000201,
      name: "Android #19",
      element: 24,
      rarity: 3,
      itemized_description: "*After attacking with 5 or more Ki*\n- Recovers 15% of damage dealt as HP"
    },
    {
      id: 1000211,
      name: "Dr. Gero",
      element: 22,
      rarity: 3,
      itemized_description: "*After attacking with 8 or more Ki*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1000221,
      name: "Android #17",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of all enemies' DEF 100%{passiveImg:down_y}"
    },
    {
      id: 1000231,
      name: "Android #18",
      element: 23,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1000241,
      name: "Android #16",
      element: 24,
      rarity: 3,
      itemized_description: "*When attacking*\n- Rare chance of lowering the enemy's DEF to 0"
    },
    {
      id: 1000251,
      name: "Master Roshi",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +1"
    },
    {
      id: 1000261,
      name: "Mercenary Tao",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies"
    },
    {
      id: 1000431,
      name: "Master Roshi",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 1200{passiveImg:up_g}"
    },
    {
      id: 1000811,
      name: "Trunks (Teen)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of Ki +2"
    },
    {
      id: 1000821,
      name: "Hercule",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Ki +3"
    },
    {
      id: 1000851,
      name: "Goku",
      element: 10,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1000861,
      name: "Vegeta",
      element: 14,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1000871,
      name: "Gohan (Kid)",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1000881,
      name: "Trunks (Teen)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of Ki +2 and ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1000891,
      name: "Krillin",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 50% or less*\n- ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1000901,
      name: "Piccolo",
      element: 12,
      rarity: 3,
      itemized_description: "*When HP is 20% or less*\n- Recovers 12% HP"
    },
    {
      id: 1000911,
      name: "Tien",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1000921,
      name: "Chiaotzu",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL Type enemies' ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1000931,
      name: "Yamcha",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of all allies' Ki +2"
    },
    {
      id: 1000941,
      name: "Zarbon",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL & PHY Type allies' ATK & DEF 500{passiveImg:up_g}"
    },
    {
      id: 1000951,
      name: "Captain Ginyu",
      element: 22,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- Medium chance of sealing the enemy's Super Attack"
    },
    {
      id: 1000961,
      name: "Nappa",
      element: 24,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1000981,
      name: "Dr. Gero",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% of damage dealt as HP"
    },
    {
      id: 1000991,
      name: "Android #17",
      element: 20,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +1 and ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1001001,
      name: "Android #18",
      element: 20,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1001011,
      name: "Android #16",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1001021,
      name: "Master Roshi",
      element: 10,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +1"
    },
    {
      id: 1001041,
      name: "Chi-Chi",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- PHY Type enemies' ATK 30%{passiveImg:down_y}"
    },
    {
      id: 1001051,
      name: "Dodoria",
      element: 24,
      rarity: 3,
      itemized_description: "*When facing 2 or more enemies*\n- Ki +2"
    },
    {
      id: 1001061,
      name: "Recoome",
      element: 24,
      rarity: 3,
      itemized_description: "*When HP is 10% or less*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1001071,
      name: "Guldo",
      element: 21,
      rarity: 3,
      itemized_description: "*After receiving an attack*\n- All enemies' DEF 100%{passiveImg:down_y} for 3 turn(s)"
    },
    {
      id: 1001081,
      name: "Burter",
      element: 20,
      rarity: 3,
      itemized_description: "*As the 1st attacker in a turn*\n- Ki +2"
    },
    {
      id: 1001091,
      name: "Jeice",
      element: 23,
      rarity: 3,
      itemized_description: "*As the 2nd attacker in a turn*\n- All allies' ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1001101,
      name: "Nail",
      element: 12,
      rarity: 3,
      itemized_description: "*When HP is 50% or less*\n- Recovers 10% HP"
    },
    {
      id: 1001111,
      name: "Cui",
      element: 23,
      rarity: 3,
      itemized_description: "*When attacking*\n- Chance of all enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1001121,
      name: "Videl",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' ATK 700{passiveImg:up_g}"
    },
    {
      id: 1001381,
      name: "Master Shen",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 10%{passiveImg:down_y}"
    },
    {
      id: 1001421,
      name: "Nappa",
      element: 21,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1001431,
      name: "Raditz",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1001441,
      name: "Yamcha",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1001451,
      name: "Tien",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1001461,
      name: "Chiaotzu",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1001501,
      name: "Fasha",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Very rare chance of ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1001521,
      name: "Frieza (2nd Form)",
      element: 23,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- Disables the enemy's guard"
    },
    {
      id: 1001531,
      name: "Super Zarbon",
      element: 20,
      rarity: 3,
      itemized_description: "*When attacking*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1001601,
      name: "Frieza (3rd Form)",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +1"
    },
    {
      id: 1001611,
      name: "Ginyu (Goku)",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to Rainbow"
    },
    {
      id: 1001621,
      name: "Gohan (Kid)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of Ki +5"
    },
    {
      id: 1001711,
      name: "Cell (2nd Form)",
      element: 23,
      rarity: 3,
      itemized_description: "*After attacking with 6 or more Ki*\n- Recovers 20% of damage dealt as HP"
    },
    {
      id: 1001721,
      name: "Cell (Perfect Form)",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1001731,
      name: "Android #17 (Future)",
      element: 24,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- ATK & DEF 1000{passiveImg:up_g}"
    },
    {
      id: 1001741,
      name: "Android #18 (Future)",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1001761,
      name: "Trunks (Kid)",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 30% or less*\n- ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1001771,
      name: "Tien",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1001821,
      name: "Android #16",
      element: 22,
      rarity: 3,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1001831,
      name: "Android #19",
      element: 23,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- Enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1001841,
      name: "Dr. Gero",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1001861,
      name: "Trunks (Teen)",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1001981,
      name: "Dabura",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1001991,
      name: "Videl",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL Type enemies' ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1002031,
      name: "Uub (Youth)",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1002051,
      name: "Babidi",
      element: 22,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1002131,
      name: "Goku",
      element: 11,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1002141,
      name: "Vegeta",
      element: 14,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1002151,
      name: "Frieza (Final Form)",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- High chance of all enemies' DEF 25%{passiveImg:down_y}"
    },
    {
      id: 1002201,
      name: "Super Saiyan Gohan (Teen)",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1002211,
      name: "Jaco",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies"
    },
    {
      id: 1002221,
      name: "Master Roshi (Max Power)",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002241,
      name: "Goku (Youth)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK 500{passiveImg:up_g}"
    },
    {
      id: 1002281,
      name: "Piccolo Jr.",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies"
    },
    {
      id: 1002311,
      name: "General Blue",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of stunning all enemies"
    },
    {
      id: 1002321,
      name: "Chi-Chi (Youth)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning the attacked enemy"
    },
    {
      id: 1002331,
      name: "Yamcha",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1002341,
      name: "Krillin (Youth)",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 80% or more*\n- Ki +2"
    },
    {
      id: 1002361,
      name: "Devilman",
      element: 20,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- Ultra-rare chance of granting deadly power to attack"
    },
    {
      id: 1002411,
      name: "Veku",
      element: 14,
      rarity: 3,
      itemized_description: "*When receiving an attack*\n- High chance of damage reduction rate 50%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1002421,
      name: "Super Saiyan God SS Goku",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Super-rare chance of Ki +7 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1002431,
      name: "Goku",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1002471,
      name: "Cooler",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 1000{passiveImg:up_g}"
    },
    {
      id: 1002491,
      name: "Thouser",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL & TEQ Type allies' Ki +1"
    },
    {
      id: 1002521,
      name: "Android #13",
      element: 21,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1002571,
      name: "Super Saiyan Trunks (Kid)",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1002581,
      name: "Super Saiyan Goten (Kid)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- High chance of Ki +3"
    },
    {
      id: 1002601,
      name: "Tien",
      element: 12,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1002661,
      name: "Beerus",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1002691,
      name: "Super Saiyan Gohan (Youth)",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1002711,
      name: "Goku",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1002791,
      name: "Janemba",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to AGL"
    },
    {
      id: 1002861,
      name: "Goku (Angel)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1002871,
      name: "Gohan (Youth)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 1500{passiveImg:up_g}"
    },
    {
      id: 1002881,
      name: "Piccolo",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1002891,
      name: "Trunks (Teen)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1002901,
      name: "Tien",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies"
    },
    {
      id: 1002941,
      name: "Great Saiyaman",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1002961,
      name: "Goku (GT)  ",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1002981,
      name: "Pan (GT)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1003001,
      name: "Vegeta (GT)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +1"
    },
    {
      id: 1003131,
      name: "Super Saiyan Gohan (GT)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1003141,
      name: "Goku",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +1"
    },
    {
      id: 1003161,
      name: "Oolong",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Ki +5"
    },
    {
      id: 1003171,
      name: "Super Saiyan God SS Goku",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1003221,
      name: "Super Saiyan Vegeta",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1003251,
      name: "Gohan (Teen)",
      element: 10,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- ATK 1800{passiveImg:up_g}"
    },
    {
      id: 1003281,
      name: "Super Saiyan Trunks (Teen)",
      element: 10,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1003331,
      name: "Mr. Buu",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% of damage dealt as HP"
    },
    {
      id: 1003401,
      name: "Dr. Lychee",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 8%{passiveImg:down_y}"
    },
    {
      id: 1003451,
      name: "Mutaito",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 50% or less*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1003461,
      name: "Kibito",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1003471,
      name: "Kibito Kai",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1003481,
      name: "Supreme Kai",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- INT & STR Type allies' Ki +2"
    },
    {
      id: 1003511,
      name: "Piccolo",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1003541,
      name: "Chi-Chi (Youth)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 2500 HP at the start of turn"
    },
    {
      id: 1003551,
      name: "Majin Buu (Piccolo)",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1003561,
      name: "Majin Buu (Ultimate Gohan)",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1003571,
      name: "Majin Buu (Gotenks)",
      element: 23,
      rarity: 3,
      itemized_description: "*For every STR Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1003641,
      name: "Metal Cooler [AGL]",
      element: 20,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +1"
    },
    {
      id: 1003681,
      name: "Super Saiyan Bardock",
      element: 10,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1003701,
      name: "Uub (Youth)",
      element: 10,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1003731,
      name: "Hercule",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of Ki +5"
    },
    {
      id: 1003751,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- STR & PHY Type allies' ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1003821,
      name: "Dabura",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning the attacked enemy"
    },
    {
      id: 1003851,
      name: "Trunks (Kid)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of all enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1003861,
      name: "Goten (Kid)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- High chance of all allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1003871,
      name: "Vegeta",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1003891,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1003901,
      name: "Beerus",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Chance of all allies' Ki +3"
    },
    {
      id: 1003921,
      name: "Cacao",
      element: 20,
      rarity: 3,
      itemized_description: "*As the 1st attacker in a turn*\n- Ki +2"
    },
    {
      id: 1003931,
      name: "Daiz",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1003941,
      name: "Amond",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1003981,
      name: "Bulma (Youth)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies"
    },
    {
      id: 1004021,
      name: "Goten (GT)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1004181,
      name: "Bulma (Bunny)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1004191,
      name: "Launch",
      element: 13,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1004261,
      name: "Vegeta (Kid)",
      element: 20,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1004281,
      name: "Super Saiyan Vegeta",
      element: 11,
      rarity: 3,
      itemized_description: "*When HP is 80% or more*\n- Ki +2"
    },
    {
      id: 1004441,
      name: "Super Saiyan Trunks (Kid)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to AGL\n- Disables Rampage"
    },
    {
      id: 1004461,
      name: "Krillin",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}"
    },
    {
      id: 1004541,
      name: "Cell (1st Form)",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 8%{passiveImg:down_y}"
    },
    {
      id: 1004561,
      name: "Majin Buu (Pure Evil)",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 10%{passiveImg:down_y}"
    },
    {
      id: 1004571,
      name: "Majin Buu (Good)",
      element: 21,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- Ki +1"
    },
    {
      id: 1004611,
      name: "Metal Cooler [INT]",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1004621,
      name: "Metal Cooler [TEQ]",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y}"
    },
    {
      id: 1004631,
      name: "Metal Cooler [STR]",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1004641,
      name: "Metal Cooler [PHY]",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% of damage dealt as HP"
    },
    {
      id: 1004761,
      name: "Super Vegeta",
      element: 13,
      rarity: 3,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1004801,
      name: "Gotenks (Failure) A",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every PHY Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1004811,
      name: "Gotenks (Failure) B",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every Ki Sphere obtained*\n- ATK & DEF 3%{passiveImg:up_g}"
    },
    {
      id: 1004821,
      name: "Chilled",
      element: 22,
      rarity: 3,
      itemized_description: "*For every INT Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1004831,
      name: "Master Roshi (Max Power)",
      element: 12,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1004841,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1004871,
      name: "Jaco",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Stuns all enemies"
    },
    {
      id: 1005021,
      name: "Frieza (1st Form)",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 53%{passiveImg:up_g}"
    },
    {
      id: 1005091,
      name: "Super Saiyan Goten (Kid)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to Rainbow"
    },
    {
      id: 1005101,
      name: "Super Saiyan Trunks (Kid)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +2"
    },
    {
      id: 1005241,
      name: "Nail",
      element: 11,
      rarity: 3,
      itemized_description: "*If HP is 80% or more when receiving an attack*\n- Survives K.O. attacks (up to once within a turn)"
    },
    {
      id: 1005251,
      name: "Uub (Teen)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every TEQ Ki Sphere obtained*\n- Recovers 1500 HP"
    },
    {
      id: 1005371,
      name: "Super Saiyan Vegeta",
      element: 10,
      rarity: 3,
      itemized_description: "*When HP is 50% or less*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1005421,
      name: "Tarble",
      element: 12,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1005461,
      name: "Goku (Youth)",
      element: 14,
      rarity: 3,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1005471,
      name: "Bulma (Youth)",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +3"
    },
    {
      id: 1005511,
      name: "Supreme Kai of Time",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies for 2 turn(s)"
    },
    {
      id: 1005521,
      name: "Trunks (Xeno)",
      element: 11,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1005591,
      name: "Namu",
      element: 12,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1005611,
      name: "Gohan (Future)",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1005701,
      name: "Mecha Frieza",
      element: 24,
      rarity: 3,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK 32%{passiveImg:up_g}"
    },
    {
      id: 1005831,
      name: "Whis",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 50% or more*\n- ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1005871,
      name: "Pan (GT)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3"
    },
    {
      id: 1005921,
      name: "General Rilldo",
      element: 23,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1006001,
      name: "Baby (Youth Form)",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1006081,
      name: "Ox King",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- DEF 150%{passiveImg:up_g}\n- \"DB Saga\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1006251,
      name: "Gohan (GT)",
      element: 10,
      rarity: 3,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1006271,
      name: "Gohan Possessed (GT)",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +2 and DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1006281,
      name: "Goten Possessed (GT)",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +2"
    },
    {
      id: 1006291,
      name: "Trunks Possessed (GT)",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +2 and DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1007021,
      name: "Botamo",
      element: 14,
      rarity: 3,
      itemized_description: "*When receiving an attack*\n- High chance of damage reduction rate 50%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1007031,
      name: "Frost",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1007041,
      name: "Frost (Assault Form)",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 10%{passiveImg:down_y}"
    },
    {
      id: 1007051,
      name: "Frost (Final Form)",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1007061,
      name: "Cabba",
      element: 11,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1007081,
      name: "Magetta",
      element: 13,
      rarity: 3,
      itemized_description: "*When facing 2 or more enemies*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1007301,
      name: "Goku (GT)",
      element: 11,
      rarity: 3,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}"
    },
    {
      id: 1007751,
      name: "Vegeta",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Medium chance of ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1007761,
      name: "Nappa",
      element: 22,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1007901,
      name: "Krillin",
      element: 14,
      rarity: 3,
      itemized_description: "*When HP is 80% or less*\n- Ki +3 and ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1008021,
      name: "Vegeta (GT)",
      element: 10,
      rarity: 3,
      itemized_description: "*As the 1st attacker in a turn*\n- ATK & DEF 2000{passiveImg:up_g}"
    },
    {
      id: 1008271,
      name: "Trunks (Kid)",
      element: 10,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1008501,
      name: "Goku",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1008601,
      name: "Goku Black",
      element: 21,
      rarity: 3,
      itemized_description: "*If the character's Ki is 7 or more when all allies attacking in\nthe same turn have obtained a Ki Sphere*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1008771,
      name: "Androids #17 & #18",
      element: 20,
      rarity: 3,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1009441,
      name: "Tarble",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to AGL"
    },
    {
      id: 1009551,
      name: "Trunks (Teen) (Future)",
      element: 13,
      rarity: 3,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1009681,
      name: "Fusion Zamasu",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1010521,
      name: "Android #17",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to PHY"
    },
    {
      id: 1010531,
      name: "Hell Fighter #17",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to TEQ"
    },
    {
      id: 1010591,
      name: "Majin Buu (South Supreme Kai)",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1010641,
      name: "Goku (Angel)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- High chance of ATK 60%{passiveImg:up_g} and DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010701,
      name: "King Cold (Angel)",
      element: 21,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 25%{passiveImg:down_y}"
    },
    {
      id: 1011221,
      name: "Ranfan",
      element: 14,
      rarity: 3,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1011231,
      name: "Yamcha",
      element: 13,
      rarity: 3,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- Ki +3 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1011491,
      name: "Syn Shenron",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- AGL & TEQ Type allies' Ki +2 and ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1011731,
      name: "Super Saiyan 2 Goku (GT)",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- TEQ & PHY Type allies' Ki +2 and ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1011791,
      name: "Ultimate Gohan",
      element: 11,
      rarity: 3,
      itemized_description: "*When attacking with 10 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011971,
      name: "Frieza (Final Form) (Angel)",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +3"
    },
    {
      id: 1012011,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n*When HP is 50% or more*\n- Ki +3"
    },
    {
      id: 1012171,
      name: "Goku",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n- \"Universe Survival Saga\" Category allies' Ki +2"
    },
    {
      id: 1012341,
      name: "Gokua",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to STR\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1012471,
      name: "Hoi",
      element: 23,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1012481,
      name: "Minotia",
      element: 12,
      rarity: 3,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1012561,
      name: "Chiaotzu",
      element: 24,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- DEF 40%{passiveImg:up_g}\n- Attacked enemy's DEF 40%{passiveImg:down_y} for 3 turn(s)"
    },
    {
      id: 1012591,
      name: "Vegito",
      element: 13,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1012621,
      name: "Vegeta",
      element: 10,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1012841,
      name: "Trunks (Kid)",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Rare chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1012941,
      name: "Super Saiyan Trunks (Future)",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1012971,
      name: "Zamasu",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1013221,
      name: "Bardock",
      element: 10,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1013311,
      name: "Krillin",
      element: 11,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1013351,
      name: "Yamcha",
      element: 12,
      rarity: 3,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +4"
    },
    {
      id: 1013361,
      name: "Great Saiyaman 1 & 2",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +1 and DEF 20%{passiveImg:up_g}\n- Extreme Class enemies' DEF 30%{passiveImg:down_y}"
    },
    {
      id: 1013631,
      name: "Caulifla",
      element: 13,
      rarity: 3,
      itemized_description: "*Per \"Universe Survival Saga\" Category ally on the team*\n- ATK 15%{passiveImg:up_g} (up to 45%)\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1013651,
      name: "Kale",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- \"Universe Survival Saga\" Category allies' Ki +1 and ATK &\nDEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015731,
      name: "Goku (Youth)",
      element: 10,
      rarity: 3,
      itemized_description: "*For every Rainbow Ki Sphere obtained*\n- Ki +1 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1016431,
      name: "Super Saiyan Trunks (GT)",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1017521,
      name: "Goten (Kid)",
      element: 14,
      rarity: 3,
      itemized_description: "*When facing only 1 enemy*\n- DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018171,
      name: "Invisible Man",
      element: 20,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- Great chance of evading enemy's attack\n*When attacking*\n- Disables the enemy's guard\n*For every attack evaded*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1030231,
      name: "Goku (DAIMA)",
      element: 14,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +1 and ATK 20%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1030251,
      name: "Vegeta (DAIMA)",
      element: 12,
      rarity: 3,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +1 and DEF 20%{passiveImg:up_g}\n- High chance of guarding all attacks\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1000011,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 30% or less*\n- Ki +5"
    },
    {
      id: 1000021,
      name: "Super Saiyan Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 30% or less*\n- Ki +2 and ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1000831,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1000841,
      name: "Super Saiyan Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1001391,
      name: "Super Saiyan Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1001401,
      name: "Goku (Kaioken)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1001481,
      name: "Super Saiyan 2 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- Ki +3"
    },
    {
      id: 1001491,
      name: "Super Saiyan Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1001511,
      name: "Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & STR Type allies' Ki +2"
    },
    {
      id: 1001581,
      name: "Frieza (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1001591,
      name: "Super Saiyan Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1001631,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1001691,
      name: "Perfect Cell",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1001701,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1001791,
      name: "Super Saiyan 2 Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1001801,
      name: "Super Trunks",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 5 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1001921,
      name: "Super Saiyan 3 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1001931,
      name: "Majin Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 35%{passiveImg:up_g}"
    },
    {
      id: 1001941,
      name: "Majin Buu (Good)",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 30% or less at the start of turn*\n- Recovers 25% HP"
    },
    {
      id: 1001951,
      name: "Majin Buu (Pure Evil)",
      element: 23,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1001961,
      name: "Buu (Super)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1001971,
      name: "Buu (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn"
    },
    {
      id: 1002021,
      name: "Ultimate Gohan",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002081,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1002091,
      name: "Super Saiyan God SS Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1002101,
      name: "Golden Frieza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1002251,
      name: "Goku (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing 3 or more enemies*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002261,
      name: "Demon King Piccolo (Elder)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 12%{passiveImg:down_y}"
    },
    {
      id: 1002271,
      name: "Demon King Piccolo",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +2"
    },
    {
      id: 1002351,
      name: "Master Roshi (Max Power)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 1800{passiveImg:up_g}"
    },
    {
      id: 1002391,
      name: "Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1002401,
      name: "Gotenks",
      element: 10,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1002451,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every STR Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1002461,
      name: "Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every INT Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1002481,
      name: "Cooler (Final Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 1500{passiveImg:up_g}"
    },
    {
      id: 1002531,
      name: "Fusion Android #13",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1002561,
      name: "Full Power Boujack",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 75%{passiveImg:up_g}"
    },
    {
      id: 1002621,
      name: "Super Saiyan Trunks (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002671,
      name: "Whis",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1002701,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & STR Type allies' Ki +2"
    },
    {
      id: 1002801,
      name: "Super Janemba",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 3000{passiveImg:up_g}\n- Guards all attacks"
    },
    {
      id: 1002811,
      name: "Bardock (Giant Ape)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Chance of turning into Giant Ape\n*When HP is 30% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002821,
      name: "Goku (Youth) (Giant Ape)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Rare chance of turning into Giant Ape\n*When facing 2 or more enemies*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002831,
      name: "Vegeta (Giant Ape)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Rare chance of turning into Giant Ape\n*When HP is 80% or less*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1002911,
      name: "Chiaotzu",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- 25% chance of stunning the attacked enemy"
    },
    {
      id: 1002921,
      name: "Yamcha",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- {passiveImg:once}Ki +8"
    },
    {
      id: 1002931,
      name: "Krillin",
      element: 13,
      rarity: 4,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1002951,
      name: "Great Saiyaman 2",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & INT Type enemies' ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1002991,
      name: "Super Saiyan Trunks (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +2"
    },
    {
      id: 1003021,
      name: "Super Saiyan Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1003031,
      name: "Super Saiyan 2 Goku (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 9 or more Ki*\n- Ki +3 and ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1003041,
      name: "Super Saiyan 3 Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*When facing 3 or less enemies*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1003071,
      name: "Super Saiyan 3 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- Damage reduction rate 60%{passiveImg:up_g}"
    },
    {
      id: 1003181,
      name: "Super Saiyan 2 Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +2"
    },
    {
      id: 1003191,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 80% or more*\n- ATK & DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1003201,
      name: "Super Saiyan 2 Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR & PHY Type allies' Ki +2"
    },
    {
      id: 1003211,
      name: "Super Saiyan 3 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1003231,
      name: "Super Saiyan 2 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1003241,
      name: "Super Saiyan 3 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1003261,
      name: "Super Saiyan Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1003271,
      name: "Super Saiyan 2 Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*If the character's Ki is 5 or more when all allies attacking in\nthe same turn have obtained a Ki Sphere*\n- All allies' ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1003291,
      name: "Super Trunks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1003301,
      name: "Perfect Cell",
      element: 21,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}"
    },
    {
      id: 1003311,
      name: "Buu (Kid)",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 80% or more*\n- All allies' ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1003321,
      name: "Frieza (Full Power)",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1003341,
      name: "Goku (Kaioken)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to Rainbow"
    },
    {
      id: 1003351,
      name: "Super Saiyan God Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR & PHY Type allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1003361,
      name: "Beerus",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 150%{passiveImg:up_g}"
    },
    {
      id: 1003371,
      name: "Whis",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1003381,
      name: "Hatchiyack",
      element: 24,
      rarity: 4,
      itemized_description: "*After delivering a final blow*\n- Recovers 40% HP at the end of turn"
    },
    {
      id: 1003501,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1003531,
      name: "Master Roshi (Max Power)",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1003581,
      name: "Great Saiyaman",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1003591,
      name: "Great Saiyaman 2",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 1000{passiveImg:up_g}"
    },
    {
      id: 1003601,
      name: "Super Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1003611,
      name: "Cooler (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1003661,
      name: "Turles",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1003671,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1003691,
      name: "Super Saiyan God Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 75%{passiveImg:up_g}"
    },
    {
      id: 1003721,
      name: "Paikuhan",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1003761,
      name: "Perfect Cell",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1003771,
      name: "Buu (Kid)",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 80% or more*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1003781,
      name: "Android #18",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to INT\n- Weakens Regeneration"
    },
    {
      id: 1003791,
      name: "Android #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to Rainbow\n- Weakens Regeneration"
    },
    {
      id: 1003801,
      name: "Legendary Super Saiyan Broly ",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking*\n- DEF 100000{passiveImg:down_r}\n- ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1003831,
      name: "Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing 3 or more enemies*\n- Ki +3"
    },
    {
      id: 1003991,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1004001,
      name: "Majuub",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 80% or more*\n- ATK & DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1004011,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & TEQ Type allies' Ki +2"
    },
    {
      id: 1004041,
      name: "Super Saiyan Vegeta (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1004071,
      name: "Super Saiyan God SS Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to TEQ"
    },
    {
      id: 1004081,
      name: "Super Saiyan God SS Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to PHY"
    },
    {
      id: 1004091,
      name: "Golden Frieza",
      element: 20,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Damage reduction rate 80%{passiveImg:up_g}"
    },
    {
      id: 1004101,
      name: "Hercule",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of ATK 80%{passiveImg:down_r}"
    },
    {
      id: 1004171,
      name: "Jackie Chun",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1004201,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Rare chance of ATK 150%{passiveImg:up_g}"
    },
    {
      id: 1004211,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*As the 3rd attacker in a turn*\n- Ki +4 and ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1004221,
      name: "Super Saiyan 3 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1004251,
      name: "Frieza (Full Power)",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1004301,
      name: "Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 2500{passiveImg:up_g}"
    },
    {
      id: 1004341,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Disables Rampage\n*When HP is 80% or more*\n- Ki +2\n- ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1004351,
      name: "Super Saiyan Gohan (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Disables Rampage\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1004361,
      name: "Super Saiyan Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to Rainbow\n- Disables Rampage"
    },
    {
      id: 1004371,
      name: "Super Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & PHY Type allies' Ki +2\n- Weakens Regeneration"
    },
    {
      id: 1004381,
      name: "Super Saiyan Bardock",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1004391,
      name: "Majin Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1004401,
      name: "Cell (Perfect Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 12%{passiveImg:down_y}"
    },
    {
      id: 1004411,
      name: "Buu (Super)",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1004421,
      name: "Frieza (Final Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1004471,
      name: "Grand Supreme Kai",
      element: 12,
      rarity: 4,
      itemized_description: "*For every INT Ki Sphere obtained*\n- Recovers 2000 HP"
    },
    {
      id: 1004481,
      name: "Android #18",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1004491,
      name: "Babidi",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 20000{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}, {passiveImg:def_down}\nor {passiveImg:stun}*\n- ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1004511,
      name: "Grandpa Gohan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 2000{passiveImg:up_g}"
    },
    {
      id: 1004521,
      name: "Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of all allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1004531,
      name: "Krillin",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of TEQ Type allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1004601,
      name: "Metal Cooler",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1004651,
      name: "Perfect Cell",
      element: 21,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1004681,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1004691,
      name: "Super Saiyan Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1004701,
      name: "Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1004711,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1004721,
      name: "Super Saiyan Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1004741,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1004751,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +2"
    },
    {
      id: 1004881,
      name: "Beerus",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 200%{passiveImg:up_g}"
    },
    {
      id: 1004891,
      name: "Whis",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 30% or less*\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1004901,
      name: "Android #13",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1004911,
      name: "Fusion Android #13",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to Rainbow"
    },
    {
      id: 1004931,
      name: "Boujack",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1004941,
      name: "Full Power Boujack",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1004951,
      name: "Kami",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1004961,
      name: "Towa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2"
    },
    {
      id: 1004971,
      name: "Mira",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1004981,
      name: "Demigra",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1004991,
      name: "Super Saiyan Trunks (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1005001,
      name: "Buu (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 12% HP at the start of turn"
    },
    {
      id: 1005011,
      name: "Frieza (Full Power)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 60%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +1 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1005031,
      name: "Super Saiyan 3 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1005051,
      name: "Super Janemba",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 5000{passiveImg:up_g}\n- Guards all attacks"
    },
    {
      id: 1005071,
      name: "Super Saiyan Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Rare chance of ATK 180%{passiveImg:up_g}"
    },
    {
      id: 1005081,
      name: "Super Saiyan Vegeta (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or less*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1005111,
      name: "Lord Slug",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 30% or less*\n- Recovers 30% HP"
    },
    {
      id: 1005121,
      name: "Turles",
      element: 21,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- Ki +3"
    },
    {
      id: 1005131,
      name: "Nappa (Giant Ape)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' ATK & DEF 25%{passiveImg:up_g}\n- {passiveImg:once}Very rare chance of turning into Giant Ape"
    },
    {
      id: 1005141,
      name: "Raditz (Giant Ape)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Rare chance of turning into Giant Ape\n*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1005151,
      name: "Turles (Giant Ape)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Chance of turning into Giant Ape\n*When attacking with 9 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005161,
      name: "Super Saiyan Goku (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK 4000{passiveImg:up_g}"
    },
    {
      id: 1005171,
      name: "Piccolo Jr. (Giant Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 12%{passiveImg:down_y}\n- {passiveImg:once}Rare chance of turning into Giant Form"
    },
    {
      id: 1005181,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1005191,
      name: "Super Saiyan 2 Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1005201,
      name: "Super Saiyan Bardock",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 4000{passiveImg:up_g}"
    },
    {
      id: 1005211,
      name: "Great Saiyaman (SS2)",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005221,
      name: "Super Saiyan God Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 75%{passiveImg:up_g}"
    },
    {
      id: 1005261,
      name: "Vegito",
      element: 12,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1005271,
      name: "Super Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacks are effective against all Types\n- ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1005281,
      name: "Super Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacks are effective against all Types\n- ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1005291,
      name: "Beerus",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005301,
      name: "Beerus",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 60%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Rages"
    },
    {
      id: 1005311,
      name: "Whis",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1005321,
      name: "Whis",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y} and high chance of stunning\nthe attacked enemy"
    },
    {
      id: 1005341,
      name: "Super Saiyan Gotenks",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005351,
      name: "Super Saiyan God Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1005361,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1005391,
      name: "Super Saiyan Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +4 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1005401,
      name: "Super Saiyan Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1005411,
      name: "Gotenks",
      element: 13,
      rarity: 4,
      itemized_description: "*As the 1st attacker in a turn*\n- ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1005441,
      name: "Bio-Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 50%{passiveImg:down_r} and DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 100%{passiveImg:up_g} and DEF 50%{passiveImg:down_r}"
    },
    {
      id: 1005501,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2"
    },
    {
      id: 1005531,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1005541,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or less*\n- Ki +7"
    },
    {
      id: 1005551,
      name: "Super Saiyan Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Ki +3 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1005571,
      name: "Super Saiyan Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1005581,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1005621,
      name: "Super Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing 2 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1005631,
      name: "Beerus",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Rages"
    },
    {
      id: 1005641,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*If HP is 30% or more when receiving an attack*\n- Survives K.O. attacks (up to once within a turn)"
    },
    {
      id: 1005661,
      name: "Super Saiyan Goten (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1005671,
      name: "Super Saiyan Trunks (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1005681,
      name: "Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1005691,
      name: "King Cold",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1005711,
      name: "Cyborg Tao",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005721,
      name: "Mighty Mask",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing 2 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1005731,
      name: "Super Saiyan 3 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*For 7 turns from the character's entry turn*\n- Damage reduction rate 80%{passiveImg:up_g}"
    },
    {
      id: 1005741,
      name: "Super Saiyan 3 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1005751,
      name: "Majuub",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 7000{passiveImg:up_g}"
    },
    {
      id: 1005761,
      name: "Mr. Buu",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to Rainbow\n*For every Rainbow Ki Sphere obtained*\n- Recovers 5000 HP"
    },
    {
      id: 1005771,
      name: "Super Saiyan Goku (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1005781,
      name: "Super Saiyan Trunks (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1005801,
      name: "Hell Fighter #17",
      element: 22,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1005811,
      name: "Android #18 (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 70%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 70%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1005841,
      name: "Beerus",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1005931,
      name: "Hyper Meta-Rilldo",
      element: 23,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 4000{passiveImg:up_g}"
    },
    {
      id: 1005941,
      name: "Meta-Rilldo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 10000{passiveImg:up_g}"
    },
    {
      id: 1005991,
      name: "Super #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1006011,
      name: "Baby Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*As the 1st attacker in a turn*\n- ATK & DEF 3500{passiveImg:up_g}"
    },
    {
      id: 1006021,
      name: "Super Baby 1",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1006031,
      name: "Super Baby 2",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1006211,
      name: "Super Saiyan 3 Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 9 or more Ki*\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1006301,
      name: "SS Gohan Possessed (GT)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3 and DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1006311,
      name: "SS Goten Possessed (GT)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +3"
    },
    {
      id: 1006321,
      name: "SS Trunks Possessed (GT)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +3 and DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1006331,
      name: "Syn Shenron",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' DEF 30%{passiveImg:down_y}\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1006351,
      name: "Eis Shenron",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1006361,
      name: "Nuova Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1006411,
      name: "Omega Shenron",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 20%{passiveImg:down_y}\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1006431,
      name: "Champa",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g} when facing only 1 enemy\n*After receiving an attack*\n- ATK 100%{passiveImg:up_g} and performs a critical hit for 4 turn(s)\n*When there is a \"Realm of Gods\" Category enemy*\n- High chance of evading enemy's attack\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1006481,
      name: "Fasha (Giant Ape)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to STR\n- {passiveImg:once}Chance of turning into Giant Ape"
    },
    {
      id: 1006491,
      name: "Shugesh (Giant Ape)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 5000{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape"
    },
    {
      id: 1006501,
      name: "Borgos (Giant Ape)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Chance of turning into Giant Ape\n*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1006511,
      name: "Tora (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Chance of turning into Giant Ape\n*When HP is 80% or less*\n- All allies' Ki +3"
    },
    {
      id: 1006521,
      name: "Super Baby 2 (Giant Ape)",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 100%{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape"
    },
    {
      id: 1006551,
      name: "King Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Ki +4"
    },
    {
      id: 1006561,
      name: "Paikuhan",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1006571,
      name: "Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1006581,
      name: "Android #16",
      element: 22,
      rarity: 4,
      itemized_description: "*After guard is activated*\n- Damage reduction rate 55%{passiveImg:up_g}"
    },
    {
      id: 1006591,
      name: "Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1006601,
      name: "Tien",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning all enemies"
    },
    {
      id: 1006611,
      name: "Gotenks (Failure) A",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every PHY Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1006621,
      name: "Gotenks (Failure) B",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every Ki Sphere obtained*\n- ATK & DEF 5%{passiveImg:up_g}"
    },
    {
      id: 1006641,
      name: "Chilled",
      element: 22,
      rarity: 4,
      itemized_description: "*For every INT Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1006651,
      name: "Vegeta (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1006661,
      name: "Goku (Kaioken)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 7000{passiveImg:up_g} and DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1006671,
      name: "Ultimate Gohan",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1006681,
      name: "Ultimate Gohan",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- Ki +4 and ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1006691,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1006701,
      name: "Ultimate Gohan",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- Ki +5 and ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1006711,
      name: "Majin Buu (Good)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to STR\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1006721,
      name: "Buu (Super)",
      element: 24,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- Recovers 1000 HP"
    },
    {
      id: 1006731,
      name: "Majin Buu (Pure Evil)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1006741,
      name: "Super Saiyan 2 Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1006751,
      name: "Super Saiyan 3 Goku (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1006761,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to INT\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1006771,
      name: "Super Saiyan Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 40%{passiveImg:down_y}"
    },
    {
      id: 1006781,
      name: "Super Saiyan Bardock",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to TEQ\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1006791,
      name: "Super Vegito",
      element: 10,
      rarity: 4,
      itemized_description: "*When receiving a normal attack*\n- Damage reduction rate 80%{passiveImg:up_g} temporarily and counters\nwith tremendous power"
    },
    {
      id: 1007011,
      name: "Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1007071,
      name: "Super Saiyan Cabba",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1007091,
      name: "Hit",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1007101,
      name: "Hit",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1007121,
      name: "Majin Buu (Good)",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 40% or less at the start of turn*\n- Recovers 25% HP"
    },
    {
      id: 1007141,
      name: "Super Saiyan Bardock",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1007171,
      name: "Super #17",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to TEQ\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1007181,
      name: "Super #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 40%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1007191,
      name: "Super Saiyan Gotenks",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1007201,
      name: "Super Saiyan Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to Rainbow\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1007211,
      name: "Super Saiyan Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +3"
    },
    {
      id: 1007311,
      name: "Yamcha",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 2000{passiveImg:up_g}"
    },
    {
      id: 1007321,
      name: "Yamcha",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:down_r}"
    },
    {
      id: 1007331,
      name: "Yamcha",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 2000{passiveImg:up_g}"
    },
    {
      id: 1007341,
      name: "Yamcha",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:down_r}"
    },
    {
      id: 1007351,
      name: "Mecha Frieza",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1007361,
      name: "Pan (GT) (Honey)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 25% of damage dealt as HP"
    },
    {
      id: 1007371,
      name: "Super Saiyan God SS Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*For every PHY Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1007381,
      name: "Super Saiyan God SS Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*For every TEQ Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1007391,
      name: "Golden Frieza",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Damage reduction rate 70%{passiveImg:up_g}\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1007411,
      name: "Majin Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*For every attack performed*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 120%)\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 90%)"
    },
    {
      id: 1007421,
      name: "Super Paikuhan",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1007431,
      name: "Gotenks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2 and ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1007441,
      name: "Super Saiyan Gotenks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1007451,
      name: "Legendary Super Saiyan Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 10 or more Ki*\n- ATK 5000{passiveImg:up_g}\n- Launches an additional Super Attack"
    },
    {
      id: 1007461,
      name: "Legendary Super Saiyan Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 7000{passiveImg:up_g}\n- Launches an additional Super Attack"
    },
    {
      id: 1007611,
      name: "Super Saiyan 2 Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +3"
    },
    {
      id: 1007621,
      name: "Super Saiyan 2 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1007661,
      name: "Super Trunks",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- Ki +2 and ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1007671,
      name: "Goku (Youth) (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Rare chance of turning into Giant Ape\n*When HP is 30% or more*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1007681,
      name: "Vegeta (Giant Ape)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Chance of turning into Giant Ape (up to 2 time(s))\n*When HP is 80% or less*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1007701,
      name: "Cooler (Final Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1007711,
      name: "Baby Janemba",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- ATK & DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1007721,
      name: "Buu (Kid) (Babidi)",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- All allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1007741,
      name: "Super Saiyan 3 Gotenks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1007771,
      name: "Baby (Youth Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*After receiving an attack*\n- Recovers 20% HP at the end of turn"
    },
    {
      id: 1007781,
      name: "Super Saiyan Goten (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1007811,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1007831,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:down_r}"
    },
    {
      id: 1007841,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n- DEF 60%{passiveImg:down_r}"
    },
    {
      id: 1007861,
      name: "Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 90%)"
    },
    {
      id: 1007881,
      name: "Super Saiyan Goten (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*When receiving an attack*\n- High chance of damage reduction rate 40%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1007891,
      name: "Super Saiyan Trunks (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1007921,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK 15000{passiveImg:up_g}\n- DEF 7000{passiveImg:up_g}"
    },
    {
      id: 1007931,
      name: "Super Saiyan 3 Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 9 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1007941,
      name: "Android #18",
      element: 23,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1007951,
      name: "Champa",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of ATK 200%{passiveImg:up_g}"
    },
    {
      id: 1007971,
      name: "Demon King Piccolo",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +3 and ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1007981,
      name: "Demon King Piccolo (Elder)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 25%{passiveImg:down_y}"
    },
    {
      id: 1008011,
      name: "Bio-Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 50%{passiveImg:down_r} and DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 70%{passiveImg:up_g} and DEF 50%{passiveImg:down_r}"
    },
    {
      id: 1008031,
      name: "Trunks (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Ki +4 and ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1008071,
      name: "Android #18",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1008081,
      name: "Goku (Kaioken)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to Rainbow\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1008091,
      name: "Majin Buu (Ultimate Gohan)",
      element: 22,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}\n- Recovers 3000 HP"
    },
    {
      id: 1008101,
      name: "Majin Buu (Ultimate Gohan)",
      element: 22,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}\n- Recovers 2500 HP"
    },
    {
      id: 1008111,
      name: "Majin Buu (Gotenks)",
      element: 23,
      rarity: 4,
      itemized_description: "*For every STR Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1008121,
      name: "Majin Buu (Piccolo)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 30% of damage dealt as HP"
    },
    {
      id: 1008131,
      name: "Majin Buu (South Supreme Kai)",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- Ki +2 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008141,
      name: "Buu (Kid)",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Ki +2 and ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1008151,
      name: "West Supreme Kai",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Realm of Gods\" Category ally on the team*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1008181,
      name: "Super Saiyan 3 Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1008191,
      name: "Super Saiyan 3 Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1008261,
      name: "Trunks (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1008291,
      name: "Super Saiyan 3 Goku (GT) (Golden Giant Ape)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 33%{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape"
    },
    {
      id: 1008341,
      name: "Karoly",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008351,
      name: "Yamhan",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- {passiveImg:once}Ki +5 and ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1008361,
      name: "Goku (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*As the 1st attacker in a turn*\n- All allies' ATK & DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1008371,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- Recovers 7% HP at the start of turn"
    },
    {
      id: 1008381,
      name: "Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1008391,
      name: "Super Saiyan God SS Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- All allies' ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1008411,
      name: "Super Vegito",
      element: 10,
      rarity: 4,
      itemized_description: "*When receiving a normal attack*\n- Damage reduction rate 70%{passiveImg:up_g} temporarily and counters\nwith enormous power"
    },
    {
      id: 1008421,
      name: "Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1008431,
      name: "Vegito",
      element: 12,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1008441,
      name: "Trunks (Xeno)",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1008451,
      name: "Piccolo Jr.",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Turtle School\" Category enemy*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki starting from the 3rd turn\nfrom the character's entry turn*\n- {passiveImg:once}ATK 200%{passiveImg:up_g}\n- {passiveImg:once}Stuns the enemy for 2 turn(s)"
    },
    {
      id: 1008481,
      name: "Bulma (Bunny)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1008491,
      name: "Bulma (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning all enemies\n- All allies' Ki +2"
    },
    {
      id: 1008511,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1008521,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 7000{passiveImg:up_g}"
    },
    {
      id: 1008531,
      name: "Super Saiyan Gohan (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1008541,
      name: "Super Saiyan Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1008551,
      name: "Super Saiyan 2 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008561,
      name: "Super Saiyan 2 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- All allies' Ki +3"
    },
    {
      id: 1008571,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1008581,
      name: "Super Saiyan 2 Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1008591,
      name: "Ultimate Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +2 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008611,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1008621,
      name: "Super Saiyan God SS Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to TEQ\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1008631,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For 10 turn(s) from the character's entry turn*\n- ATK 20000{passiveImg:up_g}\n- DEF 10000{passiveImg:up_g}"
    },
    {
      id: 1008641,
      name: "Turles",
      element: 22,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +3 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1008651,
      name: "Coolieza",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008661,
      name: "Pandel",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1008671,
      name: "Barlot",
      element: 13,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1008681,
      name: "Chiaoman",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or less*\n- {passiveImg:once}Ki +8 and ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1008691,
      name: "Bulpan",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +3"
    },
    {
      id: 1008701,
      name: "Janembu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 30%{passiveImg:down_y}"
    },
    {
      id: 1008711,
      name: "Omega Shenron",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK 30%{passiveImg:down_y}\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1008721,
      name: "Syn Shenron",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' DEF 20%{passiveImg:down_y}\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1008731,
      name: "Golden Frieza",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Damage reduction rate 50%{passiveImg:up_g}\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1008741,
      name: "Golden Frieza",
      element: 20,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Damage reduction rate 90%{passiveImg:up_g}"
    },
    {
      id: 1008751,
      name: "Golden Frieza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1008761,
      name: "Super Saiyan 3 Vegeta (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1008781,
      name: "Androids #17 & #18",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 8000{passiveImg:up_g}"
    },
    {
      id: 1008791,
      name: "Androids #17 & #18",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1008811,
      name: "Perfect Cell",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1008821,
      name: "Perfect Cell",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1008831,
      name: "Cell (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 30% of damage dealt as HP"
    },
    {
      id: 1008841,
      name: "Goku Black",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2\n*For every Ki Sphere obtained*\n- ATK 2500{passiveImg:up_g}"
    },
    {
      id: 1008851,
      name: "Goku Black",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +3\n*For every Ki Sphere obtained*\n- ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1008861,
      name: "Trunks (Teen) (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1008871,
      name: "Super Saiyan Trunks (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1008881,
      name: "Mai (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1008891,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 180%{passiveImg:up_g}"
    },
    {
      id: 1008901,
      name: "Tekka",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of all allies' ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1008911,
      name: "Pinich",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1008921,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Disables Rampage\n*When HP is 30% or more*\n- Ki +3 and ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1008931,
      name: "Super Saiyan Gohan (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Disables Rampage\n*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1008941,
      name: "Super Saiyan Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Disables Rampage\n- Changes Ki Spheres: PHY to Rainbow\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1008951,
      name: "Arale Norimaki",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1008961,
      name: "Arale Norimaki",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1008971,
      name: "Arale Norimaki",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1008981,
      name: "Arale Norimaki",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1008991,
      name: "Arale Norimaki",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 9 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1009001,
      name: "Arale Norimaki",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 7 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1009011,
      name: "Arale Norimaki",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- Ki +3 and ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1009021,
      name: "Goku (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*As the 1st attacker in a turn*\n- ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1009031,
      name: "Sourman",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- Ki +5\n- All enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1009041,
      name: "Arale Norimaki",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 10%{passiveImg:down_y} for 3 turn(s)"
    },
    {
      id: 1009051,
      name: "Obotchaman",
      element: 10,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1009061,
      name: "General Blue",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of all enemies' ATK 20%{passiveImg:down_y}"
    },
    {
      id: 1009071,
      name: "Mercenary Tao",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009081,
      name: "Cooler (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack"
    },
    {
      id: 1009091,
      name: "Cooler (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a chance of becoming\na Super Attack"
    },
    {
      id: 1009101,
      name: "Cooler (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1009111,
      name: "Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 7500{passiveImg:up_g}"
    },
    {
      id: 1009121,
      name: "Jaco",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of evading enemy's attack\n- Attacked enemy's ATK & DEF 10%{passiveImg:down_y} for 2 turn(s)\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1009131,
      name: "Jaco",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 140%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Great chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- High chance of evading enemy's attack\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When attacking an Extreme Class enemy*\n- ATK 60%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1009141,
      name: "Raditz",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1009161,
      name: "Zamasu",
      element: 23,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Recovers 7% HP\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1009191,
      name: "Super Saiyan Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +2 and ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1009211,
      name: "Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 2500{passiveImg:up_g}\n- DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1009221,
      name: "Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 4000{passiveImg:up_g}\n- DEF 8000{passiveImg:up_g}"
    },
    {
      id: 1009241,
      name: "Karoly",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1009251,
      name: "Pandel",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1009261,
      name: "Bulpan",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' Ki +3"
    },
    {
      id: 1009281,
      name: "Great Saiyaman",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of AGL Type allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009291,
      name: "Nappa",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of PHY Type allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009301,
      name: "Dabura",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of INT Type allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009311,
      name: "Master Roshi (Max Power)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of STR Type allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009321,
      name: "Super Saiyan God SS Vegito",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack\n- High chance of launching an additional attack that has a rare\nchance of becoming a Super Attack\n*When receiving a normal attack*\n- Damage reduction rate 20%{passiveImg:up_g} temporarily and counters\nwith enormous power"
    },
    {
      id: 1009331,
      name: "Super Saiyan God SS Vegito",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a chance of becoming\na Super Attack\n- Great chance of launching an additional attack that has a\nchance of becoming a Super Attack\n*When receiving a normal attack*\n- Damage reduction rate 30%{passiveImg:up_g} temporarily and counters\nwith tremendous power"
    },
    {
      id: 1009341,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1009351,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +3\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009361,
      name: "Frieza (1st Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 5000{passiveImg:up_g} and DEF 2000{passiveImg:up_g}"
    },
    {
      id: 1009371,
      name: "Frieza (1st Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 8000{passiveImg:up_g} and DEF 4000{passiveImg:up_g}"
    },
    {
      id: 1009391,
      name: "Super Janemba",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to AGL\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009421,
      name: "Super Saiyan 4 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\nenormous power"
    },
    {
      id: 1009431,
      name: "Super Saiyan 4 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 150%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1009481,
      name: "Great Saiyaman (SS2)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1009491,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1009501,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1009511,
      name: "Zamasu",
      element: 23,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- Recovers 10% HP\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1009521,
      name: "Arale Norimaki",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 15%{passiveImg:down_y} for 3 turn(s)"
    },
    {
      id: 1009531,
      name: "Super Saiyan God SS Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1009541,
      name: "Super Saiyan God SS Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1009561,
      name: "Super Saiyan Trunks (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1009571,
      name: "Super Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to INT\n*For every INT Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1009581,
      name: "Super Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to INT\n*For every INT Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1009591,
      name: "Super Saiyan God SS Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class enemies' ATK & DEF 20%{passiveImg:down_y}\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009601,
      name: "Fusion Zamasu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK 15%{passiveImg:down_r}\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009611,
      name: "Captain Ginyu",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +1 and ATK 3000{passiveImg:up_g}"
    },
    {
      id: 1009621,
      name: "Captain Ginyu",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1009641,
      name: "Buu (Kid)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*When HP is 30% or more*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1009651,
      name: "Buu (Kid)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}\n*When HP is 40% or more*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1009661,
      name: "Majin Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009701,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1009711,
      name: "Super Saiyan God SS Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1009721,
      name: "Super Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1009731,
      name: "Super Saiyan God SS Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to PHY\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1009741,
      name: "Super Saiyan God SS Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009751,
      name: "Super Saiyan God SS Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class enemies' ATK & DEF 15%{passiveImg:down_y}\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1009761,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1009771,
      name: "Super Trunks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK 60%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1009781,
      name: "Super Trunks",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1009791,
      name: "Fusion Zamasu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK 10%{passiveImg:down_r}\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1009801,
      name: "Monster Carrot",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning the attacked enemy"
    },
    {
      id: 1009811,
      name: "Yamcha",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing 2 or more enemies*\n- DEF 100%{passiveImg:down_r}\n- ATK 4000{passiveImg:up_g}"
    },
    {
      id: 1009821,
      name: "Super Saiyan 4 Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\nenormous power"
    },
    {
      id: 1009831,
      name: "Super Saiyan 4 Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1009861,
      name: "Super Saiyan Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1009871,
      name: "Goku (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1009881,
      name: "Super Saiyan 2 Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- All allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1009891,
      name: "Super Saiyan 2 Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1009901,
      name: "Majin Buu (Pure Evil)",
      element: 23,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- ATK 18000{passiveImg:up_g}"
    },
    {
      id: 1009911,
      name: "Nuova Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1009921,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK 10000{passiveImg:up_g} and DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1009931,
      name: "Metal Cooler",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK 30%{passiveImg:up_g}\n- Extreme Class allies' Ki +2"
    },
    {
      id: 1009941,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1009951,
      name: "Super Saiyan Goku (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*If the character's Ki is 7 or more when all allies attacking in\nthe same turn have obtained a Ki Sphere*\n- ATK & DEF 9000{passiveImg:up_g}"
    },
    {
      id: 1009961,
      name: "Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing 2 or more enemies*\n- Ki +3 and ATK 15000{passiveImg:up_g}"
    },
    {
      id: 1009971,
      name: "Beerus",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1009981,
      name: "Turles",
      element: 21,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1009991,
      name: "Pan (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1010001,
      name: "Pan (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010011,
      name: "Super Saiyan Trunks (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1010021,
      name: "Super Saiyan Trunks (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1010031,
      name: "Super Saiyan Vegeta (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 99% or less*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1010041,
      name: "Frieza (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1010051,
      name: "Super Saiyan Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1010061,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1010091,
      name: "Videl",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y}\n- Recovers 20% of damage dealt as HP"
    },
    {
      id: 1010101,
      name: "Bulma (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n*For every Rainbow Ki Sphere obtained*\n- Recovers 7777 HP"
    },
    {
      id: 1010111,
      name: "Android #18",
      element: 21,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1010121,
      name: "Mai (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +3 and ATK & DEF 2000{passiveImg:up_g}"
    },
    {
      id: 1010131,
      name: "Pan (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK 50%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1010141,
      name: "Gohan (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or less*\n- {passiveImg:once}ATK 200%{passiveImg:up_g}\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1010151,
      name: "Majin Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1010171,
      name: "Buu (Super)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +3\n- Extreme PHY Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010181,
      name: "Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +3\n- Super PHY Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010191,
      name: "Thouser",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & TEQ Type allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1010201,
      name: "Cell (2nd Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3\n- Extreme TEQ Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010211,
      name: "Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3\n- Super TEQ Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010221,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +3\n- Extreme INT Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010231,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +3\n- Super INT Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010241,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1010251,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 7000{passiveImg:up_g}"
    },
    {
      id: 1010261,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1010271,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*As the 3rd attacker in a turn*\n- Ki +5 and ATK 12000{passiveImg:up_g}"
    },
    {
      id: 1010281,
      name: "Masked Saiyan",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing 2 or less enemies*\n- ATK 40000{passiveImg:up_g} and DEF 15000{passiveImg:up_g}"
    },
    {
      id: 1010291,
      name: "Masked Saiyan",
      element: 21,
      rarity: 4,
      itemized_description: "*When facing 2 or less enemies*\n- ATK 50000{passiveImg:up_g} and DEF 20000{passiveImg:up_g}"
    },
    {
      id: 1010301,
      name: "Super Saiyan Bardock",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to TEQ\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1010311,
      name: "Super Saiyan Bardock",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1010321,
      name: "Super Saiyan 2 Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- All allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1010331,
      name: "Bulma (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4\n*For every Rainbow Ki Sphere obtained*\n- Recovers 8888 HP"
    },
    {
      id: 1010351,
      name: "Goku Jr.",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}\n- High chance of ATK 30%{passiveImg:up_g} and DEF 60%{passiveImg:down_r}"
    },
    {
      id: 1010361,
      name: "Super Saiyan Goku Jr.",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}\n- Great chance of ATK 40%{passiveImg:up_g} and DEF 40%{passiveImg:down_r}"
    },
    {
      id: 1010411,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & STR Type allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1010421,
      name: "Broly",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 50000{passiveImg:up_g} and DEF 15000{passiveImg:down_r}\n- Launches an additional Super Attack"
    },
    {
      id: 1010431,
      name: "Super Saiyan Broly",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 60000{passiveImg:up_g} and DEF 18000{passiveImg:down_r}\n- Launches an additional Super Attack"
    },
    {
      id: 1010451,
      name: "Full Power Boujack",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1010461,
      name: "Full Power Boujack",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1010471,
      name: "Zangya",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn"
    },
    {
      id: 1010481,
      name: "Android #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to Rainbow\n- ATK 40%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1010491,
      name: "Android #18",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: Rainbow to INT\n- ATK & DEF 30%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1010501,
      name: "Yamcha",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing 2 or more enemies*\n- DEF 100%{passiveImg:down_r}\n- ATK 5000{passiveImg:up_g}"
    },
    {
      id: 1010511,
      name: "Saibaiman",
      element: 23,
      rarity: 4,
      itemized_description: "*When facing 3 or less enemies*\n- {passiveImg:once}ATK & DEF 81%{passiveImg:up_g}"
    },
    {
      id: 1010541,
      name: "Android #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & INT Type allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1010551,
      name: "Hell Fighter #17",
      element: 22,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1010561,
      name: "Android #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & INT Type allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1010571,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every STR Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1010581,
      name: "Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*For every INT Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1010601,
      name: "Buu (Kid)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1010611,
      name: "孫悟空(少年期)",
      element: 13,
      rarity: 4,
      itemized_description: "*As the 1st attacker in a turn*\n- Ki +2 and ATK 6000{passiveImg:up_g}"
    },
    {
      id: 1010621,
      name: "則巻アラレ",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- Ki +3 and ATK 4000{passiveImg:up_g}"
    },
    {
      id: 1010631,
      name: "Paikuhan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- All enemies' DEF 40%{passiveImg:down_y}"
    },
    {
      id: 1010651,
      name: "Super Saiyan Goku (Angel)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4\n- Great chance of ATK 80%{passiveImg:up_g} and DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010661,
      name: "Super Saiyan Goku (Angel) (Super Kaioken)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK 120%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1010671,
      name: "Super Saiyan Goku (Angel) (Super Kaioken)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Chance of evading enemy's attack\n*When HP is 30% or more*\n- Ki +3\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1010681,
      name: "Perfect Cell (Angel)",
      element: 20,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g} and DEF 5%{passiveImg:up_g}"
    },
    {
      id: 1010691,
      name: "Frieza (Final Form) (Angel)",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g} and DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1010711,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & INT Type allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1010721,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to INT\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1010731,
      name: "Super Saiyan God Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1010741,
      name: "Super Saiyan God Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR & PHY Type allies' Ki +2 and ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1010751,
      name: "Super Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL, STR & PHY Type allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1010771,
      name: "Super Saiyan Trunks (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & STR Type allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1010781,
      name: "Raditz (Giant Ape)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Chance of turning into Giant Ape (up to 2 time(s))\n*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1010791,
      name: "Fusion Android #13",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to Rainbow\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1010801,
      name: "Fusion Android #13",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- Ki +4 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1010811,
      name: "Goku (Youth) (Giant Ape)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Chance of turning into Giant Ape (up to 2 time(s))"
    },
    {
      id: 1010821,
      name: "Super #17",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to PHY\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1010831,
      name: "Buu (Super)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 30% of damage dealt as HP"
    },
    {
      id: 1010841,
      name: "Super Gogeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacks are effective against all Types\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1010851,
      name: "Super Gogeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacks are effective against all Types\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1010861,
      name: "Super Janemba",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}\n- Guards all attacks\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1010871,
      name: "Super Janemba",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Guards all attacks\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1010881,
      name: "Hercule",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of Ki +5 and ATK 10000{passiveImg:up_g}"
    },
    {
      id: 1010891,
      name: "Hercule",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of Ki +6 and ATK 15000{passiveImg:up_g}"
    },
    {
      id: 1010911,
      name: "Goku (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 60%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- ATK 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goten (Kid)\"\nattacking in the same turn*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1010921,
      name: "Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku (Angel)\"\nattacking in the same turn*\n- Ki +3"
    },
    {
      id: 1010931,
      name: "Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1010941,
      name: "Paikuhan",
      element: 11,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK 7000{passiveImg:up_g}\n- DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1010951,
      name: "Master Roshi (Max Power)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +2\n- Great chance of STR Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010961,
      name: "Nappa",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +2\n- Great chance of PHY Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010971,
      name: "Krillin",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +2\n- Great chance of TEQ Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010981,
      name: "Dabura",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +2\n- Great chance of INT Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1010991,
      name: "Great Saiyaman",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +2\n- Great chance of AGL Type allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1011001,
      name: "Super Saiyan Cabba",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +3\n- Super STR Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011011,
      name: "Hit",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +3\n- Extreme STR Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011021,
      name: "Pan (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +3\n- Super AGL Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011031,
      name: "Hyper Meta-Rilldo",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +3\n- Extreme AGL Type allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011041,
      name: "Paikuhan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- All enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1011051,
      name: "Super Saiyan 3 Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- ATK 40%{passiveImg:up_g} and DEF 20%{passiveImg:down_r}"
    },
    {
      id: 1011061,
      name: "Super Saiyan 3 Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- ATK 60%{passiveImg:up_g} and DEF 30%{passiveImg:down_r}"
    },
    {
      id: 1011071,
      name: "Super Saiyan Gotenks",
      element: 10,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1011081,
      name: "Gotenks",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 77%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- ATK 23%{passiveImg:up_g}"
    },
    {
      id: 1011101,
      name: "Kami",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}"
    },
    {
      id: 1011111,
      name: "Goku (Youth) (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape"
    },
    {
      id: 1011121,
      name: "Goku Black",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 7% HP at the start of turn\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1011131,
      name: "Goku Black & Zamasu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n*For every attack received*\n- {passiveImg:forever}ATK 25%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1011151,
      name: "Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & STR Type allies' Ki +2 and ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1011161,
      name: "Super Saiyan 3 Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g} and DEF 10%{passiveImg:down_r}"
    },
    {
      id: 1011171,
      name: "Super Saiyan 3 Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g} and DEF 10%{passiveImg:down_r}"
    },
    {
      id: 1011181,
      name: "Super Saiyan 3 Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1011191,
      name: "Super Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*When facing 2 or less enemies*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1011201,
      name: "Jackie Chun",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When receiving an attack*\n- Survives K.O. attacks when HP is 30% or more (up to once\nwithin a turn)"
    },
    {
      id: 1011211,
      name: "Jackie Chun",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When receiving an attack*\n- Survives K.O. attacks when HP is 20% or more (up to once\nwithin a turn)"
    },
    {
      id: 1011261,
      name: "Tien",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- High chance of launching an additional attack that has a high\nchance of becoming a Super Attack"
    },
    {
      id: 1011271,
      name: "Vegito",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1011281,
      name: "Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n*When facing 2 or less enemies*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1011291,
      name: "Super Saiyan 4 Gogeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Extreme Class enemies' ATK & DEF 15%{passiveImg:down_y}\n*When receiving a Super Attack*\n- Great chance of nullifying it and countering with enormous\npower"
    },
    {
      id: 1011301,
      name: "Super Saiyan 4 Gogeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Extreme Class enemies' ATK & DEF 20%{passiveImg:down_y}\n*When receiving a Super Attack*\n- Great chance of nullifying it and countering with enormous\npower"
    },
    {
      id: 1011311,
      name: "Omega Shenron",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- All enemies' ATK & DEF 15%{passiveImg:down_y}\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack"
    },
    {
      id: 1011321,
      name: "Omega Shenron",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n- Launches an additional attack that has a chance of becoming\na Super Attack"
    },
    {
      id: 1011331,
      name: "Vegeta Jr.",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 20%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 30%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1011341,
      name: "Super Saiyan Vegeta Jr.",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 40%{passiveImg:up_g} for 4 turn(s)"
    },
    {
      id: 1011351,
      name: "Bardock (Giant Ape)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK 100%{passiveImg:up_g}\n- Chance of turning into Giant Ape (up to 2 time(s))"
    },
    {
      id: 1011361,
      name: "Fasha (Giant Ape)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to STR\n- ATK & DEF 30%{passiveImg:up_g}\n- Chance of turning into Giant Ape (up to 2 time(s))"
    },
    {
      id: 1011371,
      name: "Super Saiyan 2 Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 35%{passiveImg:up_g}"
    },
    {
      id: 1011381,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}\n*When receiving an attack*\n- Survives K.O. attacks when HP is 20% or more (up to once\nwithin a turn)"
    },
    {
      id: 1011391,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL, TEQ & PHY Type allies' Ki +2\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1011401,
      name: "Vegeta",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Great chance of ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1011411,
      name: "Yamcha",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Great chance of ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1011421,
      name: "Bulma (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*For every Rainbow Ki Sphere obtained*\n- Recovers 7000 HP\n*When receiving an attack*\n- Great chance of damage reduction rate 40%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1011431,
      name: "Bulma (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*For every Rainbow Ki Sphere obtained*\n- Recovers 7777 HP\n*When receiving an attack*\n- Great chance of damage reduction rate 50%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1011441,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1011451,
      name: "Android #17 (Future)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ to PHY\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 70% or less*\n- Changes Ki Spheres: STR to AGL"
    },
    {
      id: 1011461,
      name: "Android #18 (Future)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to AGL\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 70% or less*\n- Changes Ki Spheres: INT to PHY"
    },
    {
      id: 1011471,
      name: "Super Saiyan Trunks (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1011501,
      name: "Omega Shenron",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL & TEQ Type allies' Ki +2 and ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1011581,
      name: "Bergamo (Giant Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 120%)\n*When HP is 80% or less*\n- {passiveImg:once}Chance of turning into Giant Form"
    },
    {
      id: 1011591,
      name: "Toppo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}\n- Extreme Class enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1011621,
      name: "Mighty Mask",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 to 6 randomly\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1011631,
      name: "Mighty Mask",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 to 6 randomly\n*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1011651,
      name: "Tarble",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to AGL\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1011661,
      name: "Vegito",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*The less HP remaining*\n- Ki{passiveImg:up_g} (up to +6)"
    },
    {
      id: 1011701,
      name: "Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Rare chance of performing a critical hit"
    },
    {
      id: 1011711,
      name: "Super Saiyan Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1011741,
      name: "Super Saiyan 3 Goku (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ & PHY Type allies' Ki +2 and ATK 25%{passiveImg:up_g}"
    },
    {
      id: 1011751,
      name: "Super Saiyan 2 Caulifla",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\nenormous power"
    },
    {
      id: 1011761,
      name: "Kale (Berserk)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1011771,
      name: "Super Saiyan 3 Bardock",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 70% or less*\n- Super Class allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1011781,
      name: "Super Saiyan 3 Bardock",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 70% or less*\n- Super Class allies' ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1011801,
      name: "Ultimate Gohan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Super Class allies' DEF 50%{passiveImg:up_g}\n- Medium chance of guarding all attacks"
    },
    {
      id: 1011811,
      name: "Ultimate Gohan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Super Class allies' DEF 30%{passiveImg:up_g}\n- Chance of guarding all attacks"
    },
    {
      id: 1011821,
      name: "Whirus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: TEQ & INT to PHY\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1011831,
      name: "Cellza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- High chance of ATK 30%{passiveImg:up_g}\n- High chance of recovering 10% HP at the start of turn"
    },
    {
      id: 1011851,
      name: "Barlot",
      element: 13,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1011861,
      name: "Cell (Perfect Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Super Class enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1011901,
      name: "Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*When HP is 80% or less*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1011911,
      name: "Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1011921,
      name: "Yurin",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Attacked enemy's ATK & DEF 15%{passiveImg:down_y} and medium chance of\nstunning the attacked enemy"
    },
    {
      id: 1011941,
      name: "Majin Buu (Shape-Up)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1011951,
      name: "Android #17",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every TEQ Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1011981,
      name: "Golden Frieza (Angel)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +4 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1011991,
      name: "Buu (Super)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Super Class enemies' DEF 30%{passiveImg:down_y}"
    },
    {
      id: 1012001,
      name: "Majin Buu (Gotenks)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Super Class enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1012021,
      name: "Golden Frieza (Angel)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 40%{passiveImg:up_g}\n- Super Class enemies' ATK 10%{passiveImg:down_y}\n- Super Class allies' ATK 10%{passiveImg:down_r}"
    },
    {
      id: 1012031,
      name: "Golden Frieza (Angel)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 150%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n- Super Class enemies' ATK 15%{passiveImg:down_y}\n- Super Class allies' ATK 15%{passiveImg:down_r}"
    },
    {
      id: 1012041,
      name: "Android #18",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to TEQ\n*For every Rainbow Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}"
    },
    {
      id: 1012051,
      name: "Supreme Kai",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Realm of Gods\" Category ally on the team*\n- Ki +1 and ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1012061,
      name: "Chi-Chi",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- \"Peppy Gals\" Category allies' Ki +2 and DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1012071,
      name: "Chi-Chi (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 180%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 60%{passiveImg:down_r} for 3 turn(s)"
    },
    {
      id: 1012091,
      name: "Bulla",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK 30%{passiveImg:up_g}\n*Per \"Peppy Gals\" Category ally on the team*\n- Chance of evading enemy's attack 20%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1012101,
      name: "Pan (GT) (Honey)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 30% of damage dealt as HP\n*When receiving an attack*\n- High chance of damage reduction rate 50%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1012111,
      name: "Tien",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 5000{passiveImg:up_g}\n*When attacking with 11 or more Ki*\n- DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1012121,
      name: "Tien & Chiaotzu",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 7000{passiveImg:up_g}\n*When attacking with 11 or more Ki*\n- DEF 7000{passiveImg:up_g}"
    },
    {
      id: 1012141,
      name: "Boujack",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 40%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1012151,
      name: "Full Power Boujack",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 50%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1012181,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- \"Universe Survival Saga\" Category allies' Ki +3"
    },
    {
      id: 1012221,
      name: "Frieza (Final Form) (Angel)",
      element: 20,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- Ki +3 and ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1012291,
      name: "Vegito (Candy)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack\n- Recovers HP with sweet treats\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1012301,
      name: "Ribrianne",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1012311,
      name: "Kakunsa",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Special Pose\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Ribrianne\" or\n\"Rozie\" attacking in the same turn*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} at the start of each turn"
    },
    {
      id: 1012321,
      name: "Rozie",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Special Pose\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Ribrianne\" or\n\"Kakunsa\" attacking in the same turn*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} at the start of each turn"
    },
    {
      id: 1012331,
      name: "Super Saiyan God SS Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK & DEF 90%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1012351,
      name: "Gokua",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to STR\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1012371,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 50% or less*\n- {passiveImg:once}Ki +3, ATK 70%{passiveImg:up_g} and high chance of evading enemy's\nattack for 7 turn(s)"
    },
    {
      id: 1012381,
      name: "Super Vegito",
      element: 14,
      rarity: 4,
      itemized_description: "*When receiving a normal attack*\n- Damage reduction rate 50%{passiveImg:up_g} temporarily and counters\nwith tremendous power\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1012391,
      name: "Vegito",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*The less HP remaining*\n- Ki{passiveImg:up_g} (up to +8)"
    },
    {
      id: 1012411,
      name: "Tapion (Hirudegarn)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 40%{passiveImg:up_g}\n*When HP is 50% or less*\n- ATK 120%{passiveImg:up_g}\n- DEF 30%{passiveImg:up_g}\n- {passiveImg:once}Breaks Phantom Majin's seal"
    },
    {
      id: 1012421,
      name: "Tapion (Hirudegarn)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 50%{passiveImg:up_g}\n*When HP is 50% or less*\n- ATK 150%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n- {passiveImg:once}Breaks Phantom Majin's seal"
    },
    {
      id: 1012451,
      name: "Tapion",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n*When HP is 80% or more*\n- Extreme Class enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1012461,
      name: "Tapion",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Changes Ki Spheres: STR to Rainbow"
    },
    {
      id: 1012491,
      name: "Great Saiyaman",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n- Super Class allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1012501,
      name: "Great Saiyaman 2",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 60%{passiveImg:up_g}\n- Super Class allies' DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1012541,
      name: "Android #18",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 8%{passiveImg:up_g}"
    },
    {
      id: 1012551,
      name: "Darkness Towa",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Extreme Class allies' ATK 50%{passiveImg:up_g}\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1012571,
      name: "Super Saiyan 3 Trunks (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1012581,
      name: "Super Vegito",
      element: 14,
      rarity: 4,
      itemized_description: "*When receiving a normal attack*\n- Damage reduction rate 40%{passiveImg:up_g} temporarily and counters\nwith enormous power\n*For every attack received*\n- {passiveImg:forever}ATK 7%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1012611,
      name: "Dyspo",
      element: 10,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g}\n- {passiveImg:forever}Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1012631,
      name: "Super Saiyan 2 Vegeta & Bulma",
      element: 10,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 50%{passiveImg:up_g}\n*When receiving a normal attack*\n- Counters with enormous power"
    },
    {
      id: 1012641,
      name: "Super Saiyan 2 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Rages"
    },
    {
      id: 1012651,
      name: "Super Saiyan 2 Vegeta & Bulma",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When receiving a normal attack*\n- Counters with tremendous power\n*When HP is 30% or less*\n- {passiveImg:once}Rages"
    },
    {
      id: 1012671,
      name: "Beerus",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1012681,
      name: "Beerus",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1012691,
      name: "Super Saiyan Kefla",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to PHY\n- Medium chance of evading enemy's attack\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every PHY Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1012701,
      name: "Raditz",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +6 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1012711,
      name: "Jiren",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 10 or more Ki*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1012731,
      name: "Super Saiyan God SS Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack\n- Great chance of launching an additional attack that has a\nrare chance of becoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK 12%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1012741,
      name: "Super Saiyan God SS Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Great chance of launching an additional attack that has a\nmedium chance of becoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 150%)"
    },
    {
      id: 1012751,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Extreme Class allies' Ki +2 and DEF 40%{passiveImg:up_g}\n- Super Class enemies' ATK & DEF 15%{passiveImg:down_y}"
    },
    {
      id: 1012761,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Extreme Class allies' Ki +3 and DEF 50%{passiveImg:up_g}\n- Super Class enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1012771,
      name: "Super Saiyan 3 Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1012781,
      name: "Super Saiyan 3 Vegeta (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1012851,
      name: "Super Saiyan 3 Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Super Saiyan 3\" Category allies' ATK & DEF 33%{passiveImg:up_g}"
    },
    {
      id: 1012861,
      name: "Tapion",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Rare chance of performing a critical hit\n- Changes Ki Spheres: STR to Rainbow"
    },
    {
      id: 1012881,
      name: "Goku & Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1012891,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1012911,
      name: "Goku (Angel) & Vegeta (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1012921,
      name: "Super Saiyan Goku (Angel) & \nSuper Saiyan Vegeta (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1012951,
      name: "Super Saiyan Trunks (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 30%{passiveImg:up_g}\n*The less HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1012961,
      name: "Super Saiyan Trunks (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 40%{passiveImg:up_g}\n*The less HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1012981,
      name: "Zamasu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 30%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1012991,
      name: "Zamasu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 40%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1013001,
      name: "Recoome",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 70%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1013011,
      name: "Recoome",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 14%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1013021,
      name: "Jeice",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +1 and ATK 15%{passiveImg:up_g}\n- Foresees enemy's Super Attack"
    },
    {
      id: 1013031,
      name: "Jeice",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK 20%{passiveImg:up_g}\n- Foresees enemy's Super Attack"
    },
    {
      id: 1013041,
      name: "Burter",
      element: 20,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1013051,
      name: "Burter",
      element: 20,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- High chance of evading enemy's attack"
    },
    {
      id: 1013061,
      name: "Guldo",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 15%{passiveImg:down_y} for 2 turns"
    },
    {
      id: 1013071,
      name: "Guldo",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turns"
    },
    {
      id: 1013081,
      name: "Captain Ginyu",
      element: 22,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +2 and ATK & DEF 60%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1013091,
      name: "Captain Ginyu",
      element: 22,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1013111,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1013121,
      name: "Piccolo Jr. (Giant Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n- Medium chance of stunning the attacked enemy\n- {passiveImg:once}Chance of turning into Giant Form"
    },
    {
      id: 1013131,
      name: "Chi-Chi",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When HP is 50% or more*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1013151,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}"
    },
    {
      id: 1013161,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}"
    },
    {
      id: 1013171,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to AGL\n*For every AGL Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}\n- Recovers 5000 HP"
    },
    {
      id: 1013181,
      name: "Majin Vegeta",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to STR\n*For every STR Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1013191,
      name: "Goku (Kaioken)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +5 and ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1013201,
      name: "Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +5 and DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1013211,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*The less HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 120%)\n*When HP is 10% or less*\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1013231,
      name: "Bardock (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape\n*When facing 2 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1013241,
      name: "Tora (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3 and ATK 30%{passiveImg:up_g}\n- Chance of turning into Giant Ape (up to 2 time(s))\n*Per \"Giant Form\" Category ally on the team*\n- Recovers 6% HP at the start of turn (up to 18%)"
    },
    {
      id: 1013251,
      name: "Shugesh (Giant Ape)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 7000{passiveImg:up_g}\n- Chance of turning into Giant Ape (up to 2 time(s))\n*Per \"Giant Form\" Category ally on the team*\n- All allies' DEF 2000{passiveImg:up_g} (up to 6000)"
    },
    {
      id: 1013261,
      name: "Borgos (Giant Ape)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Chance of turning into Giant Ape (up to 2 time(s))\n*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g} and per \"Giant Form\" Category ally on the\nteam, plus an additional ATK & DEF 1%{passiveImg:up_g} (up to 3%)"
    },
    {
      id: 1013301,
      name: "Buu (Super)",
      element: 24,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n- Recovers 5000 HP"
    },
    {
      id: 1013321,
      name: "Goku (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 80%{passiveImg:up_g} and DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1013331,
      name: "Android #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack\n*After receiving an attack*\n- ATK & DEF 60%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1013341,
      name: "Cooler (Final Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' ATK & DEF 40%{passiveImg:up_g}\n- Launches an additional attack\n- High chance of launching an additional attack\n*For every attack performed*\n- {passiveImg:forever}ATK 5%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1013371,
      name: "Great Saiyaman 1 & 2",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +2 and DEF 30%{passiveImg:up_g}\n- Extreme Class enemies' DEF 40%{passiveImg:down_y}"
    },
    {
      id: 1013381,
      name: "Great Saiyaman 1 & 2",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +3 and DEF 40%{passiveImg:up_g}\n- Extreme Class enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1013411,
      name: "Super Saiyan 2 Caulifla",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1013421,
      name: "Kale (Berserk)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1013431,
      name: "Super Saiyan 2 Kefla",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to PHY\n- Medium chance of evading enemy's attack\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1013441,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*The less HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1013471,
      name: "Super Ribrianne",
      element: 13,
      rarity: 4,
      itemized_description: "*Per \"Peppy Gals\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Recovers 7777 HP"
    },
    {
      id: 1013481,
      name: "Jiren",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of stunning all enemies"
    },
    {
      id: 1013531,
      name: "Super Saiyan 2 Cabba",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n*Per \"Universe Survival Saga\" Category ally on the team*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1013541,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 50% or less*\n- Awakens"
    },
    {
      id: 1013561,
      name: "Turles",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK 35%{passiveImg:up_g}\n- Super Class enemies' ATK 10%{passiveImg:down_y}"
    },
    {
      id: 1013571,
      name: "Turles",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3 and ATK 40%{passiveImg:up_g}\n- Super Class enemies' ATK 15%{passiveImg:down_y}\n*When HP is 80% or less*\n- 25% chance of activating \"Fruit of the Tree of Might Boost\"\nfor 3 turn(s)"
    },
    {
      id: 1013591,
      name: "Super Saiyan God Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1013601,
      name: "Super Saiyan God Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1013641,
      name: "Super Saiyan 2 Caulifla",
      element: 13,
      rarity: 4,
      itemized_description: "*Per \"Universe Survival Saga\" Category ally on the team*\n- ATK 20%{passiveImg:up_g} (up to 80%)\n- Chance of evading enemy's attack 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1013661,
      name: "Super Saiyan 2 Kale",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Universe Survival Saga\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}"
    },
    {
      id: 1013681,
      name: "Turles (Giant Ape)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Chance of turning into Giant Ape (up to 2 time(s))\n*When attacking with 9 or more Ki*\n- Ki +3 and ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1013701,
      name: "Lord Slug",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 40%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1013711,
      name: "Lord Slug (Giant Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Chance of turning into Giant Form (up to 2 time(s))\n*After receiving an attack*\n- ATK 50%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1013721,
      name: "Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 30%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +2\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1013731,
      name: "Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +3\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1013741,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 30%{passiveImg:up_g}\n- All allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1013751,
      name: "Beerus",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 60%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 40%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1013761,
      name: "Beerus",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 50%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1013791,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}\n- DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1013801,
      name: "Whis",
      element: 14,
      rarity: 4,
      itemized_description: "*When HP is 30% or more*\n- ATK & DEF 40%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1013811,
      name: "Android #17",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every TEQ Ki Sphere obtained*\n- ATK 15%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1013821,
      name: "Super Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n- Launches 2 additional attack(s)\n*For every attack performed*\n- {passiveImg:forever}DEF 6%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1013831,
      name: "Super Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 60%{passiveImg:up_g}\n- Launches 2 additional attack(s)\n*For every attack performed*\n- {passiveImg:forever}DEF 7%{passiveImg:up_g} (up to 70%)\n*Starting from the 4th turn from the start of battle*\n- 30% chance of evolving"
    },
    {
      id: 1013851,
      name: "Super Saiyan Gohan (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 80%)\n*At the start of each turn*\n- {passiveImg:forever}Damage reduction rate 8%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1013861,
      name: "Super Saiyan Gohan (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 100%)\n*At the start of each turn*\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1013871,
      name: "Android #18",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to TEQ\n*For every Ki Sphere obtained*\n- ATK 12%{passiveImg:up_g}\n- DEF 7%{passiveImg:up_g}"
    },
    {
      id: 1013881,
      name: "Toppo (God of Destruction Mode)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 35%{passiveImg:up_g}\n- All enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1013891,
      name: "Android #17",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of sealing the attacked enemy's Super Attack\nfor 2 turn(s)\n*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1013901,
      name: "Android #18",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of stunning the attacked enemy for 2 turn(s)\n*For every Ki Sphere obtained*\n- DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1013911,
      name: "Dyspo (Super Speed Mode)",
      element: 10,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g}\n- {passiveImg:forever}Chance of evading enemy's attack 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1013921,
      name: "Super Saiyan 3 Vegeta (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 60%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1013931,
      name: "Super Saiyan 3 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1013941,
      name: "Jiren",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- Medium chance of stunning all enemies at the start of turn\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Performs a critical hit"
    },
    {
      id: 1013951,
      name: "Ribrianne (Giant Form)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Chance of turning into Giant Form (up to 2 time(s))\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1013961,
      name: "Jiren (Full Power)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- Attacks are effective against all Types"
    },
    {
      id: 1014001,
      name: "Bardock",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 20%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +2\n*When facing 2 or more enemies*\n- DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1014011,
      name: "Bardock",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 20%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3\n*When facing 2 or more enemies*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1014031,
      name: "Trunks (Teen) (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 10000{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +4 and ATK & DEF 8000{passiveImg:up_g}"
    },
    {
      id: 1014041,
      name: "Super Saiyan Trunks (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 15000{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +6 and ATK & DEF 12000{passiveImg:up_g}"
    },
    {
      id: 1014061,
      name: "Brianne de Chateau",
      element: 12,
      rarity: 4,
      itemized_description: "- Sweet flowers bloom on the battlefield and the power of love\nexplodes"
    },
    {
      id: 1014091,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 13,
      rarity: 4,
      itemized_description: "*For every attack performed*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 90%)\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1014101,
      name: "Trunks (Kid) & Goten (Kid) & Marron",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:down_r} (no more than -50%)"
    },
    {
      id: 1014111,
      name: "Trunks (Kid) & Goten (Kid) & Marron",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:down_r} (no more than -50%)"
    },
    {
      id: 1014121,
      name: "Super Full Power Saiyan 4 Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 60%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1014131,
      name: "Super Full Power Saiyan 4 Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 70%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1014141,
      name: "Videl",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n- Recovers 20% of damage dealt as HP\n*Per \"Peppy Gals\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1014151,
      name: "Pan (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*For 7 turn(s) from the character's entry turn*\n- ATK 70%{passiveImg:up_g}\n- DEF 120%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Chance of evading enemy's attack 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1014161,
      name: "Mai (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3\n- AGL Type allies' ATK & DEF 20%{passiveImg:up_g}\n- \"Peppy Gals\" Category allies' chance of performing a critical\nhit 10%{passiveImg:up_g}"
    },
    {
      id: 1014171,
      name: "Android #18",
      element: 21,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 14%{passiveImg:up_g}\n- An additional ATK & DEF 1%{passiveImg:up_g} per \"Peppy Gals\" Category\nally on the team"
    },
    {
      id: 1014181,
      name: "Chi-Chi",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- \"Peppy Gals\" Category allies' Ki +3 and DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1014191,
      name: "Chi-Chi (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 250%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 50%{passiveImg:down_r} for 3 turn(s)\n*When there is an ally whose name includes \"Goku (Youth)\"\non the team*\n- DEF 150%{passiveImg:up_g}"
    },
    {
      id: 1014201,
      name: "Brianne de Chateau",
      element: 12,
      rarity: 4,
      itemized_description: "*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 100%)\n*Per \"Peppy Gals\" Category ally on the team*\n- All enemies' ATK 5%{passiveImg:down_y} (no more than -15%)"
    },
    {
      id: 1014251,
      name: "Hit",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Medium chance of stunning the attacked enemy"
    },
    {
      id: 1014261,
      name: "Goku Black",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Future Saga\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Time Travelers\" Category allies' ATK 20%{passiveImg:up_g} and DEF\n10%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1014271,
      name: "Great Saiyaman (SS2)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Extreme Class enemies' DEF 50%{passiveImg:down_y}"
    },
    {
      id: 1014281,
      name: "Mighty Mask",
      element: 14,
      rarity: 4,
      itemized_description: "*When facing only 1 enemy*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 40% or less*\n- {passiveImg:once}Evades enemy's attack for 1 turn"
    },
    {
      id: 1014291,
      name: "Hell Fighter #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack"
    },
    {
      id: 1014301,
      name: "Frieza (Final Form) (GT)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1014311,
      name: "Cell (Perfect Form) (GT)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +2 and ATK & DEF 25%{passiveImg:up_g}\n- Recovers 7% HP at the start of turn"
    },
    {
      id: 1014321,
      name: "Frieza (Final Form) (GT)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 80%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1014331,
      name: "Frieza (Final Form) (GT)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 100%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1014341,
      name: "Cell (Perfect Form) (GT)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 80%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1014351,
      name: "Cell (Perfect Form) (GT)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 100%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1014361,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 90%)"
    },
    {
      id: 1014371,
      name: "Goku (Kaioken)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1014381,
      name: "Frieza (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 80%{passiveImg:up_g} within the turn"
    },
    {
      id: 1014391,
      name: "Frieza (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 100%{passiveImg:up_g} within the turn"
    },
    {
      id: 1014401,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When HP is 77% or less*\n- Ki +3 and ATK & DEF 77%{passiveImg:up_g}"
    },
    {
      id: 1014431,
      name: "Frieza (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 77% or less*\n- Ki +3 and ATK & DEF 77%{passiveImg:up_g}"
    },
    {
      id: 1014461,
      name: "Bulla",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3 and ATK 40%{passiveImg:up_g}\n*Per \"Peppy Gals\" Category ally on the team*\n- Chance of evading enemy's attack 30%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1014481,
      name: "Goku (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g} and DEF 20%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +2"
    },
    {
      id: 1014491,
      name: "Goku (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g} and DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3"
    },
    {
      id: 1014511,
      name: "Broly (Wrathful)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 60%)\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1014531,
      name: "Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1014631,
      name: "Android #21 (Normal)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Androids\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1014641,
      name: "Android #21 (Transformed, Good)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Androids\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1014651,
      name: "Android #21 (Transformed)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 15%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1014661,
      name: "Android #21 (Transformed)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 90%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*Starting from the 4th turn from the start of battle*\n- 30% chance of consuming Cell and transforming when HP is\n50% or more"
    },
    {
      id: 1014671,
      name: "Piccolo",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Ki +1 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1014681,
      name: "Piccolo",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Ki +1 and ATK 10%{passiveImg:up_g}\n*Starting from the 5th turn from the start of battle*\n- Assimilates with Nail"
    },
    {
      id: 1014701,
      name: "Jiren (Full Power)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +2)"
    },
    {
      id: 1014711,
      name: "Super Trunks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 80%{passiveImg:up_g}\n- High chance of ATK 50%{passiveImg:up_g}\n- High chance of DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1014721,
      name: "Ultimate Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 50% or more*\n- Ki +3 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1014731,
      name: "Android #16",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of guarding all attacks\n*Per \"Androids\" Category ally on the team*\n- DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1014741,
      name: "Android #16",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- High chance of guarding all attacks\n*Per \"Androids\" Category ally on the team*\n- DEF 30%{passiveImg:up_g} (up to 90%)"
    },
    {
      id: 1014761,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 21%{passiveImg:up_g}\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1014811,
      name: "Frieza (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Recovers 10% HP at the start of turn"
    },
    {
      id: 1014821,
      name: "Frieza (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Recovers 11% HP at the start of turn\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1014901,
      name: "Android #17",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*When HP is 70% or less*\n- Damage reduction rate 35%{passiveImg:up_g}"
    },
    {
      id: 1014911,
      name: "Android #17",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3 and DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*When HP is 77% or less*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1014921,
      name: "Cell (Perfect Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per existing enemy*\n- Ki +1 and ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1014931,
      name: "Cell (Perfect Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*Per existing enemy*\n- Ki +1 and ATK 8%{passiveImg:up_g}"
    },
    {
      id: 1014951,
      name: "Goku & Frieza (Final Form) (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1014961,
      name: "Goku & Frieza (Final Form) (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 60%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1014981,
      name: "Super Saiyan Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1014991,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +3\n- Extreme INT Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015001,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- INT Type allies' Ki +3\n- Super INT Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015011,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 5000{passiveImg:up_g}\n- DEF 10000{passiveImg:up_g}\n*After receiving an attack*\n- ATK 10000{passiveImg:up_g} and launches an additional attack for 3 turn(s)"
    },
    {
      id: 1015021,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 8000{passiveImg:up_g}\n- DEF 15000{passiveImg:up_g}\n*After receiving an attack*\n- ATK 12000{passiveImg:up_g} and launches an additional attack for 3 turn(s)"
    },
    {
      id: 1015041,
      name: "Buu (Super)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1015051,
      name: "Buu (Super)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Starting from the 5th turn from the start of battle*\n- Absorbs Ultimate Gohan when HP is between 80% and 100%\n- Absorbs Super Saiyan 3 Gotenks when HP is between 50%\nand 79%\n- Absorbs Piccolo when HP is 49% or less"
    },
    {
      id: 1015091,
      name: "Hercule",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n*When receiving an attack*\n- The less HP remaining, the greater the damage reduction\nrate boost (40% - 80%{passiveImg:up_g})"
    },
    {
      id: 1015101,
      name: "Hercule",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack\n*When receiving an attack*\n- The less HP remaining, the greater the damage reduction\nrate boost (50% - 90%{passiveImg:up_g})"
    },
    {
      id: 1015111,
      name: "Majin Buu (Good)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to STR\n- ATK & DEF 50%{passiveImg:up_g}\n*For every STR Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1015131,
      name: "Cell (2nd Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3\n- Extreme TEQ Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015141,
      name: "Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ Type allies' Ki +3\n- Super TEQ Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015151,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1015161,
      name: "Yamcha",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 10000{passiveImg:up_g}\n*When there is a \"Peppy Gals\" Category enemy*\n- Character will be stunned"
    },
    {
      id: 1015171,
      name: "Yamcha & Puar",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 15000{passiveImg:up_g}\n*When there is a \"Peppy Gals\" Category enemy*\n- Character will be stunned"
    },
    {
      id: 1015191,
      name: "West Supreme Kai",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Realm of Gods\" Category allies' ATK & DEF 40%{passiveImg:up_g} and\nchance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1015201,
      name: "Supreme Kai",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Realm of Gods\" Category ally on the team*\n- Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015211,
      name: "Hit",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +3\n- Extreme STR Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015221,
      name: "Super Saiyan Cabba",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- STR Type allies' Ki +3\n- Super STR Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015231,
      name: "Pan (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +3\n- Super AGL Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015241,
      name: "Hyper Meta-Rilldo",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- AGL Type allies' Ki +3\n- Extreme AGL Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015251,
      name: "Buu (Super)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +3\n- Extreme PHY Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015261,
      name: "Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- PHY Type allies' Ki +3\n- Super PHY Type allies' ATK & DEF 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015271,
      name: "Super Saiyan Gotenks & Ghost",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Recovers HP with sweet treats\n*For every Rainbow Ki Sphere obtained*\n- Recovers 6666 HP"
    },
    {
      id: 1015281,
      name: "Piccolo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +4 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015291,
      name: "Piccolo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +6 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1015301,
      name: "Super Saiyan Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 80% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1015311,
      name: "Super Saiyan Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 80% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +2 and ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1015321,
      name: "Cyclopian Guard",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 50%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1015351,
      name: "Pasta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- Medium chance of evading enemy's attack\n- Attacked enemy's DEF 80%{passiveImg:down_y} for 2 turn(s) and medium\nchance of stunning the attacked enemy for 2 turn(s)"
    },
    {
      id: 1015361,
      name: "Metal Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n*After receiving an attack*\n- Recovers 5% HP at the end of turn"
    },
    {
      id: 1015371,
      name: "Metal Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 70%)\n*After receiving an attack*\n- Recovers 7% HP at the end of turn\n*When HP is 50% or less*\n- {passiveImg:once}Core appears"
    },
    {
      id: 1015401,
      name: "Beerus (Monaka Costume)",
      element: 14,
      rarity: 4,
      itemized_description: "*After receiving an attack*\n- ATK 55%{passiveImg:up_g} for 3 turn(s)\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 55%)"
    },
    {
      id: 1015411,
      name: "Beerus (Monaka Costume)",
      element: 14,
      rarity: 4,
      itemized_description: "*After receiving an attack*\n- ATK 77%{passiveImg:up_g} for 4 turn(s)\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 77%)"
    },
    {
      id: 1015421,
      name: "Super Ribrianne",
      element: 13,
      rarity: 4,
      itemized_description: "*Per \"Peppy Gals\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Recovers 8888 HP"
    },
    {
      id: 1015431,
      name: "Goku (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Rainbow Ki Sphere obtained*\n- Ki +2 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1015451,
      name: "Metal Cooler",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Wicked Bloodline\" Category allies' ATK & DEF 25%{passiveImg:up_g} and\nchance of performing a critical hit 5%{passiveImg:up_g}"
    },
    {
      id: 1015461,
      name: "Goku Black",
      element: 22,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 90%)\n*For every attack received*\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1015471,
      name: "Goku Black",
      element: 22,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK 40%{passiveImg:up_g} (up to 120%)\n*For every attack received*\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 40%)\n*Starting from the 6th turn from the start of battle*\n- Transforms when HP is 80% or more"
    },
    {
      id: 1015491,
      name: "Super Saiyan 3 Goku (Xeno)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1015501,
      name: "Super Saiyan 3 Vegeta (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When attacking*\n- Disables the enemy's guard\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1015511,
      name: "Supreme Kai of Time (Power of Time Unleashed)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2, ATK & DEF 20%{passiveImg:up_g} and chance of performing\na critical hit 7%{passiveImg:up_g}\n- Great chance of all allies' ATK 20%{passiveImg:up_g}\n- Great chance of all allies' DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1015521,
      name: "Super Mira",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1015531,
      name: "Demigra (Makyouka Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Extreme Class allies' Ki +3\n- All enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1015541,
      name: "Dark Masked King",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Recovers 10% of damage dealt as HP\n*After receiving an attack*\n- DEF 70%{passiveImg:up_g} for 4 turn(s)"
    },
    {
      id: 1015551,
      name: "Black Masked Saiyan",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}\n*When attacking with 8 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Ki +2"
    },
    {
      id: 1015561,
      name: "Frieza (Full Power)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 70%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1015581,
      name: "Videl",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Launches an additional attack that has a chance of becoming\na Super Attack\n- High chance of launching an additional attack that has a\nchance of becoming a Super Attack\n*For every turn passed*\n- {passiveImg:forever}ATK 7%{passiveImg:down_r} (no more than -49%)"
    },
    {
      id: 1015591,
      name: "Gohan (Teen) & Videl",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a chance of becoming\na Super Attack\n- High chance of launching an additional attack that has a\nchance of becoming a Super Attack\n*For every turn passed*\n- {passiveImg:forever}ATK 7%{passiveImg:down_r} (no more than -35%)"
    },
    {
      id: 1015601,
      name: "Trunks (Teen) (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 40%{passiveImg:up_g}\n*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g} (up to 40%)\n*When there is a \"Future Saga\" Category enemy*\n- Ki +3\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1015611,
      name: "Trunks (Teen) (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is a \"Future Saga\" Category enemy*\n- Ki +4\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1015621,
      name: "Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to TEQ\n- \"Youth\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Fusion\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1015631,
      name: "Boujack",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 50%)\n*When attacking with 12 or more Ki*\n- Disables the enemy's guard"
    },
    {
      id: 1015641,
      name: "Super Saiyan Gohan (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Ki +2 and ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1015651,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1015661,
      name: "Hit",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 15%{passiveImg:down_y} and DEF 60%{passiveImg:down_y} for 2 turn(s)\nand medium chance of stunning the attacked enemy for 1 turn\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 60%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1015671,
      name: "Hit",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y} and DEF 80%{passiveImg:down_y} for 2 turn(s)\nand high chance of stunning the attacked enemy for 1 turn\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 80%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 1015681,
      name: "Metal Cooler [AGL]",
      element: 20,
      rarity: 4,
      itemized_description: "*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g} (up to 80%)\n*When HP is 50% or more*\n- All allies' Ki +2"
    },
    {
      id: 1015691,
      name: "Metal Cooler [TEQ]",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1015701,
      name: "Metal Cooler [INT]",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1015711,
      name: "Metal Cooler [STR]",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 15%{passiveImg:up_g}\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1015721,
      name: "Metal Cooler [PHY]",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% of damage dealt as HP\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1015741,
      name: "Super Saiyan 4 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +1 per AGL Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 50%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1015751,
      name: "Super Saiyan 4 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 60%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +1 per AGL Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 60%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1015761,
      name: "Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +1 per STR Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 50%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1015771,
      name: "Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 60%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +1 per STR Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 60%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1015781,
      name: "Frost (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*For 6 turn(s) from the character's entry turn*\n- Ki +2\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g} and DEF 40%{passiveImg:up_g}\n- Medium chance of stunning the enemy"
    },
    {
      id: 1015791,
      name: "Frost (Full Power)",
      element: 23,
      rarity: 4,
      itemized_description: "*For 6 turn(s) from the character's entry turn*\n- Ki +3\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g} and DEF 60%{passiveImg:up_g}\n- Medium chance of stunning the enemy"
    },
    {
      id: 1015801,
      name: "Bota Magetta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When HP is 70% or less*\n- Guards all attacks"
    },
    {
      id: 1015811,
      name: "Bota Magetta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n*When HP is 80% or less*\n- Guards all attacks"
    },
    {
      id: 1015821,
      name: "Bota Magetta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1015831,
      name: "Bota Magetta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*When receiving an attack*\n- High chance of damage reduction rate 50%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1015841,
      name: "Champa",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of ATK 200%{passiveImg:up_g}\n- \"Universe 6\" Category allies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1015851,
      name: "Super Saiyan 4 Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 44%{passiveImg:up_g}\n- \"Pure Saiyans\" Category allies' DEF 44%{passiveImg:up_g}\n*When attacking*\n- ATK 44%{passiveImg:up_g}"
    },
    {
      id: 1015871,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 13,
      rarity: 4,
      itemized_description: "*For 4 turn(s) from the character's entry turn*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 120%)\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 180%)"
    },
    {
      id: 1015881,
      name: "Majin Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*For 4 turn(s) from the character's entry turn*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 180%)\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1015891,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to AGL\n*For every Ki Sphere obtained*\n- ATK 17%{passiveImg:up_g} and DEF 7%{passiveImg:up_g} and if there is a \"Vegeta's Family\"\nCategory enemy, plus an additional ATK & DEF 3%{passiveImg:up_g}\n- Recovers 7777 HP"
    },
    {
      id: 1015901,
      name: "Majin Vegeta",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL to STR\n*For every Ki Sphere obtained*\n- ATK & DEF 17%{passiveImg:up_g} and if there is a \"Goku's Family\" Category\nenemy, plus an additional ATK & DEF 3%{passiveImg:up_g}"
    },
    {
      id: 1015951,
      name: "Goku (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Rainbow Ki Sphere obtained*\n- Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1015961,
      name: "Super Saiyan Gogeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1015971,
      name: "Super Saiyan Gogeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Medium chance of evading enemy's attack\n*Starting from the 5th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1015991,
      name: "Super Saiyan Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +5, ATK 100%{passiveImg:up_g} and DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1016001,
      name: "Super Saiyan Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +6, ATK 130%{passiveImg:up_g} and DEF 100%{passiveImg:up_g}\n*Starting from the 4th turn from the start of battle*\n- Transforms into the Full Power state"
    },
    {
      id: 1016021,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 77%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 1016031,
      name: "Super Saiyan God Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Rainbow Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Damage reduction rate 77%{passiveImg:up_g}"
    },
    {
      id: 1016041,
      name: "Super Saiyan Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 77%{passiveImg:up_g}\n- Medium chance of guarding all attacks"
    },
    {
      id: 1016051,
      name: "Super Saiyan God Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When there is a \"Movie Bosses\" Category enemy*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1016061,
      name: "Broly",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 60%)\n*For every attack received*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1016071,
      name: "Paragus",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Pure Saiyans\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1016081,
      name: "Paragus & Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Pure Saiyans\" or \"Joined Forces\" Category allies' Ki +2 and\nATK & DEF 40%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- ATK 130%{passiveImg:up_g}"
    },
    {
      id: 1016091,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Ki +2 and DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1016101,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Ki +3 and DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1016111,
      name: "Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Ki +2 and ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1016121,
      name: "Super Saiyan God SS Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Ki +3 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1016141,
      name: "Frieza (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 20%{passiveImg:up_g}\n- \"Movie Bosses\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 45%)"
    },
    {
      id: 1016151,
      name: "Golden Frieza",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 30%{passiveImg:up_g}\n- \"Movie Bosses\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1016191,
      name: "Duplicate Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category enemy*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} at the start of each turn (up to 80%)\n- All enemies' ATK & DEF 20%{passiveImg:down_y}"
    },
    {
      id: 1016201,
      name: "Duplicate Vegeta (Super Saiyan God SS)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category enemy*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} at the start of each turn (up to 90%)\n- All enemies' ATK & DEF 30%{passiveImg:down_y}"
    },
    {
      id: 1016211,
      name: "Super Saiyan 3 Gotenks",
      element: 13,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- Ki +3 and DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1016241,
      name: "Launch",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Ki +3\n- ATK 50%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1016251,
      name: "Launch",
      element: 14,
      rarity: 4,
      itemized_description: "- Sneezes and switches personalities"
    },
    {
      id: 1016261,
      name: "Caulifla",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Universe 6\" or \"Peppy Gals\" Category ally on the team*\n- Chance of evading enemy's attack 6%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Evades enemy's attack"
    },
    {
      id: 1016271,
      name: "Kale",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Pure Saiyans\" or \"Peppy Gals\" Category ally on the\nteam*\n- ATK 10%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1016281,
      name: "Pan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*As the 1st attacker in a turn*\n- Performs a critical hit\n*After receiving an attack*\n- ATK 80%{passiveImg:down_r} within the turn"
    },
    {
      id: 1016291,
      name: "Giru",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Dragon Ball Seekers\" Category allies' Ki +1 and ATK & DEF\n20%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category ally on the team*\n- Ki +1 and ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1016301,
      name: "Giru",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Dragon Ball Seekers\" Category allies' Ki +2 and ATK & DEF\n30%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category ally on the team*\n- Ki +2 and ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1016331,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- TEQ, INT & STR Type allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When there is a \"World Tournament\" Category enemy*\n- Ki +3 and ATK & DEF 77%{passiveImg:up_g}"
    },
    {
      id: 1016351,
      name: "Goku (GT) & Pan (GT) & Trunks (GT)",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 77%{passiveImg:up_g}\n*Per \"Dragon Ball Seekers\" Category ally on the team*\n- Ki +1"
    },
    {
      id: 1016361,
      name: "Goku (GT) & Pan (GT) & Trunks (GT)",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 77%{passiveImg:up_g}\n*Per \"Dragon Ball Seekers\" Category ally on the team*\n- Ki +1"
    },
    {
      id: 1016381,
      name: "Baby Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- Ki +2 and ATK 30%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Ki +2 and ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1016391,
      name: "Super Baby 1",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- Ki +2 and ATK 40%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Ki +2 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1016441,
      name: "Super Saiyan Trunks (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}"
    },
    {
      id: 1016451,
      name: "Super Saiyan 2 Goku (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 9 or more Ki*\n- Ki +3 and ATK 100%{passiveImg:up_g}\n*After performing a Super Attack*\n- DEF 120%{passiveImg:up_g} and chance of performing a critical hit 40%{passiveImg:up_g}\nfor 4 turn(s)"
    },
    {
      id: 1016461,
      name: "Goku (Kaioken)",
      element: 11,
      rarity: 4,
      itemized_description: "*When HP is 60% or less*\n- Ki +6 and ATK 60%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category enemy*\n- DEF 60%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1016491,
      name: "Vegeta",
      element: 24,
      rarity: 4,
      itemized_description: "*When HP is 60% or less*\n- Ki +6 and DEF 60%{passiveImg:up_g}\n*When there is a \"Goku's Family\" Category enemy*\n- ATK 60%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1016501,
      name: "Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}"
    },
    {
      id: 1016511,
      name: "Super Saiyan Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 6%{passiveImg:up_g}\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1016561,
      name: "Goku (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 50%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 50%)\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 and ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1016571,
      name: "Goku (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 59%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 59%)\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 and ATK & DEF 10%{passiveImg:up_g} (up to 59%)\n*When HP is 59% or less*\n- {passiveImg:once}Performs a critical hit"
    },
    {
      id: 1016581,
      name: "Goku (GT)  ",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1016611,
      name: "Super Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 120%)\n*When there is an \"Androids\" Category enemy*\n- Performs a critical hit"
    },
    {
      id: 1016621,
      name: "Demon King Piccolo (Elder)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Ki +2 and ATK 150%{passiveImg:up_g}\n*Starting from the 6th turn from the character's entry turn*\n- Ki +1 and ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1016631,
      name: "Demon King Piccolo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Ki +3 and ATK 200%{passiveImg:up_g}\n*Starting from the 6th turn from the character's entry turn*\n- Ki +2 and ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1016641,
      name: "Master Roshi",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- {passiveImg:once}ATK 588%{passiveImg:up_g}"
    },
    {
      id: 1016651,
      name: "Master Roshi",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- {passiveImg:once}ATK 628%{passiveImg:up_g} and DEF 100%{passiveImg:down_r}\n- {passiveImg:once}Performs a critical hit\n- {passiveImg:once}Stuns self and the attacked enemy"
    },
    {
      id: 1016691,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When there is a \"Time Travelers\" Category enemy*\n- Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1016711,
      name: "Goku (Dokkan Butoden)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 88%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 88%{passiveImg:up_g}"
    },
    {
      id: 1016721,
      name: "Vegeta (Dokkan Butoden)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 88%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 88%{passiveImg:up_g}"
    },
    {
      id: 1016731,
      name: "Baby Janemba",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Recovers 10% HP at the start of turn\n- High chance of evading enemy's attack"
    },
    {
      id: 1016741,
      name: "Super Saiyan 3 Trunks (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 1016751,
      name: "Super Paikuhan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When facing 2 or more enemies*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1016761,
      name: "Darkness Towa",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}Extreme Class allies' ATK & DEF 50%{passiveImg:up_g}\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1016771,
      name: "Super Saiyan 3 Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1016781,
      name: "Buu (Kid) (Babidi)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*When HP is 81% or more*\n- All allies' DEF 40%{passiveImg:up_g}\n*When HP is 80% or less*\n- All allies' Ki +3 and ATK 40%{passiveImg:up_g}\n- Recovers 5% HP at the start of turn"
    },
    {
      id: 1016791,
      name: "Gohan (Teen) & Goten (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Disables Rampage\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3) and ATK & DEF 10%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1016801,
      name: "Super Saiyan Gohan (Teen) & \nSuper Saiyan Goten (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Disables Rampage\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4) and ATK & DEF 10%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1016821,
      name: "Caulifla & Kale",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}Chance of evading enemy's attack 4%{passiveImg:up_g} (up to 40%)\n*Per \"Universe 6\", \"Joined Forces\" or \"Pure Saiyans\"\nCategory ally on the team*\n- ATK 6%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1016831,
      name: "Super Saiyan Caulifla & Super Saiyan Kale",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Launches an additional attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}Chance of evading enemy's attack 5%{passiveImg:up_g} (up to 50%)\n*Per \"Universe 6\", \"Joined Forces\" or \"Pure Saiyans\"\nCategory ally on the team*\n- ATK 7%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1016851,
      name: "Super Saiyan Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1016861,
      name: "Super Saiyan Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1016891,
      name: "Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Movie Heroes\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n- Disables Rampage\n*When there is a \"Movie Bosses\" Category enemy*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1016901,
      name: "Super Saiyan Gohan (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Movie Heroes\" Category allies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n- Disables Rampage\n*When there is a \"Movie Bosses\" Category enemy*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1016911,
      name: "Hit",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to Rainbow\n- Medium chance of evading enemy's attack\n- Medium chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK 66%{passiveImg:up_g}"
    },
    {
      id: 1016921,
      name: "Saonel & Pirina",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Universe 6\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}\n*Per \"Namekians\" Category ally on the team*\n- Ki +1 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1016931,
      name: "Champa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of ATK 200%{passiveImg:up_g}"
    },
    {
      id: 1016951,
      name: "Cyborg Tao",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1016961,
      name: "Hacchan",
      element: 13,
      rarity: 4,
      itemized_description: "*After receiving an attack*\n- ATK 100%{passiveImg:up_g} for 3 turn(s)\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1016971,
      name: "Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to Rainbow\n- Medium chance of evading enemy's attack\n- \"Movie Heroes\" Category allies' Ki +2, ATK 20%{passiveImg:up_g} and DEF\n10%{passiveImg:up_g}"
    },
    {
      id: 1016981,
      name: "Mecha Frieza",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"Revenge\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n*When there is another \"Wicked Bloodline\" Category ally\nattacking in the same turn*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1016991,
      name: "Hell Fighter #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack\n- \"Androids\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Artificial Life Forms\" Category allies' ATK 20%{passiveImg:up_g} and DEF\n10%{passiveImg:up_g}"
    },
    {
      id: 1017001,
      name: "Caulifla",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Universe 6\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Kale\" attacking\nin the same turn*\n- High chance of evading enemy's attack\n- Launches an additional Super Attack"
    },
    {
      id: 1017011,
      name: "Gowasu",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +1 and DEF 50%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When attacking an Extreme Class enemy*\n- Ki +4 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1017021,
      name: "Gowasu & Zamasu",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and DEF 70%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When attacking an Extreme Class enemy*\n- Ki +5 and ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1017031,
      name: "Vados",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n- \"Universe 6\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1017041,
      name: "Vados",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of evading enemy's attack\n- \"Universe 6\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1017051,
      name: "Kale",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Universe 6\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Pure Saiyans\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Caulifla\"\nattacking in the same turn*\n- DEF 120%{passiveImg:up_g}\n- Launches an additional Super Attack"
    },
    {
      id: 1017061,
      name: "Mai (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Time Travelers\" Category allies' Ki +2 and ATK & DEF\n40%{passiveImg:up_g}\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1017071,
      name: "Trunks (Teen) (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1017081,
      name: "Trunks (Teen) (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1017111,
      name: "Zamasu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*When HP is 70% or less*\n- Recovers 7% HP"
    },
    {
      id: 1017121,
      name: "Zamasu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n*When HP is 70% or less*\n- Recovers 7% HP\n*Starting from the 3rd turn from the start of battle*\n- Performs Potara Fusion"
    },
    {
      id: 1017151,
      name: "Frieza (2nd Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +3 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1017161,
      name: "Frieza (2nd Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +4 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1017171,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 45%)"
    },
    {
      id: 1017181,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 59%)\n*Starting from the 3rd turn from the start of battle*\n- Transforms when HP is 70% or less"
    },
    {
      id: 1017211,
      name: "Frieza (Final Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK 50%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy"
    },
    {
      id: 1017221,
      name: "Frieza (Final Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK 70%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When facing 2 or more enemies*\n- Ki +5 and ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017231,
      name: "Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Attacks are effective against all Types"
    },
    {
      id: 1017241,
      name: "Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Attacks are effective against all Types"
    },
    {
      id: 1017251,
      name: "Beat",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Super Class allies' Ki +1 and DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1017261,
      name: "Great Saiyaman 4",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Super Class allies' Ki +2 and DEF 30%{passiveImg:up_g}\n- \"Youth\" Category allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1017271,
      name: "Great Saiyaman 3",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 12%{passiveImg:up_g} and chance of performing a critical hit\n2%{passiveImg:up_g}\n*After receiving an attack*\n- DEF 30%{passiveImg:down_r} within the turn\n*When receiving a normal attack*\n- Counters with enormous power"
    },
    {
      id: 1017281,
      name: "Great Saiyaman 3",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 17%{passiveImg:up_g} and chance of performing a critical hit\n3%{passiveImg:up_g}\n*After receiving an attack*\n- DEF 30%{passiveImg:down_r} within the turn\n*When receiving a normal attack*\n- Counters with tremendous power"
    },
    {
      id: 1017291,
      name: "Sealas",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Artificial Life Forms\" Category allies' Ki +1 and ATK 15%{passiveImg:up_g}\n- \"Time Travelers\" Category allies' Ki +1 and ATK 15%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1017301,
      name: "Sealas",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Artificial Life Forms\" Category allies' Ki +1 and ATK 20%{passiveImg:up_g}\n- \"Time Travelers\" Category allies' Ki +1 and ATK 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*Starting from the 5th turn from the start of battle*\n- Fuses with Ahms (3rd Form)"
    },
    {
      id: 1017331,
      name: "Cell (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 10000{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)"
    },
    {
      id: 1017341,
      name: "Cell (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 15000{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)"
    },
    {
      id: 1017361,
      name: "Ahms (2nd Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Extreme Class allies' Ki +1 and DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1017371,
      name: "Ahms (3rd Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Extreme Class allies' Ki +2 and DEF 30%{passiveImg:up_g}\n- \"Artificial Life Forms\" Category allies' ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1017391,
      name: "Goku (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1017401,
      name: "Vegeta (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n- \"Vegeta's Family\" Category allies' Ki +2 and ATK & DEF\n30%{passiveImg:up_g}"
    },
    {
      id: 1017411,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 60%)\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 60%)\n*When attacking with 3 or more Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy and that enemy's HP is 80% or\nmore starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1017421,
      name: "Super Saiyan 2 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 60%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 60%)\n*When attacking with 3 or more Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy and that enemy's HP is 80% or\nmore starting from the 3rd turn from the start of battle*\n- Receives a boost from Babidi's sorcery"
    },
    {
      id: 1017431,
      name: "Super Saiyan Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Super Class allies' Ki +2 and ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1017441,
      name: "Tien",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Great chance of launching an additional attack that has a\nhigh chance of becoming a Super Attack\n*Per \"DB Saga\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1017451,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 55%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- ATK 55%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 55%{passiveImg:up_g}"
    },
    {
      id: 1017461,
      name: "Nail",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When \"Piccolo\" is on the team*\n- ATK & DEF 80%{passiveImg:up_g}\n*The less HP remaining*\n- Damage reduction rate{passiveImg:up_g} (10% - 60%)"
    },
    {
      id: 1017471,
      name: "Nail",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When \"Piccolo\" is on the team*\n- ATK & DEF 100%{passiveImg:up_g}\n*The less HP remaining*\n- Damage reduction rate{passiveImg:up_g} (10% - 77%)\n*When there is a \"Wicked Bloodline\" Category enemy*\n- Launches an additional Super Attack\n- Performs a critical hit"
    },
    {
      id: 1017481,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 77% or less at the start of turn*\n- Recovers 5% HP"
    },
    {
      id: 1017491,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Foresees enemy's Super Attack\n*When HP is 77% or less at the start of turn*\n- Recovers 7% HP"
    },
    {
      id: 1017511,
      name: "Gohan (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n- Rare chance of evading enemy's attack\n*As the 1st attacker in a turn*\n- Ki +3 and ATK 30%{passiveImg:up_g}\n- Chance of evading enemy's attack 50%{passiveImg:up_g}\n*As the 2nd attacker in a turn*\n- Ki +1 and ATK 10%{passiveImg:up_g}\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*When HP is 30% or less*\n- {passiveImg:once}ATK 200%{passiveImg:up_g}\n- {passiveImg:once}Performs a critical hit\n- {passiveImg:once}Fully recovers HP"
    },
    {
      id: 1017531,
      name: "Super Saiyan Goten (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and DEF 50%{passiveImg:up_g}\n*When there is a \"Vegeta's Family\" Category ally on the team*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017541,
      name: "Super Saiyan Trunks (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 50%{passiveImg:up_g}\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017551,
      name: "Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of all allies' ATK & DEF 30%{passiveImg:up_g}\n*Per \"Movie Heroes\" Category ally on the team*\n- Ki +1 (up to +3) and ATK & DEF 20%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1017561,
      name: "Cell Jr.",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Per \"Artificial Life Forms\" Category ally on the team*\n- ATK 8%{passiveImg:up_g}"
    },
    {
      id: 1017571,
      name: "Cell Jr.",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*Per \"Artificial Life Forms\" Category ally on the team*\n- ATK 10%{passiveImg:up_g}\n*When your team has \"Cell (Perfect Form)\" or \"Perfect Cell\"\nattacking in the same turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1017581,
      name: "Android #16",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n- High chance of guarding all attacks"
    },
    {
      id: 1017591,
      name: "Android #16",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When your team has \"Super Saiyan Gohan (Youth)\" or\n\"Super Saiyan 2 Gohan (Youth)\" attacking in the same turn*\n- DEF 100%{passiveImg:up_g}\n- All allies' Ki +3 and ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1017611,
      name: "Super Saiyan Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +2)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1017621,
      name: "Super Saiyan Gohan (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1017651,
      name: "Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1017661,
      name: "Super Vegeta/Super Trunks",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Weakens Regeneration"
    },
    {
      id: 1017681,
      name: "Android #18",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK & DEF 18%{passiveImg:up_g}\n- \"Androids\" Category allies' ATK & DEF 18%{passiveImg:up_g}\n*Per \"Androids\" Category ally on the team*\n- ATK & DEF 18%{passiveImg:up_g} (up to 54%)"
    },
    {
      id: 1017691,
      name: "Oceanus Shenron (Princess Oto)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When the target enemy is in the following status: {passiveImg:astute}*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1017701,
      name: "Oceanus Shenron (Princess Oto)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 120%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- ATK & DEF 60%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When the target enemy is in the following status: {passiveImg:astute}*\n- Attacks are effective against all Types\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1017711,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1017721,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 59%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- High chance of evading enemy's attack\n*When receiving a normal attack as the 2nd or 3rd attacker in\na turn*\n- Damage reduction rate 59%{passiveImg:up_g} temporarily and counters\nwith enormous power"
    },
    {
      id: 1017731,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017741,
      name: "Super Saiyan Goku/Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1017761,
      name: "Demon King Piccolo (Elder)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every TEQ Ki Sphere obtained*\n- ATK 4000{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1017771,
      name: "Demon King Piccolo (Elder)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every TEQ Ki Sphere obtained*\n- ATK 5000{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1017801,
      name: "Cyborg Tao",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n- Attacks guaranteed to hit\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1017811,
      name: "Krillin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Androids/Cell Saga\" Category ally on the team*\n- ATK & DEF 6%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Ki +3\n*As the 2nd attacker in a turn*\n- Ki +1"
    },
    {
      id: 1017821,
      name: "Krillin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Per \"Androids/Cell Saga\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Launches an additional Super Attack\n*As the 1st attacker in a turn*\n- Ki +4\n*As the 2nd attacker in a turn*\n- Ki +2"
    },
    {
      id: 1017831,
      name: "Android #18",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When your team has \"Android #16\" or \"Android #17\"\nattacking in the same turn*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1017841,
      name: "Android #18",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Chance of evading enemy's attack & chance of performing a\ncritical hit 18%{passiveImg:up_g}\n*When your team has \"Android #16\" or \"Android #17\"\nattacking in the same turn*\n- ATK & DEF 80%{passiveImg:up_g}\n- Chance of evading enemy's attack & chance of performing a\ncritical hit 18%{passiveImg:up_g}"
    },
    {
      id: 1017861,
      name: "Hercule",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 33%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 33%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +3 and ATK & DEF 33%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1017871,
      name: "Cell (Perfect Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 33%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 33%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +3 and ATK & DEF 33%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1017881,
      name: "Cell (Perfect Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 60%)\n*Per existing enemy*\n- Ki +1 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1017891,
      name: "Cell (Perfect Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 70%)\n*Per existing enemy*\n- Ki +1 and ATK 15%{passiveImg:up_g}"
    },
    {
      id: 1017921,
      name: "Android #17 (Future)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When your team has \"Android #18 (Future)\" attacking in the\nsame turn*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017931,
      name: "Android #17 (Future)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When your team has \"Android #18 (Future)\" attacking in the\nsame turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1017941,
      name: "Android #18 (Future)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When your team has \"Android #17 (Future)\" attacking in the\nsame turn*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1017951,
      name: "Android #18 (Future)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When your team has \"Android #17 (Future)\" attacking in the\nsame turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1017961,
      name: "Super Saiyan Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1018001,
      name: "Grandpa Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally or an enemy whose name includes\n\"Goku (Youth)\"*\n- Ki +3\n- High chance of evading enemy's attack\n*After evading an attack*\n- ATK & DEF 80%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1018011,
      name: "Androids #17 & #18",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 60%{passiveImg:up_g}\n- \"Androids\" Category allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1018021,
      name: "Androids #17 & #18",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 70%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +1 and ATK 30%{passiveImg:up_g}\n*When HP is 66% or more*\n- Rare chance of evading enemy's attack"
    },
    {
      id: 1018051,
      name: "Thouser",
      element: 24,
      rarity: 4,
      itemized_description: "*Per \"Terrifying Conquerors\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Cooler\" (Cooler's\nArmored Squad excluded) on the team*\n- Launches an additional attack that has a chance of becoming\na Super Attack"
    },
    {
      id: 1018061,
      name: "Thouser (Cooler's Armored Squad)",
      element: 24,
      rarity: 4,
      itemized_description: "*Per \"Terrifying Conquerors\" Category ally on the team*\n- ATK & DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Cooler\" (Cooler's\nArmored Squad excluded) on the team*\n- Launches 2 additional attacks, each of which has a rare\nchance of becoming a Super Attack"
    },
    {
      id: 1018071,
      name: "Cooler",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Terrifying Conquerors\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018091,
      name: "Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n- DEF 60%{passiveImg:down_r}\n*For every attack received*\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 25%)"
    },
    {
      id: 1018101,
      name: "Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:down_r}\n*For every attack received*\n- {passiveImg:forever}Chance of performing a critical hit 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1018111,
      name: "Gohan (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Bond of Master and Disciple\" Category allies' ATK & DEF\n20%{passiveImg:up_g}\n*If HP is 50% or less when receiving an attack*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1018121,
      name: "Gohan (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Bond of Master and Disciple\" Category allies' Ki +1 and ATK\n& DEF 30%{passiveImg:up_g}\n*If HP is 58% or less when receiving an attack*\n- Damage reduction rate 58%{passiveImg:up_g}\n*When HP is 58% or more with an ally whose name includes\n\"Trunks\" (Kid and GT excluded) on the team starting from the\n4th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1018141,
      name: "Trunks (Teen) (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gohan (Future)\"\non the team*\n- Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Ki +4 and performs a critical hit"
    },
    {
      id: 1018151,
      name: "Super Saiyan Trunks (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gohan (Future)\"\non the team*\n- Ki +3 and ATK & DEF 70%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Ki +6 and performs a critical hit\n*When there is an enemy whose name includes \"Cell\"\n(characters such as Cell Jr. excluded)*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1018161,
      name: "Super Saiyan Gohan (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- High chance of performing a critical hit"
    },
    {
      id: 1018181,
      name: "Cooler",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- \"Transformation Boost\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- \"Terrifying Conquerors\" Category allies' ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1018191,
      name: "Cooler",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- \"Transformation Boost\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- \"Terrifying Conquerors\" Category allies' Ki +2 and ATK &\nDEF 50%{passiveImg:up_g}"
    },
    {
      id: 1018211,
      name: "Trunks (Kid) (Great Saiyaman)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every attack performed*\n- {passiveImg:forever}ATK 5%{passiveImg:up_g} (up to 50%)\n*3 or more Ki Spheres obtained*\n- Launches an additional attack\n*5 or more Ki Spheres obtained*\n- Launches an additional attack"
    },
    {
      id: 1018221,
      name: "Trunks (Kid) (Great Saiyaman)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every attack performed*\n- {passiveImg:forever}ATK 7%{passiveImg:up_g} (up to 70%)\n- {passiveImg:forever}Chance of performing a critical hit 7%{passiveImg:up_g} (up to 49%)\n*3 or more Ki Spheres obtained*\n- Launches an additional attack\n*5 or more Ki Spheres obtained*\n- Launches an additional attack"
    },
    {
      id: 1018231,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 59%{passiveImg:up_g}\n*Per \"Pure Saiyans\" or \"Hybrid Saiyans\" Category ally on the\nteam (self excluded)*\n- DEF 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1018241,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}\n*Per \"Pure Saiyans\" or \"Hybrid Saiyans\" Category ally on the\nteam (self excluded)*\n- DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1018261,
      name: "Android #13",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Androids\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n- Attacks guaranteed to hit"
    },
    {
      id: 1018271,
      name: "Android #13",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Attacks guaranteed to hit\n*When another 2 or more \"Androids\" Category allies are on\nthe team starting from the 5th turn from the start of battle*\n- Absorbs Androids #14 and #15's parts and transforms"
    },
    {
      id: 1018291,
      name: "Golden Cooler",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n*When another 3 or more \"Dragon Ball Heroes\" Category\nallies are on the team*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018301,
      name: "Golden Cooler",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When another 3 or more \"Dragon Ball Heroes\" Category\nallies are on the team*\n- ATK & DEF 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018311,
      name: "Fu",
      element: 22,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*Per \"Time Travelers\" Category ally on the team*\n- Ki +1 (up to +2)\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 20%)"
    },
    {
      id: 1018321,
      name: "Super Fu",
      element: 22,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*Per \"Time Travelers\" Category ally on the team*\n- Ki +1 (up to +4)\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1018331,
      name: "Super Saiyan 3 Goku (Xeno)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*Per \"Dragon Ball Heroes\" Category ally on the team*\n- Damage reduction rate 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1018341,
      name: "Super Saiyan 3 Vegeta (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- Disables the enemy's guard\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*Per \"Dragon Ball Heroes\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g} (up to 35%)\n- Chance of performing a critical hit 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1018351,
      name: "Vegeks (Xeno)",
      element: 13,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 7%{passiveImg:up_g} (up to 35%)\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Launches an additional Super Attack"
    },
    {
      id: 1018361,
      name: "Supreme Kai of Time (Power of Time Unleashed)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3, ATK & DEF 30%{passiveImg:up_g} and chance of performing\na critical hit 12%{passiveImg:up_g}\n- Great chance of all allies' ATK 12%{passiveImg:up_g}\n- Great chance of all allies' DEF 12%{passiveImg:up_g}"
    },
    {
      id: 1018371,
      name: "Gohanks (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- Launches an additional Super Attack"
    },
    {
      id: 1018381,
      name: "Gotenks (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When the target enemy is in the following status: {passiveImg:astute}*\n- Launches an additional Super Attack"
    },
    {
      id: 1018391,
      name: "Evil Saiyan",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n*After receiving an attack as the 1st attacker in a turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1018401,
      name: "Cumber",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n*When attacking*\n- Extreme Class allies' ATK & DEF 20%{passiveImg:up_g}\n*After receiving an attack*\n- Super Class enemies' ATK & DEF 20%{passiveImg:down_y}\n*After receiving an attack as the 1st attacker in a turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1018411,
      name: "Super Saiyan Gotenks & Ghost",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Recovers HP with sweet treats\n*For every Rainbow Ki Sphere obtained*\n- Recovers 7777 HP\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018451,
      name: "Cumber",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*After receiving an attack*\n- High chance of stunning all Super Class enemies"
    },
    {
      id: 1018461,
      name: "Super Saiyan Cumber (Giant Ape Cumber)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*After receiving an attack*\n- High chance of stunning all Super Class enemies\n*When HP is 50% or less*\n- {passiveImg:once}High chance of turning into Giant Ape"
    },
    {
      id: 1018471,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 4%{passiveImg:up_g}\n- ATK 4%{passiveImg:up_g} per \"Super Saiyans\" Category ally attacking in\nthe same turn (self excluded)"
    },
    {
      id: 1018481,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 5%{passiveImg:up_g}\n- ATK 5%{passiveImg:up_g} per \"Super Saiyans\" Category ally attacking in\nthe same turn (self excluded)"
    },
    {
      id: 1018501,
      name: "Vegito (Candy)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of evading enemy's attack\n- Recovers HP with sweet treats\n*When attacking*\n- Disables the enemy's guard\n*For every TEQ Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n*For every non-TEQ Ki Sphere obtained*\n- DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1018511,
      name: "Androids #14 & #15",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When your team has \"Android #13\" attacking in the same\nturn*\n- {passiveImg:forever}ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1018521,
      name: "Androids #14 & #15",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When your team has \"Android #13\" attacking in the same\nturn*\n- {passiveImg:forever}ATK & DEF 70%{passiveImg:up_g}\n- {passiveImg:forever}Foresees enemy's Super Attack\n*When your team has \"Fusion Android #13\" attacking in the\nsame turn*\n- All allies' ATK & DEF 30%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1018531,
      name: "Super Saiyan God SS Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*If HP is 59% or less when attacking with 12 or more Ki*\n- {passiveImg:once}ATK 59%{passiveImg:up_g}"
    },
    {
      id: 1018541,
      name: "Super Saiyan God SS Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 59%)\n*If HP is 59% or less when attacking with 12 or more Ki*\n- {passiveImg:once}ATK 59%{passiveImg:up_g}\n- {passiveImg:once}Attacks are effective against all Types"
    },
    {
      id: 1018561,
      name: "Android #13",
      element: 23,
      rarity: 4,
      itemized_description: "*When attacking with 8 or more Ki*\n- Damage reduction rate 40%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded), \"Vegeta\" (Kid, Jr.,\netc. excluded) or \"Trunks (Teen)\"*\n- ATK & DEF 130%{passiveImg:up_g}\n*When your team has \"Androids #14 & #15\" attacking in the\nsame turn*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1018571,
      name: "Great Saiyaman",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of sealing the attacked enemy's Super Attack\nfor 1 turn\n- \"Majin Buu Saga\" Category Super Class allies' Ki +1 and ATK\n& DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1018581,
      name: "Great Saiyaman (SS)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- High chance of sealing the attacked enemy's Super Attack\nfor 2 turn(s)\n- \"Majin Buu Saga\" Category Super Class allies' Ki +2 and ATK\n& DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018601,
      name: "Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking*\n- Ki +1\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018611,
      name: "Gogeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking*\n- Ki +2\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018631,
      name: "Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking*\n- Ki +1\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018641,
      name: "Vegito",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking*\n- Ki +2\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018661,
      name: "Mr. Buu",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Changes Ki Spheres: INT to Rainbow\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to Rainbow Ki Spheres\n*For every Rainbow Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n- Recovers 15000 HP"
    },
    {
      id: 1018671,
      name: "Dabura",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy for 1 turn\n- \"Majin Buu Saga\" Category Extreme Class allies' Ki +1 and\nATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1018681,
      name: "Dabura",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy for 2 turn(s)\n- \"Majin Buu Saga\" Category Extreme Class allies' Ki +2 and\nATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018691,
      name: "Spopovich",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1018701,
      name: "Yamu & Spopovich",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 140%)\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1018711,
      name: "Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- Ki +3 and ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1018721,
      name: "Gohan (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "- Transforms into the hero of love and justice as a disguise"
    },
    {
      id: 1018741,
      name: "Super Saiyan God SS Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every PHY Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1018751,
      name: "Super Saiyan 2 Goku (Angel)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 40%)\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1018771,
      name: "Super Saiyan 2 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 40%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1018791,
      name: "Super Saiyan God SS Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every TEQ Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1018801,
      name: "Bergamo (Giant Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*For every attack received*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 300%)\n*When HP is 80% or less*\n- {passiveImg:once}Rare chance of turning into Giant Form"
    },
    {
      id: 1018841,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- Damage reduction rate 58%{passiveImg:up_g}\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1018861,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK 5%{passiveImg:up_g} (up to 50%)\n*For every final blow delivered*\n- {passiveImg:forever}Ki +1 (up to +5)"
    },
    {
      id: 1018871,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK 6%{passiveImg:up_g} (up to 60%)\n*For every final blow delivered*\n- {passiveImg:forever}Ki +1 (up to +6)"
    },
    {
      id: 1018901,
      name: "Jackie Chun (Max Power)",
      element: 14,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 130%{passiveImg:up_g}\n- \"Kamehameha\" Category allies' Ki +2 and ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1018921,
      name: "Broly (Kid)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Rare chance of evading enemy's attack"
    },
    {
      id: 1018931,
      name: "Broly (Kid)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1018941,
      name: "Vegeta (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1018951,
      name: "Vegeta (Kid) & Raditz (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Pure Saiyans\" Category ally attacking in the same turn\n(self excluded)*\n- Ki +1 and ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1018971,
      name: "Frieza (1st Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 80%{passiveImg:up_g}\n- \"Super Bosses\" Category allies' Ki +1\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*When HP is 50% or more*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1018981,
      name: "Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n*3 or more PHY Ki Spheres obtained*\n- ATK & DEF 3%{passiveImg:up_g} per Ki Sphere obtained\n*3 or more AGL or STR Ki Spheres obtained*\n- All allies' ATK 20%{passiveImg:up_g}\n*3 or more TEQ or INT Ki Spheres obtained*\n- All allies' DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1018991,
      name: "Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 12%{passiveImg:up_g}\n*3 or more PHY Ki Spheres obtained*\n- Receives an additional Ki +1 per Ki Sphere obtained\n- ATK & DEF 3%{passiveImg:up_g} per Ki Sphere obtained\n*3 or more AGL or STR Ki Spheres obtained*\n- All allies' ATK 30%{passiveImg:up_g}\n*3 or more TEQ or INT Ki Spheres obtained*\n- All allies' DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1019031,
      name: "Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%\n*When there is an ally whose name includes \"Goku\" (Captain\nGinyu, Jr., etc. excluded) on the team*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1019041,
      name: "Bardock & Gine",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Captain\nGinyu, Jr., etc. excluded) on the team*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- ATK 100%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Frieza\"\n(Frieza Soldier excluded)*\n- Ki +3 and ATK 100%{passiveImg:up_g}\n- Performs a critical hit"
    },
    {
      id: 1019051,
      name: "Zamasu",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n*When facing 2 or more enemies*\n- Launches an additional attack"
    },
    {
      id: 1019061,
      name: "Zamasu",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +4)\n*When facing 2 or more enemies*\n- Launches an additional attack that has a chance of becoming\na Super Attack"
    },
    {
      id: 1019081,
      name: "Fasha",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 70%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1019091,
      name: "Fasha",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 90%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When there is an ally whose name includes \"Bardock\" (Team\nBardock excluded) on the team*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 1019131,
      name: "Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*Per \"Low-Class Warrior\" Category ally on the team*\n- ATK 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1019141,
      name: "Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*Per \"Low-Class Warrior\" Category ally on the team*\n- ATK 10%{passiveImg:up_g} (up to 50%)\n*When there is a \"Wicked Bloodline\" Category enemy*\n- Attacks are effective against all Types"
    },
    {
      id: 1019161,
      name: "Borgos",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1019171,
      name: "Borgos",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack"
    },
    {
      id: 1019191,
      name: "Tora",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When HP is 50% or less at the start of turn with 5 or more\n\"Low-Class Warrior\" Category allies on the team*\n- Recovers 7% HP"
    },
    {
      id: 1019201,
      name: "Tora",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When HP is 70% or less at the start of turn with 5 or more\n\"Low-Class Warrior\" Category allies on the team*\n- Recovers 10% HP"
    },
    {
      id: 1019211,
      name: "Shugesh",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Performs a critical hit"
    },
    {
      id: 1019221,
      name: "Shugesh",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Performs a critical hit\n*When the target enemy is in the following status: {passiveImg:astute}*\n- Stuns the enemy"
    },
    {
      id: 1019231,
      name: "Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}\n*Per \"Team Bardock\" Category ally on the team*\n- Damage reduction rate 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1019241,
      name: "Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 18%{passiveImg:up_g}\n*Per \"Team Bardock\" Category ally on the team*\n- Damage reduction rate 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1019251,
      name: "Super Saiyan God Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Recovers 7% HP at the start of turn\n*5 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1019261,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n- Recovers 10% HP at the start of turn\n*5 or more Ki Spheres obtained*\n- ATK 59%{passiveImg:up_g}\n*When there is a \"Realm of Gods\" Category enemy*\n- ATK & DEF 59%{passiveImg:up_g}"
    },
    {
      id: 1019271,
      name: "Super Saiyan Trunks (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is an ally whose name includes \"Super Saiyan\nGod SS\" on the team*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When there is a \"Future Saga\" Category enemy*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1019281,
      name: "Super Saiyan Trunks (Future) & Mai (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Super Saiyan\nGod SS\" on the team*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Future Saga\" Category enemy*\n- ATK 100%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Zamasu\" or\n\"Goku Black\"*\n- Ki +3 and ATK 100%{passiveImg:up_g}\n- Performs a critical hit"
    },
    {
      id: 1019291,
      name: "Raditz",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +1 and ATK & DEF 80%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2\n- Stuns the attacked enemy\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1019301,
      name: "Raditz",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +2\n- Stuns the attacked enemy\n- Damage reduction rate 50%{passiveImg:up_g}\n*When there is a \"Goku's Family\" or \"Namekians\" Category\nenemy*\n- ATK 50%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1019331,
      name: "Beerus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 50%{passiveImg:up_g} within the turn"
    },
    {
      id: 1019341,
      name: "Beerus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 70%{passiveImg:up_g} within the turn\n*When there is a \"Realm of Gods\" Category enemy*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Attacks are effective against all Types"
    },
    {
      id: 1019351,
      name: "Whis",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}DEF 40%{passiveImg:up_g} within the turn"
    },
    {
      id: 1019361,
      name: "Whis",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Great chance of evading enemy's attack\n*For every attack evaded*\n- DEF 50%{passiveImg:up_g} within the turn\n*When there is an ally whose name includes \"Beerus\"\nattacking in the same turn*\n- All allies' ATK 50%{passiveImg:up_g}\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 1019371,
      name: "Majin Buu (Shape-Up)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack"
    },
    {
      id: 1019381,
      name: "Nappa",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When HP is 78% or more*\n- Ki +2\n*Per existing enemy*\n- ATK & DEF 6000{passiveImg:up_g}"
    },
    {
      id: 1019391,
      name: "Nappa",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When HP is 78% or more*\n- Ki +3\n*Per existing enemy*\n- ATK & DEF 7000{passiveImg:up_g}"
    },
    {
      id: 1019461,
      name: "Super Saiyan Goten (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n*When there is an ally whose name includes \"Trunks (Kid)\" or\n\"Krillin\" (Youth excluded) attacking in the same turn*\n- ATK 70%{passiveImg:up_g} and damage reduction rate 30%{passiveImg:up_g} when\nattacking with 12 or more Ki"
    },
    {
      id: 1019471,
      name: "Super Saiyan Trunks (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goten (Kid)\" or\n\"Krillin\" (Youth excluded) attacking in the same turn*\n- ATK 70%{passiveImg:up_g} and damage reduction rate 30%{passiveImg:up_g} when\nattacking with 12 or more Ki"
    },
    {
      id: 1019481,
      name: "Great Saiyaman 2",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 1 turn\n- \"Special Pose\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1019491,
      name: "Great Saiyaman 2/1",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n- \"Special Pose\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1019511,
      name: "Krillin",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and DEF 15000{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 10000{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 5000{passiveImg:up_g} per existing enemy (count starts from the 2nd\nenemy)"
    },
    {
      id: 1019521,
      name: "Krillin",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and DEF 20000{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 15000{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 7000{passiveImg:up_g} per existing enemy (count starts from the 2nd\nenemy)"
    },
    {
      id: 1019581,
      name: "Majin Buu (Good)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1019591,
      name: "Majin Buu (Good)/Majin Buu (Pure Evil)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK 100%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n*Starting from the 3rd turn from the start of battle*\n- Exchanges with Majin Buu (Pure Evil)"
    },
    {
      id: 1019621,
      name: "Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1019631,
      name: "Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1019661,
      name: "Whis",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- DEF 100%{passiveImg:up_g}\n- High chance of launching an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*When HP is 30% or less*\n- {passiveImg:once}Fully recovers HP\n- {passiveImg:once}Great chance of evading enemy's attack"
    },
    {
      id: 1019681,
      name: "Hacchan",
      element: 13,
      rarity: 4,
      itemized_description: "*After receiving an attack*\n- ATK 150%{passiveImg:up_g} and guards all attacks for 3 turn(s)\n*For every attack received*\n- {passiveImg:forever}Damage reduction rate 8%{passiveImg:up_g} (up to 40%)\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1019691,
      name: "Vegito",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Great chance of evading enemy's attack"
    },
    {
      id: 1019711,
      name: "Caulifla",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Per \"Universe 6\" or \"Peppy Gals\" Category ally on the team*\n- Chance of evading enemy's attack 8%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Evades enemy's attack\n*When there is an ally whose name includes \"Kale\" attacking\nin the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1019721,
      name: "Kale",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Per \"Pure Saiyans\" or \"Peppy Gals\" Category ally on the\nteam*\n- ATK & DEF 10%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Launches an additional Super Attack\n*When there is an ally whose name includes \"Caulifla\"\nattacking in the same turn*\n- Guards all attacks"
    },
    {
      id: 1019731,
      name: "Kefla",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 90%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1019741,
      name: "Kefla",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*Starting from the 3rd turn from the start of battle*\n- Transforms"
    },
    {
      id: 1019771,
      name: "Tien",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- {passiveImg:once}ATK 200%{passiveImg:up_g} and DEF 40%{passiveImg:down_r}\n- {passiveImg:once}Stuns the attacked enemy for 2 turn(s)"
    },
    {
      id: 1019791,
      name: "Gohan (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}\n- \"Androids/Cell Saga\" Category allies' ATK 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 60%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1019801,
      name: "Super Saiyan God Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1019811,
      name: "Super Saiyan God SS Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1019831,
      name: "Vados",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Universe 6\", \"Realm of Gods\", \"Siblings' Bond\" or \"Bond of\nMaster and Disciple\" Category allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1019841,
      name: "Vados",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- \"Universe 6\", \"Realm of Gods\", \"Siblings' Bond\" or \"Bond of\nMaster and Disciple\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When there is another \"Universe 6\" Category ally attacking\nin the same turn*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 1019851,
      name: "Tarble",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to AGL\n- ATK & DEF 60%{passiveImg:up_g}\n- \"Siblings' Bond\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When another 2 or more \"Vegeta's Family\" Category allies\nare on the team*\n- Chance of evading enemy's attack 30%{passiveImg:up_g}"
    },
    {
      id: 1019861,
      name: "Goku (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 70%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- ATK 120%{passiveImg:up_g}\n*Starting from the 8th turn from the start of battle*\n- High chance of evading enemy's attack\n*When there is an ally whose name includes \"Goten (Kid)\"\nattacking in the same turn*\n- ATK & DEF 59%{passiveImg:up_g}"
    },
    {
      id: 1019871,
      name: "Lord Slug",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 30%{passiveImg:up_g}\n*When HP is 30% or less at the start of turn*\n- Recovers 30% HP"
    },
    {
      id: 1019881,
      name: "Ultimate Gohan",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- ATK & DEF 58%{passiveImg:up_g}\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1019891,
      name: "Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku (Angel)\" or\n\"Trunks (Kid)\" attacking in the same turn*\n- Ki +5\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1019901,
      name: "Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When the target enemy is in the following status: {passiveImg:def_down}*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1019921,
      name: "Grandpa Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When there is an ally or an enemy whose name includes\n\"Goku (Youth)\"*\n- Ki +3\n- High chance of evading enemy's attack\n*After evading an attack*\n- ATK 120%{passiveImg:up_g} and DEF 80%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1019931,
      name: "Chi-Chi",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When HP is 50% or more*\n- Ki +3\n- ATK & DEF 120%{passiveImg:up_g}\n*When HP is 49% or less*\n- High chance of evading enemy's attack\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Captain Ginyu, Jr., etc. excluded)*\n- Attacks are effective against all Types"
    },
    {
      id: 1019951,
      name: "Cell (Perfect Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Extreme Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Super Class enemies' DEF 60%{passiveImg:down_y}\n*When facing 2 or more enemies*\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1019961,
      name: "Bulma (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 41%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When there is an ally whose name includes \"Goku (Youth)\"\nattacking in the same turn*\n- Ki +9 and ATK & DEF 81%{passiveImg:up_g}"
    },
    {
      id: 1019971,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 5%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Launches an additional attack"
    },
    {
      id: 1019981,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 6%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Launches an additional attack (up to 2 time(s) within a turn)"
    },
    {
      id: 1020001,
      name: "Toppo",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When 3 or more \"Universe 11\" Category allies are on the\nteam*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn*\n- Guards all attacks"
    },
    {
      id: 1020011,
      name: "Toppo (Pride Troopers)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 110%{passiveImg:up_g}\n- \"Universe 11\" Category allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n*When 3 or more \"Universe 11\" Category allies are on the\nteam*\n- ATK & DEF 110%{passiveImg:up_g}\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn*\n- Guards all attacks"
    },
    {
      id: 1020021,
      name: "Krillin",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When your team has \"Android #18\" attacking in the same\nturn*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1020031,
      name: "Krillin",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When your team has \"Android #18\" attacking in the same\nturn*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Attacks are effective against all Types"
    },
    {
      id: 1020041,
      name: "Jackie Chun (Max Power)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Kamehameha\" Category allies' Ki +3 and ATK 30%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}"
    },
    {
      id: 1020051,
      name: "Great Saiyaman (SS2)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Super Class allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n- Extreme Class enemies' DEF 58%{passiveImg:down_y}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 58%)\n*When there is an Extreme Class enemy*\n- Ki +3\n- ATK & DEF 58%{passiveImg:up_g}"
    },
    {
      id: 1020061,
      name: "Annin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Peppy Gals\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Realm of Gods\" Category allies' ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- Recovers 6% HP at the start of turn\n*When HP is 60% or more*\n- Ki +2\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1020071,
      name: "Mighty Mask",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 50% or less*\n- {passiveImg:once}Evades enemy's attack within the turn\n- {passiveImg:forever}High chance of evading enemy's attack\n*When HP is 30% or less*\n- Evades enemy's attack within the turn"
    },
    {
      id: 1020081,
      name: "Gohan (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Guards all attacks\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +2)"
    },
    {
      id: 1020091,
      name: "Gohan (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- Guards all attacks\n*After guard is activated*\n- ATK 40%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +3)"
    },
    {
      id: 1020111,
      name: "West Supreme Kai",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Realm of Gods\" Category allies' ATK & DEF 40%{passiveImg:up_g} and\nchance of performing a critical hit 10%{passiveImg:up_g}\n*After receiving an attack*\n- Guards all attacks"
    },
    {
      id: 1020121,
      name: "Supreme Kai",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n- Medium chance of evading enemy's attack\n- Recovers 8% HP at the end of turn"
    },
    {
      id: 1020131,
      name: "Supreme Kai & Kibito",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 30%{passiveImg:down_y} for 2 turn(s)\n- High chance of evading enemy's attack\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 1020151,
      name: "Frieza (Final Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is a \"Goku's Family\" Category enemy*\n- Guards all attacks\n*After guard is activated*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1020161,
      name: "Kahseral",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- \"Universe 11\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1020171,
      name: "Kahseral (Pride Troopers)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Universe 11\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1020181,
      name: "Kakunsa",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- \"Special Pose\" Category allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Ribrianne\" or\n\"Rozie\" attacking in the same turn*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} at the start of each turn"
    },
    {
      id: 1020191,
      name: "Rozie",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- \"Special Pose\" Category allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Ribrianne\" or\n\"Kakunsa\" attacking in the same turn*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} at the start of each turn"
    },
    {
      id: 1020201,
      name: "Vegeta (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK & DEF 3%{passiveImg:up_g} (up to 36%)\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded)*\n- Ki +2"
    },
    {
      id: 1020211,
      name: "Super Saiyan 2 Vegeta (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK & DEF 4%{passiveImg:up_g} (up to 48%)\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded)*\n- Ki +3"
    },
    {
      id: 1020231,
      name: "Goku (Ultra Instinct)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 66%{passiveImg:up_g}\n*For 6 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n- ATK 66%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 11%{passiveImg:up_g} (up to 66%)"
    },
    {
      id: 1020251,
      name: "Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When \"Piccolo\" is on the team*\n- Ki +2\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} at the start of each turn (up to 80%)\n*When your team has \"Piccolo\" attacking in the same turn*\n- Attacks are effective against all Types\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1020261,
      name: "Goku (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- High chance of launching an additional attack that has a\nmedium chance of becoming a Super Attack\n- Medium chance of evading enemy's attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1020271,
      name: "Tien",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Majin Buu Saga\" Category Super Class allies' ATK 20%{passiveImg:up_g}\nand DEF 30%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1020281,
      name: "Tien",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- \"Majin Buu Saga\" Category Super Class allies' ATK 30%{passiveImg:up_g}\nand DEF 50%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1020291,
      name: "Goku (Ultra Instinct)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}Ki +1 (up to +3)"
    },
    {
      id: 1020301,
      name: "Goku (Ultra Instinct)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}Ki +1 (up to +4)\n*After evading an attack*\n- DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1020321,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)"
    },
    {
      id: 1020331,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*After receiving an attack*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)"
    },
    {
      id: 1020351,
      name: "Majin Buu (Gotenks)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 8% HP at the start of turn\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained"
    },
    {
      id: 1020361,
      name: "Majin Buu (Gotenks)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- ATK & DEF 110%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained"
    },
    {
      id: 1020391,
      name: "Super Saiyan 2 Caulifla",
      element: 13,
      rarity: 4,
      itemized_description: "*Per \"Universe Survival Saga\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n- Chance of evading enemy's attack 15%{passiveImg:up_g} (up to 60%)\n*When there is an ally whose name includes \"Kale\" on the\nteam*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack if that ally is attacking in the same\nturn"
    },
    {
      id: 1020401,
      name: "Super Saiyan 2 Kale",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Universe Survival Saga\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Caulifla\" on the\nteam*\n- DEF 50%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g} if that ally is attacking\nin the same turn"
    },
    {
      id: 1020431,
      name: "Super Hatchiyack",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} at the start of each turn (up to 90%)\n*After delivering a final blow*\n- Recovers 40% HP at the end of turn"
    },
    {
      id: 1020441,
      name: "Goku & Vegeta (Angel)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained"
    },
    {
      id: 1020451,
      name: "Goku & Vegeta (Angel)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 110%{passiveImg:up_g}\n- Damage reduction rate 25%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained"
    },
    {
      id: 1020491,
      name: "Frieza (Final Form) (Angel)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*After receiving an attack*\n- Medium chance of evading enemy's attack within the turn\n- ATK & DEF 40%{passiveImg:up_g} for 4 turn(s)"
    },
    {
      id: 1020501,
      name: "Frieza (Final Form) (Angel)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 30%{passiveImg:down_y} for 2 turn(s)\n*After receiving an attack*\n- Medium chance of evading enemy's attack within the turn\n- ATK & DEF 50%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1020521,
      name: "Majin Buu (Piccolo)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Power Absorption\" Category allies' ATK 20%{passiveImg:up_g} and DEF\n30%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1020531,
      name: "Majin Buu (Piccolo)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% HP at the start of turn\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- \"Power Absorption\" Category allies' ATK 30%{passiveImg:up_g} and DEF\n50%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1020541,
      name: "Demon Goddess Towa",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- All allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n- Medium chance of all allies' ATK 10%{passiveImg:up_g}\n- Medium chance of all allies' DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1020551,
      name: "Demon Goddess Towa",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n- High chance of all allies' ATK 10%{passiveImg:up_g}\n- High chance of all allies' DEF 10%{passiveImg:up_g}\n*When HP is 50% or less*\n- {passiveImg:once}Extreme Class allies' ATK & DEF 50%{passiveImg:up_g}\n- {passiveImg:once}Recovers 50% HP"
    },
    {
      id: 1020591,
      name: "Frieza (Final Form) (Angel)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to Rainbow\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g} and DEF 100%{passiveImg:up_g}\n*When all allies are \"Otherworld Warriors\" Category\ncharacters*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1020601,
      name: "Perfect Cell (Angel)",
      element: 20,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g} and DEF 15%{passiveImg:up_g}\n*2 or more Rainbow Ki Spheres obtained*\n- All allies' Ki +2\n*When all allies are \"Otherworld Warriors\" Category\ncharacters*\n- Attacks are effective against all Types"
    },
    {
      id: 1020611,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 20%)"
    },
    {
      id: 1020621,
      name: "Super Saiyan 3 Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 30%)\n*When HP is 80% or less starting from the 3rd turn from the\nstart of battle*\n- Deactivates transformation"
    },
    {
      id: 1020641,
      name: "Super Saiyan 4 Vegito (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Crossover\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n- \"Giant Ape Power\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\nenormous power"
    },
    {
      id: 1020651,
      name: "Super Saiyan 4 Vegito (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- \"Crossover\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n- \"Giant Ape Power\" Category allies' Ki +1 and ATK & DEF\n20%{passiveImg:up_g}\n*When receiving a Super Attack*\n- High chance of nullifying it and countering with tremendous\npower"
    },
    {
      id: 1020661,
      name: "Super Saiyan 4 Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is another \"Giant Ape Power\" Category ally\nattacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1020671,
      name: "Super Saiyan 4 Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 140%{passiveImg:up_g}\n*When there is another \"Giant Ape Power\" Category ally\nattacking in the same turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1020681,
      name: "Super Saiyan 4 Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When another 4 or more \"Crossover\" Category allies are on\nthe team*\n- ATK & DEF 40%{passiveImg:up_g}\n*When HP is 80% or more*\n- Attacks are effective against all Types\n*When HP is 90% or more*\n- Performs a critical hit"
    },
    {
      id: 1020691,
      name: "Super Saiyan 4 Gohan",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When another 4 or more \"Giant Ape Power\" Category allies\nare on the team*\n- Damage reduction rate 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1020731,
      name: "Turles",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Terrifying Conquerors\" Category allies' Ki +1 and ATK &\nDEF 10%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Ki +3"
    },
    {
      id: 1020741,
      name: "Turles",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Terrifying Conquerors\" Category allies' Ki +2 and ATK &\nDEF 20%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Ki +3\n- Attacks are effective against all Types"
    },
    {
      id: 1020761,
      name: "Hercule",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n*When HP is 50% or more*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1020771,
      name: "Hercule/Majin Buu (Good)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n- \"Majin Buu Saga\" Category allies' Ki +1 and ATK & DEF\n10%{passiveImg:up_g}\n*When HP is 50% or more*\n- Damage reduction rate 30%{passiveImg:up_g}\n*After receiving 5 or more attacks in battle*\n- Exchanges with Majin Buu (Good) on the character's next\nattacking turn"
    },
    {
      id: 1020801,
      name: "Uub (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +2)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)\n*After receiving an attack*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1020811,
      name: "Uub (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*After receiving an attack*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1020821,
      name: "Demigra (Makyouka Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Extreme Class allies' Ki +3 and DEF 30%{passiveImg:up_g}\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n*Per \"Crossover\" Category ally on the team*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1020831,
      name: "Black Masked Saiyan",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK & DEF 160%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Ki +2\n*When another 3 or more \"Crossover\" Category allies are on\nthe team*\n- ATK 60%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1020841,
      name: "Dark Masked King",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Recovers 10% of damage dealt as HP\n*After receiving an attack*\n- DEF 100%{passiveImg:up_g} for 5 turn(s)\n*When there is another \"Dragon Ball Heroes\" Category ally\nattacking in the same turn*\n- Guards all attacks"
    },
    {
      id: 1020851,
      name: "Super Mira",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When attacking*\n- Disables the enemy's guard\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 50%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1020861,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking*\n- Ki +3 and ATK & DEF 90%{passiveImg:up_g}"
    },
    {
      id: 1020871,
      name: "Super Saiyan Vegeta (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking*\n- Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +2 and ATK & DEF 35%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1020881,
      name: "Demon God Salsa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*Per \"Crossover\" Category ally on the team*\n- ATK 10%{passiveImg:up_g} (up to 40%)\n- Chance of evading enemy's attack 5%{passiveImg:up_g} (up to 20%)"
    },
    {
      id: 1020891,
      name: "Demon God Salsa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*Per \"Crossover\" Category ally on the team*\n- ATK 15%{passiveImg:up_g} (up to 60%)\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1020901,
      name: "Demon God Dabura (Xeno)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 80%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y}\n*When facing 2 or more enemies*\n- DEF 80%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1020911,
      name: "Demon God Dabura (Xeno)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 100%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*When facing 2 or more enemies*\n- DEF 100%{passiveImg:up_g}\n- High chance of evading enemy's attack"
    },
    {
      id: 1020921,
      name: "Demigra",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- ATK & DEF 60%{passiveImg:up_g}\n*When HP is 60% or less*\n- {passiveImg:once}High chance of turning into Giant Form"
    },
    {
      id: 1020931,
      name: "Towa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3\n*Per Extreme Class ally on the team*\n- All allies' ATK & DEF 5%{passiveImg:up_g}\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1020941,
      name: "Mira",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- ATK 30%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n*When HP is 60% or less starting from the 4th turn from the\nstart of battle*\n- Absorbs Towa and Tokitoki's egg"
    },
    {
      id: 1020961,
      name: "Nuova Shenron",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Shadow Dragon Saga\" Category Super Class allies' DEF\n20%{passiveImg:up_g}\n*When there is a \"Shadow Dragon Saga\" Category enemy*\n- ATK & DEF 20%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1020971,
      name: "Nuova Shenron",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- \"Shadow Dragon Saga\" Category Super Class allies' DEF\n40%{passiveImg:up_g}\n*When there is a \"Shadow Dragon Saga\" Category enemy*\n- Ki +2\n- ATK & DEF 40%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- ATK & DEF 40%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1020981,
      name: "Super Saiyan 4 Gogeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Ki +2\n- ATK & DEF 40%{passiveImg:up_g}\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\nenormous power"
    },
    {
      id: 1020991,
      name: "Super Saiyan 4 Gogeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*For 8 turn(s) from the character's entry turn*\n- Ki +4 and ATK & DEF 40%{passiveImg:up_g}\n- Attacks are effective against all Types\n*Starting from the 9th turn from the start of battle*\n- High chance of attacks being effective against all Types\n*When receiving a Super Attack*\n- High chance of nullifying it and countering with tremendous\npower"
    },
    {
      id: 1021001,
      name: "Babidi & Majin Buu (Good)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 30000{passiveImg:up_g}\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- ATK 20000{passiveImg:up_g}\n*After receiving an attack*\n- Recovers 5% HP at the end of turn"
    },
    {
      id: 1021021,
      name: "Zangya",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn\n*Per \"Space-Traveling Warriors\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Boujack\"\nattacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1021031,
      name: "Zangya",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y}\n*Per \"Space-Traveling Warriors\" Category ally on the team*\n- ATK & DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Boujack\"\nattacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1021041,
      name: "Boujack",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When facing 1 or more enemies*\n- \"Space-Traveling Warriors\" Category allies' ATK & DEF\n20%{passiveImg:up_g}, plus an additional ATK & DEF 5%{passiveImg:up_g} when facing 2 or\nmore enemies, plus an additional ATK & DEF 5%{passiveImg:up_g} when\nfacing 3 or more enemies"
    },
    {
      id: 1021051,
      name: "Boujack",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing 1 or more enemies*\n- \"Space-Traveling Warriors\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}, plus an additional ATK & DEF 10%{passiveImg:up_g} when facing\n2 or more enemies, plus an additional ATK & DEF 10%{passiveImg:up_g} when\nfacing 3 or more enemies"
    },
    {
      id: 1021071,
      name: "Frieza (1st Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK & DEF 90%{passiveImg:up_g}\n*When HP is 49% or less*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1021081,
      name: "Golden Frieza & Sorbet",
      element: 21,
      rarity: 4,
      itemized_description: "*When HP is 50% or more*\n- ATK & DEF 120%{passiveImg:up_g}\n*When HP is 49% or less*\n- Damage reduction rate 50%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +6, performs a critical hit and stuns the attacked enemy\nwithin the turn"
    },
    {
      id: 1021091,
      name: "Grandpa Gohan & Pan (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n- High chance of ATK 70%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 40%)\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- Ki +1 and ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1021101,
      name: "Grandpa Gohan & Pan (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n- Great chance of ATK 80%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 80%)\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- Ki +2 and ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1021111,
      name: "Tien",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 180%{passiveImg:up_g}\n*When facing only 1 enemy*\n- DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n- {passiveImg:once}ATK 140%{passiveImg:up_g}\n- {passiveImg:once}DEF 30%{passiveImg:down_r}\n- {passiveImg:once}Stuns the attacked enemy for 2 turn(s)"
    },
    {
      id: 1021121,
      name: "Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every Ki Sphere obtained*\n- ATK & DEF 5%{passiveImg:up_g}"
    },
    {
      id: 1021131,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}"
    },
    {
      id: 1021271,
      name: "Tien",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 80%{passiveImg:up_g}\n- Launches 3 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1021281,
      name: "Janemba",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n- Guards all attacks\n*4 or more Type Ki Spheres obtained*\n- Extreme Class allies' ATK & DEF 20%{passiveImg:up_g}\n*2 or more Rainbow Ki Spheres obtained*\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1021291,
      name: "Janemba",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Guards all attacks\n*4 or more Type Ki Spheres obtained*\n- Extreme Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*2 or more Rainbow Ki Spheres obtained*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1021311,
      name: "Tien",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches 3 additional attacks, each of which has a high\nchance of becoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- ATK & DEF 44%{passiveImg:up_g} within the turn\n*When facing only 1 enemy*\n- High chance of evading enemy's attack"
    },
    {
      id: 1021321,
      name: "Paikuhan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*3 or more Type Ki Spheres obtained*\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Ki +3\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1021331,
      name: "Paikuhan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*3 or more Type Ki Spheres obtained*\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Ki +4\n- High chance of evading enemy's attack\n- Seals the attacked enemy's Super Attack"
    },
    {
      id: 1021341,
      name: "Ultimate Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 60%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy\n*When there is another \"Representatives of Universe 7\"\nCategory ally attacking in the same turn*\n- \"Representatives of Universe 7\" Category allies' ATK & DEF\n20%{passiveImg:up_g}"
    },
    {
      id: 1021351,
      name: "Ultimate Gohan & Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n- Great chance of stunning the attacked enemy\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Performs a critical hit\n*When there is another \"Representatives of Universe 7\"\nCategory ally attacking in the same turn*\n- \"Representatives of Universe 7\" Category allies' Ki +2 and\nATK & DEF 20%{passiveImg:up_g}\n- Disables the enemy's guard when attacking with 12 or more\nKi"
    },
    {
      id: 1021361,
      name: "Golden Frieza (Angel)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*After performing a Super Attack*\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y}\n*When there is another \"Representatives of Universe 7\"\nCategory ally attacking in the same turn*\n- \"Representatives of Universe 7\" Category allies' ATK & DEF\n20%{passiveImg:up_g}"
    },
    {
      id: 1021371,
      name: "Golden Frieza (Angel) & Ultimate Gohan",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*After performing a Super Attack*\n- Attacked enemy's ATK & DEF 30%{passiveImg:down_y}\n*When there is another \"Representatives of Universe 7\"\nCategory ally attacking in the same turn*\n- \"Representatives of Universe 7\" Category allies' Ki +2 and\nATK & DEF 20%{passiveImg:up_g}\n- Great chance of guarding all attacks after performing a\nSuper Attack"
    },
    {
      id: 1021381,
      name: "Vegeta (GT)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is a \"Giant Ape Power\" Category ally attacking in\nthe same turn*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1021391,
      name: "Vegeta (GT) (Giant Ape)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is another \"Giant Ape Power\" Category ally\nattacking in the same turn*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 50% or less starting from the 4th turn from the\nstart of battle*\n- {passiveImg:once}Turns into Giant Ape"
    },
    {
      id: 1021411,
      name: "Golden Frieza (Angel)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional attack\n- High chance of launching an additional attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1021421,
      name: "Golden Frieza (Angel)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Launches an additional attack\n- High chance of launching an additional attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 6%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1021441,
      name: "Bardock (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 60%{passiveImg:up_g}\n- {passiveImg:once}Chance of turning into Giant Ape\n*When there is a \"Wicked Bloodline\" Category enemy*\n- Ki +1\n- ATK 60%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1021451,
      name: "Krillin",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- High chance of guarding all attacks\n*After guard is activated*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1021461,
      name: "Android #17",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1021471,
      name: "Android #17",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1021491,
      name: "Goku (Dokkan Butoden)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 88%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 88%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- ATK 22%{passiveImg:up_g}"
    },
    {
      id: 1021501,
      name: "Vegeta (Dokkan Butoden)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 88%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 88%{passiveImg:up_g}\n*When attacking a Super Class enemy*\n- ATK 22%{passiveImg:up_g}"
    },
    {
      id: 1021531,
      name: "Master Roshi & Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 30%{passiveImg:up_g}\n- \"Representatives of Universe 7\" Category allies' ATK & DEF\n10%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1021541,
      name: "Master Roshi & Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Representatives of Universe 7\" Category allies' Ki +1 and\nATK & DEF 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1021551,
      name: "Veku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 30%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK 10%{passiveImg:down_r} (no more than -70%)\n*For every attack received*\n- {passiveImg:forever}DEF & chance of evading enemy's attack 10%{passiveImg:up_g} (up to\n30%)"
    },
    {
      id: 1021561,
      name: "Veku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 150%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK 10%{passiveImg:down_r} (no more than -50%)\n*When attacking with 12 or more Ki*\n- Medium chance of performing a critical hit\n*For every attack received*\n- {passiveImg:forever}DEF & chance of evading enemy's attack 10%{passiveImg:up_g} (up to\n50%)"
    },
    {
      id: 1021601,
      name: "Master Roshi",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 60%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Turtle School\" Category allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1021611,
      name: "Master Roshi",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Turtle School\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1021631,
      name: "Krillin & Android #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to INT\n*6 or more INT Ki Spheres obtained*\n- Launches an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1021641,
      name: "Krillin & Android #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: PHY to INT\n*6 or more INT Ki Spheres obtained*\n- Launches an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1021661,
      name: "Super Saiyan Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate & chance of performing a critical hit\n10%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- Ki +2\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1021671,
      name: "Legendary Super Saiyan Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n- Damage reduction rate & chance of performing a critical hit\n18%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- Ki +3\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Damage reduction rate & chance of performing a critical hit\n18%{passiveImg:up_g} within the turn after performing a Super Attack"
    },
    {
      id: 1021681,
      name: "Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of ATK & DEF 20%{passiveImg:up_g}\n- Great chance of ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1021691,
      name: "Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of ATK & DEF 50%{passiveImg:up_g}\n- Great chance of ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n- {passiveImg:forever}Chance of evading enemy's attack 7%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1021701,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Universe Survival Saga\" Category allies' Ki +3"
    },
    {
      id: 1021711,
      name: "Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n- \"Hybrid Saiyans\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}"
    },
    {
      id: 1021721,
      name: "Super Saiyan Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n- \"Hybrid Saiyans\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}"
    },
    {
      id: 1021751,
      name: "Vegeta (Kid)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*Per existing enemy*\n- Ki +1\n- ATK & DEF 20%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- High chance of launching an additional Super Attack\n- ATK 70%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1021771,
      name: "Goten (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Gifted Warriors\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 7%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1021781,
      name: "Super Saiyan Goten (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Gifted Warriors\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1021801,
      name: "Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*Before attacking*\n- High chance of evading enemy's attack\n*When attacking*\n- ATK 30%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1021811,
      name: "Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 158%{passiveImg:up_g}\n*Before attacking*\n- High chance of evading enemy's attack\n*When attacking*\n- ATK 58%{passiveImg:up_g}\n*After evading an attack*\n- Attacks are effective against all Types\n*After receiving an attack*\n- ATK 58%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Launches an additional Super Attack\n*As the 3rd attacker in a turn*\n- ATK 58%{passiveImg:up_g}\n- High chance of evading enemy's attack"
    },
    {
      id: 1021841,
      name: "Great Saiyaman",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 41%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 41%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1021851,
      name: "Great Saiyaman & Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- \"Defenders of Justice\" Category allies' Ki +3 and ATK, DEF &\nchance of performing a critical hit 18%{passiveImg:up_g}\n*Per \"Defenders of Justice\" Category ally on the team*\n- Chance of performing a critical hit 4%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 58%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- ATK & DEF 41%{passiveImg:up_g}"
    },
    {
      id: 1021861,
      name: "Krillin",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Super Class allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Trunks (Kid)\" or\n\"Goten (Kid)\" attacking in the same turn*\n- ATK 80%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- Super Class allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1021871,
      name: "Krillin",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Trunks (Kid)\" or\n\"Goten (Kid)\" attacking in the same turn*\n- ATK 120%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Damage reduction rate 10%{passiveImg:up_g}\n- Super Class allies' chance of performing a critical hit 10%{passiveImg:up_g}"
    },
    {
      id: 1021891,
      name: "Frieza (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Revenge\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*Per \"Revenge\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}"
    },
    {
      id: 1021901,
      name: "Frieza (Final Form) & Army of the Dead",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Revenge\" Category allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n*Per \"Revenge\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n*When there is a \"Defenders of Justice\" Category enemy, or\nwhen all allies attacking in the same turn are \"Revenge\"\nCategory Extreme Class characters*\n- Performs a critical hit"
    },
    {
      id: 1021911,
      name: "Super Saiyan Goku (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 10%{passiveImg:up_g} per Ki Sphere obtained"
    },
    {
      id: 1021921,
      name: "Super Saiyan Goku (GT)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 180%{passiveImg:up_g}\n- DEF 120%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When attacking with 12 or more Ki*\n- ATK 20%{passiveImg:up_g} per Ki Sphere obtained\n*Per \"GT Heroes\" Category ally attacking in the same turn\n(self excluded)*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1021931,
      name: "Super Saiyan Vegeta (GT)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 5%{passiveImg:up_g} per Ki Sphere obtained"
    },
    {
      id: 1021941,
      name: "Super Saiyan Vegeta (GT)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 180%{passiveImg:up_g}\n- DEF 120%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 10%{passiveImg:up_g} per Ki Sphere obtained\n*Per \"GT Heroes\" Category ally attacking in the same turn\n(self excluded)*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1021951,
      name: "Tapion & Minotia",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Storied Figures\" Category allies' ATK & DEF 10%{passiveImg:up_g}\n- \"Siblings' Bond\" Category allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1021961,
      name: "Tapion & Minotia",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Storied Figures\" Category allies' Ki +1 and ATK & DEF\n10%{passiveImg:up_g}\n- \"Siblings' Bond\" Category allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- Damage reduction rate 10%{passiveImg:up_g}"
    },
    {
      id: 1021981,
      name: "Super Saiyan 3 Vegeta (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 60%{passiveImg:up_g} and DEF 30%{passiveImg:up_g} for 6 turns\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 60%)\n- {passiveImg:forever}DEF 5%{passiveImg:up_g} (up to 30%)\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1021991,
      name: "Super Saiyan 3 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 60%)\n- {passiveImg:forever}DEF 5%{passiveImg:up_g} (up to 30%)\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 30%)\n*When HP is 60% or less*\n- High chance of guarding all attacks\n*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1022001,
      name: "Meta-Rilldo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 120%{passiveImg:up_g}\n- \"GT Bosses\" Category allies' Ki +2 and DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*When there is a \"GT Heroes\" Category enemy*\n- ATK & DEF 60%{passiveImg:up_g}\n- Attacks are effective against all Types\n- High chance of stunning the attacked enemy for 2 turn(s)\n*After receiving an attack*\n- Recovers 5% HP at the end of turn"
    },
    {
      id: 1022011,
      name: "Trunks (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Movie Heroes\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g}\n*When there is an ally whose name includes \"Tapion\" on the\nteam*\n- All allies' DEF 30%{passiveImg:up_g}\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1022021,
      name: "Trunks (GT) & Goten (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- \"Goku's Family\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n- \"Vegeta's Family\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1022031,
      name: "Goten (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"GT Heroes\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1022041,
      name: "Gohan (GT) & Goten (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- \"GT Heroes\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}"
    },
    {
      id: 1022051,
      name: "Garlic Jr.",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Extreme Class allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking a Super Class enemy*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1022061,
      name: "Super Garlic Jr.",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 160%{passiveImg:up_g}\n- Extreme Class allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*When attacking a Super Class enemy*\n- ATK & DEF 60%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy\n*After receiving an attack*\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 1022071,
      name: "Super #17",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 12%{passiveImg:up_g} and damage reduction rate 12%{passiveImg:up_g} for 3 turn(s)\nafter the end of the turn"
    },
    {
      id: 1022081,
      name: "Super #17",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 15%{passiveImg:up_g} and damage reduction rate 15%{passiveImg:up_g} for 3 turn(s)\nafter the end of the turn"
    },
    {
      id: 1022101,
      name: "Goku & Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of launching an additional attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1022111,
      name: "Goku & Piccolo",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of launching an additional attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1022151,
      name: "Super Saiyan Gotenks",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Time Limit\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 40%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1022161,
      name: "Super Saiyan Gotenks",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Time Limit\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 70%{passiveImg:up_g}\n- High chance of performing a critical hit\n*When facing 2 or more enemies*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1022171,
      name: "Goku (Angel) & Vegeta (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- High chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1022181,
      name: "Goku (Angel) & Vegeta (Angel)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 110%{passiveImg:up_g}\n- Damage reduction rate 25%{passiveImg:up_g}\n- High chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained"
    },
    {
      id: 1022211,
      name: "Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 120%{passiveImg:up_g}\n- All allies' Ki +2 and DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1022221,
      name: "Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 158%{passiveImg:up_g}\n- All allies' Ki +3 and DEF 58%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 158%{passiveImg:up_g}\n*When there is another \"Heavenly Events\" Category ally\nattacking in the same turn*\n- ATK & DEF 58%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 58%{passiveImg:up_g} and stuns enemies attacked by the character's\nSuper Attack within the turn"
    },
    {
      id: 1022261,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 159%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n- Medium chance of performing a critical hit\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:up_g} (up to 59%)"
    },
    {
      id: 1022271,
      name: "Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 159%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n- Medium chance of performing a critical hit\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 7%{passiveImg:up_g} (up to 70%)\n*When there is another \"World Tournament\" Category ally\nattacking in the same turn*\n- ATK & DEF 159%{passiveImg:up_g}\n- Chance of performing a critical hit 20%{passiveImg:up_g}"
    },
    {
      id: 1022281,
      name: "Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 158%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Damage reduction rate 30%{passiveImg:up_g}\n*When there is another \"Goku's Family\" Category ally on the\nteam*\n- ATK & DEF 58%{passiveImg:up_g}"
    },
    {
      id: 1022301,
      name: "Piccolo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"Heavenly Events\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*When \"Gohan (Kid)\" is on the team*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1022311,
      name: "Piccolo & Krillin",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Heavenly Events\" Category allies' Ki +3 and ATK & DEF\n30%{passiveImg:up_g}\n*When \"Gohan (Kid)\" is on the team*\n- ATK & DEF 100%{passiveImg:up_g}\n*When \"Gohan (Kid)\" is attacking in the same turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- Foresees enemy's Super Attack"
    },
    {
      id: 1022321,
      name: "Mercenary Tao",
      element: 23,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 5648{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 10108{passiveImg:up_g}"
    },
    {
      id: 1022331,
      name: "Mercenary Tao",
      element: 23,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 5648{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 7564{passiveImg:up_g} per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK & DEF 10108{passiveImg:up_g}"
    },
    {
      id: 1022351,
      name: "Goku & Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*For every turn passed from the start of battle*\n- {passiveImg:forever}Ki +1 (up to +7)\n- {passiveImg:forever}ATK & DEF 11%{passiveImg:up_g} (up to 77%)\n*Starting from the 7th turn from the start of battle*\n- ATK 77%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- Performs a critical hit"
    },
    {
      id: 1022361,
      name: "Super Saiyan God Goku & \nSuper Saiyan God Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1022371,
      name: "Super Saiyan God Goku & \nSuper Saiyan God Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1022401,
      name: "Super Saiyan 4 Goku & Super Saiyan 4 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1022411,
      name: "Super Saiyan 4 Goku & Super Saiyan 4 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1022441,
      name: "Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Planet Namek Saga\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)\n*For every Rainbow Ki Sphere obtained*\n- Recovers 4% HP"
    },
    {
      id: 1022451,
      name: "Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n- \"Planet Namek Saga\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*For every Rainbow Ki Sphere obtained*\n- Recovers 6% HP"
    },
    {
      id: 1022461,
      name: "Frieza (3rd Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- High chance of launching an additional attack that has a high\nchance of becoming a Super Attack\n- \"Sworn Enemies\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 5%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1022471,
      name: "Frieza (3rd Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- High chance of launching an additional attack that has a high\nchance of becoming a Super Attack\n- \"Sworn Enemies\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 7%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1022571,
      name: "Super Janemba",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Guards all attacks"
    },
    {
      id: 1022581,
      name: "Super Janemba",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Guards all attacks"
    },
    {
      id: 1022611,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK 30%{passiveImg:up_g}\n*When there is an Extreme Class enemy*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1022621,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK 40%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*When there is an Extreme Class enemy*\n- ATK 40%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn (up to +2)"
    },
    {
      id: 1022641,
      name: "Super Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1022651,
      name: "Super Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 50%{passiveImg:up_g}\n*After performing a Super Attack*\n- Stuns the attacked enemy"
    },
    {
      id: 1022661,
      name: "Trunks (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Vegeta's Family\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}"
    },
    {
      id: 1022671,
      name: "Marcarita",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Universe 11\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n- \"Realm of Gods\", \"Siblings' Bond\" or \"Bond of Master and\nDisciple\" Category allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1022681,
      name: "Marcarita",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 110%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Universe 11\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n- \"Realm of Gods\", \"Siblings' Bond\" or \"Bond of Master and\nDisciple\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 11%{passiveImg:up_g} (up to 44%)\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 1022691,
      name: "Cell (2nd Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 60%{passiveImg:up_g}\n- \"Androids/Cell Saga\" Category Extreme Class allies' Ki +2\nand ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1022701,
      name: "Cell (2nd Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n- \"Androids/Cell Saga\" Category Extreme Class allies' Ki +3\nand ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 180%{passiveImg:up_g}\n*When there is an \"Androids/Cell Saga\" Category enemy*\n- Chance of performing a critical hit & damage reduction rate\n18%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Android\"*\n- High chance of stunning all enemies"
    },
    {
      id: 1022711,
      name: "Kyawei",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1022721,
      name: "Kyawei",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 140%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n- Medium chance of Ki +2\n- Medium chance of launching an additional Super Attack\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki if the target enemy is in\nthe following status: {passiveImg:atk_down} or {passiveImg:astute}*\n- Attacks are effective against all Types\n*When attacking with 12 or more Ki if the target enemy is in\nthe following status: {passiveImg:stun}*\n- Performs a critical hit"
    },
    {
      id: 1022731,
      name: "Frieza (Full Power)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For 6 turn(s) from the character's entry turn*\n- ATK & DEF 70%{passiveImg:up_g}\n*Starting from the 7th turn from the character's entry turn*\n- ATK 30%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1022741,
      name: "Frieza (Full Power)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 80%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of launching an additional Super Attack\n*For 6 turn(s) from the character's entry turn*\n- ATK & DEF 80%{passiveImg:up_g}\n*Starting from the 7th turn from the character's entry turn*\n- ATK 40%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- ATK 40%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn (up to +2)"
    },
    {
      id: 1022761,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- All allies' ATK & DEF 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1022771,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1022791,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Ki +2 and ATK & DEF 59000{passiveImg:up_g}"
    },
    {
      id: 1022801,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Ki +2 and ATK & DEF 59000{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 58000{passiveImg:up_g}"
    },
    {
      id: 1022821,
      name: "Caulifla & Kale",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 4%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1022831,
      name: "Caulifla & Kale",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 160%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 6%{passiveImg:up_g} (up to 60%)\n*When there is a \"Universe Survival Saga\" Category enemy*\n- ATK 60%{passiveImg:up_g} when attacking"
    },
    {
      id: 1022851,
      name: "Cabba",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Universe Survival Saga\" Category allies' Ki +2 and ATK &\nDEF 20%{passiveImg:up_g}\n*Per \"Universe Survival Saga\" Category ally on the team*\n- ATK & DEF 4%{passiveImg:up_g}"
    },
    {
      id: 1022861,
      name: "Super Saiyan Cabba",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- \"Universe Survival Saga\" Category allies' Ki +3 and ATK &\nDEF 40%{passiveImg:up_g}\n*Per \"Universe Survival Saga\" Category ally on the team*\n- ATK & DEF 6%{passiveImg:up_g}\n*When there is an ally whose name includes \"Vegeta\" (Kid, Jr.,\netc. excluded) attacking in the same turn*\n- ATK 60%{passiveImg:up_g} when attacking"
    },
    {
      id: 1022871,
      name: "Krillin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1022881,
      name: "Krillin/Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1022921,
      name: "Krillin & Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1022931,
      name: "Krillin & Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1022961,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK 50%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- DEF 50%{passiveImg:up_g}\n*When attacking with 5 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1022971,
      name: "Bardock",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 35%{passiveImg:up_g}\n*When there is an Extreme Class enemy*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 35%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 35%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When facing 2 or more enemies*\n- Ki +5 and ATK & DEF 35%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack"
    },
    {
      id: 1022981,
      name: "Frieza (1st Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 35%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 35%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- ATK & DEF 35%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 35%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1022991,
      name: "Zarbon",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 40%)\n*When there is an ally whose name includes \"Frieza\" (Frieza\nSoldier excluded) attacking in the same turn*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1023001,
      name: "Zarbon & Dodoria",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"Space-Traveling Warriors\" Category allies' Ki +2 and ATK &\nDEF 20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Frieza\" (Frieza\nSoldier excluded) attacking in the same turn*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1023021,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 100%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 30%{passiveImg:up_g}\n*When HP is 30% or more*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1023031,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK 120%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 40%{passiveImg:up_g}\n*When HP is 30% or more*\n- DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1023051,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 159%)\n*When HP is 59% or less*\n- Damage reduction rate 59%{passiveImg:up_g}"
    },
    {
      id: 1023061,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 200%)\n*For 5 turn(s) from the character's entry turn*\n- Ki +5\n- Chance of performing a critical hit & damage reduction rate\n59%{passiveImg:up_g}\n- 59% chance of launching an additional Super Attack\n*Starting from the 6th turn from the start of battle*\n- DEF 59%{passiveImg:up_g}\n*When HP is 59% or less*\n- Damage reduction rate 59%{passiveImg:up_g}"
    },
    {
      id: 1023071,
      name: "Hit & Super Saiyan God Goku",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n- Disables the enemy's guard\n*As the 3rd attacker in a turn*\n- Ki +3 and ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1023081,
      name: "Hit & Super Saiyan God Goku",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n- Attacks guaranteed to hit\n- Disables the enemy's guard\n*As the 3rd attacker in a turn*\n- Ki +4 and ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1023101,
      name: "Trunks (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack\n- High chance of launching an additional attack\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1023111,
      name: "Trunks (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack\n- Great chance of launching an additional attack\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*Every time the character performs 3 attack(s) in battle*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack (up to once within a turn)"
    },
    {
      id: 1023131,
      name: "Nappa (Teen)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- High chance of ATK 78%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1023151,
      name: "Hacchan (Berserk)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*After receiving an attack*\n- ATK & DEF 80%{passiveImg:up_g} for 8 turn(s)"
    },
    {
      id: 1023161,
      name: "Hacchan & Android #17",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*When HP is 80% or less*\n- ATK 80%{passiveImg:up_g}\n- Chance of performing a critical hit & damage reduction rate\n17%{passiveImg:up_g}\n*For 8 turn(s) from the character's entry turn*\n- Guards all attacks\n*After receiving an attack*\n- ATK & DEF 80%{passiveImg:up_g} for 8 turn(s)"
    },
    {
      id: 1023171,
      name: "Hit",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- ATK 60%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of evading enemy's attack\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1023181,
      name: "Dark King Mechikabura (Power of Time Unleashed)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n*2 or more AGL Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n*2 or more STR or PHY Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}\n*2 or more TEQ or INT Ki Spheres obtained*\n- DEF 50%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Recovers 5% HP"
    },
    {
      id: 1023191,
      name: "Dark King Mechikabura (Power of Time Unleashed)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*2 or more AGL Ki Spheres obtained*\n- ATK & DEF 80%{passiveImg:up_g}\n*2 or more STR or PHY Ki Spheres obtained*\n- ATK 80%{passiveImg:up_g}\n*2 or more TEQ or INT Ki Spheres obtained*\n- DEF 80%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Recovers 8% HP"
    },
    {
      id: 1023201,
      name: "Robelu",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- High chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 80%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 180%{passiveImg:up_g}\n*When there is another \"Dragon Ball Heroes\" Category ally\nattacking in the same turn*\n- High chance of foreseeing enemy's Super Attack"
    },
    {
      id: 1023211,
      name: "Supreme Kai of Time (Brainwashed)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies\n- ATK & DEF 90%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 90%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:def_down}*\n- ATK 90%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 90%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 90%{passiveImg:up_g}"
    },
    {
      id: 1023231,
      name: "Super Saiyan God Trunks (Xeno)",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Dragon Ball Heroes\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1023241,
      name: "Super Saiyan God Trunks (Xeno)",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Dragon Ball Heroes\" Category ally on the team*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n*When all allies attacking in the same turn are \"Dragon Ball\nHeroes\" Category characters*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 1023251,
      name: "Pan (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Dragon Ball Heroes\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Medium chance of evading enemy's attack\n*Per \"Dragon Ball Heroes\" Category ally attacking in the\nsame turn (self excluded)*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023261,
      name: "Pan (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- \"Dragon Ball Heroes\" Category allies' Ki +3 and ATK & DEF\n40%{passiveImg:up_g}\n- High chance of performing a critical hit\n- High chance of evading enemy's attack\n*Per \"Dragon Ball Heroes\" Category ally attacking in the\nsame turn (self excluded)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack evaded*\n- DEF 50%{passiveImg:up_g} within the turn"
    },
    {
      id: 1023271,
      name: "Super Saiyan Vegeks (Xeno)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- Launches an additional Super Attack"
    },
    {
      id: 1023281,
      name: "Super Saiyan 3 Gotenks (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*When there is another \"Dragon Ball Heroes\" Category ally\nattacking in the same turn, or when the target enemy is in the\nfollowing status: {passiveImg:stun} or {passiveImg:astute}*\n- Launches an additional Super Attack"
    },
    {
      id: 1023291,
      name: "Super Saiyan 3 Gohanks (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*When there is another \"Dragon Ball Heroes\" Category ally\nattacking in the same turn, or when the target enemy is in the\nfollowing status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Launches an additional Super Attack"
    },
    {
      id: 1023301,
      name: "Super Saiyan Goku (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Goku's Family\" Category allies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n*When there is another \"Goku's Family\" Category ally on the\nteam*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1023311,
      name: "Super Saiyan Vegeta (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Vegeta's Family\" Category allies' Ki +2 and ATK & DEF\n40%{passiveImg:up_g}\n*When there is another \"Vegeta's Family\" Category ally on the\nteam*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1023321,
      name: "Demon Goddess Putine",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Crossover\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n*Per \"Crossover\" Category ally on the team (self excluded)*\n- ATK & DEF 8%{passiveImg:up_g}"
    },
    {
      id: 1023331,
      name: "Demon Goddess Putine",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Crossover\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n- Seals the attacked enemy's Super Attack\n*Per \"Crossover\" Category ally on the team (self excluded)*\n- ATK & DEF 12%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute}*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1023351,
      name: "Androids #17 (Future) & #18 (Future)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 130%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every TEQ Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- ATK 40%{passiveImg:up_g}\n*8 or more Ki Spheres obtained*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1023361,
      name: "Androids #17 (Future) & #18 (Future)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 170%{passiveImg:up_g}\n- DEF 180%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every TEQ Ki Sphere obtained*\n- ATK & DEF 35%{passiveImg:up_g}\n*For every non-TEQ Ki Sphere obtained*\n- ATK 18%{passiveImg:up_g}\n- DEF 17%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- ATK 70%{passiveImg:up_g}\n*8 or more Ki Spheres obtained*\n- DEF 80%{passiveImg:up_g}\n*If HP is 35% or less when attacking*\n- Launches an additional Super Attack\n*If HP is 35% or more when receiving a Ki Blast Super Attack*\n- Nullifies it"
    },
    {
      id: 1023371,
      name: "Dr. Gero & Android #19",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 140%{passiveImg:up_g}\n- DEF 130%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 39%{passiveImg:up_g}\n- Disables the enemy's guard"
    },
    {
      id: 1023381,
      name: "Dr. Gero & Android #19",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 200%{passiveImg:up_g}\n- DEF 190%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 39%{passiveImg:up_g}\n- Disables the enemy's guard\n*When HP is 39% or less*\n- Foresees enemy's Super Attack\n*When receiving a Ki Blast Super Attack*\n- Absorbs it and recovers 39% of the damage absorbed as HP"
    },
    {
      id: 1023391,
      name: "Super Saiyan 2 Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +1 and ATK & DEF 25%{passiveImg:up_g}\n- \"Crossover\" Category allies' Ki +1 and ATK & DEF 15%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*Per \"Crossover\" Category ally attacking in the same turn\n(self excluded)*\n- ATK 30%{passiveImg:up_g}\n- DEF 15%{passiveImg:up_g}\n- Chance of performing a critical hit 15%{passiveImg:up_g}"
    },
    {
      id: 1023401,
      name: "Super Saiyan Gohan (Future) & Trunks (Youth) (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 58% or more*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*5 or more Ki Spheres obtained*\n- DEF 30%{passiveImg:up_g}\n*5 or more AGL Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1023411,
      name: "Super Saiyan Gohan (Future) & Trunks (Youth) (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When HP is 58% or more*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*5 or more Ki Spheres obtained*\n- DEF 40%{passiveImg:up_g}\n*5 or more AGL Ki Spheres obtained*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1023451,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023461,
      name: "Super Saiyan 2 Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- High chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1023481,
      name: "Buu (Kid)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*After receiving an attack*\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 1023491,
      name: "Buu (Kid)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*After receiving an attack*\n- Recovers 20% HP at the end of turn\n*When receiving an Unarmed Super Attack*\n- Great chance of nullifying it"
    },
    {
      id: 1023501,
      name: "Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023511,
      name: "Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1023561,
      name: "Broly",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*2 or more Ki Spheres obtained*\n- Disables the enemy's guard\n*After delivering a final blow*\n- Recovers 26% HP at the end of turn"
    },
    {
      id: 1023571,
      name: "Broly",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*When attacking with 2 or more Ki Spheres obtained*\n- Disables the enemy's guard\n*6 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n*If the target enemy's HP is 80% or less when attacking*\n- Attacks are effective against all Types\n*After delivering a final blow*\n- Recovers 26% HP at the end of turn"
    },
    {
      id: 1023581,
      name: "Syn Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking with 2 or more Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 3 or more Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 4 or more Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 5 or more Ki Spheres obtained*\n- Disables the enemy's guard\n*When attacking with 6 or more Ki Spheres obtained*\n- Medium chance of performing a critical hit\n*When attacking with 7 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1023591,
      name: "Syn Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 2 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 3 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 4 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 5 or more Ki Spheres obtained*\n- Disables the enemy's guard\n*When attacking with 6 or more Ki Spheres obtained*\n- High chance of performing a critical hit\n*When attacking with 7 or more Ki Spheres obtained*\n- ATK & DEF 70%{passiveImg:up_g}\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1023601,
      name: "Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1023611,
      name: "Goku (Kaioken)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1023631,
      name: "Trunks (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 15%{passiveImg:up_g}\n*Per \"Saviors\" Category ally attacking in the same turn (self\nexcluded)*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1023641,
      name: "Yamhan",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*If HP is 80% or less when attacking with 12 or more Ki*\n- ATK 60%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When HP is 80% or less*\n- {passiveImg:once}Ki +6 and ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1023651,
      name: "Cellza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Recovers 10% HP at the start of turn\n*If HP is 50% or more when attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1023661,
      name: "Whirus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Changes Ki Spheres: TEQ & INT to PHY\n*5 or more Ki Spheres obtained*\n- Medium chance of evading enemy's attack\n*7 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g} when attacking"
    },
    {
      id: 1023671,
      name: "Janembu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Attacked enemy's ATK 30%{passiveImg:down_y}\n*Per Extreme Class ally attacking in the same turn (self\nexcluded)*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023681,
      name: "Chiaoman",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- DEF 160%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n*When HP is 50% or less*\n- {passiveImg:once}Ki +8 and ATK 200%{passiveImg:up_g}"
    },
    {
      id: 1023691,
      name: "Tekka",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of all allies' ATK & DEF 25%{passiveImg:up_g}\n*When there is another \"Crossover\" Category ally attacking in\nthe same turn*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023701,
      name: "Pinich",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}"
    },
    {
      id: 1023711,
      name: "Coolieza",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of launching an additional Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1023721,
      name: "Jeice & Burter",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n- Medium chance of evading enemy's attack\n- \"Space-Traveling Warriors\" Category allies' Ki +2 and ATK &\nDEF 20%{passiveImg:up_g}"
    },
    {
      id: 1023731,
      name: "Jeice & Burter",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n- High chance of evading enemy's attack\n- \"Space-Traveling Warriors\" Category allies' Ki +3 and ATK &\nDEF 30%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Ginyu\" attacking\nin the same turn*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023741,
      name: "Recoome & Guldo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n- Seals the attacked enemy's Super Attack\n*After guard is activated*\n- DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1023751,
      name: "Recoome & Guldo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n- High chance of guarding all attacks\n- Seals the attacked enemy's Super Attack\n*After guard is activated*\n- DEF 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Ginyu\" attacking\nin the same turn*\n- Guards all attacks\n- High chance of stunning the attacked enemy"
    },
    {
      id: 1023761,
      name: "Captain Ginyu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}\n*Per \"Ginyu Force\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g} (up to 35%)"
    },
    {
      id: 1023771,
      name: "Captain Ginyu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- \"Ginyu Force\" Category allies' ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*Per \"Ginyu Force\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is another \"Ginyu Force\" Category ally on the\nteam*\n- Attacks are effective against all Types"
    },
    {
      id: 1023791,
      name: "Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 30%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1023801,
      name: "Super Saiyan Trunks (Kid) & Super Saiyan Goten (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 50%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- High chance of launching an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Vegeta\" (Kid, Jr.,\netc. excluded) on the team*\n- Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of performing a critical hit if that ally is\nattacking in the same turn"
    },
    {
      id: 1023811,
      name: "Android #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*After receiving an attack*\n- ATK & DEF 80%{passiveImg:up_g} for 3 turn(s)\n*After evading an attack*\n- ATK 180%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1023841,
      name: "Goku Jr. & Vegeta Jr.",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1023851,
      name: "Goku Jr. & Vegeta Jr.",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*For every attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 40%)\n*5 or more Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1023871,
      name: "Gohan (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- ATK 59%{passiveImg:up_g}"
    },
    {
      id: 1023881,
      name: "Gohan (Teen) & Goten (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Ki +1 and ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1023911,
      name: "Mighty Mask",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy*\n- DEF 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1023921,
      name: "Chi-Chi",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 11%{passiveImg:up_g} (up to 22%)"
    },
    {
      id: 1023931,
      name: "Goku & Chi-Chi",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 22%{passiveImg:up_g} (up to 44%)"
    },
    {
      id: 1023941,
      name: "Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1023951,
      name: "Vegeta & Bulma",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When receiving an attack*\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*Starting from the 4th turn from the start of battle*\n- Changes into a different battle suit"
    },
    {
      id: 1023971,
      name: "Majin Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- DEF 30%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- Damage reduction rate 18%{passiveImg:up_g}"
    },
    {
      id: 1023981,
      name: "Majin Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is an ally\nwhose name includes \"Trunks\" on the team at the start of the\ncharacter's attacking turn*\n- {passiveImg:once}{passiveImg:forever}Damage reduction rate 30%{passiveImg:up_g}\n*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- DEF 50%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When HP is 88% or less*\n- ATK 88%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres"
    },
    {
      id: 1024001,
      name: "Piccolo",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*When attacking with 9 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1024011,
      name: "Vegeta (Kid)",
      element: 20,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 60%)\n*When there is another \"Youth\" Category ally attacking in the\nsame turn*\n- DEF 30%{passiveImg:up_g}\n*When there is another \"Gifted Warriors\" Category ally\nattacking in the same turn*\n- DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1024021,
      name: "Android #16",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When all allies attacking in the same turn are \"Androids/Cell\nSaga\" Category characters*\n- Medium chance of guarding all attacks\n*After guard is activated*\n- Damage reduction rate 55%{passiveImg:up_g}"
    },
    {
      id: 1024031,
      name: "King Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4\n- ATK & DEF 30%{passiveImg:up_g}\n- \"Pure Saiyans\" or \"Vegeta's Family\" Category allies' DEF\n15%{passiveImg:up_g}\n*Per \"Pure Saiyans\" Category ally on the team*\n- ATK & DEF 5%{passiveImg:up_g}"
    },
    {
      id: 1024041,
      name: "King Cold",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- All enemies' ATK 25%{passiveImg:down_y}\n*When HP is 50% or more*\n- ATK & DEF 40%{passiveImg:up_g}\n- \"Wicked Bloodline\" Category allies' ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1024051,
      name: "Raditz",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki\n- ATK 50%{passiveImg:up_g} and medium chance of performing a critical hit\nif that enemy's HP is 50% or less when attacking with 12 or\nmore Ki\n*When facing 2 or more enemies*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1024061,
      name: "Raditz",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki\n- ATK 100%{passiveImg:up_g} and high chance of performing a critical hit if\nthat enemy's HP is 50% or less when attacking with 12 or more\nKi\n*When facing 2 or more enemies*\n- DEF 150%{passiveImg:up_g}\n- Performs a critical hit within the turn after receiving an\nattack\n*After delivering a final blow*\n- {passiveImg:forever}Ki +2"
    },
    {
      id: 1024071,
      name: "Nappa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 78%{passiveImg:up_g}\n- \"Saiyan Saga\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 378%)"
    },
    {
      id: 1024081,
      name: "Nappa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 178%{passiveImg:up_g}\n- \"Saiyan Saga\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 780%)\n*When facing only 1 enemy*\n- ATK 78%{passiveImg:up_g}\n*Per existing Super Class enemy*\n- \"Saiyan Saga\" Category allies' ATK 7%{passiveImg:up_g} and DEF 8%{passiveImg:up_g}"
    },
    {
      id: 1024091,
      name: "Grandpa Gohan",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is another \"Goku's Family\" Category ally on the\nteam*\n- All allies' ATK & DEF 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku (Youth)\"\nattacking in the same turn*\n- All allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1024101,
      name: "Para Para Brothers",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n*When the character is the 1st or 2nd to obtain Ki Spheres in a\nturn*\n- Ki +1\n- All allies' ATK 20%{passiveImg:up_g} (self excluded)\n*When the character is the 3rd to obtain Ki Spheres in a turn*\n- DEF 80%{passiveImg:up_g}\n- All allies' Ki +1 and DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1024111,
      name: "Para Para Brothers",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- DEF 120%{passiveImg:up_g}\n- All allies' ATK & DEF 25%{passiveImg:up_g} (self excluded)\n*When the character is the 1st or 2nd to obtain Ki Spheres in a\nturn*\n- Ki +2\n- All allies' ATK 25%{passiveImg:up_g} (self excluded)\n*When the character is the 3rd to obtain Ki Spheres in a turn*\n- DEF 120%{passiveImg:up_g}\n- All allies' Ki +2 and DEF 25%{passiveImg:up_g}\n*When there is a \"GT Heroes\" Category enemy*\n- High chance of sealing all enemies' Super Attacks"
    },
    {
      id: 1024121,
      name: "Goku & Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When HP is 50% or more*\n- DEF 100%{passiveImg:up_g}\n*After receiving an attack as the 1st attacker in a turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1024131,
      name: "Goku & Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*When HP is 50% or more*\n- DEF 150%{passiveImg:up_g}\n*After receiving an attack as the 1st attacker in a turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1024161,
      name: "Pan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*After evading an attack*\n- ATK & DEF 100%{passiveImg:up_g} for 5 turn(s)\n*As the 1st attacker in a turn*\n- Performs a critical hit\n*After receiving an attack*\n- ATK 50%{passiveImg:down_r}"
    },
    {
      id: 1024171,
      name: "Annin (Giant Form)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Recovers 8% HP at the start of turn\n- \"Peppy Gals\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n- \"Realm of Gods\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n- \"Giant Form\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 60% or more*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 60% or less*\n- {passiveImg:once}High chance of turning into Giant Form"
    },
    {
      id: 1024201,
      name: "Goten (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: STR to PHY\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n- An additional ATK & DEF 5%{passiveImg:up_g} when there is another \"Bond\nof Friendship\" Category ally attacking in the same turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1024221,
      name: "Trunks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: INT to TEQ\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g} and if there is another \"Bond of\nFriendship\" Category ally attacking in the same turn, plus an\nadditional ATK & DEF 5%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1024241,
      name: "Androids #16 & #18",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- DEF 140%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 80%)\n*When there is a Super Class ally attacking in the same turn*\n- Medium chance of attacks being effective against all Types\n*When there is another Extreme Class ally attacking in the\nsame turn*\n- Medium chance of guarding all attacks"
    },
    {
      id: 1024251,
      name: "Androids #16 & #18",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 160%{passiveImg:up_g}\n- DEF 180%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 100%)\n*When there is a Super Class ally attacking in the same turn*\n- Medium chance of attacks being effective against all Types\n*When there is another Extreme Class ally attacking in the\nsame turn*\n- Medium chance of guarding all attacks\n*When there is a Super Class enemy*\n- All allies' ATK 34%{passiveImg:up_g} and DEF 16%{passiveImg:up_g}\n*When there is an Extreme Class enemy*\n- All allies' ATK 18%{passiveImg:up_g} and DEF 34%{passiveImg:up_g}"
    },
    {
      id: 1024271,
      name: "Mecha Frieza",
      element: 24,
      rarity: 4,
      itemized_description: "*When attacking with 6 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 9 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1024281,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*After performing a Super Attack*\n- Medium chance of evading enemy's attack within the turn\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1024291,
      name: "Super Saiyan Goku/Super Saiyan Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack within the turn after\nperforming a Super Attack\n*Starting from the 6th turn from the character's entry turn*\n- Medium chance of evading enemy's attack within the turn\nafter performing a Super Attack\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 59%)"
    },
    {
      id: 1024311,
      name: "Super Saiyan Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Launches an additional attack\n*After performing 5 attack(s) in battle*\n- {passiveImg:forever}ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1024321,
      name: "Super Saiyan Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- Ki +3\n- Launches an additional attack\n*For 4 turn(s) from the character's entry turn*\n- Launches an additional attack\n*After performing 5 attack(s) in battle*\n- {passiveImg:forever}ATK & DEF 100%{passiveImg:up_g}\n*After performing 10 attack(s) in battle*\n- {passiveImg:forever}Attacks are effective against all Types"
    },
    {
      id: 1024331,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK 5%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1024341,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 59%{passiveImg:up_g}\n- DEF 58%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 5%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 59%{passiveImg:up_g}\n- DEF 58%{passiveImg:up_g}"
    },
    {
      id: 1024371,
      name: "Cell (1st Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 20%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 18%{passiveImg:up_g}\n*When facing 3 or more enemies*\n- ATK & DEF 40%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 17%{passiveImg:up_g}"
    },
    {
      id: 1024381,
      name: "Cell (1st Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 170%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 80%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 18%{passiveImg:up_g}\n*When facing 3 or more enemies*\n- ATK & DEF 70%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 17%{passiveImg:up_g}\n*When HP is 50% or more*\n- Medium chance of launching an additional Super Attack\n*Starting from the 3rd turn from the start of battle*\n- Absorbs Android #17"
    },
    {
      id: 1024431,
      name: "Super Saiyan God SS Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1024441,
      name: "Super Saiyan God SS Goku/\nSuper Saiyan God SS Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +3 and launches an additional attack that has a high\nchance of becoming a Super Attack for 3 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 25%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1024491,
      name: "Golden Frieza",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 70%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 70%{passiveImg:up_g}\n*After performing 5 Super Attack(s) in battle*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g}\n*After receiving 5 attack(s) in battle*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1024501,
      name: "Golden Frieza",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 80%{passiveImg:up_g}\n*After performing 5 Super Attack(s) in battle*\n- {passiveImg:forever}DEF 40%{passiveImg:up_g}\n*After receiving 5 attack(s) in battle*\n- {passiveImg:forever}ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1024531,
      name: "Super Saiyan God SS Vegeta & \nSuper Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 45%)\n*As the 1st attacker in a turn*\n- ATK & DEF 50%{passiveImg:up_g}\n- High chance of guarding all attacks"
    },
    {
      id: 1024541,
      name: "Super Saiyan God SS Vegeta & \nSuper Saiyan Trunks (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 60%)\n*As the 1st attacker in a turn*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of guarding all attacks"
    },
    {
      id: 1024561,
      name: "Gohan (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 58%)\n*For 1 turn from the character's entry turn*\n- Performs a critical hit\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 58%)\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 58%)"
    },
    {
      id: 1024591,
      name: "Goku Black",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Future Saga\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1024601,
      name: "Goku Black",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Future Saga\" Category allies' Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 25%{passiveImg:up_g} (up to 100%)\n*After receiving 5 attack(s) in battle*\n- {passiveImg:forever}Attacks are effective against all Types"
    },
    {
      id: 1024631,
      name: "Goku Black",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Future Saga\" Category allies' Ki +1, ATK 20%{passiveImg:up_g} and DEF\n10%{passiveImg:up_g}\n- \"Time Travelers\" Category allies' Ki +1, ATK 20%{passiveImg:up_g} and DEF\n10%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*When there is a Super Class enemy*\n- ATK 50%{passiveImg:up_g} when attacking"
    },
    {
      id: 1024641,
      name: "Fusion Zamasu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n- ATK & DEF 60%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*For every attack received*\n- Damage reduction rate 1%{passiveImg:up_g} within the turn (up to 5%)\n*Every time the character receives 5 or more attacks in\nbattle*\n- Recovers 5% HP at the end of turn (up to once within a turn)"
    },
    {
      id: 1024651,
      name: "Fusion Zamasu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every attack received*\n- Damage reduction rate 2%{passiveImg:up_g} within the turn (up to 10%)\n*Every time the character receives 5 or more attacks in\nbattle*\n- Recovers 7% HP at the end of turn (up to once within a turn)"
    },
    {
      id: 1024681,
      name: "Shen",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Seals the attacked enemy's Super Attack\n- Medium chance of evading enemy's attack\n*As the 1st attacker in a turn*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n- ATK & DEF 100%{passiveImg:up_g}\n*After evading an attack*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1024691,
      name: "Shen",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Seals the attacked enemy's Super Attack\n- High chance of evading enemy's attack\n*For every attack evaded*\n- Chance of evading enemy's attack 10%{passiveImg:up_g} within the turn (up\nto 20%)\n*As the 1st attacker in a turn*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n- ATK & DEF 150%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 150%{passiveImg:up_g} when attacking\n*After evading an attack*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- ATK 100%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1024711,
      name: "Tien",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50000{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Ki +3\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10000{passiveImg:up_g} (up to 50000)\n*When HP is 50% or more*\n- Launches an additional attack"
    },
    {
      id: 1024721,
      name: "Tien",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70000{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- Ki +3\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10000{passiveImg:up_g} (up to 70000)\n*When HP is 50% or more*\n- Launches an additional attack"
    },
    {
      id: 1024741,
      name: "Cheelai",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 139%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- High chance of evading enemy's attack\n*For every attack evaded*\n- DEF 39%{passiveImg:up_g} within the turn"
    },
    {
      id: 1024751,
      name: "Cheelai",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- DEF 139%{passiveImg:up_g}\n- Foresees enemy's Super Attack\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Great chance of evading enemy's attack\n- All allies' Ki +3 and ATK & DEF 39%{passiveImg:up_g} (self excluded)\n*For every attack evaded*\n- DEF 39%{passiveImg:up_g} within the turn\n*Every time the character evades 3 attack(s) in battle*\n- Recovers 39% HP at the end of turn (up to 3 time(s))"
    },
    {
      id: 1024771,
      name: "Trunks (GT) & Giru",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL & TEQ to INT\n- ATK & DEF 100%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1024781,
      name: "Trunks (GT) & Giru",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Changes Ki Spheres: AGL & TEQ to INT\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Bond of Friendship\", \"GT Heroes\" or \"Dragon Ball Seekers\"\nCategory allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 120%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- ATK & DEF 120%{passiveImg:up_g}\n- All enemies' ATK 20%{passiveImg:down_y}\n*7 or more Ki Spheres obtained*\n- All allies' Ki +2 and ATK, DEF & chance of performing a\ncritical hit 10%{passiveImg:up_g}"
    },
    {
      id: 1024791,
      name: "Fasha",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Guards all attacks\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When another 3 or more \"Low-Class Warrior\" Category allies\nare on the team, or when another 3 or more \"Peppy Gals\"\nCategory allies are on the team*\n- ATK & DEF 20%{passiveImg:up_g} whenever guard is activated (up to 100%)"
    },
    {
      id: 1024801,
      name: "Fasha",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Guards all attacks\n*Starting from the 5th turn from the start of battle*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n*When another 3 or more \"Low-Class Warrior\" Category allies\nare on the team, or when another 3 or more \"Peppy Gals\"\nCategory allies are on the team*\n- ATK & DEF 30%{passiveImg:up_g} whenever guard is activated (up to 150%)"
    },
    {
      id: 1024811,
      name: "Cooler (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a rare\nchance of becoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1024821,
      name: "Cooler (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1024841,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n*After receiving an attack*\n- Attacks are effective against all Types and DEF 30%{passiveImg:up_g} within\nthe turn\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 30%)\n*When HP is 60% or more*\n- Medium chance of guarding all attacks"
    },
    {
      id: 1024851,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n*After receiving an attack*\n- Attacks are effective against all Types and DEF 40%{passiveImg:up_g} within\nthe turn\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 40%)\n*When HP is 60% or more*\n- High chance of guarding all attacks"
    },
    {
      id: 1024871,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For 3 turn(s) from the character's entry turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1024881,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For 3 turn(s) from the character's entry turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Damage reduction rate 15%{passiveImg:up_g}"
    },
    {
      id: 1024911,
      name: "Metal Cooler",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 7% HP at the start of turn\n- Ki +2\n- ATK & DEF 70%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 50%)\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*After receiving an attack*\n- Recovers 7% HP at the end of turn"
    },
    {
      id: 1024921,
      name: "Metal Cooler",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 60%)\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 60%)\n*After receiving an attack*\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 1024941,
      name: "Piccolo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 150%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 25%{passiveImg:up_g} for 3 turn(s)\n*After guard is activated*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn per \"Movie\nHeroes\" Category ally attacking in the same turn (self\nexcluded)\n*When facing only 1 enemy*\n- ATK & DEF 25%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1024951,
      name: "Piccolo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 200%{passiveImg:up_g}\n- Guards all attacks\n- Super Class allies' Ki +2 and DEF 30%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 50%{passiveImg:up_g} and medium chance of performing a\ncritical hit for 3 turn(s)\n*After guard is activated*\n- Damage reduction rate 15%{passiveImg:up_g} within the turn per \"Movie\nHeroes\" Category ally attacking in the same turn (self\nexcluded)\n*When there is an Extreme Class enemy*\n- Super Class allies' ATK 30%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1024961,
      name: "Krillin & Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When facing 2 or more enemies*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*Every time the character performs 3 or more attacks in\nbattle*\n- ATK & DEF 50%{passiveImg:up_g} and high chance of performing a critical\nhit at the start of the character's next attacking turn (up to\nonce within a turn)"
    },
    {
      id: 1024971,
      name: "Krillin & Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When facing 2 or more enemies*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*Every time the character performs 3 or more attacks in\nbattle*\n- ATK & DEF 50%{passiveImg:up_g} and performs a critical hit at the start of\nthe character's next attacking turn (up to once within a turn)\n*7 or more Ki Spheres obtained*\n- Performs a critical hit\n*Per \"Movie Heroes\" Category ally attacking in the same\nturn*\n- All allies' chance of performing a critical hit 5%{passiveImg:up_g} (up to\n15%)"
    },
    {
      id: 1024981,
      name: "Pan (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking*\n- ATK 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Ki +2\n- ATK 30%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g} before attacking\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1024991,
      name: "Pan (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Ki +2\n- ATK 50%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g} before attacking\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When there is a \"GT Heroes\" Category ally whose name\nincludes \"Goku\" (Jr. excluded), \"Trunks\" or \"Giru\" attacking\nin the same turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1025021,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 88%{passiveImg:up_g}\n*For 8 turn(s) from the character's entry turn*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 18%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 8%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 88%{passiveImg:up_g}"
    },
    {
      id: 1025031,
      name: "Hacchan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku (Youth)\"\nattacking in the same turn*\n- ATK & DEF 80%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 80%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1025041,
      name: "Hacchan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku (Youth)\"\nattacking in the same turn*\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +8 and ATK & DEF 80%{passiveImg:up_g} for 5 turns\n*Starting from the 5th turn from the start of battle*\n- Damage reduction rate 30%{passiveImg:up_g}\n- {passiveImg:once}Recovers 80% HP when HP is 20% or less"
    },
    {
      id: 1025061,
      name: "Goku (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit & damage reduction rate\n7%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- DEF 59%{passiveImg:up_g}"
    },
    {
      id: 1025071,
      name: "Goku (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 159%{passiveImg:up_g}\n- \"DB Saga\" or \"Youth\" Category allies' Ki +2 and ATK & DEF\n50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit & damage reduction rate\n7%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- DEF 59%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*7 or more Ki Spheres obtained*\n- All allies' chance of performing a critical hit & damage\nreduction rate 8%{passiveImg:up_g}"
    },
    {
      id: 1025081,
      name: "Bardock",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 90%)\n*1 or more Rainbow Ki Spheres obtained*\n- Attacks are effective against all Types\n*2 or more Rainbow Ki Spheres obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*3 or more Rainbow Ki Spheres obtained*\n- Great chance of performing a critical hit"
    },
    {
      id: 1025091,
      name: "Bardock",
      element: 11,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is an ally\nwhose name includes \"Goku\" (Captain Ginyu, Jr., etc.\nexcluded) on the team or when there is an enemy whose name\nincludes \"Frieza\" (Frieza Soldier excluded) upon the\ncharacter's entry*\n- {passiveImg:once}Randomly changes Ki Spheres of a certain Type to\nRainbow Ki Spheres, ATK 70%{passiveImg:up_g} and foresees enemy's Super\nAttack for 5 turn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g} (up to 120%)\n*1 or more Rainbow Ki Spheres obtained*\n- Attacks are effective against all Types\n*2 or more Rainbow Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n*3 or more Rainbow Ki Spheres obtained*\n- Performs a critical hit"
    },
    {
      id: 1025101,
      name: "Gohan (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1025111,
      name: "Gohan (Kid)/Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n*Starting from the 6th turn from the character's entry turn*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1025131,
      name: "Super Saiyan Goku (GT)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- ATK & DEF 59%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1025141,
      name: "Hyper Meta-Rilldo",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +2\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1025151,
      name: "Metal Cooler",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Wicked Bloodline\" Category allies' ATK & DEF 25%{passiveImg:up_g} and\nchance of performing a critical hit 10%{passiveImg:up_g}"
    },
    {
      id: 1025161,
      name: "Metal Cooler [AGL]",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When HP is 40% or more*\n- All allies' Ki +2"
    },
    {
      id: 1025171,
      name: "Metal Cooler [TEQ]",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y} for 2 turn(s)\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025181,
      name: "Metal Cooler [INT]",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 7% HP at the start of turn\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025191,
      name: "Metal Cooler [STR]",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025201,
      name: "Metal Cooler [PHY]",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% of damage dealt as HP\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025211,
      name: "Cooler",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Terrifying Conquerors\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025221,
      name: "Dabura (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*Per Super Class ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1025231,
      name: "Dabura (Angel)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 104%{passiveImg:up_g}\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Recovers 10% HP at the end of turn\n- Recovers HP with sweet treats\n*Per Super Class ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- DEF 104%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}\nand {passiveImg:def_down}*\n- ATK 104%{passiveImg:up_g}"
    },
    {
      id: 1025241,
      name: "Yamcha",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is a \"Peppy Gals\" Category ally on the team*\n- DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1025251,
      name: "Yamcha",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Super Class allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Peppy Gals\" Category ally on the team*\n- DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack and Super Class allies' Ki +1 and ATK\n& DEF 20%{passiveImg:up_g} starting from the 5th turn from the start of\nbattle"
    },
    {
      id: 1025301,
      name: "Super Full Power Saiyan 4 Limit Breaker Goku (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 130%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\n\"Full Power\" or \"Dragon Ball Heroes\" Category characters*\n- ATK 50%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*After receiving 7 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1025311,
      name: "Super Full Power Saiyan 4 Limit Breaker Goku (Xeno)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\n\"Full Power\" or \"Dragon Ball Heroes\" Category characters*\n- ATK 80%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Vegeta\" (Kid, Jr.,\netc. excluded) attacking in the same turn*\n- Super Class allies' DEF 40%{passiveImg:up_g}\n*After receiving 7 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g}\n- {passiveImg:forever}Performs a critical hit"
    },
    {
      id: 1025321,
      name: "Super Full Power Saiyan 4 Limit Breaker Vegeta (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 130%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\n\"Giant Ape Power\" or \"Dragon Ball Heroes\" Category\ncharacters*\n- DEF 50%{passiveImg:up_g}\n- High chance of launching an additional Super Attack\n*After performing 5 Super Attack(s) in battle*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1025331,
      name: "Super Full Power Saiyan 4 Limit Breaker Vegeta (Xeno)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\n\"Giant Ape Power\" or \"Dragon Ball Heroes\" Category\ncharacters*\n- DEF 80%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn*\n- Super Class allies' ATK 40%{passiveImg:up_g}\n*After performing 5 Super Attack(s) in battle*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g}\n- {passiveImg:forever}Attacks guaranteed to hit\n- {passiveImg:forever}Disables the attacked enemy's guard"
    },
    {
      id: 1025341,
      name: "Super Saiyan 4 Bardock",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*When another 2 or more \"Crossover\" Category allies are on\nthe team*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 70% or more*\n- Attacks are effective against all Types\n*When HP is 90% or more*\n- Performs a critical hit\n*When there is another \"Giant Ape Power\" Category ally\nattacking in the same turn*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1025351,
      name: "Super Saiyan 4 Gohan",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*When another 2 or more \"Giant Ape Power\" Category allies\nare on the team*\n- Damage reduction rate 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 50%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When there is another \"Crossover\" Category ally attacking in\nthe same turn*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1025361,
      name: "Robelu",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- High chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 200%{passiveImg:up_g}\n*When there is another \"Dragon Ball Heroes\" Category ally\nattacking in the same turn*\n- Great chance of foreseeing enemy's Super Attack\n- DEF 10%{passiveImg:up_g} and recovers 5% HP per Rainbow Ki Sphere\nobtained"
    },
    {
      id: 1025371,
      name: "Supreme Kai of Time (Brainwashed)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Rare chance of stunning all enemies\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:def_down}*\n- ATK 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- ATK 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- ATK 100%{passiveImg:up_g}\n*When there is another \"Crossover\" Category ally attacking in\nthe same turn*\n- Medium chance of stunning all enemies\n- Seals the attacked enemy's Super Attack for 2 turn(s)"
    },
    {
      id: 1025401,
      name: "Super Hearts",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- High chance of guarding all attacks\n*When all allies attacking in the same turn are Extreme Class\n\"Crossover\" Category characters*\n- All allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1025411,
      name: "Super Hearts",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Extreme Class allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Guards all attacks\n- DEF 50%{passiveImg:up_g} within the turn when guard is activated\n*When all allies attacking in the same turn are Extreme Class\n\"Crossover\" Category characters*\n- All allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n- Medium chance of stunning all enemies"
    },
    {
      id: 1025431,
      name: "Golden Metal Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Per \"Crossover\" Category ally on the team*\n- ATK 30%{passiveImg:up_g} (up to 150%)\n- Damage reduction rate 6%{passiveImg:up_g} (up to 30%)\n*When HP is 30% or less*\n- Character's Super Attack will be sealed"
    },
    {
      id: 1025441,
      name: "Janemba (Modified)",
      element: 21,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- High chance of guarding all attacks\n- Guards all attacks when facing 2 or more enemies\n*Per \"Crossover\" Category ally on the team*\n- ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g} (up to 150%)\n*For every attack received*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 90%)\n*After performing 5 attack(s) or receiving 5 attack(s) in\nbattle*\n- {passiveImg:forever}High chance of performing a critical hit starting from\nthe character's next attacking turn"
    },
    {
      id: 1025451,
      name: "Lagss",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1025461,
      name: "Lagss",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*If the target enemy's HP is 75% or less when attacking*\n- ATK 50%{passiveImg:up_g}\n*If the target enemy's HP is 50% or less when attacking*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When the target enemy is in the following status: {passiveImg:atk_down}, {passiveImg:def_down}\nor {passiveImg:astute}*\n- {passiveImg:forever}Chance of performing a critical hit 6%{passiveImg:up_g} for every\nattack performed (up to 30%)"
    },
    {
      id: 1025471,
      name: "Paikuhan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- All allies' ATK 15%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025501,
      name: "Gamma 1",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025511,
      name: "Gamma 1",
      element: 13,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}ATK 50%{passiveImg:up_g} and guards all attacks for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +1 and DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 50%)\n*After receiving 5 attack(s) in battle*\n- {passiveImg:forever}Medium chance of performing a critical hit\n*When receiving an Unarmed Super Attack*\n- Great chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1025521,
      name: "Gamma 2",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025531,
      name: "Gamma 2",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}DEF 50%{passiveImg:up_g} and launches 2 additional attacks, each of\nwhich has a medium chance of becoming a Super Attack, for 4\nturn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +2 and ATK 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)\n*After performing 5 attack(s) in battle*\n- {passiveImg:forever}Launches an additional attack that has a great chance\nof becoming a Super Attack\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it"
    },
    {
      id: 1025541,
      name: "Ultimate Gohan",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025551,
      name: "Ultimate Gohan",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1025571,
      name: "Piccolo (Power Awakening)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025581,
      name: "Piccolo (Power Awakening)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1025601,
      name: "Super Saiyan Gohan (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 158%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Performs a critical hit\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 58%)\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 58%)\n*After performing 3 Super Attack(s) in battle*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} starting\nfrom the character's next attacking turn"
    },
    {
      id: 1025611,
      name: "Jackie Chun",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 80%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 30%)\n*For every attack received*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025621,
      name: "Jackie Chun",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 45%)\n*For every attack received*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 45%)"
    },
    {
      id: 1025641,
      name: "Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Changes Ki Spheres: AGL to TEQ\n- \"Youth\" Category allies' Ki +1, ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n- \"Fusion\" Category allies' Ki +1, ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g} when attacking\n*3 or more TEQ Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*5 or more TEQ Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1025661,
      name: "Tora",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Storied Figures\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Storied Figures\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*Per \"Team Bardock\" Category ally attacking in the same\nturn*\n- Chance of performing a critical hit, chance of evading\nenemy's attack & damage reduction rate 7%{passiveImg:up_g}"
    },
    {
      id: 1025671,
      name: "Tora",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Storied Figures\" Category allies' Ki +3 and ATK & DEF\n30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Storied Figures\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*Per \"Team Bardock\" Category ally attacking in the same\nturn*\n- Chance of performing a critical hit, chance of evading\nenemy's attack & damage reduction rate 10%{passiveImg:up_g}\n*When there is an ally whose name includes \"Bardock\"\nattacking in the same turn*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1025711,
      name: "Super Saiyan 3 Goku & Super Saiyan 2 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 50%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025721,
      name: "Super Saiyan 3 Goku & Super Saiyan 2 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 40%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 70%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 70%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1025751,
      name: "Goku (GT) & Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 50%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 50%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025761,
      name: "Goku (GT) & Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 40%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 70%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 70%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1025791,
      name: "Yamcha",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Medium chance of evading enemy's attack\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1025801,
      name: "Yamcha",
      element: 12,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when another 5 or more\n\"Earth-Bred Fighters\" Category allies are on the team upon\nthe character's entry*\n- {passiveImg:once}Ki +2 and ATK & DEF 150%{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- High chance of evading enemy's attack\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n*After evading an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack within the turn\n*For every Super Attack performed*\n- Chance of evading enemy's attack 10%{passiveImg:up_g} within the turn"
    },
    {
      id: 1025811,
      name: "Super Saiyan 3 Gotenks & Piccolo",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n*When attacking with 9 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 11 or less Ki*\n- ATK 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When receiving an attack with 12 or more Ki*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1025821,
      name: "Super Saiyan 3 Gotenks & Piccolo",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n*When attacking with 9 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Recovers 5% HP\n*When attacking with 11 or less Ki*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When receiving an attack with 12 or more Ki*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1025831,
      name: "Eis Shenron & Nuova Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Changes Ki Spheres: AGL & STR to TEQ\n*3 or more Ki Spheres obtained*\n- DEF 70%{passiveImg:up_g} when attacking\n*4 or more Ki Spheres obtained*\n- ATK 70%{passiveImg:up_g} when attacking"
    },
    {
      id: 1025841,
      name: "Eis Shenron & Nuova Shenron",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 134%{passiveImg:up_g}\n- Changes Ki Spheres: AGL & STR to TEQ\n*3 or more Ki Spheres obtained*\n- DEF 134%{passiveImg:up_g} when attacking\n*4 or more Ki Spheres obtained*\n- ATK 134%{passiveImg:up_g} when attacking\n*7 or more TEQ Ki Spheres obtained*\n- Launches an additional Super Attack\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Attacks are effective against all Types"
    },
    {
      id: 1025851,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n- Super Class allies' DEF 30%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 30%)"
    },
    {
      id: 1025861,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 120%{passiveImg:up_g}\n- Super Class allies' Ki +1 and DEF 30%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}Ki +1"
    },
    {
      id: 1025901,
      name: "Super Saiyan Trunks (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Medium chance of evading enemy's attack\n*When there is a \"Goku's Family\" Category ally on the team*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goten (Kid)\"\nattacking in the same turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}"
    },
    {
      id: 1026001,
      name: "Super Saiyan Goten (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 70%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of evading enemy's attack\n*When there is a \"Vegeta's Family\" Category ally on the team*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an ally whose name includes \"Trunks (Kid)\"\nattacking in the same turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- ATK 20%{passiveImg:up_g} per Ki Sphere obtained (up to 140%)"
    },
    {
      id: 1026021,
      name: "Yajirobe",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When the character is the 3rd to obtain Ki Spheres in a turn*\n- DEF 50%{passiveImg:up_g}\n*As the 3rd attacker in a turn*\n- ATK 70%{passiveImg:up_g} when attacking with 12 or more Ki\n*After receiving an attack as the 3rd attacker in a turn*\n- High chance of evading enemy's attack within the turn"
    },
    {
      id: 1026031,
      name: "Yajirobe",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g} (self excluded)\n- Recovers 10% HP at the end of turn\n*When receiving an attack*\n- Survives K.O. attacks (up to once within a turn)\n*When the character is the 3rd to obtain Ki Spheres in a turn*\n- DEF 120%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g} for 3 turn(s) (self\nexcluded)\n*As the 3rd attacker in a turn*\n- ATK 150%{passiveImg:up_g} and great chance of performing a critical hit\nwhen attacking with 12 or more Ki\n*After receiving an attack as the 3rd attacker in a turn*\n- Great chance of evading enemy's attack within the turn"
    },
    {
      id: 1026051,
      name: "Tien",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of stunning all enemies\n*Per \"Earth-Bred Fighters\" Category ally attacking in the\nsame turn*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1026061,
      name: "Trunks (Teen) & Goten (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 70%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- DEF 30%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*7 or more Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g}\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1026071,
      name: "Trunks (Teen) & Goten (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes AGL Ki Spheres to Ki Spheres of another\nType\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 10%{passiveImg:up_g} per \"Super Heroes\" Category ally on the\nteam\n*3 or more Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- DEF 50%{passiveImg:up_g}\n- High chance of performing a critical hit\n*7 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1026081,
      name: "Pan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Super Heroes\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*After evading an attack*\n- ATK & DEF 50%{passiveImg:up_g} and medium chance of performing a\ncritical hit for 4 turn(s)"
    },
    {
      id: 1026091,
      name: "Pan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Super Heroes\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g},\nplus an additional Ki +1 and ATK & DEF 20%{passiveImg:up_g} for characters\nwho also belong to the \"Bond of Parent and Child\" or \"Bond\nof Master and Disciple\" Category\n- Medium chance of evading enemy's attack\n*When facing only 1 enemy*\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*After evading an attack*\n- ATK & DEF 100%{passiveImg:up_g} and high chance of performing a critical\nhit for 4 turn(s)"
    },
    {
      id: 1026111,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +2)\n- {passiveImg:forever}DEF 5%{passiveImg:up_g} (up to 30%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1026121,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 130%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}DEF 5%{passiveImg:up_g} (up to 40%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1026141,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +2)\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 30%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1026151,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 130%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}Chance of performing a critical hit 5%{passiveImg:up_g} (up to 40%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1026171,
      name: "Gamma 1",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Super Heroes\" Category allies' DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gamma 2\"\nattacking in the same turn*\n- High chance of performing a critical hit"
    },
    {
      id: 1026181,
      name: "Gamma 2",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Super Heroes\" Category allies' ATK 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gamma 1\"\nattacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1026191,
      name: "Android #17 & Hell Fighter #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack performed*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g} within the turn"
    },
    {
      id: 1026201,
      name: "Android #17 & Hell Fighter #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For 4 turn(s) from the character's entry turn*\n- Launches an additional Super Attack when there is a Super\nClass enemy\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- Ki +1\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every attack performed*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 17%{passiveImg:up_g} within the turn"
    },
    {
      id: 1026221,
      name: "Dr. Myuu & Dr. Gero",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Target: Goku\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1026231,
      name: "Dr. Myuu & Dr. Gero",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Target: Goku\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- \"Target: Goku\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\nfor 2 turn(s)\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n- Seals all enemies' Super Attacks when HP is 70% or more"
    },
    {
      id: 1026241,
      name: "Super Saiyan God Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 30%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n- Guards all attacks"
    },
    {
      id: 1026251,
      name: "Super Saiyan God Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when 6 or more Super\nClass allies are on the team upon the character's entry*\n- {passiveImg:once}ATK 100%{passiveImg:up_g} when attacking with 12 or more Ki and\nrandomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres for 6 turn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n- Guards all attacks\n*After performing 4 Super Attack(s) in battle*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1026271,
      name: "Super Saiyan Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*After receiving 3 or more attacks in battle*\n- {passiveImg:once}All enemies' ATK 20%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1026281,
      name: "Super Saiyan Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Guards all attacks\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g} (up to 200%)\n*After receiving 3 or more attacks in battle*\n- {passiveImg:once}All allies' ATK & DEF 30%{passiveImg:up_g} (self excluded) and all\nenemies' ATK 20%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1026311,
      name: "Bulma (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is an ally\nwhose name includes \"Goku (Youth)\" on the team upon the\ncharacter's entry*\n- {passiveImg:once}ATK & DEF 40%{passiveImg:up_g} and chance of evading enemy's\nattack 29%{passiveImg:up_g} for 3 turn(s)\n*Basic effect(s)*\n- ATK & DEF 141%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When there is an ally whose name includes \"Goku (Youth)\"\nattacking in the same turn*\n- ATK & DEF 81%{passiveImg:up_g}\n- Ki +9"
    },
    {
      id: 1026321,
      name: "Hercule",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n- Medium chance of all enemies' ATK & DEF 20%{passiveImg:down_y}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When there is another \"World Tournament\" Category ally\nattacking in the same turn or a \"World Tournament\" Category\nenemy*\n- Ki +2\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1026331,
      name: "Hercule",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 120%{passiveImg:up_g}\n- Medium chance of all enemies' ATK & DEF 20%{passiveImg:down_y}\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*When there is another \"World Tournament\" Category ally\nattacking in the same turn or a \"World Tournament\" Category\nenemy*\n- Ki +2\n- ATK & DEF 30%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Medium chance of launching an additional Super Attack\n*When the character is KO'd starting from the 6th turn from\nthe start of battle*\n- {passiveImg:once}High chance of reviving with 30% HP recovered"
    },
    {
      id: 1026341,
      name: "Gotenks (Failure) A",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every Ki Sphere obtained*\n- ATK & DEF 25%{passiveImg:up_g} and for every turn passed, ATK & DEF\n1%{passiveImg:down_r} (no more than -10%)\n*4 or more PHY Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g} when attacking"
    },
    {
      id: 1026351,
      name: "Gotenks (Failure) B",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every Ki Sphere obtained*\n- ATK & DEF 25%{passiveImg:up_g} and for every turn passed, ATK & DEF\n2%{passiveImg:down_r} (no more than -10%)\n*4 or more PHY Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g} when attacking"
    },
    {
      id: 1026371,
      name: "Babidi",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1026381,
      name: "Babidi",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- Medium chance of evading enemy's attack\n*When there is an Extreme Class enemy*\n- ATK & DEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1026411,
      name: "Buu (Super)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*When attacking*\n- ATK 30%{passiveImg:up_g} when HP is 30% or more\n*After guard is activated*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1026421,
      name: "Buu (Super)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking*\n- ATK 30%{passiveImg:up_g} when HP is 30% or more\n- ATK 30%{passiveImg:up_g} when HP is 60% or more\n*After guard is activated*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack within the turn\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1026471,
      name: "Kale (Berserk)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*When there is another \"Universe 6\" Category ally attacking\nin the same turn*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 1026481,
      name: "Kale (Berserk)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 160%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of launching an additional Super Attack\n*For every Super Attack performed*\n- Damage reduction rate 20%{passiveImg:up_g} within the turn (up to 60%)\n*When there is another \"Universe 6\" Category ally attacking\nin the same turn*\n- ATK & DEF 160%{passiveImg:up_g}\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1026501,
      name: "Frost (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n- \"Transformation Boost\" Category allies' Ki +1 and ATK &\nDEF 20%{passiveImg:up_g}, plus an additional ATK & DEF 10%{passiveImg:up_g} for\ncharacters who also belong to the \"Universe Survival Saga\"\nCategory\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is another \"Transformation Boost\" Category ally\nattacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Attacked enemy's ATK 15%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1026511,
      name: "Frost (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Transformation Boost\" Category allies' Ki +1 and ATK &\nDEF 30%{passiveImg:up_g}, plus an additional ATK, DEF & chance of\nperforming a critical hit 10%{passiveImg:up_g} for characters who also\nbelong to the \"Universe Survival Saga\" Category\n*When attacking with 12 or more Ki*\n- ATK & DEF 160%{passiveImg:up_g}\n*When there is another \"Transformation Boost\" Category ally\nattacking in the same turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Attacked enemy's ATK 20%{passiveImg:down_y} for 2 turn(s)\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- ATK 160%{passiveImg:up_g}"
    },
    {
      id: 1026521,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*After guard is activated*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack for 4 turn(s)\n*Whenever guard is activated*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1026531,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Guards all attacks for 1 turn\n- {passiveImg:once}Ki +2 and ATK & DEF 101%{passiveImg:up_g} for 5 turns\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- High chance of guarding all attacks\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 100%)\n*When facing only 1 enemy*\n- Attacks are effective against all Types\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it\n*After guard is activated*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack for 4 turns\n*Whenever guard is activated*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*After the character's or an ally's Revival Skill is activated*\n- {passiveImg:forever}ATK & DEF 150%{passiveImg:up_g}\n- {passiveImg:forever}Launches an additional Super Attack and guards all\nattacks"
    },
    {
      id: 1026551,
      name: "Piccolo Jr.",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*As the 1st attacker in a turn*\n- ATK & DEF 50%{passiveImg:up_g}\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of launching an additional Super Attack\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1026561,
      name: "Piccolo Jr. (Giant Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}High chance of launching an additional Super Attack\nfor 1 turn\n- {passiveImg:once}Ki +2 and ATK & DEF 101%{passiveImg:up_g} for 5 turn(s)\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When facing only 1 enemy*\n- Attacks are effective against all Types\n*As the 1st attacker in a turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- All enemies' ATK & DEF 30%{passiveImg:down_y}\n- ATK & DEF 60%{passiveImg:up_g} within the turn after receiving an attack\n*As the 2nd or 3rd attacker in a turn*\n- High chance of launching an additional Super Attack\n- ATK & DEF 100%{passiveImg:up_g} when attacking with 12 or more Ki\n*Starting from the 4th turn from the start of battle*\n- {passiveImg:once}Turns into Giant Form when HP is 60% or less"
    },
    {
      id: 1026571,
      name: "Krillin",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"World Tournament\" Category allies' Ki +1 and ATK & DEF\n30%{passiveImg:up_g}\n*Before attacking*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1026581,
      name: "Krillin",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- \"World Tournament\" Category allies' Ki +2 and ATK & DEF\n40%{passiveImg:up_g}\n*Before attacking*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*After receiving an attack*\n- Ki +2, ATK & DEF 100%{passiveImg:up_g} and high chance of performing a\ncritical hit for 4 turn(s)\n*When facing only 1 enemy*\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1026591,
      name: "Bulma (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to Rainbow Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 10%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1026601,
      name: "Bulma (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to Rainbow Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 15%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK 60%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- All allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g} (self excluded)"
    },
    {
      id: 1026621,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 159%{passiveImg:up_g}\n- \"Bond of Parent and Child\" Category allies' Ki +1 and ATK &\nDEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 41%{passiveImg:up_g}\n*When HP is 90% or less*\n- Recovers 5% HP\n*When HP is 60% or less*\n- High chance of guarding all attacks\n*When HP is 30% or less*\n- Recovers 10% HP\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- Damage reduction rate 30%{passiveImg:up_g} when guard is activated"
    },
    {
      id: 1026631,
      name: "Cyborg Tao",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- High chance of ATK & DEF 70%{passiveImg:up_g}\n*When there is a \"Turtle School\" Category enemy*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- ATK & DEF 30%{passiveImg:up_g} when attacking with 9 or more Ki\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute}*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1026711,
      name: "Dr. Wheelo",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 60000{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +1\n- ATK & DEF 20000{passiveImg:up_g}\n- ATK 20000{passiveImg:up_g} and rare chance of performing a critical hit\nwhen the enemy's HP is 60% or more\n*When facing 2 or more enemies*\n- DEF 60000{passiveImg:up_g}\n- Rare chance of guarding all attacks"
    },
    {
      id: 1026721,
      name: "Dr. Wheelo",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 80000{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +2\n- ATK & DEF 40000{passiveImg:up_g}\n- ATK 40000{passiveImg:up_g} and medium chance of performing a critical hit\nwhen the enemy's HP is 60% or more\n*When facing 2 or more enemies*\n- Ki +1\n- ATK 20000{passiveImg:up_g}\n- DEF 80000{passiveImg:up_g}\n- Medium chance of guarding all attacks"
    },
    {
      id: 1026741,
      name: "Turles",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)"
    },
    {
      id: 1026751,
      name: "Turles",
      element: 24,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is a \"Goku's\nFamily\" Category enemy or an enemy whose name includes\n\"Gohan (Kid)\" at the start of the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}Extreme Class allies' Ki +3 and ATK 18%{passiveImg:up_g}\n*Basic effect(s)*\n- ATK & DEF 160%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK 60%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +2 (up to +8)\n- {passiveImg:forever}Damage reduction rate 5%{passiveImg:up_g} (up to 20%)\n- {passiveImg:forever}DEF 40%{passiveImg:up_g} (up to 160%)\n*After performing 6 attack(s) in battle*\n- {passiveImg:forever}Attacks are effective against all Types\n- {passiveImg:forever}Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1026761,
      name: "Amond & Rasin",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Planetary Destruction\" Category allies' Ki +1 and ATK &\nDEF 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Guards all attacks\n*As the 2nd or 3rd attacker in a turn*\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1026771,
      name: "Amond & Rasin",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Planetary Destruction\" Category allies' Ki +1 and ATK &\nDEF 30%{passiveImg:up_g}, plus an additional DEF 20%{passiveImg:up_g} and chance of\nperforming a critical hit 10%{passiveImg:up_g} for characters who also\nbelong to the \"Space-Traveling Warriors\" Category\n*As the 1st attacker in a turn*\n- Guards all attacks\n- Damage reduction rate 20%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional Super Attack\n*Whenever guard is activated*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)"
    },
    {
      id: 1026781,
      name: "Daiz & Cacao",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Medium chance of performing a critical hit"
    },
    {
      id: 1026791,
      name: "Daiz & Cacao",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Per \"Space-Traveling Warriors\" Category ally attacking in\nthe same turn (self excluded)*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK 150%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Medium chance of evading enemy's attack\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)"
    },
    {
      id: 1026801,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki\n*When facing 2 or more enemies*\n- Ki +2\n*After delivering a final blow*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1026811,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 120%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 70%{passiveImg:up_g} when attacking with 12 or more Ki\n*When facing 2 or more enemies*\n- Ki +3\n*After delivering a final blow*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1026841,
      name: "Super Saiyan Gohan (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Ki +2\n- ATK & DEF 80%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n*When there is a \"Future Saga\" Category ally whose name\nincludes \"Trunks\" on the team*\n- Ki +2\n- Medium chance of performing a critical hit\n- DEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1026851,
      name: "Jackie Chun",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n- TEQ & INT Type allies' ATK & DEF 25%{passiveImg:up_g}\n*When there is another \"World Tournament\" Category ally\nattacking in the same turn*\n- Medium chance of guarding all attacks\n*For every attack performed*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1026861,
      name: "Baby",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- DEF 100%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- Ki +2 and ATK 100%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Ki +2 and ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1026871,
      name: "Baby",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- DEF 100%{passiveImg:up_g}\n- Attacks guaranteed to hit\n- Performs a critical hit\n- Stuns the attacked enemy\n*When there is a \"Pure Saiyans\" Category enemy*\n- Ki +3 and ATK 180%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Ki +3 and ATK 180%{passiveImg:up_g}"
    },
    {
      id: 1026881,
      name: "Super Saiyan 4 Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}\n*After receiving or evading an attack*\n- ATK 30%{passiveImg:up_g}\n- DEF 30%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1026891,
      name: "Super Saiyan 4 Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Damage reduction rate 15%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*After receiving or evading an attack*\n- ATK 50%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1026941,
      name: "Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 6 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When attacking with 8 or more Ki*\n- DEF 50%{passiveImg:up_g}\n*When receiving an attack with 10 or more Ki*\n- Rare chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1026981,
      name: "Goku (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*Per \"DB Saga\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n*When there is another \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- ATK & DEF 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1026991,
      name: "Super Saiyan Trunks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n*When another 3 or more \"Androids/Cell Saga\" Category\nallies are on the team*\n- ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1027001,
      name: "Super Saiyan Trunks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When another 3 or more \"Androids/Cell Saga\" Category\nallies are on the team*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- High chance of guarding all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Cell\"\n(characters such as Cell Jr. excluded)*\n- Attacks are effective against all Types\n*At the start of the character's next attacking turn after the\ncharacter performs 5 or more attacks in battle, or when there\nis an enemy whose name includes \"Cell\" (characters such as\nCell Jr. excluded) starting from the 5th turn from the start of\nbattle*\n- Transforms"
    },
    {
      id: 1027021,
      name: "Omega Shenron",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK & DEF 15%{passiveImg:down_y}\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 100%)\n*Per \"GT Bosses\" Category ally on the team*\n- Damage reduction rate 3%{passiveImg:up_g}"
    },
    {
      id: 1027031,
      name: "Omega Shenron",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK & DEF 20%{passiveImg:down_y}\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 12%{passiveImg:up_g} (up to 120%)\n*Per \"GT Bosses\" Category ally on the team*\n- Damage reduction rate 4%{passiveImg:up_g}"
    },
    {
      id: 1027051,
      name: "Super Saiyan Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 7% HP\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Heavenly Events\" or \"Mastered Evolution\" Category allies'\nKi +1 and DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +3)"
    },
    {
      id: 1027061,
      name: "Super Saiyan Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP\n- ATK & DEF 140%{passiveImg:up_g}\n- \"Heavenly Events\" or \"Mastered Evolution\" Category allies'\nKi +2 and DEF 30%{passiveImg:up_g}\n*When HP is 70% or more*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When HP is 40% or less*\n- {passiveImg:once}Recovers 40% HP\n*When attacking with 12 or more Ki*\n- ATK & DEF 140%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1027071,
      name: "Turles",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 90%{passiveImg:up_g}\n- All enemies' ATK 20%{passiveImg:down_y}\n- Medium chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 30%{passiveImg:up_g}\n- Medium chance of guarding all attacks"
    },
    {
      id: 1027081,
      name: "Turles",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- All enemies' ATK 30%{passiveImg:down_y}\n- Medium chance of stunning the attacked enemy\n*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 60%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- Chance of evading enemy's attack 30%{passiveImg:up_g}"
    },
    {
      id: 1027101,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n*When there is a \"Realm of Gods\" Category enemy*\n- ATK & DEF 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK 60%{passiveImg:up_g}\n- DEF 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1027111,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When there is a \"Realm of Gods\" Category enemy*\n- ATK & DEF 40%{passiveImg:up_g}\n- Attacks are effective against all Types\n*As the 1st attacker in a turn*\n- DEF 120%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK 80%{passiveImg:up_g}\n- DEF 40%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1027151,
      name: "Android #18",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 118%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 118%{passiveImg:up_g}\n*When another 4 or more \"Peppy Gals\" Category allies are on\nthe team, or when there is a PHY Type enemy*\n- ATK 118%{passiveImg:up_g}"
    },
    {
      id: 1027161,
      name: "Android #18",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 180%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 180%{passiveImg:up_g}\n*When another 4 or more \"Peppy Gals\" Category allies are on\nthe team, or when there is a PHY Type enemy*\n- ATK 180%{passiveImg:up_g}\n- Chance of evading enemy's attack 18%{passiveImg:up_g}\n*After evading an attack*\n- Attacks are effective against all Types for 6 turn(s)"
    },
    {
      id: 1027171,
      name: "Mamba",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 80%{passiveImg:up_g}\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- ATK 300%{passiveImg:up_g} when attacking with 12 or more Ki\n*When another 4 or more \"Peppy Gals\" Category allies are on\nthe team, or when there is a STR Type enemy*\n- Medium chance of all enemies' ATK 20%{passiveImg:down_y}"
    },
    {
      id: 1027181,
      name: "Mamba",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- ATK 500%{passiveImg:up_g} when attacking with 12 or more Ki\n- Performs a critical hit\n- Interrupts the attacked enemy\n*When another 4 or more \"Peppy Gals\" Category allies are on\nthe team, or when there is a STR Type enemy*\n- All allies' ATK 40%{passiveImg:up_g}\n- High chance of all enemies' ATK 20%{passiveImg:down_y}"
    },
    {
      id: 1027191,
      name: "Piccolo Jr.",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When there is a \"Turtle School\" Category enemy*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}, {passiveImg:def_down}\nor {passiveImg:stun}*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki starting from the 3rd turn\nfrom the character's entry turn*\n- {passiveImg:once}ATK 200%{passiveImg:up_g}\n- {passiveImg:once}Stuns the attacked enemy for 2 turn(s)\n*When attacking with 12 or more Ki starting from the 6th turn\nfrom the character's entry turn*\n- {passiveImg:once}ATK 150%{passiveImg:up_g}\n- {passiveImg:once}Seals the attacked enemy's Super Attack for 2 turn(s)\n*When attacking with 12 or more Ki starting from the 9th turn\nfrom the character's entry turn*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1027201,
      name: "Fusion Zamasu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 70%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Damage reduction rate 10%{passiveImg:up_g}\n*When there are no \"Realm of Gods\" Category enemies*\n- ATK & DEF 30%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1027211,
      name: "Fusion Zamasu",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Damage reduction rate 20%{passiveImg:up_g}\n*When there are no \"Realm of Gods\" Category enemies*\n- Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 40%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1027241,
      name: "Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 70%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*When there is another \"Future Saga\" Category ally attacking\nin the same turn*\n- ATK & DEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027251,
      name: "Trunks (Teen) (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When there is a \"Future Saga\" or \"Time Travelers\" Category\nenemy*\n- Medium chance of performing a critical hit\n*When there is another \"Future Saga\" Category ally attacking\nin the same turn*\n- ATK & DEF 40%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027271,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 30%)\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1027281,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 40%)\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027311,
      name: "Super Saiyan Gohan (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)"
    },
    {
      id: 1027321,
      name: "Super Saiyan Gohan (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 1027351,
      name: "Super Saiyan Trunks (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 9 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- ATK & DEF 50%{passiveImg:up_g}\n- All allies' DEF 20%{passiveImg:up_g}\n*Starting from the 8th turn from the character's entry turn*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1027361,
      name: "Mai (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*Every time the character performs 2 or more Super Attacks\nin battle*\n- DEF 30%{passiveImg:up_g} within the turn (up to once within a turn)"
    },
    {
      id: 1027371,
      name: "Mai (Future)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}, plus an additional ATK\n& DEF 20%{passiveImg:up_g} and chance of performing a critical hit 10%{passiveImg:up_g}\nfor characters who also belong to the \"Future Saga\" Category\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*Every time the character performs 2 or more Super Attacks\nin battle*\n- DEF 50%{passiveImg:up_g} and damage reduction rate 30%{passiveImg:up_g} within the\nturn (up to once within a turn)\n*When HP is 50% or less*\n- {passiveImg:once}Changes Ki Spheres: PHY to STR and TEQ to AGL\n- {passiveImg:once}Super Class allies' Ki +3"
    },
    {
      id: 1027381,
      name: "Zamasu",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*After evading an attack*\n- \"Future Saga\" Category allies' Ki +1"
    },
    {
      id: 1027391,
      name: "Zamasu",
      element: 24,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is a Super Class\nenemy at the start of the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}ATK & DEF 50%{passiveImg:up_g}\n- {passiveImg:once}{passiveImg:forever}Chance of evading enemy's attack 20%{passiveImg:up_g}\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}, plus an additional\nATK & DEF 20%{passiveImg:up_g} and chance of performing a critical hit\n10%{passiveImg:up_g} for characters who also belong to the \"Future Saga\"\nCategory\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*At the start of each turn when there is a Super Class enemy*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 50%{passiveImg:up_g} (up to 200%)\n*After evading an attack*\n- \"Future Saga\" Category allies' Ki +2 for 2 turn(s)"
    },
    {
      id: 1027401,
      name: "Trunks (Teen)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*For every Super Attack performed*\n- ATK & DEF 20%{passiveImg:up_g} within the turn"
    },
    {
      id: 1027411,
      name: "Super Saiyan Trunks (Teen) & Super Saiyan Broly",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack when HP is 50% or more\n- Chance of performing a critical hit 20%{passiveImg:up_g} when HP is 50% or\nless\n*For every Super Attack performed*\n- ATK & DEF 31%{passiveImg:up_g} within the turn\n- Damage reduction rate 8%{passiveImg:up_g} within the turn"
    },
    {
      id: 1027421,
      name: "Androids #17 & #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Tournament Participants\" Category allies' Ki +2 and ATK &\nDEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn*\n- ATK 59%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027431,
      name: "Androids #17 & #18",
      element: 12,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Representatives of Universe 7\" Category ally on the team\nupon the character's entry*\n- {passiveImg:once}Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to Rainbow Ki Spheres for 4 turn(s)\n*Basic effect(s)*\n- ATK 170%{passiveImg:up_g}\n- DEF 180%{passiveImg:up_g}\n- \"Tournament Participants\" Category allies' Ki +2 and ATK &\nDEF 35%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n- Damage reduction rate 35%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}\n- High chance of performing a critical hit\n- \"Tournament Participants\" Category allies' Ki +1, ATK\n17%{passiveImg:up_g} and DEF 18%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn*\n- Foresees enemy's Super Attack\n- ATK 59%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027441,
      name: "Ribrianne & Kakunsa & Rozie",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 80%{passiveImg:up_g}\n- Changes Ki Spheres: STR to TEQ\n*When there is another \"Universe Survival Saga\" Category\nally attacking in the same turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 2 or more Type Ki Spheres obtained*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1027451,
      name: "Ribrianne & Kakunsa & Rozie",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Changes Ki Spheres: STR to TEQ\n*When there is another \"Universe Survival Saga\" Category\nally attacking in the same turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 2 or more Type Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1027491,
      name: "Zirloin & Rabanra & Zarbuto",
      element: 13,
      rarity: 4,
      itemized_description: "*Per \"Power of Wishes\" or \"Tournament Participants\"\nCategory ally on the team (depending on which Category has\nmore members)*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki if there is another \"Power\nof Wishes\" Category ally on the team*\n- ATK & DEF 80%{passiveImg:up_g}\n*When there is another \"Tournament Participants\" Category\nally attacking in the same turn*\n- Attacks are effective against all Types"
    },
    {
      id: 1027501,
      name: "Zirloin & Rabanra & Zarbuto",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n*Per \"Power of Wishes\" or \"Tournament Participants\"\nCategory ally on the team (depending on which Category has\nmore members)*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki if there is another \"Power\nof Wishes\" Category ally on the team*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of becoming \na Super Attack\n*When there is another \"Tournament Participants\" Category\nally attacking in the same turn*\n- Attacks are effective against all Types\n- {passiveImg:once}Interrupts the attacked enemy starting from the 4th\nturn from the start of battle"
    },
    {
      id: 1027511,
      name: "Android #18 (GT)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 50%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- DEF 50%{passiveImg:up_g} as the 1st attacker in a turn\n*After receiving an attack*\n- Ki +1 and ATK 100%{passiveImg:up_g} for 3 turn(s)"
    },
    {
      id: 1027521,
      name: "Hell Fighter #17",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- DEF 50%{passiveImg:up_g}\n*Starting from the 4th turn from the character's entry turn*\n- Ki +1\n- ATK 50%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027531,
      name: "Krillin (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 20%{passiveImg:down_y}\n- \"DB Saga\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1027541,
      name: "Krillin (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Attacked enemy's ATK & DEF 30%{passiveImg:down_y}\n- \"DB Saga\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki if the target enemy is in\nthe following status: {passiveImg:astute}*\n- ATK 82%{passiveImg:up_g}\n*When HP is 88% or more*\n- Medium chance of launching an additional Super Attack\n*When HP is 86% or less*\n- Medium chance of evading enemy's attack\n- {passiveImg:once}Foresees enemy's Super Attack for 3 turn(s)"
    },
    {
      id: 1027551,
      name: "Goku (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"DB Saga\" Category allies' ATK 20%{passiveImg:up_g} (self excluded)\n*Per \"DB Saga\" Category ally on the team*\n- ATK & DEF 15%{passiveImg:up_g}\n- Chance of performing a critical hit 5%{passiveImg:up_g}\n*When there is another \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1027561,
      name: "Pilaf",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*With an AGL Ki Sphere obtained*\n- ATK & DEF 40%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027571,
      name: "Pilaf",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*With an AGL Ki Sphere obtained*\n- ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*7 or more Ki Spheres obtained*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1027611,
      name: "Super Saiyan 3 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When HP is 59% or less*\n- ATK 59%{passiveImg:up_g}\n- Chance of performing a critical hit 30%{passiveImg:up_g}"
    },
    {
      id: 1027621,
      name: "Super Saiyan 3 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- High chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 159%{passiveImg:up_g}\n- Chance of performing a critical hit 20%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When HP is 59% or less*\n- ATK 159%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n*When receiving an Unarmed Super Attack*\n- Great chance of nullifying it"
    },
    {
      id: 1027641,
      name: "Android #21 (Normal)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking*\n- ATK & DEF 60%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*After evading an attack when HP is 60% or more*\n- ATK 60%{passiveImg:up_g} for 3 turn(s)\n*After performing 6 or more attacks in battle*\n- {passiveImg:forever}High chance of performing a critical hit"
    },
    {
      id: 1027651,
      name: "Android #21 (Normal)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +2\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking*\n- ATK & DEF 120%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*After evading an attack*\n- Ki +2 and ATK 60%{passiveImg:up_g} for 3 turn(s)\n*After performing 3 or more attacks in battle*\n- {passiveImg:forever}Launches an additional attack that has a great chance\nof becoming a Super Attack\n*When the character performs the 6th attack in battle*\n- {passiveImg:once}Interrupts the attacked enemy\n- {passiveImg:forever}Great chance of performing a critical hit starting from\nthe character's next attack"
    },
    {
      id: 1027671,
      name: "Android #21 (Transformed, Evil)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*When attacking*\n- ATK 50%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Damage reduction rate 12%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- High chance of performing a critical hit\n*For every final blow delivered*\n- Recovers 21% HP"
    },
    {
      id: 1027681,
      name: "Android #21 (Transformed, Evil)",
      element: 24,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}ATK & DEF 120%{passiveImg:up_g} for 4 turn(s)\n- {passiveImg:once}Great chance of launching an additional Super Attack\nfor 4 turn(s)\n- High chance of launching an additional Super Attack starting\nfrom the 5th turn from the character's entry turn\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 210%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*When attacking*\n- ATK 90%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Damage reduction rate 21%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- High chance of performing a critical hit\n*When HP is 60% or less, or when the target enemy is in the\nfollowing status: HP is 30% or less*\n- Performs a critical hit\n*For every final blow delivered*\n- Recovers 30% HP"
    },
    {
      id: 1027691,
      name: "Boujack",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 140%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 70%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking*\n- Disables the enemy's guard\n*Per \"Space-Traveling Warriors\" Category ally on the team*\n- ATK & DEF 30%{passiveImg:up_g}\n*When all allies are Extreme Class characters*\n- All allies' Ki +2 and ATK 30%{passiveImg:up_g} (self excluded)\n*When all allies are \"Space-Traveling Warriors\" Category\ncharacters*\n- Great chance of performing a critical hit\n*When all allies are Extreme Class \"Space-Traveling Warriors\"\nCategory characters*\n- Guards all attacks"
    },
    {
      id: 1027701,
      name: "Super Full Power Saiyan 4 Limit Breaker Vegito (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is another \"Giant Ape Power\" or \"Crossover\"\nCategory ally attacking in the same turn or a \"Giant Ape\nPower\" or \"Crossover\" Category enemy*\n- ATK & DEF 50%{passiveImg:up_g}\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1027711,
      name: "Super Full Power Saiyan 4 Limit Breaker Vegito (Xeno)",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Chance of performing a critical hit & damage reduction\nrate 30%{passiveImg:up_g} for 6 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"Giant Ape Power\" or \"Crossover\"\nCategory ally attacking in the same turn or a \"Giant Ape\nPower\" or \"Crossover\" Category enemy*\n- ATK & DEF 100%{passiveImg:up_g}\n- Great chance of launching an additional Super Attack\n*When all allies attacking in the same turn are \"Giant Ape\nPower\" or \"Crossover\" Category characters*\n- Chance of performing a critical hit 40%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1027721,
      name: "Super Full Power Saiyan 4 Limit Breaker Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 170%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack"
    },
    {
      id: 1027731,
      name: "Super Full Power Saiyan 4 Limit Breaker Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack\n*When there is a \"Fused Fighters\" Category enemy*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1027741,
      name: "Crimson Masked Saiyan (Super Saiyan Rosé 3)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}\n*When another 3 or more \"Crossover\" Category allies are on\nthe team*\n- DEF 70%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027751,
      name: "Crimson Masked Saiyan (Super Saiyan Rosé 3)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- High chance of guarding all attacks\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When another 3 or more \"Crossover\" Category allies are on\nthe team*\n- DEF 100%{passiveImg:up_g}\n- Guards all attacks\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*Starting from the 5th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1027771,
      name: "Super Saiyan God SS Vegeta (Berserk Controlled)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*Per \"Dragon Ball Heroes\" Category ally attacking in the\nsame turn (self excluded)*\n- ATK & DEF 20%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*When facing only 1 enemy*\n- ATK 60%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027781,
      name: "Super Saiyan God SS Vegeta (Berserk Controlled)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*Per \"Dragon Ball Heroes\" Category ally attacking in the\nsame turn (self excluded)*\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of performing a critical hit 10%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g} (up to 120%)\n*When facing only 1 enemy*\n- ATK 120%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack\n- High chance of evading enemy's attack"
    },
    {
      id: 1027791,
      name: "Towa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*When another 3 or more Extreme Class allies are on the\nteam*\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n*When all allies are \"Dragon Ball Heroes\" Category\ncharacters*\n- Changes Ki Spheres: AGL to STR"
    },
    {
      id: 1027801,
      name: "Towa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of evading enemy's attack\n*When another 3 or more Extreme Class allies are on the\nteam*\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n*When all allies are \"Dragon Ball Heroes\" Category\ncharacters*\n- Changes Ki Spheres: AGL to STR\n- All allies' Ki +1 and ATK & DEF 10%{passiveImg:up_g}\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1027841,
      name: "Android #17",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Great chance of sealing the attacked enemy's Super Attack\nfor 2 turn(s)\n*For every Ki Sphere obtained*\n- ATK 40%{passiveImg:up_g}\n- DEF 30%{passiveImg:up_g}\n*When there is an ally whose name includes \"#18\" on the\nteam*\n- \"Siblings' Bond\" Category allies' Ki +1 and ATK 30%{passiveImg:up_g}\n- Attacks are effective against all Types if that ally is attacking\nin the same turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027851,
      name: "Android #18",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of stunning the attacked enemy for 2 turn(s)\n*For every Ki Sphere obtained*\n- ATK 30%{passiveImg:up_g}\n- DEF 40%{passiveImg:up_g}\n*When there is an ally whose name includes \"#17\" on the\nteam*\n- \"Siblings' Bond\" Category allies' Ki +1 and DEF 30%{passiveImg:up_g}\n- Guards all attacks if that ally is attacking in the same turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:astute}*\n- Attacks are effective against all Types"
    },
    {
      id: 1027891,
      name: "Dark King Fu",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When another 3 or more \"Crossover\" Category allies are on\nthe team*\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*With a STR Ki Sphere obtained*\n- ATK 50%{passiveImg:up_g}\n*For every STR or Rainbow Ki Sphere obtained (whichever\nKi Sphere is collected more will be counted)*\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 30%)\n- Extreme Class allies' Ki +1 (up to +3)"
    },
    {
      id: 1027901,
      name: "Dark King Fu",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When another 3 or more \"Crossover\" Category allies are on\nthe team*\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*With a STR Ki Sphere obtained*\n- ATK 100%{passiveImg:up_g}\n*For every STR or Rainbow Ki Sphere obtained (whichever\nKi Sphere is collected more will be counted)*\n- Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 50%)\n- Extreme Class allies' Ki +1 (up to +5) and ATK & DEF 4%{passiveImg:up_g} (up\nto 20%)"
    },
    {
      id: 1027911,
      name: "Golden Metal Cooler",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Damage reduction rate 20%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 200%{passiveImg:up_g}\n- ATK & DEF 80%{passiveImg:up_g} when HP is 50% or more\n*Per \"Crossover\" Category ally on the team*\n- Ki +1 (up to +5) and ATK 40%{passiveImg:up_g} (up to 200%)\n- Damage reduction rate 8%{passiveImg:up_g} (up to 40%)\n*When HP is 20% or less*\n- Character's Super Attack will be sealed"
    },
    {
      id: 1027921,
      name: "Janemba (Modified)",
      element: 21,
      rarity: 4,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- Guards all attacks\n*When facing 2 or more enemies*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*Per \"Crossover\" Category ally on the team*\n- ATK & DEF 40%{passiveImg:up_g} (up to 200%)\n*For every attack performed*\n- {passiveImg:forever}ATK 80%{passiveImg:up_g} (up to 240%)\n*For every attack received*\n- {passiveImg:forever}DEF 60%{passiveImg:up_g} (up to 180%)\n*Starting from the character's next attacking turn after the\ncharacter performs 5 attack(s) or receives 5 attack(s) in\nbattle*\n- {passiveImg:forever}Ki +2\n- {passiveImg:forever}Great chance of performing a critical hit"
    },
    {
      id: 1027931,
      name: "Oolong & Launch",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 400%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 100%{passiveImg:down_r} (no more than -300%)\n- {passiveImg:forever}Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 30%)\n*When there is another \"Earthlings\" Category ally attacking\nin the same turn*\n- Ki +1\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1027941,
      name: "Oolong & Launch",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 560%{passiveImg:up_g}\n- Recovers HP with sweet treats\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 60%{passiveImg:down_r} (no more than -300%)\n- {passiveImg:forever}Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 50%)\n*When there is another \"Earthlings\" Category ally attacking\nin the same turn*\n- Ki +2\n- Medium chance of launching an additional Super Attack\n*Starting from the 5th turn from the character's entry turn*\n- Launches an additional Super Attack"
    },
    {
      id: 1027951,
      name: "Trunks (Xeno)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- DEF 100%{passiveImg:up_g}\n*When the character is the only \"Defenders of Justice\"\nCategory character on the team*\n- ATK & DEF 60%{passiveImg:up_g}\n- Performs a critical hit\n*When there is another \"Defenders of Justice\" Category ally\non the team*\n- All allies' ATK & DEF 4%{passiveImg:up_g} per \"Defenders of Justice\"\nCategory ally on the team (up to 20%)"
    },
    {
      id: 1027961,
      name: "Super Saiyan Gogeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027971,
      name: "Super Saiyan Gogeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028001,
      name: "Super Saiyan Broly",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK 30%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +1\n- High chance of launching an additional Super Attack\n*As the 3rd attacker in a turn*\n- Ki +3\n- Launches an additional Super Attack"
    },
    {
      id: 1028011,
      name: "Super Saiyan Broly",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK 40%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +2\n- High chance of launching an additional Super Attack\n*As the 3rd attacker in a turn*\n- Ki +4\n- Launches an additional Super Attack"
    },
    {
      id: 1028041,
      name: "Super Saiyan Goku & \nSuper Saiyan Vegeta & Super Saiyan Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is another \"Super Saiyans\" or \"Movie Heroes\"\nCategory ally attacking in the same turn*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*3 or more Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1028051,
      name: "Super Saiyan Goku & \nSuper Saiyan Vegeta & Super Saiyan Trunks (Teen)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 90%{passiveImg:up_g}\n*When there is another \"Super Saiyans\" or \"Movie Heroes\"\nCategory ally attacking in the same turn*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*For every 3 Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack (up to 2 times within a turn)"
    },
    {
      id: 1028081,
      name: "Caulifla",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*Per \"Universe 6\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n- Chance of performing a critical hit 6%{passiveImg:up_g}\n*When there is an ally whose name includes \"Kale\" attacking\nin the same turn*\n- ATK 160%{passiveImg:up_g}\n- Great chance of evading enemy's attack\n- Launches an additional Super Attack\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*After performing 6 or more attacks in battle*\n- {passiveImg:forever}Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028091,
      name: "Kale",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 160%{passiveImg:up_g}\n- \"Universe 6\" Category allies' Ki +1 and ATK & DEF 40%{passiveImg:up_g}\n- \"Pure Saiyans\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Caulifla\"\nattacking in the same turn*\n- DEF 160%{passiveImg:up_g}\n- Great chance of guarding all attacks\n- Launches an additional Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*After performing 6 or more attacks in battle*\n- {passiveImg:forever}Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028101,
      name: "Vegeta & Nappa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 90%)\n*When there is another \"Terrifying Conquerors\" or \"Pure\nSaiyans\" Category ally attacking in the same turn*\n- Great chance of guarding all attacks"
    },
    {
      id: 1028111,
      name: "Vegeta & Nappa",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 80%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Attacks are effective against all Types\n*As the 3rd attacker in a turn*\n- Damage reduction rate 30%{passiveImg:up_g}\n*When there is another \"Terrifying Conquerors\" or \"Pure\nSaiyans\" Category ally attacking in the same turn*\n- Guards all attacks"
    },
    {
      id: 1028121,
      name: "Piccolo & Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Bond of Master and Disciple\" or \"Saiyan Saga\" Category\nallies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 100%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*If HP is 80% or more when receiving an attack as the 1st or\n2nd attacker in a turn*\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1028131,
      name: "Piccolo & Gohan (Kid)/Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- \"Bond of Master and Disciple\" or \"Saiyan Saga\" Category\nallies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 150%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*If HP is 70% or more when receiving an attack as the 1st or\n2nd attacker in a turn*\n- Damage reduction rate 40%{passiveImg:up_g}\n*As the 3rd attacker in a turn*\n- Super Class allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g} for 3 turn(s)\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 70% or less, or KO'd starting from the 7th turn\nfrom the start of battle*\n- Revives with 70% HP recovered by exchanging with Gohan\n(Kid)"
    },
    {
      id: 1028151,
      name: "Hirudegarn",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When attacking*\n- ATK 80%{passiveImg:up_g}\n*After evading an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028161,
      name: "Hirudegarn",
      element: 22,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +3 and ATK & DEF 100%{passiveImg:up_g} for 5 turn(s)\n- {passiveImg:once}High chance of performing a critical hit for 5 turn(s)\n*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Great chance of evading enemy's attack\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*After evading an attack*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*For every attack evaded*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1028191,
      name: "Yamcha",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Medium chance of performing a critical hit\n*Per \"Tournament Participants\" Category ally on the team\n(self excluded)*\n- ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*Per \"Turtle School\" Category ally attacking in the same turn\n(self excluded)*\n- Ki +2\n- Chance of evading enemy's attack 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g} per \"World Tournament\" Category ally\nattacking in the same turn (self excluded)\n*When HP is 86% or less*\n- ATK 100%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}"
    },
    {
      id: 1028221,
      name: "Golden Frieza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 130%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}\n- \"Super Bosses\" Category allies' Ki +1, ATK 40%{passiveImg:up_g} and DEF\n20%{passiveImg:up_g}\n*After receiving or evading an attack*\n- Great chance of performing a critical hit\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 50%{passiveImg:up_g}\n*From the 2nd to the 4th turn from the character's entry turn*\n- Damage reduction rate 40%{passiveImg:up_g} with 3 or more Ki Spheres\nobtained\n*Starting from the 5th turn from the character's entry turn*\n- Damage reduction rate 30%{passiveImg:up_g} with 3 or more Ki Spheres\nobtained"
    },
    {
      id: 1028231,
      name: "Golden Frieza",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 160%{passiveImg:up_g}\n- DEF 130%{passiveImg:up_g}\n- \"Super Bosses\" Category allies' Ki +2, ATK 60%{passiveImg:up_g} and DEF\n30%{passiveImg:up_g}\n*After receiving or evading an attack*\n- Performs a critical hit\n- ATK 160%{passiveImg:up_g} and DEF 130%{passiveImg:up_g} for 3 turn(s)\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 60%{passiveImg:up_g}\n*From the 2nd to the 4th turn from the character's entry turn*\n- Damage reduction rate 50%{passiveImg:up_g} with 3 or more Ki Spheres\nobtained\n*Starting from the 5th turn from the character's entry turn*\n- Damage reduction rate 40%{passiveImg:up_g} with 3 or more Ki Spheres\nobtained\n*When there is another \"Super Bosses\" Category ally\nattacking in the same turn*\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1028271,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Per \"Super Bosses\" Category ally on the team*\n- Damage reduction rate 5%{passiveImg:up_g} (up to 20%)\n*After receiving an attack*\n- \"Super Bosses\" Category allies' Ki +1"
    },
    {
      id: 1028281,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For 1 turn from the character's entry turn*\n- Guards all attacks\n*Per \"Super Bosses\" Category ally on the team*\n- Damage reduction rate 6%{passiveImg:up_g} (up to 30%)\n*Before attacking*\n- Damage reduction rate 30%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Launches an additional attack\n*Every time the character performs 5 or more attacks in\nbattle*\n- Launches an additional Super Attack (up to once within a\nturn)\n*Every time the character performs 10 or more attacks in\nbattle*\n- Launches an additional Super Attack (up to once within a\nturn)\n*For every attack performed*\n- ATK & DEF 30%{passiveImg:up_g} within the turn\n*After receiving an attack*\n- \"Super Bosses\" Category allies' Ki +2\n*When receiving a Ki Blast Super Attack*\n- Great chance of nullifying it"
    },
    {
      id: 1028301,
      name: "Gohan (Beast)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Guards all attacks\n*When attacking*\n- ATK 30%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 50%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- All allies' Ki +1 (self excluded)\n*For every attack received*\n- ATK & chance of performing a critical hit 10%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1028311,
      name: "Gohan (Beast)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Guards all attacks\n*When attacking*\n- ATK 40%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 60%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- All allies' Ki +2 (self excluded)\n*For every attack received*\n- ATK & chance of performing a critical hit 15%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1028331,
      name: "Gogeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 99%{passiveImg:up_g}\n*For every Ki Sphere obtained when there is another \"Super\nHeroes\" or \"Movie Heroes\" Category ally attacking in the\nsame turn*\n- ATK & DEF 9%{passiveImg:up_g} when attacking\n*9 or more Ki Spheres obtained*\n- Chance of performing a critical hit 99%{passiveImg:up_g}"
    },
    {
      id: 1028351,
      name: "Gamma 1 & Gamma 2",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Super Heroes\", \"Joined Forces\" or \"Defenders of Justice\"\nCategory allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*For every INT Ki Sphere obtained*\n- Chance of performing a critical hit 10%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack (up to 2 times within a turn)\n*After performing 3 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1028361,
      name: "Gamma 1 & Gamma 2",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- \"Super Heroes\", \"Joined Forces\" or \"Defenders of Justice\"\nCategory allies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}\n*For every INT Ki Sphere obtained*\n- Chance of performing a critical hit 20%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack (up to 2 times within a turn)\n*After performing 3 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1028411,
      name: "Android #18 (Linked State)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}, plus\nan additional DEF 10%{passiveImg:up_g} for characters who also belong to\nthe \"Crossover\" Category\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When there is another \"Androids\" or \"Crossover\" Category\nally attacking in the same turn or an \"Androids\" or\n\"Crossover\" Category enemy*\n- ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1028421,
      name: "Android #18 (Linked State)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}, plus\nan additional Ki +1 and DEF 20%{passiveImg:up_g} for characters who also\nbelong to the \"Crossover\" Category\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When there is another \"Androids\" or \"Crossover\" Category\nally attacking in the same turn or an \"Androids\" or\n\"Crossover\" Category enemy*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 80% or less at the start of turn starting from the\n3rd turn from the character's entry turn*\n- {passiveImg:once}Recovers 18% HP at the start of the character's\nattacking turn, Ki +2 and ATK 180%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1028461,
      name: "Krillin & Android #18",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When there is another \"Super Heroes\" Category ally\nattacking in the same turn*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 20%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 60%)\n*When HP is 50% or more*\n- \"Super Heroes\" Category allies' ATK & DEF 30%{passiveImg:up_g} (self\nexcluded)"
    },
    {
      id: 1028471,
      name: "Krillin & Android #18",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 180%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When there is another \"Super Heroes\" Category ally\nattacking in the same turn*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 30%{passiveImg:up_g}\n- \"Super Heroes\" Category allies' Ki +1\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 90%)\n*Before receiving an attack*\n- ATK & DEF 180%{passiveImg:up_g} within the turn\n*When HP is 50% or more*\n- \"Super Heroes\" Category allies' ATK & DEF 50%{passiveImg:up_g} for 2\nturn(s) (self excluded)"
    },
    {
      id: 1028481,
      name: "Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking for the 1st time*\n- The more HP remaining, the greater the ATK boost within\nthe turn (up to 100%{passiveImg:up_g})\n*When receiving an attack for the 1st time*\n- The more HP remaining, the greater the DEF boost within the\nturn (up to 100%{passiveImg:up_g})\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded)*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028491,
      name: "Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n*For 3 turn(s) from the character's entry turn*\n- Damage reduction rate 18%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When attacking for the 1st time*\n- The more HP remaining, the greater the ATK boost within\nthe turn (up to 150%{passiveImg:up_g})\n*When receiving an attack for the 1st time*\n- The more HP remaining, the greater the DEF boost within the\nturn (up to 150%{passiveImg:up_g})\n*For every attack received*\n- {passiveImg:forever}DEF 31%{passiveImg:up_g} (up to 80%)\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded)*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1028511,
      name: "King Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Pure Saiyans\" or \"Vegeta's Family\" Category allies' ATK &\nDEF 20%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to AGL\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- Damage reduction rate 18%{passiveImg:up_g}\n*When there is an ally whose name includes \"Vegeta\" (Jr.,\nKing, Baby and Duplicate excluded) attacking in the same\nturn*\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1028521,
      name: "King Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- \"Pure Saiyans\" or \"Vegeta's Family\" Category allies' ATK & \nDEF 30%{passiveImg:up_g} and chance of performing a critical hit 18%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to AGL\n*When attacking*\n- ATK & DEF 90%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- Damage reduction rate 18%{passiveImg:up_g}\n*3 or more AGL Ki Spheres obtained*\n- Damage reduction rate 18%{passiveImg:up_g}\n*When there is an ally whose name includes \"Vegeta\" (Jr.,\nKing, Baby and Duplicate excluded) attacking in the same\nturn*\n- ATK & DEF 90%{passiveImg:up_g} and all allies' Ki +3 and ATK & \nDEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1028531,
      name: "Beerus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n*3 or more Ki Spheres obtained*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1028541,
      name: "Beerus",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 60%)\n*3 or more Ki Spheres obtained*\n- ATK & DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1028561,
      name: "Frieza (1st Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Terrifying Conquerors\" Category ally on the team*\n- DEF 10%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g}"
    },
    {
      id: 1028571,
      name: "Frieza (1st Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"Space-Traveling Warriors\" Category allies are on the team\nupon the character's entry*\n- {passiveImg:once}ATK & DEF 100%{passiveImg:up_g} and launches an additional attack\nthat has a high chance of becoming a Super Attack for 5\nturn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*Per \"Terrifying Conquerors\" Category ally on the team*\n- DEF 20%{passiveImg:up_g}\n- Chance of performing a critical hit 10%{passiveImg:up_g}\n*After performing 5 or more attacks in battle*\n- {passiveImg:forever}ATK 100%{passiveImg:up_g}\n- {passiveImg:forever}Launches an additional Super Attack\n*When there is a \"Pure Saiyans\" Category enemy*\n- ATK 100%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n*When there is a \"Low-Class Warrior\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1028581,
      name: "Dodoria",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n- \"Inhuman Deeds\" Category allies' Ki +1 and ATK & DEF\n30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Frieza\" (Frieza\nSoldier excluded) on the team*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028591,
      name: "Dodoria",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- \"Inhuman Deeds\" Category allies' Ki +2 and ATK & DEF\n50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n- {passiveImg:forever}Chance of performing a critical hit 6%{passiveImg:up_g} (up to 30%)\n*For 5 turn(s) from the character's entry turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Starting from the 6th turn from the character's entry turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n*When there is an ally whose name includes \"Frieza\" (Frieza\nSoldier excluded) on the team*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Guards all attacks if that ally is attacking in the same turn"
    },
    {
      id: 1028601,
      name: "Frieza (1st Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n- \"Super Bosses\" Category allies' Ki +2\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n*When HP is 50% or more*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When there is a \"Pure Saiyans\" or \"Movie Heroes\" Category\nenemy*\n- Foresees enemy's Super Attack"
    },
    {
      id: 1028621,
      name: "Buyon",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 120%{passiveImg:up_g}\n- All enemies' ATK & DEF 12%{passiveImg:down_y}\n*After receiving 7 or more attacks in battle*\n- {passiveImg:once}Character's Super Attack will be sealed within the\ncharacter's next attacking turn\n- {passiveImg:forever}Damage reduction rate 20%{passiveImg:down_r}\n*After receiving 10 or more attacks in battle*\n- {passiveImg:once}Character will be stunned within the character's next\nattacking turn"
    },
    {
      id: 1028631,
      name: "Buyon",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 240%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 240%{passiveImg:up_g}\n- All enemies' ATK & DEF 24%{passiveImg:down_y}\n*After receiving 7 or more attacks in battle*\n- {passiveImg:once}Character's Super Attack will be sealed within the\ncharacter's next attacking turn\n- {passiveImg:forever}Damage reduction rate 20%{passiveImg:down_r}\n*After receiving 10 or more attacks in battle*\n- {passiveImg:once}Character will be stunned within the character's next\nattacking turn\n*If HP is 50% or more when receiving an attack*\n- Nullifies Ki Blast Super Attacks directed at the character"
    },
    {
      id: 1028671,
      name: "Toppo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 11%{passiveImg:up_g}\n- \"Special Pose\" or \"Defenders of Justice\" Category allies'\nATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1028681,
      name: "Toppo",
      element: 14,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"Special Pose\" or \"Defenders of Justice\" Category allies are\non the team*\n- {passiveImg:once}{passiveImg:forever}Damage reduction rate 11%{passiveImg:up_g}\n- {passiveImg:once}Guards all attacks for 3 turn(s)\n*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- \"Special Pose\" or \"Defenders of Justice\" Category allies' Ki\n+1 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*When HP is 50% or more*\n- Changes Ki Spheres: INT to Rainbow\n*As the 1st attacker in a turn*\n- DEF 200%{passiveImg:up_g}\n- Guards all attacks\n- DEF 50%{passiveImg:up_g} after receiving an attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 100%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1028701,
      name: "Captain Ginyu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 130%{passiveImg:up_g}\n*Per \"Special Pose\" Category ally on the team*\n- Damage reduction rate 4%{passiveImg:up_g} before attacking (up to 20%)\n- Chance of performing a critical hit 4%{passiveImg:up_g} when attacking (up\nto 20%)\n*With an INT or Rainbow Ki Sphere obtained*\n- \"Special Pose\" Category allies' ATK & DEF 20%{passiveImg:up_g} (self\nexcluded)\n*With a Type Ki Sphere obtained (INT excluded)*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1028711,
      name: "Captain Ginyu",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 140%{passiveImg:up_g}\n*Per \"Special Pose\" Category ally on the team*\n- Damage reduction rate 5%{passiveImg:up_g} before attacking (up to 25%)\n- Chance of performing a critical hit 5%{passiveImg:up_g} when attacking (up\nto 25%)\n*With an INT or Rainbow Ki Sphere obtained*\n- \"Special Pose\" Category allies' ATK & DEF 25%{passiveImg:up_g} (self\nexcluded)\n*With a Type Ki Sphere obtained (INT excluded)*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1028731,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Earth-Bred Fighters\" Category ally on the team*\n- {passiveImg:once}All allies' Ki +1 for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 159%{passiveImg:up_g}\n- \"Bond of Parent and Child\" Category allies' Ki +1 and ATK &\nDEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*When HP is 90% or less*\n- Recovers 7% HP\n*When HP is 60% or less*\n- High chance of guarding all attacks\n*When HP is 30% or less*\n- Recovers 10% HP\n- High chance of launching an additional Super Attack\n*When there is another \"Goku's Family\" Category ally\nattacking in the same turn*\n- Damage reduction rate 30%{passiveImg:up_g} when guard is activated"
    },
    {
      id: 1028751,
      name: "Catopesra",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*On the 1st, 3rd & 5th turns from the character's entry turn*\n- Changes Ki Spheres: STR to AGL\n- Medium chance of evading enemy's attack\n- DEF 30%{passiveImg:up_g} per AGL Ki Sphere obtained (up to 150%)\n*On the 2nd, 4th & 6th turns from the character's entry turn*\n- Changes Ki Spheres: AGL to STR\n- High chance of performing a critical hit\n- ATK 30%{passiveImg:up_g} per STR Ki Sphere obtained (up to 150%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1028761,
      name: "Catopesra",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 300%{passiveImg:up_g}\n*On the 1st, 3rd, 5th, 7th & 9th turns from the character's\nentry turn*\n- Changes Ki Spheres: STR to AGL\n- Launches 2 additional attacks, each of which has a high\nchance of becoming a Super Attack\n- High chance of evading enemy's attack\n- DEF 30%{passiveImg:up_g} per AGL Ki Sphere obtained (up to 300%)\n*On the 2nd, 4th, 6th, 8th & 10th turns from the character's\nentry turn*\n- Changes Ki Spheres: AGL to STR\n- Great chance of launching an additional Super Attack\n- Great chance of performing a critical hit\n- ATK 30%{passiveImg:up_g} per STR Ki Sphere obtained (up to 300%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 33%{passiveImg:up_g}\n*Starting from the 7th turn from the start of battle*\n- {passiveImg:once}Changes Ki Spheres: AGL & STR to TEQ\n- ATK & DEF 30%{passiveImg:up_g} per TEQ Ki Sphere obtained (up to 300%)"
    },
    {
      id: 1028771,
      name: "Chilled",
      element: 22,
      rarity: 4,
      itemized_description: "*For every INT Ki Sphere obtained*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When another 3 or more \"Inhuman Deeds\" Category allies\nare on the team*\n- Chance of performing a critical hit 30%{passiveImg:up_g}"
    },
    {
      id: 1028781,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is another \"Majin Buu Saga\" Category ally\nattacking in the same turn*\n- DEF 50%{passiveImg:up_g} as the 1st attacker in a turn\n- ATK 50%{passiveImg:up_g} as the 2nd or 3rd attacker in a turn"
    },
    {
      id: 1028791,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Majin Buu Saga\" Category ally on the team upon the\ncharacter's entry*\n- {passiveImg:once}{passiveImg:forever}Damage reduction rate 90%{passiveImg:up_g}\n- {passiveImg:forever}Damage reduction rate 15%{passiveImg:down_r} for every turn passed\n(no more than -90%)\n- {passiveImg:once}Chance of performing a critical hit 50%{passiveImg:up_g} for 5 turn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Damage reduction rate 5%{passiveImg:up_g} (up to 30%)\n*When there is another \"Majin Buu Saga\" Category ally\nattacking in the same turn*\n- DEF 100%{passiveImg:up_g} and guards all attacks as the 1st attacker in a\nturn\n- ATK 100%{passiveImg:up_g} and launches an additional Super Attack as the\n2nd or 3rd attacker in a turn\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it and countering with tremendous\npower"
    },
    {
      id: 1028801,
      name: "Majin Buu (Good)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Recovers 5% HP at the end of turn\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 70% or more*\n- Great chance of guarding all attacks\n*If HP is 30% or less at the end of turn*\n- Recovers 5% HP"
    },
    {
      id: 1028811,
      name: "Majin Buu (Good)",
      element: 22,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Majin Buu Saga\" Category ally on the team upon the\ncharacter's entry*\n- {passiveImg:once}{passiveImg:forever}Recovers 10% HP at the start of the character's\nattacking turn\n- {passiveImg:once}Recovers 10% HP at the start of the character's\nattacking turn for 5 turn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Recovers 10% HP at the end of turn\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 50% or more*\n- Guards all attacks\n*If HP is 30% or less at the end of turn*\n- Recovers 10% HP\n*When the character is KO'd*\n- {passiveImg:once}Revives with HP fully recovered\n*After the character's or an ally's Revival Skill is activated*\n- {passiveImg:forever}ATK & DEF 100%{passiveImg:up_g}\n- {passiveImg:forever}Guards all attacks\n- {passiveImg:forever}Launches an additional Super Attack\n- {passiveImg:forever}Survives a K.O. attack when receiving an attack (up to\nonce within a turn)"
    },
    {
      id: 1028821,
      name: "Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of Ki +7\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1028831,
      name: "Gotenks",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 177%{passiveImg:up_g}\n- Great chance of Ki +7\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 77%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- Great chance of evading enemy's attack\n*Starting from the 8th turn from the character's entry turn*\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK & DEF 77%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 77%)\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 20%{passiveImg:up_g} (up to 77%)"
    },
    {
      id: 1028841,
      name: "Majin Buu (Pure Evil)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP at the start of turn\n- Recovers HP with sweet treats\n*Per \"Majin Power\" Category ally on the team*\n- ATK & DEF 20%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 5%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When HP is 60% or more*\n- Survives K.O. attacks (up to once within a turn)\n*When HP is 40% or less*\n- Recovers 5% HP\n*If HP is 80% or more when attacking*\n- ATK 40%{passiveImg:up_g}"
    },
    {
      id: 1028851,
      name: "Majin Buu (Pure Evil)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 5% HP\n- Recovers HP with sweet treats\n*Per \"Majin Power\" Category ally on the team*\n- Ki +1\n- ATK & DEF 40%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g}\n*When all allies are \"Majin Power\" Category characters*\n- Launches an additional Super Attack\n- Performs a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When HP is 40% or more*\n- Survives K.O. attacks (up to once within a turn)\n*When HP is 80% or less*\n- Recovers 5% HP\n*When HP is 40% or less*\n- Recovers 10% HP\n*If HP is 60% or more when attacking*\n- ATK 60%{passiveImg:up_g}\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it and countering with tremendous\npower"
    },
    {
      id: 1028871,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*When facing only 1 enemy and that enemy's HP is 58% or\nmore at the start of turn*\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack"
    },
    {
      id: 1028881,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n*When all allies attacking in the same turn are \"Majin Buu\nSaga\" Category characters*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When facing only 1 enemy and that enemy's HP is 58% or\nmore at the start of turn*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1028941,
      name: "Cell Max",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n*For every attack received*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 50%)\n*After receiving a Super Attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1028951,
      name: "Cell Max",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK 15%{passiveImg:up_g} (up to 75%)\n*For every attack received*\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 75%)\n*After receiving a Super Attack*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1028971,
      name: "Super Saiyan 2 Trunks (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 40%{passiveImg:up_g} (up to 200%)\n- Chance of performing a critical hit & chance of evading\nenemy's attack 8%{passiveImg:up_g} (up to 40%)\n*When HP is 70% or less*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*After evading 3 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1028981,
      name: "Super Saiyan 2 Trunks (Future)",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Future Saga\" Category ally on the team upon the character's\nentry*\n- {passiveImg:once}Chance of evading enemy's attack 20%{passiveImg:up_g} and all allies'\nKi +3 for 4 turn(s)\n*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 60%{passiveImg:up_g} (up to 300%)\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g} (up to 50%)\n*When HP is 70% or less*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*After evading 3 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 150%{passiveImg:up_g}"
    },
    {
      id: 1028991,
      name: "Krillin",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- \"Earth-Bred Fighters\" Category allies' Ki +1 and ATK & DEF\n10%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- High chance of launching an additional Super Attack\n*When all allies attacking in the same turn are \"Earthlings\"\nCategory characters*\n- Recovers 10% HP\n- High chance of guarding all attacks\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn,\nor when there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team starting from\nthe 5th turn from the start of battle*\n- Medium chance of evading enemy's attack\n- \"Earth-Bred Fighters\" Category allies' ATK & DEF 10%{passiveImg:up_g}"
    },
    {
      id: 1029001,
      name: "Krillin",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when all allies are Super\nClass characters upon the character's entry*\n- {passiveImg:once}{passiveImg:forever}ATK & DEF 180%{passiveImg:up_g}\n- {passiveImg:once}Chance of performing a critical hit 82%{passiveImg:up_g} for 3 turn(s)\n*Basic effect(s)*\n- \"Earth-Bred Fighters\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack\n*When all allies attacking in the same turn are \"Earthlings\"\nCategory characters*\n- Recovers 20% HP\n- Guards all attacks\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn,\nor when there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team starting from\nthe 5th turn from the start of battle*\n- High chance of evading enemy's attack\n- \"Earth-Bred Fighters\" Category allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1029011,
      name: "Dyspo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn, or when all allies attacking in the same turn\nare \"Tournament Participants\" Category characters*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 11%{passiveImg:up_g}"
    },
    {
      id: 1029021,
      name: "Dyspo",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- High chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n- An additional DEF 150%{passiveImg:up_g} within the turn before receiving\nan attack\n*When there is another \"Universe 11\" Category ally attacking\nin the same turn, or when all allies attacking in the same turn\nare \"Tournament Participants\" Category characters*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & chance of performing a critical hit 11%{passiveImg:up_g}\n- Chance of evading enemy's attack 11%{passiveImg:up_g} within the turn"
    },
    {
      id: 1029031,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of performing a critical hit\n- High chance of evading enemy's attack\n*Before receiving an attack within the turn*\n- Damage reduction rate 25%{passiveImg:up_g}\n*After evading an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1029041,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 170%{passiveImg:up_g}\n- High chance of performing a critical hit\n- High chance of evading enemy's attack\n*Before receiving an attack within the turn*\n- Damage reduction rate 30%{passiveImg:up_g}\n*After evading an attack*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1029071,
      name: "Jiren",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 30%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of performing a critical hit"
    },
    {
      id: 1029081,
      name: "Jiren",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 250%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 40%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- High chance of performing a critical hit"
    },
    {
      id: 1029121,
      name: "Hit",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 166%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- Changes Ki Spheres: INT to Rainbow\n- Medium chance of stunning the attacked enemy\n*With a Rainbow Ki Sphere obtained*\n- Launches an additional attack that has a 66% chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 166%{passiveImg:up_g}\n- Chance of evading enemy's attack 16%{passiveImg:up_g}\n*For every attack performed*\n- ATK & DEF 66%{passiveImg:up_g} within the turn\n*For every Super Attack performed*\n- Chance of evading enemy's attack 6%{passiveImg:up_g} within the turn\n*After evading an attack*\n- Counters with enormous power"
    },
    {
      id: 1029131,
      name: "Master Roshi",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Turtle School\" or \"Peppy Gals\" Category allies' ATK & DEF\n30%{passiveImg:up_g} (self excluded)\n*When another 2 or more \"Turtle School\" Category allies are\non the team*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g} when attacking with 12 or more Ki\n*Per \"Peppy Gals\" Category ally attacking in the same turn*\n- ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1029141,
      name: "Master Roshi",
      element: 13,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Damage reduction rate 30%{passiveImg:up_g} for 7 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Turtle School\" or \"Peppy Gals\" Category allies' Ki +2 and\nATK & DEF 50%{passiveImg:up_g} (self excluded)\n*When another 2 or more \"Turtle School\" Category allies are\non the team*\n- Ki +3\n- Damage reduction rate 20%{passiveImg:up_g}\n- ATK & DEF 150%{passiveImg:up_g} and launches an additional Super Attack\nwhen attacking with 12 or more Ki\n*Per \"Peppy Gals\" Category ally attacking in the same turn*\n- ATK & DEF 82%{passiveImg:up_g}\n*When there is an ally whose name includes \"Bulma\"\nattacking in the same turn*\n- ATK 82%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1029151,
      name: "Bulma (Bunny)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- \"DB Saga\", \"Earth-Bred Fighters\" or \"Peppy Gals\" Category\nallies' ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 86%{passiveImg:up_g}\n*Before receiving an attack within the turn*\n- Chance of evading enemy's attack 10%{passiveImg:up_g}"
    },
    {
      id: 1029161,
      name: "Bulma (Bunny)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- \"DB Saga\", \"Earth-Bred Fighters\" or \"Peppy Gals\" Category\nallies' Ki +1 and ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 186%{passiveImg:up_g}\n*When another 2 or more \"Earth-Bred Fighters\" Category\nallies are on the team*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*Before receiving an attack within the turn*\n- Chance of evading enemy's attack 10%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}Chance of evading enemy's attack 5%{passiveImg:up_g} (up to 20%)"
    },
    {
      id: 1029171,
      name: "Cocotte",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 11%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 120%{passiveImg:up_g}\n*When another 3 or more \"Peppy Gals\" or \"Universe 11\"\nCategory allies are on the team, or when there is a TEQ Type\nenemy*\n- ATK 150%{passiveImg:up_g} when attacking"
    },
    {
      id: 1029181,
      name: "Cocotte",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Damage reduction rate 11%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"Peppy Gals\" or \"Universe 11\"\nCategory ally attacking in the same turn*\n- Damage reduction rate 11%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When another 3 or more \"Peppy Gals\" or \"Universe 11\"\nCategory allies are on the team, or when there is a TEQ Type\nenemy*\n- Foresees enemy's Super Attack\n- Damage reduction rate 11%{passiveImg:up_g}\n- ATK 300%{passiveImg:up_g} when attacking"
    },
    {
      id: 1029191,
      name: "Mai",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- All allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 120%{passiveImg:up_g}\n*When another 3 or more \"Peppy Gals\" or \"DB Saga\"\nCategory allies are on the team, or when there is an AGL Type\nenemy*\n- All allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1029201,
      name: "Mai",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"Peppy Gals\" or \"DB Saga\" Category\nally attacking in the same turn*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a high\nchance of becoming a Super Attack\n*When another 3 or more \"Peppy Gals\" or \"DB Saga\"\nCategory allies are on the team, or when there is an AGL Type\nenemy*\n- All allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1029251,
      name: "Bio-Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When all allies attacking in the same turn are\n\"Uncontrollable Power\" Category characters*\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}Damage reduction rate 4%{passiveImg:up_g} (up to 20%)\n*Starting from the 7th turn from the character's entry turn*\n- {passiveImg:forever}Damage reduction rate 4%{passiveImg:down_r} for every turn passed (no\nmore than -20%)"
    },
    {
      id: 1029261,
      name: "Bio-Broly",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*When all allies attacking in the same turn are\n\"Uncontrollable Power\" Category characters*\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}Damage reduction rate 5%{passiveImg:up_g} (up to 25%)\n*Starting from the 7th turn from the character's entry turn*\n- {passiveImg:forever}Damage reduction rate 5%{passiveImg:down_r} for every turn passed (no\nmore than -25%)"
    },
    {
      id: 1029281,
      name: "Saonel & Pirina",
      element: 11,
      rarity: 4,
      itemized_description: "*Per \"Universe 6\" or \"Namekians\" Category ally on the team\n(depending on which Category has more members)*\n- Ki +1\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is another \"Universe 6\" Category ally attacking\nin the same turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When there is another \"Namekians\" Category ally attacking\nin the same turn*\n- Recovers 10% HP at the end of turn\n*When all allies attacking in the same turn are \"Universe 6\" or\n\"Namekians\" Category characters*\n- Guards all attacks"
    },
    {
      id: 1029291,
      name: "Champa",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Great chance of ATK 300%{passiveImg:up_g}\n- High chance of ATK 400%{passiveImg:up_g}\n- Medium chance of ATK 500%{passiveImg:up_g}\n- Rare chance of ATK 600%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- DEF 50%{passiveImg:up_g}\n*When attacking with 3 or more Ki Spheres obtained*\n- ATK & DEF 200%{passiveImg:up_g}"
    },
    {
      id: 1029321,
      name: "Devilman",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- DEF 100%{passiveImg:up_g}\n*Starting from the 4th turn from the character's entry turn*\n- ATK 100%{passiveImg:up_g}\n*When attacking*\n- DEF 30%{passiveImg:up_g}\n- Medium chance of evading enemy's attack within the turn\n*When another 4 or more \"DB Saga\" Category allies are on the\nteam*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking an Extreme Class enemy*\n- High chance of performing a critical hit\n*Starting from the 6th turn from the start of battle*\n- Medium chance of ATK 66%{passiveImg:up_g} when attacking"
    },
    {
      id: 1029331,
      name: "Devilman",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- DEF 200%{passiveImg:up_g}\n*Starting from the 4th turn from the character's entry turn*\n- ATK 200%{passiveImg:up_g}\n*When attacking*\n- DEF 50%{passiveImg:up_g}\n- High chance of evading enemy's attack within the turn\n*When another 4 or more \"DB Saga\" Category allies are on the\nteam*\n- ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking an Extreme Class enemy*\n- Great chance of performing a critical hit\n*Starting from the 6th turn from the start of battle*\n- High chance of ATK 66%{passiveImg:up_g} when attacking\n- Very rare chance of ATK 666%{passiveImg:up_g} if HP is 66% or more when\nattacking"
    },
    {
      id: 1029341,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth) & \nSuper Saiyan Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- All allies' Ki +2 and ATK 30%{passiveImg:up_g} (self excluded)\n*When receiving an attack*\n- DEF 10%{passiveImg:up_g} for every 3 Ki\n*When receiving a Super Attack*\n- Damage reduction rate 20%{passiveImg:up_g} temporarily\n*When attacking with 12 or more Ki*\n- ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1029351,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth) & \nSuper Saiyan Trunks (Teen)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +2 and ATK 40%{passiveImg:up_g} (self excluded)\n*When receiving an attack*\n- DEF 20%{passiveImg:up_g} for every 3 Ki\n*When receiving a Super Attack*\n- Damage reduction rate 25%{passiveImg:up_g} temporarily\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 1029381,
      name: "Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n*As the 1st attacker in a turn*\n- DEF 80%{passiveImg:up_g} before attacking\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1029391,
      name: "Broly",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +3)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 30%)\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g} before attacking\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1029421,
      name: "Legendary Super Saiyan Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*When attacking*\n- ATK 50%{passiveImg:up_g}\n*For every Type Ki Sphere obtained*\n- Recovers 1% HP"
    },
    {
      id: 1029431,
      name: "Legendary Super Saiyan Broly",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*When attacking*\n- ATK 70%{passiveImg:up_g}\n*For every Type Ki Sphere obtained*\n- Recovers 2% HP"
    },
    {
      id: 1029451,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 80%)\n*When there is another \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- Guards all attacks"
    },
    {
      id: 1029461,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 150%)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*When there is another \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- Ki +1\n- Guards all attacks"
    },
    {
      id: 1029491,
      name: "Grandpa Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*Per \"Turtle School\" or \"Kamehameha\" Category ally\nattacking in the same turn (self excluded)*\n- Ki +1\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Captain Ginyu, Jr., etc. excluded)*\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1029501,
      name: "Grandpa Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*Per \"Turtle School\" or \"Kamehameha\" Category ally\nattacking in the same turn (self excluded)*\n- Ki +2\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Captain Ginyu, Jr., etc. excluded)*\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1029561,
      name: "Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to Rainbow Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 30%{passiveImg:up_g} (up to 300%)\n*With an AGL Ki Sphere obtained, or with 5 or more\nKi Spheres obtained*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking*\n- Damage reduction rate 10%{passiveImg:up_g}"
    },
    {
      id: 1029571,
      name: "Vegeta",
      element: 20,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when facing only 1 enemy\nupon the character's entry*\n- {passiveImg:once}{passiveImg:forever}Ki +3\n- {passiveImg:once}{passiveImg:forever}ATK & DEF 180%{passiveImg:up_g}\n*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to Rainbow Ki Spheres\n*For every Ki Sphere obtained*\n- ATK & DEF 50%{passiveImg:up_g} (up to 500%)\n*1 or more AGL Ki Spheres obtained, or 5 or more Ki Spheres\nobtained*\n- Damage reduction rate 30%{passiveImg:up_g}\n- Chance of evading enemy's attack 18%{passiveImg:up_g}\n*When attacking*\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n- Damage reduction rate 18%{passiveImg:up_g}\n- Launches an additional Super Attack when HP is 50% or\nmore\n*If HP is 50% or less at the end of turn*\n- {passiveImg:forever}DEF 50%{passiveImg:up_g}\n- High chance of performing a critical hit\n*After performing 5 or more Super Attacks in battle*\n- {passiveImg:once}Changes Ki Spheres: All to AGL\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres"
    },
    {
      id: 1029581,
      name: "Cui",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*If HP is 50% or less when receiving an attack*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1029591,
      name: "Cui",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*If HP is 50% or less when receiving an attack*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Great chance of launching an additional Super Attack\n*When HP is 50% or less*\n- {passiveImg:once}Evades enemy's attack within the turn\n- Performs a critical hit\n*When there is another \"Planet Namek Saga\" Category ally\nattacking in the same turn*\n- Foresees enemy's Super Attack"
    },
    {
      id: 1029611,
      name: "Videl",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Dragon Ball Seekers\" or \"Earth-Bred Fighters\" Category\nallies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}, plus an additional Ki +1\nwhen the character is the 2nd to obtain Ki Spheres in a turn,\nplus an additional ATK & DEF 10%{passiveImg:up_g} when the character is the\n3rd to obtain Ki Spheres in a turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed as the 2nd attacker in a turn*\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 20%)\n*For every attack performed as the 3rd attacker in a turn*\n- {passiveImg:forever}Chance of evading enemy's attack 10%{passiveImg:up_g} (up to 20%)"
    },
    {
      id: 1029621,
      name: "Videl",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n- Medium chance of evading enemy's attack\n- \"Dragon Ball Seekers\" or \"Earth-Bred Fighters\" Category\nallies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}, plus an additional Ki +2\nwhen the character is the 2nd to obtain Ki Spheres in a turn,\nplus an additional ATK & DEF 20%{passiveImg:up_g} when the character is the\n3rd to obtain Ki Spheres in a turn\n*When attacking with 12 or more Ki*\n- ATK & DEF 200%{passiveImg:up_g}\n*For every attack performed as the 2nd attacker in a turn*\n- {passiveImg:forever}Damage reduction rate 20%{passiveImg:up_g} (up to 40%)\n*For every attack performed as the 3rd attacker in a turn*\n- {passiveImg:forever}Chance of evading enemy's attack 20%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1029631,
      name: "Paragus",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Pure Saiyans\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*Starting from the 6th turn from the character's entry turn*\n- Ki +1 and ATK & DEF 20%{passiveImg:up_g} for allies whose names include\n\"Broly\" within the character's attacking turn\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1029641,
      name: "Paragus",
      element: 21,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is an ally\nwhose name includes \"Broly\" on the team upon the\ncharacter's entry*\n- {passiveImg:once}ATK & DEF 100%{passiveImg:up_g} and launches an additional attack\nthat has a high chance of becoming a Super Attack for 5\nturn(s)\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n- \"Pure Saiyans\" Category allies' ATK, DEF & chance of\nperforming a critical hit 25%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*Starting from the 6th turn from the character's entry turn*\n- Ki +2 and ATK & DEF 25%{passiveImg:up_g} for allies whose names include\n\"Broly\" within the character's attacking turn\n- High chance of evading enemy's attack\n- Chance of evading enemy's attack 20%{passiveImg:up_g} as the 3rd attacker\nin a turn"
    },
    {
      id: 1029661,
      name: "Super Saiyan Trunks (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- \"Hybrid Saiyans\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When there is another \"Hybrid Saiyans\" Category ally\nattacking in the same turn*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For 4 turn(s) from the character's entry turn*\n- Ki +1 and ATK & DEF 20%{passiveImg:up_g} for allies whose names include\n\"Gohan (Teen)\" or \"Goten (Kid)\" within the character's\nattacking turn\n*As the 1st attacker in a turn*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*After evading an attack*\n- ATK 100%{passiveImg:up_g} temporarily upon the character's next attack"
    },
    {
      id: 1029671,
      name: "Super Saiyan Trunks (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 140%{passiveImg:up_g}\n- \"Hybrid Saiyans\" Category allies' Ki +1 and ATK & DEF\n25%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When receiving an attack*\n- DEF 40%{passiveImg:up_g}\n*When there is another \"Hybrid Saiyans\" Category ally\nattacking in the same turn*\n- ATK 140%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For 4 turn(s) from the character's entry turn*\n- Ki +1 and ATK & DEF 25%{passiveImg:up_g} for allies whose names include\n\"Gohan (Teen)\" or \"Goten (Kid)\" within the character's\nattacking turn\n*As the 1st attacker in a turn*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*After evading an attack*\n- ATK 140%{passiveImg:up_g} temporarily and high chance of performing a\ncritical hit upon the character's next attack\n*Every time the character evades 5 or more attacks in battle*\n- Chance of evading enemy's attack 20%{passiveImg:up_g} within the\ncharacter's next attacking turn (up to 20% within a turn)"
    },
    {
      id: 1029681,
      name: "Gohan (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Recovers 7% HP at the end of turn\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Damage reduction rate & chance of performing a critical hit\n20%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*As the 1st attacker in a turn*\n- Ki +1\n- Damage reduction rate & chance of performing a critical hit\n10%{passiveImg:up_g}"
    },
    {
      id: 1029691,
      name: "Gohan (Kid)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Recovers 10% HP at the end of turn\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Damage reduction rate & chance of performing a critical hit\n20%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*As the 1st attacker in a turn*\n- Ki +2\n- Damage reduction rate & chance of performing a critical hit\n20%{passiveImg:up_g}"
    },
    {
      id: 1029721,
      name: "Lord Slug",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*If HP is 50% or less at the end of turn*\n- Recovers 5% HP"
    },
    {
      id: 1029731,
      name: "Lord Slug",
      element: 23,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when another 3 or more\n\"Demonic Power\" Category allies are on the team upon the\ncharacter's entry*\n- {passiveImg:once}{passiveImg:forever}ATK 200%{passiveImg:up_g}\n- {passiveImg:once}{passiveImg:forever}Damage reduction rate 33%{passiveImg:up_g}\n- {passiveImg:once}Creates the Domain \"Earth Shrouded in Clouds\" for 3\nturn(s)\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 33%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 50%{passiveImg:up_g} (up to 200%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}Foresees enemy's Super Attack within the character's\nattacking turn\n*If HP is 66% or less at the end of turn*\n- Recovers 6% HP\n*When the Domain \"Earth Shrouded in Clouds\" is active*\n- All allies' Ki +2\n- Recovers 10% HP at the end of the character's attacking turn"
    },
    {
      id: 1029741,
      name: "Angila & Medamatcha",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Extreme Class allies' DEF 20%{passiveImg:up_g}, plus an additional Ki +1 and\nATK & DEF 20%{passiveImg:up_g} for characters who also belong to the\n\"Demonic Power\" Category\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute},\nor if there is an \"Earth-Bred Fighters\" Category enemy when\nattacking*\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1029751,
      name: "Angila & Medamatcha",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Extreme Class allies' Ki +1 and DEF 30%{passiveImg:up_g}, plus an additional\nKi +1 and ATK & DEF 30%{passiveImg:up_g} for characters who also belong to\nthe \"Demonic Power\" Category\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 40%{passiveImg:up_g} (up to 200%)\n- {passiveImg:forever}Chance of evading enemy's attack 4%{passiveImg:up_g} (up to 20%)\n*After performing 3 or more Super Attacks in battle*\n- {passiveImg:forever}Launches an additional attack that has a great chance\nof becoming a Super Attack\n*After performing 6 or more Super Attacks in battle*\n- {passiveImg:forever}Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute},\nor if there is an \"Earth-Bred Fighters\" Category enemy when\nattacking*\n- Launches an additional Super Attack"
    },
    {
      id: 1029761,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}, plus an additional Ki +1\nand ATK & DEF 20%{passiveImg:up_g} for characters who also belong to the\n\"All-Out Struggle\" or \"Movie Heroes\" Category\n- Recovers 10% HP at the end of turn\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1029771,
      name: "Piccolo/Super Saiyan Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}, plus an additional Ki +2\nand ATK & DEF 30%{passiveImg:up_g} for characters who also belong to the\n\"All-Out Struggle\" or \"Movie Heroes\" Category\n- Recovers 30% HP at the end of turn\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"All-Out Struggle\" Category ally on\nthe team*\n- Foresees enemy's Super Attack for 2 turn(s)\n- Chance of evading enemy's attack 30%{passiveImg:up_g} for 4 turn(s)\n*Starting from the 5th turn from the start of battle*\n- Exchanges with Super Saiyan Vegeta"
    },
    {
      id: 1029811,
      name: "Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When there is a \"Wicked Bloodline\" Category enemy*\n- ATK 80%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\ncharacters*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}"
    },
    {
      id: 1029821,
      name: "Super Saiyan Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when another 4 or more\nSuper Class allies are on the team upon the character's entry*\n- {passiveImg:once}Launches an additional attack that has a great chance\nof becoming a Super Attack for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Super Class allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- \"Time Travelers\" Category allies' Ki +1 and ATK & DEF\n20%{passiveImg:up_g}\n*When there is a \"Wicked Bloodline\" Category enemy*\n- ATK 100%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\ncharacters*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 50% or less*\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g}"
    },
    {
      id: 1029841,
      name: "Frieza (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 100%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 50%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n- An additional ATK & DEF 50%{passiveImg:up_g} when there is another\n\"Wicked Bloodline\" Category ally attacking in the same turn"
    },
    {
      id: 1029851,
      name: "Frieza (Final Form)/Cooler (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}ATK 25%{passiveImg:up_g} (up to 100%)\n*When HP is 50% or more*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When HP is 80% or less*\n- ATK 50%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n- ATK & DEF 100%{passiveImg:up_g} and damage reduction rate 20%{passiveImg:up_g} when\nthere is another \"Wicked Bloodline\" Category ally attacking\nin the same turn\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- Ki +2 and chance of performing a critical hit 50%{passiveImg:up_g}"
    },
    {
      id: 1029871,
      name: "Hell Fighter #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 170%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- \"Androids\" Category allies' Ki +1, ATK 30%{passiveImg:up_g} and DEF\n20%{passiveImg:up_g}\n- \"Artificial Life Forms\" Category allies' Ki +1, ATK 30%{passiveImg:up_g} and\nDEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 170%{passiveImg:up_g}\n- Chance of evading enemy's attack 17%{passiveImg:up_g}\n*When there is another \"Androids\" or \"Artificial Life Forms\"\nCategory ally attacking in the same turn*\n- ATK 100%{passiveImg:up_g}\n- DEF 70%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1029881,
      name: "Fu (Youth) (Dogidogi Fully Absorbed)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n*Per \"Crossover\" or \"Time Travelers\" Category ally attacking\nin the same turn*\n- ATK & DEF 30%{passiveImg:up_g}\n- Chance of performing a critical hit 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is a Super Class enemy, or when there is another\nExtreme Class ally attacking in the same turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Damage reduction rate 10%{passiveImg:up_g}\n*For every Super Attack performed*\n- Chance of performing a critical hit & damage reduction rate\n10%{passiveImg:up_g} within the turn (up to 20%)"
    },
    {
      id: 1029891,
      name: "Fu (Youth) (Dogidogi Fully Absorbed)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Per \"Crossover\" or \"Time Travelers\" Category ally attacking\nin the same turn*\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of performing a critical hit 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a Super Class enemy, or when there is another\nExtreme Class ally attacking in the same turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every Super Attack performed*\n- Chance of performing a critical hit & damage reduction rate\n20%{passiveImg:up_g} within the turn (up to 40%)\n*Starting from the 5th turn from the start of battle*\n- {passiveImg:once}High chance of changing Ki Spheres: All to AGL & TEQ"
    },
    {
      id: 1029901,
      name: "Aeos",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- All enemies' ATK & DEF 12%{passiveImg:down_y}\n- High chance of evading enemy's attack\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}, plus an additional Ki\n+1 and ATK & DEF 20%{passiveImg:up_g} for characters who also belong to\nthe \"Crossover\" Category\n*When there is another \"Crossover\" Category ally attacking in\nthe same turn*\n- DEF 120%{passiveImg:up_g}\n- DEF 120%{passiveImg:up_g} when receiving an attack\n*For every attack evaded*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)\n*After receiving an attack*\n- Recovers 12% HP at the end of turn"
    },
    {
      id: 1029911,
      name: "Aeos",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- All enemies' ATK & DEF 24%{passiveImg:down_y} and medium chance of\nstunning them at the start of turn\n- High chance of evading enemy's attack\n- All allies' Ki +2 and ATK & DEF 40%{passiveImg:up_g}, plus an additional Ki\n+1 and ATK & DEF 24%{passiveImg:up_g} for characters who also belong to\nthe \"Crossover\" Category\n*When receiving an attack*\n- DEF 120%{passiveImg:up_g}\n*When there is another \"Crossover\" Category ally attacking in\nthe same turn*\n- DEF 120%{passiveImg:up_g}\n- DEF 120%{passiveImg:up_g} when receiving an attack\n*For every attack evaded*\n- {passiveImg:forever}ATK 60%{passiveImg:up_g} (up to 240%)\n- Chance of evading enemy's attack 10%{passiveImg:up_g} within the turn\n*After receiving an attack*\n- Recovers 24% HP at the end of turn"
    },
    {
      id: 1029921,
      name: "Dark King Demigra (Power of Time Unleashed)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is another \"Crossover\" or \"Demonic Power\"\nCategory ally attacking in the same turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- ATK & DEF 60%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Extreme Class allies' ATK 30%{passiveImg:up_g} and chance of performing a\ncritical hit 12%{passiveImg:up_g}"
    },
    {
      id: 1029931,
      name: "Dark King Demigra (Power of Time Unleashed)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 240%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Damage reduction rate 40%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*When there is another \"Crossover\" or \"Demonic Power\"\nCategory ally attacking in the same turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- Damage reduction rate 20%{passiveImg:up_g} before attacking\n*For every attack received*\n- {passiveImg:forever}ATK 40%{passiveImg:up_g} (up to 240%)\n*As the 1st attacker in a turn*\n- ATK & DEF 120%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Extreme Class allies' ATK 60%{passiveImg:up_g} and chance of performing a\ncritical hit 24%{passiveImg:up_g}"
    },
    {
      id: 1029941,
      name: "Super Saiyan God SS Goku (Universe Tree Power)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking*\n- ATK 120%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 120%)\n*When 3 or more \"Crossover\" Category allies are on the team*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*3 or more Ki Spheres obtained*\n- High chance of guarding all attacks\n- {passiveImg:forever}ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1029951,
      name: "Super Saiyan God SS Goku (Universe Tree Power)",
      element: 13,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}DEF 200%{passiveImg:up_g} and launches an additional Super Attack\nfor 4 turn(s)\n*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 40%{passiveImg:up_g} (up to 200%)\n*When 3 or more \"Crossover\" Category allies are on the team,\nor when there is an ally whose name includes \"Xeno\" on the\nteam*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*3 or more Ki Spheres obtained*\n- Great chance of guarding all attacks\n- {passiveImg:forever}ATK 50%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- Guards all attacks\n- {passiveImg:forever}ATK 100%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- {passiveImg:forever}ATK 150%{passiveImg:up_g}\n*After guard is activated*\n- Damage reduction rate 40%{passiveImg:up_g}"
    },
    {
      id: 1029971,
      name: "Majin Buu (Ultimate Gohan)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n*When attacking*\n- ATK 58%{passiveImg:up_g}\n*For 6 turn(s) from the start of battle*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When there is another \"Power Absorption\" or\n\"Transformation Boost\" Category ally attacking in the same\nturn*\n- Extreme Class allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When receiving an attack for the 1st time*\n- The more HP remaining, the greater the DEF boost within the\nturn (up to 100%{passiveImg:up_g})"
    },
    {
      id: 1029981,
      name: "Majin Buu (Ultimate Gohan)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 200%{passiveImg:up_g}\n- Guards all attacks\n*When attacking*\n- ATK & DEF 58%{passiveImg:up_g}\n*For 6 turn(s) from the start of battle*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n*Starting from the 7th turn from the start of battle*\n- High chance of evading enemy's attack\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When there is another \"Power Absorption\" or\n\"Transformation Boost\" Category ally attacking in the same\nturn*\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g}\n- Extreme Class allies' Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n*When receiving an attack for the 1st time*\n- The more HP remaining, the greater the DEF boost within the\nturn (up to 150%{passiveImg:up_g})"
    },
    {
      id: 1030001,
      name: "Super Saiyan 3 Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 120%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When receiving an attack*\n- DEF 40%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 40%{passiveImg:up_g}\n*When there is another \"Final Trump Card\" Category ally on\nthe team*\n- DEF 40%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1030011,
      name: "Super Saiyan 3 Gotenks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When receiving an attack*\n- DEF 50%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 50%{passiveImg:up_g}\n*When there is another \"Final Trump Card\" Category ally on\nthe team*\n- DEF 50%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1030031,
      name: "Piccolo & Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n*Per \"Saiyan Saga\" or \"Earth-Bred Fighters\" Category ally on\nthe team*\n- ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When all allies are Super Class characters*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1030041,
      name: "Piccolo & Gohan (Kid)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- Medium chance of performing a critical hit\n*Per \"Saiyan Saga\" or \"Earth-Bred Fighters\" Category ally on\nthe team*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When all allies are Super Class characters*\n- ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1030051,
      name: "Krillin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Saiyan Saga\" Category allies' ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gohan (Kid)\" on\nthe team*\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1030061,
      name: "Krillin",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- \"Saiyan Saga\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Ki +2\n- ATK & DEF 50%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When there is an ally whose name includes \"Gohan (Kid)\" on\nthe team*\n- All allies' Ki +1, ATK & DEF 30%{passiveImg:up_g} and chance of performing\na critical hit 10%{passiveImg:up_g}"
    },
    {
      id: 1030071,
      name: "Yamcha",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1030081,
      name: "Yamcha",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 180%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional Super Attack\n*When HP is 50% or less*\n- Performs a critical hit\n- {passiveImg:once}Damage reduction rate 70%{passiveImg:up_g}"
    },
    {
      id: 1030091,
      name: "Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 1030101,
      name: "Tien",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 200%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- Performs a critical hit\n*For every Rainbow Ki Sphere obtained*\n- ATK 30%{passiveImg:up_g}\n- Damage reduction rate 7%{passiveImg:up_g}"
    },
    {
      id: 1030111,
      name: "Chiaotzu",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*As the 3rd attacker in a turn*\n- High chance of evading enemy's attack\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- {passiveImg:once}Randomly changes Ki Spheres of a certain Type to\nRainbow Ki Spheres"
    },
    {
      id: 1030121,
      name: "Chiaotzu",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 140%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 140%{passiveImg:up_g}\n*As the 3rd attacker in a turn*\n- Great chance of evading enemy's attack\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- All allies' ATK & DEF 40%{passiveImg:up_g}\n- {passiveImg:once}Randomly changes Ki Spheres of a certain Type to\nRainbow Ki Spheres"
    },
    {
      id: 1030131,
      name: "Warrior in Black (Super Saiyan) (Dark Dragon Ball Boost)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 80%{passiveImg:up_g}\n*When the target enemy is in the following status: HP is 40%\nor less*\n- ATK 100%{passiveImg:up_g} and chance of performing a critical hit 20%{passiveImg:up_g}\n*Before attacking an enemy whose HP is 40% or less*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn\n*After delivering a final blow*\n- {passiveImg:forever}ATK & DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1030141,
      name: "Warrior in Black (Super Saiyan) (Dark Dragon Ball Boost)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Damage reduction rate 40%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following status: HP is 70%\nor less*\n- ATK 150%{passiveImg:up_g} and chance of performing a critical hit 30%{passiveImg:up_g}\n*When the target enemy is in the following status: HP is 40%\nor less*\n- ATK 150%{passiveImg:up_g} and chance of performing a critical hit 30%{passiveImg:up_g}\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- ATK 50%{passiveImg:up_g} and launches an additional Super Attack\n*Before attacking an enemy whose HP is 70% or less*\n- Damage reduction rate 15%{passiveImg:up_g} within the turn\n*Before attacking an enemy whose HP is 40% or less*\n- Damage reduction rate 15%{passiveImg:up_g} within the turn\n*After delivering a final blow*\n- {passiveImg:forever}ATK & DEF 100%{passiveImg:up_g} and launches an additional Super\nAttack"
    },
    {
      id: 1030151,
      name: "Female Warrior in Black",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +1 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n*When the character is the only \"Crossover\" Category\ncharacter on the team*\n- High chance of performing a critical hit\n*When there is another \"Crossover\" Category ally on the\nteam*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} for every attack performed (up to\n80%)"
    },
    {
      id: 1030161,
      name: "Female Warrior in Black",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When the character is the only \"Crossover\" Category\ncharacter on the team*\n- Great chance of performing a critical hit\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"Crossover\" Category ally on the\nteam*\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} for every attack performed (up to\n120%)\n*When there is an \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n- ATK & DEF 86%{passiveImg:up_g} for the character and allies whose names\ninclude \"Yamcha\""
    },
    {
      id: 1030171,
      name: "Grand Supreme Kai",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of guarding all attacks\n- \"Majin Buu Saga\" or \"Potara\" Category allies' Ki +1 and ATK\n& DEF 30%{passiveImg:up_g}\n*Per Super Class ally on the team (self excluded)*\n- ATK & DEF 30%{passiveImg:up_g} (up to 120%)\n*When attacking*\n- ATK & DEF 120%{passiveImg:up_g}\n*When there is a \"Majin Power\" Category enemy*\n- ATK 120%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1030181,
      name: "Grand Supreme Kai",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- High chance of guarding all attacks\n- \"Majin Buu Saga\" or \"Potara\" Category allies' Ki +1 and ATK\n& DEF 40%{passiveImg:up_g}, plus an additional Ki +1 and ATK & DEF 20%{passiveImg:up_g}\nfor characters who also belong to the \"Realm of Gods\"\nCategory\n*Per Super Class ally on the team (self excluded)*\n- Ki +1 (up to +4)\n- ATK & DEF 50%{passiveImg:up_g} (up to 200%)\n*When attacking*\n- ATK & DEF 200%{passiveImg:up_g}\n*After receiving an attack*\n- DEF 100%{passiveImg:up_g}\n*When there is another \"Majin Buu Saga\" Category ally\nattacking in the same turn*\n- Guards all attacks\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When there is a \"Majin Power\" Category enemy*\n- ATK 200%{passiveImg:up_g}\n- Performs a critical hit"
    },
    {
      id: 1030201,
      name: "Goten (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 150%{passiveImg:up_g}\n- High chance of Ki +1\n- High chance of ATK 150%{passiveImg:up_g}\n- Recovers 5% HP\n- Medium chance of recovering 5% HP\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1030211,
      name: "Goten (Kid) & Icarus Jr.",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1\n- ATK & DEF 200%{passiveImg:up_g}\n- Great chance of Ki +1\n- Great chance of ATK 200%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Recovers 7% HP\n- High chance of recovering 7% HP\n- Recovers HP with sweet treats\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- Ki +2\n- Damage reduction rate 35%{passiveImg:up_g}\n- All allies' DEF 35%{passiveImg:up_g} for 2 turn(s)"
    },
    {
      id: 1030221,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- All allies' ATK & DEF 20%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Damage reduction rate 35%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 200%{passiveImg:up_g}\n- All allies' ATK 35%{passiveImg:up_g}\n*When there is another \"Bond of Friendship\" Category ally\nattacking in the same turn*\n- All enemies' ATK 35%{passiveImg:down_y} for 2 turn(s)"
    },
    {
      id: 1030241,
      name: "Goku (Mini) (DAIMA)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- All allies' Ki +1 and ATK 30%{passiveImg:up_g} and if there is another\n\"Dragon Ball Seekers\" Category ally attacking in the same\nturn, plus an additional Ki +1 and chance of performing a\ncritical hit 10%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1030261,
      name: "Vegeta (Mini) (DAIMA)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- All allies' Ki +1 and DEF 30%{passiveImg:up_g} and if there is another\n\"Dragon Ball Seekers\" Category ally attacking in the same\nturn, plus an additional Ki +1 and chance of performing a\ncritical hit 10%{passiveImg:up_g}\n- Great chance of guarding all attacks\n- Medium chance of evading enemy's attack\n*For every attack received or evaded*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 80%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 40%)"
    },
    {
      id: 1030301,
      name: "Krillin (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Tournament Participants\" Category allies' Ki +1 and DEF 20%{passiveImg:up_g}, \nplus an additional Ki +1 and ATK & DEF 20%{passiveImg:up_g} for characters who \nalso belong to the \"World Tournament\" Category\n*When HP is 90% or less*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 70% or less*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n- Great chance of ATK 200%{passiveImg:up_g} when HP is 50% or less\n*When there is a \"Tournament Participants\" Category enemy*\n- ATK 30%{passiveImg:up_g} and DEF 40%{passiveImg:up_g} when attacking"
    },
    {
      id: 1030321,
      name: "Super Saiyan 3 Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- \"Power Beyond Super Saiyan\" Category allies' DEF 30%{passiveImg:up_g}\n- Receives an additional Ki +1 per AGL Ki Sphere obtained\n*For 3 turns from the character's entry turn*\n- High chance of evading enemy's attack\n*For every 3 Ki when attacking*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1030331,
      name: "Super Saiyan 3 Goku (GT)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- \"Power Beyond Super Saiyan\" Category allies' DEF 40%{passiveImg:up_g}\n- Receives an additional Ki +1 per AGL Ki Sphere obtained\n*For 4 turns from the character's entry turn*\n- High chance of evading enemy's attack\n*For every 3 Ki when attacking*\n- ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1030371,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK 80%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 80%{passiveImg:up_g}"
    },
    {
      id: 1030381,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1030401,
      name: "Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*For 10 turns from the character's entry turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- All allies' ATK & DEF 10%{passiveImg:up_g} within the character's attacking turn"
    },
    {
      id: 1030411,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- \"Earth-Protecting Heroes\" Category allies' DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*As the 2nd or 3rd attacker in a turn*\n- Damage reduction rate 10%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance \nof becoming a Super Attack"
    },
    {
      id: 1030421,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- \"Earth-Protecting Heroes\" Category allies' Ki +1 and DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*As the 2nd or 3rd attacker in a turn*\n- Damage reduction rate 15%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of \nbecoming a Super Attack"
    },
    {
      id: 1030461,
      name: "Super Saiyan Vegeta (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- \"Successors\" Category allies' DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*As the 2nd or 3rd attacker in a turn*\n- Guards all attacks\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack"
    },
    {
      id: 1030471,
      name: "Super Saiyan Vegeta (Angel)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- \"Successors\" Category allies' Ki +1 and DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n- DEF 70%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*As the 2nd or 3rd attacker in a turn*\n- Guards all attacks\n- Launches an additional attack that has a high chance of \nbecoming a Super Attack"
    },
    {
      id: 1030511,
      name: "Frieza (Final Form) (Angel)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 77%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class \ncharacters (self excluded)*\n- High chance of performing a critical hit\n*When all allies attacking in the same turn are Extreme Class \ncharacters (self excluded)*\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1030521,
      name: "Frieza (Final Form) (Angel)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class \ncharacters (self excluded)*\n- Great chance of performing a critical hit\n*When all allies attacking in the same turn are Extreme Class \ncharacters (self excluded)*\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 1030551,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR excluded) \nto Rainbow Ki Spheres\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n- Damage reduction rate 5%{passiveImg:up_g} within the turn\n*For every 2 Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack (up to 3 times within a turn)"
    },
    {
      id: 1030561,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR excluded) \nto Rainbow Ki Spheres\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 150%)\n- Damage reduction rate 5%{passiveImg:up_g} within the turn\n*For every 2 Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack (up to 4 times within a turn)"
    },
    {
      id: 1030601,
      name: "Trunks (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*For every PHY Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g} and DEF 10%{passiveImg:up_g}\n*1 or more PHY Ki Spheres obtained*\n- Launches an additional attack that has a high chance of \nbecoming a Super Attack\n*2 or more PHY Ki Spheres obtained*\n- DEF 100%{passiveImg:up_g} when attacking"
    },
    {
      id: 1030611,
      name: "Trunks (Kid) + Goten (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 30%{passiveImg:up_g}\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n*For every PHY Ki Sphere obtained*\n- ATK 40%{passiveImg:up_g} and DEF 20%{passiveImg:up_g}\n*1 or more PHY Ki Spheres obtained*\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*2 or more PHY Ki Spheres obtained*\n- DEF 150%{passiveImg:up_g} when attacking\n*3 or more PHY Ki Spheres obtained*\n- Guards all attacks\n*Starting from the 4th turn from the start of battle*\n- Meets up with Goten (Kid) and can perform Reversible Exchange"
    },
    {
      id: 1030631,
      name: "Glorio",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Medium chance of evading enemy's attack\n*As the 3rd attacker in a turn*\n- All allies' ATK & DEF 30%{passiveImg:up_g} for 2 turns\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every attack performed*\n- ATK & DEF 20%{passiveImg:up_g} within the turn"
    },
    {
      id: 1030641,
      name: "Glorio",
      element: 14,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Launches an additional attack that has a great chance\nof becoming a Super Attack for 1 turn\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*As the 3rd attacker in a turn*\n- All allies' Ki +1 and ATK & DEF 50%{passiveImg:up_g} for 3 turns\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every attack performed*\n- ATK & DEF 50%{passiveImg:up_g} within the turn\n*For every Super Attack performed*\n- ATK 30%{passiveImg:up_g} within the turn\n- Chance of evading enemy's attack 10%{passiveImg:up_g} within the turn (up\nto 30%)\n*Every time the character performs 3 or more Super Attacks\nin battle*\n- Launches an additional Super Attack (up to once within a\nturn)"
    },
    {
      id: 1030651,
      name: "Super Saiyan Goku (Mini) (DAIMA)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*As the 2nd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}\n*For every attack received or evaded*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1030661,
      name: "Super Saiyan Goku (Mini) (DAIMA)",
      element: 12,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Damage reduction rate & chance of evading enemy's\nattack 20%{passiveImg:up_g} for 1 turn\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*As the 1st or 2nd attacker in a turn*\n- DEF 100%{passiveImg:up_g}\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*As the 2nd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When receiving an attack*\n- DEF 200%{passiveImg:up_g}\n*For every attack received or evaded*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g} (up to 200%)\n*Starting from the character's next attacking turn after the\ncharacter evades 5 or more attacks in battle, or starting from\nthe 6th turn from the character's entry turn*\n- {passiveImg:forever}ATK 159%{passiveImg:up_g}\n- {passiveImg:forever}Attacks are effective against all Types"
    },
    {
      id: 1030671,
      name: "Goku (Mini) (DAIMA)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- All allies' Ki +2 and ATK 40%{passiveImg:up_g} and if there is another \n\"Dragon Ball Seekers\" Category ally attacking in the same \nturn, plus an additional Ki +1 and chance of performing a \ncritical hit 20%{passiveImg:up_g}\n- Launches an additional Super Attack\n- Medium chance of performing a critical hit\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1030721,
      name: "Hercule",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- \"Earth-Protecting Heroes\" Category allies' Ki +1 and \nATK & DEF 30%{passiveImg:up_g}\n*For every attack received or evaded*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*When there is another \"Earth-Protecting Heroes\" \nCategory ally attacking in the same turn*\n- Chance of evading enemy's attack 40%{passiveImg:up_g}\n*After receiving an attack*\n- Chance of evading enemy's attack 30%{passiveImg:up_g}"
    },
    {
      id: 1030731,
      name: "Hercule",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 250%{passiveImg:up_g}\n- \"Earth-Protecting Heroes\" Category allies' Ki +2 and \nATK & DEF 50%{passiveImg:up_g}\n*For every attack received or evaded*\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 150%)\n*When there is another \"Earth-Protecting Heroes\" \nCategory ally attacking in the same turn*\n- Chance of evading enemy's attack 45%{passiveImg:up_g}\n*Before receiving an attack within the turn*\n- Damage reduction rate 90%{passiveImg:up_g}\n*After receiving an attack*\n- Chance of evading enemy's attack 40%{passiveImg:up_g}\n*After evading an attack*\n- Super Class allies' Ki +2 for 2 turns"
    },
    {
      id: 1030771,
      name: "Demon King Piccolo (Elder)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*Per \"Demonic Power\" Category ally or Extreme Class ally on \nthe team (depending on which has more members)*\n- ATK & DEF 10%{passiveImg:up_g} when attacking (up to 50%)\n*When all allies attacking in the same turn are \"Demonic Power\" \nCategory characters, or when all allies are Extreme Class \ncharacters*\n- Guards all attacks"
    },
    {
      id: 1030781,
      name: "Demon King Piccolo (Elder)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' ATK & DEF 40%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}\n*Per \"Demonic Power\" Category ally or Extreme Class ally on \nthe team (depending on which has more members)*\n- ATK & DEF 15%{passiveImg:up_g} when attacking (up to 75%)\n*When all allies attacking in the same turn are \"Demonic Power\" \nCategory characters, or when all allies are Extreme Class \ncharacters*\n- Guards all attacks"
    },
    {
      id: 1030821,
      name: "Beerus",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of evading enemy's attack\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack\n- \"Successors\" Category allies' Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 90% or more*\n- DEF 100%{passiveImg:up_g}\n*When HP is 90% or less*\n- Launches an additional Super Attack\n*When facing only 1 enemy*\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g} when the \nenemy's HP is 50% or more"
    },
    {
      id: 1030831,
      name: "Beerus",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when HP is 99% or less at the \nstart of the character's attacking turn, or when there is another \n\"Successors\" Category ally attacking in the same turn at the start \nof the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}ATK & DEF 150%{passiveImg:up_g}\n- {passiveImg:once}Guards all attacks for 7 turns\n- {passiveImg:once}High chance of launching an additional Super Attack \nfor 7 turns\n*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow Ki \nSpheres\n- High chance of evading enemy's attack\n- Launches an additional attack that has a high chance of \nbecoming a Super Attack\n- \"Successors\" Category allies' Ki +2 and ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 90% or more*\n- DEF 150%{passiveImg:up_g}\n*When HP is 90% or less*\n- Launches an additional Super Attack\n*When HP is 70% or less*\n- Launches an additional Super Attack\n*When facing only 1 enemy*\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g} when the \nenemy's HP is 50% or more\n- ATK & chance of performing a critical hit 50%{passiveImg:up_g} when the \nenemy's HP is 80% or more"
    },
    {
      id: 1031051,
      name: "Super Saiyan 3 Vegeta (Mini) (DAIMA)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Damage reduction rate 10%{passiveImg:up_g}\n*When attacking*\n- ATK100%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1031061,
      name: "Super Saiyan 3 Vegeta (Mini) (DAIMA)",
      element: 14,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation upon the character's entry*\n- {passiveImg:once}Chance of performing a critical hit & damage reduction \nrate 20%{passiveImg:up_g} and foresees enemy's Super Attack for 1 turn\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- ATK 50%{passiveImg:up_g}\n- Chance of performing a critical hit 30%{passiveImg:up_g}\n*When attacking*\n- ATK 200%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 200%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional Super Attack\n*After receiving a Super Attack*\n- Launches an additional Super Attack"
    },
    {
      id: 1031071,
      name: "Goku (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack\n*When receiving an attack*\n- DEF 120%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1031081,
      name: "Goku (Youth)",
      element: 10,
      rarity: 4,
      itemized_description: "*Activates the Entrance Animation when there is another \n\"DB Saga\", \"Youth\" or \"Dragon Ball Seekers\" Category \nally attacking in the same turn upon the character's entry*\n- {passiveImg:once}Launches an additional Super Attack and \ndamage reduction rate 40%{passiveImg:up_g} for 7 turns\n*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n- 55% chance of performing a critical hit within the turn\n- 22% chance of evading enemy's attack within the turn\n*When receiving an attack*\n- DEF 200%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g} (up to 200%)\n*After performing 7 or more Super Attacks in battle*\n- {passiveImg:forever}Launches an additional Super Attack\n- {passiveImg:forever}Guards all attacks"
    },
    {
      id: 1031091,
      name: "Chi-Chi (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}, plus an additional \nATK & DEF 20%{passiveImg:up_g} for characters who also belong to the \n\"DB Saga\" Category\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK, DEF & chance of performing a critical hit 10%{passiveImg:up_g} \n(up to 50%)\n*When there is another \"Youth\" Category ally on the team*\n- DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1031101,
      name: "Chi-Chi (Youth)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of \nbecoming a Super Attack\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}, plus an additional \nATK & DEF 30%{passiveImg:up_g} for characters who also belong to the \n\"DB Saga\" Category\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n- Medium chance of ATK 150%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}ATK, DEF & chance of performing a critical hit 25%{passiveImg:up_g} \n(up to 100%)\n*When the target enemy is in the following status: {passiveImg:atk_down}, {passiveImg:def_down}, \n{passiveImg:stun} or {passiveImg:astute}*\n- Launches an additional Super Attack\n*When there is another \"Youth\" Category ally on the team*\n- DEF 200%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When there is an ally whose name includes \"Goku\" (Captain Ginyu, \nJr., etc. excluded) attacking in the same turn*\n- Guards all attacks\n- DEF 159%{passiveImg:up_g} when receiving an attack"
    },
    {
      id: 4012411,
      name: "Hirudegarn",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Evades enemy's attack"
    },
    {
      id: 4012421,
      name: "Hirudegarn",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Evades enemy's attack"
    },
    {
      id: 4013551,
      name: "Goku (Ultra Instinct)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK 150%{passiveImg:up_g}\n- Great chance of evading enemy's attack\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 4013581,
      name: "Turles",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% HP\n- ATK & DEF 130%{passiveImg:up_g}\n- Super Class enemies' DEF 80%{passiveImg:down_y}"
    },
    {
      id: 4013841,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- Launches 2 additional attack(s)\n*For every attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 4014071,
      name: "Ribrianne",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- \"Peppy Gals\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*Per \"Peppy Gals\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g}\n- All enemies' ATK & DEF 10%{passiveImg:down_y} (no more than -30%)"
    },
    {
      id: 4014691,
      name: "Piccolo",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 20% HP\n- Changes Ki Spheres: AGL to Rainbow\n- ATK & DEF 60%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Ki +2 and ATK 12%{passiveImg:up_g}\n- Recovers 15000 HP"
    },
    {
      id: 4014751,
      name: "Android #21 (Transformed, Evil)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 130%{passiveImg:up_g}\n- Recovers 13% HP at the start of turn\n*When attacking with 12 or more Ki*\n- Disables the enemy's guard"
    },
    {
      id: 4014771,
      name: "Super Saiyan 2 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g} and DEF 60%{passiveImg:up_g}\n- Damage reduction rate 22%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014781,
      name: "Super Saiyan 3 Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g} and DEF 40%{passiveImg:up_g}\n- Damage reduction rate 23%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014791,
      name: "Super Saiyan God Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 110%{passiveImg:up_g} and DEF 20%{passiveImg:up_g}\n- Damage reduction rate 24%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014801,
      name: "Super Saiyan God SS Goku",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Damage reduction rate 25%{passiveImg:up_g}\n- {passiveImg:once}Ki +12\n- {passiveImg:once}Performs a critical hit"
    },
    {
      id: 4014831,
      name: "Frieza (2nd Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 90%{passiveImg:up_g} and DEF 60%{passiveImg:up_g}\n- Recovers 12% HP at the start of turn\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014841,
      name: "Frieza (3rd Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g} and DEF 40%{passiveImg:up_g}\n- Recovers 13% HP at the start of turn\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014851,
      name: "Frieza (Final Form)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 110%{passiveImg:up_g} and DEF 20%{passiveImg:up_g}\n- Recovers 14% HP at the start of turn\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4014861,
      name: "Golden Frieza",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- Recovers 15% HP at the start of turn\n- {passiveImg:once}Ki +12\n- {passiveImg:once}Performs a critical hit"
    },
    {
      id: 4015061,
      name: "Majin Buu (Ultimate Gohan)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 4015071,
      name: "Majin Buu (Gotenks)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 8% HP at the start of turn\n- ATK 120%{passiveImg:up_g} and DEF 100%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 4015081,
      name: "Majin Buu (Piccolo)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% HP at the start of turn\n- ATK & DEF 100%{passiveImg:up_g}\n- All allies' Ki +3 and DEF 30%{passiveImg:up_g}"
    },
    {
      id: 4015481,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 150%{passiveImg:up_g}\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n- Extreme Class allies' Ki +3"
    },
    {
      id: 4015981,
      name: "Super Saiyan God SS Gogeta",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- Performs a critical hit\n- High chance of evading enemy's attack"
    },
    {
      id: 4016011,
      name: "Super Saiyan Broly (Full Power)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +8, ATK 188%{passiveImg:up_g} and DEF 120%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 4016521,
      name: "Super Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 7%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4016531,
      name: "Super Saiyan 2 Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 8%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4016541,
      name: "Super Saiyan God Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 110%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK 9%{passiveImg:up_g}\n*On the character's next attacking turn*\n- Transforms again"
    },
    {
      id: 4016551,
      name: "Super Saiyan God SS Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- {passiveImg:once}Changes Ki Spheres: All to PHY\n*For every Ki Sphere obtained*\n- ATK 10%{passiveImg:up_g}"
    },
    {
      id: 4017091,
      name: "Super Saiyan Trunks (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +4) and ATK & DEF 10%{passiveImg:up_g} (up to 80%)"
    },
    {
      id: 4017101,
      name: "Super Saiyan Trunks (Future)",
      element: 11,
      rarity: 4,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK 30%{passiveImg:up_g}\n- DEF 10%{passiveImg:up_g}\n- Attacks are effective against all Types\n- {passiveImg:once}Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres"
    },
    {
      id: 4017131,
      name: "Fusion Zamasu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 120%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n*When HP is 80% or less*\n- Recovers 10% HP"
    },
    {
      id: 4017141,
      name: "Fusion Zamasu",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK 280%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Super Class allies' ATK 10%{passiveImg:down_r}\n*When attacking*\n- Disables the enemy's guard"
    },
    {
      id: 4017191,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*After receiving an attack*\n- {passiveImg:forever}ATK 59%{passiveImg:up_g}\n*After guard is activated*\n- Guards all attacks for 3 turn(s)\n- High chance of performing a critical hit for 3 turn(s)"
    },
    {
      id: 4017201,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres"
    },
    {
      id: 4017311,
      name: "Sealas (Fused)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}"
    },
    {
      id: 4017501,
      name: "Piccolo",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n- Foresees enemy's Super Attack\n*The more HP remaining*\n- Chance of performing a critical hit{passiveImg:up_g} (10% - 40%)\n*When HP is 77% or less at the start of turn*\n- Recovers 10% HP"
    },
    {
      id: 4017601,
      name: "Launch",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*For 6 turn(s) from the character's entry turn*\n- Ki +3 and ATK & DEF 60%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Launches 2 additional attacks, each of which has a high\nchance of becoming a Super Attack\n*When there is another \"Peppy Gals\" Category ally attacking\nin the same turn*\n- Seals the attacked enemy's Super Attack"
    },
    {
      id: 4017671,
      name: "Super Trunks",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Weakens Regeneration\n*For every turn passed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:down_r} (no more than -80%)"
    },
    {
      id: 4017751,
      name: "Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 60%{passiveImg:up_g}\n*When there is an \"Androids/Cell Saga\" Category enemy*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 4018131,
      name: "Super Saiyan Gohan (Future)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 100%{passiveImg:up_g}\n- Damage reduction rate 58%{passiveImg:up_g}\n*Per \"Bond of Master and Disciple\" Category ally attacking in\nthe same turn*\n- Ki +1 and ATK & DEF 30%{passiveImg:up_g}\n*When there is an \"Androids\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 4018201,
      name: "Cooler (Final Form)",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- Performs a critical hit"
    },
    {
      id: 4018281,
      name: "Fusion Android #13",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 130%{passiveImg:up_g}\n- Attacks guaranteed to hit\n*When attacking*\n- Disables the enemy's guard\n*Per \"Target: Goku\" Category ally on the team*\n- ATK & DEF 13%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- Performs a critical hit"
    },
    {
      id: 4018731,
      name: "Great Saiyaman",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- Ki +5 and ATK & DEF 58%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g}\n*When there is a \"Peppy Gals\" or \"Youth\" Category enemy*\n- Character's Super Attack will be sealed"
    },
    {
      id: 4018761,
      name: "Super Saiyan 3 Goku (Angel)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 77%)\n*The less HP remaining*\n- ATK{passiveImg:up_g} (up to 77%)\n*3 or more Ki Spheres obtained*\n- Chance of evading enemy's attack 33%{passiveImg:up_g}\n- ATK & DEF 33%{passiveImg:up_g} when attacking\n*6 or more Ki Spheres obtained*\n- Attacks are effective against all Types"
    },
    {
      id: 4018781,
      name: "Majin Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 77%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 77%)\n*3 or more Ki Spheres obtained*\n- Attacks are effective against all Types\n*6 or more Ki Spheres obtained*\n- Guards all attacks"
    },
    {
      id: 4019021,
      name: "Super Saiyan Cumber (Giant Ape Cumber)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2"
    },
    {
      id: 4019151,
      name: "Super Saiyan Bardock",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK 180%{passiveImg:up_g} and DEF 100%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- Attacks are effective against all Types\n*For 5 turns from the character's entry turn*\n- Ki +3\n- Chance of performing a critical hit, chance of evading\nenemy's attack & damage reduction rate 18%{passiveImg:up_g}\n*When there is a \"Wicked Bloodline\" Category enemy*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Performs a critical hit"
    },
    {
      id: 4019501,
      name: "Great Saiyaman 1",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 30%{passiveImg:up_g}\n*Per \"Special Pose\" Category ally on the team*\n- ATK 10%{passiveImg:up_g}\n- Chance of performing a critical hit 5%{passiveImg:up_g}"
    },
    {
      id: 4019601,
      name: "Majin Buu (Pure Evil)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK 150%{passiveImg:up_g}\n- Damage reduction rate 40%{passiveImg:up_g}\n- High chance of stunning the attacked enemy\n- Medium chance of evading enemy's attack"
    },
    {
      id: 4019611,
      name: "Buu (Super)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK 220%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 12%{passiveImg:up_g}"
    },
    {
      id: 4019641,
      name: "Super Saiyan Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n- High chance of ATK 50%{passiveImg:up_g}\n- High chance of ATK 50%{passiveImg:up_g}\n- High chance of DEF 50%{passiveImg:up_g}\n- High chance of DEF 50%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 4019651,
      name: "Super Saiyan 3 Gotenks",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Ki +3\n- Great chance of launching an additional Super Attack"
    },
    {
      id: 4019751,
      name: "Super Saiyan Kefla",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- ATK 50%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When HP is 60% or more starting from the next attacking\nturn*\n- Transforms"
    },
    {
      id: 4019761,
      name: "Super Saiyan 2 Kefla",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and DEF 160%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK 160%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- Launches an additional Super Attack"
    },
    {
      id: 4020101,
      name: "Ultimate Gohan",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 158%{passiveImg:up_g}\n- Guards all attacks\n*After guard is activated*\n- {passiveImg:forever}ATK 58%{passiveImg:up_g}\n*When facing only 1 enemy and that enemy's HP is 58% or\nmore, or when there is a \"Majin Buu Saga\" Category enemy*\n- Attacks are effective against all Types"
    },
    {
      id: 4020141,
      name: "Kibito Kai",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- {passiveImg:once}All enemies' ATK & DEF 20%{passiveImg:down_y}\n- {passiveImg:once}Stuns the attacked enemy for 2 turn(s)\n- Recovers 10% HP at the end of turn"
    },
    {
      id: 4020511,
      name: "Golden Frieza (Angel)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 80%{passiveImg:up_g}\n- Great chance of stunning the attacked enemy\n*When HP is 49% or less*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 4020631,
      name: "Goku",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}\n*With a Rainbow Ki Sphere obtained*\n- Attacks are effective against all Types"
    },
    {
      id: 4020781,
      name: "Majin Buu (Good)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"Majin Buu Saga\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}"
    },
    {
      id: 4020921,
      name: "Demigra (Final Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1"
    },
    {
      id: 4020951,
      name: "Mira (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Medium chance of launching an additional Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*When all allies attacking in the same turn are Extreme Class\ncharacters*\n- Ki +3\n- ATK 30%{passiveImg:up_g}\n*Per Extreme Class ally on the team*\n- ATK & DEF 5%{passiveImg:up_g}"
    },
    {
      id: 4021061,
      name: "Full Power Boujack",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*3 or more Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g} and DEF 15%{passiveImg:up_g} when attacking\n*6 or more Ki Spheres obtained*\n- ATK 30%{passiveImg:up_g} and DEF 15%{passiveImg:up_g} when attacking"
    },
    {
      id: 4021301,
      name: "Super Janemba",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to any 1 type\nof Ki Sphere\n*For 1 turn from the character's entry turn*\n- Guards all attacks\n*3 or more Type Ki Spheres obtained*\n- ATK 40%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- High chance of evading enemy's attack"
    },
    {
      id: 4021391,
      name: "Vegeta (GT) (Giant Ape)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1"
    },
    {
      id: 4021441,
      name: "Bardock (Giant Ape)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +1"
    },
    {
      id: 4021821,
      name: "Videl",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 158%{passiveImg:up_g}\n*Before attacking*\n- High chance of evading enemy's attack\n*When attacking*\n- ATK 58%{passiveImg:up_g}\n*After evading an attack*\n- Attacks are effective against all Types\n*After receiving an attack*\n- ATK 58%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Launches an additional Super Attack\n*As the 3rd attacker in a turn*\n- ATK 58%{passiveImg:up_g}\n- High chance of evading enemy's attack"
    },
    {
      id: 4022841,
      name: "Super Saiyan 2 Kefla",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 60% HP\n- ATK & DEF 160%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- High chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 60%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- ATK 60%{passiveImg:up_g} when attacking"
    },
    {
      id: 4022891,
      name: "Vegeta",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 20% HP\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 4023121,
      name: "Super Saiyan Trunks (Teen)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Great chance of performing a critical hit\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n- {passiveImg:once}Performs a critical hit\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- ATK 50%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute}*\n- ATK 50%{passiveImg:up_g}\n*When all allies attacking in the same turn are \"Androids/Cell\nSaga\" Category characters*\n- High chance of stunning the attacked enemy for 2 turn(s)"
    },
    {
      id: 4023471,
      name: "Super Saiyan 3 Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*For 6 turn(s) from the character's entry turn*\n- ATK 50%{passiveImg:up_g} when attacking\n- Great chance of performing a critical hit\n*Starting from the 7th turn from the character's entry turn*\n- High chance of performing a critical hit"
    },
    {
      id: 4023781,
      name: "Ginyu (Goku)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 59% HP\n- ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For 1 turn from the character's entry turn*\n- Attacks are effective against all Types\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 50%)\n- {passiveImg:forever}Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g} (up to 50%)\n*When there is an ally whose name includes \"Jeice\" on the\nteam*\n- High chance of foreseeing enemy's Super Attack"
    },
    {
      id: 4023961,
      name: "Vegeta & Bulma",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*When receiving an attack*\n- Damage reduction rate 10%{passiveImg:up_g}\n- Medium chance of damage reduction rate 10%{passiveImg:up_g} within the\nturn\n*When attacking with 12 or more Ki*\n- ATK & DEF 44%{passiveImg:up_g}"
    },
    {
      id: 4024171,
      name: "Annin (Giant Form)",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3"
    },
    {
      id: 4024301,
      name: "Super Saiyan Gohan (Youth)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 58%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 100%)\n*For 3 turn(s) from the character's entry turn*\n- Guards all attacks\n*After guard is activated 2 time(s) in battle*\n- {passiveImg:forever}DEF 58%{passiveImg:up_g}\n*After guard is activated 4 time(s) in battle*\n- {passiveImg:forever}ATK & DEF 58%{passiveImg:up_g}\n*After guard is activated 6 time(s) in battle*\n- {passiveImg:forever}Guards all attacks\n*When receiving a Ki Blast Super Attack*\n- Great chance of nullifying it and countering with ferocious\npower"
    },
    {
      id: 4024391,
      name: "Cell (2nd Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 180%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 17%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- ATK & DEF 120%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 18%{passiveImg:up_g}\n*When HP is 50% or more*\n- Medium chance of launching an additional Super Attack\n*Starting from the next attacking turn*\n- Absorbs Android #18"
    },
    {
      id: 4024401,
      name: "Cell (Perfect Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 250%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 35%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 50% or more*\n- High chance of launching an additional Super Attack"
    },
    {
      id: 4024411,
      name: "Cell (Perfect Form)",
      element: 20,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- Performs a critical hit"
    },
    {
      id: 4024451,
      name: "Super Saiyan God SS Vegeta",
      element: 12,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to Rainbow Ki Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g}\n*3 or more Rainbow Ki Spheres obtained*\n- DEF 50%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Ki +1 and chance of performing a critical hit 25%{passiveImg:up_g}"
    },
    {
      id: 4025121,
      name: "Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 30% HP\n- ATK & DEF 100%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 30%{passiveImg:up_g} for 3 turn(s)\n*When there is a \"Terrifying Conquerors\" Category enemy*\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack"
    },
    {
      id: 4025421,
      name: "Ultimate Hearts",
      element: 23,
      rarity: 4,
      itemized_description: "*For 1 turn from the character's entry turn*\n- Guards all attacks\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When all allies attacking in the same turn are Extreme Class\n\"Crossover\" Category characters*\n- ATK 150%{passiveImg:up_g}\n- Disables the enemy's guard when attacking\n*When all allies are Extreme Class characters*\n- Launches an additional Super Attack\n*When there is a \"Realm of Gods\" Category enemy*\n- Attacks are effective against all Types"
    },
    {
      id: 4026211,
      name: "Super #17",
      element: 23,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 170%{passiveImg:up_g}\n- Damage reduction rate 34%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Damage reduction rate 17%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 170%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack within the turn\n*For every attack received*\n- {passiveImg:forever}DEF 17%{passiveImg:up_g} (up to 170%)\n*When there is a Super Class enemy*\n- Medium chance of performing a critical hit\n*When HP is 70% or less*\n- Absorbs enemy's Ki Blast Super Attacks and recovers 34% of\nthe damage absorbed as HP\n*When HP is 34% or less*\n- Foresees enemy's Super Attack"
    },
    {
      id: 4026261,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 159%{passiveImg:up_g}\n- Great chance of evading enemy's attack before attacking\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For 3 turn(s) from the character's entry turn*\n- Performs a critical hit\n*Starting from the 4th turn from the character's entry turn*\n- Attacks are effective against all Types\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 4026291,
      name: "Super Saiyan 2 Vegeta",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n- Guards all attacks\n*For 3 turn(s) from the character's entry turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Movie Bosses\" Category enemy*\n- Chance of performing a critical hit 20%{passiveImg:up_g}\n- ATK & DEF 50%{passiveImg:up_g} when attacking with 12 or more Ki\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 4026491,
      name: "Super Saiyan 2 Kale",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- High chance of guarding all attacks\n*For 6 turn(s) from the character's entry turn*\n- DEF 100%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*After receiving an attack*\n- ATK & DEF 60%{passiveImg:up_g} for 3 turn(s)\n*When there is another \"Universe 6\" Category ally attacking\nin the same turn*\n- DEF 160%{passiveImg:up_g}\n- Guards all attacks"
    },
    {
      id: 4026541,
      name: "Goku",
      element: 11,
      rarity: 4,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- All allies' Ki +3 and ATK 59%{passiveImg:up_g}\n- \"Earth-Bred Fighters\" Category allies' DEF 50%{passiveImg:up_g} (self\nexcluded)\n- \"World Tournament\" Category allies' DEF 50%{passiveImg:up_g} (self\nexcluded)\n- Foresees enemy's Super Attack\n*When the character or an ally attacking in the same turn is\nKO'd*\n- {passiveImg:once}Revives with 59% HP recovered\n*When the Finish Effect is activated*\n- ATK 590%{passiveImg:up_g}"
    },
    {
      id: 4026561,
      name: "Piccolo Jr. (Giant Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Attacks are effective against all Types\n- High chance of performing a critical hit"
    },
    {
      id: 4027011,
      name: "Super Trunks",
      element: 11,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK & DEF 300%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Launches an additional Super Attack\n- Guards all attacks\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 200%)\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*After performing a Super Attack*\n- Stuns the attacked enemy"
    },
    {
      id: 4027631,
      name: "Super Saiyan 3 Goku",
      element: 13,
      rarity: 4,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- ATK & DEF 333%{passiveImg:up_g}\n- All allies' Ki +3 and DEF 59%{passiveImg:up_g}\n- Foresees enemy's Super Attack\n- Great chance of evading enemy's attack\n*For 1 turn from the character's entry turn*\n- ATK 159%{passiveImg:up_g}\n*When HP is 59% or less*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n*When the Finish Effect is activated*\n- ATK 333%{passiveImg:up_g}\n- Evades enemy's attack within the turn"
    },
    {
      id: 4027661,
      name: "Android #21 (Transformed, Good)",
      element: 10,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 30% HP\n- ATK & DEF 210%{passiveImg:up_g}\n- Damage reduction rate 21%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a great\nchance of becoming a Super Attack\n- All allies' Ki +2\n*When attacking*\n- Ki +2\n- ATK & DEF 121%{passiveImg:up_g}\n*After receiving an attack*\n- DEF 60%{passiveImg:up_g}\n*When HP is 60% or less*\n- Recovers 21% HP at the end of turn"
    },
    {
      id: 4027761,
      name: "Crimson Masked Saiyan (Super Saiyan Rosé Full Power)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 25% HP\n- Recovers 15% HP at the start of turn\n- Ki +4 and ATK & DEF 200%{passiveImg:up_g}\n- Guards all attacks\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When there is an enemy whose name includes \"Super Saiyan\nGod SS\"*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 150%)"
    },
    {
      id: 4028141,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Super Class allies' Ki +2\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n- ATK 100%{passiveImg:up_g} when HP is 58% or more\n*For 1 turn from the character's entry turn*\n- Ki +12\n- ATK & DEF 300%{passiveImg:up_g} when attacking with 12 or more Ki\n- Performs a critical hit\n*Starting from the 3rd turn from the character's entry turn*\n- Attacks are effective against all Types\n*When there is a \"Pure Saiyans\" Category enemy*\n- Great chance of performing a critical hit\n*When there is an ally whose name includes \"Goku\" (Captain\nGinyu, Jr., etc. excluded) on the team*\n- Evades enemy's attack for 1 turn from the character's entry\nturn\n- High chance of evading enemy's attack starting from the 3rd\nturn from the character's entry turn"
    },
    {
      id: 4028171,
      name: "Hirudegarn (Perfect Form)",
      element: 22,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 250%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Great chance of evading enemy's attack\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- ATK & DEF 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n*After evading an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack evaded*\n- Chance of performing a critical hit & chance of evading\nenemy's attack 10%{passiveImg:up_g} within the turn\n*Every time the character evades 3 or more attacks in battle*\n- Evades enemy's attack within the character's next attacking\nturn"
    },
    {
      id: 4028291,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 222%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*Before attacking*\n- Damage reduction rate 66%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to Rainbow Ki Spheres\n*For every Rainbow Ki Sphere obtained*\n- Launches an additional attack that has a rare chance of\nbecoming a Super Attack\n*Every time the character performs 5 or more attacks in\nbattle*\n- Launches an additional Super Attack (up to once within a\nturn)\n*Every time the character performs 10 or more attacks in\nbattle*\n- Launches an additional Super Attack (up to once within a\nturn)\n*For every attack performed*\n- ATK & DEF 33%{passiveImg:up_g} within the turn"
    },
    {
      id: 4028501,
      name: "Super Saiyan Vegeta",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- Guards all attacks\n- Damage reduction rate 18%{passiveImg:up_g}\n*When attacking*\n- ATK 180%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack when HP is 30% or more\n*When the target enemy is in the following status: HP is 80%\nor less*\n- ATK 30%{passiveImg:up_g}\n*When the target enemy is in the following status: HP is 60%\nor less*\n- ATK 30%{passiveImg:up_g}\n*When the target enemy is in the following status: HP is 40%\nor less*\n- ATK 50%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 180%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional Super Attack\n- {passiveImg:once}Interrupts the attacked enemy"
    },
    {
      id: 4028691,
      name: "Toppo (God of Destruction Mode)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 300%{passiveImg:up_g}\n- Changes Ki Spheres: INT to Rainbow\n- Guards all attacks\n- Damage reduction rate 80%{passiveImg:up_g}\n*When attacking*\n- ATK 250%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Damage reduction rate 8%{passiveImg:down_r} (no more than -60%)\n*When receiving a Ki Blast Super Attack*\n- Nullifies it for 1 turn from the character's entry turn\n- High chance of nullifying it starting from the 2nd turn from\nthe character's entry turn"
    },
    {
      id: 4029781,
      name: "Super Saiyan Vegeta",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For 1 turn from the character's entry turn*\n- ATK 300%{passiveImg:up_g}\n- Performs a critical hit\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*When there is another \"All-Out Struggle\" Category ally\nattacking in the same turn starting from the 6th turn from the\nstart of battle*\n- {passiveImg:once}Changes Ki Spheres: STR, AGL & TEQ to PHY\n- ATK 100%{passiveImg:up_g} when attacking"
    },
    {
      id: 4029861,
      name: "Cooler (Final Form)",
      element: 24,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 200%{passiveImg:up_g}\n*For every Super Attack performed*\n- ATK & DEF 30%{passiveImg:up_g} within the turn\n- Damage reduction rate 10%{passiveImg:up_g} within the turn\n*Every time the character performs 3 or more Super Attacks\nin battle*\n- Launches an additional Super Attack (up to once within a\nturn)"
    },
    {
      id: 4029991,
      name: "Buu (Super)",
      element: 21,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Ki +6\n- ATK & DEF 300%{passiveImg:up_g}\n- Damage reduction rate 70%{passiveImg:up_g}\n- Changes Ki Spheres: AGL to TEQ\n- Recovers 30% HP at the end of turn\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- Chance of performing a critical hit 5%{passiveImg:up_g}\n- DEF 40%{passiveImg:up_g} when receiving an attack\n*3 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n*6 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n*When there is a \"Fused Fighters\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 4030621,
      name: "Goten (Kid) + Trunks (Kid)",
      element: 14,
      rarity: 4,
      itemized_description: "*Basic effect(s)*\n- Can perform Reversible Exchange with Trunks (Kid)\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*With a Ki Sphere obtained*\n- {passiveImg:once}Guards all attacks\n*When attacking*\n- ATK 150%{passiveImg:up_g}\n*For every Type Ki Sphere obtained (PHY excluded)*\n- ATK 15%{passiveImg:up_g} and DEF 30%{passiveImg:up_g}\n*With a Type Ki Sphere obtained (PHY excluded)*\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*3 or more Ki Spheres obtained*\n- DEF 150%{passiveImg:up_g} when attacking\n*5 or more Ki Spheres obtained*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1007471,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 5,
      itemized_description: "*When facing only 1 enemy*\n- ATK 10000{passiveImg:up_g}\n- DEF 3000{passiveImg:up_g}"
    },
    {
      id: 1008801,
      name: "Androids #17 & #18",
      element: 20,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 15000{passiveImg:up_g}"
    },
    {
      id: 1009231,
      name: "Piccolo",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- All allies' DEF 5000{passiveImg:up_g}\n- DEF 10000{passiveImg:up_g}"
    },
    {
      id: 1009381,
      name: "Frieza (1st Form)",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 13000{passiveImg:up_g} and DEF 5000{passiveImg:up_g}"
    },
    {
      id: 1009631,
      name: "Captain Ginyu (Ginyu Force)",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- All allies' Ki +3 and ATK 7777{passiveImg:up_g}"
    },
    {
      id: 1010071,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK 18%{passiveImg:up_g}"
    },
    {
      id: 1010161,
      name: "Majin Vegeta",
      element: 20,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}"
    },
    {
      id: 1010441,
      name: "Legendary Super Saiyan Broly",
      element: 23,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK 80000{passiveImg:up_g} and DEF 20000{passiveImg:down_r}\n- Launches an additional Super Attack"
    },
    {
      id: 1010901,
      name: "Hercule",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Great chance of Ki +7 and ATK 20000{passiveImg:up_g}"
    },
    {
      id: 1011141,
      name: "Goku Black (Super Saiyan Rosé) & Zamasu",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Recovers 15% HP at the start of turn\n*For every attack received*\n- {passiveImg:forever}ATK 30%{passiveImg:up_g} (up to 120%)"
    },
    {
      id: 1011641,
      name: "Trunks (Kid) & Goten (Kid)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 to 9 randomly\n*When attacking with 12 or more Ki*\n- ATK 120%{passiveImg:up_g}"
    },
    {
      id: 1011681,
      name: "Super Saiyan God SS Vegito",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The less HP remaining*\n- Ki{passiveImg:up_g} (up to +10)"
    },
    {
      id: 1011721,
      name: "Super Saiyan Trunks (Teen)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 120%{passiveImg:up_g}\n- High chance of performing a critical hit"
    },
    {
      id: 1012131,
      name: "Tien & Chiaotzu",
      element: 10,
      rarity: 5,
      itemized_description: "*When attacking with 8 or more Ki*\n- ATK 10000{passiveImg:up_g}\n*When attacking with 11 or more Ki*\n- DEF 10000{passiveImg:up_g}\n*When attacking with 14 or more Ki*\n- ATK & DEF 10000{passiveImg:up_g}"
    },
    {
      id: 1012161,
      name: "Full Power Boujack (Galactic Warrior)",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- ATK{passiveImg:up_g} (up to 70%)\n*The less HP remaining*\n- DEF{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1012361,
      name: "Goku",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 77%{passiveImg:up_g}\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}\n- Recovers 7777 HP"
    },
    {
      id: 1012401,
      name: "Gohan (Kid)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- DEF 10000{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +5 and ATK 25000{passiveImg:up_g}\n- DEF 10000{passiveImg:down_r}"
    },
    {
      id: 1012721,
      name: "Super Saiyan 3 Goku",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- DEF 120%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 180%{passiveImg:up_g}\n- DEF 70%{passiveImg:down_r}"
    },
    {
      id: 1012901,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*When HP is 50% or less starting from the 6th turn from the\nstart of battle*\n- Performs Potara Fusion"
    },
    {
      id: 1012931,
      name: "Super Saiyan Goku (Angel) & \nSuper Saiyan Vegeta (Angel)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*When HP is 50% or less starting from the 6th turn from the\nstart of battle*\n- Fuses"
    },
    {
      id: 1013101,
      name: "Ginyu (Goku) (Ginyu Force)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}\n- \"Ginyu Force\" Category allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1013391,
      name: "Great Saiyaman 1 & 2",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +4 and DEF 50%{passiveImg:up_g}\n- Extreme Class enemies' DEF 70%{passiveImg:down_y}"
    },
    {
      id: 1013771,
      name: "Beerus & Whis",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 60%{passiveImg:up_g} for 5 turn(s)"
    },
    {
      id: 1014021,
      name: "Bardock",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 30%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +4\n*When facing 2 or more enemies*\n- DEF 60%{passiveImg:up_g}"
    },
    {
      id: 1014051,
      name: "Super Saiyan Trunks (Future)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 25000{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Ki +8 and ATK & DEF 20000{passiveImg:up_g}"
    },
    {
      id: 1014081,
      name: "Trunks (Teen) (Future) & Mai (Future)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 70%{passiveImg:up_g}\n*Per \"Time Travelers\" Category ally on the team*\n- ATK & DEF 10%{passiveImg:up_g} (up to 70%)\n*When there is a \"Future Saga\" Category enemy*\n- Ki +6\n- High chance of evading enemy's attack"
    },
    {
      id: 1014211,
      name: "Super Saiyan 4 Goku",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 80%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +2 per AGL Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 80%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1014221,
      name: "Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- DEF 80%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- Receives an additional Ki +2 per STR Ki Sphere obtained\n*At the start of each turn*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 80%)\n*When receiving a Super Attack*\n- Medium chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1014471,
      name: "Metal Cooler Army",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack that has a chance of becoming\na Super Attack\n- High chance of launching an additional attack that has a\nchance of becoming a Super Attack\n*The more HP remaining*\n- ATK & DEF{passiveImg:up_g} (up to 90%)"
    },
    {
      id: 1014501,
      name: "Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n*When HP is 50% or less*\n- Super Class allies' ATK & DEF 20%{passiveImg:up_g}"
    },
    {
      id: 1014941,
      name: "Cell (Perfect Form) & Cell Jr.",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 90%{passiveImg:up_g}\n*Per existing enemy*\n- Ki +1 and ATK 10%{passiveImg:up_g}"
    },
    {
      id: 1014971,
      name: "Goku & Frieza (Final Form) (Angel)",
      element: 11,
      rarity: 5,
      itemized_description: "*When attacking*\n- ATK & DEF 77%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 77%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down}*\n- ATK 77%{passiveImg:up_g}"
    },
    {
      id: 1015031,
      name: "Super Saiyan Vegeta",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 15000{passiveImg:up_g}\n- DEF 20000{passiveImg:up_g}\n*After receiving an attack*\n- ATK 15000{passiveImg:up_g} and launches 2 additional attack(s) for 4 turn(s)"
    },
    {
      id: 1015181,
      name: "Yamcha & Puar",
      element: 14,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 20000{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 10000{passiveImg:up_g}\n*When there is a \"Peppy Gals\" Category enemy*\n- Character will be stunned"
    },
    {
      id: 1015571,
      name: "Frieza (Full Power)",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 80%{passiveImg:up_g}\n*When HP is 90% or less*\n- Ki +1 and ATK 10%{passiveImg:up_g}\n*When HP is 70% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n*When HP is 50% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n*When HP is 30% or less*\n- Ki +2 and ATK 20%{passiveImg:up_g}\n- Performs a critical hit"
    },
    {
      id: 1015911,
      name: "Pan (GT) (Honey)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Recovers 33% of damage dealt as HP\n*When receiving an attack*\n- High chance of damage reduction rate 55%{passiveImg:up_g} within the\nturn"
    },
    {
      id: 1016231,
      name: "Goku (Youth) & Arale Norimaki",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- ATK 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1016311,
      name: "Uub (Teen)",
      element: 11,
      rarity: 5,
      itemized_description: "*The more HP remaining*\n- Ki{passiveImg:up_g} (up to +6)\n- ATK & DEF{passiveImg:up_g} (up to 90%)\n*When HP is 40% or less*\n- Fuses with Mr. Buu"
    },
    {
      id: 1016371,
      name: "Goku (GT) & Pan (GT) & Trunks (GT)",
      element: 12,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 77%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 77%{passiveImg:up_g}\n*Per \"Dragon Ball Seekers\" Category ally on the team*\n- Ki +1"
    },
    {
      id: 1016401,
      name: "Super Baby 2 (Giant Ape)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n*When there is a \"Pure Saiyans\" Category enemy*\n- Ki +3 and ATK 50%{passiveImg:up_g}\n*When there is a \"Hybrid Saiyans\" Category enemy*\n- Ki +3 and ATK 50%{passiveImg:up_g}\n*When HP is 40% or less*\n- {passiveImg:once}High chance of turning into Giant Ape"
    },
    {
      id: 1016811,
      name: "Super Saiyan Gohan (Teen) & \nSuper Saiyan Goten (Kid)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Disables Rampage\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5) and ATK & DEF 10%{passiveImg:up_g} (up to 100%)"
    },
    {
      id: 1016841,
      name: "Super Saiyan 2 Caulifla & \nSuper Saiyan 2 Kale",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 66%{passiveImg:up_g}\n- Launches an additional attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +6)\n- {passiveImg:forever}Chance of evading enemy's attack 6%{passiveImg:up_g} (up to 66%)\n*Per \"Universe 6\", \"Joined Forces\" or \"Pure Saiyans\"\nCategory ally on the team*\n- ATK 10%{passiveImg:up_g}\n*When there is a \"Universe Survival Saga\" or \"Pure Saiyans\"\nCategory enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 1016871,
      name: "Super Saiyan Broly",
      element: 21,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 90%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When facing 2 or more enemies*\n- Launches an additional Super Attack\n*Starting from the 4th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1017321,
      name: "Mecha Frieza & King Cold",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 66%{passiveImg:up_g}\n*Per \"Wicked Bloodline\" Category ally on the team*\n- ATK 20%{passiveImg:up_g} (up to 60%)\n*When there is a \"Super Saiyans\" Category enemy*\n- Ki +9"
    },
    {
      id: 1017351,
      name: "Cell (1st Form)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 20000{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1 (up to +6)\n*When attacking with 18 or more Ki*\n- ATK 20000{passiveImg:up_g}\n- Performs a critical hit when the target enemy is in the\nfollowing status: {passiveImg:atk_down}"
    },
    {
      id: 1017381,
      name: "Goku (Youth) & Bulma (Youth)",
      element: 10,
      rarity: 5,
      itemized_description: "*Per \"Dragon Ball Seekers\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g} (up to 35%)\n*Per \"Youth\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g} (up to 35%)\n*Per \"DB Saga\" Category ally on the team*\n- ATK & DEF 7%{passiveImg:up_g} (up to 35%)\n*Per \"Joined Forces\" Category ally on the team*\n- Ki +1 (up to +5)"
    },
    {
      id: 1017631,
      name: "Super Saiyan Gohan (Youth)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*At the start of each turn*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1017781,
      name: "Demon King Piccolo (Elder)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every TEQ Ki Sphere obtained*\n- ATK 6000{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- Damage reduction rate 50%{passiveImg:up_g}\n*Starting from the 7th turn from the start of battle, or when\nthere is a \"DB Saga\", \"World Tournament\" or \"Dragon Ball\nSeekers\" Category enemy*\n- Restores youth using the Dragon Balls' power"
    },
    {
      id: 1017901,
      name: "Cell (Perfect Form)",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 80%)\n*Per existing enemy*\n- Ki +1 and ATK 20%{passiveImg:up_g}\n*When HP is 30% or less*\n- Evolves"
    },
    {
      id: 1018031,
      name: "Androids #17 & #18/Android #16",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +1 and ATK & DEF 78%{passiveImg:up_g}\n- \"Androids\" Category allies' Ki +2 and ATK 40%{passiveImg:up_g}\n*When HP is 66% or more*\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1018251,
      name: "Super Saiyan God Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 77%{passiveImg:up_g}\n*Per \"Pure Saiyans\" or \"Hybrid Saiyans\" Category ally on the\nteam (self excluded)*\n- Ki +1 (up to +5)\n- DEF 11%{passiveImg:up_g} (up to 55%)\n*For 7 turn(s) from the character's entry turn*\n- High chance of evading enemy's attack\n- High chance of performing a critical hit"
    },
    {
      id: 1018491,
      name: "Super Saiyan Goku",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}\n- ATK 7%{passiveImg:up_g} per \"Super Saiyans\" Category ally attacking in\nthe same turn (self excluded)"
    },
    {
      id: 1018591,
      name: "Babidi & Dabura",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 88%{passiveImg:up_g}\n- \"Majin Power\" Category allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Ki +3 and ATK & DEF 40%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute}*\n- Ki +3\n- High chance of performing a critical hit"
    },
    {
      id: 1018621,
      name: "Gogeta",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking*\n- Ki +3\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*As the 3rd attacker in a turn*\n- High chance of evading enemy's attack\n*Starting from the 4th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1018651,
      name: "Vegito",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking*\n- Ki +3\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*As the 3rd attacker in a turn*\n- High chance of evading enemy's attack\n*Starting from the 4th turn from the start of battle*\n- Transforms"
    },
    {
      id: 1018881,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 66%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK 6%{passiveImg:up_g} (up to 120%)\n*For every final blow delivered*\n- {passiveImg:forever}Ki +2 (up to +6)\n*After receiving an attack*\n- Recovers 6% HP at the end of turn"
    },
    {
      id: 1019001,
      name: "Broly & Cheelai & Lemo",
      element: 24,
      rarity: 5,
      itemized_description: "*For every Ki Sphere obtained*\n- ATK & DEF 15%{passiveImg:up_g}\n*2 or more PHY Ki Spheres obtained*\n- Receives an additional Ki +2 per Ki Sphere obtained\n- ATK & DEF 5%{passiveImg:up_g} per Ki Sphere obtained\n*2 or more AGL or STR Ki Spheres obtained*\n- All allies' ATK 39%{passiveImg:up_g}\n*2 or more TEQ or INT Ki Spheres obtained*\n- All allies' DEF 39%{passiveImg:up_g}\n*7 or more Ki Spheres obtained*\n- Evades enemy's attack"
    },
    {
      id: 1019071,
      name: "Zamasu (Goku)",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n*When facing 2 or more enemies*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every final blow delivered*\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1019101,
      name: "Team Bardock",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Super Class allies' ATK & DEF 30%{passiveImg:up_g}\n- \"Team Bardock\" Category allies' ATK & DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1019401,
      name: "Nappa/Vegeta",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 78%{passiveImg:up_g}\n*When HP is 78% or more*\n- Ki +5\n*After evading an attack*\n- ATK 78%{passiveImg:up_g}\n*Per existing enemy*\n- ATK & DEF 7800{passiveImg:up_g}\n*Starting from the 4th turn from the start of battle*\n- Exchanges with Vegeta when HP is 50% or less"
    },
    {
      id: 1019531,
      name: "Krillin",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and DEF 30000{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 20000{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 20000{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3\n*When facing 2 or more enemies*\n- ATK 10000{passiveImg:up_g} per existing enemy (count starts from the 2nd\nenemy)\n*When facing 6 or more enemies*\n- Launches an additional Super Attack"
    },
    {
      id: 1019701,
      name: "Goku & Gohan (Kid)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- DEF 59%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 59%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 58%{passiveImg:up_g}\n*As the 3rd attacker in a turn*\n- Ki +5\n- Recovers 8% HP at the end of turn"
    },
    {
      id: 1019821,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*For 7 turn(s) from the character's entry turn*\n- Great chance of evading enemy's attack\n*Starting from the 8th turn from the character's entry turn*\n- High chance of evading enemy's attack\n*For every attack evaded*\n- {passiveImg:forever}Ki +1 (up to +7)\n- {passiveImg:forever}ATK & DEF 11%{passiveImg:up_g} (up to 77%)"
    },
    {
      id: 1019911,
      name: "Jiren (Full Power)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Attacks are effective against all Types\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Performs a critical hit"
    },
    {
      id: 1019991,
      name: "Super Saiyan God SS Goku (Kaioken) & \nSuper Saiyan God SS Evolved Vegeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n- Launches an additional attack (up to 3 time(s) within a turn)"
    },
    {
      id: 1020221,
      name: "Super Saiyan 2 Vegeta (Angel)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*For every Ki when attacking*\n- ATK & DEF 4%{passiveImg:up_g} (up to 70%)\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded)*\n- Ki +3\n*When there is a \"Majin Buu Saga\" Category ally whose name\nincludes \"Goku\" attacking in the same turn*\n- Ki +3"
    },
    {
      id: 1020311,
      name: "Goku (Ultra Instinct)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Great chance of evading enemy's attack\n- Medium chance of launching an additional Super Attack\n*After evading an attack*\n- DEF 30%{passiveImg:up_g}\n*For every attack evaded*\n- {passiveImg:forever}Ki +1 (up to +5)\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 50% or less at the start of the character's\nattacking turn after the character receives 3 or more attacks\nin battle*\n- {passiveImg:once}Revives with 70% HP recovered"
    },
    {
      id: 1020341,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every attack received*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn (up to 30%)\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 50% or less at the start of the character's\nattacking turn after the character receives 7 or more attacks\nin battle*\n- {passiveImg:once}Revives with 70% HP recovered"
    },
    {
      id: 1020371,
      name: "Majin Buu (Gotenks)",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Recovers 12% HP at the start of turn\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1020461,
      name: "Goku & Vegeta (Angel)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1020751,
      name: "Team Turles",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- \"Terrifying Conquerors\" Category allies' Ki +3 and ATK &\nDEF 30%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:stun}*\n- Ki +6\n- Attacks are effective against all Types\n*When attacking with 24 Ki*\n- Attacks are effective against all Types\n- High chance of launching an additional Super Attack"
    },
    {
      id: 1021011,
      name: "Babidi & Majin Buu (Good)",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 40000{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When the target enemy is in the following\nstatus: {passiveImg:atk_down}, {passiveImg:def_down}, {passiveImg:stun} or {passiveImg:astute}*\n- Ki +3\n- ATK & DEF 30000{passiveImg:up_g}\n*After receiving an attack*\n- Recovers 5% HP at the end of turn"
    },
    {
      id: 1021141,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 58%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Medium chance of launching an additional Super Attack\n*For every Ki Sphere obtained*\n- ATK & DEF 7%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 58%{passiveImg:up_g}\n*When there is a \"Movie Heroes\" Category ally whose name\nincludes \"Goku\" (Youth excluded) on the team starting from\nthe 5th turn from the start of battle*\n- {passiveImg:once}ATK 59%{passiveImg:up_g} and performs a critical hit if HP is 58% or\nless when attacking with 18 or more Ki"
    },
    {
      id: 1021431,
      name: "Golden Frieza (Angel) & Android #17",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack\n- Great chance of launching an additional attack\n*Every time the character is about to attack*\n- Damage reduction rate & chance of performing a critical hit\n7%{passiveImg:up_g} within the turn\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +7)\n- {passiveImg:forever}ATK & DEF 7%{passiveImg:up_g} (up to 70%)"
    },
    {
      id: 1021481,
      name: "Android #17 (Team Universe 7)",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*When 5 or more \"Representatives of Universe 7\" Category\nallies are on the team*\n- ATK & DEF 70%{passiveImg:up_g}\n*When attacking with 22 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}"
    },
    {
      id: 1021621,
      name: "Master Roshi",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- DEF 100%{passiveImg:up_g}\n- Medium chance of evading enemy's attack\n- \"Turtle School\" Category allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 50% or less with another 2 or more \"Turtle\nSchool\" Category allies on the team*\n- {passiveImg:once}Revives with 50% HP recovered"
    },
    {
      id: 1021651,
      name: "Trunks (Teen)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 80%{passiveImg:up_g}\n*Per \"Vegeta's Family\" Category ally attacking in the same\nturn (self excluded)*\n- Ki +1\n- Chance of evading enemy's attack 15%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 60%{passiveImg:up_g}\n- All allies' Ki +3\n*As the 2nd attacker in a turn*\n- ATK & DEF 30%{passiveImg:up_g}\n- \"Vegeta's Family\" Category allies' Ki +3\n*As the 3rd attacker in a turn*\n- Ki +3\n- ATK 60%{passiveImg:up_g}"
    },
    {
      id: 1021881,
      name: "Legion of Shadow Dragons",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- \"GT Bosses\" Category allies' Ki +3 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 70%{passiveImg:up_g}\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Ki +4"
    },
    {
      id: 1021971,
      name: "Tapion & Minotia",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- \"Storied Figures\" Category allies' Ki +2 and ATK & DEF\n20%{passiveImg:up_g}\n- \"Siblings' Bond\" Category allies' Ki +2 and ATK & DEF 20%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- Medium chance of launching an additional Super Attack\n*For every Super Attack performed*\n- Damage reduction rate 13%{passiveImg:up_g} within the turn"
    },
    {
      id: 1022091,
      name: "Super #17",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 170%{passiveImg:up_g}\n*Per \"Androids\" Category ally attacking in the same turn (self\nexcluded)*\n- ATK & DEF 17%{passiveImg:up_g}\n*Per \"Target: Goku\" Category ally attacking in the same turn\n(self excluded)*\n- ATK & DEF 17%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 17%{passiveImg:up_g} and damage reduction rate 17%{passiveImg:up_g} for 3 turn(s)\nafter the end of the turn\n*For every attack received*\n- {passiveImg:forever}High chance of Ki +1 (up to +7)"
    },
    {
      id: 1022121,
      name: "Goku & Piccolo",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack\n- High chance of launching an additional attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +6)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 59%)\n*Every time the character performs 6 or more attacks in\nbattle*\n- Launches an additional Super Attack when HP is 59% or less\n(up to once within a turn)"
    },
    {
      id: 1022191,
      name: "Goku (Angel) & Vegeta (Angel)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- High chance of randomly changing Ki Spheres of a certain\nType to Rainbow Ki Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- Medium chance of launching an additional Super Attack"
    },
    {
      id: 1022341,
      name: "Mercenary Tao",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK & DEF 5648{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK & DEF 7564{passiveImg:up_g} per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK & DEF 10108{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 10108{passiveImg:up_g}"
    },
    {
      id: 1022381,
      name: "Super Saiyan God Goku & \nSuper Saiyan God Vegeta",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Guards all attacks for 1 turn\n- {passiveImg:once}Receives an additional Ki +1 per Type Ki Sphere\nobtained and ATK & DEF 77%{passiveImg:up_g} for 7 turns\n*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*When attacking with 24 Ki*\n- Attacks are effective against all Types"
    },
    {
      id: 1022421,
      name: "Super Saiyan 4 Goku & Super Saiyan 4 Vegeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Guards all attacks for 1 turn\n- {passiveImg:once}Receives an additional Ki +1 per Type Ki Sphere\nobtained and ATK & DEF 77%{passiveImg:up_g} for 7 turns\n*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*When attacking with 24 Ki*\n- Attacks are effective against all Types"
    },
    {
      id: 1022591,
      name: "Super Janemba",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Guards all attacks\n*For every attack performed as the 2nd or 3rd attacker in a\nturn*\n- {passiveImg:forever}Ki +2 (up to +6)\n- {passiveImg:forever}ATK & DEF 22%{passiveImg:up_g} (up to 66%)\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it"
    },
    {
      id: 1022631,
      name: "Super Saiyan Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 159%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK 59%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*When there is an Extreme Class enemy*\n- ATK 59%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn (up to +3)\n*When there is an enemy whose name includes \"Frieza\"\n(Frieza Soldier excluded)*\n- Performs a critical hit"
    },
    {
      id: 1022751,
      name: "Frieza (Full Power)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 100%{passiveImg:up_g}\n*After receiving an attack*\n- Launches an additional Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- Medium chance of launching an additional Super Attack\n*For 6 turns from the character's entry turn*\n- ATK & DEF 100%{passiveImg:up_g}\n*Starting from the 7th turn from the character's entry turn*\n- ATK 50%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- ATK 50%{passiveImg:up_g}\n- {passiveImg:forever}Ki +1 at the start of each turn (up to +3)\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- Performs a critical hit"
    },
    {
      id: 1022781,
      name: "Goku",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 59%{passiveImg:up_g}\n- All allies' Ki +2 and ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*When attacking an Extreme Class enemy*\n- Ki +3 and ATK 59%{passiveImg:up_g}"
    },
    {
      id: 1022811,
      name: "Gohan (Kid)",
      element: 13,
      rarity: 5,
      itemized_description: "*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Ki +2 and ATK & DEF 59000{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) attacking in the same turn*\n- Ki +3 and ATK & DEF 59000{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 58000{passiveImg:up_g}\n*When HP is 58% or less*\n- {passiveImg:once}Ki +12\n- {passiveImg:once}Damage reduction rate 58%{passiveImg:up_g}\n- {passiveImg:once}Performs a critical hit when attacking with 18 or more\nKi"
    },
    {
      id: 1022941,
      name: "Krillin & Gohan (Kid)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 130%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*On the next attacking turn after the character performs 4\nSuper Attack(s) in battle*\n- Changes into a battle suit"
    },
    {
      id: 1023041,
      name: "Vegeta/Goku",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK 150%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*When HP is 30% or more*\n- Ki +2 and DEF 150%{passiveImg:up_g}\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 29% or less*\n- Revives with 70% HP recovered by exchanging with Goku"
    },
    {
      id: 1023091,
      name: "Hit & Super Saiyan God Goku",
      element: 23,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 170%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +6 and ATK & DEF 60%{passiveImg:up_g}\n- Attacks guaranteed to hit\n- Disables the enemy's guard\n- High chance of evading enemy's attack\n*As the 3rd attacker in a turn*\n- Ki +7 and ATK 70%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1023421,
      name: "Super Saiyan Gohan (Future) & Trunks (Youth) (Future)/\nSuper Saiyan Gohan (Future)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n*When HP is 58% or more*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*5 or more Ki Spheres obtained*\n- DEF 58%{passiveImg:up_g}\n- Chance of performing a critical hit 8%{passiveImg:up_g}\n- Damage reduction rate 8%{passiveImg:up_g}\n*5 or more AGL Ki Spheres obtained*\n- ATK 58%{passiveImg:up_g}\n- Chance of performing a critical hit 8%{passiveImg:up_g}\n- Damage reduction rate 8%{passiveImg:up_g}\n*8 or more Ki Spheres obtained*\n- Launches an additional Super Attack"
    },
    {
      id: 1023521,
      name: "Vegeta (Giant Ape)",
      element: 21,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is an enemy\nwhose name includes \"Goku\" (Youth, Captain Ginyu, Jr., etc.\nexcluded) at the start of the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}Ki +3 and ATK 60%{passiveImg:up_g}\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 60%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- DEF 60%{passiveImg:up_g}\n*After guard is activated*\n- Ki +3\n- ATK 30%{passiveImg:up_g}"
    },
    {
      id: 1023621,
      name: "Goku (Kaioken)",
      element: 13,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is an enemy\nwhose name includes \"Vegeta\" (Kid, Jr., etc. excluded) at the\nstart of the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}Ki +3 and ATK 70%{passiveImg:up_g}\n*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n- High chance of performing a critical hit\n*For 7 turns from the character's entry turn*\n- Ki +7\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 59%{passiveImg:up_g}"
    },
    {
      id: 1023861,
      name: "Super Saiyan Goku Jr. & \nSuper Saiyan Vegeta Jr.",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- \"GT Heroes\" or \"World Tournament\" Category allies' ATK &\nDEF 10%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 50%)\n*5 or more Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 1023891,
      name: "Gohan (Teen) & Goten (Kid) & Trunks (Kid)",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +3 and ATK & DEF 70%{passiveImg:up_g} for 7 turn(s)\n*Basic effect(s)*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an ally whose name includes \"Goku\" (Youth,\nCaptain Ginyu, Jr., etc. excluded) on the team*\n- Ki +1 and ATK 70%{passiveImg:up_g}\n*When there is an ally whose name includes \"Vegeta\" (Kid, Jr.,\netc. excluded) on the team*\n- Ki +1 and DEF 70%{passiveImg:up_g}"
    },
    {
      id: 1024141,
      name: "Goku & Piccolo/Piccolo",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 50% or more*\n- DEF 200%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Ki +5\n- ATK 90%{passiveImg:up_g}\n- Guards all attacks\n*After receiving an attack as the 1st attacker in a turn*\n- Launches an additional Super Attack\n*When attacking with 18 or more Ki*\n- ATK 30%{passiveImg:up_g}\n*When activating the Active Skill or when attacking with 24\nKi*\n- ATK 70%{passiveImg:up_g}"
    },
    {
      id: 1024351,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 59%{passiveImg:up_g}\n- DEF 58%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK, DEF & chance of performing a critical hit 5%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 59%{passiveImg:up_g}\n- DEF 58%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 59%{passiveImg:up_g}\n- DEF 58%{passiveImg:up_g}\n*Within the turn in which the character's Active Skill is\nactivated or when attacking with 20 or more Ki*\n- Launches an additional Super Attack"
    },
    {
      id: 1024511,
      name: "Golden Frieza",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}{passiveImg:forever}Damage reduction rate 90%{passiveImg:up_g}\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:down_r} for every turn passed\n(no more than -60%)\n*Basic effect(s)*\n- Ki +5 and ATK & DEF 100%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches an additional Super Attack\n*After performing 5 Super Attack(s) in battle*\n- {passiveImg:forever}Ki +2 and DEF 50%{passiveImg:up_g}\n*After receiving 5 attack(s) in battle*\n- {passiveImg:forever}Ki +2 and ATK 50%{passiveImg:up_g}"
    },
    {
      id: 1024551,
      name: "Super Saiyan God SS Vegeta & \nSuper Saiyan Trunks (Future)",
      element: 12,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Bond of Parent and Child\" Category ally attacking in the\nsame turn upon the character's entry*\n- {passiveImg:once}Ki +2, DEF 70%{passiveImg:up_g} and guards all attacks for 5 turns\n*Basic effect(s)*\n- Ki +2\n- ATK & DEF 140%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 15%{passiveImg:up_g} (up to 75%)\n- {passiveImg:forever}Chance of performing a critical hit 7%{passiveImg:up_g} (up to 35%)\n*As the 1st attacker in a turn*\n- ATK & DEF 70%{passiveImg:up_g}\n- Guards all attacks"
    },
    {
      id: 1024661,
      name: "Fusion Zamasu",
      element: 22,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Potara\" Category ally on the team upon the character's\nentry*\n- {passiveImg:once}Receives an additional Ki +1 per Ki Sphere obtained for\n5 turn(s)\n*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n- ATK & DEF 100%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- Launches an additional Super Attack\n*When attacking with 24 Ki*\n- Attacks are effective against all Types\n*For every attack received*\n- Damage reduction rate 2%{passiveImg:up_g} within the turn (up to 10%)\n*Every time the character receives 5 attack(s) in battle*\n- {passiveImg:forever}Ki +1 (up to +5)\n*Every time the character receives 5 or more attacks in\nbattle*\n- Recovers 10% HP at the end of turn (up to once within a turn)\n*When receiving an Unarmed Super Attack*\n- Great chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 1024731,
      name: "Tien",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 103000{passiveImg:up_g}\n*For 10 turn(s) from the character's entry turn*\n- Ki +3\n*When there is an Extreme Class enemy*\n- {passiveImg:once}Ki +3 for 10 turn(s)\n*For every attack performed*\n- {passiveImg:forever}ATK & DEF 10300{passiveImg:up_g} (up to 103000)\n*When HP is 80% or more*\n- Launches an additional Super Attack\n*When HP is 50% or more*\n- Launches an additional attack\n*When attacking with 18 or more Ki*\n- Medium chance of performing a critical hit\n- Great chance of performing a critical hit when HP is 50% or\nless\n*When HP is 30% or less*\n- Ki +10"
    },
    {
      id: 1024831,
      name: "Cooler (Final Form)",
      element: 23,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Terrifying Conquerors\" Category ally on the team upon the\ncharacter's entry*\n- {passiveImg:once}Launches an additional attack that has a medium\nchance of becoming a Super Attack for 3 turn(s)\n*Basic effect(s)*\n- Ki +5\n- ATK & DEF 100%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 100%)\n*After performing 10 attack(s) in battle*\n- {passiveImg:forever}Launches an additional Super Attack"
    },
    {
      id: 1024861,
      name: "Super Saiyan Goku",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5\n- ATK & DEF 159%{passiveImg:up_g}\n*After receiving an attack*\n- Attacks are effective against all Types\n- DEF 59%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK 10%{passiveImg:up_g} (up to 59%)\n*When HP is 60% or more*\n- Guards all attacks\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 59% or less*\n- {passiveImg:once}Revives with 59% HP recovered\n*After the character's Revival Skill is activated*\n- {passiveImg:forever}Guards all attacks\n- {passiveImg:forever}High chance of performing a critical hit"
    },
    {
      id: 1024891,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*For 3 turn(s) from the character's entry turn*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*After performing 3 or more Super Attacks and receiving 7 or\nmore attacks in battle*\n- Receives a morale boost on the character's next attacking\nturn"
    },
    {
      id: 1024931,
      name: "Metal Cooler",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- Ki +2\n- ATK & DEF 130%{passiveImg:up_g}\n*When HP is 50% or less*\n- Recovers 10% HP\n*The more HP remaining*\n- DEF{passiveImg:up_g} (up to 100%)\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +4)\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 60%)\n*After receiving an attack*\n- Recovers 10% HP at the end of turn\n*When receiving an Unarmed Super Attack*\n- Great chance of nullifying it\n*When there is another ally whose name includes \"Metal\nCooler\" attacking in the same turn*\n- Recovers 5% HP\n*When the character is KO'd*\n- {passiveImg:once}Revives with HP fully recovered"
    },
    {
      id: 1025561,
      name: "Ultimate Gohan",
      element: 14,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Bond of Parent and Child\" Category ally on the team upon\nthe character's entry*\n- {passiveImg:once}ATK & DEF 100%{passiveImg:up_g} and guards all attacks for 3 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Super Attack performed*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n*When attacking with 20 or more Ki*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When activating the Active Skill or when attacking with 24\nKi*\n- Attacks are effective against all Types\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it"
    },
    {
      id: 1025591,
      name: "Piccolo (Power Awakening)",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Bond of Master and Disciple\" Category ally on the team upon\nthe character's entry*\n- {passiveImg:once}ATK & DEF 100%{passiveImg:up_g} and guards all attacks for 3 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 30%{passiveImg:up_g} (up to 150%)\n*After receiving an attack*\n- All allies' Ki +2 within the turn\n*When HP is 30% or less at the start of the character's\nattacking turn after the character receives 7 or more attacks\nin battle*\n- {passiveImg:once}Fully recovers HP\n- {passiveImg:forever}Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1025631,
      name: "Jackie Chun",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +4\n- ATK & DEF 120%{passiveImg:up_g}\n- \"World Tournament\" Category allies' Ki +3 and ATK & DEF\n50%{passiveImg:up_g} (self excluded)\n*For every Super Attack performed*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 60%)\n*For every attack received*\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 60%)\n*When receiving an attack from an enemy who is hit by the\ncharacter's Ultra Super Attack*\n- Damage reduction rate 50%{passiveImg:up_g}"
    },
    {
      id: 1025651,
      name: "Hatchiyack (Giant Form)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 80%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*After receiving an attack*\n- ATK & DEF 100%{passiveImg:up_g} within the turn\n*When there is a \"Pure Saiyans\" or \"Hybrid Saiyans\" Category\nenemy*\n- Damage reduction rate 20%{passiveImg:up_g}\n- Extreme Class allies' Ki +3"
    },
    {
      id: 1025731,
      name: "Super Saiyan 3 Goku & Super Saiyan 2 Vegeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*When attacking with 18 or more Ki*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 24 Ki*\n- Launches an additional Super Attack\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1025771,
      name: "Goku (GT) & Super Saiyan 4 Vegeta",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n*When HP is 50% or more*\n- ATK & DEF 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n*When attacking with 18 or more Ki*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 24 Ki*\n- Launches an additional Super Attack\n*For every Super Attack performed*\n- {passiveImg:forever}Ki +1\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 1025871,
      name: "Super Saiyan Goku",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5\n- ATK & DEF 150%{passiveImg:up_g}\n- Super Class allies' Ki +2 and DEF 50%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}ATK & DEF 15%{passiveImg:up_g} (up to 75%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}Ki +2\n*After receiving 10 or more attacks in battle*\n- {passiveImg:forever}Foresees enemy's Super Attack within the character's\nattacking turn from the next turn onward\n*When activating the Active Skill or when attacking with 24\nKi*\n- ATK 50%{passiveImg:up_g}\n- Launches an additional Super Attack"
    },
    {
      id: 1026131,
      name: "Gohan (Kid)",
      element: 12,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +4, ATK & DEF 58%{passiveImg:up_g} and launches an additional\nattack that has a great chance of becoming a Super Attack for\n6 turn(s)\n*Basic effect(s)*\n- Ki +4\n- ATK & DEF 158%{passiveImg:up_g}\n*When receiving an attack from an enemy who is hit by the\ncharacter's Ultra Super Attack or Unit Super Attack*\n- Damage reduction rate 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 8%{passiveImg:up_g} (up to 58%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}ATK 58%{passiveImg:up_g}\n*After receiving 8 or more attacks in battle*\n- {passiveImg:forever}Launches an additional Super Attack"
    },
    {
      id: 1026161,
      name: "Goku",
      element: 10,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +4, ATK & DEF 59%{passiveImg:up_g} and guards all attacks for 6\nturn(s)\n*Basic effect(s)*\n- Ki +4\n- ATK & DEF 159%{passiveImg:up_g}\n*When receiving an attack*\n- Survives K.O. attacks (up to once within a turn)\n*When receiving a Ki Blast Super Attack*\n- High chance of nullifying it and countering with tremendous\npower\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}Chance of performing a critical hit 9%{passiveImg:up_g} (up to 59%)\n*After receiving 5 or more attacks in battle*\n- {passiveImg:forever}DEF 59%{passiveImg:up_g}\n*After receiving 9 or more attacks in battle*\n- {passiveImg:forever}ATK 120%{passiveImg:up_g}\n*If HP is 40% or less at the end of turn*\n- {passiveImg:once}Recovers 59% HP"
    },
    {
      id: 1026391,
      name: "Babidi",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 120%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 20%{passiveImg:up_g}\n*When there is a Super Class enemy*\n- Medium chance of evading enemy's attack\n*When there is an Extreme Class enemy*\n- ATK & DEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1026431,
      name: "Buu (Super)",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +5 and ATK & DEF 120%{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Great chance of guarding all attacks\n*When attacking*\n- ATK 30%{passiveImg:up_g} when HP is 30% or more\n- ATK 30%{passiveImg:up_g} when HP is 60% or more\n- ATK & DEF 30%{passiveImg:up_g} when HP is 90% or more\n*When there is a \"Majin Buu Saga\" or \"Fused Fighters\"\nCategory enemy*\n- Guards all attacks\n*After guard is activated*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*After receiving an attack*\n- ATK 100%{passiveImg:up_g} temporarily upon the character's next attack\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +7)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 140%)"
    },
    {
      id: 1026611,
      name: "Bulma (Youth)",
      element: 13,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +3 and guards all attacks for 7 turn(s)\n*Basic effect(s)*\n- Ki +4\n- ATK & DEF 177%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to Rainbow Ki Spheres\n*At the start of each turn*\n- Damage reduction rate 7%{passiveImg:up_g} (up to 77%)\n*For every Ki Sphere obtained*\n- ATK & DEF 17%{passiveImg:up_g}\n*3 or more Ki Spheres obtained*\n- ATK 77%{passiveImg:up_g}\n*5 or more Ki Spheres obtained*\n- All allies' Ki +3 and ATK & DEF 37%{passiveImg:up_g} for 2 turn(s) (self\nexcluded)\n*7 or more Ki Spheres obtained*\n- Launches an additional Super Attack"
    },
    {
      id: 1026731,
      name: "Dr. Wheelo",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Revenge\" Category ally on the team upon the character's\nentry*\n- {passiveImg:once}Ki +4 and DEF 80000{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100000{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3\n- ATK & DEF 60000{passiveImg:up_g}\n- ATK 60000{passiveImg:up_g} and medium chance of performing a critical hit\nwhen the enemy's HP is 60% or more\n*When facing 2 or more enemies*\n- Ki +2\n- ATK 40000{passiveImg:up_g}\n- DEF 100000{passiveImg:up_g}\n- Medium chance of guarding all attacks\n*When HP is 40% or less*\n- {passiveImg:once}ATK 60000{passiveImg:up_g}\n- {passiveImg:once}Performs a critical hit"
    },
    {
      id: 1026821,
      name: "Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5\n- ATK & DEF 150%{passiveImg:up_g}\n*When facing only 1 enemy*\n- ATK & DEF 100%{passiveImg:up_g} when attacking with 12 or more Ki\n*When facing 2 or more enemies*\n- Ki +5\n- ATK & DEF 30%{passiveImg:up_g} (up to 150%) when attacking with 18 or\nmore Ki per existing enemy (count starts from the 2nd enemy)\n*After delivering a final blow*\n- {passiveImg:forever}Ki +5\n- {passiveImg:forever}ATK 59%{passiveImg:up_g}\n*When attacking with 21 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}"
    },
    {
      id: 1026901,
      name: "Super Saiyan 4 Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 70%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- High chance of performing a critical hit\n*After receiving or evading an attack*\n- ATK 70%{passiveImg:up_g}\n- DEF 70%{passiveImg:up_g} for 3 turn(s)\n*As the 1st attacker in a turn*\n- DEF 70%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}"
    },
    {
      id: 1027041,
      name: "Omega Shenron",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Changes Ki Spheres for 7 turn(s): INT to Rainbow\n*Basic effect(s)*\n- All enemies' ATK & DEF 25%{passiveImg:down_y}\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 150%)\n*Per \"GT Bosses\" Category ally on the team*\n- Ki +1\n- Damage reduction rate 5%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- Damage reduction rate 7%{passiveImg:up_g}\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 50% or less*\n- {passiveImg:once}Revives with 70% HP recovered\n*After the character's Revival Skill is activated*\n- {passiveImg:forever}Attacks are effective against all Types\n- {passiveImg:forever}Launches an additional Super Attack"
    },
    {
      id: 1027121,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 10,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Future Saga\" Category ally on the team*\n- {passiveImg:once}DEF 100%{passiveImg:up_g} for 4 turn(s)\n- {passiveImg:once}Guards all attacks for 4 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n*When there is a \"Realm of Gods\" Category enemy*\n- ATK & DEF 50%{passiveImg:up_g}\n- Attacks are effective against all Types\n*As the 1st attacker in a turn*\n- DEF 150%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack"
    },
    {
      id: 1027221,
      name: "Fusion Zamasu",
      element: 21,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Realm of Gods\" Category ally on the team*\n- {passiveImg:once}Damage reduction rate 20%{passiveImg:up_g} for 1 turn\n- {passiveImg:once}Damage reduction rate 20%{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- Ki +6 and ATK & DEF 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Damage reduction rate 40%{passiveImg:up_g}\n*When there are no \"Realm of Gods\" Category enemies*\n- Ki +3 and ATK & DEF 50%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 50%{passiveImg:up_g}\n- DEF 50%{passiveImg:up_g} when HP is 70% or less\n*After receiving an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack received*\n- {passiveImg:forever}ATK 25%{passiveImg:up_g} (up to 150%)"
    },
    {
      id: 1027291,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +3 and launches an additional attack that has a great\nchance of becoming a Super Attack for 4 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK 100%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 10%{passiveImg:up_g} (up to 50%)\n*For every Super Attack performed*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn (up to 30%)\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*Starting from the 5th turn from the start of battle*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack"
    },
    {
      id: 1027331,
      name: "Super Saiyan Gohan (Future)",
      element: 13,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +5 for 5 turn(s)\n- {passiveImg:once}Damage reduction rate 40%{passiveImg:up_g} for 5 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 158%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK & DEF 20%{passiveImg:up_g} (up to 100%)\n*When attacking with 18 or more Ki*\n- Damage reduction rate 20%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*Starting from the 5th turn from the character's entry turn*\n- Creates the Domain \"City (Future) (Rainy)\" for 5 turn(s)\n*When the Domain \"City (Future) (Rainy)\" is active*\n- Changes Ki Spheres: INT to STR\n- Performs a critical hit when activating the Active Skill or\nwhen attacking with 24 Ki"
    },
    {
      id: 1027461,
      name: "Ribrianne & Kakunsa & Rozie",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"Tournament Participants\" Category allies are on the team*\n- {passiveImg:once}Changes Ki Spheres for 1 turn: STR, AGL & PHY to TEQ\n- {passiveImg:once}Ki +3 for 3 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 122%{passiveImg:up_g}\n- Changes Ki Spheres: STR to TEQ\n- Medium chance of changing Ki Spheres: AGL to TEQ\n- Medium chance of changing Ki Spheres: PHY to TEQ\n*If HP is 66% or more when attacking*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*When there is another \"Universe Survival Saga\" Category\nally attacking in the same turn or a \"Universe Survival Saga\"\nCategory enemy*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*2 or more Type Ki Spheres obtained*\n- Ki +2\n- ATK & DEF 122%{passiveImg:up_g} and damage reduction rate 22%{passiveImg:up_g} when\nattacking\n*For every 2 Ki Spheres obtained*\n- Chance of performing a critical hit 22%{passiveImg:up_g} (up to 66%)"
    },
    {
      id: 1027471,
      name: "Cell (Perfect Form) (GT) & Frieza (Final Form) (GT)",
      element: 24,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Sworn Enemies\", \"Revenge\" or \"GT Bosses\" Category ally on\nthe team upon the character's entry*\n- {passiveImg:once}Ki +5 and ATK & DEF 40%{passiveImg:up_g} for 6 turn(s)\n- {passiveImg:once}Medium chance of evading enemy's attack for 6 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 140%{passiveImg:up_g}\n- \"Sworn Enemies\", \"Revenge\" or \"GT Bosses\" Category\nallies' Ki +2 and DEF 30%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 70%{passiveImg:up_g}\n*When there is an enemy whose name includes \"Goku\"\n(Youth, Captain Ginyu, Jr., etc. excluded)*\n- High chance of performing a critical hit\n*When the target enemy is in the following status: {passiveImg:stun} or {passiveImg:astute}*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n- Attacks are effective against all Types\n*When the target enemy is in the following status: {passiveImg:atk_down} or {passiveImg:def_down}*\n- Chance of evading enemy's attack 20%{passiveImg:up_g}\n- Launches an additional Super Attack"
    },
    {
      id: 1027581,
      name: "Pilaf & Shu & Mai",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Changes Ki Spheres for 5 turn(s): PHY to AGL, TEQ or\nSTR\n*Basic effect(s)*\n- ATK & DEF 120%{passiveImg:up_g}\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*With an AGL Ki Sphere obtained*\n- ATK & DEF 70%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*With a TEQ Ki Sphere obtained*\n- DEF 100%{passiveImg:up_g}\n- High chance of evading enemy's attack\n*With a STR Ki Sphere obtained*\n- ATK 100%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Seals the attacked enemy's Super Attack\n*7 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n*When there is an enemy whose name includes \"Goku\"\n(Captain Ginyu, Jr., etc. excluded)*\n- Changes Ki Spheres: INT to AGL, TEQ or STR"
    },
    {
      id: 1027601,
      name: "Super Saiyan Trunks (Teen) & Super Saiyan Broly",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK & DEF 100%{passiveImg:up_g}\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack\n- High chance of performing a critical hit\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*As the 1st or 3rd attacker in a turn at the start of turn*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Rainbow Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 40%{passiveImg:up_g}\n*For every Super Attack performed*\n- ATK & DEF 31%{passiveImg:up_g} and damage reduction rate 8%{passiveImg:up_g} within\nthe turn"
    },
    {
      id: 1027981,
      name: "Super Saiyan Gogeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +2 and ATK & DEF 154%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to Rainbow Ki Spheres\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*For 3 turn(s) from the character's entry turn*\n- Guards all attacks\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Launches an additional Super Attack"
    },
    {
      id: 1028021,
      name: "Super Saiyan Broly",
      element: 20,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +5 and ATK & DEF 100%{passiveImg:up_g} for 4 turn(s)\n- {passiveImg:once}Launches an additional Super Attack for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking with 12 or more Ki*\n- ATK 50%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- DEF 50%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +2\n- Launches an additional Super Attack\n*As the 3rd attacker in a turn*\n- Ki +6\n- Launches an additional Super Attack and high chance of\nlaunching another additional Super Attack"
    },
    {
      id: 1028061,
      name: "Super Saiyan Goku & \nSuper Saiyan Vegeta & Super Saiyan Trunks (Teen)",
      element: 12,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"Super Saiyans\" or \"Movie Heroes\" Category allies are on the\nteam*\n- {passiveImg:once}Attacks are effective against all Types for 5 turn(s)\n- {passiveImg:once}Damage reduction rate 30%{passiveImg:up_g} for 5 turn(s)\n*Basic effect(s)*\n- Ki +3 and ATK & DEF 180%{passiveImg:up_g}\n- Receives an additional Ki +3 per INT Ki Sphere obtained\n*When attacking*\n- ATK & DEF 130%{passiveImg:up_g}\n*When there is another \"Super Saiyans\" or \"Movie Heroes\"\nCategory ally attacking in the same turn*\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*For every 3 Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack (up to 3 times within a turn)"
    },
    {
      id: 1028321,
      name: "Gohan (Beast)",
      element: 13,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Ki +8 and chance of performing a critical hit & damage\nreduction rate 40%{passiveImg:up_g} for 5 turn(s)\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 250%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK 50%{passiveImg:up_g}\n- Chance of performing a critical hit 20%{passiveImg:up_g} when Ki is 24\n*When receiving an attack*\n- DEF 80%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g} when Ki is 24\n*After receiving an attack*\n- Launches an additional Super Attack\n- All allies' Ki +3 (self excluded)\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- ATK & chance of performing a critical hit 20%{passiveImg:up_g} within the\nturn\n*After performing 5 or more attacks or receiving 8 or more\nattacks in battle*\n- {passiveImg:forever}Chance of performing a critical hit & damage reduction\nrate 20%{passiveImg:up_g} and all allies' Ki +2 starting from the character's\nnext attacking turn"
    },
    {
      id: 1028371,
      name: "Gamma 1 & Gamma 2/Gamma 1",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 125%{passiveImg:up_g}\n- \"Super Heroes\", \"Joined Forces\" or \"Defenders of Justice\"\nCategory allies' Ki +3 and ATK & DEF 50%{passiveImg:up_g}\n*When HP is 30% or more*\n- Ki +3 and ATK & DEF 125%{passiveImg:up_g}\n*For every INT Ki Sphere obtained*\n- Chance of performing a critical hit 30%{passiveImg:up_g}\n- Launches an additional Super Attack (up to 2 times within a\nturn)\n*For every AGL or STR Ki Sphere obtained*\n- Chance of performing a critical hit 12%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack (up to 2 times within a turn)\n*After performing 3 or more attacks in battle*\n- {passiveImg:forever}ATK & DEF 50%{passiveImg:up_g}\n- {passiveImg:forever}Damage reduction rate 30%{passiveImg:up_g}"
    },
    {
      id: 1028551,
      name: "Beerus (Pajamas)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Unable to attack\n- DEF 150%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Changes Ki Spheres: PHY to Rainbow\n- All allies' ATK 20%{passiveImg:up_g} and for every turn passed, plus an\nadditional ATK 10%{passiveImg:up_g} (up to 30%)\n*For every turn passed*\n- {passiveImg:forever}Damage reduction rate 10%{passiveImg:down_r} (no more than -30%)\n*For every Ki Sphere obtained*\n- DEF 30%{passiveImg:up_g}"
    },
    {
      id: 1028721,
      name: "Captain Ginyu (Ginyu Force)",
      element: 22,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when 5 or more \"Special\nPose\" Category allies are on the team*\n- {passiveImg:once}{passiveImg:forever}Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- {passiveImg:once}{passiveImg:forever}Launches an additional Super Attack\n- {passiveImg:once}All allies' ATK & DEF 25%{passiveImg:up_g} for 3 turn(s) (self excluded)\n*Basic effect(s)*\n- Ki +2 and ATK & DEF 150%{passiveImg:up_g}\n*When all allies attacking in the same turn are \"Special Pose\"\nCategory characters*\n- Guards all attacks\n- Attacks are effective against all Types\n*Per \"Special Pose\" Category ally on the team*\n- Damage reduction rate 7%{passiveImg:up_g} before attacking (up to 35%)\n- Chance of performing a critical hit 7%{passiveImg:up_g} when attacking (up\nto 35%)\n*With an INT or Rainbow Ki Sphere obtained*\n- \"Special Pose\" Category allies' ATK & DEF 25%{passiveImg:up_g} for 2\nturn(s) (self excluded)\n*With a Type Ki Sphere obtained (INT excluded)*\n- ATK & DEF 50%{passiveImg:up_g}"
    },
    {
      id: 1028891,
      name: "Ultimate Gohan",
      element: 10,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"Majin Buu Saga\" Category allies are on the team upon the\ncharacter's entry*\n- {passiveImg:once}All allies' DEF 58%{passiveImg:up_g} for 2 turn(s)\n- {passiveImg:once}{passiveImg:forever}Ki +6\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 180%{passiveImg:up_g}\n- Guards all attacks\n*When all allies attacking in the same turn are \"Majin Buu\nSaga\" Category characters*\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*When attacking with 12 or more Ki*\n- ATK & DEF 58%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 58%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When activating the Active Skill or when attacking with 24\nKi*\n- ATK 58%{passiveImg:up_g}\n- \"Majin Buu Saga\" Category allies' DEF 20%{passiveImg:up_g} (self excluded)\n*When facing only 1 enemy and that enemy's HP is 58% or\nmore at the start of turn*\n- Launches 2 additional attacks, each of which has a medium\nchance of becoming a Super Attack"
    },
    {
      id: 1028921,
      name: "Goku (Youth) & Krillin (Youth) & Bulma (Youth)",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when another 2 or more\n\"DB Saga\" or \"Earth-Bred Fighters\" Category allies are on the\nteam*\n- {passiveImg:once}ATK & DEF 82%{passiveImg:up_g} for 4 turn(s)\n*When attacking with 12 or more Ki*\n- ATK & DEF 77%{passiveImg:up_g}\n- \"DB Saga\" Category allies' ATK 30%{passiveImg:up_g} (self excluded)\n*When attacking with 18 or more Ki*\n- \"Earth-Bred Fighters\" Category allies' DEF 30%{passiveImg:up_g} (self\nexcluded)\n*Per \"DB Saga\" Category ally on the team*\n- Ki +1\n- ATK & DEF 17%{passiveImg:up_g}\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n*When there is another \"Earth-Bred Fighters\" Category ally\nattacking in the same turn*\n- ATK & DEF 77%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Medium chance of evading enemy's attack"
    },
    {
      id: 1028961,
      name: "Cell Max",
      element: 23,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Artificial Life Forms\" or \"Super Bosses\" Category ally on the\nteam upon the character's entry*\n- {passiveImg:once}ATK & DEF 100%{passiveImg:up_g}, guards all attacks and launches an\nadditional attack that has a high chance of becoming a Super\nAttack for 3 turn(s)\n*Basic effect(s)*\n- Ki +5\n- ATK & DEF 300%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK 20%{passiveImg:up_g} (up to 100%)\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}DEF 20%{passiveImg:up_g} (up to 100%)\n*When all allies attacking in the same turn are \"Artificial Life\nForms\", \"Super Bosses\" or \"Movie Bosses\" Category\ncharacters*\n- DEF 250%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*When there are no \"Super Heroes\" Category allies attacking\nin the same turn*\n- ATK 250%{passiveImg:up_g}\n- Chance of performing a critical hit 30%{passiveImg:up_g}\n*After receiving a Super Attack*\n- Launches an additional Super Attack"
    },
    {
      id: 1029051,
      name: "Goku (Ultra Instinct -Sign-)",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Universe Survival Saga\" Category ally on the team upon the\ncharacter's entry*\n- {passiveImg:once}Ki +4 and ATK & DEF 77%{passiveImg:up_g} for 7 turn(s)\n- {passiveImg:once}ATK & DEF 77%{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- Ki +7\n- ATK & DEF 200%{passiveImg:up_g}\n- Great chance of performing a critical hit\n- Great chance of evading enemy's attack\n- Damage reduction rate 15%{passiveImg:up_g}\n*Before receiving an attack within the turn*\n- Damage reduction rate 35%{passiveImg:up_g}\n*After receiving an attack*\n- Guards all attacks\n*After evading an attack*\n- Launches an additional Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 1029091,
      name: "Jiren",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +8\n- ATK & DEF 350%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Interrupts the attacked enemy\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- ATK 100%{passiveImg:up_g}\n- Great chance of performing a critical hit\n- Damage reduction rate 11%{passiveImg:up_g}"
    },
    {
      id: 1029271,
      name: "Bio-Broly",
      element: 24,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Uncontrollable Power\" Category ally on the team upon the\ncharacter's entry*\n- {passiveImg:once}Ki +8 to 10 randomly at the start of turn, recovers 26%\nHP at the end of turn and launches an additional Super Attack\nfor 3 turn(s)\n*Basic effect(s)*\n- Ki +2\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When all allies attacking in the same turn are\n\"Uncontrollable Power\" Category characters*\n- Damage reduction rate 20%{passiveImg:up_g}\n*For every turn passed*\n- {passiveImg:forever}Damage reduction rate 6%{passiveImg:up_g} (up to 30%)\n*Starting from the 7th turn from the character's entry turn*\n- {passiveImg:forever}Damage reduction rate 6%{passiveImg:down_r} for every turn passed (no\nmore than -30%)"
    },
    {
      id: 1029361,
      name: "Super Saiyan Goku & Super Saiyan Gohan (Youth) & \nSuper Saiyan Trunks (Teen)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 200%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to PHY Ki Spheres\n- All allies' Ki +3 and ATK 50%{passiveImg:up_g} (self excluded)\n- Receives an additional Ki +2 per PHY Ki Sphere obtained\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n(PHY excluded)\n*When receiving an attack*\n- DEF 30%{passiveImg:up_g} for every 3 Ki\n*When receiving a Super Attack*\n- Damage reduction rate 30%{passiveImg:up_g} temporarily\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- Launches 2 additional attacks, each of which has a high\nchance of becoming a Super Attack\n*When attacking with 24 Ki*\n- Attacks are effective against all Types\n*When there is another \"Movie Heroes\" or \"All-Out Struggle\"\nCategory ally attacking in the same turn*\n- Damage reduction rate 15%{passiveImg:up_g}\n- All allies' DEF 77%{passiveImg:up_g} for 2 turns"
    },
    {
      id: 1029401,
      name: "Broly",
      element: 21,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Extreme Class allies' Ki +2 and ATK & DEF 60%{passiveImg:up_g} for 1\nturn\n- {passiveImg:once}Damage reduction rate 90%{passiveImg:up_g} as the 1st attacker in a\nturn for 1 turn\n- {passiveImg:once}Damage reduction rate 70%{passiveImg:up_g} and Extreme Class\nallies' chance of performing a critical hit 50%{passiveImg:up_g} as the 2nd or\n3rd attacker in a turn for 1 turn\n*Basic effect(s)*\n- Unable to attack\n- DEF 200%{passiveImg:up_g}\n- Guards all attacks"
    },
    {
      id: 1029441,
      name: "Legendary Super Saiyan Broly",
      element: 22,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation upon the character's\nentry*\n- {passiveImg:once}Extreme Class allies' DEF 40%{passiveImg:up_g} for 4 turn(s)\n*Basic effect(s)*\n- ATK & DEF 260%{passiveImg:up_g}\n- Damage reduction rate 60%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*For every Type Ki Sphere obtained*\n- Recovers 2% HP\n*When the Domain \"Molten Lava of Natade Village\" is active*\n- Guards all attacks\n- Randomly changes Ki Spheres of a certain Type (INT & STR\nexcluded) to STR Ki Spheres at the start of the character's\nattacking turn when the Domain is active\n- {passiveImg:forever}Attacks are effective against all Types if the character\nperforms an attack when the Domain is active\n*When the character or an ally attacking in the same turn is\nKO'd starting from the 5th turn from the character's entry\nturn*\n- {passiveImg:once}Revives with 60% HP recovered\n*After the character's or an ally's Revival Skill is activated*\n- DEF 60%{passiveImg:up_g} when receiving an attack\n*After the character's Revival Skill is activated*\n- {passiveImg:forever}Changes Ki Spheres: PHY to INT\n- \"Uncontrollable Power\" Category allies' ATK & DEF 60%{passiveImg:up_g}\nwithin the character's attacking turn"
    },
    {
      id: 1029471,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5\n- ATK & DEF 200%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +2\n- {passiveImg:forever}ATK 40%{passiveImg:up_g} (up to 200%)\n- {passiveImg:forever}DEF 30%{passiveImg:up_g} (up to 150%)\n*For every Super Attack performed*\n- ATK 77%{passiveImg:up_g} within the turn\n*When attacking with 18 or more Ki*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 24 Ki*\n- ATK 58%{passiveImg:up_g}\n- Launches an additional Super Attack\n- Attacks are effective against all Types when HP is 77% or\nmore\n*When there is another \"Kamehameha\" or \"Earth-Bred\nFighters\" Category ally attacking in the same turn*\n- Ki +2\n- Guards all attacks\n- High chance of evading enemy's attack if HP is 77% or less\nwhen receiving an attack"
    },
    {
      id: 1029511,
      name: "Grandpa Gohan",
      element: 11,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is an enemy or\nan ally whose name includes \"Goku\" (Captain Ginyu, Jr., etc.\nexcluded) at the start of the character's attacking turn*\n- {passiveImg:once}{passiveImg:forever}All allies' Ki +1 and ATK 20%{passiveImg:up_g}\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*Per \"Turtle School\" or \"Kamehameha\" Category ally\nattacking in the same turn (self excluded)*\n- Ki +2\n*When the name of an ally who is attacking in the same turn or\nan enemy includes \"Goku\" (Captain Ginyu, Jr., etc. excluded)*\n- Ki +2\n- Launches an additional Super Attack"
    },
    {
      id: 1029551,
      name: "Anilaza",
      element: 23,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another\n\"Final Trump Card\" or \"Super Bosses\" Category ally on the\nteam upon the character's entry*\n- {passiveImg:once}Ki +3, ATK & DEF 130%{passiveImg:up_g} and foresees enemy's Super\nAttack for 3 turn(s)\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 130%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR\nexcluded) to STR Ki Spheres\n*When HP is 30% or more*\n- Ki +3\n- Damage reduction rate 30%{passiveImg:up_g}\n*3 or more STR Ki Spheres obtained*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*5 or more STR Ki Spheres obtained*\n- Launches an additional Super Attack\n*As the 1st attacker in a turn*\n- ATK & DEF 130%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n*As the 2nd or 3rd attacker in a turn*\n- High chance of launching an additional Super Attack\n- Attacks are effective against all Types\n- ATK & DEF 30%{passiveImg:up_g} when attacking with 12 or more Ki"
    },
    {
      id: 1029701,
      name: "Gohan (Kid)/Piccolo",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Recovers 20% HP at the end of turn\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Ki +3\n- Damage reduction rate & chance of performing a critical hit\n30%{passiveImg:up_g}\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*As the 1st attacker in a turn*\n- Ki +3\n- Damage reduction rate & chance of performing a critical hit\n30%{passiveImg:up_g}\n*When there is another \"Planet Namek Saga\" or \"Namekians\"\nCategory ally attacking in the same turn*\n- Ki +3\n- Damage reduction rate & chance of performing a critical hit\n20%{passiveImg:up_g}"
    },
    {
      id: 1029831,
      name: "Super Saiyan Bardock",
      element: 10,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when another 3 or more\nSuper Class allies are on the team upon the character's entry*\n- {passiveImg:once}Launches an additional Super Attack and guards\nall attacks for 4 turns\n*Basic effect(s)*\n- Ki +5 and ATK & DEF 150%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Super Class allies' Ki +1 and ATK & DEF 25%{passiveImg:up_g}\n- \"Time Travelers\" Category allies' Ki +1 and ATK & DEF 25%{passiveImg:up_g}\n*When there is a \"Wicked Bloodline\" or \"Transformation Boost\"\nCategory enemy*\n- {passiveImg:forever}ATK 120%{passiveImg:up_g}\n- {passiveImg:forever}Damage reduction rate 30%{passiveImg:up_g}\n*When there is another Super Class ally attacking in the same turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When HP is 60% or less*\n- ATK 60%{passiveImg:up_g}\n- Performs a critical hit\n- {passiveImg:once}Foresees enemy's Super Attack"
    },
    {
      id: 1030021,
      name: "Super Saiyan 3 Gotenks",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +7 and ATK & DEF 200%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When receiving an attack*\n- DEF 77%{passiveImg:up_g}\n*After receiving an attack*\n- ATK 77%{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Damage reduction rate 22%{passiveImg:up_g}\n*When there is another \"Final Trump Card\" Category ally on\nthe team*\n- DEF 77%{passiveImg:up_g}\n- Damage reduction rate 33%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 77%{passiveImg:up_g}\n- Launches an additional Super Attack\n*When activating the Active Skill or when attacking with 24\nKi*\n- ATK 77%{passiveImg:up_g}\n- Performs a critical hit\n*When receiving a Super Attack*\n- High chance of DEF 777%{passiveImg:up_g}\n*When receiving a Ki Blast Super Attack*\n- Damage reduction rate 44%{passiveImg:up_g} temporarily and counters\nwith ferocious power"
    },
    {
      id: 1030341,
      name: "Super Saiyan 3 Goku (GT) (Golden Giant Ape)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Receives an additional Ki +2 per AGL Ki Sphere obtained\n- Receives an additional Ki +1 per non-AGL Ki Sphere obtained\n- \"Power Beyond Super Saiyan\" Category allies' DEF 50%{passiveImg:up_g}\n*For 4 turns from the character's entry turn*\n- Great chance of evading enemy's attack\n- Guards all attacks\n*For every 3 Ki when attacking*\n- ATK & DEF 30%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Performs a critical hit"
    },
    {
      id: 1030391,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 14,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another \"Full Power\" \nor \"Androids/Cell Saga\" Category ally on the team upon the \ncharacter's entry*\n- {passiveImg:once}Launches an additional attack that has a medium chance \nof becoming a Super Attack per existing enemy (up to 5 times within \na turn) and launches 2 additional Super Attacks for 4 turns\n*Basic effect(s)*\n- Ki +5\n- ATK & DEF 258%{passiveImg:up_g}\n- Guards all attacks\n- Damage reduction rate 20%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK 158%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 80%)\n*When receiving an attack*\n- DEF 158%{passiveImg:up_g}\n*Starting from the 5th turn from the character's entry turn*\n- ATK 158%{passiveImg:up_g} and DEF 58%{passiveImg:up_g} when attacking with 18 or more Ki\n- Performs a critical hit when activating the Active Skill or when \nattacking with 24 Ki"
    },
    {
      id: 1030431,
      name: "Super Saiyan Goku + Super Saiyan Vegeta (Angel)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n- \"Earth-Protecting Heroes\" or \"Potara\" Category allies' \nKi +1 and DEF 40%{passiveImg:up_g}\n*For 3 turns from the character's entry turn*\n- Damage reduction rate 50%{passiveImg:up_g}\n*When attacking*\n- ATK 200%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*Starting from the 4th turn from the start of battle*\n- Meets up with Super Saiyan Vegeta (Angel) and can \nperform Reversible Exchange"
    },
    {
      id: 1030481,
      name: "Super Saiyan Vegeta (Angel) + Super Saiyan Goku (Angel)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5 and ATK & DEF 200%{passiveImg:up_g}\n- Receives an additional Ki +3 per Rainbow Ki Sphere obtained\n- \"Successors\" or \"Fusion\" Category allies' Ki +1 and DEF 40%{passiveImg:up_g}\n*For 3 turns from the character's entry turn*\n- DEF 300%{passiveImg:up_g}\n- Guards all attacks\n*When attacking*\n- ATK 200%{passiveImg:up_g}\n- DEF 100%{passiveImg:up_g}\n*When attacking with 10 or more Ki*\n- Attacks are effective against all Types\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- Guards all attacks\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*Starting from the 4th turn from the start of battle*\n- Meets up with Super Saiyan Goku (Angel) and can perform \nReversible Exchange"
    },
    {
      id: 1030531,
      name: "Frieza (Final Form) (Angel) + Goku",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +7\n- ATK & DEF 200%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*For 2 turns from the character's entry turn*\n- \"Representatives of Universe 7\" or \"Battle of Fate\" Category \nallies' ATK & DEF 77%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n- Ki +7 and ATK 77%{passiveImg:up_g} when HP is 77% or less\n*When receiving an attack*\n- Damage reduction rate 50%{passiveImg:up_g} when HP is 77% or less\n*When all allies attacking in the same turn are Super Class \ncharacters (self excluded)*\n- Performs a critical hit\n- Launches an additional Super Attack\n*When all allies attacking in the same turn are Extreme Class \ncharacters (self excluded)*\n- Launches 2 additional Super Attacks\n*Starting from the 4th turn from the start of battle*\n- Meets up with Goku and can perform Reversible Exchange"
    },
    {
      id: 1030571,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 13,
      rarity: 5,
      itemized_description: "*Activates the Entrance Animation when there is another \n\"Universe Survival Saga\" Category ally on the team upon \nthe character's entry*\n- {passiveImg:once}ATK 60%{passiveImg:up_g} and damage reduction rate 30%{passiveImg:up_g} for \n6 turns\n*Basic effect(s)*\n- ATK & DEF 200%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (STR excluded) \nto Rainbow Ki Spheres\n*When attacking*\n- ATK 200%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1\n- {passiveImg:forever}DEF 40%{passiveImg:up_g} (up to 200%)\n- Damage reduction rate 7%{passiveImg:up_g} within the turn\n*For every 2 Ki Spheres obtained*\n- Launches an additional attack that has a medium chance of \nbecoming a Super Attack (up to 5 times within a turn)\n*After the character performs 6 or more Super Attacks in battle*\n- {passiveImg:forever}Damage reduction rate 30%{passiveImg:up_g}\n*After the character performs 7 or more Super Attacks in battle*\n- {passiveImg:forever}Performs a critical hit"
    },
    {
      id: 1030791,
      name: "Demon King Piccolo (Elder)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' ATK & DEF 50%{passiveImg:up_g}, plus an additional \nATK & DEF 10%{passiveImg:up_g} for characters who also belong to the \n\"Demonic Power\" Category\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*Per \"Demonic Power\" Category ally or Extreme Class ally on \nthe team (depending on which has more members)*\n- ATK & DEF 20%{passiveImg:up_g} when attacking (up to 100%)\n*When all allies attacking in the same turn are \"Demonic Power\" \nCategory characters, or when all allies are Extreme Class \ncharacters*\n- Guards all attacks\n*As the 3rd attacker in a turn*\n- High chance of evading enemy's attack"
    },
    {
      id: 4012901,
      name: "Super Vegito",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Fully recovers HP\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +3 per Rainbow Ki Sphere obtained\n*When receiving a normal attack*\n- Counters with tremendous power"
    },
    {
      id: 4012931,
      name: "Super Gogeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Fully recovers HP\n- ATK & DEF 150%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Receives an additional Ki +3 per Rainbow Ki Sphere obtained"
    },
    {
      id: 4016321,
      name: "Majuub",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 40% HP at the start of turn\n- ATK & DEF 100%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained"
    },
    {
      id: 4016401,
      name: "Super Baby 2 (Giant Ape)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained"
    },
    {
      id: 4016881,
      name: "Legendary Super Saiyan Broly",
      element: 21,
      rarity: 5,
      itemized_description: "*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 88%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n*When facing 2 or more enemies*\n- Launches an additional Super Attack"
    },
    {
      id: 4017641,
      name: "Super Saiyan 2 Gohan (Youth)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For every Ki Sphere obtained*\n- ATK 20%{passiveImg:up_g}\n- DEF 7%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When facing 2 or more enemies*\n- Launches an additional Super Attack\n*When your team has \"Super Saiyan Goku\" attacking in the\nsame turn*\n- ATK 59%{passiveImg:up_g} when attacking with 18 or more Ki"
    },
    {
      id: 4017791,
      name: "Demon King Piccolo",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres\n*For every Ki Sphere obtained*\n- ATK 6666{passiveImg:up_g}\n*For 5 turn(s) from the character's entry turn*\n- Damage reduction rate 66%{passiveImg:up_g}\n*Starting from the 6th turn from the character's entry turn*\n- Damage reduction rate 50%{passiveImg:up_g} with 5 or more Ki Spheres\nobtained"
    },
    {
      id: 4017911,
      name: "Perfect Cell",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Fully recovers HP\n- Ki +4 and ATK & DEF 120%{passiveImg:up_g}\n*When attacking with 4 or more Ki Spheres obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- ATK & DEF 20%{passiveImg:up_g}\n*8 or more Ki Spheres obtained*\n- ATK 20%{passiveImg:up_g}"
    },
    {
      id: 4017971,
      name: "Super Saiyan God SS Gogeta",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +5\n- Launches an additional attack\n- {passiveImg:forever}ATK & DEF 7%{passiveImg:up_g} for every attack performed (up to\n77%)\n- Attacks are effective against all Types\n*As the 3rd attacker in a turn*\n- Launches an additional Super Attack\n- High chance of evading enemy's attack"
    },
    {
      id: 4017981,
      name: "Super Saiyan God SS Vegito",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 77%{passiveImg:up_g}\n*As the 1st or 2nd attacker in a turn*\n- Ki +2\n- Launches an additional Super Attack\n- {passiveImg:forever}Ki +1 (up to +5) and ATK & DEF 7%{passiveImg:up_g} (up to 77%) for\nevery attack performed\n*As the 3rd attacker in a turn*\n- Launches an additional Super Attack\n- High chance of evading enemy's attack"
    },
    {
      id: 4018041,
      name: "Android #16",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +6 and ATK & DEF 200%{passiveImg:up_g}\n- High chance of performing a critical hit\n*When there is an \"Androids/Cell Saga\" Category enemy*\n- Launches an additional Super Attack"
    },
    {
      id: 4018891,
      name: "Goku Black (Super Saiyan Rosé)",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Attacks are effective against all Types"
    },
    {
      id: 4019411,
      name: "Vegeta",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 50% HP\n- Ki +3 and ATK & DEF 100%{passiveImg:up_g}\n*When facing only 1 enemy*\n- Ki +3 and ATK & DEF 18%{passiveImg:up_g}\n*When attacking a Super Class enemy*\n- Ki +3 and ATK & DEF 18%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Attacks are effective against all Types"
    },
    {
      id: 4020341,
      name: "Super Saiyan God SS Evolved Vegeta",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 10%{passiveImg:up_g}\n- Medium chance of launching an additional Super Attack\n*For every attack received*\n- Damage reduction rate 10%{passiveImg:up_g} within the turn (up to 30%)\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n*When the character or an ally attacking in the same turn is\nKO'd if HP is 50% or less at the start of the character's\nattacking turn after the character receives 7 or more attacks\nin battle*\n- {passiveImg:once}Revives with 70% HP recovered"
    },
    {
      id: 4020381,
      name: "Majin Buu (Ultimate Gohan)",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Recovers 10% HP at the start of turn\n- ATK & DEF 150%{passiveImg:up_g}\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack\n- Receives an additional Ki +1 per Ki Sphere obtained\n*For 5 turns from the character's entry turn*\n- Ki +5\n- {passiveImg:once}Seals the attacked enemy's Super Attack for 5 turns"
    },
    {
      id: 4020471,
      name: "Super Vegito",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 50% HP\n- ATK & DEF 150%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When receiving a normal attack*\n- Counters with tremendous power\n*For 10 turn(s) from the character's entry turn*\n- Ki +5\n- Foresees enemy's Super Attack"
    },
    {
      id: 4022131,
      name: "Goku & Piccolo",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Launches an additional attack\n- High chance of launching an additional attack\n*When attacking with 12 or more Ki*\n- ATK & DEF 120%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +6)\n- {passiveImg:forever}ATK & DEF 10%{passiveImg:up_g} (up to 59%)\n*Every time the character performs 6 or more attacks in\nbattle*\n- Launches an additional Super Attack when HP is 59% or less\n(up to once within a turn)"
    },
    {
      id: 4022201,
      name: "Super Gogeta",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 30% HP\n- ATK & DEF 150%{passiveImg:up_g}\n- Attacks are effective against all Types and great chance of\nperforming a critical hit\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*For 5 turns from the character's entry turn*\n- Ki +5\n- Damage reduction rate 30%{passiveImg:up_g}\n- Foresees enemy's Super Attack\n*When receiving an Unarmed Super Attack from an enemy\nwho is hit by the character's Ultra Super Attack*\n- Nullifies it within the turn"
    },
    {
      id: 4022391,
      name: "Super Saiyan God SS Goku & \nSuper Saiyan God SS Vegeta",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 177%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n- Medium chance of performing a critical hit\n- Medium chance of evading enemy's attack\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n- Chance of evading enemy's attack 7%{passiveImg:up_g}\n*When attacking with 16 or more Ki*\n- Attacks are effective against all Types\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack"
    },
    {
      id: 4022431,
      name: "Super Saiyan 4 Gogeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 177%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n- Attacks are effective against all Types\n- Medium chance of performing a critical hit\n- High chance of launching an additional Super Attack\n*For every Rainbow Ki Sphere obtained*\n- Chance of performing a critical hit 7%{passiveImg:up_g}\n- Damage reduction rate 7%{passiveImg:up_g}\n*When receiving a Super Attack*\n- High chance of nullifying it and countering with tremendous\npower"
    },
    {
      id: 4022601,
      name: "Super Janemba",
      element: 24,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +1 per Ki Sphere obtained"
    },
    {
      id: 4022951,
      name: "Krillin & Gohan (Kid)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Receives an additional Ki +1 per Rainbow Ki Sphere obtained\n- Medium chance of evading enemy's attack\n*When attacking with 12 or more Ki*\n- ATK 58%{passiveImg:up_g}\n- Chance of evading enemy's attack 30%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack"
    },
    {
      id: 4023051,
      name: "Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 159%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 59%{passiveImg:up_g}\n*When there is an Extreme Class enemy*\n- Ki +3\n- Damage reduction rate 30%{passiveImg:up_g}\n*When there is a \"Planet Namek Saga\" Category enemy*\n- High chance of performing a critical hit"
    },
    {
      id: 4023431,
      name: "Super Saiyan Gohan (Future)",
      element: 10,
      rarity: 5,
      itemized_description: "*For 5 turn(s) from the character's entry turn*\n- Ki +8\n*Basic effect(s)*\n- ATK 258%{passiveImg:up_g}\n*8 or more Ki Spheres obtained*\n- Launches an additional Super Attack\n*When HP is 58% or less*\n- Foresees enemy's Super Attack\n*When the character is KO'd*\n- {passiveImg:once}Revives with 85% HP recovered\n*At the end of the turn in which the character's Revival Skill is\nactivated*\n- {passiveImg:forever}Ki +5\n- {passiveImg:forever}DEF & damage reduction rate 58%{passiveImg:up_g}"
    },
    {
      id: 4023521,
      name: "Vegeta (Giant Ape)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5"
    },
    {
      id: 4024151,
      name: "Piccolo",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 100%{passiveImg:up_g}\n- Recovers 10% HP at the start of turn\n*For 1 turn from the character's entry turn*\n- Guards all attacks\n*3 or more Ki Spheres obtained*\n- Ki +3\n- DEF 100%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- ATK 100%{passiveImg:up_g}\n- ATK 50%{passiveImg:up_g} when HP is 50% or more\n*When attacking with 24 Ki*\n- Interrupts the attacked enemy"
    },
    {
      id: 4024901,
      name: "Super Saiyan Goku & Super Saiyan Vegeta",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +2\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 30%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*When attacking with 18 or more Ki*\n- ATK & DEF 50%{passiveImg:up_g}\n- Medium chance of performing a critical hit\n*When activating the Active Skill or when attacking with 24\nKi*\n- Performs a critical hit"
    },
    {
      id: 4025591,
      name: "Orange Piccolo (Giant Form)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +2 per Ki Sphere obtained\n- Launches an additional attack that has a medium chance of\nbecoming a Super Attack"
    },
    {
      id: 4025651,
      name: "Hatchiyack (Giant Form)",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- Randomly changes Ki Spheres of a certain Type (TEQ\nexcluded) to TEQ Ki Spheres"
    },
    {
      id: 4025741,
      name: "Goku & Vegeta",
      element: 14,
      rarity: 5,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- DEF 250%{passiveImg:up_g}\n*For 4 turn(s) from the character's entry turn*\n- Guards all attacks\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*For every Ki Sphere obtained*\n- Damage reduction rate 8%{passiveImg:up_g}\n*When the Finish Effect is activated*\n- ATK 500%{passiveImg:up_g}"
    },
    {
      id: 4025781,
      name: "Super Saiyan Vegeta (GT)",
      element: 13,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 250%{passiveImg:up_g}\n- All allies' Ki +8 and ATK 80%{passiveImg:up_g}\n*When HP is 50% or more*\n- DEF 150%{passiveImg:up_g}\n*When the character or an ally attacking in the same turn is\nKO'd*\n- {passiveImg:once}Revives with HP fully recovered\n*When the Finish Effect is activated*\n- ATK 39%{passiveImg:up_g}"
    },
    {
      id: 4026401,
      name: "Majin Vegeta",
      element: 22,
      rarity: 5,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- Ki +3\n- DEF 120%{passiveImg:up_g}\n*When receiving an attack with 12 or more Ki*\n- DEF 80%{passiveImg:up_g}\n*When receiving an attack with 15 or more Ki*\n- Damage reduction rate 30%{passiveImg:up_g}\n*When the Finish Effect is activated*\n- ATK 150%{passiveImg:up_g}"
    },
    {
      id: 4026911,
      name: "Super Saiyan 4 Goku & Majuub",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Unable to attack\n- DEF 300%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (INT\nexcluded) to INT Ki Spheres\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 10%{passiveImg:up_g} per Type Ki Sphere obtained\n- Guards all attacks with 3 or more Type Ki Spheres obtained\n*For 2 turn(s) from the character's entry turn*\n- All allies' Ki +3 and DEF 70%{passiveImg:up_g}\n*When receiving an Unarmed Super Attack*\n- Nullifies it"
    },
    {
      id: 4026921,
      name: "Super Full Power Saiyan 4 Goku",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Recovers 77% HP\n- Ki +7 and ATK & DEF 200%{passiveImg:up_g}\n- Receives an additional Ki +2 per INT or Rainbow Ki Sphere\nobtained\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n(INT excluded)\n- Damage reduction rate 25%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Guards all attacks\n*For 3 turn(s) from the character's entry turn*\n- Performs a critical hit\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- Great chance of performing a critical hit\n*When attacking with 24 Ki*\n- ATK 59%{passiveImg:up_g}\n- Performs a critical hit\n*After receiving or evading an attack*\n- DEF 77%{passiveImg:up_g} for 5 turn(s)\n*As the 1st attacker in a turn*\n- DEF 77%{passiveImg:up_g}\n- Damage reduction rate 25%{passiveImg:up_g}"
    },
    {
      id: 4027131,
      name: "Super Saiyan God SS Vegito",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +5 and ATK & DEF 250%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n- Attacks are effective against all Types\n*Before attacking*\n- Damage reduction rate 30%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Damage reduction rate 20%{passiveImg:up_g}\n- High chance of evading enemy's attack\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional Super Attack and medium chance of\nlaunching another additional Super Attack\n*When activating the Active Skill or when attacking with 20 or\nmore Ki*\n- Launches an additional Super Attack"
    },
    {
      id: 4027231,
      name: "Infinite Zamasu",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Nullifies all attacks directed at the character\n- Ki +4 and ATK 300%{passiveImg:up_g}\n- Changes Ki Spheres: AGL & STR to TEQ\n*4 or more TEQ Ki Spheres obtained*\n- \"Worldwide Chaos\" Category allies' DEF 60%{passiveImg:up_g}"
    },
    {
      id: 4027301,
      name: "Super Saiyan Trunks (Future)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +12 and ATK & DEF 200%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type to Rainbow\nKi Spheres\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Damage reduction rate 50%{passiveImg:up_g}\n*As the 1st attacker in a turn*\n- Guards all attacks\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n*5 or more Ki Spheres obtained*\n- Launches an additional Super Attack"
    },
    {
      id: 4027461,
      name: "Ribrianne (Giant Form)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Receives an additional Ki +2 per Ki Sphere obtained\n- Changes Ki Spheres: STR to TEQ\n- Randomly changes Ki Spheres of a certain Type (STR & TEQ\nexcluded) to Rainbow Ki Spheres\n- High chance of performing a critical hit"
    },
    {
      id: 4027991,
      name: "Super Saiyan God SS Gogeta",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 200%{passiveImg:up_g}\n- Attacks are effective against all Types\n- Receives an additional Ki +2 per Ki Sphere obtained\n- Randomly changes Ki Spheres of a certain Type (PHY\nexcluded) to Rainbow Ki Spheres\n- Launches an additional Super Attack\n- Great chance of evading enemy's attack\n*For 4 turn(s) from the character's entry turn*\n- Recovers 54% HP at the start of the character's attacking\nturn\n*When attacking with 12 or more Ki*\n- ATK & DEF 100%{passiveImg:up_g}\n*1 or more Rainbow Ki Spheres obtained*\n- Launches an additional Super Attack\n*For every attack evaded*\n- {passiveImg:forever}Chance of performing a critical hit 20%{passiveImg:up_g}\n*When receiving a Ki Blast Super Attack*\n- Great chance of nullifying it and countering with\ntremendous power"
    },
    {
      id: 4028031,
      name: "Super Saiyan Broly (Full Power)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +6 and ATK & DEF 300%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Launches an additional Super Attack\n*When the Domain \"Extradimensional Space\" is active*\n- Damage reduction rate 26%{passiveImg:up_g} before attacking\n*When attacking*\n- ATK 50%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 50%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- Chance of performing a critical hit 26%{passiveImg:up_g}\n*When attacking with 18 or more Ki*\n- Launches an additional Super Attack\n- Chance of performing a critical hit 26%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Launches an additional Super Attack"
    },
    {
      id: 4028381,
      name: "Gamma 1 & Gamma 2/Gamma 1",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +6 and ATK & DEF 250%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n- \"Super Heroes\", \"Joined Forces\" or \"Defenders of Justice\"\nCategory allies' Ki +3 and ATK & DEF 50%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every INT Ki Sphere obtained*\n- Chance of performing a critical hit 30%{passiveImg:up_g}\n- Launches an additional Super Attack (up to 2 time(s) within a\nturn)\n*For every AGL or STR Ki Sphere obtained*\n- Chance of performing a critical hit 12%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack (up to 2 time(s) within a turn)"
    },
    {
      id: 4028391,
      name: "Gamma 1",
      element: 12,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n- \"Super Heroes\", \"Joined Forces\" or \"Defenders of Justice\"\nCategory allies' Ki +3 and ATK & DEF 50%{passiveImg:up_g}\n- Launches an additional Super Attack\n- Changes Ki Spheres: AGL to INT\n*When HP is 30% or more*\n- Ki +3\n- ATK & DEF 150%{passiveImg:up_g}\n- Damage reduction rate 15%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 50%{passiveImg:up_g}\n*For every INT or STR Ki Sphere obtained*\n- Chance of performing a critical hit 20%{passiveImg:up_g} (up to 100%)\n- Damage reduction rate 10%{passiveImg:up_g} (up to 50%)"
    },
    {
      id: 4028651,
      name: "Beerus (Pajamas)",
      element: 14,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3 and ATK & DEF 150%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Damage reduction rate 30%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 (up to +5) and ATK 10%{passiveImg:up_g} (up to 70%)\n*3 or more Ki Spheres obtained*\n- ATK & DEF 70%{passiveImg:up_g}\n*After receiving 7 or more attacks in battle*\n- {passiveImg:forever}Medium chance of performing a critical hit starting\nfrom that turn"
    },
    {
      id: 4029061,
      name: "Goku (Ultra Instinct)",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 300%{passiveImg:up_g}\n- Damage reduction rate 20%{passiveImg:up_g}\n*For 1 turn from the character's entry turn*\n- Ki +7\n- ATK 59%{passiveImg:up_g}\n- Evades enemy's attack\n- All allies' chance of evading enemy's attack 10%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Launches an additional Super Attack\n*For every attack performed*\n- {passiveImg:forever}Ki +3 (up to +12)\n- {passiveImg:forever}Chance of performing a critical hit & chance of evading\nenemy's attack 20%{passiveImg:up_g} (up to 77%)\n*Before receiving an attack within the turn*\n- Damage reduction rate 40%{passiveImg:up_g}\n*After receiving an attack*\n- Guards all attacks\n*After evading an attack*\n- Counters with tremendous power\n*When HP is 50% or less*\n- ATK 91%{passiveImg:up_g}\n- Chance of performing a critical hit & chance of evading\nenemy's attack 20%{passiveImg:up_g}"
    },
    {
      id: 4029101,
      name: "Jiren",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Unable to attack\n- DEF 350%{passiveImg:up_g}\n- All allies' Ki +3\n- Damage reduction rate 50%{passiveImg:up_g}\n- Randomly changes Ki Spheres of a certain Type (AGL\nexcluded) to AGL Ki Spheres\n*For every Ki Sphere obtained*\n- Damage reduction rate 11%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}\n*When the character is the 2nd or 3rd to obtain Ki Spheres in a\nturn*\n- All allies' ATK 70%{passiveImg:up_g} for 2 turn(s) (self excluded)"
    },
    {
      id: 4029111,
      name: "Jiren (Full Power)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +11\n- ATK & DEF 400%{passiveImg:up_g}\n- Damage reduction rate 60%{passiveImg:up_g}\n- Great chance of performing a critical hit\n*For 1 turn from the character's entry turn*\n- Foresees enemy's Super Attack\n- Damage reduction rate 11%{passiveImg:up_g}\n*When attacking*\n- ATK & DEF 111%{passiveImg:up_g}\n*For every Super Attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 11%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- ATK 50%{passiveImg:up_g}\n- Attacks guaranteed to hit\n- Performs a critical hit\n*For every Super Attack received*\n- {passiveImg:forever}ATK 50%{passiveImg:up_g}"
    },
    {
      id: 4029371,
      name: "Super Saiyan Goku",
      element: 14,
      rarity: 5,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- Ki +3\n- ATK & DEF 259%{passiveImg:up_g}\n- Guards all attacks\n- Changes Ki Spheres: INT to PHY\n- Receives an additional Ki +2 per PHY Ki Sphere obtained\n- Receives an additional Ki +1 per Type Ki Sphere obtained\n(PHY excluded)\n*When receiving an attack*\n- DEF 30%{passiveImg:up_g} for every 3 Ki\n- Damage reduction rate 59%{passiveImg:up_g} when Ki is 24\n*For every Ki Sphere obtained*\n- DEF 20%{passiveImg:up_g}\n*For every PHY Ki Sphere obtained*\n- All allies' DEF 7%{passiveImg:up_g} for 2 turn(s)\n*When the Finish Effect is activated*\n- ATK 100%{passiveImg:up_g}"
    },
    {
      id: 4029411,
      name: "Legendary Super Saiyan Broly",
      element: 21,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +3\n- ATK & DEF 260%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n*For 3 turn(s) from the character's entry turn*\n- Damage reduction rate 26%{passiveImg:up_g}\n*When attacking with 12 or more Ki*\n- ATK & DEF 150%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Ki +1 (up to +5)\n- {passiveImg:forever}Chance of performing a critical hit 10%{passiveImg:up_g} (up to 50%)\n*After receiving an attack*\n- Launches an additional attack that has a high chance of\nbecoming a Super Attack\n*As the 1st attacker in a turn*\n- Guards all attacks\n- DEF 200%{passiveImg:up_g} before attacking\n*As the 2nd or 3rd attacker in a turn*\n- Launches an additional Super Attack\n*When there is a \"Pure Saiyans\" or \"Earth-Bred Fighters\"\nCategory enemy*\n- Ki +3\n- Chance of performing a critical hit 50%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Interrupts the attacked enemy"
    },
    {
      id: 4029481,
      name: "Super Saiyan Gohan (Teen)",
      element: 13,
      rarity: 5,
      itemized_description: "*When the Finish Effect is not activated*\n- Unable to attack\n*Basic effect(s)*\n- Guards all attacks\n*Per Super Class ally attacking in the same turn*\n- ATK 77%{passiveImg:up_g}\n*When all allies attacking in the same turn are Super Class\ncharacters*\n- Damage reduction rate 77%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 50%{passiveImg:up_g} per Ki Sphere obtained\n*When the Finish Effect is activated*\n- ATK 258%{passiveImg:up_g}"
    },
    {
      id: 4029711,
      name: "Piccolo",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +8\n- ATK & DEF 250%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n- High chance of performing a critical hit\n- Launches an additional attack that has a great chance of\nbecoming a Super Attack\n- Recovers 25% HP at the end of turn\n*When attacking with 12 or more Ki*\n- ATK 150%{passiveImg:up_g}\n*After receiving an attack*\n- {passiveImg:forever}Ki +4\n- {passiveImg:forever}Launches an additional Super Attack\n*When HP is 70% or more*\n- Damage reduction rate 20%{passiveImg:up_g}\n- Super Class allies' DEF 70%{passiveImg:up_g}\n*When HP is 70% or less*\n- {passiveImg:once}Evades enemy's attack within the turn\n- {passiveImg:forever}High chance of evading enemy's attack"
    },
    {
      id: 4030341,
      name: "Super Saiyan 3 Goku (GT) (Golden Giant Ape)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK 300%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n- Performs a critical hit\n*When Giant Ape Transformation ends*\n- Transforms into Super Saiyan 4 Goku"
    },
    {
      id: 4030351,
      name: "Super Saiyan 4 Goku",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Ki +4 and ATK & DEF 200%{passiveImg:up_g}\n- Receives an additional Ki +2 per Ki Sphere obtained\n- \"Power Beyond Super Saiyan\" or \"Giant Ape Power\" Category \nallies' DEF 70%{passiveImg:up_g} and damage reduction rate 10%{passiveImg:up_g}\n- Guards all attacks\n*For 4 turns from the character's entry turn*\n- Performs a critical hit\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*For every 4 Ki when attacking*\n- ATK & DEF 44%{passiveImg:up_g}\n*When attacking with 24 Ki*\n- Launches an additional Super Attack\n*When HP is 44% or less at the start of turn*\n- Recovers 44% HP\n*For every attack performed*\n- {passiveImg:forever}Ki +1 and chance of performing a critical hit 20%{passiveImg:up_g}\n*For every attack received*\n- {passiveImg:forever}Ki +1 and chance of performing a critical hit 20%{passiveImg:up_g}"
    },
    {
      id: 4030441,
      name: "Super Saiyan Vegeta (Angel) + Super Saiyan Goku",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Can perform Reversible Exchange with Super Saiyan Goku\n- ATK & DEF 200%{passiveImg:up_g}\n- Damage reduction rate 50%{passiveImg:up_g}\n- Receives an additional Ki +2 per Type Ki Sphere obtained\n- \"Earth-Protecting Heroes\" or \"Potara\" Category allies' \nKi +1 and ATK 40%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*When receiving an attack with 10 or more Ki*\n- Damage reduction rate 20%{passiveImg:up_g}\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*As the 1st attacker in a turn*\n- Guards all attacks\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack"
    },
    {
      id: 4030451,
      name: "Super Vegito",
      element: 11,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Fully recovers HP\n- ATK & DEF 300%{passiveImg:up_g}\n- Receives an additional Ki +3 per Type Ki Sphere obtained\n- Guards all attacks\n- Damage reduction rate 60%{passiveImg:up_g}\n- Launches an additional Ultra Super Attack\n- \"Earth-Protecting Heroes\" or \"Potara\" Category allies' \nKi +2 and ATK & DEF 40%{passiveImg:up_g}\n*For every attack performed*\n- {passiveImg:forever}Chance of performing a critical hit 20%{passiveImg:up_g} \n(up to 100%)\n*For every attack received*\n- ATK 10%{passiveImg:up_g} within the turn\n*When receiving a normal attack*\n- Counters with ferocious power\n*For 4 turns from the character's entry turn*\n- Foresees enemy's Super Attack"
    },
    {
      id: 4030491,
      name: "Super Saiyan Goku (Angel) + Super Saiyan Vegeta (Angel)",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Can perform Reversible Exchange with Super Saiyan Vegeta (Angel)\n- Ki +5 and ATK & DEF 200%{passiveImg:up_g}\n- Receives an additional Ki +3 per Rainbow Ki Sphere obtained\n- \"Successors\" or \"Fusion\" Category allies' Ki +1 and ATK 40%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n- Launches an additional attack that has a great chance of \nbecoming a Super Attack\n*When receiving an attack*\n- DEF 200%{passiveImg:up_g}\n*When receiving an attack with 10 or more Ki*\n- Chance of evading enemy's attack 10%{passiveImg:up_g}\n*When attacking with 20 or more Ki*\n- Launches an additional Super Attack\n*As the 1st attacker in a turn*\n- Guards all attacks\n- Great chance of evading enemy's attack"
    },
    {
      id: 4030501,
      name: "Super Gogeta",
      element: 10,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- {passiveImg:once}Fully recovers HP\n- Ki +5 and ATK & DEF 300%{passiveImg:up_g}\n- Receives an additional Ki +4 per Rainbow Ki Sphere obtained\n- Guards all attacks\n- Damage reduction rate 60%{passiveImg:up_g}\n- Nullifies negative effects\n- Launches 2 additional Ultra Super Attacks\n- Performs a critical hit\n- \"Successors\" or \"Fusion\" Category allies' Ki +2 and ATK & \nDEF 40%{passiveImg:up_g}\n*When attacking*\n- ATK 100%{passiveImg:up_g}\n*When receiving an attack*\n- DEF 100%{passiveImg:up_g}\n*For every Rainbow Ki Sphere obtained*\n- ATK 50%{passiveImg:up_g}\n- Damage reduction rate 5%{passiveImg:up_g}\n*For 4 turns from the character's entry turn*\n- Foresees enemy's Super Attack"
    },
    {
      id: 4030541,
      name: "Goku + Frieza (Final Form) (Angel)",
      element: 22,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Can perform Reversible Exchange with Frieza (Final Form) (Angel)\n- Ki +7 and ATK & DEF 200%{passiveImg:up_g}\n- Guards all attacks\n- Receives an additional Ki +2 per Rainbow Ki Sphere obtained\n*When attacking*\n- Launches an additional Super Attack when HP is 77% or more\n*When receiving an attack*\n- ATK & DEF 100%{passiveImg:up_g}\n- DEF 77%{passiveImg:up_g} when HP is 77% or more\n*For every Ki Sphere obtained*\n- ATK & DEF 17%{passiveImg:up_g}\n*With a Rainbow Ki Sphere obtained*\n- Damage reduction rate 59%{passiveImg:up_g}\n- Attacks are effective against all Types"
    },
    {
      id: 4030801,
      name: "Demon King Piccolo (Elder)",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- Extreme Class allies' ATK & DEF 40%{passiveImg:up_g}, plus an additional \nATK & DEF 20%{passiveImg:up_g} for characters who also belong to the \n\"Demonic Power\" Category\n- Receives an additional Ki +1 per Ki Sphere obtained\n*When attacking*\n- ATK & DEF 100%{passiveImg:up_g}\n*6 or more Ki Spheres obtained*\n- ATK & DEF 100%{passiveImg:up_g} for 3 turns\n*Per \"Demonic Power\" Category ally or Extreme Class ally on \nthe team (depending on which has more members)*\n- ATK & DEF 30%{passiveImg:up_g} when attacking (up to 150%)\n*When all allies attacking in the same turn are \"Demonic Power\" \nCategory characters, or when all allies are Extreme Class \ncharacters*\n- Guards all attacks\n- Changes Ki Spheres: INT to AGL\n- Randomly changes Ki Spheres of a certain Type (INT & AGL \nexcluded) to Rainbow Ki Spheres\n*As the 2nd or 3rd attacker in a turn*\n- High chance of evading enemy's attack"
    },
    {
      id: 4030811,
      name: "Demon King Piccolo",
      element: 20,
      rarity: 5,
      itemized_description: "*Basic effect(s)*\n- ATK & DEF 150%{passiveImg:up_g}\n- Extreme Class allies' ATK & DEF 30%{passiveImg:up_g}, plus an additional \nATK & DEF 30%{passiveImg:up_g} for characters who also belong to the \n\"Demonic Power\" Category\n- Receives an additional Ki +1 per Ki Sphere obtained\n- Guards all attacks\n- Changes Ki Spheres: INT to AGL\n- Randomly changes Ki Spheres of a certain Type (INT & AGL \nexcluded) to Rainbow Ki Spheres\n- High chance of evading enemy's attack\n*When attacking*\n- ATK & DEF 150%{passiveImg:up_g}\n*Per \"Demonic Power\" Category ally or Extreme Class ally on \nthe team (depending on which has more members)*\n- ATK & DEF 40%{passiveImg:up_g} when attacking (up to 200%)\n*When there is a Super Class enemy*\n- Performs a critical hit\n- {passiveImg:once}Extreme Class allies' chance of performing a \ncritical hit 66%{passiveImg:up_g} with 6 or more Ki Spheres obtained"
    }
  ]
}
export { mockData }; // Export mockData