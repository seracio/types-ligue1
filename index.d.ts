declare namespace Ligue1 {

    // a time on a match
    interface Time {
        minute: number
        extra?: number
    }

    // a team stat is a particular stat for a given 
    // team on a givem match
    interface TeamStat {
        label: string
        value: string
        matchId: string
        teamId: string
        week: number
        season: string
    }

    // a player stat is a particular stat for a given
    // player on a given match
    interface PlayerStat {
        label: string
        value: string
        matchId: string
        playerId: string
        teamId: string
        week: number
        season: string
    }

    // a player participation on a given match
    interface Participation {
        matchId: string
        playerId: string
        teamId: string
        enter: Time
        exit: Time
        isSubstitute: boolean
        isCaptain: boolean
    }

    interface RawMatch {
        id: string
        homeId: string
        awayId: string
        homeScore: number
        awayScore: number
        homeCoaches: Array<string>
        awayCoaches: Array<string>
        referee: string
        week: number
        season: string
        affluence: number
        temperature: number
    }

    interface Match extends RawMatch {
        date: Date
    }

    interface NetworkMatch extends RawMatch {
        date: string
    }

    interface Team {
        id: string
        label: string
        logo: string
        colors: [string]
    }

    interface Goal {
        matchId: string
        playerId: string
        playerAssistId?: string
        isPenalty: boolean
        isOG: boolean
        time: Time
        index: number
        week: number
        season: string
    }

    interface Card {
        type: 'red' | 'yellow'
        time: Time,
        index: number
        matchId: string
        playerId: string
        week: number
        season: string
    }

    interface RawPlayer {
        id: string
        name: string
        nationality: String
    }

    interface Player extends RawPlayer {
        birthday: Date
    }

    interface NetworkPlayer extends RawPlayer {
        birthday: string
    }

    interface Odd {
        matchId: string
        v: number
        n: number
        d: number
    }

}

export = Ligue1
