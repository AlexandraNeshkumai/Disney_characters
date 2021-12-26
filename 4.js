function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}

$(document).ready(function()
{ 

	let a = getRandomInt(11); b = getRandomInt(11); c = getRandomInt(11); d = getRandomInt(11);
/*11*/
	let heroestexts =
	[
		'Император Кузко',
		'Лило Пелекаи',
		'Геркулес',
		'Юджин Фицерберт',
		'Мауи',
		'Финес Флинн',
		'Тарзан',
		'Ванилопа фон Кекс',
		'Мэйбл Пайнс',
		'Майк Вазовски',
		'Динь-Динь'
	];
	let heroesimages =
	[
		'kuzco.jpg',
	    'lilo.jpg',
		'gerk.jpg', 
		'god.jpg', 
		'maui.jpg',
		'phineas.jpg',
		'tarzan.jpg', 
		'vanilopa.jpg', 
		'meibl.jpg',
		'mike.jpg',
		'dindin.jpg'
	];
	let heroeslinks =
	[
		'11.html#text2',
		'11.html#text3',
	    '11.html#text4',
	    '11.html#text5',
	    '11.html#text6',
	    '11.html#text7',
	    '11.html#text8',
	    '11.html#text9',
	    '11.html#text10',
	    '11.html#text11',
	    '11.html#text12',
	    '11.html#text13'
	]
/*12*/
	let villainstexts =
	[
		'Аид',
		'Капитан Крюк',
		'Стервелла Де Виль',
		'Злая королева',
		'Доктор Фасилье',
		'Фуфелшмертц',
		'Изма',
		'Малефисента',
		'Королева Червей',
		'Шрам',
		'Урсула'
	];
	let villainsimages =
	[
		'aid.jpg',
	    'CaptainHook.jpg',
		'cruella.jpg', 
		'evil.jpg', 
		'doc.jpg',
		'fuf.jpg',
		'izma.jpg', 
		'malefisenta.jpg', 
		'queen.jpg',
		'shram.jpg',
		'ursula.jpg'
	];
	let villainslinks =
	[
		'12.html#text2',
		'12.html#text3',
	    '12.html#text4',
	    '12.html#text5',
	    '12.html#text6',
	    '12.html#text7',
	    '12.html#text8',
	    '12.html#text9',
	    '12.html#text10',
	    '12.html#text11',
	    '12.html#text12',
	    '12.html#text13'
	]
/*13*/	
	let animalstexts =
	[
		'Балу',
		'Бемби',
		'Микки Маус',
		'Перри Утконос',
		'Реми',
		'Себастьян',
		'Симба',
		'Винни-Пух',
		'Немо',
		'Чёрный Плащ',
		'Дамбо'
	];
	let animalsimages =
	[
		'balu.jpg',
	    'bembi.jpg',
		'mikky.jpg', 
		'perry.jpg', 
		'remi.jpg',
		'seb.jpg',
		'simba.jpg', 
		'vinny.jpg', 
		'nemo.jpg',
		'black.jpg',
		'dambo.jpg'
	];
	let animalslinks =
	[
		'13.html#text2',
		'13.html#text3',
	    '13.html#text4',
	    '13.html#text5',
	    '13.html#text6',
	    '13.html#text7',
	    '13.html#text8',
	    '13.html#text9',
	    '13.html#text10',
	    '13.html#text11',
	    '13.html#text12',
	    '13.html#text13'
	]

/*14*/	
	let princesstexts =
	[
		'Ариэль',
		'Аврора',
		'Белль',
		'Золушка',
		'Белоснежка',
		'Жасмин',
		'Мулан',
		'Покахонтас',
		'Рапунцель',
		'Тиана',
		'Мерида'
	];
	let princessimages =
	[
		'ariel.jpg',
	    'avrora.jpg',
		'belle.jpg', 
		'cinderella.jpg', 
		'white.jpg',
		'jasmine.jpg',
		'mulan.jpg', 
		'pocahontas.jpg', 
		'raps.jpg',
		'tiana.jpg',
		'merida.jpg'
	];
	let princesslinks =
	[
		'14.html#text2',
		'14.html#text3',
	    '14.html#text4',
	    '14.html#text5',
	    '14.html#text6',
	    '14.html#text7',
	    '14.html#text8',
	    '14.html#text9',
	    '14.html#text10',
	    '14.html#text11',
	    '14.html#text12',
	    '14.html#text13'
	]

	function fill1(text, image, link)
	{
		$("div.supmain").append('<div class="main"><div class="inmainsup"><div class="pod" data-tooltip="При обновлении страницы изображения меняются">?</div><a href="'+ link + 
			'" class="inmain"><div id="imgmain1" class="imgback"><p class="imgback">Узнать больше</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain1").css
		({
		'background-image' : 'url(' + image + ')'
		});
		
	};
	function fill2(text, image, link)
	{
		$("div.supmain").append('<div class="main"><div class="inmainsup"><div class="pod" data-tooltip="При обновлении страницы изображения меняются">?</div><a href="'+ link + 
			'" class="inmain"><div id="imgmain2" class="imgback"><p class="imgback">Узнать больше</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain2").css
		({
		'background-image' : 'url(' + image + ')'
		});
		
	};
	function fill3(text, image, link)
	{
		$("div.supmain").append('<div class="main"><div class="inmainsup"><div class="pod" data-tooltip="При обновлении страницы изображения меняются">?</div><a href="'+ link + 
			'" class="inmain"><div id="imgmain3" class="imgback"><p class="imgback">Узнать больше</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain3").css
		({
		'background-image' : 'url(' + image + ')'
		});
	};
	function fill4(text, image, link)
	{
		$("div.supmain").append('<div class="main"><div class="inmainsup"><div class="pod" data-tooltip="При обновлении страницы изображения меняются">?</div><a href="'+ link + 
			'" class="inmain"><div id="imgmain4" class="imgback"><p class="imgback">Узнать больше</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain4").css
		({
		'background-image' : 'url(' + image + ')'
		});
	};

	fill1(heroestexts[a], heroesimages[a], heroeslinks[a]);
	fill2(villainstexts[b], villainsimages[b], villainslinks[b]);
	fill3(animalstexts[c], animalsimages[c], animalslinks[c]);
	fill4(princesstexts[d], princessimages[d], princesslinks[d]);
});