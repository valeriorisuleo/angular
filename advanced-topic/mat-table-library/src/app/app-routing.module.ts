import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/todos/todos.module')
            .then(m => m.TodosModule)
    },
    {
        path: '',
        loadChildren: () => import('./components/posts/posts.module')
            .then(m => m.PostsModule)
    },
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
