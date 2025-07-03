const PASSWORD = "Conclave216";

function checkPassword() {
  const input = document.getElementById("password-input").value;
  const error = document.getElementById("wrong-pass");

  if (input === PASSWORD) {
    document.getElementById("password-prompt").style.display = "none";
    document.getElementById("main-content").classList.remove("hidden");
  } else {
    error.style.display = "block";
  }
}


const notes = [
  {
    date: "June 10th, 2025",
    text: `Dear Mirabelle, 

I probably already miss you a ton… I can’t believe I’m not gonna see you for like 2 months, but if Ghandi could go weeks without food, Shaurya’s dog can go hours without eating, I can go a couple weeks without Mirabelle I guess.. I really hope you are having fun in Japan and are having fun with all your friends. I am excited to grind for the next two months because that way it’ll make it all the more worth it when I see you again in person. Also if you find some Japanese dude to replace me with, they better be like a Japanese version of me. Anyways have fun and I miss you a lot (or whatever…)

Sincerely,

Ryan Shahbaba`
  },
  {
    date: "June 11th, 2025",
    text: `Dear Mirabelle,

You are probably at Disney right now, but like 5,500 miles away :(. I remember Disney, genuinely one of the most fun experiences I’ve had with you (and in general too). You may have not realized or maybe realized idk, but that was the first time in years I’ve worn shorts around someone. You were the first person I felt comfortable enough dressing in shorts around (as stupid as that sounds). I hope you have as much fun at Disney today as we did that day! Miss you probably or wtv.

Sincerely,
Shahbaba, Ryan Shahbaba`
  },
  {
    date: "June 12th, 2025",
    text: `Dear Ethan Hunt,

If that’s even your real name. It’s not. It is day 3 of you being gone. You are probably in a museum right now. I miss resting my face on top of your head and sleeping. Sleeping is nice, I sleep easier when I’m with you, not cus you’re boring but because you’re calming. It’s like the same effect petting a dog has. I enjoy being calm around you, even though it’s more of a mix of both calm and excited, which sounds impossible but you make it possible. You’re like the impossible. Anyways this message will self destruct in 5 seconds.

Sincerely,
The entity`
  },
  {
    date: "June 13th, 2025",
    text: `Dear Mirabelle Jiang,

I would like to congratulate you on dating me (because I’m so awesome) and thank you again as your regional boyfriend officer for being the goat. I know I’ve thanked you before for always being patient and helping me out through arguably one of the weirdest points in my life, but I genuinely can not thank you enough. Your ass kept me moving and making sure I actually worked on my apps and stuff during a point in my life I really had no vitality. By giving me “deadlines” so you could look over my essays and stuff you forced me into a position where my fear of embarrassing myself outweighed my intrinsic need of being self reliant at the time. And I really appreciate how supportive you were of me during that time man. 

I want you to know I always want to be the same thing for you. Although I would never hope you have low moments like that in your life, I want you to have someone you can “lean” on and get support from like you did for me. You are genuinely one of the most thoughtful people I know, and it inspires me to become more like you, because if anyone deserves a Mirabelle in their life, it’s you.

I prolly miss you still or wtv…

Sincerely,
Ryan Shahbaba
Mirabelle’s Boyfriend`
  },
  {
    date: "June 14th, 2025",
    text: `To Mirabelle Jiang,

I’m shot and I don’t have much time so bear with me. “Irony poisoned” is a term my friends often use to describe me, as you probably have grown wary of by now, I’m very fond of bits and will use them in almost any situation. And although I tone my bits around you and act more serious, in a way our relationship itself is ironic. It’s ironic in the sense that nothing we have done either in public or in private would be something I’d ever imagine doing with someone. You make me subconsciously speak in a different manner and I feel a greater need to present myself to you physically and emotionally while also feeling more relaxed and poised when discussing difficult topics. I think 4 months ago I would’ve loathed what I’ve become now, but I’m really glad for the change and I’m really glad I met you. And I’m glad I met a partner who id feel comfortable doing all this stuff with in the first place because had I not I think I would’ve gone through the rest of my life a pussy.

Anyways I’ve fully bled out now so responding to this would be futile (but do respond anyways).

Sincerely,
Ryan Shahbaba
2006-2025 (in this bit I’m also older than you)`
  },
  {
    date: "June 15th, 2025",
    text: `Dear Mirabelle Jiang,

Four months ago on this date (for me atleast) it was our valentines date. Well technically, I know it technically happened the day after, but let’s say it was on the actual day cus that way it would work out better.  Anyways I remember how nervous I was for that day, I went overboard on the presents I procrastinated on because I really wanted to impress you and try to “make up” for being bum Ryan the past couple months. I remember the 15 minutes leading up to you pulling into the UTC parking lot I nervously roamed around the different stores carrying the boat load of shit I got thinking of how to greet you. Eventually I met you in the parking lot and greeted you in the most awkward way possible, by hunching over awkwardly with like 5 things behind my back while the wind was blowing in my face. And even though I felt so stupid holding a gigantic heart shaped piece of wood with a teddy bear, a singular 3d printed rose amongst other stuff, I remember enjoying that valentines day so much. On my walk back from our date, I remember calling my friend like a lil school girl out of excitement because of how much I enjoyed the date. And I can honestly say, every single date after has felt the exact same. I have not once felt calm before a date, and I most definitely not felt calm after one. Pretty much rambling here on this note and my thoughts are very scattered, but that is just how you make me feel. You trigger a burst of random ahh emotions and always get me excited, which I’d argue is very hard considering how prone I am to getting bored of something that isn’t a dataset.

I hope at this point I don’t miss you that much, but considering how boring it must be without you, I prolly am.

Anyways, thanks for being my valentines :).

Sincerely,
Ryan Shahbaba`
  },
  {  
    date: "June 16th, 2025",
    text: `Dear Mirabelle Jiang,

Ok all cards on the table full disclosure, just everything out and about, it’s been 4 months since we started dating! Happy 4 month-versery (apparently the actual term is mensiversary but I’m not gonna use that). Anyways this has honestly been some of the most stressful (in a productive way) and best 4 months of life. And when I stay stressful, I mean in a good way, studies actually show that often a lil stress can benefit you, and I would argue that the stress I feel to improve for you has garnered some of the best outcomes for me both physically and emotionally. But it’s also just been some of the most fun I’ve had in a while. I have loved getting to know you and the stuff you like and getting to hangout with you and look at your photos and boasting about you and hanging out with you and dreaming about and secretly egging your house while you are away, and learning things from you and (you get the point). I’m grateful you force me to embrace things I’m not comfortable with, and help introduce new/previously worn out activities to me like getting me to start reading again and kinda teaching me how to take photos (ima get better before you come back mark my words). But most of all I just enjoy having someone I can say goodnight to and wake up to a message from them in the morning. I enjoy having you around and I’m grateful for all you’ve done for me the past 4 (technically more (that rhymed) months). Thank you for being such a good girlfriend to me Mirabelle.

Sincerely,
Ryan Shahbaba`
  },
  {  
    date: "June 17th, 2025",
    text: `Dear Mirabelle Jiang,

Glass Onion. That was the first time I successfully got my arms around you. At first I only attempted to put my arms around you cus I figured that’s what a guy does. Didn’t know any better and wasn’t used to making the first moves, but when you finally rested your heads on my arms and were perched up against my side in those uncomfortable chairs in my dads office. I realized why some people liked cuddling.  It’s because it releases hormones like oxytocin, serotonin, and dopamine, which promote feelings of happiness, relaxation, and bonding! But on a more serious note, is it just feels good to have the girl you like so close to you. To feel like the most special person to someone in a given moment and to be so close to them is a rather nice feeling. But it’s not a feeling I would care for had it been anyone else, the idea of cuddling with anyone else has always felt gross to me. But with you it’s easy. Anyways glass onion, I’ve never told you this but I’ve rewatched that movie twice after completing it the first time alone (cus we never finished it together). And I like to daydream about that moment with you while watching it. Whenever I feel tired I just play it in the background of my work and it gets me worked up again. I hope we can have more special moments like that in the future.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 18th, 2025",
    text: `Dear MoIRaBErLiEs (I tried),

You are like a catalyst. In chemistry catalysts speed up chemical reactions. You speed up a lot of things for me. You sped up my college app process cus I felt a greater need to do well and I worked a lil harder. You sped up my gym progress; like I’ve gymmed before but because of you I stayed consistent and worked harder. You help motivate me to grind math and again so I can be rich, grinding the math was always inevitable, but now I like doing it cus of you and that helped make the progress that much faster. I am very thankful to have met my catalyst for so many things that will hopefully set up the foundation for a more successful future. So really what I’m tryna say is whatever becomes of me in the future, you helped start the roots and you now own 12% of everything I’ll ever own.

Final thought as I’m writing this note, I miss my catalyst, but I’ll keep working hard till she comes back (and after obviously).

Sincerely,
RhYAgN (again I tried and idc if this is corny I spent like solid 30 minutes committing the periodic table to memory for caltech just to realize they give the table on the exam and now I’m using it.)`
  },
  {
    date: "June 19th, 2025",
    text: `Dear Mirabelle Jiang,

I think since talking to you I’ve gotten better at communication not just within the relationship but outside too. I think this is just one of the many positive changes you’ve brought upon my life. Before you I would usually just store my feelings and let them store up rather than ever addressing the problem, leading to it only getting worse with time. But since you’ve kinda forced me out of that wackass shell I’ve been much happier, and that all because of communication (who would’ve thought…)

But when I say I’ve gotten better at communication, I don’t mean just communicating my qualms, but also communicating my feelings. I think you’ve made it so easy for me to like you and be so verbal about it. Something I once found cringe and vomit worthy has become so natural for me. I find myself thinking about what to compliment you on each morning so that way it’ll be readily available when I bid you farewell. It’s something now embedded in my morning activities; and I always enjoy getting to think of a new one each night. Some would describe that as a challenge, to think of something unique everytime, but with you the possibilities are infinite, it’s really just a matter of picking the compliment that I like the most is the challenge. Anyways I’m going to sign off with a compliment because I was just thinking about this while writing this note:

You’re the most pretty woman I’ve ever laid my eyes upon. (Bleghhhhh)

Miss you fine shyt,
Ryan Shahbaba`
  },
  {  
  date: "June 20th, 2025",
  text: `I often tell you that you are exactly my type. But technically that isn’t true. Because if I’m being honest although you are exactly my type now, you weren’t before I met you, because before you I had no type. I had no rubric of what an ideal partner should be, I only cared if they were tall enough to where I wouldn’t look like a pedophile next to them, and they were smart enough to where I wouldn’t feel like I was talking to a wall. But now my rubric has changed, it’s simply just: “Mirabelle”<br><br>

<ul>
  <li>Height: Mirabelle’s height</li>
  <li>Intellect: Mirabelle’s intellect</li>
  <li>Humor: Mirabelle’s humor</li>
  <li>Work ethic: Mirabelle’s work ethic</li>
  <li>Looks: Mirabelle’s looks (duh)</li>
  <li>Age: Mirabelle’s age or like 40+…</li>
</ul>

Voice, hair, lips, personality, hobbies — the list goes on, but it’s all just you. I’m mad I met you so early in life because now to me, everyone else seems so bland. But I’m still grateful I met you during one of the most vital parts of my life. Thank you for showing me what “perfect” means.<br><br>

Sincerely,<br>
Ryan Shahbaba<br><br>

P.S.: I lowkey highkey got a mad crush on you.`
  },
  {
    date: "June 21th, 2025",
    text: `Dear Mirabelle Jiang,

I love how I always get to try new cuisine with you. Believe it or not I actually didn’t eat much Asian cuisine until Sage. The only exception was the occasional sushi and maybe a potsticker. And until this year I really didn’t eat much Chinese cuisine in specific. And man have I been missing out. Beef rolls always get me drooling; Chinese hotpot was really good and I enjoyed learning about duckblood and having you help me pick out the best food; dumplings are genuinely always got me silent cus I’m busy enjoying how good they are (and it’s hard to keep me silent); and I got to enjoy all of that and more with you. I like how you never make me feel out of place for not knowing some of this stuff and you are always genuinely excited to teach me. I also like jus sitting across from you and watching you eat, I always find it cute when you cover ur mouth with ur nice hands. Anyways I can’t wait for you to come back and show me more dishes once I break my meal plan!

Missing you (and Chinese cuisine),
Ryan Shahbaba`
  },
  {
    date: "June 22nd, 2025",
    text: `Dear Mirabelle Jiang,

I don’t think you take enough pride in just how cracked you are. Not just academically speaking, but artistically. I know I always compliment your piano skills, but one of the moments I genuinely was like “damn this girl is badass” was when I saw your fashion portfolio. It was honestly incredible, and it made me want to pursue my own artistic mediums, I have a couple ideas for your birthday and I think there’s one that requires a little artistic capability but I wanna do something that I think you’d appreciate. Anyways I really hope you get to be so rich you can pursue something in the arts, especially fashion. You have this crazy power to turn a literal college sweater into something fashionable (I really like your NU top), you make your own clothes, you have a superpower where you can pair any top (me) with any bottom and you always look good good doing it. I mean you could probably pull off those disgusting vegan leather pants I always send you. But anyways you are really gifted in like every domain you try in, especially the arts, and as someone who is obsessed with you, I can appreciate that.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 23rd, 2025",
    text: `My Dearest, Mirabelle,

(With a comma after dearest). I like when we listen to musicals on the car ride together; taking you to a musical is just one of the many things I wanna do with you, as you know the list is very long, I wanna watch Phantom of the Opera, or Hamilton and let you dress nice and take you out to a nicer restaurant before so you can have fun, I hope we get to have that experience. I hope we get to have a lot of experiences together, everytime I see a reel talking about a nice restaurant or I hear about a nice place to go on a date or I literally just go to the library or watch a movie, I think of you. I want to do so much with you and you get me genuinely excited about doing all these stuff I once considered corny. Anyways I can’t wait for you to come back so we can actually do all this together :).

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 24th, 2025",
    text: `Dear Mirabelle Jiang,

You are my best friend. Not in the sense that Kevin Peng is, he’s my guy best friend, but you are my best friend. I don’t know if you view it that way but I think these past couple months have made me realize that. When I say best friend I don’t mean the kind of friend I’d slam a door in their face or flip them off (I know you aren’t Kevin or Melody). I mean the kind of best friend I can honestly talk to hours without feeling fatigue; the kind of friend where (god forbid) I could go weeks without talking to and catch up with like nothing happened; the kind I feel like I can show my most immature self to and see her most vulnerable self and be comfortable with it. I really appreciate you and I’m glad I met you and was able to form such a special bond. Obviously title wise you are a tier above a best friend, but you are ultimately both my girlfriend and best friend and I’m really glad I feel this way about you. It’s more than just someone I can look at and be like “damn she hot,” it’s someone I can talk to and be like “damn she’s funny,” someone I can listen to and be like “damn she’s mature,” and someone I can just sit and cuddle with, without saying anything and be like “damn this is nice.” Thanks for being such an amazing girl and best friend.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 25th, 2025",
    text: `Dear Ryan,

We have like THE baddest girlfriend ever. But on a more serious note, it is weird to think about just how lucky we got, to have a girl who’s 10/10 across the board. I think you should be very grateful, cus I sure as hell am. Let’s talk about all the things we miss about Mirabelle so we don’t forget (not that we actually could). We miss how Mirabelle always gives us advice on appearances and personality, and how cute she looks when she scrunches up her face to be angry, or how pretty she looks when she’s just eating. Hopefully we haven’t forgotten her nice voice by now cus we have been calling her everyday (you better be picking up that phone asshole). We sure as hell better not forget how nice her hands feel, especially when you are caressing them. I know I definitely miss how excited she looks when listening to Rach while she’s by our side (she is the passenger of course). I’m gonna space these notes between us out in the coming weeks so that way we can cover all the bases, but let’s just take a moment to appreciate how unironically lucky we got. 

Don’t fuck this up.

Sincerely,
Ryan (but like past Ryan who’s dead now)`
  },
  {
    date: "June 26th, 2025",
    text: `Dear Wanlin (can I call you that?),

anyways, today you are going to China (I’m like 99% sure lol). And that got me thinking, what it would be like if I went to China with you, or just anywhere with you. I think this might come off front but sometimes I think of us going on trips together, even if it’s something like a ski trip. I promise I wouldn’t get freaky, (or maybe I will), but it’s a thought I can’t control. I honestly can’t control a lot of thoughts of us just hanging out on future dates and it’s something that gets to me sometimes. Because I like you so much, but I don’t know what’s a normal amount of liking someone. I have dreams of coming to Chicago on my breaks and surprising you, or just us two debriefing over the Summer about how crappy our internships are or whatever. But in each one of these visions, I honestly feel really happy thinking about them, so at a certain point, I just stopped trying to stop blocking them out, and just enjoyed them. I think I just enjoy the idea of hanging out with you. And in hanging out with you, I enjoy the idea of making you happy too. I hope I get to pamper you one day on one of these imaginary trips. And I hope you think about these idiotic possibilities too, cus I personally in my professional opinion, think it would be nice.

Don’t fuck this up.

Sincerely,
Rayan`
  },
  {
    date: "June 27th, 2025",
    text: `Dear Mirabelle Jiang,

Organized, not something I am, but something I am slowly morphing into every second I talk to you. I’ve become more confident in my ability to pick, more confident to plan, and more confident to be organized in general. (Changed this part more recently cus this note lacked depth) I’m organized because of you. Because I now plan my day around you; figuring out when you can call, when you are more free to text, when you are asleep, I plan it around you and although that might be a tad down bad (which as you know I am) it has led to a lot of structure in my life. I have slowly become more prone to going to the gym in the morning so by the time you wake up I’m free to call, I’ve become more prone to finishing more work so I can sleep earlier and call you earlier, I’ve even incorporated some stuff to wake myself up after our calls so I’m ready to start the day off (I usually wake myself up by doing as many pushups without stop, so really you calling me early is helping me hella); anyways time and time again I realize just how much of a positive influence you’ve been in my life, and for that I’m forever grateful. Thank you for being such a good girlfriend to me.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 28th, 2025",
    text: `Dear Mirabelle Jiang,

Hey, it’s me, your boyfriend. You remember me? I’m so alone and so sad and I’m dying Mirabelle, I need you here… anyways! You know what one of my favorite meals was? The Mendocino sandwich and soup that I didn’t get to eat with you, because as I ate it, all I could do was think about that day with a gigantic dumb smile on my face and I swear that sandwich and soup tasted better than any sandwich and soup I’ve ever had before (probably because of you). I think if I could recreate any meal, it would be that one. Anyways we should get Mendocino sometime when you come back, I wanna recreate that day all over again because it was a 10/10 day (up until after that sandwich and soup). Anyways I miss you (and that sandwich and soup). Please hurry up and come back!

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "June 29th, 2025",
    text: `Dear Mirabelle Jiang,

I never told you why my heart beat so fast while you were with me. Like yes it always beat fast, but up until recently it never beat that fast, and it was because I couldn’t get the thought of kissing you out of my head. Every time you looked up at me with those pretty eyes and fluttering lashes while laying on my chest all I could do was look away because this annoying thought would pop into my head. And when I looked away from your eyes, my eyes would always fixate on your lips. I know I’ve probably told this already, but your lips are honestly the most enticing thing I’ve ever laid my eyes on. I wanted to feel them so bad, but I couldn’t bring myself to make a move. So instead I’d just sit there and get nervous thinking about it, and my heart would beat faster and faster. And that night on the couch I couldn’t take it anymore, and I just started kissing your hands, and then the back of your head, then I worked myself all around your face until I hit the jackpot and I can honestly say that was one of the nicest nights of my life. Even though we were both so bad at it, it was like my heart finally reached its carrying capacity of beats per minute and exploded. And the way your lips felt, the smooth texture of your chapstick or lipstick or whatever, just the way it tasted, I became down bad. I miss how your lips feel and I miss that night, and I miss getting to be nervous around you. I hope I can be more nervous with you in the future :). 

Also did I mention I really miss your lips, I don’t know how I’ll last this long without them….

And I miss you obviously, this note was a long yap of how much I wanted to kiss you and how much I miss it.

I miss your lips.

Sincerely,
Ryan Shahbaba

PS: I really really miss how your lips felt. `
  },
  {
    date: "June 30th, 2025",
    text: `Dear Mirabelle Jiang,

It’s officially been a month !! (Sorta) Technically it’s just the end of the month but for my sanity I’m gonna pretend that at this point it’s been a month apart meaning I somehow survived an entire month. It’s funny to think there was a time where it was easier avoiding you, but now all I can think about is how you’ll be gone and I regret those stupid moments so much how. If I could do it all over again, I’d convince myself to talk to you more, ask you to hangout at the coffee shop more, stop by the h corner more, spend more time with you before I lost it all. I know you’ll be back but my god at the time of writing this I already miss you so bad I can only imagine how much I’ll miss you when you read this. Please hurry up and come back I miss you.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 1st, 2025",
    text: `Dear Mirabelle Jiang,

It’s the first of the month. You know what that means! In another month I can see you again. I hope you’re enjoying China (not too much without me ofcourse) but I can’t help but imagine I’m tweaking out by now. Or maybe not, maybe I’m really strong minded, but we both know that’s not true. 

I always tell you how lucky I am to have pulled you, but u can’t believe I left it to chance. I flipped a coin in debating to tell Melody I liked you knowing that once I told her, you’d know and I’d have to potentially face the possibility of losing you as a friend. Now as you know I’m a statistician at heart and while statistics tell us a fair coin flip would be a 50% chance of landing on either side, what they won’t tell you is that when the person flipping the coin already has a predetermined outcome in mind, they’re gonna flip the coin very softly and catch it fast so there’s a large chance it lands in their favor. I did leave it to chance, but I knew I wanted you so I made sure that coin landed on Heads no matter what, so I’d have no excuse but to come clean. I still have that coin in my room (ironically it’s a Pokémon coin) but it’s been facing heads since the day I flipped it. Anyways, although there’s no real way of knowing if that outcome was fated, just know I made sure fate would work in my favor.

I miss you so much man, and I really hope we’re going well up to this point. Come back soon :(

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 2nd, 2025",
    text: `Dear Mirabelle Jiang,

The day leading up to me needing to talk to you in person about you seriously considering the LDR possibility (and freak possibility…) were some of the scariest hours of my life. I was afraid you’d outright say no and I was trying to think of ways to bring up my talking points as if it was some Mock Trial closing, and when the time finally came I just kinda forgot everything and just started blabbering. I think only you can get me to that point, where I lose all focus, because all I could think during that conversation is “shit she’s so amazing, I really hope it works out.” I am a completely different person around you. You always get me stuttering and just forgetting stuff, you get me to do stuff I seriously would not do for anyone else (like reading blegh!!!) or getting up at 5 AM to watch the sunset, or even these notes. I think we always joke that there’s an innie and outtie Ryan, I think at this point I’m so down bad for you that outtie Ryan has been long dead. I don’t think I’ve told you this, but its lowkey gotten to the point where I actively get bored talking to friends because I’m just thinking about you, I miss you so much you loser! Like obviously I’m writing this without knowing how we are going this far into you being gone, but I’m sure I miss you a crazy ton, even if (God forbid) you’re mad at me or something. And if I did something to piss you off up until this point, I’m sorry I give you permission to slap future Ryan upon return. Anyways please come back I miss my girl bro…

I’m so down bad for you.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 3rd, 2025",
    text: `Dear Mirabelle Jiang,

My couch still smells like you. I don’t think it’ll last, but its smelt like you for like the past two days, I hope it continues… I lie down in the same spot every time I’m on the couch just thinking about you and of what we did. Not just the 𝓯𝓻𝓮𝓪𝓴𝔂 stuff obviously, but the other stuff too. Just cuddling and watching movies, building that mini lego heart, watching you ditch me for my dog (that cockblock…); and I honestly just miss you so much. I can’t wait to see you again, smell you, feel you. I want it all, I’m greedy as fuck. I’m dragging your ass into my house first day you come back, so I can memorize your smell and make a candle out of it. I think that would be nice, Mirabelle scented candles! Anyways this all to say once again, I miss you so much Mirabelle. For now though, I’ll just savor your scent while I still have it.

Sincerely,
Ryan Shahbaba`
  },
]

const startDate = new Date("2025-06-10");

function getTodayIndex() {
  const today = new Date();
  const diffTime = today - startDate;
  const dayOffset = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return Math.min(dayOffset, notes.length - 1);
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function displayNote(noteObj) {
  const noteDiv = document.getElementById("note");
  if (!noteObj) {
    noteDiv.textContent = "No note for today yet.";
    return;
  }
  noteDiv.innerHTML = `
  <div style="text-align: center; font-weight: bold;">${noteObj.date}</div>
  <div class="note-body">${noteObj.text.replace(/\n/g, "<br>")}</div>
`;
;
}

function getNoteByDate(dateStr) {
  const date = new Date(dateStr);
  const diff = Math.floor((date - startDate) / (1000 * 60 * 60 * 24));
  return notes[diff];
}

// Display today’s note
const todayIndex = getTodayIndex();
displayNote(notes[todayIndex]);

// Set max date for calendar to today
document.getElementById("calendarInput").max = formatDate(new Date());

// Archive button
document.getElementById("archiveBtn").onclick = function() {
  document.getElementById("calendarPopup").classList.remove("hidden");
};

// Calendar selection
document.getElementById("calendarInput").onchange = function(e) {
  const selectedDate = e.target.value;
  const note = getNoteByDate(selectedDate);
  const noteDiv = document.getElementById("pastNote");

  if (!note) {
    noteDiv.innerHTML = "No note for that day.";
  } else {
    noteDiv.innerHTML = `<strong>${note.date}</strong><br><br>` + note.text.replace(/\n/g, "<br>");
  }
};

function closeCalendar() {
  document.getElementById("calendarPopup").classList.add("hidden");
  document.getElementById("calendarInput").value = "";
  document.getElementById("pastNote").textContent = "";
}
