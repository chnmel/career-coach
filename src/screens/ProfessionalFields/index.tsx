import styles from './ProfessionalFields.module.scss';

const ProfessionalFields = () => {
    let fields = [
        "Bau, Baunebengewerbe, Holz, Gebäudetechnik",
        "Bergbau, Rohstoffe, Glas, Keramik, Stein",
        "Büro, Marketing, Finanz, Recht, Sicherheit",
        "Chemie, Biotechnologie, Lebensmittel, Kunststoffe",
        "Elektrotechnik, Elektronik, Telekommunikation, IT",
        "Handel, Logistik, Verkehr",
        "Landwirtschaft, Gartenbau, Forstwirtschaft",
        "Maschinenbau, Kfz, Metall",
        "Medien, Grafik, Design, Druck, Kunst, Kunsthandwerk",
        "Reinigung, Hausbetreuung, Anlern- und Hilfsberufe",
        "Soziales, Gesundheit, Schönheitspflege",
        "Textil und Bekleidung, Mode, Leder",
        "Tourismus, Gastgewerbe, Freizeit",
        "Umwelt",
        "Wissenschaft, Bildung, Forschung und Entwicklung"
    ];

    return <div className={styles.container}>
        <h1>Berufsfelder</h1>
        <p>Nachdem du dich und dein Interessen im vorherigen Schritt besser kennengelernt hast, erhältst du jetzt einen Überblick über mögliche Berufsfelder:</p>
        <div>
            <ul>
                { fields.map(x => <li>{x}</li>) }
            </ul>
        </div>
        <p>Im <a href="https://www.berufslexikon.at/bereiche-branchen/">AMS-Berufslexikon</a> bekommst du weitere <b>Informationen zu Berufen</b> aus den obenstehenden Bereichen. <br/>Beispielsweise weißt du dann, welche allgemeinen Anforderungen es gibt und welche Ausbildung du dafür benötigst.</p>
        <p>Auch das <a href="https://www.bic.at/berufsgruppen.php">BIC</a> bietet einen Überblick über <b>Berufe</b> und <b>Ausbildungen</b>. Außerdem bekommst du dort z.B. durch Video-Interviews mit bereits Arbeitenden einen besseren Einblick in das Tätigkeitsfeld.</p>
        <p>Suchst du speziell Informationen über Themenfelder in <b>Lehrberufen</b>, dann kann dir <a href="https://www.aubi-plus.at/berufe/themen/">AUBI-plus</a> mit Infos weiterhelfen!</p>
        <p style={{textAlign: 'center', fontWeight: 'bold' }}><b>Viel Spaß beim Durchstöbern!</b></p>
    </div>
}

export default ProfessionalFields;