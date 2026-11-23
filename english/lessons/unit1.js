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
  blurb: "Take everyday science apart with Mark Rober and Steve Mould: how to keep a falling egg in one piece, how lemons make electricity, and how a petrol pump knows when to stop. Week 2 is harder: B2-level questions, with explanations in English.",
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
        { w: "contraption", def: "a machine or device that looks strange or home-made", zh: "奇妙的裝置", ex: "Every student built a strange contraption to protect an egg." },
        { w: "cushion", def: "something soft that protects a thing when it hits something", zh: "緩衝物；墊子", ex: "Popcorn can work as a cushion around the egg." },
        { w: "potential energy", def: "energy an object has because of its height or position", zh: "位能（因為高度而有的能量）", ex: "The higher you hold the egg, the more potential energy it has." },
        { w: "kinetic energy", def: "energy an object has because it is moving", zh: "動能（因為速度而有的能量）", ex: "As the egg falls faster, it gains more kinetic energy." },
        { w: "impact", def: "the moment when one thing hits another", zh: "撞擊", ex: "The impact with the ground cracked the shell." },
        { w: "parachute", def: "a large piece of cloth that slows down something falling through the air", zh: "降落傘", ex: "A parachute made from a trash bag slowed the egg down." },
        { w: "spread out", def: "to make something cover a bigger area or a longer time", zh: "分散開", ex: "Airbags spread out the force over a longer time." },
        { w: "intact", def: "not broken or damaged", zh: "完好無損的", ex: "After the drop, the egg was still intact." }
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
        { w: "sensor", def: "a device that notices a change, such as movement, heat or light", zh: "感應器", ex: "A sensor in the car can tell when it stops too quickly." },
        { w: "signal", def: "a message sent from one thing to another, often as electricity", zh: "訊號", ex: "The sensor sends a signal to the airbag." },
        { w: "fraction", def: "a very small part of something", zh: "一小部分", ex: "It all happens in a fraction of a second." },
        { w: "vent", def: "a small hole that lets air or gas in or out", zh: "排氣孔", ex: "Gas escapes through a small vent in the bag." },
        { w: "injury", def: "harm done to a person's body", zh: "受傷", ex: "Wearing a seat belt lowers the risk of injury." },
        { w: "design", def: "to plan how something will look and work before it is made", zh: "設計", ex: "Engineers design airbags to open very quickly." }
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
        { w: "generate", def: "to produce something, such as electricity or energy", zh: "產生（電、能量）", ex: "Can lemons generate enough electricity for a car?" },
        { w: "electron", def: "a tiny particle with a negative charge that carries electricity", zh: "電子", ex: "An electron is a tiny particle that can carry electricity." },
        { w: "electrolyte", def: "a liquid that lets electricity pass through it", zh: "電解質", ex: "Lemon juice is the electrolyte that connects the two metals." },
        { w: "current", def: "a flow of electricity", zh: "電流", ex: "The lemon battery made only a very small current." },
        { w: "measure", def: "to find out the size, amount or strength of something", zh: "測量", ex: "They used a meter to measure the voltage." },
        { w: "equivalent", def: "an amount that is equal to another amount", zh: "相當於…的量", ex: "All the lemons together made the equivalent of one AA battery." },
        { w: "harness", def: "to control and use a natural force, like wind or sunlight", zh: "利用（自然的力量）", ex: "Solar panels harness the power of the sun." },
        { w: "efficient", def: "working well without wasting energy, time or money", zh: "有效率的", ex: "Using sunlight directly is more efficient than using lemons." }
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
      check: { label: "if / unless sentences", re: "\\b(if|unless)\\b", need: 2 },
      model: "My contraption is called the Sky Pillow. It is made of a plastic cup, cotton balls and a parachute cut from a trash bag. The egg sits in the cup, surrounded by soft cotton. If the egg falls straight down, the parachute will slow it down, so it will have less kinetic energy at the bottom. When the cup hits the ground, the cotton works as a cushion and makes the impact last longer. That spreads out the force. If it lands on its side, the cup will still protect the egg because the cotton is all around it. I think the egg will stay intact unless the parachute gets tangled."
    },

    /* ---------------- Week 2 (harder: B2 questions, English definitions and explanations) ----------------
       def = an English definition, shown first; zh stays as a small hint. */
    {
      n: 6, week: 2, kind: "video", min: 40,
      title: "The Rock-Skipping Robot", zh: "打水漂機器人",
      vid: "M0_U1FHwACk", ch: "Mark Rober", len: "9:22",
      intro: "Mark Rober builds a rock-skipping robot to find the perfect skip, and uses it to reveal the four steps he follows on every big engineering project. This week's questions ask why, not just what.",
      words: [
        { w: "reconfigure", def: "to change how the parts of something are arranged or set up", zh: "重新調整配置", ex: "A good prototype is cheap and easy to reconfigure." },
        { w: "variable", def: "one thing in an experiment that you can change", zh: "變因", ex: "They changed only one variable on each throw." },
        { w: "parameter", def: "a setting or limit that controls how something works", zh: "參數", ex: "Slowly they narrowed in on the key parameters." },
        { w: "optimal", def: "the best possible", zh: "最佳的", ex: "About 20 degrees is the optimal angle." },
        { w: "relative to", def: "compared with; measured from", zh: "相對於", ex: "Measure the angle of the rock relative to the water." },
        { w: "momentum", def: "the force a moving object has that keeps it moving", zh: "動量", ex: "The rock uses its forward momentum to ride up the ramp." },
        { w: "dissolve", def: "to break up in a liquid until it disappears", zh: "溶解", ex: "The clay rocks dissolve in about 30 minutes." },
        { w: "intentional", def: "done on purpose", zh: "故意的", ex: "The robot's weak first throw was intentional." }
      ],
      watch: [
        "List Mark's <b>four steps</b> for any big project, in order.",
        "On each throw, what exactly did the team change, and what did they keep the same?",
        "Before making the video, what did Mark believe about the best throw? Was he right?"
      ],
      qs: [
        { q: "Mark says jumping straight to step four is “almost worse if it does” work. What does he mean?", o: ["Even if it works, you can't be sure your design is close to the best one", "If it works, you will have spent too much money", "If it works, nobody will believe you", "If it works, you will have nothing left to build"], a: 0, why: "He says you would have “no confidence that you're close to the optimal design”. A lucky success doesn't tell you why it worked." },
        { q: "In step three, a “sensitivity analysis” means…", o: ["trying many combinations of settings to find out which ones actually matter", "checking that the robot is safe to use near children", "asking experts which rocks are the most sensitive", "building the final version very carefully"], a: 0, why: "Mark: “we try lots of different combinations of settings to see what actually matters and what doesn't.”" },
        { q: "Changing the robot's wrist angle changed ___, while changing its arm angle changed ___.", o: ["the tilt of the rock relative to the water / the angle of the rock's path towards the water", "the path of the rock / the tilt of the rock", "the spin of the rock / the weight of the rock", "the speed of the rock / the size of the rock"], a: 0, why: "Wrist angle = how the rock itself is tilted. Arm angle = the direction it travels in. One option swaps them; read carefully!" },
        { q: "Which statement about the clay “rocks” is NOT true?", o: ["They were baked in an oven to make them as hard as real rocks", "They had a density similar to real rocks", "They let the team control the diameter and thickness", "They dissolved after about 30 minutes in the lake"], a: 0, why: "The clay was unfired: it was dried in the sun, not baked. That is also why it dissolved in the water afterwards." },
        { q: "Why was it important to change only one thing on each throw?", o: ["So that any big improvement could be linked to the thing they had just changed", "So that the robot would not break", "So that the children could take turns", "So that the clay would last longer"], a: 0, why: "“If we suddenly saw a huge improvement, we know it would be from the thing that we just changed.” A human can't do this, because every throw is slightly different." },
        { q: "Mark used to think the best throw was low and parallel to the water. What did he learn instead?", o: ["Starting a bit higher works better, because the rock gets extra potential energy", "The lower the throw, the more skips you get", "The height of the throw doesn't matter at all", "You should throw straight down at the water"], a: 0, why: "The path should be about 20 degrees. Like a ball dropped from higher up, a rock thrown from higher has more energy to spend on skips." },
        { q: "What happens if the rock isn't spinning enough?", o: ["It loses its 20-degree angle, tips over and sinks", "It skips too many times and goes out of sight", "It becomes heavier", "It makes a louder splash but skips just as well"], a: 0, why: "Spinning objects resist changes to their rotation (angular momentum), so the rock keeps its ramp angle. Without spin “it will rotate over and then sink.”" },
        { q: "Mark says “the heavier the better”, yet he tells kids to use small, light rocks. Why?", o: ["A rock that is too heavy can't be thrown at the full speed of your arm", "Heavy rocks are never flat on the bottom", "Light rocks spin in the opposite direction", "Heavy rocks dissolve in water"], a: 0, why: "A heavier rock carries more energy, but only if you can still reach your arm's top speed before you let go. Most children can't with a heavy rock." }
      ],
      say: {
        q: "Mark says nobody can tell you the best egg-drop design without testing. Do you agree? Give a reason and an example from your own life.",
        starters: ["I agree / I don't completely agree, because …", "For example, when I …", "If I had tested it first, …"]
      }
    },
    {
      n: 7, week: 2, kind: "reading", min: 35,
      title: "Two Brothers and a Box of Wind", zh: "萊特兄弟的風洞",
      intro: "More than a century before Mark's robot, two bicycle makers used the same idea (change one thing at a time and measure) to solve the problem of flight. This text is longer than last week's, and some questions ask you to read between the lines.",
      words: [
        { w: "pioneer", def: "one of the first people to do something new", zh: "先驅", ex: "Otto Lilienthal was a famous glider pioneer." },
        { w: "flawed", def: "containing a mistake that makes something wrong or less useful", zh: "有缺陷的", ex: "The brothers suspected that the published data was flawed." },
        { w: "discouraged", def: "having lost confidence or hope", zh: "灰心的", ex: "Wilbur was so discouraged that he almost gave up." },
        { w: "abandon", def: "to give something up completely", zh: "放棄", ex: "Rather than abandon the project, they tested the numbers themselves." },
        { w: "systematically", def: "in a careful, step-by-step way, following a plan", zh: "有系統地", ex: "They worked systematically, changing one feature at a time." },
        { w: "breakthrough", def: "an important discovery that solves a problem", zh: "突破", ex: "The wind tunnel results were a breakthrough." },
        { w: "reliable", def: "that you can trust to be correct", zh: "可靠的", ex: "Using their own reliable data, they built a new glider." },
        { w: "conclude", def: "to decide that something is true after thinking about it", zh: "下結論", ex: "It is easy to conclude that they were simply lucky." }
      ],
      text: [
        "In September 1900, two brothers who ran a bicycle shop in Dayton, Ohio, shipped a homemade glider to the windy sand dunes of Kitty Hawk, North Carolina. Wilbur and Orville Wright had no university degrees and no money from the government, yet they had set themselves one of the hardest problems of their time: building a machine that could carry a person through the air and be steered by its pilot. Their first glider flew, but it produced far less lift than their calculations had predicted. A year later they returned with a larger glider, confident that size would solve the problem. Instead, it performed even worse.",
        "Their calculations were based on tables of figures published by Otto Lilienthal, a famous German glider pioneer, together with an old number for air pressure that engineers had relied on for more than a century. Gradually the brothers began to suspect that the published data was flawed. It was an uncomfortable idea: two bicycle makers were questioning the work of respected experts. On the train home in 1901, Wilbur was so discouraged that, according to Orville, he said people would not fly for a thousand years.",
        "Rather than abandon the project, the brothers decided to test the numbers themselves. That autumn they built a wind tunnel in their workshop: a wooden box about 1.8 metres long with a fan at one end, driven by the engine that powered the shop's machines. Inside it they mounted small metal model wings on delicate balances made partly from bicycle spokes and old hacksaw blades. Working systematically, they changed a single feature at a time (the curve of the wing, its length, its width, the shape of its tips) and recorded how much lift each version produced. In roughly two months they tested around 200 wing designs.",
        "The results were a breakthrough. They showed that the old air-pressure figure was too high, which explained why the earlier gliders had disappointed them, and that long, narrow wings produced more lift than short, wide ones. Using their own reliable data, the brothers built a new glider in 1902 and made hundreds of successful flights with it. They then designed their own propellers, which they treated as wings that spin, and, with the help of their mechanic Charlie Taylor, built a lightweight engine.",
        "On 17 December 1903, Orville piloted the powered Wright Flyer for 12 seconds, covering about 37 metres. Later that morning, Wilbur kept it in the air for 59 seconds. It is easy to conclude that the brothers were simply brilliant, or simply lucky. The truth is less dramatic but more useful: when the experts' numbers let them down, they did not guess. They measured."
      ],
      qs: [
        { q: "What is the main purpose of the last paragraph?", o: ["To argue that careful measurement, not luck, explains the brothers' success", "To describe the 1903 flights in technical detail", "To prove that the brothers were cleverer than every other scientist", "To explain how propellers work"], a: 0, why: "The writer rejects “brilliant or lucky” and ends with “they did not guess. They measured.”" },
        { q: "Why did the 1901 glider perform worse than the brothers expected?", o: ["It was designed with published figures that turned out to be wrong", "It was built from cheaper materials", "The wind at Kitty Hawk was too weak that year", "Wilbur was not an experienced pilot"], a: 0, why: "Paragraphs 2 and 4: Lilienthal's tables and the old air-pressure number were too high, so the wings made less lift than calculated. Making the glider bigger couldn't fix that." },
        { q: "Why does the writer call the brothers' suspicion “an uncomfortable idea”?", o: ["Because two ordinary bicycle makers were doubting respected experts", "Because the train journey home was uncomfortable", "Because the idea made them feel ill", "Because they had promised the government results"], a: 0, why: "Paragraph 2: “two bicycle makers were questioning the work of respected experts.”" },
        { q: "In paragraph 3, “Working systematically” is closest in meaning to…", o: ["following a careful plan, step by step", "working as fast as possible", "working with a large team", "using expensive machines"], a: 0, why: "The rest of the sentence shows the plan: one feature changed at a time, and every result recorded." },
        { q: "Which of these did the wind tunnel tests NOT show?", o: ["That a more powerful engine was the key to flight", "That the old air-pressure figure was too high", "That long, narrow wings gave more lift than short, wide ones", "Why their earlier gliders had been disappointing"], a: 0, why: "The tunnel tested wings, not engines. The engine came later, built with Charlie Taylor." },
        { q: "How did the brothers think about propellers?", o: ["As wings that spin", "As fans that push air downwards", "As bicycle wheels", "As something they could copy from ships without testing"], a: 0, why: "Paragraph 4: “which they treated as wings that spin”, so their wing data helped them design propellers too." },
        { q: "Put these events in order: (A) the wind tunnel tests (B) Wilbur's 59-second flight (C) the discouraging train ride home (D) hundreds of glider flights.", o: ["C → A → D → B", "A → C → D → B", "C → D → A → B", "D → C → A → B"], a: 0, why: "Train home in 1901 → tunnel that autumn → new glider in 1902 → powered flight in December 1903." },
        { q: "What can we infer about Wilbur's “thousand years” comment?", o: ["He said it out of frustration, and the brothers proved it wrong two years later", "He believed it for the rest of his life", "It was based on careful measurements", "It was printed in newspapers as a scientific prediction"], a: 0, why: "He was “so discouraged” in 1901, but by December 1903 they had flown. Feelings in a bad moment are not data!" }
      ]
    },
    {
      n: 8, week: 2, kind: "video", min: 40,
      title: "How Does a Petrol Pump Know When to Stop?", zh: "加油槍怎麼知道油滿了？",
      vid: "fT2KhJ8W-Kg", ch: "Steve Mould", len: "11:30", end: 691,
      challenge: true,
      intro: "Steve Mould cuts a petrol nozzle in half to find out how it switches itself off with a click. This one is a real challenge: watch it twice if you need to, once with subtitles and once without. The video stops by itself at 11:30, before the advert.",
      words: [
        { w: "nozzle", def: "the narrow end of a pipe or hose that liquid comes out of", zh: "噴嘴；加油槍頭", ex: "He cut a petrol nozzle in half to look inside." },
        { w: "mechanism", def: "a set of moving parts that work together to do a job", zh: "機械裝置", ex: "There are two clever mechanisms inside the nozzle." },
        { w: "pressure", def: "the force of a gas or liquid pushing on something", zh: "壓力", ex: "The pressure drops where the pipe gets narrow." },
        { w: "constriction", def: "a place where a pipe or tube becomes narrower", zh: "管子變窄的地方", ex: "The air speeds up at the constriction." },
        { w: "valve", def: "a part that opens and closes to control a flow of liquid or gas", zh: "閥門", ex: "When the valve closes, the petrol stops." },
        { w: "membrane", def: "a thin, flexible sheet that separates two spaces", zh: "薄膜", ex: "A thin membrane gets pulled up by the suction." },
        { w: "lever", def: "a bar that turns on a fixed point to move something", zh: "槓桿", ex: "Pulling the handle moves a lever inside." },
        { w: "overflow", def: "to spill over the edge because something is too full", zh: "溢出來", ex: "The nozzle turns off so the tank doesn't overflow." }
      ],
      watch: [
        "Is there an electronic sensor inside? (Listen to the beginning.)",
        "What happens to the <b>pressure</b> when air goes through the narrow part, and why?",
        "What do the little <b>ball bearings</b> (small metal balls) do?"
      ],
      qs: [
        { q: "How does the nozzle “know” that the tank is full?", o: ["Petrol covers a small hole at the tip, and that changes the air pressure inside", "An electronic sensor measures the petrol", "A computer at the petrol station tells it", "It counts how many litres have gone through"], a: 0, why: "Steve expected an electronic sensor too, but it is “entirely fluid mechanical”: petrol covers the hole at the end of the nozzle." },
        { q: "When air goes through the narrow part of a tube, it moves faster and the pressure…", o: ["goes down", "goes up", "stays the same", "disappears completely"], a: 0, why: "This is the Venturi effect: the water in the U-bend is sucked UP, so the pressure in the constriction must be lower." },
        { q: "Why must the fluid move faster in the narrow part?", o: ["The same amount has to get through a smaller space", "Narrow pipes are warmer", "Petrol is lighter than water", "The pump pushes harder there"], a: 0, why: "“To get the same amount of mass through a narrower pipe, the mass must have to travel more quickly.”" },
        { q: "Steve also explains the low pressure with conservation of energy. Which statement matches his explanation?", o: ["When the fluid speeds up, its kinetic energy rises, so the energy stored as pressure must fall", "When the fluid speeds up, it gains pressure and kinetic energy together", "The narrow pipe creates new energy", "The fluid loses all its energy as heat"], a: 0, why: "Kinetic energy + energy stored as pressure stays the same in total. Faster flow → more kinetic energy → lower pressure." },
        { q: "In his model, Steve covers one tube with his finger. What does his finger stand for in the real nozzle?", o: ["Petrol covering the small hole at the tip of the nozzle", "The driver's hand on the handle", "The spring that closes the valve", "The ball bearings falling"], a: 0, why: "Covering the tube stops it from letting air in to relieve the suction, exactly what petrol does when it reaches the hole." },
        { q: "What happens when petrol reaches the hole at the end of the nozzle?", o: ["The suction in the sealed chamber gets stronger and pulls the membrane up", "The petrol gets hotter and expands", "The pressure in the chamber rises and pushes the membrane down", "Nothing changes until the driver lets go"], a: 0, why: "Petrol is heavier than air, so the tube can't suck as much. The other branch then feels a stronger suction, which lifts the membrane." },
        { q: "What do the ball bearings do?", o: ["They hold the lever's pivot in place; when they fall, the valve shuts", "They make the clicking sound by hitting the metal", "They filter dirt out of the petrol", "They keep the handle cool"], a: 0, why: "Jammed in place, they make a fulcrum for the lever. When the membrane pulls the wedge up, they fall into the middle, everything collapses and the valve closes." },
        { q: "Why is this mechanism so important at a petrol station?", o: ["Spilled petrol would be a serious fire hazard", "It makes petrol cheaper", "It makes cars go faster", "It saves electricity"], a: 0, why: "Steve ends with it: petrol spilling out of a full tank “would be a pretty big fire hazard.”" }
      ],
      say: {
        q: "Explain to someone in your family how the nozzle turns itself off, step by step. Use at least four of today's words.",
        starters: ["Inside the nozzle there is a constriction, so …", "When the tank is full, petrol covers …", "That pulls the membrane up, which …", "Finally the valve …"]
      }
    },
    {
      n: 9, week: 2, kind: "grammar", min: 30,
      title: "The Passive: Every Tense, Every Shape", zh: "文法：被動式（進階）",
      explain: [
        "<b>Passive = a form of “be” + past participle.</b> Use it when the action matters more than who did it.<br><span class=\"en\">The robot <u>was built</u> by Mark and his family. · Over 200 wings <u>were tested</u>.</span>",
        "<b>The tense lives in “be”.</b> The past participle never changes.<br><span class=\"en\">present: Airbags <u>are fitted</u> in most cars. · past: The tunnel <u>was built</u> in 1901.<br>present perfect: The data <u>has been checked</u> twice. · past perfect: The tables <u>had been used</u> for years.<br>continuous: The tank <u>is being filled</u>. · future: The results <u>will be published</u>.</span>",
        "<b>Modal + be + past participle</b> (can / must / should / might).<br><span class=\"en\">Petrol <u>must not be spilled</u>. · Each test <u>should be repeated</u> five times.</span>",
        "<b>Questions and negatives</b> use the “be” part, never “do”.<br><span class=\"en\">✗ <s>Did the tunnel built</s> in 1901? → ✓ <u>Was</u> the tunnel <u>built</u> in 1901?<br>The engine <u>wasn't designed</u> by Lilienthal.</span>",
        "<b>Leave out “by …”</b> when the doer is obvious, unknown or unimportant. Science writers do this all the time.<br><span class=\"en\">The clay <u>was dried</u> in the sun. (not “by us”)</span>"
      ],
      qs: [
        { q: "Since 1903, the Wright Flyer ___ by millions of visitors.", o: ["has been seen", "has seen", "was seeing", "have been seen"], a: 0, why: "“Since 1903” → present perfect. The Flyer is singular → has been + seen." },
        { q: "Please wait: the tank ___ right now.", o: ["is being filled", "is filled by", "has filled", "being filled"], a: 0, why: "Happening right now → continuous passive: is being + filled." },
        { q: "To keep the test fair, each throw ___ in exactly the same way.", o: ["must be measured", "must measured", "must be measure", "must to be measured"], a: 0, why: "Modal + be + past participle." },
        { q: "Choose the correct question.", o: ["When was the first wind tunnel built?", "When did the first wind tunnel built?", "When was built the first wind tunnel?", "When the first wind tunnel was built?"], a: 0, why: "Question word + was + subject + past participle. No “did” in a passive question." },
        { q: "Lilienthal's tables ___ by engineers for years before anyone found the mistake.", o: ["had been used", "had used", "have been using", "were use"], a: 0, why: "Before another past event → past perfect passive: had been + used." },
        { q: "Find the sentence with a MISTAKE.", o: ["The membrane is pull up by the suction.", "The valve is closed by a spring.", "Three ball bearings are held in place.", "The petrol is pushed through a narrow ring."], a: 0, why: "pull → pulled. The passive always needs the past participle." },
        { q: "Active: “Steve cut the nozzle in half.” → Passive:", o: ["The nozzle was cut in half by Steve.", "The nozzle was cutted in half by Steve.", "The nozzle cut in half by Steve.", "The nozzle is cut in half by Steve."], a: 0, why: "Past tense → was; cut → cut (irregular, no -ed)." },
        { q: "Which sentence sounds best in a science report?", o: ["The rocks were dried in the sun for two days.", "Me and my cousins, we dried the rocks in the sun.", "Someone dried the rocks in the sun, I think.", "The sun was dried by the rocks for two days."], a: 0, why: "Reports focus on what was done, so the doer is left out. The last option is passive, but it says the opposite of what happened!" },
        { q: "If the results ___ carefully, nobody will trust them.", o: ["aren't recorded", "won't be recorded", "don't record", "aren't record"], a: 0, why: "Last week's rule still applies: no “will” after if. Passive + negative → aren't recorded." },
        { q: "Their engine ___ by a big company; they built it with their own mechanic.", o: ["wasn't made", "didn't make", "wasn't make", "hasn't making"], a: 0, why: "Past negative passive: wasn't + made." }
      ],
      review: 2
    },
    {
      n: 10, week: 2, kind: "writing", min: 40,
      title: "Plan a Fair Test", zh: "寫作：設計一個公平的實驗",
      prompt: "Write a plan for a fair test you could really do at home, for example “Does the shape of a paper airplane's wings change how far it flies?” Describe your method the way a scientist would: what will be changed, what will be kept the same, how the results will be measured, and what you will do if the results surprise you.",
      tips: ["Start with a clear question.", "Name the ONE variable you will change and at least two things you will keep the same.", "Describe your method in the passive at least 3 times (e.g. “Each plane will be thrown five times”).", "Use at least one if-sentence about an unexpected result.", "Finish by saying what a good result would show."],
      starters: ["The question I want to answer is …", "To keep the test fair, … will be kept the same.", "Each … will be … and the distance will be measured …", "If the results are surprising, I will …"],
      wmin: 180, wmax: 240,
      check: { label: "passive sentences", re: "\\b(am|is|are|was|were|be|been|being)\\s+(\\w+ly\\s+)?(\\w+ed|made|built|thrown|done|taken|given|seen|found|known|held|kept|put|set|cut|shown|written|chosen|sent|told|brought|taught|read|said|paid|flown|drawn|grown|blown|broken|hit|dropped|stopped)\\b", need: 3 },
      model: "The question I want to answer is whether the shape of a paper airplane's wings changes how far it flies. First, I will do some research by watching videos and reading about paper airplanes. Next, three prototypes will be made: one with wide wings, one with narrow wings and one with wings that are folded up at the tips. The only variable I will change is the shape of the wings. To keep the test fair, every plane will be made from the same kind of A4 paper, and all of them will be thrown from the same spot in the hallway by the same person. Each plane will be thrown five times, and every distance will be measured with a tape measure and recorded in a table. I will use the average, not the best throw, because one lucky throw could give the wrong answer. If the results are surprising, I will repeat the test instead of guessing why. Finally, the winning design will be improved and tested again. If the narrow wings fly the farthest, it will show that the Wright brothers' discovery also works for paper planes."
    }
  ]
});
