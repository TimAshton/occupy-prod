export default function Sector({sectorClickHandler, sector}) {
    return (
        <div className="box" onClick={() => sectorClickHandler(sector)}></div>
    )
}