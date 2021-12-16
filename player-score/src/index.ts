import "reflect-metadata";
import { ScoreView } from "./score/score.view";
import { bootstrap } from "./core/views";
import { IScorePlayerService, ScorePlayerService, SCORE_PLAYER_SERVICE } from "./models/services/scoreplayer.service";
import { HttpService, HTTP_SERVICE, IHttpService } from "./models/http.service";
import { Container } from 'inversify';
import { PlayerView } from "./player/player.view";
import { ScorePlayer } from "./models/models";
import { SearchView } from "./search/search.view";

const app = new Container();

app.bind<IHttpService>(HTTP_SERVICE).to(HttpService); // Transient Crea Instances cada que se requiera
app.bind<IScorePlayerService>(SCORE_PLAYER_SERVICE).to(ScorePlayerService); // Transient Una instancia a los largo de toda la application
app.bind<Document>("DOC").toConstantValue(document); // Singleton
app.bind<ScoreView>("SCORE_VIEW").to(ScoreView);
app.bind<PlayerView>("FACTORTY<SCORE_PLAYER>").toFactory(context => {
    return (scorePlayer: ScorePlayer) => new PlayerView(
        context.container.get<Document>("DOC"),
        context.container.get<IHttpService>(HTTP_SERVICE),
        scorePlayer
    );
});
app.bind<SearchView>("FACTORTY<SEARCH_VIEW>").toFactory(context => {
    return (callback: (value: string) => void) => new SearchView(
        context.container.get<Document>("DOC"),
        callback
    );
});

bootstrap(app.get<ScoreView>("SCORE_VIEW"), document.getElementById('root'))
