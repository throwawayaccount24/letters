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
  {
    date: "July 4th, 2025",
    text: `Dear Mirabelle Jiang,

Happy 4th of July! I know how big 4th of July is over there for you guys in China so I’m sure you are having tons of fun! Although we both absolutely LOVE July 4th, I have a confession to make. Recently my favorite holiday has become something else… Valentine’s day… I know, I’m embarrassed. But I can’t help but to think about this really nice Valentine’s day experience I had. Where I received my favorite gift of all time - genuinely undisputed as far as I can think - THE 7/11 CREWNECK!! I know I technically got that after Valentine’s day, but I genuinely love that crewneck so much, I don’t think you realize just how hilarious that gift was and how much it embodies me. I miss the crewneck but it brings me comfort knowing it’s with you across seas right now, I know you’ll take good care of it for me :). I wanted to make this more about the valentine’s day itself, but I have a note later on about that. I hope you sleep with the crewneck everynight like its me sleeping with you :) I’ll keep your box of notes with me like I’m sleeping with you. Already have a nice place picked out for it, right by my bedside where my parents can’t see, and I can wake up to every morning :). I’m using a lot of smiley faces and am kinda rambling but just know I’m grinning thinking about valentine’s day right now and can’t really focus on writing this in a coherent manner, man I really fucking miss you…

HURRY UP AND COME BACK  YOU ASSHOLE!!  

Sincerely,  
Ryan Shahbaba :(`
  },
  {
    date: "July 5th, 2025",
    text: `Dear Mirabelle Jiang,
    
I lowkey changed this note because I didn’t like it as much as my other ones. So this is present day Ryan speaking. Hi hello hey…

You always ask me how I’m going to last in college, and although I always joke about not being able to survive without, I think today I realized how I will actually be able to push through missing you. Whenever I work on a project, or go to the gym, or do something productive, I think of that as not just one step in improving myself, but moreover improving myself for you. And thats my biggest motivation that will let me survive without you. I get to work on myself to impress you every time I see you in person. And at the end of the day, thats all life is really about! Getting to impress Mirabelle is how I will push through college, get that 4.3, get that PhD offer, those internships, stranger body, and whatnot. I will survive (even though it will be hard). But I truly think I can do it. But right I am tweaking out because I miss you so much you asshole hurry up and come back. 

Sincerely,

Ryan Shahbaba`
  },
  {
    date: "July 6th, 2025",
    text: `Dear Mirabelle Jiang,
    
I don’t know what the future holds and I don’t claim too. I just know the one element I want it to have: us. I think thats corny but I really mean it. I want us to work, if not as a couple, as friends. I think this is a little dramatic but I am attached to you — not in a “IM GOING TO DIE WITHOUT YOU” way, but in a “Damn I just had this good meal I gotta share with Mirabelle” or “Aww I see this cute dog in the gym, Mirabelle might like to hear about it” kinda way. You are the singular person I genuinely feel the need to share things with, no matter how miniscule. I enjoy having you around, and although it’s naive to expect anything, I promise I’ll stay in contact no matter what. You are NOT getting rid of me that easily :). I miss you so much.
 
Sincerely,
  Ryan Shahbaba`
  },
  {
    date: "July 7th, 2025",
    text: `Dear Mirabelle Jiang,
    
Edit in post: (Can’t even make this up, this was just the note was about before we talked about this lol). 

Breaking up before graduation. I think that was the stupidest thing I’ve ever said, and I’ve said a lot of stupid things. It’s just sometimes I get scared thinking about what the future holds, and I didn’t like the idea of a future without you in it. I know thats a stark possibility but I just like you so much it would hurt thinking about. So instead of thinking about it, I just thought maybe the sooner I ripped the bandaid off the better (stupid I know). But in all honesty I don’t think my pussy ass could ever go through with ending it with you. I’d be on your doorstep begging for a 2nd chance after I realized the stupid mistake I made. To be frank, I like you so much Mirabelle and I want nothing more to make it work. I want to impress you with all my accomplishments and work towards new goals to support you. I want to be there for all your accomplishments and help you work through anything you are going through. I want to hold you in my arms (even if its just for a couple weeks at a time), and sleep by you and travel with you, there is just so many things I wanna do and it would be a shame to end it off so soon. I hope it works out and we get to do all that stuff, but at the very least I can hold you in my arms a little longer before you leave :).

Sincerely,
  Ryan Shahbaba`
  },
  {
    date: "July 8th, 2025",
    text: `Dear Mirabelle Jiang,

I am such a freak for you. The day you left and we were in the parking lot, all I could think is “damn I need more Mirabelle.” I literally don’t know why but I just wanted a kiss or something to satiate my yearning for you (though I know that wouldn’t be enough). I think you are genuinely the single meal I could never get full of. I wish you were here and we could do even more stuff together. I can promise you one thing, if we do do LDR, I will eventually lose patience waiting for you to come back and go over there myself and grab you. I miss filling up on my Mirabelle. I can’t wait for you to come back so we can do all the freak stuff (WITH THE NON FREAK STUFF OFCOURSE). Come back soon :(.

Sincerely,
Your biggest freak

Fan*`
  },
  {
    date: "July 9th, 2025",
    text: `Dear Mirabelle Jiang,

I always ramble on about how I do a lot of things with you I normally would never do with other people. I think the biggest one is being sincere. In the sense I’ll often tell people what they want to hear to help calm their nerves, or sugar coat the situation they may be in or whatever. Except with you I quite literally never have to sugar coat things because it’s so fucking easy to compliment you. Like you are my dream girl bro, personality, looks (yes I’m a freak), intelligence like damn bro. I think sometimes I just blurt out random compliments when talking to you because I’m like overflowing with them and I just can’t stop myself at this point. How you are real a person?—I dont know. Sometimes I wonder if this is like a personal hell, having to meet my dream girl so early in life and then go on with the rest of my life bored. Anyways in the mean time I’m going to enjoy every bit of you while I still have you :). I don’t care if I get more addicted thats a sacrifice I’m willing to make.
Sincerely,
Ryan Shahbaba`
  },
  {
   date: "July 10th, 2025",
    text: `Dear Mirabelle Jiang,

I still think about all the awkward moments I’ve had in regards to you. And they all always seem to revolve around not timing things right. Either waiting too long to confess feelings or make moves, or doing the complete opposite. But both types of mistakes are caused by the same thing: I don’t wanna mess things up. I like you so much that my (otherwise very very organized that we all know is very organized) brain gets confused and just blurts stuff out too early in the relationship or tells me to wait longer. I know I’m very scrambled usually, but something about you got my brain chemistry wired in a way where it locks in all on avenues except timing things right with you. I’m so addicted to you that I want to chase the high I feel whenever I’m around you and that gets my brain scrambled in a way where I have to carefully navigate how I time things so I can keep you. Basically what im saying is, you are like a drug, but a drug that I don’t wanna stop be addicted to. Blegh!!!

Sincerely,
Ryan Shahbaba`
  },
  {
   date: "July 11th, 2025",
    text: `Dear Mirabelle Jiang,

TODAY IS JULY 11TH AKA NATIONAL 7/11 DAY AKA NATIONAL SLURPEE DAY. ITS 7/11 TODAY MIRABELLE ITS 7/11!!! 7/11!!!!! LETS FUCKING GO!!! I miss my crewneck, I love 7/11 so much; like I liked it before, but since you gave me that 7/11 crewneck I have loved 7/11 since. Every time I see a 7/11 I get reminded of you (I know thats not a very flattering thing to be compared to but like damn do I miss you). Everything reminds me of you, and you are hardly even gone right now. I miss you so much man I’m tweaking out. This is a tweak out note. HAPPY 7/11!!! I miss you you asshole come back. COME BACK!!! 7/11 WOOO!!! COME BACK!!!! PLEASE!!!!! I CANT EVEN WRITE THIS IN A ROMANTIC WAY JUST COME BACK IN MY ARMS NOW.

Sincerely,
Ryan Shahbaba`
  },
  {
   date: "July 12th, 2025",
    text: `Dear Mirabelle Jiang,

I like how particular you are about things. Your scent, your style, even stuff like your nails. I know technically anyone can just spray whatever perfume they want on themselves or any clothes or whatnot but with you, you know exactly which ones to pick. Anyways I miss all those things about you and because you didn’t leave me a shirt or anything and because I’m incredibly down bad. I think one of these days, ima just go down to Macy’s find your perfume and just take some samples with me home because damn I miss your scent. As I am writing this note I am thinking about how down bad this is, but like at this point whatever, I’m a freak for you. I hope things are going good between us right now, because all this downbadness will be very stupid otherwise. ANYWAYS I MISS YOU ASSHOLE COME BACK!!! AND GIVE ME YOUR PERFUME NAME SO I DONT LOOK LIKE AN IDIOT AT MACYS SNIFFING EACH PERFUME TILL I FIND YOURS. I MISS YOUR SCENT :(.

Sincerely,
Ryan Shahbaba`
  },
  {
	date: "July 13th, 2025",
    text: `Dear Mirabelle Jiang,

My girlfriend is gone and everything is worse now. Thats a bojack horseman reference but you haven’t watched that show yet. But you do watch a lot of things/read a lot of things I actually talk about. One of the first times I liked you was when you read that stupid short story I Have No Mouth and I must Scream. When you told me you read that my immediate reaction was like “damn, she did that for me??” And you learning all the Pokemon stuff for my poster. The random statistics references. Everything you do for me always gets me like damn. And now im like damn I miss you. Almost all my notes from now on are gonna be crash out notes. As in FUCK YOU COME BACK PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!! I CANT TAKE IT ANYMORE. :(

Sincerely,
Ryan Shahbaba`
  },
  {
	date: "July 14th, 2025",
    text: `Dear Mirabelle Jiang,

To be frank, my Summer is going to be very dull without you. I enjoy the grind at times, but I’m not gonna sit here and pretend it’s the same level of enjoyment as when I’m with you. It’s weird I’ve become so accustomed to the high I get when I’m with you that I’m afraid I won’t ever enjoy anything to the same level as when I enjoy my time with you. I don’t exactly understand what it is about you that I can’t enjoy with my friends or by myself. Like I enjoy movies, and going out to eat, and just walking around, but I will never enjoy it as much alone or with my friends as I enjoy doing it with you, which is annoying!!! Get out of my head!!! OH MY GOD HOW AM I GONNA LAST THE ENTIRE SUMMER WITHOUT YOU YOU PRICK!!!! Anyways I already know when you come back I'm gonna have the most goated Summer break ever! I just gotta make it till then...

I miss you and your face and your voice and your humor and like everything so much please come back soon :(...

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 15th, 2025",
    text: `Dear Mirabelle Jiang,

In a week it will be your birthday! I have some ideas in mind so I will hopefully have all of them done before your birthday/when you come back! So much to do… I will give you a slight hint for your birthday gifts. Gift 1: Technical gift. Gift 2: Requires time to get. Gift 3: What I am to you. Won’t elaborate on any of these “el oh el” have fun trying to figure out :). Also future Ryan you better lock the fuck in and get these done in time istg… I don’t care how hard it is figure it out you bum. Anyways I miss you Mirabelle :).

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 16th, 2025",
    text: `Dear Mirabelle Jiang,

This one was edited a little after a convo we had. You asked me why I took so long to ask you out officially after my confession. And although the reason I gave you was true, it wasn’t the full truth. I waited until I felt like I could be presentable to your mom. I know that sounds stupid, but I was afraid that if I had nothing to show for my college results to your mom, she wouldn’t approve and I’d lose you. Trying to keep you has always been so important to me, and despite my actions not always showing that, it’s something that constantly swarms my mind. How I can make money, how I can convince my parents to do all the things I wanna do with you, how I can ensure your mom would atleast be somewhat comfortable with you going out with me. One of my biggest fears right now is honestly not living up to all the expectations I place on myself to support you, whether it be emotionally or through other mediums. But that fear is also what motivates me so much, I want you to know no matter what I will work to always be there for you. Even if I get a little awkward or grumpy. You mean a lot to me and I want to make sure you feel secure 24/7. I miss you so much Mirabelle, and I care about you even more.

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 17th, 2025",
    text: `Dear Mirabelle Jiang,

Edited a 2nd time after the edit. I’m kinda stupid, I don’t know if I flipped today and yesterday or my thought process was “it would be the 16th for me when you read this...” Anyways HAPPY 5 MONTHS !!!!! YAYYYYYY. By now I’m sure you know why the password to this website is what it is, but did you know I actually use 216 for a lot of things. Aka every 3, 4, and 6 digit passcode I use. Either 216, 0216, or 216216 (including my new phone password yes). I know it’s kinda stupid but the number is really important to me now, it’s something thats so easy to remember and it’s honestly nice to just be doing something mundane and being reminded of you. Whether im at the gym trying to lock away my AirPods case before a grueling 2-3 hours of working out, or I have to log into my iPad to take notes for what will feel like an eternity. I like having things that remind me of you. I also dont because then I really miss you and I’m like fuck I miss mirabelle and you cant be here to make that better. But whatever its ok, I still have you for now :). Even if I don’t technically have you. COME BACK YOU BUM!!!!

Sincerely,
Ryan Shahbaba`
  },
  {
    date: "July 18th, 2025",
    text: `Dear Future Ryan,

How you doing so far? You two ok? You treating her right? I’ll break your fucking kneecaps if you arnt. I have the power to do that. Are you doing well? Two weeks left bro finish strong (not like that though). You better be doing well. Future Mirabelle should I break his fucking kneecaps? Ryan by now you should have completed almost all your gifts and touch up on the last parts of her digital gift your deadline is soon asshole. Do you miss her? I bet you do. I bet you miss her like a lil bitch you loser? Mirabelle does he miss you like a lil bitch? Anyways I miss you a shit ton Mirabelle come back soon :(

Sincerely,
Ryan Shahbaba`

  },
  {
    date: "July 19th, 2025",
    text: `Dear Mirabelle,

You turn 18 in 3 days... I dont say that to scare you, I think it’s exciting. I know you are scared about the future, but you are already the most mature person I know. You are more than ready for the “real world” and I have so much faith in you. But whenever you feel overwhelmed or wanna act like a child again or just need to decompress, just know you (almost of age) boyfriend will be here for you. I dont want you to always have that wall up where you are strong, I want to be the person you can just make a fuss over anything in front of, crash out over whatever you need to crash out over. I care about you so much and I always wanna be there for you. Got sidetracked there but the idea is you will be such a goat in the future, although there isn’t gonna be any instantaneous change from now until you’re 18, you are gonna do so well I already know. #Future McKinsley employee, or Lawyer, or whatever you wanna be goat! (Also you’ll be a cougar in 3 days ;)…)

Sincerely,
Ryan Shahbaba`},
{
    date: "July 20th, 2025",
    text: `Dear Mirabelle,

Today is Kevin’s birthday. This is me asking you to remind me that in case I forget. 

Anyways! Speaking of Kevin, he was my go to friend when I talked about liking you. And I think he was the most goated wingman (literal man) ive ever had. Because bro really forced me to talk to you and not avoid you. Which yes I shouldn’t have had a wingman for, but like Kevin really helped me make one of the most goated decisions of my life for real… Man I fucking miss you I wish I talked to you more before you left. I miss you asshole fuck!! I’m having a little bit of a hard time thinking about anything romantic or smooth to write I just really miss you idk how im gonna write like 10-15 more of these lol

Sincerely,
Ryan Shahbaba`},
{
    date: "July 21st, 2025",
    text: `Dear future Cougar (joke don't kill me please),

Tomorrow I will be your birthday. Mirabelle’s Eve. The big day. I already wrote one sappy love note on a card that you will open tomorrow, and my note for tomorrow arguably even more sappy. So today I’m gonna write about how much I miss you. (No I’m not being uncreative I just have severe Stockholm syndrome, which by the way fun fact, the name comes from a bank robbery that happened in Sweden’s city “Stockholm.” Stockholm. Stalk home. I wish I could stalk you home, but not in a creepy way, in a lovey dovey way or whatever. I miss you bro I cant even be nonchalant about it. Where are you what are you doing why are you not here by my side. I’m tired. I miss my girlfriend. It’s ok no I dont. Yes I do. RELEASE ME!!! RELEASE ME!!! Anyways come back soon I don’t even know where I’m going with this note I swear ill get more coherent with the rest of them, just this one is my final like for real crash out one because my fucking god I miss you asshole.

Sincerely,
Ryan Shahbaba`},
{
    date: "July 22nd, 2025",
    text: `Dear Birthday Girl,

Rachmaninoff was believed to have dedicated three songs to his wife, Natalie Satina—potentially four according to some websites, but most dispute this belief. Although I am no Rach, and I certainly couldn’t compose a song as beautiful as his Op. 21, No. 7, I have other “artistic” capabilities to which I dedicate to you. When trying to think of how to give you a birthday gift, I couldn’t really think of exactly how to make a more unique one for you, but that was when I realized I could use my math and coding capabilities to hopefully deliver one that could capture your genuine beauty. As you might recall, I asked you to give me three of your favorite photos about a month ago, to which I used one for this gift. I wanted to do more, but I was quickly met with the realization that this was no simple feat. From creating a computer algorithm that could vectorize you—essentially tracing your perfect figure via a machine learning model—to actually using your silhouette to map out how I was going to draw you via math equations, to simply figuring out how to write all 1,160 lines of math equations, this entire project took me over 20 hours, but it was the most fun I’ve ever had working on a project. I really hope you enjoy this gift as much as I got to enjoy looking at your beautiful face the past month while working on it. Without further ado, I’ve attached a link to the final product: “https://www.instagram.com/reel/DMY9w64yPZ-Xa7ZknyoXKDYojkI3sBz5udFQd40/?igsh=MTZ4anVpc2ZlM3VmNQ==”

I miss you so much :)

Sincerely,
Ryan Shahbaba`},
{
    date: "July 23rd, 2025",
    text: `Dear Birthday Girl,

Although your birthday has technically passed in China, you still got an entire day in the US :). So again, HAPPY BIRTHDAY! And as of today, I get to see you in 9 fucking days lets fucking go!!!! I hope we are doing well. And that your birthday was a really fun day, and that you are having a lot of fun in China and you didnt cheat on me yet. Unless it’s with a really rich guy in which case I get half your earnings. Anyways I hope you enjoyed your birthday gift and you’ll enjoy the other ones to come. I worked pretty hard on that (assuming I finished) if I didn’t, future Ryan you are an absolute bum!! Anyways I miss you.

Sincerely,
Ryan Shahbaba`},
{
    date: "July 24th, 2025",
    text: `Dear Birthday Girl,

I pinch myself sometimes. Not because I don’t believe any of this is real, but I miss the feeling of you kinda biting and nibbling on me (and also because I don’t believe any of this is real). Physical touch was never quite something I was prone to growing up. A simple side hug felt uncomfortable for me, people patting my head, shaking my hand at times, or just brushing up against me. But with you all I wanna do is hold you, hold your hand, hold you in my arms, even pick you up. I literally cant stop myself. I want to hug you, something I never really did, I want to feel your lips more your body more I don’t know. To think I went from germaphobic anti touch freak to missing my girlfriend just biting me is absurd. But I miss that and I miss your feeling and I realized how important physical touch is when it’s someone I really care about. And I really care about you. I miss you Mirabelle I can’t wait to hold you.
Sincerely,
Ryan Shahbaba`},
    date: "July 25th, 2025",
    text: `Dear Birthday Girl,
{
You are almost here, a week away I can practically feel it. I can practically feel you. I do very much miss you, you know that? Of course you do. It’s all I’ve been talking about. A week away from finally seeing you in person. I have a really bad feeling I’m gonna get nervous all over again. But I’ll be happy no matter what happens. I hope you’ll be happy too. I’m just kidding I know you will be. I bet your ass misses me too… Loser… (joke dont hurt me). Please come back :(

Sincerely,
Ryan Shahbaba`}
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
