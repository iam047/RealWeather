import { NavigationParams } from 'react-navigation';

export type AnyFunction = (...args: any[]) => any;

export enum ApiMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

export interface ICurrentRoute {
    key: string;
    routeName: string;
    params?: NavigationParams;
}
