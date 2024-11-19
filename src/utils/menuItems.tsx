type MenuItem = Record<
  string,
  {
    id: number;
    name: string;
    description: string;
    image: string;
  }
>;

type MenuItems = {
  hotDrinks: MenuItem;
  coldDrinks: MenuItem;
  sandwiches: MenuItem;
  desserts: MenuItem;
};

const items: MenuItems = {
  hotDrinks: {},
  coldDrinks: {},
  sandwiches: {},
  desserts: {},
};

// # Hot Drinks ---------------- //
items.hotDrinks = {
  1: {
    id: 1,
    name: "Americano",
    description:
      "Hafif ve yumuşak içimiyle sade kahve sevenler için idealdir. Espresso’ya göre daha az yoğun ama aromatik bir tada sahiptir. İtalya’da Amerikan askerlerinin espressoyu daha yumuşak hale getirmek için su eklemesiyle popülerleşmiştir.",
    image: "/assets/hotDrinks/americano.jpg",
  },
  2: {
    id: 2,
    name: "Cafe Mocha",
    description:
      "Cafe Mocha, espresso, sıcak çikolata ve buharda ısıtılmış sütle hazırlanan tatlı bir kahve türüdür. Üzerine genellikle krema eklenir ve çikolata sevenler için vazgeçilmez bir seçenektir. Yoğun çikolata aromasıyla latteye göre daha tatlı ve zengin bir lezzet sunar. Kahvenin yumuşak içimi, çikolata ve sütle birleşerek keyifli bir deneyim sağlar.",
    image: "/assets/hotDrinks/cafemocha.jpg",
  },
  3: {
    id: 3,
    name: "Latte",
    description:
      "Latte, espresso ve sıcak sütle yapılan, yumuşak ve kremsi bir kahve türüdür. Süt miktarı fazla olduğundan, kahvenin tadı hafif ve kremsi olur.",
    image: "/assets/hotDrinks/latte.jpg",
  },
  4: {
    id: 4,
    name: "Capuccino",
    description:
      "Cappuccino, espresso, buharla ısıtılmış süt ve süt köpüğünün birleşimiyle yapılan bir kahvedir. Bu üç bileşen eşit oranda karıştırılır, bu da ona zengin ve kremamsı bir doku kazandırır.Güçlü bir kahve tadı ile süt ve köpüğün dengeli birleşimi, cappuccino'yu kahveseverler arasında popüler kılar.",
    image: "/assets/hotDrinks/capuccino.png",
  },
  5: {
    id: 5,
    name: "Caramel Mocha",
    description:
      "Caramel Mocha, espresso, sıcak çikolata ve sütle yapılan bir kahve karışımına zengin bir karamelli tat ekler. Bu tatlı ve kremsi kahve, genellikle üstü krema ve karamel sosu ile süslenir. Caramel Mocha, kahvenin acılığı ve çikolatanın tatlılığı arasındaki mükemmel dengeyi sunarken, karamelin eklediği tatlılıkla da ferahlatıcı bir içim deneyimi sağlar. Tatlı bir kahve arayanlar için ideal bir tercihtir.",
    image: "/assets/hotDrinks/caramelmocha.jpg",
  },
  6: {
    id: 6,
    name: "Chai Tea Latte",
    description:
      "Chai Tea Latte, Hindistan kökenli geleneksel bir çay olan masala chai`ın sütle harmanlanarak yapılan bir içecektir. Bu içecek, baharatlı ve tatlı bir lezzet profiline sahiptir; tarçın, zencefil, karanfil ve kakule gibi baharatlar, sıcak sütle karışarak yumuşak bir doku yaratır. Chai Tea Latte, yoğun baharatlı tatlarıyla rahatlatıcı ve ısınma hissi veren bir içecek olup, kahve tadından farklı bir deneyim arayanlar için mükemmel bir alternatiftir.",
    image: "/assets/hotDrinks/chaitealatte.jpg",
  },
  7: {
    id: 7,
    name: "Coco Pican",
    description:
      "Cocopican, tropik esintiler sunan, hindistan cevizi ve ananasın mükemmel uyumuyla hazırlanmış ferahlatıcı bir içecektir. Egzotik lezzet arayanlar için hem hafif hem de tatlı bir alternatif",
    image: "/assets/hotDrinks/cocopican.jpg",
  },
  8: {
    id: 8,
    name: "Cookie Caramel",
    description:
      "Cookie Caramel içeceği, zengin karamelin tatlılığı ve gevrek kurabiye parçacıklarının mükemmel birleşimiyle damaklarda unutulmaz bir lezzet bırakır. Kahve veya süt bazlı içeceklerle sunulan bu içecek, tatlı sevenler için mükemmel bir tercihtir.",
    image: "/assets/hotDrinks/cookiecaramel.jpg",
  },
  9: {
    id: 9,
    name: "Cortado",
    description:
      "Cortado, yoğun bir espresso ile süt karışımının mükemmel dengede olduğu, güçlü kahve tadını sevip aynı zamanda biraz yumuşaklık arayanlar için ideal bir içecektir. Süt, espressoyu dengeleyerek zengin, pürüzsüz bir tat profili sunar, ancak kahvenin karakterini kaybetmeden.",
    image: "/assets/hotDrinks/cortado.jpg",
  },
  10: {
    id: 10,
    name: "Espresso",
    description:
      "Espresso, yoğun ve konsantre bir kahve türüdür, ince çekilmiş kahve çekirdeklerinin yüksek basınçla suyla demlenmesiyle elde edilir. Kıvamı yoğun, tadı ise güçlü ve acıdır, kahveseverler için temel bir içecek olup, çoğu kahve bazlı içeceğin temelini oluşturur.",
    image: "/assets/hotDrinks/espresso.jpg",
  },
  11: {
    id: 11,
    name: "Hibiskus Çayı",
    description:
      "Hibiskus çayı, parlak kırmızı renge sahip, asidik ve hafif ekşi bir tada sahip bitkisel bir içecektir. Hibiskus çiçeği ile yapılan bu çay, sıcak ya da soğuk olarak tüketilebilir ve vücuda faydalı antioksidanlar, C vitamini ve mineraller içerir. Ferahlatıcı özelliği ve sağlığa olan faydalarıyla özellikle yaz aylarında popülerdir.",
    image: "/assets/hotDrinks/hibiscus.jpg",
  },
  12: {
    id: 12,
    name: "Filtre Kahve",
    description:
      "Filtre kahve, öğütülmüş kahve çekirdeklerinin sıcak su ile demlenerek süzüldüğü, pürüzsüz ve yumuşak bir tada sahip bir içecektir. Genellikle sabah kahvaltılarında tercih edilen bu kahve, hafif asidik bir tat profili ve uzun süreli bir içim keyfi sunar. Filtre kahve, kahve çekirdeklerinin kalitesine göre farklı aromalar ve yoğunluklar sunarak, sade içimi sevenler için mükemmel bir seçenek oluşturur.",
    image: "/assets/hotDrinks/filtre.jpg",
  },
  13: {
    id: 13,
    name: "Lotus Biscoff",
    description:
      "Lotus Biscoff, lezzetli ve hafif karamelize bir bisküvidir. Kendisinin tadı, tatlı ve hafif baharatlı bir profil sunar. Bu bisküvi, özellikle kahveyle mükemmel uyum sağlar ve kahve yanında atıştırmalık olarak sıkça tercih edilir. Kremalı bir dokusu ve karamelize şekeriyle, tatlı düşkünlerine keyifli bir lezzet deneyimi sunar. Biscoff, aynı zamanda bazı içeceklerde şurup veya kremalı topping olarak da kullanılır.",
    image: "/assets/hotDrinks/lotusbiscoff.jpg",
  },
  14: {
    id: 14,
    name: "Sahlep",
    description:
      "Sahlep, özellikle soğuk kış günlerinde tercih edilen, sıcak ve kremamsı bir içecektir. Orkide köklerinden elde edilen tozdan yapılan sahlep, sütle karıştırılarak hazırlanır ve üzerine tarçın eklenerek servis edilir. Hem lezzetli hem de faydalıdır; boğazı yumuşatmaya yardımcı olur ve vücuda ısı verir. Sahlep, kendine has tatlımsı ve hafif baharatlı aromasıyla, kış aylarının vazgeçilmez içeceklerinden biridir.",
    image: "/assets/hotDrinks/sahlep.jpg",
  },
  15: {
    id: 15,
    name: "Sıcak Çikolata",
    description:
      "Sıcak çikolata, yoğun ve kremsi bir tat sunan, genellikle sütle hazırlanan tatlı bir içecektir. Çikolata parçaları veya kakao tozu eritilerek sıcak sütle karıştırılır ve üzerine bazen krem şanti, marshmallow veya tarçın gibi eklemeler yapılır. Hem lezzetli hem de rahatlatıcı olan sıcak çikolata, soğuk kış günlerinde vücuda ısı verirken, tatlı bir keyif sunar.",
    image: "/assets/hotDrinks/sıcakcikolata.jpg",
  },
  16: {
    id: 16,
    name: "Toffee Nut Latte",
    description:
      "Toffee Nut Latte, tatlı ve fındıklı bir lezzet kombinasyonuna sahip, kremsi ve kahveli bir içecektir. Espresso, buğulanmış süt ve toffee (karamel) şurubu ile hazırlanır, ardından fındık aroması eklenir. Üzerine hafif bir köpük ve bazen de karamel sosu ilave edilerek zengin, tatlı bir lezzet elde edilir. Hem kahve severler hem de tatlı içecekleri tercih edenler için mükemmel bir seçimdir.",
    image: "/assets/hotDrinks/toffeenutlatte.jpg",
  },
};

// # Cold Drinks ---------------- //
items.coldDrinks = {
  1: {
    id: 1,
    name: "Ice Latte",
    description:
      "Serinletici ve yumuşak, buz ve sütle hazırlanmış soğuk espresso, sıcak günlerde mükemmel bir kahve tadı sunar.",
    image: "/assets/coldDrinks/icelatte.jpg",
  },
  2: {
    id: 2,
    name: "Ice Americano",
    description:
      "Espresso'nun buz ve suyla birleşimiyle hazırlanan, serinletici ve hafif acı bir kahve deneyimi.",
    image: "/assets/coldDrinks/iceamericano.jpg",
  },
  3: {
    id: 3,
    name: "Ice Toffeenuth",
    description:
      "Soğuk espresso, fındık ve karamel aromasıyla tatlandırılmış, kremsi ve zengin bir kahve.",
    image: "/assets/coldDrinks/icetoffeenuth.jpg",
  },
  4: {
    id: 4,
    name: "Ice Caramel Mocha",
    description:
      "Espresso, soğuk süt, çikolata ve karamelin mükemmel birleşimiyle hazırlanan tatlı ve serinletici bir kahve.",
    image: "/assets/coldDrinks/icecaramelmocha.jpg",
  },
  5: {
    id: 5,
    name: "Ice Mocha",
    description:
      "Soğuk espresso, süt ve yoğun çikolata ile hazırlanan, tatlı ve ferahlatıcı bir kahve.",
    image: "/assets/coldDrinks/icemocha.jpg",
  },
  6: {
    id: 6,
    name: "Çilek Frozen",
    description:
      "Taze çilek, süt ve buz ile hazırlanan, serinletici ve kremamsı bir içecek.",
    image: "/assets/coldDrinks/cilekfrozen.jpg",
  },
  7: {
    id: 7,
    name: "Çikolata Milkshake",
    description:
      "Çikolata Milkshake, yoğun çikolata tadı ile serinletici bir içecektir. Süt, çikolata dondurma ve çikolata şurubu karıştırılarak hazırlanır. Kremalı ve tatlı yapısıyla özellikle çikolata severlerin favorisi olan bu içecek, bazen çikolata parçaları veya krema ile süslenerek ekstra bir lezzet katılır. Hem tatlı hem de serinletici bir seçenek arayanlar için ideal bir tercihtir.",
    image: "/assets/coldDrinks/cikolatamilkshake.jpg",
  },
  8: {
    id: 8,
    name: "Hibiskus Mint Tea",
    description:
      "Hibiskus Mint Tea, hibiskus çayı ve nane birleşiminden oluşarak ferahlatıcı bir içecek sunar. Hem asidik hem de nane aromasının sağladığı serinlik, sıcak yaz günleri için mükemmeldir.",
    image: "/assets/coldDrinks/hibiscusminttea.jpg",
  },
  9: {
    id: 9,
    name: "Ice Chai Tea Latte",
    description:
      "Ice Chai Tea Latte, tatlı ve baharatlı chai çayı ile soğuk süt karışımından oluşur, buzla servis edilerek ferahlatıcı bir içecek deneyimi sunar. Tarçın ve karanfilin hoş aromaları, serinletici özellikleriyle birleşir.",
    image: "/assets/coldDrinks/icechaitealatte.jpg",
  },
  10: {
    id: 10,
    name: "Muzlu Smoothie",
    description:
      "Muzlu smoothie, taze muz, yoğurt ve buz ile yapılan, kremsi dokusu ve doğal tatlarıyla ferahlatıcı bir içecektir. Hem sağlıklı hem de lezzetli bir seçenek arayanlar için ideal bir tercih.",
    image: "/assets/coldDrinks/muzlusmoothie.jpg",
  },
  11: {
    id: 11,
    name: "Puppy Sky",
    description:
      "Buzlu lychee şurubu, karpuz şurubu ve limonata karışımı, ferahlatıcı ve tatlı-ekşi bir içecek sunar. Lychee'nin tatlı ve tropikal aroması, karpuzun hafifliğiyle birleşerek yazın sıcak günlerinde serinletici bir seçenek oluşturur. Limonatanın asidik dokunuşu ise, bu içeceğe ekstra bir ferahlık katıyor.",
    image: "/assets/coldDrinks/puppysky.png",
  },
  12: {
    id: 12,
    name: "Purple Limon",
    description:
      "Butterfly çayı, limonata ve crash buz karışımı, renk değiştiren bir içecek deneyimi sunar. Butterfly çayının mor rengini, limonatanın asidik ferahlığı ve crash buzun soğutucu etkisiyle birleştirerek serinletici ve görsel açıdan etkileyici bir içecek oluşturur. Bu içecek yazın sıcak günlerinde mükemmel bir tercih olabilir, hem hafif hem de serinletici bir tat sağlar.",
    image: "/assets/coldDrinks/purplelimon.jpg",
  },
};

// # Sandwiches ---------------- //
items.sandwiches = {
  1: {
    id: 1,
    name: "Hindi Füme Sandviç",
    description:
      "Sarımsaklı aioli sosunun lezzetiyle harmanlanmış kıvırcık marul, taze salatalık, domates, kaşar peyniri ve hindi füme dilimleriyle hazırlanan, ferah ve doyurucu bir sandviç.",
    image: "/assets/sandwiches/hindifüme.jpg",
  },
  2: {
    id: 2,
    name: "Guacamole Sandviç",
    description:
      "Yumuşak avokado bazlı guacamole sosunun zengin lezzetiyle birleşen kıvırcık marul, taze cherry domates, cheddar peyniri ve dana jambon dilimleriyle hazırlanan nefis bir sandviç.",
    image: "/assets/sandwiches/bolpeynirli.jpg",
  },
  3: {
    id: 3,
    name: "Kahvaltı Sandviç",
    description:
      "Türk kahvaltısının vazgeçilmez lezzetleriyle hazırlanan bu sandviç, beyaz peynir, siyah ve yeşil zeytin dilimleriyle zenginleşiyor. Lütenitsa sosu, kahvaltılara özgü bir tat sunarak harika bir başlangıç yapmanızı sağlar. Sabah keyfi için mükemmel bir seçenek!",
    image: "/assets/sandwiches/kahvaltı.jpg",
  },
  4: {
    id: 4,
    name: "Bol Peynirli Sandviç",
    description:
      "Kaşar peyniri, cheddar peyniri ve taze mozzarella ile hazırlanan bu sandviç, cherry domatesin taptaze lezzetiyle birleşiyor. Kıvırcık marul ve dereotu, ferah bir tat katarken, acı ketçap sosu ise son dokunuşu yaparak lezzetli bir deneyim sunuyor. Peynir severlerin favorisi olacak.",
    image: "/assets/sandwiches/bolpeynirli.jpg",
  },
  5: {
    id: 5,
    name: "Ton Balıklı Sandviç",
    description:
      "Ton balıklı sandviç, taze ton balığı, rokanın hafif acı aroması ve mısırın tatlı dokunuşuyla damakları şenlendiren nefis bir lezzet sunar. Sağlıklı ve pratik bir öğün arayanlar için mükemmel bir seçenek.",
    image: "/assets/sandwiches/tonbalıklı.jpg",
  },
};

// # Sandwiches ---------------- //
items.desserts = {
  1: {
    id: 1,
    name: "San Sebastian",
    description:
      "Kremamsı dokusu, hafif yanık karamelize üst katmanı ve yoğun cheesecake aromasıyla unutulmaz bir lezzet.",
    image: "/assets/desserts/sansebastian.jpg",
  },
  2: {
    id: 2,
    name: "Smoothie Bowl",
    description:
      "Taze meyveler, yoğurt ve granola ile hazırlanan, enerji dolu ve besleyici bir lezzet.",
    image: "/assets/desserts/smoothiebowl.jpg",
  },
  3: {
    id: 3,
    name: "Lotus Karamelli Pasta",
    description:
      "Lotus Karamelli Pasta, Lotus bisküvisiyle hazırlanan, yoğun karamel aroması ve kremsi dokusuyla tatlandırılmış nefis bir pasta.",
    image: "/assets/desserts/lotuskaramellipasta.jpg",
  },
  4: {
    id: 4,
    name: "Çilekli Cheesecake",
    description:
      "Çilekli cheesecake, hafif ve kremamsı peynir dolgusu ile taze çileklerin mükemmel uyumunu sunan, ferahlatıcı ve lezzetli bir tatlı.",
    image: "/assets/desserts/cilekcheesecake.jpg",
  },
  5: {
    id: 5,
    name: "Böğürtlenli Cheesecake",
    description:
      "Böğürtlenli cheesecake, kremamsı peynir dolgusu ve taze böğürtlenlerin hafif ekşiliğiyle dengelenmiş, lezzetli ve ferahlatıcı bir tatlı.",
    image: "/assets/desserts/bögürtlencheesecake.jpg",
  },
  6: {
    id: 6,
    name: "Frambuazlı Cheesecake",
    description:
      "Frambuazlı cheesecake, kremamsı peynir dolgusu ve taze frambuazların hafif asidik lezzetiyle zenginleşen, ferahlatıcı ve tatmin edici bir tatlı.",
    image: "/assets/desserts/frambuazlıcheesecake.jpg",
  },
  7: {
    id: 7,
    name: "Lotus Cheesecake",
    description:
      "Lotus cheesecake, kremamsı peynir dolgusu ve Lotus bisküvisinin karamelize tadıyla zenginleşen, tatlı ve kıtır bir lezzet kombinasyonu sunar.",
    image: "/assets/desserts/lotuscheesecake.jpg",
  },
  8: {
    id: 8,
    name: "Çilekli Magnolya",
    description:
      "Alt katmanda bisküvi tozu, kenarlara dizilen taze çilekler ve ortada kremamsı magnolya tatlısı ile başlayan bu tatlı, her katmanda bisküvi tozu ve küp kesilmiş çilek parçacıklarıyla zenginleşir. Son katmanda ise yarım çilek ve bisküvi tozu ile tamamlanarak, taze ve ferah bir lezzet sunar.",
    image: "/assets/desserts/cilekmagnolya.jpg",
  },
  9: {
    id: 9,
    name: "Lotus Magnolya",
    description:
      "Alt katmanda Lotus bisküvi tozu, ardından Lotus kreması ve kremamsı magnolya katmanlarıyla sırasıyla hazırlanan bu tatlı, her katında yoğun karamel lezzeti ve kıtır dokusu ile sizi sarar. Üst katmanda ise bir bütün Lotus bisküvisiyle son dokunuş yapılır, her lokmada mükemmel bir denge sunar.",
    image: "/assets/desserts/lotusmagnolya.jpg",
  },
};

const itemIds: {
  hotDrinks: string[];
  coldDrinks: string[];
  sandwiches: string[];
  desserts: string[];
} = {
  hotDrinks: Object.keys(items.hotDrinks) as string[],
  coldDrinks: Object.keys(items.coldDrinks) as string[],
  sandwiches: Object.keys(items.sandwiches) as string[],
  desserts: Object.keys(items.desserts) as string[],
};

export { itemIds };

export default items;
