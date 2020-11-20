import { MatPaginatorIntl } from '@angular/material/paginator';

export function customMatPaginatorIntl() {

    const paginator = new MatPaginatorIntl();

    paginator.firstPageLabel = 'Primeira Página';
    paginator.itemsPerPageLabel = 'Itens por Página'
    paginator.lastPageLabel = 'Última Página';
    paginator.nextPageLabel = 'Próxima Página';
    paginator.previousPageLabel = 'Página Anterior';

    return paginator;
}