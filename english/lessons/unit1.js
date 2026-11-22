/* Unit 1 · How Things Work (B1 -> B2, written for a 6th grader).
   Videos are from channels already in the family TV; questions were written from each video's transcript.
   Readings and grammar items are original.

   Day kinds:
     video    -> new words, watch (inside the page), questions, say it out loud
     reading  -> new words, read (tap a word for its meaning, or listen), questions
     grammar  -> short explanation, practice, then a review of the whole week's words
     writing  -> plan, write, compare with a model; the text is saved for parents to read
   Every word: w = the word as it appears in its example (ex must contain w), zh = meaning. */
window.UNITS = window.UNITS || [];
window.UNITS.push({
  n: 1,
  title: "How Things Work",
  zh: "東西怎麼運作",
  blurb: "跟著 Mark Rober 和 Steve Mould 拆解日常生活裡的科學：雞蛋怎麼摔不破、檸檬怎麼發電、加油槍怎麼知道油滿了。",
  weeks: [
    { n: 1, title: "Energy and Impact", zh: "能量與撞擊" },
    { n: 2, title: "Think Like an Engineer", zh: "像工程師一樣思考" }
  ],
  days: [
    /* ---------------- Week 1 ---------------- */
    {
      n: 1, week: 1, kind: "video", min: 35,
      title: "The Egg Drop Challenge", zh: "雞蛋摔不破挑戰",
      vid: "nsnyl8llfH4", ch: "Mark Rober", len: "9:49",
      intro: "Mark Rober 用五種方法保護從高處掉下來的雞蛋，順便解釋為什麼汽車要有安全氣囊。",
      words: [
        { w: "contraption", zh: "奇妙的裝置", ex: "Every student built a strange contraption to protect an egg." },
        { w: "cushion", zh: "緩衝物；墊子", ex: "Popcorn can work as a cushion around the egg." },
        { w: "potential energy", zh: "位能（因為高度而有的能量）", ex: "The higher you hold the egg, the more potential energy it has." },
        { w: "kinetic energy", zh: "動能（因為速度而有的能量）", ex: "As the egg falls faster, it gains more kinetic energy." },
        { w: "impact", zh: "撞擊", ex: "The impact with the ground cracked the shell." },
        { w: "parachute", zh: "降落傘", ex: "A parachute made from a trash bag slowed the egg down." },
        { w: "spread out", zh: "分散開", ex: "Airbags spread out the force over a longer time." },
        { w: "intact", zh: "完好無損的", ex: "After the drop, the egg was still intact." }
      ],
      watch: [
        "What are the <b>two ways</b> to keep the egg safe?（保護雞蛋的兩個方法）",
        "Why do long jumpers land in <b>sand</b>?（跳遠為什麼落在沙上）",
        "Which design does Mark like best, and why?"
      ],
      qs: [
        { q: "Why does Mark show five ideas instead of one “best” way?", o: ["Because every competition has different rules", "Because he ran out of eggs", "Because some eggs are bigger than others", "Because the best way is a secret"], a: 0, why: "他說每個比賽規則不同：有的不准用降落傘，有的比誰最輕或最小。" },
        { q: "As the egg falls, its potential energy turns into…", o: ["kinetic energy", "heat from the sun", "electricity", "sound"], a: 0, why: "高度的能量（位能）變成速度的能量（動能）。影片裡用紅色方塊從左邊搬到右邊來表示。" },
        { q: "How does a parachute help the egg?", o: ["It makes the egg fall more slowly, so there is less energy when it lands", "It makes the eggshell harder", "It makes the egg lighter", "It stops the egg from spinning"], a: 0, why: "這是第一個方法：讓能量那疊方塊變矮。" },
        { q: "Car airbags, sand pits and parkour rolls all work in the same way. What do they do?", o: ["They make the impact last longer, so the force is spread out", "They make the impact shorter and faster", "They add more energy", "They make things lighter"], a: 0, why: "第二個方法：把撞擊的時間拉長，力量就被分散，不會一下子超過「掃把線」。" },
        { q: "In the straw design, why should no straw point straight at the egg?", o: ["The force would travel up the straw and poke a hole in the egg", "The straw would melt", "The egg would roll away", "It would look bad"], a: 0, why: "力量會沿著最硬的路徑（吸管）往上傳，直接戳到蛋（puncture load）。" },
        { q: "So, which design is the best?", o: ["It depends on the rules of your competition", "Always the popcorn ball", "Always the drone", "The jar of peanut butter"], a: 0, why: "要最小就選無人機，要最輕就選氣球，只要不破的話哪一個都可以。（花生醬罐子他說「不是好主意」。）" }
      ],
      say: {
        q: "Which of the five designs would you choose for your school? Why?",
        starters: ["I would choose the … because …", "It works because …", "If my school doesn't allow …, I will …"]
      }
    },
    {
      n: 2, week: 1, kind: "reading", min: 30,
      title: "Airbags: A Cushion in the Blink of an Eye", zh: "眨眼之間的安全氣囊",
      intro: "把雞蛋實驗學到的「拉長撞擊時間」用在真正的汽車上。",
      words: [
        { w: "sensor", zh: "感應器", ex: "A sensor in the car can tell when it stops too quickly." },
        { w: "signal", zh: "訊號", ex: "The sensor sends a signal to the airbag." },
        { w: "fraction", zh: "一小部分", ex: "It all happens in a fraction of a second." },
        { w: "vent", zh: "排氣孔", ex: "Gas escapes through a small vent in the bag." },
        { w: "injury", zh: "受傷", ex: "Wearing a seat belt lowers the risk of injury." },
        { w: "design", zh: "設計", ex: "Engineers design airbags to open very quickly." }
      ],
      text: [
        "Imagine a car is driving at 50 kilometres an hour when it suddenly hits a wall. The car stops almost at once, but the people inside keep moving forward. Without protection, the driver's head could hit the steering wheel in a tiny fraction of a second. This is where the airbag comes in.",
        "An airbag is a large nylon bag folded inside the steering wheel or the dashboard. A sensor in the car measures how quickly the car is slowing down. If it slows down much more suddenly than it would with normal braking, the sensor sends a signal, and a small chemical reaction fills the bag with gas. The whole thing happens in about 30 milliseconds. That is faster than a blink.",
        "You might think an airbag works like a hard wall that stops your head. In fact, it does the opposite. Each bag has small holes, called vents, that let the gas escape as your head pushes into it. Because the bag slowly gets softer, your head stops over a longer time. Remember the egg drop: when an impact lasts longer, the force is spread out, so it is less likely to cause an injury.",
        "Airbags are designed to work together with seat belts, not instead of them. The seat belt holds your body in the right place, and the airbag protects your head and chest. But an airbag opens with great force, so it can be dangerous for small children. That is why many countries, including Taiwan, have rules that young children must ride in the back seat."
      ],
      qs: [
        { q: "What is the main idea of this text?", o: ["Airbags protect people by making a crash stop softer and longer", "Airbags make cars go faster", "Airbags are more important than seat belts", "Airbags were invented in Taiwan"], a: 0, why: "第三段是重點：氣囊不是硬牆，而是讓頭「慢慢停下來」。" },
        { q: "What tells the airbag to open?", o: ["A sensor that notices the car slowing down very suddenly", "The driver pushes a button", "The seat belt pulls it open", "It opens when the car starts"], a: 0, why: "第二段：sensor 感應到減速太突然，就送出 signal。" },
        { q: "About how long does it take to fill an airbag?", o: ["About 30 milliseconds", "About 3 seconds", "About 30 seconds", "About half a minute"], a: 0, why: "about 30 milliseconds，也就是 0.03 秒，比眨眼還快。" },
        { q: "Why does an airbag have vents?", o: ["So the gas can escape and your head stops more slowly", "So the driver can breathe", "So the bag can fill faster", "So the bag looks bigger"], a: 0, why: "氣跑出去，袋子變軟，頭停下來的時間變長。" },
        { q: "Which sentence is TRUE?", o: ["Airbags work best together with seat belts", "You don't need a seat belt if you have an airbag", "Airbags are safe for babies in the front seat", "Airbags are made of hard plastic"], a: 0, why: "第四段：designed to work together with seat belts, not instead of them。" },
        { q: "In paragraph 3, “it does the opposite” means an airbag…", o: ["does not stop your head suddenly like a wall", "stops your head suddenly like a wall", "makes the car stop faster", "pushes your head backwards"], a: 0, why: "opposite = 相反。不像牆一樣一下子擋住你。" }
      ]
    },
    {
      n: 3, week: 1, kind: "video", min: 35,
      title: "The World's Largest Lemon Battery", zh: "世界最大的檸檬電池",
      vid: "a1D-fZP8qJk", ch: "Mark Rober", len: "12:04",
      intro: "Mark Rober 用 1,232 顆檸檬做電池，想幫一台電動賽車充電。結果呢？",
      words: [
        { w: "generate", zh: "產生（電、能量）", ex: "Can lemons generate enough electricity for a car?" },
        { w: "electron", zh: "電子", ex: "An electron is a tiny particle that can carry electricity." },
        { w: "electrolyte", zh: "電解質", ex: "Lemon juice is the electrolyte that connects the two metals." },
        { w: "current", zh: "電流", ex: "The lemon battery made only a very small current." },
        { w: "measure", zh: "測量", ex: "They used a meter to measure the voltage." },
        { w: "equivalent", zh: "相當於…的量", ex: "All the lemons together made the equivalent of one AA battery." },
        { w: "harness", zh: "利用（自然的力量）", ex: "Solar panels harness the power of the sun." },
        { w: "efficient", zh: "有效率的", ex: "Using sunlight directly is more efficient than using lemons." }
      ],
      watch: [
        "Why do you need <b>zinc</b> and <b>copper</b>?（為什麼要用鋅和銅）",
        "How much power did all the lemons make?",
        "Why does Mark say almost all energy is <b>solar</b> power?"
      ],
      qs: [
        { q: "Why do they stick zinc and copper into the lemons?", o: ["Zinc wants to give away electrons and copper wants to collect them", "Both metals make the lemons taste better", "Copper keeps the lemons fresh", "Zinc and copper are the cheapest metals"], a: 0, why: "鋅想丟掉電子、銅想收集電子，中間靠檸檬汁（電解質）連起來，電子一流動就是電。" },
        { q: "Mark compares electricity to water flowing between two cups. In his example, what is the straw?", o: ["The lemon", "The copper", "The zinc", "The car"], a: 0, why: "高的杯子是鋅，低的杯子是銅，吸管是檸檬，流動的水就是電。" },
        { q: "After charging for a couple of days, how much power did the lemons make?", o: ["About the same as one AA battery", "Enough to finish the race", "Enough for 200 soccer fields", "Nothing at all"], a: 0, why: "the equivalent of a single AA battery——只夠讓車在足球場上動一小段。" },
        { q: "How did the zip line help?", o: ["Riding down it charged a battery", "It carried lemons to the car", "It cooled down the battery", "It was only for fun and made no power"], a: 0, why: "滑下去的時候用「回收煞車」的方式充電，孩子們跑上坡就是在加能量。" },
        { q: "Why does Mark say coal, wind and even humans are “solar powered”?", o: ["Their energy first came from the sun", "They all have solar panels", "They only work during the day", "They are all very hot"], a: 0, why: "煤和石油是古代植物變的，植物靠陽光；風是太陽把空氣加熱不均勻；我們吃植物或吃了植物的動物。" },
        { q: "What problem did the Mars rovers have with their solar panels?", o: ["Dust covered them, so they got less energy", "They were too heavy", "They melted in the heat", "Aliens took them"], a: 0, why: "火星的灰塵蓋住太陽能板；後來是一陣小旋風把它吹乾淨。Mark 也請小朋友設計了清潔太陽能板的方法。" }
      ],
      say: {
        q: "Mark tried three plans to get energy: lemons, a zip line and the sun. Which one was the smartest, and why?",
        starters: ["I think the … was the smartest because …", "The lemons only made …", "If I had 1,000 lemons, I would …"]
      }
    },
    {
      n: 4, week: 1, kind: "grammar", min: 25,
      title: "If… : Talking about results", zh: "文法：if 條件句",
      explain: [
        "<b>If + 現在式, 現在式</b>：永遠成立的事實。<br><span class=\"en\">If you <u>drop</u> an egg on concrete, it <u>breaks</u>.</span>",
        "<b>If + 現在式, will + 原形</b>：未來可能發生的事和它的結果。<br><span class=\"en\">If you <u>add</u> a parachute, the egg <u>will fall</u> more slowly.</span>",
        "最常錯的地方：<b>if 後面不加 will</b>。<br><span class=\"en\">✗ If it <s>will rain</s> tomorrow, we will stay inside.<br>✓ If it <u>rains</u> tomorrow, we will stay inside.</span>",
        "<b>unless</b> = if … not（除非）。<br><span class=\"en\">The egg will break <u>unless</u> you protect it. = The egg will break <u>if</u> you <u>don't</u> protect it.</span>"
      ],
      qs: [
        { q: "If water reaches 100°C, it ___.", o: ["boils", "boiled", "boiling", "to boil"], a: 0, why: "永遠成立的科學事實，兩邊都用現在式。" },
        { q: "If it rains tomorrow, we ___ the egg drop inside the gym.", o: ["will do", "did", "doing", "done"], a: 0, why: "明天的事 → 結果用 will + 原形。" },
        { q: "If you ___ a parachute, the egg will fall more slowly.", o: ["add", "will add", "added", "adding"], a: 0, why: "if 後面用現在式，不加 will。" },
        { q: "Zinc gives away electrons if it ___ connected to copper.", o: ["is", "will be", "be", "being"], a: 0, why: "事實 → 現在式 is。" },
        { q: "The egg will break ___ you protect it.", o: ["unless", "if", "because", "so"], a: 0, why: "除非你保護它，不然會破 → unless。" },
        { q: "Which sentence is correct?", o: ["If I finish early, I will help you.", "If I will finish early, I will help you.", "If I finish early, I helping you.", "If I finished early, I will help you."], a: 0, why: "if 子句現在式 + 主要子句 will。" },
        { q: "If the solar panels ___ dusty, they make less electricity.", o: ["get", "will get", "got", "getting"], a: 0, why: "事實 → 現在式。" },
        { q: "You won't win the competition ___ you test your design first.", o: ["unless", "if", "and", "but"], a: 0, why: "除非你先測試，不然贏不了。" }
      ],
      review: 1
    },
    {
      n: 5, week: 1, kind: "writing", min: 30,
      title: "Design Your Own Egg Protector", zh: "寫作：設計你的護蛋裝置",
      prompt: "Design your own egg drop contraption. What is it made of? How does it protect the egg? Use what you learned about energy and impact.",
      tips: ["Give it a name.（幫它取名字）", "Say what it is made of.（用什麼材料）", "Explain why the egg will stay intact.（為什麼蛋不會破）", "What could go wrong?（可能出什麼問題）"],
      starters: ["My contraption is called …", "It is made of …", "If the egg …, the … will …", "I think it will work because …"],
      wmin: 100, wmax: 150,
      check: { label: "if / unless 句子", re: "\\b(if|unless)\\b", need: 2 },
      model: "My contraption is called the Sky Pillow. It is made of a plastic cup, cotton balls and a parachute cut from a trash bag. The egg sits in the cup, surrounded by soft cotton. If the egg falls straight down, the parachute will slow it down, so it will have less kinetic energy at the bottom. When the cup hits the ground, the cotton works as a cushion and makes the impact last longer. That spreads out the force. If it lands on its side, the cup will still protect the egg because the cotton is all around it. I think the egg will stay intact unless the parachute gets tangled."
    },

    /* ---------------- Week 2 ---------------- */
    {
      n: 6, week: 2, kind: "video", min: 35,
      title: "The Rock-Skipping Robot", zh: "打水漂機器人",
      vid: "M0_U1FHwACk", ch: "Mark Rober", len: "9:22",
      intro: "Mark Rober 做了一台打水漂機器人，找出讓石頭跳最多下的祕訣，也教你工程師的四個步驟。",
      words: [
        { w: "research", zh: "研究；查資料", ex: "Mark always starts a big project with research." },
        { w: "prototype", zh: "原型；試作品", ex: "A good prototype is cheap and easy to change." },
        { w: "variable", zh: "變因（實驗裡可以改變的東西）", ex: "Change only one variable at a time." },
        { w: "angle", zh: "角度", ex: "Hold the rock at an angle of about 20 degrees." },
        { w: "optimal", zh: "最佳的", ex: "They searched for the optimal way to throw a rock." },
        { w: "stable", zh: "穩定的", ex: "A spinning rock stays stable in the air." },
        { w: "momentum", zh: "動量；往前衝的力", ex: "The rock uses its momentum to ride up out of the water." },
        { w: "confidence", zh: "信心", ex: "Testing gives you confidence that your design will work." }
      ],
      watch: [
        "What are Mark's <b>four steps</b> for any big project?（四個步驟）",
        "Why is a <b>robot</b> better than a person for testing?",
        "What are the four secrets of the perfect rock skip?"
      ],
      qs: [
        { q: "Why did Mark build a robot instead of just throwing rocks himself?", o: ["A robot can change one thing at a time; every human throw is a little different", "Robots can throw farther than people", "He hurt his arm", "Robots are more fun to watch"], a: 0, why: "人每次丟的動作都不一樣，機器人可以一次只改一個變因。" },
        { q: "What is the correct order of Mark's four steps?", o: ["Research → prototype → test what matters → final version", "Final version → research → prototype → test", "Prototype → final version → research → test", "Test → final version → prototype → research"], a: 0, why: "他說很多人想直接跳到第四步，通常行不通。" },
        { q: "Why did they make their own “rocks” out of clay?", o: ["They could make many with the exact size they wanted", "Clay rocks are lighter than air", "Real rocks were not allowed at the lake", "Clay skips 100 times every time"], a: 0, why: "可以控制直徑和厚度，密度跟石頭差不多，而且泡水 30 分鐘就會溶掉。" },
        { q: "What is the best angle between the rock and the water?", o: ["About 20 degrees", "About 90 degrees", "Perfectly flat (0 degrees)", "About 60 degrees"], a: 0, why: "大約 20 度，石頭撞水後會做出一個「斜坡」讓自己衝上去。" },
        { q: "Why should you spin the rock with your wrist?", o: ["Spinning things are more stable, so the rock keeps its angle", "Spinning makes the rock lighter", "Spinning makes a nice sound", "It doesn't matter"], a: 0, why: "旋轉的東西比較穩（角動量），可以維持 20 度的角度。" },
        { q: "What kind of rock is best for kids?", o: ["A small, light rock with a flat bottom", "The biggest rock they can find", "A round rock like a ball", "A wet rock"], a: 0, why: "底部平的最重要；小孩用小而輕的石頭比較好甩出速度。" }
      ],
      say: {
        q: "Mark says jumping straight to step four is a bad idea. Why? Think of something you built or made that didn't work the first time.",
        starters: ["Jumping to step four is a bad idea because …", "Once I tried to make …", "Next time I will …"]
      }
    },
    {
      n: 7, week: 2, kind: "reading", min: 30,
      title: "Two Brothers and a Box of Wind", zh: "萊特兄弟的風洞",
      intro: "一百多年前，兩兄弟也用「一次只改一個變因」的方法，做出了第一架飛機。",
      words: [
        { w: "glider", zh: "滑翔機", ex: "A glider flies without an engine." },
        { w: "lift", zh: "升力（把東西往上推的力）", ex: "A good wing creates lift." },
        { w: "publish", zh: "發表；出版", ex: "Scientists publish their results so others can use them." },
        { w: "disappointed", zh: "失望的", ex: "Wilbur was disappointed when the glider did not fly well." },
        { w: "accurate", zh: "準確的", ex: "Accurate numbers helped them build a better wing." },
        { w: "succeed", zh: "成功", ex: "You can succeed if you keep testing your ideas." }
      ],
      text: [
        "In 1900, two brothers who ran a bicycle shop in Dayton, Ohio, travelled to the windy beaches of Kitty Hawk, North Carolina. Wilbur and Orville Wright wanted to build a flying machine. First they tested a glider, a plane with no engine, but it did not produce as much lift as they had hoped. The next year they came back with a bigger glider. It was even worse.",
        "To design their wings, the brothers had used numbers that other scientists had published. Slowly they realised something surprising: the published numbers were wrong. On the train home, Wilbur was so disappointed that he said people might not fly for a thousand years.",
        "But instead of giving up, they decided to collect their own data. In late 1901 they built a wooden box about two metres long with a fan at one end: a simple wind tunnel. Inside it they placed tiny model wings made of metal and measured how much lift each one produced. They changed only one thing at a time, such as the curve, the length or the width of the wing. In a few weeks they tested around 200 different wing shapes and wrote down every result.",
        "With accurate numbers, they built a much better glider in 1902. Then they added an engine and propellers. On 17 December 1903, Orville flew their plane for 12 seconds and travelled 37 metres. Later that day, Wilbur flew for 59 seconds. It was the first time a powered plane carrying a person had flown under control.",
        "The Wright brothers did not succeed because they were lucky. They succeeded because they tested their ideas, changed one thing at a time and trusted careful measurements, just like Mark Rober's rock-skipping robot more than a hundred years later."
      ],
      qs: [
        { q: "What was wrong with the gliders of 1900 and 1901?", o: ["They did not produce enough lift", "They were too fast", "They had no wings", "They were too small to carry anyone"], a: 0, why: "第一段：did not produce as much lift as they had hoped。" },
        { q: "What did the brothers discover about the other scientists' numbers?", o: ["They were wrong", "They were perfect", "They were secret", "They were about bicycles"], a: 0, why: "第二段：the published numbers were wrong。" },
        { q: "What was their wind tunnel?", o: ["A wooden box with a fan at one end", "A tunnel under a mountain", "A large balloon", "A train"], a: 0, why: "第三段：a wooden box about two metres long with a fan。" },
        { q: "How did they test the model wings?", o: ["They changed one thing at a time and measured the lift", "They changed everything at once", "They asked other people to guess", "They flew each wing at the beach"], a: 0, why: "一次只改一個變因：弧度、長度或寬度。" },
        { q: "How long was Orville's first powered flight?", o: ["12 seconds", "59 seconds", "200 seconds", "1,000 seconds"], a: 0, why: "Orville 飛了 12 秒、37 公尺；同一天稍晚 Wilbur 飛了 59 秒。" },
        { q: "What is the writer's main message in the last paragraph?", o: ["Careful testing, not luck, leads to success", "The Wright brothers were very lucky", "Robots are better than people", "Bicycles are better than planes"], a: 0, why: "did not succeed because they were lucky … because they tested their ideas。" }
      ]
    },
    {
      n: 8, week: 2, kind: "video", min: 40,
      title: "How Does a Petrol Pump Know When to Stop?", zh: "加油槍怎麼知道油滿了？",
      vid: "fT2KhJ8W-Kg", ch: "Steve Mould", len: "11:30", end: 691,
      challenge: true,
      intro: "Steve Mould 把加油槍鋸成兩半，找出它「喀」一聲自動停下來的祕密。這支比較難（B2），可以開字幕看兩次。影片在 11 分 30 秒後是廣告，會自動停。",
      words: [
        { w: "nozzle", zh: "噴嘴；加油槍頭", ex: "He cut a petrol nozzle in half to look inside." },
        { w: "mechanism", zh: "機械裝置；機構", ex: "There are two clever mechanisms inside the nozzle." },
        { w: "pressure", zh: "壓力", ex: "The pressure drops where the pipe gets narrow." },
        { w: "narrow", zh: "窄的", ex: "Air moves faster through the narrow part of the tube." },
        { w: "valve", zh: "閥門", ex: "When the valve closes, the petrol stops." },
        { w: "membrane", zh: "薄膜", ex: "A thin membrane gets pulled up by the suction." },
        { w: "lever", zh: "槓桿", ex: "Pulling the handle moves a lever inside." },
        { w: "overflow", zh: "溢出來", ex: "The nozzle turns off so the tank doesn't overflow." }
      ],
      watch: [
        "Is there an electronic sensor inside? (Listen to the beginning.)",
        "What happens to the <b>pressure</b> when air goes through the narrow part?",
        "What do the little <b>ball bearings</b>（小鋼珠）do?"
      ],
      qs: [
        { q: "How does the nozzle “know” that the tank is full?", o: ["Petrol covers a small hole at the tip, and that changes the air pressure inside", "An electronic sensor measures the petrol", "A computer at the station tells it", "The driver presses a button"], a: 0, why: "他一開始也以為有電子感應器，其實完全是靠流體和機械：油淹過槍頭的小洞。" },
        { q: "When air goes through the narrow part of a tube, it moves faster and the pressure…", o: ["goes down", "goes up", "stays the same", "disappears completely"], a: 0, why: "Venturi effect：窄的地方流得快、壓力變低，所以 U 形管裡的水被吸上來。" },
        { q: "Why must the fluid move faster in the narrow part?", o: ["The same amount has to get through a smaller space", "Narrow pipes are warmer", "Petrol is lighter than water", "The pump pushes harder there"], a: 0, why: "同樣多的東西要通過比較小的地方，就一定要跑得比較快。" },
        { q: "What happens when petrol reaches the hole at the end of the nozzle?", o: ["The suction gets stronger and pulls a membrane up", "The petrol gets hotter", "The nozzle makes more petrol", "Nothing changes"], a: 0, why: "吸油比吸空氣難，另一邊的吸力變強，把薄膜往上拉。" },
        { q: "What do the ball bearings do?", o: ["They hold the lever's pivot in place; when they fall, the valve shuts", "They make the clicking music", "They clean the petrol", "They keep the handle cold"], a: 0, why: "鋼珠卡住時是槓桿的支點；薄膜一拉，鋼珠掉進去，整組機構垮下來，閥門關上。" },
        { q: "Why is this clever mechanism important?", o: ["It stops petrol from spilling, which could start a fire", "It makes petrol cheaper", "It makes cars faster", "It saves electricity at the station"], a: 0, why: "油溢出來在加油站是很大的火災危險（fire hazard）。" }
      ],
      say: {
        q: "Explain to someone in your family how the nozzle turns itself off. Use at least three of today's words.",
        starters: ["Inside the nozzle there is …", "When the tank is full, …", "Then the … closes, so …"]
      }
    },
    {
      n: 9, week: 2, kind: "grammar", min: 25,
      title: "The Passive: Was it made or did it make?", zh: "文法：被動式",
      explain: [
        "<b>被動式 = be 動詞 + 過去分詞</b>。重點放在「東西被怎麼了」，而不是「誰做的」。<br><span class=\"en\">Mark's team <u>made</u> the robot.（主動）→ The robot <u>was made</u> by Mark's team.（被動）</span>",
        "<b>時態看 be 動詞</b>：現在 is/are + p.p.，過去 was/were + p.p.，未來 will be + p.p.<br><span class=\"en\">Airbags <u>are used</u> in almost every car. · The tunnel <u>was built</u> in 1901. · The results <u>will be recorded</u>.</span>",
        "<b>什麼時候用？</b>不知道、不重要，或大家都知道是誰做的時候。科學報告裡很常見。<br><span class=\"en\">Over 200 wing shapes <u>were tested</u>.</span>",
        "常見不規則過去分詞：<span class=\"en\">make → made · build → built · throw → thrown · fly → flown · cut → cut · write → written</span>"
      ],
      qs: [
        { q: "The “rocks” in the video ___ from clay.", o: ["were made", "made", "were make", "was making"], a: 0, why: "石頭是「被」做出來的，過去式 → were + made。" },
        { q: "The wind tunnel ___ by the Wright brothers in 1901.", o: ["was built", "built", "is building", "was build"], a: 0, why: "被建造、過去 → was built（build 的 p.p. 是 built）。" },
        { q: "Choose the correct sentence.", o: ["Over 200 wing shapes were tested.", "Over 200 wing shapes were test.", "Over 200 wing shapes tested were.", "Over 200 wing shapes was tested."], a: 0, why: "複數 shapes → were；後面要過去分詞 tested。" },
        { q: "Mark's team made a robot. → A robot ___ by Mark's team.", o: ["was made", "is made", "made", "has make"], a: 0, why: "原句是過去式 made，所以被動也用過去 was made。" },
        { q: "The valve ___ by a spring.", o: ["is pushed", "pushes", "is push", "pushing"], a: 0, why: "閥門被彈簧推 → is + pushed。" },
        { q: "Airbags ___ in almost every new car today.", o: ["are used", "use", "are using", "used"], a: 0, why: "today → 現在式；複數 → are used。" },
        { q: "Each plane will ___ five times.", o: ["be thrown", "throw", "be throw", "thrown"], a: 0, why: "未來被動：will be + p.p.（throw → thrown）。" },
        { q: "Why do science reports often use the passive?", o: ["Because what happened matters more than who did it", "Because it is shorter", "Because the past tense is not allowed", "Because scientists don't like people"], a: 0, why: "重點是「做了什麼實驗、結果如何」，不是誰動的手。" }
      ],
      review: 2
    },
    {
      n: 10, week: 2, kind: "writing", min: 35,
      title: "Plan a Fair Test", zh: "寫作：設計一個公平的實驗",
      prompt: "Choose a question you could test at home, for example “Which paper airplane flies the farthest?” or “Which ball bounces the highest?” Explain how you would test it using Mark's four steps. What is the one variable you will change? What will you keep the same?",
      tips: ["Write your question first.（先寫你的問題）", "Use the four steps: research, prototype, test, final version.", "Name the one variable you change, and what stays the same.", "Use the passive at least twice (e.g. “will be measured”)."],
      starters: ["My question is: …", "First, I will …", "The only variable I will change is …", "Each … will be … and the results will be …"],
      wmin: 120, wmax: 160,
      check: { label: "被動式句子", re: "\\b(am|is|are|was|were|be|been|being)\\s+(\\w+ly\\s+)?(\\w+ed|made|built|thrown|done|taken|given|seen|found|known|held|kept|put|set|cut|shown|written|chosen|sent|told|brought|taught|read|said|paid|flown|drawn|grown|blown|broken|hit|dropped|stopped)\\b", need: 2 },
      model: "My question is: which paper airplane design flies the farthest? First, I will do some research. I will watch videos and read about paper airplanes. Next, I will build three prototypes with different wing shapes. All of them will be made from the same kind of paper, and they will be thrown from the same place. The only variable I will change is the shape of the wings. Each plane will be thrown five times, and every distance will be measured and recorded. After that, I will look at the results and choose the optimal design. Finally, I will build my final version carefully. I am confident it will fly far because the design was tested, not guessed."
    }
  ]
});
