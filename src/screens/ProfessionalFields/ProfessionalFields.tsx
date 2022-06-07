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
        <span>Hier findest du eine Übersicht über mögliche Berufsfelder.</span>
        <div>
            <ul>
                { fields.map(x => <li>{x}</li>) }
            </ul>
        </div>
        <span>Im <a href="https://www.berufslexikon.at/bereiche-branchen/">AMS-Berufslexikon</a> kannst du Berufe in den jeweiligen Berufsfeldern durchstöbern</span>
    </div>
}

export default ProfessionalFields;