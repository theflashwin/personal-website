import InfiniteMenu from "./InfiniteMenu";

export default function Projects() {

    const items = [
        {
            image: '/projects/rush-app.png',
            link: 'https://github.com/gtakpsi-software-dev/gtakpsi-rush-app',
            title: 'GT AKPsi Rush App',
            description: 'Full-Stack Applicant Tracking System | Rust, AWS, React'
        },
        {
            image: 'projects/git-parrot.png',
            link: 'https://www.gitparrot.ai/',
            title: 'GitParrot',
            description: 'AI-Generated Changelogs | Python, Celery'
        },
        {
            image: 'projects/hangman.webp',
            link: 'https://github.com/theflashwin/HangmanApp',
            title: 'Hangman',
            description: 'Hangman App | Flutter'
        },
        {
            image: 'projects/kac-model.jpeg',
            link: 'https://github.com/theflashwin/kac-model-simulator',
            title: 'Simulator',
            description: 'random stuff with particles | C++'
        },
        {
            image: 'projects/poker-probs.jpeg',
            link: 'https://www.pokerprobs.io/',
            title: 'PokerProbs',
            description: 'Improve Poker Probability Skills | React'
        },
        {
            image: 'projects/llm.jpeg',
            link: 'https://github.com/theflashwin/cs4644-final-project',
            title: 'LLM Tuning',
            description: 'Context Distillation Based Tuning | PyTorch'
        },
    ];

    return <div className="text-white" style={{ height: '100vh', position: 'relative' }}>
        <InfiniteMenu items={items} />
    </div>
}