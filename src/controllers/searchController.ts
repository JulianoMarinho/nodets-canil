import { Request, Response } from 'express';

import { Pet } from '../models/Pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query){
        res.redirect('/');//caso n tenha query, ele volta para pagina inicial
        return; //para parar a execução
    }

    let list = Pet.getFromName(query);//para filtrar e gerar a lista

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    });

}