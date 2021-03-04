import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

interface Session {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  count_items_car: number;
  token: string;
}

@Injectable()
export class SessionClient {
  private router: Router;
  private currentSession: any;

  constructor() {
    this.currentSession = this.loadSessionData();
  }

  public getCurrentSession(): Session {
    return this.currentSession;
  }

  public isAuthenticated(): boolean {
    // tslint:disable-next-line:variable-name
    let current_session: Session;
    current_session = this.getCurrentSession();
    return current_session !== null;

  }

  public removeCurrentSession(): void {
    sessionStorage.removeItem('currentClient');
    this.currentSession = null;
  }

  public logout(): void {
    this.removeCurrentSession();
    window.location.href = '/';
  }

  public registerSession(sesion: Session) {
    this.currentSession = sesion;
    sessionStorage.setItem('currentClient', JSON.stringify(sesion));

  }

  private loadSessionData(): any {
    try {
      const sessionStr = sessionStorage.getItem('currentClient');
      return (sessionStr) ? <SessionClient> JSON.parse(sessionStr) : null;
    } catch (e) {
      return [];
    }


  }
}
