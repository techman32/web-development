const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

/* ==============================
   ============= PANTS ==========
   ============================== */

ctx.beginPath();
ctx.rect(175, 395, 160, 30);
ctx.fillStyle = "#3b75c6";
ctx.fill();

/* ==============================
   ============= LEGS ===========
   ============================== */

ctx.beginPath();
ctx.moveTo(160, 426);
ctx.quadraticCurveTo(210, 410, 254, 423);
ctx.quadraticCurveTo(320, 412, 350, 428);
ctx.lineTo(160, 426);
ctx.fillStyle = "#312c30";
ctx.fill();

/* ==============================
   ============ JACKET ==========
   ============================== */

ctx.beginPath();
ctx.moveTo(174, 293);
ctx.quadraticCurveTo( 150, 320, 145, 362);
ctx.lineTo(173, 362);
ctx.lineTo(164, 394);
ctx.quadraticCurveTo( 230, 420, 334, 396);
ctx.lineTo(357, 365);
ctx.quadraticCurveTo(350, 320, 326, 292);
ctx.quadraticCurveTo(250, 350, 174, 292);
ctx.fillStyle = "#d06d5e";
ctx.fill();

/* ==============================
   ========= JACKET LINES =======
   ============================== */

ctx.beginPath();
ctx.moveTo(173, 362);
ctx.lineTo(180, 340);
ctx.moveTo(326, 368);
ctx.lineTo(322, 342);
ctx.moveTo(254, 336);
ctx.lineTo(251, 407);
ctx.stroke();

ctx.fillStyle = "black000";

ctx.beginPath();
ctx.arc(242, 365, 2, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(244, 342, 2, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(240, 390, 2, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.ellipse(290, 316, 12, 40, Math.PI * 0.361, 0, 2 * Math.PI);
ctx.fillStyle = "#ff1d3d";
ctx.fill();

ctx.beginPath();
ctx.moveTo(174, 293);
ctx.bezierCurveTo(210, 336, 270, 350, 248, 322);
ctx.quadraticCurveTo(225, 325, 174, 293);
ctx.fill();

/* ==============================
   ============ HANDS ===========
   ============================== */

ctx.beginPath();
ctx.arc(159, 373, 18, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(172, 368, 8, 0, 2 * Math.PI);
ctx.fill();
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.arc(343, 378, 18, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(328, 376, 8, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

/* ==============================
   ============ FACE ============
   ============================== */

ctx.beginPath();
ctx.arc(250, 202, 118, 1.91 * Math.PI, 1.06 * Math.PI);
ctx.fillStyle = "#ffebbf";
ctx.fill();
/* ==============================
   ============ EYES ============
   ============================== */

ctx.beginPath();
ctx.ellipse(219, 218, 30, 36, Math.PI / 6, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 203);
ctx.quadraticCurveTo(250, 220, 252, 220);
ctx.strokeStyle = "#a09d9d";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(282, 216, 30, 36, -Math.PI / 6, 0, 2 * Math.PI);
ctx.fill();

/* ==============================
   =========== TEETHS ===========
   ============================== */

ctx.beginPath();
ctx.moveTo(224, 280);
ctx.lineTo(287, 278);
ctx.lineTo(274, 289);
ctx.lineTo(232, 289);
ctx.lineTo(224, 280);
ctx.fill();
ctx.lineWidth = 1;
ctx.moveTo(242, 289);
ctx.lineTo(242, 279);
ctx.moveTo(256, 289);
ctx.lineTo(256, 280);
ctx.moveTo(268, 289);
ctx.lineTo(272, 279);
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.arc(228, 220, 3, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(268, 219, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(232, 289);
ctx.lineTo(256, 305);
ctx.lineTo(274, 289);
ctx.fill();

/* ==============================
   ============ HEAD ============
   ============================== */

ctx.beginPath();
ctx.arc(250, 198, 115, 1.06 * Math.PI, 1.91 * Math.PI);
ctx.fillStyle = "#3a74c5";
ctx.fill();

ctx.beginPath();
ctx.moveTo(130, 202);
ctx.quadraticCurveTo(250, 162, 368, 192);
ctx.lineTo(368, 168);
ctx.quadraticCurveTo(250, 135, 130, 178);
ctx.fillStyle = "#ff2040";
ctx.fill();

ctx.beginPath();
ctx.moveTo(172, 192);
ctx.lineTo(198, 168);
ctx.lineWidth = 3;
ctx.stroke();
ctx.moveTo(318, 186);
ctx.lineTo(290, 166);
ctx.lineWidth = 3;
ctx.stroke();


ctx.beginPath();
ctx.moveTo(211, 86);
ctx.lineTo(264, 84);
ctx.moveTo(213, 77);
ctx.lineTo(264, 93);
ctx.moveTo(217, 68);
ctx.lineTo(257, 103);
ctx.moveTo(225, 62);
ctx.lineTo(249, 109);
ctx.moveTo(234, 59);
ctx.lineTo(238, 110);
ctx.moveTo(244, 60);
ctx.lineTo(230, 110);
ctx.moveTo(253, 67);
ctx.lineTo(220, 106);
ctx.moveTo(260, 72);
ctx.lineTo(215, 98);
ctx.lineCap = "round";
ctx.lineWidth = 5;
ctx.strokeStyle = "#fd203f";
ctx.stroke();




/* ==============================
   ============ LEGS ============
   ============================== */

ctx.beginPath();
ctx.moveTo(448, 378);
ctx.lineTo(460, 420);
ctx.lineTo(758, 425);
ctx.lineTo(770, 380);
ctx.lineTo(448, 378);
ctx.fillStyle = "#83462b";
ctx.fill();

/* ==============================
   ============ BOOTS ===========
   ============================== */

ctx.beginPath();
ctx.moveTo(452, 420);
ctx.quadraticCurveTo(550, 400, 616, 420);
ctx.quadraticCurveTo(700, 400, 770, 425);
ctx.lineTo(452, 426);
ctx.fillStyle = "#2c2937";
ctx.fill();

/* ==============================
   ============ BODY ============
   ============================== */

ctx.beginPath();
ctx.moveTo(490, 230);
ctx.arcTo(468, 230, 430, 260, 50);
ctx.lineTo(410, 300);
ctx.lineTo(430, 330);
ctx.arcTo(440, 373, 455, 385, 25);
ctx.lineTo(480, 398);
ctx.arcTo(500, 405, 680, 410, 120);
ctx.lineTo(640, 405);
ctx.arcTo(660, 405, 670, 400, 50);
ctx.quadraticCurveTo(690, 390, 770, 380);
ctx.quadraticCurveTo(800, 365, 795, 335);
ctx.lineTo(795, 270 );
ctx.quadraticCurveTo(775, 240, 750, 235);
ctx.fillStyle = "#ff1f41";
ctx.fill();

ctx.beginPath();
ctx.ellipse(610, 190, 150, 125, 0, 1.02 * Math.PI, 1.93 * Math.PI);
ctx.quadraticCurveTo(600, 100, 460, 184);
ctx.fillStyle = "#00b9c7";
ctx.fill();

ctx.beginPath();
ctx.ellipse(610, 190, 150, 125, 0, 1.93 * Math.PI, 1.02 * Math.PI);
ctx.quadraticCurveTo(600, 100, 756, 164);
ctx.fillStyle = "#ffeec5";
ctx.fill();

ctx.beginPath();
ctx.moveTo(457, 180);
ctx.quadraticCurveTo(600, 95, 760, 160);
ctx.lineTo(760, 170);
ctx.quadraticCurveTo(600, 110, 457, 188);
ctx.fillStyle = "#ffe01d";
ctx.fill();

ctx.beginPath();
ctx.moveTo(589, 70);
ctx.lineTo(585, 78);
ctx.quadraticCurveTo(595, 80, 605, 75);
ctx.quadraticCurveTo(615, 85, 630, 75);
ctx.bezierCurveTo(642, 78, 655, 70, 630, 60);
ctx.quadraticCurveTo(615, 50, 608, 56);
ctx.quadraticCurveTo(595, 50, 580, 60);
ctx.bezierCurveTo(535, 80, 575, 88, 589, 70);
ctx.fill();

ctx.beginPath();
ctx.moveTo(470, 340);
ctx.lineTo(440, 340);
ctx.bezierCurveTo(390, 335, 405, 300, 410, 295);
ctx.bezierCurveTo(420, 272, 460, 300, 475, 310);
ctx.bezierCurveTo(480, 320, 500, 330, 470, 340);
ctx.fill();


ctx.beginPath();
ctx.moveTo(808, 280);
ctx.lineTo(814, 308);
ctx.bezierCurveTo(818, 330, 790, 345, 762, 325);
ctx.bezierCurveTo(738, 330, 738, 315, 755, 300);
ctx.bezierCurveTo(760, 275, 780, 270, 808, 280);
ctx.fill();

ctx.beginPath();
ctx.moveTo(559, 156);
ctx.quadraticCurveTo(595, 129, 615, 165);
ctx.moveTo(621, 165);
ctx.quadraticCurveTo(640, 137, 669, 153);
ctx.strokeStyle = "#a09d9d";
ctx.stroke();

ctx.beginPath();
ctx.ellipse(580, 185, 36, 43, Math.PI / 6, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.moveTo(619, 190);
ctx.quadraticCurveTo(616, 180, 619, 172);
ctx.stroke();

ctx.beginPath();
ctx.ellipse(655, 188, 36, 43, -Math.PI / 6, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.moveTo(630, 315);
ctx.lineTo(628, 406);
ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();

/* ==============================
   ============ TEETHS ============
   ============================== */

ctx.beginPath();
ctx.moveTo(598, 258);
ctx.lineTo(636, 261);
ctx.lineTo(634, 269);
ctx.lineTo(595, 267);
ctx.lineTo(598, 258);
ctx.fill();
ctx.lineWidth = 3;
ctx.lineJoin = "round";
ctx.stroke();

/* ==============================
   ============ MOUTH ===========
   ============================== */

ctx.beginPath();
ctx.moveTo(596, 268);
ctx.lineTo(588, 263);
ctx.lineTo(597, 258);
ctx.moveTo(595, 268);
ctx.lineTo(605, 280);
ctx.lineTo(618, 284);
ctx.lineTo(630, 284);
ctx.lineTo(635, 269);
ctx.fillStyle = "black";
ctx.fill();
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(608, 268);
ctx.lineTo(608, 260);
ctx.moveTo(620, 268);
ctx.lineTo(620, 260);
ctx.moveTo(593, 286);
ctx.quadraticCurveTo(610, 292, 648, 286);
ctx.moveTo(494, 255);
ctx.quadraticCurveTo(615, 350, 734, 247);
ctx.lineWidth = 1;
ctx.stroke();

/* ==============================
   =========== PUPILS ===========
   ============================== */

ctx.beginPath();
ctx.arc(592, 185, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(639, 187, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

/* ==============================
   ============ KNOBS ===========
   ============================== */

ctx.beginPath();
ctx.ellipse(620, 320, 2, 4, 0, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.ellipse(623, 356, 2, 4, 0, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.ellipse(619, 390, 2, 4, 0, 0, 2 * Math.PI);
ctx.fill();