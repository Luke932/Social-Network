export interface AuthData {
    token: string;
    utente: {
      id: string;
      username:string;
      nome: string;
      cognome: string;
      eta: number;
      email: string;
      password: string;
      /*ruolo: {
        nome: string;
        ruolo_admin: boolean;
        ruolo_user: boolean;
      }*/
    }
  }