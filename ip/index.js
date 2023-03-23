import axios from "axios"; //axios import

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

ipAdresimiAl().then(() => {
	const url = `https://apis.ergineer.com/ipgeoapi/${benimIP}`;

	axios
	.get(url)
	.then((response) => {
		console.log(response.data);
		const card = data(response.data);

		const cardsContainer = document.querySelector('.cards');

		cardsContainer.appendChild(card);
	})
	.catch((error) => {
		console.log(error);
	});

	function data(cardData) {
	const ulkeCard = document.createElement("div");
	ulkeCard.classList.add("card");

	const ulkeBayragi = document.createElement("img");
	ulkeBayragi.src = cardData.ülkebayrağı;
	ulkeCard.appendChild(ulkeBayragi);

	const ulkeData = document.createElement("div");
	ulkeData.classList.add("card-info");
	ulkeCard.appendChild(ulkeData);

	const ulkeIp = document.createElement("h3");
	ulkeIp.textContent = cardData.sorgu;
	ulkeData.appendChild(ulkeIp);

	const ulkeBilgi = document.createElement("p");
	ulkeBilgi.classList.add("ulke");
	ulkeBilgi.textContent = cardData.ülkeKodu;
	ulkeData.appendChild(ulkeBilgi);

	const ulkeEnlem = document.createElement("p");
	ulkeEnlem.textContent = `Enlem: ${cardData.enlem} Boylam: ${cardData.boylam}`;
	ulkeData.appendChild(ulkeEnlem);

	const ulkedekiSehir = document.createElement("p");
	ulkedekiSehir.textContent = `Şehir: ${cardData.şehir}`;
	ulkeData.appendChild(ulkedekiSehir);

	const ulkeSaatDilimi = document.createElement("p");
	ulkeSaatDilimi.textContent = cardData.saatdilimi;
	ulkeData.appendChild(ulkeSaatDilimi);

	const ulkeParaBirimi = document.createElement("p");
	ulkeParaBirimi.textContent = cardData.parabirimi;
	ulkeData.appendChild(ulkeParaBirimi);

	const ulkeIsp = document.createElement("p");
	ulkeIsp.textContent = cardData.isp;
	ulkeData.appendChild(ulkeIp);

	return ulkeCard;
	}
})
