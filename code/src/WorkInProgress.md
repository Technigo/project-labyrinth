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


--------------------------------------------

# Frågeställningar:
-vad ska spelet heta, ska projectet döpas?
-ska vi ha en karta som visar vart man befinner sig i spelet?

-hur får man till "fil-historia", är de det som händer med POST istället för GET?

-skall vi stoppa url'n i en separat datafill med namngedd url?

-ska vi ha en avslutnings sida: hurra du vann! och en restart knapp alal quiz/survey?

- använda kordinaterna för unique id !!

-Loader annan bakgrunds färg? nu är den vit? annann färg på animationen?

# Att Göra Lista:
Info:
start design for mobile,
for tablet and Desktop add:
@media (min-width: 667px) {
    blablabla;
    }
-------------------------------
Projektet Kod kvar:
-Unique id byta ut mot kordinater
- möjligtvis använda kordinaterna för att byta bakgrundsbild 

Styling kod är det som är mest kvar av:
-color scheem
-bakgrundsbild
-spelkonsol

-Fonternas storlek i tv (eller göra tv större?)

-spelkontroll som ser ut som en spelkontroll

-Loader annan bakgrunds färg? nu är den vit, annann färg på animationen?
 - (om tid finns) som loadas i skärmen enbart när spelet är igång


-accessability etc

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



