declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      SERVICE_ID: string;
      TEMPLATE_ID: string;
      PUBLIC_ID: string;
    }
  }
}

export {};
