import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePage } from '@app/pages/game/game.page';
import { CreateQuestionComponent } from '@app/pages/game/components/create-question/create-question.component';
import { CreateGameComponent } from '@app/pages/game/components/create-game/create-game.component';

const routes: Routes = [
  {
    path: '',
    component: GamePage,
  },
  {
    path: 'question/create',
    component: CreateQuestionComponent,
  },
  {
    path: 'create',
    component: CreateGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRouterModule {}
