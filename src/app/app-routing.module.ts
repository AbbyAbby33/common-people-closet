import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // 詳細故事
    path: 'all-story',
    loadChildren: () => import('./layout/all-story/all-story.module').then(m => m.AllStoryModule),
  },
  {
    // 衣物分析
    path: 'cloth-analysis',
    loadChildren: () => import('./layout/cloth-analysis/cloth-analysis.module').then(m => m.ClothAnalysisModule),
  },
  {
    // 隨機搭配
    path: 'random-match',
    loadChildren: () => import('./layout/random-match/random-match.module').then(m => m.RandomMatchModule),
  },
  {
    // 投稿故事
    path: 'share-yours',
    loadChildren: () => import('./layout/share-yours/share-yours.module').then(m => m.ShareYoursModule),
  },
  {
    // 衣物故事
    path: 'cloth-story',
    loadChildren: () => import('./layout/cloth-story/cloth-story.module').then(m => m.ClothStoryModule),
  },
  {
    // 網頁資訊
    path: 'web-info',
    loadChildren: () => import('./layout/web-info/web-info.module').then(m => m.WebInfoModule),
  },
  {
    // 首頁
    path: '',
    loadChildren: () => import('./layout/home/home.module').then(m => m.HomeModule),
  },
  {
    // 暫時404頁面也都導回首頁
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }