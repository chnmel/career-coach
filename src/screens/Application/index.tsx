import TaskCard from '../../components/TaskCard';
import styles from './Application.module.scss';

const applicationContent = [
    {
        id: 0,
        title: 'Bewerbungsschreiben',
        content: [
            <p>Im Bewerbungsschreiben argumentierst du dafür, warum <b>DU</b> die richtige Wahl bist.</p>,
            <p>Die folgenden Links geben dir hilfreiche <b>Tipps</b> und zeigen dir den <b>Aufbau</b> - auch mit <b>Beispielen</b>:</p>,
            <a href="https://karrierebibel.de/bewerbungsschreiben/">Karrierebibel</a>,
            <a href="https://www.die-bewerbungsschreiber.at/bewerbungsschreiben">Die Bewerbungsschreiber</a>,
            <a href="https://www.ams.at/arbeitsuchende/topicliste/bewerbungsschreiben-muster">AMS</a>
        ]
    },
    {
        id: 1,
        title: 'Lebenslauf',
        content: [
            <p>Der Lebenslauf zeigt u.a. die Ausbildung, bisher gesammelte Praxiserfahrungen, weitere Qualifikationen und Hobbies</p>,
            <p>Die folgenden Links zeigen dir, wie du als <b>Schüler:in</b> deinen Lebenslauf, sei es für Praktika oder Lehrstelle, aufbauen sollst und geben dir hilfreiche <b>Tipps</b>:</p>,
            <a href="https://www.ams.at/arbeitsuchende/richtig-bewerben/ansprechender-lebenslauf">Aufbau und Tipps für Lebenslauf vom AMS</a>,
            <a href="https://www.karriere.at/c/a/lebenslauf-schueler">Tipps für Lebenslauf für Schüler von karriere.at</a>,
            <a href="https://hokify.at/karriere/bewerbung/lebenslauf-f%C3%BCr-sch%C3%BCler-alle-fragen-und-antworten">Tipps für Lebenslauf für Schüler von hokify.at</a>,
            <a href="https://karrierebibel.de/lebenslauf-schueler/">Tipps für Lebenslauf für Schüler von karrierebibel.de</a>,
            <a href="https://www.mein-studium-karriere.at/bewerbung/bewerbungsunterlagen/lebenslauf/lebenslauf-schueler/">Weitere Tipps für Lebenslauf für Schüler</a>,
            <a href="https://www.lehrstellenportal.at/bewerbung/lebenslauf/?gclid=CjwKCAjw7vuUBhBUEiwAEdu2pMhHWcRSb9hwCwWnJYObKHeSSxS_yRjWAMI0cyCuFjOT8Yi3_PMDLhoC978QAvD_BwE">Lebenslauf für Lehrstellen</a>,
        ]
    },
    {
        id: 2,
        title: 'Weiteres',
        content: [
            <p><b>Deckblatt:</b></p>,
            <ul>
                <li>optional</li>
                <li>Inhalt: Foto, Name, Kontaktinformationen</li>
                <li><a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/deckblatt-und-foto/">Weitere Infos</a></li>
            </ul>,
            <p><b>Motivationsschreiben:</b></p>,
            <ul>
                <li>optional</li>
                <li>Dient zur genaueren Beschreibung der eigenen Persönlichkeit und Motivation</li>
                <li><a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/bewerbungsunterlagen/motivationsschreiben/">Weitere Infos</a></li>
            </ul>,
            <p><b>Zeugnisse (z.B. Schul- und Praktikumszeugnisse)</b></p>,
            <p><b>Arbeitsproben</b></p>,
            <p><b>Zertifikate (z.B. über abgeschlossene Online-Kurse)</b></p>,
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