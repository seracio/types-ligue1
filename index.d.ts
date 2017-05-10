declare namespace Ligue1 {
    interface TeamStat {
        label: string,
        value: string,
        matchId: string,
        teamId: string,
        week: number,
        season: string
    }

    interface PlayerStat {
        label: string,
        value: string,
        matchId: string,
        playerId: string,
        teamId: string,
        week: number,
        season: string
    }

    interface RawMatch {
        id: string,
        homeId: string,
        awayId: string,
        homeScore: number,
        awayScore: number,
        homeCoaches: Array<string>,
        awayCoaches: Array<string>,
        referee?: string,
        week: number,
        season: string,
        affluence?: number,
        temperature?: number,
        homeTeam: Array<string>,
        awayTeam: Array<string>,
        homeSubsitutes: Array<string>,
        awaySubstitutes: Array<string>
    }

    interface Match extends RawMatch {
        date: Date,
    }

    interface NetworkMatch extends RawMatch {
        date: string,
    }

    interface Team {
        id: string,
        label: string,
        logo?: string
    }

    interface Goal {
        matchId: string,
        playerId: string,
        playerAssistId?: string,
        isPenalty: boolean,
        isOG: boolean,
        time: number,
        extra?: number,
        index: number,
        week: number,
        season: string
    }

    interface Card {
        type: 'red' | 'yellow',
        time: number,
        index: number,
        extra?: number,
        matchId: string,
        playerId: string,
        week: number,
        season: string
    }

    interface RawPlayer {
        id: string,
        name: string,
        nationality: String,
    }

    interface Player extends RawPlayer {
        birthday: Date,
    }

    interface NetworkPlayer extends RawPlayer {
        birthday: string,
    }

    interface Odd {
        matchId: string,
        v: number,
        n: number,
        d: number
    }

    interface Substitution {
        matchId: string,
        playerInId: string,
        playerOutId: string,
        teamId: string,
        time: number,
        extra: number,
        week: number,
        season: string
    }
}

export = Ligue1
