'use client';


export default function RulesPage() {

    return(
        <div>
            <h1>Lucky Draw Rules</h1>
            <p>Rules for participating in the Lucky Draw:</p>
            <ul>
                <li>Participants must be registered users.</li>
                <li>Each user can roll the dice a maximum of 3 times.</li>
                <li>The lucky number is generated randomly between 1 and 10.</li>
                <li>If the lucky number is even, the user wins a prize!</li>
            </ul>
        </div>
    )
}