import { Utente } from "./utente.interface";

export interface Post{
   id?:string;
   titolo:string;
   pathImg:string;
   descrizione:string;
   dataPost:Date;
   u:Utente;
}