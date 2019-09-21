export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
export type ActionCreator<Type extends string, Payload> = (payload: Payload) => {type: Type, payload: Payload};
export type EmptyActionCreator<Type extends string> = () => {type: Type};
