import promptSync from 'prompt-sync';
const prompt = promptSync();

// BUG -> You can challenge your own sectors.
// FIX -> Have user re-choice target sector if they own current choice.

export default class Game {
    constructor() {
        this.turnIndicator = 0
        this.status = true

        this.players = [
            {
                id: 1,
                name: "Player One",
                settlers: 1000
            },
            {
                id: 2,
                name: "Player Two",
                settlers: 1000
            }
        ]

        this.sectors = [
            this.createSector(1,1),
            this.createSector(2,1),
            this.createSector(1,2),
            this.createSector(2,2)
        ]

        this.gameLoop()
    }

    createSector(x,y) {
        return {
            x,
            y,
            owner: "",
            settlerCount: 0,
        }
    }

    getSector(x, y) {
        return this.sectors.find(s => s.x === Number(x) && s.y === Number(y))
    }

    takeTurn() {
        const player = this.players[this.turnIndicator]

        // TODO: Validate input.
        const target_sector = prompt(`${player.name}, Target a sector (x,y): `).split(',');
        const sector = this.getSector(target_sector[0], target_sector[1])

        if(!sector){
            console.log("INVALID")
            this.takeTurn()
        } else {
            if(sector.settlerCount === 0) {
                const settler_count = prompt(`How many settlers (${player.settlers})? `)
                if(settler_count > 0) {
                    sector.settlerCount = Number(settler_count)
                    player.settlers = player.settlers - settler_count
                    sector.owner = player.id
                }
            } else {
                const action = prompt('Occupied, will you challenge? ')
                if(action === "y"){
                    const settler_count = prompt(`How many settlers (${player.settlers})? `)
                    if(settler_count > sector.settlerCount) {
                        console.log("Victory.")
                        // Not DRY
                        player.settlers = player.settlers + sector.settlerCount
                        console.log(`You have gained ${sector.settlerCount} settlers.`)

                        const new_settlers = prompt(`How many settlers (${player.settlers})? `)
                        sector.settlerCount = Number(new_settlers)
                        
                        player.settlers = player.settlers - new_settlers
                        sector.owner = player.id
                    } else if(settler_count === sector.settlerCount) {
                        console.log("Tie. No Change.")
                    } 
                    else {
                        console.log("Defeat.")
                        player.settlers = player.settlers - settler_count
                    }
                }
            }

            // End game conditions:
            // all sectors are occupied
            if(prompt(`End game? `) === 'y') {
                this.endGame()
            }        

            if(this.turnIndicator == 1){
                this.turnIndicator = 0
            } else {
                this.turnIndicator = 1
            }

            console.log(this)


        }
    }

    gameLoop() {
        let runGame = true

        while(runGame) {
            this.takeTurn()
            if(!this.status) {
                this.endGame()
                runGame = false
            }
        }
    }

    endGame() {
        this.status = false

        // TODO -> Count each players sectors.

        // This thought is incomplete. When to end?
        // * All sqrs full?
        // * player has 0 settlers.
        // * Both players has 0 settlers?
    }
}
