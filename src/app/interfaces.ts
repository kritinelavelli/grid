export enum Role {
  VPEngineering = 'vp-engineering',
  UXDirector = 'ux-director',
  UXManager = 'ux-manager',
  UXDesigner = 'ux-designer',
  UXEngineer = 'uz-engineer',
  SummerIntern = 'summer-intern'
}

export interface IUser {
  header: string;
  body: string;
  role: Role;
  id: string;
}