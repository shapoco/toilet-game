
const NUM_SELECTIONS = 4;

const DB = [
  { date: '2017-06-26', total: 33683, percent: [20.2, 25.7, 34.0, 20.1], url: 'https://twitter.com/shapoco/status/879654993464180737' },
  { date: '2017-12-28', total: 2393 , percent: [21.8, 26.8, 33.0, 18.4], url: 'https://twitter.com/shapoco/status/946651063930646528' },
  { date: '2018-08-08', total: 516  , percent: [23.8, 28.3, 28.1, 19.8], url: 'https://twitter.com/shapoco/status/1027508911635451904' },
  { date: '2018-09-12', total: 799  , percent: [25.4, 25.0, 26.7, 22.9], url: 'https://twitter.com/shapoco/status/1040383961971646464' },
  { date: '2019-09-13', total: 1656 , percent: [23.4, 22.7, 31.2, 22.8], url: 'https://twitter.com/shapoco/status/1172786466725888005' },
  { date: '2022-03-01', total: 1902 , percent: [20.1, 24.0, 34.1, 21.8], url: 'https://twitter.com/shapoco/status/1498658254800695296' },
  { date: '2022-05-04', total: 2508 , percent: [22.8, 22.6, 33.7, 20.9], url: 'https://twitter.com/shapoco/status/1521678675699449856' },
  { date: '2022-06-04', total: 2248 , percent: [21.0, 23.1, 30.6, 25.4], url: 'https://twitter.com/shapoco/status/1533000258502160384' },
  { date: '2022-09-10', total: 5957 , percent: [22.2, 23.0, 32.0, 22.8], url: 'https://twitter.com/shapoco/status/1568480685249396736' },
  { date: '2022-10-01', total: 1909 , percent: [25.1, 22.8, 28.5, 23.5], url: 'https://twitter.com/shapoco/status/1576014552533082113' },
  { date: '2022-12-06', total: 1537 , percent: [24.7, 20.9, 29.8, 24.5], url: 'https://twitter.com/shapoco/status/1600075980361838593' },
  { date: '2023-01-01', total: 1471 , percent: [22.9, 23.0, 29.6, 24.5], url: 'https://twitter.com/shapoco/status/1609215248455831552' },
  { date: '2023-02-04', total: 1334 , percent: [25.9, 22.0, 28.9, 23.2], url: 'https://twitter.com/shapoco/status/1621671362485170177' },
  { date: '2023-04-08', total: 1923 , percent: [24.0, 22.0, 29.2, 24.8], url: 'https://twitter.com/shapoco/status/1644648342880931841' },
  { date: '2023-07-01', total: 1590 , percent: [23.3, 22.6, 28.4, 25.7], url: 'https://twitter.com/shapoco/status/1674797515974266880' },
  { date: '2023-08-23', total: 1307 , percent: [25.8, 20.6, 29.7, 23.9], url: 'https://twitter.com/shapoco/status/1694335182193803569' },
  { date: '2023-09-02', total: 1212 , percent: [24.8, 24.7, 26.8, 23.7], url: 'https://twitter.com/shapoco/status/1697776784396464318' },
  { date: '2023-10-07', total: 6074 , percent: [24.1, 20.9, 30.3, 24.7], url: 'https://twitter.com/shapoco/status/1710526671714238640' },
  { date: '2023-11-30', total: 2819 , percent: [27.4, 22.3, 25.3, 25.0], url: 'https://twitter.com/shapoco/status/1729883593978310801' },
  { date: '2023-12-18', total: 27247, percent: [20.0, 23.2, 31.8, 25.0], url: 'https://twitter.com/shapoco/status/1736746682044621274' },
  { date: '2024-01-08', total: 2955 , percent: [24.6, 23.6, 26.1, 25.7], url: 'https://twitter.com/shapoco/status/1744323784340041956' },
  { date: '2024-02-03', total: 2998 , percent: [24.6, 22.5, 28.2, 24.6], url: 'https://twitter.com/shapoco/status/1753625497211437560' },
  { date: '2024-03-02', total: 2474 , percent: [25.0, 22.4, 26.0, 26.7], url: 'https://twitter.com/shapoco/status/1763849382020161947' },
  { date: '2024-04-13', total: 1809 , percent: [24.7, 22.9, 27.4, 25.0], url: 'https://twitter.com/shapoco/status/1778953371048894886' },
  { date: '2024-05-11', total: 1247 , percent: [28.5, 22.3, 23.1, 26.1], url: 'https://twitter.com/shapoco/status/1789068091047268596' },
  { date: '2024-05-18', total: 3990 , percent: [23.1, 23.2, 27.7, 25.9], url: 'https://x.com/shapoco/status/1791778254665490583' },
  { date: '2024-05-25', total: 722  , percent: [30.9, 25.5, 19.5, 24.1], url: 'https://x.com/shapoco/status/1794231821129195907' },
  { date: '2024-06-01', total: 1042 , percent: [23.0, 27.2, 23.3, 26.5], url: 'https://x.com/shapoco/status/1796801501819703456' },
  { date: '2024-06-08', total: 933  , percent: [26.3, 24.2, 22.6, 26.9], url: 'https://x.com/shapoco/status/1799303772596040065' },
  { date: '2024-06-15', total: 664  , percent: [27.4, 24.8, 22.4, 25.3], url: 'https://x.com/shapoco/status/1801898848404521444' },
  { date: '2024-06-22', total: 1042 , percent: [26.2, 22.5, 28.4, 22.9], url: 'https://x.com/shapoco/status/1804367099642700211' },
  { date: '2024-06-29', total: 968  , percent: [27.1, 24.1, 23.1, 25.7], url: 'https://x.com/shapoco/status/1806965181580538294' },
  { date: '2024-07-06', total: 892  , percent: [23.8, 26.3, 22.8, 27.1], url: 'https://x.com/shapoco/status/1809488058498384241' },
  { date: '2024-07-13', total: 1080 , percent: [24.9, 26.3, 24.5, 24.3], url: 'https://x.com/shapoco/status/1811998229413650670' },
  { date: '2024-07-20', total: 863  , percent: [31.3, 21.4, 24.7, 22.6], url: 'https://x.com/shapoco/status/1814551572028006650' },
  { date: '2024-07-27', total: 547  , percent: [28.7, 20.3, 24.5, 26.5], url: 'https://x.com/shapoco/status/1817109855506669917' },
  { date: '2024-08-03', total: 580  , percent: [28.8, 22.9, 24.8, 23.4], url: 'https://x.com/shapoco/status/1819670397111206299' },
  { date: '2024-08-10', total: 675  , percent: [25.2, 25.3, 25.5, 24.0], url: 'https://x.com/shapoco/status/1822264284451418490' },
  { date: '2024-08-17', total: 452  , percent: [24.6, 23.0, 23.7, 28.8], url: 'https://x.com/shapoco/status/1824657019590283316' },
  { date: '2024-08-24', total: 364  , percent: [25.5, 26.6, 24.2, 23.6], url: 'https://x.com/shapoco/status/1827257833949426167' },
  { date: '2024-08-31', total: 428  , percent: [28.5, 24.3, 24.3, 22.9], url: 'https://x.com/shapoco/status/1829769692715810854' },
  { date: '2024-09-07', total: 577  , percent: [25.3, 24.3, 25.8, 24.6], url: 'https://x.com/shapoco/status/1832305063496446081' },
  { date: '2024-09-14', total: 523  , percent: [27.2, 21.0, 26.4, 25.4], url: 'https://x.com/shapoco/status/1834886196318945531' },
  { date: '2024-09-22', total: 647  , percent: [24.6, 23.2, 27.4, 24.9], url: 'https://x.com/shapoco/status/1837679302743413151' },
  { date: '2024-09-28', total: 432  , percent: [28.9, 29.4, 18.3, 23.4], url: 'https://x.com/shapoco/status/1839919986133156036' },
  { date: '2024-10-05', total: 356  , percent: [25.8, 21.6, 23.3, 29.2], url: 'https://x.com/shapoco/status/1842541660917604626' },
  { date: '2024-10-12', total: 543  , percent: [30.6, 24.3, 20.6, 24.5], url: 'https://x.com/shapoco/status/1845097790642200929' },
  { date: '2024-10-20', total: 612  , percent: [24.2, 24.7, 27.8, 23.4], url: 'https://x.com/shapoco/status/1847816710847680990' },
  { date: '2024-10-26', total: 684  , percent: [26.8, 25.1, 25.6, 22.5], url: 'https://x.com/shapoco/status/1850157898841886900' },
  { date: '2024-11-03', total: 571  , percent: [27.7, 22.9, 24.0, 25.4], url: 'https://x.com/shapoco/status/1853067110827925893' },
  { date: '2024-11-09', total: 263  , percent: [25.5, 26.2, 22.8, 25.5], url: 'https://x.com/shapoco/status/1855252017498947686' },
  { date: '2024-11-16', total: 417  , percent: [28.5, 24.5, 25.4, 21.6], url: 'https://x.com/shapoco/status/1857601223983247567' },
  { date: '2024-11-23', total: 412  , percent: [20.6, 23.1, 27.4, 28.9], url: 'https://x.com/shapoco/status/1860291340686491768' },
  { date: '2024-11-30', total: 332  , percent: [23.8, 25.6, 26.2, 24.4], url: 'https://x.com/shapoco/status/1862771716520648915' },
  { date: '2024-12-07', total: 654  , percent: [25.4, 23.7, 26.1, 24.8], url: 'https://x.com/shapoco/status/1865389021570187607' },
  { date: '2024-12-14', total: 342  , percent: [28.7, 23.4, 23.1, 24.9], url: 'https://x.com/shapoco/status/1867898256589799570' },
  { date: '2024-12-21', total: 437  , percent: [25.6, 26.1, 22.0, 26.3], url: 'https://x.com/shapoco/status/1870437502634598769' },
  { date: '2024-12-28', total: 552  , percent: [26.1, 23.9, 23.0, 27.0], url: 'https://x.com/shapoco/status/1872918922753917329' },
  { date: '2025-01-04', total: 495  , percent: [21.0, 30.9, 25.7, 22.4], url: 'https://x.com/shapoco/status/1875475549533171968' },
  { date: '2025-01-11', total: 442  , percent: [26.2, 22.6, 22.2, 29.0], url: 'https://x.com/shapoco/status/1878066463518675030' },
  { date: '2025-01-18', total: 416  , percent: [26.9, 25.0, 24.0, 24.0], url: 'https://x.com/shapoco/status/1880611436558426324' },
  { date: '2025-01-26', total: 282  , percent: [24.8, 28.7, 20.6, 25.9], url: 'https://x.com/shapoco/status/1883437439991332963' },
  { date: '2025-02-01', total: 469  , percent: [26.9, 28.4, 20.3, 24.5], url: 'https://x.com/shapoco/status/1885548937488326831' },
  { date: '2025-02-08', total: 427  , percent: [26.5, 23.0, 24.4, 26.2], url: 'https://x.com/shapoco/status/1888100432293282163' },
  { date: '2025-02-15', total: 344  , percent: [25.6, 20.3, 30.8, 23.3], url: 'https://x.com/shapoco/status/1890584503472505101' },
  { date: '2025-02-22', total: 341  , percent: [28.4, 21.7, 24.0, 25.8], url: 'https://x.com/shapoco/status/1893169295603163576' },
  { date: '2025-03-01', total: 261  , percent: [26.1, 24.5, 25.3, 24.1], url: 'https://x.com/shapoco/status/1895696487063175641' },
  { date: '2025-03-08', total: 650  , percent: [25.4, 25.5, 24.2, 24.9], url: 'https://x.com/shapoco/status/1898235203837182202' },
  //{ date: '2025-xx-xx', total: 0, percent: null, url: null },
];
