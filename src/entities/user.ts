export interface IIdentity {
    email: string;
    name: string;
} 

export interface IUser extends IIdentity {
    id: number;
}

export interface IRegistration extends IIdentity {
    password: string;
}
