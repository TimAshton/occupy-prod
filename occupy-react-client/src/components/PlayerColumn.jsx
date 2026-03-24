export default function PlayerColumn({ name, nameClass }) {
    return (
        <div className="column">
            <div className={`team-header ${nameClass}`}>{ name }</div>
            <div>Settlers: 0000</div>
            <div>Sectors: 0</div>
        </div>
    )
}