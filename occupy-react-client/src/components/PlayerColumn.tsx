export default function PlayerColumn({ 
    name, 
    nameClass, 
    turnIndicator, 
    sectors, 
    player }) {

    return (
        <div className="column">
            <div className={`team-header ${nameClass}`}>{ name }</div>
            <div>Settlers: { JSON.stringify(player.settlers) }</div>
            <div>Sectors: xxx</div>
        </div>
    )
}