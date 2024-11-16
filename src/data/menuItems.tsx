import americano from "../assets/hotDrinks/americano.jpg";
import cafeMocha from "../assets/hotDrinks/cafemocha.jpg";
import latte from "../assets/hotDrinks/latte.jpg";
import capuccino from "../assets/hotDrinks/capuccino.png";
import caramelMocha from "../assets/hotDrinks/caramelmocha.jpg";
import chaiTeaLatte from "../assets/hotDrinks/chaitealatte.jpg";
import iceLatte from "../assets/coldDrinks/icelatte.jpg";
import iceAmericano from "../assets/coldDrinks/iceamericano.jpg";
import iceCaramelMocha from "../assets/coldDrinks/icecaramelmocha.jpg";
import iceMocha from "../assets/coldDrinks/icemocha.jpg";
import iceToffeenuth from "../assets/coldDrinks/icetoffeenuth.jpg";
import çilekFrozen from "../assets/coldDrinks/çilekfrozen.jpg";
import hindiFüme from "../assets/dessertAndSandviches/hindifüme.jpg";
import guacamole from "../assets/dessertAndSandviches/guacamole.jpg";
import kahvaltı from "../assets/dessertAndSandviches/kahvaltı.jpg";
import bolPeynir from "../assets/dessertAndSandviches/bolpeynirli.jpg";
import sanSebastian from "../assets/dessertAndSandviches/sansebastian.jpg";
import smoothieBowl from "../assets/dessertAndSandviches/smoothiebowl.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const hotDrinks: MenuItem[] = [
  {
    id: 1,
    name: "Americano",
    description:
      "Hafif ve yumuşak içimiyle sade kahve sevenler için idealdir. Espresso’ya göre daha az yoğun ama aromatik bir tada sahiptir. İtalya’da Amerikan askerlerinin espressoyu daha yumuşak hale getirmek için su eklemesiyle popülerleşmiştir.",
    image: americano,
  },
  {
    id: 2,
    name: "Cafe Mocha",
    description:
      "Cafe Mocha, espresso, sıcak çikolata ve buharda ısıtılmış sütle hazırlanan tatlı bir kahve türüdür. Üzerine genellikle krema eklenir ve çikolata sevenler için vazgeçilmez bir seçenektir. Yoğun çikolata aromasıyla latteye göre daha tatlı ve zengin bir lezzet sunar. Kahvenin yumuşak içimi, çikolata ve sütle birleşerek keyifli bir deneyim sağlar.",
    image: cafeMocha,
  },
  {
    id: 3,
    name: "Latte",
    description:
      "Latte, espresso ve sıcak sütle yapılan, yumuşak ve kremsi bir kahve türüdür. Süt miktarı fazla olduğundan, kahvenin tadı hafif ve kremsi olur.",
    image: latte,
  },
  {
    id: 4,
    name: "Capuccino",
    description:
      "Cappuccino, espresso, buharla ısıtılmış süt ve süt köpüğünün birleşimiyle yapılan bir kahvedir. Bu üç bileşen eşit oranda karıştırılır, bu da ona zengin ve kremamsı bir doku kazandırır.Güçlü bir kahve tadı ile süt ve köpüğün dengeli birleşimi, cappuccino'yu kahveseverler arasında popüler kılar.",
    image: capuccino,
  },
  {
    id: 5,
    name: "Caramel Mocha",
    description:
      "Caramel Mocha, espresso, sıcak çikolata ve sütle yapılan bir kahve karışımına zengin bir karamelli tat ekler. Bu tatlı ve kremsi kahve, genellikle üstü krema ve karamel sosu ile süslenir. Caramel Mocha, kahvenin acılığı ve çikolatanın tatlılığı arasındaki mükemmel dengeyi sunarken, karamelin eklediği tatlılıkla da ferahlatıcı bir içim deneyimi sağlar. Tatlı bir kahve arayanlar için ideal bir tercihtir.",
    image: caramelMocha,
  },
  {
    id: 6,
    name: "Chai Tea Latte",
    description:
      "Chai Tea Latte, Hindistan kökenli geleneksel bir çay olan masala chai`ın sütle harmanlanarak yapılan bir içecektir. Bu içecek, baharatlı ve tatlı bir lezzet profiline sahiptir; tarçın, zencefil, karanfil ve kakule gibi baharatlar, sıcak sütle karışarak yumuşak bir doku yaratır. Chai Tea Latte, yoğun baharatlı tatlarıyla rahatlatıcı ve ısınma hissi veren bir içecek olup, kahve tadından farklı bir deneyim arayanlar için mükemmel bir alternatiftir.",
    image: chaiTeaLatte,
  },
];

export const coldDrinks: MenuItem[] = [
  {
    id: 1,
    name: "Ice Latte",
    description:
      "Serinletici ve yumuşak, buz ve sütle hazırlanmış soğuk espresso, sıcak günlerde mükemmel bir kahve tadı sunar.",
    image: iceLatte,
  },
  {
    id: 2,
    name: "Ice Americano",
    description:
      "Espresso'nun buz ve suyla birleşimiyle hazırlanan, serinletici ve hafif acı bir kahve deneyimi.",
    image: iceAmericano,
  },
  {
    id: 3,
    name: "Ice Toffeenuth",
    description:
      "Soğuk espresso, fındık ve karamel aromasıyla tatlandırılmış, kremsi ve zengin bir kahve.",
    image: iceToffeenuth,
  },
  {
    id: 4,
    name: "Ice Caramel Mocha",
    description:
      "Espresso, soğuk süt, çikolata ve karamelin mükemmel birleşimiyle hazırlanan tatlı ve serinletici bir kahve.",
    image: iceCaramelMocha,
  },
  {
    id: 5,
    name: "Ice Mocha",
    description:
      "Soğuk espresso, süt ve yoğun çikolata ile hazırlanan, tatlı ve ferahlatıcı bir kahve.",
    image: iceMocha,
  },
  {
    id: 6,
    name: "Çilek Frozen",
    description:
      "Taze çilek, süt ve buz ile hazırlanan, serinletici ve kremamsı bir içecek.",
    image: çilekFrozen,
  },
];

export const dessertAndSandviches: MenuItem[] = [
  {
    id: 1,
    name: "Hindi Füme Sandviç",
    description:
      "Sarımsaklı aioli sosunun lezzetiyle harmanlanmış kıvırcık marul, taze salatalık, domates, kaşar peyniri ve hindi füme dilimleriyle hazırlanan, ferah ve doyurucu bir sandviç.",
    image: hindiFüme,
  },
  {
    id: 2,
    name: "Guacamole Sandviç",
    description:
      "Yumuşak avokado bazlı guacamole sosunun zengin lezzetiyle birleşen kıvırcık marul, taze cherry domates, cheddar peyniri ve dana jambon dilimleriyle hazırlanan nefis bir sandviç.",
    image: guacamole,
  },
  {
    id: 3,
    name: "Kahvaltı Sandviç",
    description:
      "Türk kahvaltısının vazgeçilmez lezzetleriyle hazırlanan bu sandviç, beyaz peynir, siyah ve yeşil zeytin dilimleriyle zenginleşiyor. Lütenitsa sosu, kahvaltılara özgü bir tat sunarak harika bir başlangıç yapmanızı sağlar. Sabah keyfi için mükemmel bir seçenek!",
    image: kahvaltı,
  },
  {
    id: 4,
    name: "Bol Peynirli Sandviç",
    description:
      "Kaşar peyniri, cheddar peyniri ve taze mozzarella ile hazırlanan bu sandviç, cherry domatesin taptaze lezzetiyle birleşiyor. Kıvırcık marul ve dereotu, ferah bir tat katarken, acı ketçap sosu ise son dokunuşu yaparak lezzetli bir deneyim sunuyor. Peynir severlerin favorisi olacak.",
    image: bolPeynir,
  },
  {
    id: 5,
    name: "San Sebastian",
    description:
      "Yumuşak, kremamsı kıvamı ve hafif yanmış dış yüzeyiyle San Sebastian Cheesecake, enfes bir tat deneyimi sunar. Taze peynirin zengin lezzeti, hafif bir yanıklıkla birleşerek damağınızda unutulmaz bir tat bırakır. Sade bir sunumla, tatlıya düşkün herkesin favorisi olacak.",
    image: sanSebastian,
  },
  {
    id: 6,
    name: "Smoothie Bowl",
    description:
      "Canlandırıcı ve besleyici bir kahvaltı veya atıştırmalık! Taze meyveler, yoğurt ve granola ile zenginleştirilmiş smoothie bowl, hem vitamin dolu hem de enerjik bir başlangıç sunar. Üzerindeki çıtır granola, meyve parçaları ve tohumlarla, her kaşıkta taze bir lezzet patlaması sağlar.",
    image: smoothieBowl,
  },
];
