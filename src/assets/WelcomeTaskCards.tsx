const WelcomeTaskCards = [
    {
      id: 0,
      title: 'Herzlich Wilkommen!',
      content: [
        <div>
          Du startest also deinen <b>Weg zu einem neuen Lebensabschnitt</b>? 
          Schön, dass wir dich <b>ein Stück begleiten</b> dürfen.
          Große Entscheidungen brauchen viel <b>Aufmerksamkeit</b>, <b>Energie</b> und <b>Mut</b>. 
          Diese Webseite soll dir die Entscheidung <b>erleichtern</b>, 
          was du nach der Pflichtschule machst und dir dabei helfen dieses <b>Ziel zu erreichen</b>.
        </div>,
        <div style={{textAlign: "center"}}><b>Viel Erfolg!</b></div>,
      ]
    },
    {
      id: 1,
      title: 'Anleitung',
      content: [
        <div>
          Mit einem <b>Klick</b> auf das <b>CareerCoach-Logo</b> links oben 
          oder den <b>Home-Button</b> in der Mitte der Fußleiste kommst du immer zurück zur <b>Startseite</b>.
          Dort findest du eine <b>Übersicht über alle Stationen</b>, die wir gemeinsam bearbeiten werden.
        </div>,
        <div>
          Mit einem <b>Klick</b> auf eine der <b>Stationen</b> (z.B. "Lerne dich kennen") kommst du dann auf die <b>Detail-Seite</b>, 
          wo verschiedene <b>Aufgaben oder Informationen</b> auf dich warten - so wie auf dieser Seite. 
          Oft sind auch Links zu anderen hilfreichen Webseiten dabei.
        </div>,
        <div>
          Arbeite die Stationen der Reihe nach durch und starte damit sicher und selbstbewusst in deine Karriere.
        </div>,
      ]
    },
    {
      id: 2,
      title: 'Quiz',
      content: [
        <div>
          Um zu sehen, wie gut du schon über das Thema <b>Berufsorientierung und Bewerbung</b> informiert bist, 
          mach doch dieses <b>kurze Quiz</b> von <b>Rat auf Draht</b>, bevor du zur nächsten Station gehst.
        </div>,
        <a href='https://www.rataufdraht.at/themenubersicht/tests-quiz/bist-du-fit-in-sachen-bewerbung'>
          rataufdraht.at: Bist du fit in Sachen Bewerbung?
        </a>,
      ]
    },
  ];

export default WelcomeTaskCards;