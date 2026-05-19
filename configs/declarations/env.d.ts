declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'test' | (string & {});
    readonly NEXT_PUBLIC_VAR?: string;
  }
}
