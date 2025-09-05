import '@/app/ui/global.css';

export default function RulesLayout({children}: {children: React.ReactNode}) {

    return (
        <div className="flex m-5"> {children} </div>
    );
}