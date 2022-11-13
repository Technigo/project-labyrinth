Viktor: 0737208154
Nina: 0703024857

# ArbetsLogg:
# Tisdag 
kväll,Nina:
-Filen funkade fint för mig att jobba i och pusha till master.

-jag har ändrat i filerna så att det skall fungera bättre för vårt projekt men togglat ut det som är "lektions kod" så den är kvar ifall du vill hänga med på torsdag.

lagt in en kommentar // ----SC----- på alla kompnenter nedanför själva funktionen så att alla styled components (SC) hamnar på samma ställe. Jag föredrar SC efter själva funktionen.

-Alla componenter som hör till "lektionen" har jag nangett i slutet med CA för codealong.

-skapat en ny component StartScreen som i mitt Todo-project.

-flyttat ut GlobalStyling till scr

-lagt  in min startState/SelectStart componenter och togglet ut hur min App.js ser ut och funkar.

-gjort en tillfällig data mapp med en url-fil inehåller info från instruktionerna ang projectet.

-jag fick inte Postman att funka....

# Onsdag
Nina kväll:

-fått API i postman att funka.
-ska skapa uniqId som i todo tydligen.

-huddle med Viktor 

-StartPage
-SelectPage

-Skapat componenten GamePage.js, 
-lagt in "borders" i wrappers/containers för att veta vad som är vad.

-skickat bilder i slack ang spelkonsol och tv.


--------------------------------------------

# Torsdag
Viktor morgon-dag-kväll:

-fokus på att få spelet att funka
 -gamepage -> 
  - och om tid finns få Loading att funka

-fick spelet att funka, vi kan gå vidare med ex NORTH 
-gjorde knappar som funkar som 
 - de visas enbart om de går att trycka på i spelet. ex North + East

- fick loading att funka 
 - force installerade Lottie, då funkade det

-ladde in tv stylingen i gamepage så att allt visas i en tv
-gjorde en kontroll för att se ungefär hur det skulle vara

# Fredag 
Nina Kväll:

- Jobbat i Illustrator med bilder
- justerat react-dom till CreateRoot i index.js
- Efter att Linda och Tika haft problem med deploy via Netlify så har jag gjort några ändringar: unintall Ract-Lottie och kollat så Lottie-react funkar.
  även ändrat lite i koden samt kört en npm inatall react-prop-types

-försökt få in consollen på position.

# Lördag

Nina och Viktor

css massa strul
-knappar på rätt position över nes-consoll
-positionering av datorskärm och speltext

-restart knapp vid spelets slut.

senkväll Nina:

-vet att det ser lite rörigt ut men jag har fått det att funka 
  Hoppen är vid ca 370px, 420px, 500px, 550px och till slut 668px
  @media ipad 820x1180
  @media desktop 2560x1600
-Kopierade in script så riktningarna blev ändrade från East - E osv.
-kom på att vi kanske hade haft det lättare om vi skapat ett grid istället för flex på bild vs text....lätt att vz efterklok!

-tagit bort alla "borders"

-startat på ReadMe, 
--------------------------------------------
API info:
<!-- // https://labyrinth.technigo.io/start

// request body:

// {
//   username: "TechnigoPlayer"
// }

// Responce:
// Description + actions

// continue;
// https://labyrinth.technigo.io/action

// {
//   username: "TechnigoPlayer",
//   type: "move",
//   direction: "East"
// }

// recive respons:
// new description and new set of actions -->

--------------------------------------------
# Frågeställningar:


# Att Göra Lista: Söndag
- kolla accessability etc?
- kolla förklaringar i koden, lägga till/ ta bort.
- uppdatera ReadMe
- Deploy/Pull request
- skicka länkar till nina =)

kolla @media vad du vill ha "påslaget" under presentationen
jag har gått efter Responsive app. (se ovan arbetslogg)

<!-- start design for mobile,
for tablet and Desktop add:
@media (min-width: 667px) {
    blablabla;
    } -->
-------------------------------
Projekt Kod kvar:
<!-- -Unique id byta ut mot kordinater
- möjligtvis använda kordinaterna för att byta bakgrundsbild  

 - (om tid finns) som loadas i skärmen enbart när spelet är igång-->
# flyttat till "Done" =)
-Startsida: 
  *form/lable/input type "text" usernamne
  *onChange event = setUserNameInput
  *Button: onClick {setName} start game

-Thunk fetch technigo API 
-få loader att fungera =)

-skapa :root font samt colors
-Lägga in fonter i html samt i body

-Loader pixled green loader bar

-fått action att funka och man kan spela spelet
-fått loading att funka

-Fonternas storlek i tv (eller göra tv större?)

-spelkontroll som ser ut som en spelkontroll

-Loader annan bakgrunds färg: svart, annann färg på animationen?

-fixat @media



Styling kod är det som är mest kvar av:
-color scheem
-bakgrundsbild
-spelkonsol

- avslutnings sida: hurra du vann! och en restart knapp ala quiz/survey?


