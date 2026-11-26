/* B1 Set 1 — Reading, in the format of Cambridge B1 Preliminary for Schools.
   Every text and question here was written for Kids School; none of it is official exam material.
   Item types: t:"mc" (o = options, a = index of the answer) and t:"type" (a = list of accepted answers). */
(window.EXAM_SETS = window.EXAM_SETS || []).push({
  id: "b1-1", level: "B1", n: 1, title: "B1 Set 1", skill: "Reading", about: "27 questions · about 35 min",
  parts: [
    {
      name: "Part 1", title: "Notices and messages",
      hint: "Read each short text. What does it say? Choose the correct answer.",
      items: [
        { t: "mc",
          stim: "<h4>SCHOOL LIBRARY</h4><p>Books borrowed before the holiday must be returned by Friday 5 September.<br>Late books: 10p per day.</p>",
          o: ["Students cannot borrow books during the holiday.",
              "Students who bring holiday books back after 5 September will have to pay.",
              "The library will be closed until Friday 5 September."],
          a: 1, why: "\"Late books: 10p per day\" means you pay money if you return a book after the date. The notice says nothing about the library being closed." },
        { t: "mc",
          stim: "<p>Hi Mia, practice has moved from the gym to the sports field today because the gym floor is being painted. Same time as usual. Bring trainers, not indoor shoes!<br>Coach Lee</p>",
          q: "Why did Coach Lee write this message?",
          o: ["to tell Mia that practice will be in a different place",
              "to tell Mia that practice will be at a different time",
              "to ask Mia to help paint the gym floor"],
          a: 0, why: "Practice \"has moved from the gym to the sports field\", so the place has changed. The time is the \"same time as usual\"." },
        { t: "mc",
          stim: "<h4>CRYSTAL GROWING KIT</h4><p>Adult help needed when using hot water.<br>Do not move the jar for three days or the crystals will stop growing.</p>",
          o: ["An adult must do the whole experiment for you.",
              "The jar should stay in the same place for three days.",
              "You need to add hot water every day for three days."],
          a: 1, why: "\"Do not move the jar for three days\" means it must stay where it is. An adult only has to help with the hot water." },
        { t: "mc",
          stim: "<p><b>To:</b> Year 7 parents<br><b>From:</b> Mr Brooks</p><p>The museum trip on Thursday is now full. If your child still wants to go, please email me and I will add their name to the waiting list in case someone cancels.</p>",
          o: ["The trip will only happen if more students decide to go.",
              "Parents should email Mr Brooks if their child cannot go.",
              "A child without a place may get one if another child drops out."],
          a: 2, why: "A waiting list \"in case someone cancels\" means you might get a place later, if another student stops going." },
        { t: "mc",
          stim: "<h4>SWIMMING POOL</h4><p>Children under 8 must have an adult with them in the water at all times.<br>Children aged 8–11: an adult must stay in the building.</p>",
          o: ["A ten-year-old can swim while a parent waits in the pool café.",
              "A seven-year-old can swim alone if an adult watches from the side.",
              "Nobody under twelve can swim without an adult in the water."],
          a: 0, why: "A ten-year-old is in the 8–11 group, so the adult only has to be in the building. A seven-year-old needs an adult in the water, not at the side." }
      ]
    },
    {
      name: "Part 2", title: "The bird counter",
      hint: "Read the article, then choose the correct answer to each question.",
      text: "<h4>The bird counter</h4>" +
        "<p>Twelve-year-old Leo Hartmann never planned to become a scientist. Two years ago, his grandmother gave him an old pair of binoculars, mainly, he thinks, to get him away from his computer games. “I was a bit annoyed at first,” he admits. “I’d asked for a new game.” But one rainy Saturday, with nothing else to do, he started watching the birds in the garden and writing down what he saw.</p>" +
        "<p>At first he only knew three or four kinds of bird. He borrowed a guide from the library and learned to recognise more, but what really interested him was the numbers. He noticed that far fewer small birds came to the garden on days when the neighbour’s cat was outside, and he began recording the weather too. After six months, he had filled four notebooks.</p>" +
        "<p>His science teacher, Mrs Okafor, suggested he send his results to a national project in which ordinary people count birds for researchers. Leo wasn’t sure. “I thought real scientists would laugh at a kid’s notebooks,” he says. In fact, the project was pleased to have them: very few people had kept such careful records for so long in one place.</p>" +
        "<p>Since then, Leo has given a talk at his school and helped two classes of younger children start their own counts. He says speaking in front of two hundred students was much more frightening than he had expected, and that he read the first half of his talk far too fast. “By the end I’d calmed down. The questions were actually the best part.”</p>" +
        "<p>Leo still plays computer games, though less than before. He hasn’t decided what job he wants in the future. “People keep asking me if I’ll be a bird scientist. Maybe. Right now I just want to find out why the blackbirds have stopped coming to our garden this year.”</p>",
      items: [
        { t: "mc", q: "According to Leo, why did his grandmother give him the binoculars?",
          o: ["She knew he was interested in birds.", "She wanted him to spend less time playing games.", "He had asked her for a pair.", "She had bought a new pair for herself."],
          a: 1, why: "He thinks she gave them \"to get him away from his computer games\". He had asked for a game, not binoculars." },
        { t: "mc", q: "What did Leo find most interesting about watching the birds?",
          o: ["drawing them in his notebooks", "learning what each kind was called", "keeping the neighbour's cat away", "seeing how the number of birds changed"],
          a: 3, why: "\"What really interested him was the numbers\": he noticed fewer birds came when the cat was outside." },
        { t: "mc", q: "How did Leo feel about sending his results to the national project?",
          o: ["worried that nobody would take them seriously", "sure that they would be useful", "annoyed that his teacher had suggested it", "proud of how long he had worked on them"],
          a: 0, why: "He \"wasn't sure\" and thought \"real scientists would laugh at a kid's notebooks\"." },
        { t: "mc", q: "What does Leo say about the talk he gave at school?",
          o: ["He forgot some of what he wanted to say.", "The students asked him very few questions.", "He was more nervous than he thought he would be.", "It lasted longer than he had planned."],
          a: 2, why: "Speaking to two hundred students \"was much more frightening than he had expected\". He read too fast, but he doesn't say he forgot anything." },
        { t: "mc", q: "What would Leo probably say about himself now?",
          o: ["\"I've given up computer games because birds matter more.\"", "\"I've already decided to study birds when I'm older.\"", "\"Scientists only became interested in my work after my talk.\"", "\"I enjoy trying to find answers to questions about what I see.\""],
          a: 3, why: "He still plays games and hasn't chosen a job. What he wants is \"to find out why the blackbirds have stopped coming\": he likes answering questions." }
      ]
    },
    {
      name: "Part 3", title: "Weekend clubs",
      hint: "Five young people each want to join a weekend club. Read about the seven clubs (A–G) and choose the best club for each person.",
      text: "<h4>Weekend clubs in Marlow</h4>" +
        "<p><b>A · River Kayak Club</b><br>Saturday mornings, 9–11. For confident swimmers aged 12 and over. All equipment provided and no experience needed. £6 a session.</p>" +
        "<p><b>B · Code Lab</b><br>Sunday afternoons at the town library. Learn to make your own computer games. Beginners welcome, but you must bring your own laptop. Free.</p>" +
        "<p><b>C · Junior Chefs</b><br>Saturday afternoons. Cook a dish from a different country each week and take it home for dinner. Ages 9–14. £8, including ingredients.</p>" +
        "<p><b>D · Hill Runners</b><br>Sunday mornings at 8. Runs of 5–8 km through the countryside. You must already be able to run 5 km without stopping. Ages 11 and over. Free.</p>" +
        "<p><b>E · Stage Door</b><br>Saturday mornings. Acting classes for ages 10–16. We are preparing a play that will be performed for the public in December. £5.</p>" +
        "<p><b>F · Makers’ Workshop</b><br>Saturday afternoons. Build useful things from wood and metal. Tools provided. Ages 13 and over only. £7.</p>" +
        "<p><b>G · Wild Sketchers</b><br>Sunday mornings in Riverside Park. Draw plants and animals outdoors with a local artist. All materials provided. Any age. £3.</p>",
      items: [
        { t: "mc", stim: "<p><b>Ana</b> is twelve. She loves being outdoors and wants to try a sport she has never done before. She is a strong swimmer. Her family is always busy on Sundays.</p>",
          o: ["River Kayak Club", "Code Lab", "Junior Chefs", "Hill Runners", "Stage Door", "Makers' Workshop", "Wild Sketchers"],
          a: 0, why: "Kayaking is an outdoor sport for confident swimmers aged 12+, with no experience needed, and it is on Saturday. Hill Runners is on Sunday." },
        { t: "mc", stim: "<p><b>Ben</b> is ten. He enjoys making things with his hands and would like to have something to show his family afterwards. He is only free on Saturday afternoons.</p>",
          o: ["River Kayak Club", "Code Lab", "Junior Chefs", "Hill Runners", "Stage Door", "Makers' Workshop", "Wild Sketchers"],
          a: 2, why: "Junior Chefs is on Saturday afternoon, takes ages 9–14, and he takes the dish home. Makers' Workshop is also on Saturday afternoon, but it is for ages 13 and over." },
        { t: "mc", stim: "<p><b>Chloe</b> is thirteen. She is quite shy and wants to become more confident about speaking in front of other people. She can only come on Saturdays.</p>",
          o: ["River Kayak Club", "Code Lab", "Junior Chefs", "Hill Runners", "Stage Door", "Makers' Workshop", "Wild Sketchers"],
          a: 4, why: "Acting in a play for the public is practice at speaking in front of people, and Stage Door is on Saturday mornings." },
        { t: "mc", stim: "<p><b>Dan</b> is eleven. He isn't keen on sport, but he loves computers and has his own laptop. His parents cannot pay for a club at the moment.</p>",
          o: ["River Kayak Club", "Code Lab", "Junior Chefs", "Hill Runners", "Stage Door", "Makers' Workshop", "Wild Sketchers"],
          a: 1, why: "Code Lab is free, it is about computers, and he has the laptop he needs. Hill Runners is free too, but he doesn't like sport." },
        { t: "mc", stim: "<p><b>Eva</b> is fourteen. She wants a quiet activity in nature on Sunday mornings. She dislikes running and has only a little pocket money to spend.</p>",
          o: ["River Kayak Club", "Code Lab", "Junior Chefs", "Hill Runners", "Stage Door", "Makers' Workshop", "Wild Sketchers"],
          a: 6, why: "Wild Sketchers is outdoors in the park on Sunday mornings, it is quiet, and it costs only £3. Hill Runners is on Sunday morning too, but she dislikes running." }
      ]
    },
    {
      name: "Part 4", title: "Sea otters",
      hint: "Read the text and choose the correct word for each gap.",
      text: "<h4>Sea otters</h4>" +
        "<p>Sea otters are among the few animals that use tools. A sea otter will dive to the sea floor, find a stone, and use it to break open shellfish while floating <b>(1)</b> ______ its back. Many otters even keep a favourite stone in a pocket of loose skin under one arm.</p>" +
        "<p>Unlike most sea animals, otters have no thick layer of fat to <b>(2)</b> ______ them warm. Instead, they <b>(3)</b> ______ on their fur, which is the thickest of any animal: a single square centimetre can contain up to 150,000 hairs. Otters <b>(4)</b> ______ several hours a day cleaning it, because dirty fur lets cold water reach the skin.</p>" +
        "<p>When they sleep, otters often hold hands or wrap themselves in seaweed so that they do not <b>(5)</b> ______ away from the group. Sea otters were once hunted for their fur until very few were left. Today they are protected by law, and their numbers have slowly <b>(6)</b> ______ in many areas.</p>",
      items: [
        { t: "mc", q: "Gap 1", o: ["at", "in", "on", "by"], a: 2, why: "We say \"on your back\" (lying with your back down): floating on its back." },
        { t: "mc", q: "Gap 2", o: ["keep", "stay", "hold", "save"], a: 0, why: "\"Keep someone warm\" is the fixed phrase. \"Stay warm\" has no object: you can't \"stay them warm\"." },
        { t: "mc", q: "Gap 3", o: ["believe", "depend", "need", "use"], a: 1, why: "Only \"depend\" is followed by \"on\" with this meaning: they depend on their fur (they need it to live)." },
        { t: "mc", q: "Gap 4", o: ["cost", "last", "pay", "spend"], a: 3, why: "You \"spend time doing something\": otters spend several hours a day cleaning their fur." },
        { t: "mc", q: "Gap 5", o: ["climb", "float", "fly", "walk"], a: 1, why: "The otters are asleep on the water, so the sea could make them float away from the group." },
        { t: "mc", q: "Gap 6", o: ["raised", "added", "lifted", "increased"], a: 3, why: "Numbers \"increase\" by themselves. \"Raise\" and \"lift\" need an object: somebody raises something." }
      ]
    },
    {
      name: "Part 5", title: "An email from Jo",
      hint: "Read the email. Write ONE word in each gap.",
      text: "<p>Hi Sam,</p>" +
        "<p>Thanks for your message. I’m sorry I haven’t written <b>(1)</b> ______ so long, but we’ve had exams all month.</p>" +
        "<p>Guess what? Last weekend I went camping, which I had never done <b>(2)</b> ______ . My cousin, <b>(3)</b> ______ is two years older than me, taught me how to put up a tent. It wasn’t as easy <b>(4)</b> ______ it looks! On the second night it rained <b>(5)</b> ______ much that we had to sleep in the car.</p>" +
        "<p>Are you still coming to visit in August? If you are, let’s go camping together. I’m really looking forward <b>(6)</b> ______ seeing you.</p>" +
        "<p>Write soon,<br>Jo</p>",
      items: [
        { t: "type", q: "Gap 1", a: ["for", "in"], why: "\"I haven't written for so long\": use \"for\" with a length of time. (\"In so long\" is also heard.)" },
        { t: "type", q: "Gap 2", a: ["before"], why: "\"I had never done it before\" = at any time earlier than that weekend." },
        { t: "type", q: "Gap 3", a: ["who"], why: "\"Who\" adds extra information about a person: my cousin, who is two years older than me, …" },
        { t: "type", q: "Gap 4", a: ["as"], why: "The pattern is \"as + adjective + as\": it wasn't as easy as it looks." },
        { t: "type", q: "Gap 5", a: ["so"], why: "\"So much that …\" shows a result: it rained so much that they had to sleep in the car." },
        { t: "type", q: "Gap 6", a: ["to"], why: "\"Look forward to + -ing\": I'm looking forward to seeing you." }
      ]
    }
  ]
});
