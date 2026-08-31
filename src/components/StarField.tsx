"use client";

export default function StarField({
  variant = "loader",
  className = "",
}: {
  variant?: "loader" | "hero" | "footer" | "broad";
  className?: string;
}) {
  const variantClass =
    variant === "loader" ? "sf-loader" : variant === "footer" ? "sf-footer" : variant === "broad" ? "sf-broad" : "sf-hero";
  return (
    <div
      aria-hidden="true"
      className={`sf-container ${variantClass} ${className}`}
    >
      <div className="sf-stars sf-stars1" />
      <div className="sf-stars sf-stars2" />
      <div className="sf-stars sf-stars3" />
      <style>{`
        .sf-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        .sf-hero {
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 6%, var(--background)) 0%, var(--background) 100%);
          opacity: 0.18;
        }
        :where(.dark) .sf-hero {
          opacity: 0.28;
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 7%, #090a0f) 0%, #090a0f 100%);
        }
        .sf-footer {
          /* footer bottom — subtle but visible, theme tokens, pinned to bottom 280px, no block */
          top: auto;
          bottom: 0;
          height: 280px;
          left: 0;
          right: 0;
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 4%, var(--background)) 0%, transparent 72%);
          opacity: 1;
        }
        :where(.dark) .sf-footer {
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 5%, #090a0f) 0%, transparent 72%);
        }
        .sf-broad {
          /* broad page bottom — same theme tokens but full-width, taller, not clipped to footer */
          top: auto;
          bottom: 0;
          height: 520px;
          left: 0;
          right: 0;
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 5%, var(--background)) 0%, transparent 70%);
          opacity: 1;
        }
        :where(.dark) .sf-broad {
          background: radial-gradient(ellipse at bottom, color-mix(in srgb, var(--foreground) 6%, #090a0f) 0%, transparent 70%);
        }
        .sf-loader {
          background: radial-gradient(ellipse at bottom, #231323 0%, #090a0f 78%, #080808 100%);
          opacity: 0.9;
        }
        .sf-stars {
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
          border-radius: 999px;
        }
        .sf-stars1 {
          width: 1px;
          height: 1px;
          box-shadow:
            501px 811px var(--sf-star), 1450px 1324px var(--sf-star), 1093px 1780px var(--sf-star),
            367px 1734px var(--sf-star), 1343px 156px var(--sf-star), 1062px 378px var(--sf-star),
            1543px 11px var(--sf-star), 1078px 181px var(--sf-star), 34px 382px var(--sf-star),
            1221px 1584px var(--sf-star), 1731px 1959px var(--sf-star), 80px 712px var(--sf-star),
            574px 1502px var(--sf-star), 1121px 1797px var(--sf-star), 1523px 109px var(--sf-star),
            865px 1064px var(--sf-star), 62px 729px var(--sf-star), 661px 1628px var(--sf-star),
            1296px 129px var(--sf-star), 665px 1531px var(--sf-star), 1597px 1576px var(--sf-star),
            638px 805px var(--sf-star), 24px 1152px var(--sf-star), 557px 524px var(--sf-star),
            251px 458px var(--sf-star), 728px 697px var(--sf-star), 1046px 1196px var(--sf-star),
            810px 1092px var(--sf-star), 406px 18px var(--sf-star), 13px 1767px var(--sf-star),
            22px 885px var(--sf-star), 1343px 1921px var(--sf-star), 918px 1536px var(--sf-star),
            1521px 1212px var(--sf-star), 73px 1201px var(--sf-star), 184px 1990px var(--sf-star),
            611px 908px var(--sf-star), 748px 1713px var(--sf-star), 386px 575px var(--sf-star),
            651px 1683px var(--sf-star), 1396px 1743px var(--sf-star), 658px 1461px var(--sf-star),
            171px 97px var(--sf-star), 330px 257px var(--sf-star), 383px 1428px var(--sf-star),
            234px 1888px var(--sf-star), 401px 275px var(--sf-star), 524px 1297px var(--sf-star),
            874px 1811px var(--sf-star), 1191px 568px var(--sf-star), 61px 223px var(--sf-star),
            1373px 717px var(--sf-star), 991px 1414px var(--sf-star), 108px 172px var(--sf-star),
            444px 1822px var(--sf-star), 30px 1839px var(--sf-star), 1618px 1964px var(--sf-star),
            728px 448px var(--sf-star), 691px 818px var(--sf-star), 1241px 1975px var(--sf-star),
            1730px 590px var(--sf-star), 1613px 909px var(--sf-star), 470px 352px var(--sf-star),
            1842px 518px var(--sf-star), 933px 80px var(--sf-star), 168px 1014px var(--sf-star),
            1481px 168px var(--sf-star), 774px 1041px var(--sf-star), 430px 158px var(--sf-star),
            1605px 1444px var(--sf-star), 889px 892px var(--sf-star), 828px 109px var(--sf-star),
            906px 63px var(--sf-star), 1414px 679px var(--sf-star), 446px 430px var(--sf-star),
            840px 326px var(--sf-star), 1585px 135px var(--sf-star), 1174px 574px var(--sf-star),
            759px 639px var(--sf-star), 1389px 700px var(--sf-star), 1611px 1586px var(--sf-star),
            585px 1566px var(--sf-star), 1163px 1382px var(--sf-star), 961px 1785px var(--sf-star),
            11px 964px var(--sf-star), 51px 198px var(--sf-star), 981px 595px var(--sf-star),
            920px 493px var(--sf-star), 40px 840px var(--sf-star), 367px 1494px var(--sf-star),
            1456px 865px var(--sf-star), 525px 1432px var(--sf-star), 1319px 402px var(--sf-star),
            1955px 478px var(--sf-star), 1045px 463px var(--sf-star), 1666px 1561px var(--sf-star),
            434px 98px var(--sf-star), 1071px 855px var(--sf-star), 871px 1425px var(--sf-star),
            273px 1538px var(--sf-star), 664px 352px var(--sf-star), 1487px 1707px var(--sf-star),
            1196px 333px var(--sf-star), 40px 456px var(--sf-star), 917px 1401px var(--sf-star),
            542px 469px var(--sf-star), 323px 778px var(--sf-star), 1587px 1953px var(--sf-star),
            871px 1425px var(--sf-star);
          animation: sfAnim 90s linear infinite;
        }
        .sf-stars1:after {
          content: " ";
          position: absolute;
          top: 2000px;
          width: 1px; height: 1px;
          background: transparent;
          box-shadow:
            501px 811px var(--sf-star), 1450px 1324px var(--sf-star), 1093px 1780px var(--sf-star),
            367px 1734px var(--sf-star), 1343px 156px var(--sf-star), 1062px 378px var(--sf-star),
            1543px 11px var(--sf-star), 1078px 181px var(--sf-star), 34px 382px var(--sf-star),
            1221px 1584px var(--sf-star), 1731px 1959px var(--sf-star), 80px 712px var(--sf-star),
            574px 1502px var(--sf-star), 1121px 1797px var(--sf-star), 1523px 109px var(--sf-star),
            865px 1064px var(--sf-star), 62px 729px var(--sf-star), 661px 1628px var(--sf-star),
            1296px 129px var(--sf-star), 665px 1531px var(--sf-star), 1597px 1576px var(--sf-star),
            638px 805px var(--sf-star), 24px 1152px var(--sf-star), 557px 524px var(--sf-star),
            251px 458px var(--sf-star), 728px 697px var(--sf-star), 1046px 1196px var(--sf-star),
            810px 1092px var(--sf-star), 406px 18px var(--sf-star), 13px 1767px var(--sf-star),
            22px 885px var(--sf-star), 1343px 1921px var(--sf-star), 918px 1536px var(--sf-star),
            1521px 1212px var(--sf-star), 73px 1201px var(--sf-star), 184px 1990px var(--sf-star),
            611px 908px var(--sf-star), 748px 1713px var(--sf-star), 386px 575px var(--sf-star),
            651px 1683px var(--sf-star), 1396px 1743px var(--sf-star), 658px 1461px var(--sf-star),
            171px 97px var(--sf-star), 330px 257px var(--sf-star), 383px 1428px var(--sf-star),
            234px 1888px var(--sf-star), 401px 275px var(--sf-star), 524px 1297px var(--sf-star),
            874px 1811px var(--sf-star), 1191px 568px var(--sf-star), 61px 223px var(--sf-star),
            1373px 717px var(--sf-star), 991px 1414px var(--sf-star), 108px 172px var(--sf-star),
            444px 1822px var(--sf-star), 30px 1839px var(--sf-star), 1618px 1964px var(--sf-star),
            728px 448px var(--sf-star), 691px 818px var(--sf-star), 1241px 1975px var(--sf-star),
            1730px 590px var(--sf-star), 1613px 909px var(--sf-star), 470px 352px var(--sf-star),
            1842px 518px var(--sf-star), 933px 80px var(--sf-star), 168px 1014px var(--sf-star),
            1481px 168px var(--sf-star), 774px 1041px var(--sf-star), 430px 158px var(--sf-star),
            1605px 1444px var(--sf-star), 889px 892px var(--sf-star), 828px 109px var(--sf-star),
            906px 63px var(--sf-star), 1414px 679px var(--sf-star), 446px 430px var(--sf-star),
            840px 326px var(--sf-star), 1585px 135px var(--sf-star), 1174px 574px var(--sf-star),
            759px 639px var(--sf-star), 1389px 700px var(--sf-star), 1611px 1586px var(--sf-star),
            585px 1566px var(--sf-star), 1163px 1382px var(--sf-star), 961px 1785px var(--sf-star),
            11px 964px var(--sf-star), 51px 198px var(--sf-star), 981px 595px var(--sf-star),
            920px 493px var(--sf-star), 40px 840px var(--sf-star), 367px 1494px var(--sf-star),
            1456px 865px var(--sf-star), 525px 1432px var(--sf-star), 1319px 402px var(--sf-star),
            1955px 478px var(--sf-star), 1045px 463px var(--sf-star), 1666px 1561px var(--sf-star),
            434px 98px var(--sf-star), 1071px 855px var(--sf-star), 871px 1425px var(--sf-star),
            273px 1538px var(--sf-star), 664px 352px var(--sf-star), 1487px 1707px var(--sf-star),
            1196px 333px var(--sf-star), 40px 456px var(--sf-star), 917px 1401px var(--sf-star),
            542px 469px var(--sf-star), 323px 778px var(--sf-star), 1587px 1953px var(--sf-star),
            871px 1425px var(--sf-star);
        }
        .sf-stars2 {
          width: 2px; height: 2px;
          box-shadow:
            1925px 1320px var(--sf-star), 1016px 711px var(--sf-star), 661px 1919px var(--sf-star),
            1275px 140px var(--sf-star), 853px 1757px var(--sf-star), 258px 1404px var(--sf-star),
            147px 881px var(--sf-star), 1425px 1278px var(--sf-star), 1371px 1980px var(--sf-star),
            939px 1922px var(--sf-star), 1938px 1001px var(--sf-star), 440px 1341px var(--sf-star),
            704px 1318px var(--sf-star), 1286px 522px var(--sf-star), 428px 1805px var(--sf-star),
            1548px 432px var(--sf-star), 620px 123px var(--sf-star), 1454px 1234px var(--sf-star),
            74px 1772px var(--sf-star), 1498px 1251px var(--sf-star), 1674px 676px var(--sf-star),
            1189px 877px var(--sf-star), 1952px 1097px var(--sf-star), 1273px 1255px var(--sf-star),
            274px 387px var(--sf-star), 464px 358px var(--sf-star), 1665px 831px var(--sf-star),
            857px 1471px var(--sf-star), 43px 1870px var(--sf-star), 731px 1388px var(--sf-star),
            608px 719px var(--sf-star), 1355px 1648px var(--sf-star), 379px 488px var(--sf-star),
            1880px 1354px var(--sf-star), 6px 290px var(--sf-star), 1198px 1709px var(--sf-star),
            708px 331px var(--sf-star), 758px 1061px var(--sf-star), 800px 1538px var(--sf-star),
            1289px 730px var(--sf-star), 3px 857px var(--sf-star), 1343px 673px var(--sf-star),
            934px 1387px var(--sf-star);
          animation: sfAnim 140s linear infinite;
        }
        .sf-stars2:after {
          content: " "; position: absolute; top: 2000px; width: 2px; height: 2px; background: transparent;
          box-shadow:
            1925px 1320px var(--sf-star), 1016px 711px var(--sf-star), 661px 1919px var(--sf-star),
            1275px 140px var(--sf-star), 853px 1757px var(--sf-star), 258px 1404px var(--sf-star),
            147px 881px var(--sf-star), 1425px 1278px var(--sf-star), 1371px 1980px var(--sf-star),
            939px 1922px var(--sf-star), 1938px 1001px var(--sf-star), 440px 1341px var(--sf-star),
            704px 1318px var(--sf-star), 1286px 522px var(--sf-star), 428px 1805px var(--sf-star),
            1548px 432px var(--sf-star), 620px 123px var(--sf-star), 1454px 1234px var(--sf-star),
            74px 1772px var(--sf-star), 1498px 1251px var(--sf-star), 1674px 676px var(--sf-star),
            1189px 877px var(--sf-star), 1952px 1097px var(--sf-star), 1273px 1255px var(--sf-star),
            274px 387px var(--sf-star), 464px 358px var(--sf-star), 1665px 831px var(--sf-star),
            857px 1471px var(--sf-star), 43px 1870px var(--sf-star), 731px 1388px var(--sf-star),
            608px 719px var(--sf-star), 1355px 1648px var(--sf-star), 379px 488px var(--sf-star),
            1880px 1354px var(--sf-star), 6px 290px var(--sf-star), 1198px 1709px var(--sf-star),
            708px 331px var(--sf-star), 758px 1061px var(--sf-star), 800px 1538px var(--sf-star),
            1289px 730px var(--sf-star), 3px 857px var(--sf-star), 1343px 673px var(--sf-star),
            1096px 1412px var(--sf-star), 934px 1387px var(--sf-star);
        }
        .sf-stars3 {
          width: 2.5px; height: 2.5px;
          box-shadow:
            200px 981px var(--sf-star), 132px 1039px var(--sf-star), 899px 1226px var(--sf-star),
            1507px 1120px var(--sf-star), 1424px 285px var(--sf-star), 264px 297px var(--sf-star),
            764px 282px var(--sf-star), 52px 1299px var(--sf-star), 1950px 626px var(--sf-star),
            1888px 1195px var(--sf-star), 872px 1357px var(--sf-star), 450px 415px var(--sf-star),
            324px 1895px var(--sf-star), 890px 281px var(--sf-star), 1900px 1132px var(--sf-star),
            741px 121px var(--sf-star), 1682px 332px var(--sf-star), 192px 1921px var(--sf-star),
            466px 1266px var(--sf-star), 785px 1654px var(--sf-star), 287px 1272px var(--sf-star);
          animation: sfAnim 200s linear infinite;
        }
        .sf-stars3:after {
          content: " "; position: absolute; top: 2000px; width: 2.5px; height: 2.5px; background: transparent;
          box-shadow:
            200px 981px var(--sf-star), 132px 1039px var(--sf-star), 899px 1226px var(--sf-star),
            1507px 1120px var(--sf-star), 1424px 285px var(--sf-star), 264px 297px var(--sf-star),
            764px 282px var(--sf-star), 52px 1299px var(--sf-star), 1950px 626px var(--sf-star),
            1888px 1195px var(--sf-star), 872px 1357px var(--sf-star), 450px 415px var(--sf-star),
            324px 1895px var(--sf-star), 890px 281px var(--sf-star), 1900px 1132px var(--sf-star),
            741px 121px var(--sf-star), 1682px 332px var(--sf-star), 192px 1921px var(--sf-star),
            466px 1266px var(--sf-star), 785px 1654px var(--sf-star), 287px 1272px var(--sf-star);
        }
        .sf-hero { --sf-star: color-mix(in srgb, var(--foreground) 16%, transparent); }
        :where(.dark) .sf-hero { --sf-star: color-mix(in srgb, var(--foreground) 22%, transparent); }
        .sf-footer { --sf-star: color-mix(in srgb, var(--foreground) 38%, transparent); }
        :where(.dark) .sf-footer { --sf-star: color-mix(in srgb, var(--foreground) 48%, transparent); }
        .sf-broad { --sf-star: color-mix(in srgb, var(--foreground) 32%, transparent); }
        :where(.dark) .sf-broad { --sf-star: color-mix(in srgb, var(--foreground) 42%, transparent); }
        .sf-loader { --sf-star: rgba(255,255,255,0.9); }
        @keyframes sfAnim {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sf-stars, .sf-stars:after { animation: none; }
        }
      `}</style>
    </div>
  );
}
