import TaskCard from '../../components/TaskCard';
import styles from './Application.module.scss';

const applicationContent = [
    {
        id: 0,
        title: 'Bewerbungsschreiben',
        content: [
            <p>Im Bewerbungsschreiben argumentierst du dafür, warum genau <b>DU</b> die richtige Wahl für die Stelle bist.</p>,
            <p>Hier sind auch einige Vorlagen für deine Bewerbung: . Diese kannst du auch nach B
                , die du auch nach  <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/bewerbungsschreiben/">Bewerbungsportal vom AMS</a> kannst du einen Überblick bekommen, worauf du dabei achten musst oder auch gleich einen <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/generatoren">online erstellen</a></p>,
            <p></p>
        ]
    },
    {
        id: 1,
        title: 'Lebenslauf',
        content: [
            <p>Der Lebenslauf zeigt u.a. die Ausbildung, bisher gesammelte Praxiserfahrungen, weitere Qualifikationen und Hobbies</p>,
            <p>Das <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/lebenslauf/">AMS</a> und <a href="https://www.karriere.at/c/a/lebenslauf">karriere.at</a> bieten dafür hilfreiche Tipps.</p>,
            <p>Auch Vorlagen findest du vom <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/musterbewerbungen">AMS</a> und von <a href="https://www.karriere.at/lp/lebenslauf-vorlagen">karriere.at</a></p>,
            <p>Oder du kannst sie gleich online <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/musterbewerbungen">hier</a> oder <a href="https://www.karriere.at/lp/lebenslauf-anlegen">hier</a> erstellen</p>
        ]
    },
    {
        id: 2,
        title: 'Weiteres',
        content: [
            <ul>
                <li><b>Deckblatt:</b> optional. Inhalt sind Foto, Name und Kontaktinformationen<br/>
                <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/deckblatt-und-foto/">Weitere Infos</a></li>
                <li><b>Motivationsschreiben:</b> optional. Zur genaueren Beschreibung der eigenen Persönlichkeit und Motivation<br/>
                <a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/deckblatt-und-foto/">Weitere Infos</a></li>
                <li><b>Zeugnisse (z.B. Schul- und Praktikumszeugnisse)</b></li>
                <li><b>Arbeitsproben</b></li>
                <li><b>Relevante Zertifikate (z.B. über abgeschlossene Online-Kurse)</b></li>
            </ul>
        ]
    }
];

const Application = () => {
    return <div>
        <div className={styles.container}>
        <h1 style={{textAlign: 'center'}}>Bewerbung</h1>
        <p>Deine Bewerbungsunterlagen sind der <b>Türöffner zum Bewerbungsgespräch</b>.
            Daher solltest du diese <b>sorgfältig und gut strukturiert</b> vorbereiten.</p>
        <p>In diesem Modul findest du Informationen und weiterführende Links zu den folgenden Bestandteilen:</p>
        <ul>
            <li>Bewerbungsschreiben</li>
            <li>Lebenslauf</li>
            <li>Weitere Dokumente (Zeugnisse, Zertifikate etc.)</li>
        </ul>
        <p style={{textAlign: 'center', fontWeight: 'bold' }}><b>Viel Erfolg bei der Vorbereitung!</b></p>
        </div>
        {
            applicationContent.map((item) =>
                <TaskCard title={item.title} content={item.content}/>
            )
        }
    </div>
}

export default Application;