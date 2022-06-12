import { Button } from '@mui/material';
import TaskCard from '../../components/TaskCard';
import styles from './Interview.module.scss';

const interviewContent = [
    {
        id: 0,
        title: 'Tipps & Ablauf',
        content: [
            <p><h3><a href="https://karrierebibel.de/vorstellungsgesprach-vorbereitung/">Tipps von Karrierebibel.at</a></h3></p>,
            <ul>
                <li>Überblick über Gesprächsphasen</li>
                <li>Allgemeine Tipps</li>
            </ul>,
            <p><h3><a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/persoenlicher-kontakt/vorbereitung-auf-das-vorstellungsgespraech/">Tipps vom AMS zur Vorbereitung</a></h3></p>,
            <ul>
                <li>Aufbau des Bewerbungsgespräch</li>
                <li>Tipps für das passende Outfit</li>
                <li>Checkliste zur Vorbereitung</li>
            </ul>,
            <p><h3><a href="https://bewerbungsportal.ams.or.at/bewerbungsportal/#!/content/demd/bewerbungstraining-8/persoenlicher-kontakt/vorstellungsgespraech/">Tipps vom AMS für's Gespräch</a></h3></p>,
            <ul>
                <li>Häufig gestellte Fragen im Gespräch</li>
                <li>Tipps zu Körpersprache und Umgang mit unangenehmen Fragen</li>
            </ul>
        ]
    },
    {
        id: 1,
        title: 'Check dein Wissen',
        content: [
            <p>Hier kannst du dein Wissen zum Thema Bewerbungsgespräch in einem kurzen Quiz testen:</p>,
            <Button href='https://www.rataufdraht.at/themenubersicht/tests-quiz/bist-du-fit-furs-bewerbungsgesprach' variant='outlined' color='success' fullWidth={true}>Quiz</Button>
        ]
    }
];

const Interview = () => {
    return <div>
        <div className={styles.container}>
            <h1 style={{textAlign: 'center'}}>Bewerbungsgespräch</h1>
            <p>Wenn du zum Bewerbungsgespräch eingeladen wurdest, dann haben sich deine Vorbereitungen gelohnt - gratuliere!</p>
            <p>In diesem Modul findest du Informationen über den grundsätzlichen <b>Ablauf des Gesprächs</b> und weitere <b>Tipps</b>.</p>
            <p>Zum Abschluss kannst du noch ein kurzes <b>Quiz</b> zu diesem Thema machen, um dein Wissen zu prüfen!</p>
            <p style={{textAlign: 'center', fontWeight: 'bold'}}>Viel Spaß!</p>
        </div>
        {
            interviewContent.map((item) => 
                <TaskCard title={item.title} content={item.content}/>
            )
        }
    </div>
};

export default Interview;