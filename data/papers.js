/* The 20 WMA11 papers. Question images live encrypted in data/q/<id>.json. */
const PAPERS=[
 ["2025-10","October 2025",10],["2025-06","June 2025",10],["2025-01","January 2025",9],
 ["2024-10","October 2024",9],["2024-06","June 2024",11],["2024-01","January 2024",10],
 ["2023-10","October 2023",11],["2023-06","June 2023",10],["2023-01","January 2023",11],
 ["2022-10","October 2022",9],["2022-06","June 2022",10],["2022-01","January 2022",10],
 ["2021-10","October 2021",10],["2021-06","June 2021",9],["2021-01","January 2021",9],
 ["2020-10","October 2020",9],["2020-01","January 2020",11]
].map(([id,title,count])=>({id,title,count}));
